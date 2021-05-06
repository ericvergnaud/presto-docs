export default class PromptData {

    constructor() {
        this.clear();
    }

    handleInput(content, cursorIdx) {
        this.beforeCursor = content.substring(0, cursorIdx);
        this.afterCursor = content.substring(cursorIdx, content.length);
    }

    setValue(value) {
        this.beforeCursor = value;
        this.afterCursor = '';
    }

    getValue() {
        return this.beforeCursor + this.afterCursor;
    }

    clearLine() {
        this.beforeCursor = '';
        this.afterCursor = '';
    }

    clear() {
        this.linesBefore = [];
        this.indentLevel = 0;
        this.beforeCursor = '';
        this.afterCursor = '';
    }

    indent() {
        this.indentLevel += 1;
    }

    dedent() {
        this.indentLevel -= 1;
    }

    addLine(value) {
        this.linesBefore.push("\t".repeat(this.indentLevel) + value);
    }

    allLines() {
        return this.linesBefore.join("\n");
    }

    clearLines() {
        this.linesBefore = [];
    }
}
