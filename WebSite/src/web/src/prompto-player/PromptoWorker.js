// eslint-disable-next-line
const globals = self;
// setup nodejs compatible require paths
globals.Honey = {'requirePath': ['..']}; // walk up to js folder
globals.importScripts("/js/lib/require.js", "/js/lib/prompto.core.bundle.js");

const prompto = globals.prompto;

function loadText(url, success) {
    var xhr = new XMLHttpRequest();
    xhr.onerror = function(e) {
        console.log("Error " + e.target.status + " occurred while receiving the document.");
        return null;
    };
    xhr.onload = function(e) {
        success(xhr.responseText);
    };
    xhr.open('GET', url);
    if(url[0]!=="/" && url[0]!==".")
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send(null);
}

// parse prompto code
function parse(content, dialect) {
    const klass = prompto.parser[dialect + "CleverParser"];
    const parser = new klass(content);
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
                toStdOut: text
            }
        });
    };
    console.error = function(text) {
        postMessage({
            inResponseTo: message.id,
            keepHandlerAlive: true,
            data: {
                toStdErr: text
            }
        });
    };
    // parse incoming code
    const data = message.data;
    const context = globals.librariesContext.clone();
    console.log("Running sample...\n")
    const decls = parse(data.content, data.dialect);
    decls.register(context);
    let testName = null;
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
        toStdOut: "Success!\n"
    };
};

function repl(message) {
    const klass = prompto.parser[message.data.dialect + "CleverParser"];
    const parser = new klass(message.data.input);
    parser.removeErrorListeners();
    parser.addErrorListener(new prompto.problem.ProblemListener());
    try {
        const thing = parser.parse_repl_input();
        if (thing instanceof prompto.declaration.Declaration) {
            thing.register(globals.replContext);
            return {toStdOut: "Registered " + thing.name};
        } else if (thing.interpret) {
            const value = thing.interpret(globals.replContext);
            if (value)
                return {toStdOut: value.toString()};
            else
                return {toStdOut: "<void>"};qdqsd
        } else {
            return {toStdErr: "Unsupported:" + message.data.input};
        }
    } catch(error) {
        return {
            toStdErr: error.message
        };
    }
}

function resetRepl(message) {
    globals.replContext = globals.librariesContext.newLocalContext();
    return { toStdOut: "<ok>" };
}

function showRepl(message) {
    const items = [];
    var dialect = prompto.parser.Dialect[message.data.dialect];
    for(var name in globals.replContext.declarations) {
        const decl = globals.replContext.declarations[name];
        const decls = decl instanceof prompto.runtime.MethodDeclarationMap ?
            decl.getAll() :
            [ decl ];
        decls.forEach(d => {
            const writer = new prompto.utils.CodeWriter(dialect, globals.replContext);
            d.toDialect(writer);
            items.push(writer.toString());
        });
    }
    for(var name in globals.replContext.values) {
        const value = globals.replContext.values[name];
        items.push(name + ": " + value.toString());
    }
    if(items.length > 0)
        return { items: items };
    else
        return { toStdOut: "<context is empty>", items: [] };
}


const dispatch = {
    translate : translate,
    execute : execute,
    resetRepl: resetRepl,
    showRepl: showRepl,
    repl: repl
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
resetRepl();

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



