/*eslint-disable no-alert, no-console */
import 'brace/mode/text';
import PromptoHighlightRules from './PromptoHighlightRules';

export default class PromptoMode extends window.ace.acequire("ace/mode/text")
    .Mode {

    constructor(editor) {
        super();
        this.$id = "ace/mode/prompto";
        this.$editor = editor;
        this.$dialect = "E";
        this.HighlightRules = PromptoHighlightRules;
    }

    getDialect() {
        return this.$dialect;
    }

    setDialect(dialect) {
        this.$dialect = dialect;
    }

}