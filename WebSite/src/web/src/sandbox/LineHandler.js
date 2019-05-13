import PROMPTO_WORKER from '../prompto-player/PromptoWorkerListener';

export default class LineHandler {

    static forDialect(dialect) {
        const klass = LineHandler.dialectHandlers[dialect];
        return new klass();
    }

    constructor() {
        this.instructions = [
            {pattern: /help/g, handler: this.printHelp, doc: "help: print this"},
            {pattern: /\?/g, handler: this.printHelp, doc: "?: print this"},
            {pattern: /clear/g, handler: this.clear, doc: "clear: clear screen"},
            {pattern: /show/g, handler: this.showAll, doc: "show: show all declarations and variables"},
            {pattern: /delete (.*)/g, handler: this.deleteOne, doc: "delete x: clear variable x"},
            {pattern: /reset/g, handler: this.reset, doc: "reset: clear data"},
            {
                pattern: /dialect [e|E|o|O|m|M]/g,
                handler: this.switchDialect,
                doc: "dialect E, M or O: switch to said dialect"
            }
        ];
    }

    evaluate(promptValue, promptData, promptHistory, displayHistory, callback) {
        let handler = this.collectMultiLine(promptValue, promptData, promptHistory, displayHistory, callback);
        if (handler)
            return handler;
        handler = this.handleEmptyLine(promptValue, promptData, promptHistory, displayHistory, callback);
        if (handler)
            return handler;
        handler = this.executeInstruction(promptValue, promptData, promptHistory, displayHistory, callback);
        if (handler)
            return handler;
        handler = this.interpretPrompto(promptValue, promptData, promptHistory, displayHistory, callback);
        if (handler)
            return handler;
        else
            return this; // never return null handler
    }

    handleEmptyLine(promptValue, promptData, promptHistory, displayHistory, callback) {
        if (promptValue.length === 0) {
            displayHistory.push({type: 'input', data: ""});
            callback();
            return this;
        } else
            return null;
    }

    executeInstruction(promptValue, promptData, promptHistory, displayHistory, callback) {
        const s = promptValue.trim().toLowerCase();
        const instruction = this.instructions.find(i => s.match(i.pattern));
        if (instruction) {
            const result = instruction.handler.bind(this)(promptValue, promptData, promptHistory, displayHistory, callback);
            return result || this;
        } else
            return null;
    }

    printHelp(promptValue, promptData, promptHistory, displayHistory, callback) {
        const promptItem = {type: 'input', data: promptValue};
        promptHistory.push(promptItem);
        displayHistory.push(promptItem);
        let data = this.instructions.map(i => i.doc);
        data.push("( currently using dialect: " + this.dialect + " )");
        data = data.map(s => {
            return {type: 'welcome', data: s};
        });
        displayHistory.push(data);
        callback();
    }

    clear(promptValue, promptData, promptHistory, displayHistory, callback) {
        promptData.clear();
        promptHistory.clear();
        displayHistory.clear();
        callback();
    }

    showAll(promptValue, promptData, promptHistory, displayHistory, callback) {
        PROMPTO_WORKER.showRepl(this.dialect, (out, err, items) => {
            const promptItem = {type: 'input', data: promptValue};
            promptHistory.push(promptItem);
            displayHistory.push(promptItem);
            if (out)
                displayHistory.push({type: 'response', data: out});
            items.forEach(item => displayHistory.push({type: 'response', data: item}));
            callback();
        });
    }

    deleteOne(promptValue, promptData, promptHistory, displayHistory, callback) {
        const name = promptValue.trim().substring("delete ".length);
        PROMPTO_WORKER.deleteRepl(name, (out, err) => {
            const promptItem = {type: 'input', data: promptValue};
            promptHistory.push(promptItem);
            if (out)
                displayHistory.push([promptItem, {type: 'response', data: out}]);
            else if (err)
                displayHistory.push([promptItem, {type: 'error', data: err}]);
            callback();
        });
    }

    reset(promptValue, promptData, promptHistory, displayHistory, callback) {
        PROMPTO_WORKER.resetRepl(() => {
            const promptItem = {type: 'input', data: promptValue};
            promptHistory.push(promptItem);
            displayHistory.push([promptItem, {type: 'welcome', data: "All data has been deleted"}]);
            callback();
        });
    }

    switchDialect(promptValue, promptData, promptHistory, displayHistory, callback) {
        const promptItem = {type: 'input', data: promptValue};
        promptHistory.push(promptItem);
        displayHistory.push(promptItem);
        promptValue = promptValue.substring("dialect ".length);
        const dialect = promptValue.length ? promptValue.substring(promptValue.length - 1).toUpperCase() : "";
        if (new Set(["E", "O", "M"]).has(dialect)) {
            displayHistory.push({type: 'welcome', data: "Using dialect: " + dialect});
            callback();
            return LineHandler.forDialect(dialect);
        } else {
            displayHistory.push({type: 'error', data: "No such dialect: " + dialect});
            callback();
            return this;
        }
    }

    interpretPrompto(promptValue, promptData, promptHistory, displayHistory, callback) {
        PROMPTO_WORKER.repl(promptValue, this.dialect, (out, err) => {
            const promptItem = {type: 'input', data: promptValue};
            promptHistory.push(promptItem);
            if (out)
                displayHistory.push([promptItem, {type: 'response', data: out}]);
            else if (err)
                displayHistory.push([promptItem, {type: 'error', data: err}]);
            callback();
        });
    }

    interpretPromptoML(input, promptData, promptHistory, displayHistory, callback) {
        PROMPTO_WORKER.repl(input, this.dialect, (out, err) => {
            if (out)
                displayHistory.push({type: 'response', data: out});
            else if (err)
                displayHistory.push({type: 'error', data: err});
            callback();
        });
    }

}


class MLineHandler extends LineHandler {

    constructor() {
        super();
        this.dialect = "M";
    }

    collectMultiLine(promptValue, promptData, promptHistory, displayHistory, callback) {
        if (promptValue.trim().endsWith(":")) {
            const promptItem = {type: 'input', data: promptValue, indentLevel: promptData.indentLevel};
            promptHistory.push(promptItem);
            displayHistory.push(promptItem);
            promptData.addLine(promptValue);
            promptData.indent();
            callback();
            return this;
        } else if (promptData.indentLevel > 0) {
            const promptItem = {type: 'input', data: promptValue, indentLevel: promptData.indentLevel};
            promptHistory.push(promptItem);
            displayHistory.push(promptItem);
            promptData.addLine(promptValue);
            callback();
            return this;
        } else if (promptValue.length === 0 && promptData.linesBefore.length > 0) {
            const input = promptData.allLines();
            promptData.clearLines();
            this.interpretPromptoML(input, promptData, promptHistory, displayHistory, callback);
            return this;
        } else
            return null;
    }

}

// eslint-disable-next-line
class ELineHandler extends MLineHandler {

    constructor() {
        super();
        this.dialect = "E";
    }

    // E and M dialects have the same indentation rules so no collectMultiLine override


}

// eslint-disable-next-line
class OLineHandler extends LineHandler {

    constructor() {
        super();
        this.dialect = "O";
    }

    collectMultiLine(promptValue, promptData, promptHistory, displayHistory, callback) {
        if (promptValue.trim().endsWith("{")) {
            const promptItem = {type: 'input', data: promptValue, indentLevel: promptData.indentLevel};
            promptHistory.push(promptItem);
            displayHistory.push(promptItem);
            promptData.addLine(promptValue);
            promptData.indent();
            callback();
            return this;
        } else if (promptData.indentLevel > 0) {
            const promptItem = {type: 'input', data: promptValue, indentLevel: promptData.indentLevel};
            promptHistory.push(promptItem);
            displayHistory.push(promptItem);
            promptData.addLine(promptValue);
            callback();
            return this;
        } else if (promptValue === "}" && promptData.linesBefore.length > 0) {
            const promptItem = {type: 'input', data: promptValue, indentLevel: promptData.indentLevel};
            promptHistory.push(promptItem);
            displayHistory.push(promptItem);
            promptData.addLine(promptValue);
            const input = promptData.allLines();
            promptData.clearLines();
            this.interpretPromptoML(input, promptData, promptHistory, displayHistory, callback);
            return this;
        } else
            return null;
    }

}


LineHandler.dialectHandlers = {
    "M": MLineHandler,
    "E": ELineHandler,
    "O": OLineHandler
};