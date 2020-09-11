"use strict";
// const url = require('url');
// const request = require('request');
// const querystring = require('querystring');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');
// const adapter = new FileSync('./db.json');
// const db = low(adapter);
// module.exports = app => {
//     // app.use(bodyParser.json());
//     const apis = db.get('api').value();
//     apis.map(api => {
//         const method = api.requestConfig.method.toLowerCase();
//         app[method](api.requestConfig.path, (req, res) => {
//             var u = url.parse(req.url);
//             let query = querystring.parse(u.query);
//             let newQuery = querystring.parse(u.query);
//             api.serviceParameters.map(param => {
//                 const value = query[param.relevantRequestParameterName];
//                 if (value) {
//                     newQuery[param.name] = query[param.relevantRequestParameterName];
//                     delete newQuery[param.relevantRequestParameterName];
//                 }
//             });
//             newQuery = Object.keys(newQuery).length ? '?' + querystring.stringify(newQuery) : '';
//             console.log(`http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`);
//             request({
//                 url: `http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`,
//                 method: api.serviceConfig.method,
//                 body: JSON.stringify(req.body),
//                 headers: {
//                     cookie: req.get('cookie'),
//                     'Content-Type': 'application/json',
//                 },
//             }).pipe(res);
//         });
//     });
//     app.get('/gateway', (req, res, next) => {
//         const apis = db.get('api').value();
//         res.json(apis);
//     });
//     app.post('/gateway', (req, res) => {
//         const body = req.body;
//         body.createdTime = new Date().toJSON();
//         body.modifiedTime = new Date().toJSON();
//         body.id =
//             Math.random()
//                 .toString(36)
//                 .substring(2) + Date.now().toString(36);
//         db.get('api')
//             .push(body)
//             .write();
//         res.json({ code: 0 });
//     });
//     app.get('/gateway/:id', (req, res) => {
//         const apis = db
//             .get('api')
//             .find(req.params)
//             .value();
//         res.json(apis);
//     });
//     app.put('/gateway/:id', (req, res) => {
//         // db.update('api', n => {}).write();
//         const body = req.body;
//         body.modifiedTime = new Date().toJSON();
//         db.get('api')
//             .find(req.params)
//             .assign(body)
//             .write();
//         res.json({ code: 0 });
//     });
//     app.delete('/gateway/:id', (req, res) => {
//         db.get('api')
//             .remove({ id: req.params.id })
//             .write();
//         res.json({ code: 0 });
//     });
// };
//# sourceMappingURL=gateway.js.map