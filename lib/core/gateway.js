"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G = void 0;
const request = require("request");
const db_json_1 = require("./db.json");
function G(app) {
    db_json_1.api.map((api) => {
        const requestMethod = api.requestConfig.method.toLowerCase();
        app[requestMethod](api.requestConfig.path, (req, res) => {
            if (requestMethod === "get") {
                const newQuery = "?companyId=79002&proposer=za-wangming001";
                console.log(`http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`);
                request({
                    url: `http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`,
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