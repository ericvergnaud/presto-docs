// setup nodejs compatible require paths
Honey = {'requirePath': ['..']}; // walk up to js folder
importScripts("../lib/require.js");
// only load prompto once require is loaded
importScripts("../lib/prompto.bundle.js");

// manage events
onmessage = function(event) {
    var message = event.data;
    var handler = dispatch[message.type];
    var data = handler(message.data);
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
function translate(data) {
    var decls = parse(data.content, data.from);
    var dialect = prompto.parser.Dialect[data.to];
    var context = prompto.runtime.Context.newGlobalContext();
    var writer = new prompto.utils.CodeWriter(dialect, context);
    decls.toDialect(writer);
    return {
        translated: writer.toString()
    };
};

var dispatch = {
    translate : translate
};
