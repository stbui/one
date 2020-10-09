"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G = void 0;
const request = require("request");
const query_string_1 = require("query-string");
const db_json_1 = require("./db.json");
function G(app) {
    db_json_1.api.map((api) => {
        const requestMethod = api.requestConfig.method.toLowerCase();
        app[requestMethod](api.requestConfig.path, (req, res) => {
            if (requestMethod === "get") {
                const query = req.query;
                const aa = {};
                api.requestParameters
                    .filter((p) => query[p.name])
                    .map((p) => {
                    aa[p.name] = query[p.name];
                });
                const bb = {};
                api.serviceParameters.forEach((p) => {
                    bb[p.name] = aa[p.relevantRequestParameterName];
                });
                const newQuery = "?" + query_string_1.stringify(bb);
                const url = `http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`;
                console.log(url);
                request({
                    url,
                    method: api.serviceConfig.method,
                    headers: {
                        cookie: req.get("cookie"),
                        "Content-Type": "application/json",
                    },
                }).pipe(res);
            }
        });
    });
}
exports.G = G;
//# sourceMappingURL=gateway.js.map