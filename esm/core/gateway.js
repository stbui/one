import url from "url";
import request from "request";
import querystring from "querystring";
import * as lowdb from "lowdb";
import * as FileSync from "lowdb/adapters/FileSync";
const adapter = new FileSync("./db.json");
const db = lowdb(adapter);
export function G(app) {
    const apis = db.get("api").value();
    apis.map((api) => {
        const requestMethod = api.requestConfig.method.toLowerCase();
        app[requestMethod](api.requestConfig.path, (req, res) => {
            var u = url.parse(req.url);
            let query = querystring.parse(u.query);
            let newQuery = querystring.parse(u.query);
            api.serviceParameters.map((param) => {
                const value = query[param.relevantRequestParameterName];
                if (value) {
                    newQuery[param.name] = query[param.relevantRequestParameterName];
                    delete newQuery[param.relevantRequestParameterName];
                }
            });
            newQuery = Object.keys(newQuery).length
                ? "?" + querystring.stringify(newQuery)
                : "";
            console.log(`http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`);
            request({
                url: `http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`,
                method: api.serviceConfig.method,
                body: JSON.stringify(req.body),
                headers: {
                    cookie: req.get("cookie"),
                    "Content-Type": "application/json",
                },
            }).pipe(res);
        });
    });
}
//# sourceMappingURL=gateway.js.map