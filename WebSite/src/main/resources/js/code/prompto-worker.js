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
}

// create global context with pre-loaded libraries
var librariesContext = prompto.runtime.Context.newGlobalContext();
loadText("../../prompto/prompto.pec", function(code) {
    var decls = parse(code, "E");
    decls.register(this.librariesContext);
    // remove the original "print" method
    var decl = { name: "print" };
    this.librariesContext.unregisterMethodDeclaration(decl,"any");
    // replace "print" with a custom "print" method
    code = "native method print ( any value ) { JavaScript: console.log(value.toString()); }";
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
    // parse incoming code
    var data = message.data;
    var context = this.librariesContext.clone();
    var decls = parse(data.content, data.from);
    decls.register(context);
    // translate it
    var dialect = prompto.parser.Dialect[data.to];
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
    // parse incoming code
    var data = message.data;
    var context = this.librariesContext.clone();
    console.log("Running sample...")
    var decls = parse(data.content, data.dialect);
    decls.register(context);
    var testName = null;
    decls.map(function(decl) { if(decl instanceof prompto.declaration.TestMethodDeclaration) testName = decl.name;});
    // run "main" method, using fresh store
    prompto.store.DataStore.instance = new prompto.memstore.MemStore();
    if(testName)
        prompto.runtime.Interpreter.interpretTest(context, testName);
    else
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
