// setup nodejs compatible require paths
Honey = {'requirePath': ['..']}; // walk up to js folder
importScripts("../lib/require.js");
// only load prompto once require is loaded
importScripts("../lib/prompto.bundle.js");

function loadText(url, success) {
    var xhr = new XMLHttpRequest();
    xhr.onerror = function(e) {
        self.console.log("Error " + e.target.status + " occurred while receiving the document.");
        return null;
    };
    xhr.onload = function(e) {
        success(xhr.responseText);
    };
    xhr.open('GET', url);
    if(url[0]!="/" && url[0]!=".")
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send(null);
};

// create global context
var librariesContext = prompto.runtime.Context.newGlobalContext();
loadText("../../prompto/prompto.pec", function(code) {
    var decls = parse(code, "E");
    decls.register(this.librariesContext);
    // remove the original "print" method
    var decl = { name: "print" };
    this.librariesContext.unregisterMethodDeclaration(decl,"any");
    // replace "print" with a custom "print" method
    code = "native method print ( any value ) { JavaScript: console.log(value.toString()); }"
    decls = parse(code, "O");
    decls.register(this.librariesContext);

});


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
    var context = this.librariesContext.newChildContext();
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
    var context = this.librariesContext.newChildContext();
    console.log("Running sample...")
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
