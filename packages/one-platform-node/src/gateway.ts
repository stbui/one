// import * as request from "request";
// import { stringify } from "query-string";

// import { api } from "./db.json";

// export function G(app) {
//   api.map((api) => {
//     const requestMethod = api.requestConfig.method.toLowerCase();

//     app[requestMethod](api.requestConfig.path, (req, res) => {
//       if (requestMethod === "get") {
//         const query = req.query;

//         const aa = {};
//         api.requestParameters
//           .filter((p) => query[p.name])
//           .map((p) => {
//             aa[p.name] = query[p.name];
//           });

//         const bb = {};
//         api.serviceParameters.forEach((p) => {
//           bb[p.name] = aa[p.relevantRequestParameterName];
//         });

//         const newQuery = "?" + stringify(bb);

//         const url = `http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`;

//         console.log(url);

//         request({
//           url,
//           method: api.serviceConfig.method,
//           headers: {
//             cookie: req.get("cookie"),
//             "Content-Type": "application/json",
//           },
//         }).pipe(res);
//       }
//     });
//   });
// }
