// eslint-disable-next-line
const globals = self;
// setup nodejs compatible require paths
globals.Honey = {'requirePath': ['..']}; // walk up to js folder
globals.importScripts("/js/lib/require.js", "/js/lib/prompto.core.bundle.js");

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
    var context = globals.librariesContext.clone();
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
    const data = message.data;
    const context = globals.librariesContext.clone();
    console.log("Running sample...")
    const decls = parse(data.content, data.dialect);
    decls.register(context);
    const testName = null;
    decls.forEach(decl => {
        if(decl instanceof prompto.declaration.TestMethodDeclaration)
            testName = decl.name;
    });
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

const dispatch = {
    translate : translate,
    execute : execute
};

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


// create global context with pre-loaded libraries
globals.librariesContext = prompto.runtime.Context.newGlobalContext();

loadText("/prompto/prompto.pec", code => {
    let decls = parse(code, "E");
    decls.register(globals.librariesContext);
    // remove the original "print" method
    const decl = { name: "print" };
    globals.librariesContext.unregisterMethodDeclaration(decl, "any");
    // replace "print" with a custom "print" method
    code = String.raw`native method print ( any value ) { JavaScript: console.log(value.toString()); }`;
    decls = parse(code, "O");
    decls.register(globals.librariesContext);
});



