const proxy = require('http-proxy-middleware');

const SERVER_RESOURCES_ROOT_URL = "file://‎~/Development⁩ ▸ ⁨prompto⁩/Server/src/main/resources/";

module.exports = function(app) {
    app.use("/js/lib", proxy(SERVER_RESOURCES_ROOT_URL + 'js/lib'));
};

