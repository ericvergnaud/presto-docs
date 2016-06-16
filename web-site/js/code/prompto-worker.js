// setup nodejs compatible require paths
Honey = {'requirePath': ['..']}; // walk up to js folder
importScripts("../lib/require.js");
// only load prompto once require is loaded
importScripts("../lib/prompto.bundle.js");


// manage events
onmessage = function(event) {
    var message = event.data;
    var handler = dispatch[message.verb];
    var data = handler(message);
    var response = {
        inResponseTo : message.id,
        data : data
    };
    postMessage(response);
};

// parse prompto code
function parse(content, dialect) {
    var klass = prompto.parser[dialect + "CleverParser"];
    var parser = new klass(content);
    return parser.parse();
}

// translate code to dialect
function translate(message) {
    var data = message.data;
    var decls = parse(data.content, data.from);
    var dialect = prompto.parser.Dialect[data.to];
    var context = prompto.runtime.Context.newGlobalContext();
    var writer = new prompto.utils.CodeWriter(dialect, context);
    decls.toDialect(writer);
    return {
        translated: writer.toString()
    };
};


// execute code in dialect
function execute(message) {
    // manage output
    console.log = function(text) {
        postMessage({
            inResponseTo: message.id,
            keepHandlerAlive: true,
            data: {
                toPrint: text
            }
        });
    };
    // execute code
    var data = message.data;
    var context = prompto.runtime.Context.newGlobalContext();
    console.log("Running sample...")
    // need a "print" method
    var printCode = "native method print ( any value ) { JavaScript: console.log(value.toString()); }"
    decls = parse(printCode, "O");
    decls.register(context);
    // parse incoming code
    var decls = parse(data.content, data.dialect);
    decls.register(context);
    // run "main" method
    prompto.runtime.Interpreter.interpret(context, "main", "");
    // done
    return {
        toPrint: "Success!"
    };
};

var dispatch = {
    translate : translate,
    execute : execute
};
