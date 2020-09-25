import * as request from "request";

import { api } from "./db.json";

export function G(app) {
  api.map((api) => {
    const requestMethod = api.requestConfig.method.toLowerCase();

    app[requestMethod](api.requestConfig.path, (req, res) => {
      // console.log(1, req.protocol, req.hostname, req.url);
      // const u = url.parse(req.url);

      // let query = querystring.parse(u.query);
      // let newQuery: any = querystring.parse(u.query);

      // api.serviceParameters.map((param) => {
      //   const value = query[param.relevantRequestParameterName];
      //   if (value) {
      //     newQuery[param.name] = query[param.relevantRequestParameterName];
      //     delete newQuery[param.relevantRequestParameterName];
      //   }
      // });

      // newQuery = Object.keys(newQuery).length
      //   ? "?" + querystring.stringify(newQuery)
      //   : "";

      if (requestMethod === "get") {
        const newQuery = "?";

        console.log(
          `http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`
        );
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
