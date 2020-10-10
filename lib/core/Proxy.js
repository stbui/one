"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = exports.Proxy = void 0;
require("reflect-metadata");
const http_1 = require("http");
const url_1 = require("url");
exports.Proxy = (option) => {
    return (target, propertyKey) => { };
};
exports.Request = (req, res) => {
    var u = url_1.default.parse(req.url);
    var options = {
        hostname: u.hostname,
        port: u.port || 80,
        path: u.path,
        method: req.method,
        headers: req.headers,
    };
    var pReq = http_1.default
        .request(options, (pRes) => {
        res.writeHead(pRes.statusCode, pRes.headers);
        pRes.pipe(res);
    })
        .on("error", (e) => {
        res.end();
    });
    req.pipe(pReq);
};
//# sourceMappingURL=Proxy.js.map