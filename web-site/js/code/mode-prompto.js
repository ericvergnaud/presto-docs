ace.define('ace/mode/prompto_highlight_rules',["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {

    var oop = require("ace/lib/oop");
    var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

    var PromptoHighlightRules = function() {

        var controls = (
            "always|case|catch|default|do|each|else|except|finally|for|from|if|" +
            "on|otherwise|raise|return|switch|throw|to|try|with|when|where|while"
        );

        var types = (
            "Java|C#|Python2|Python3|JavaScript|Swift|Any|Blob|Boolean|Character|Text|" +
            "Image|Integer|Decimal|Date|Time|DateTime|Period|Method|Code|Document|" +
            "attr|attribute|attributes|bindings|enum|category|class|getter|" +
            "method|methods|operator|resource|setter|singleton|test"
        );

        var modifiers = (
            "abstract|enumerated|extends|mutable|native|sorted|storable"
        );

        var operators = (
            "and|in|is|modulo|not|or"
        );

        var other = (
            "all|any|as|contains|def|define|doing|expecting|" +
            "index|matching|receiving|returning|verifying"
        );

        var functions = (
            "write|read|close|open|execute|invoke|pass|fetch|flush|store"
        );

        var constants = (
            "True|true|False|false|None|Nothing|nothing|null|self|this"
        );

        var keywordMapper = this.createKeywordMapper({
            "keyword.control": controls,
            "keyword.operator": operators,
            "keyword.other": other,
            "storage.type": types,
            "storage.modifier": modifiers,
            "support.function": functions,
            "constant.language": constants
        }, "identifier");


        this.$rules = {
            "start": [
                {
                    token : "comment",
                    regex : "\\/\\/.*\\n"
                },
                {
                    token : "string", // text literal
                    regex : '["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'
                },
                {
                    token : "string", // date, time, character...
                    regex : "['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"
                },
                {
                    token: keywordMapper,
                    regex: "C#|[a-zA-Z][a-zA-Z0-9]*\\b"
                },
                {
                    token : "constant.numeric", // hex
                    regex : "0[xX][0-9a-fA-F]+\\b"
                },
                {
                    token: "constant.numeric", // float
                    regex: "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
                },
                {
                    token : "keyword.operator",
                    regex : "!|%|\\\\|/|\\*|\\-|\\+|~=|==|<>|!=|<=|>=|=|<|>|&&|\\|\\|"
                },
                {
                    token : "punctuation.operator",
                    regex : "\\?|\\:|\\,|\\;|\\."
                },
                {
                    token : "paren.lparen",
                    regex : "[[({]"
                },
                {
                    token : "paren.rparen",
                    regex : "[\\])}]"
                },
                {
                    token : "text",
                    regex : "\\s+"
                }
            ]
        };

    };

    oop.inherits(PromptoHighlightRules, TextHighlightRules);

    exports.PromptoHighlightRules = PromptoHighlightRules;
});

ace.define('ace/mode/prompto',["require","exports","module","ace/range","ace/lib/oop","ace/mode/text","ace/mode/prompto_highlight_rules","ace/worker/worker_client"], function(require, exports, module) {

    var oop = require("ace/lib/oop");
    var TextMode = require("ace/mode/text").Mode;
    var PromptoHighlightRules = require("ace/mode/prompto_highlight_rules").PromptoHighlightRules;
    var Range = ace.require("ace/range").Range;

    var Mode = function() {
        this.HighlightRules = PromptoHighlightRules;
    };
    oop.inherits(Mode, TextMode);

    (function() {

        this.getDialect = function() {
            return this.$dialect;
        };

        this.setDialect = function(dialect) {
            this.$dialect = dialect;
        };

        this.$id = "ace/mode/prompto";

    }).call(Mode.prototype);

    exports.Mode = Mode;
});

