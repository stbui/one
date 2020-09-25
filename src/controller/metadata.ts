// const request = require('request');
// const { stringify } = require('query-string');
// const { proxy } = require('../config');

// // 过度期
// //   {
// //     "/api/metadata": {
// //         "target": "https://seraph.zhonganinfo.com/api/metadata",
// //         "logLevel": "debug",
// //         "changeOrigin": true,
// //         "pathRewrite": {
// //             "^/api/metadata": ""
// //         },
// //         "context": "/api/metadata"
// //     }
// // }

// module.exports = (app) => {
//   const url = proxy['/api/metadata'].target;

//   app.get('/kanban/myapp', (req, res, next) => {
//     const { page, perPage, ...rest } = req.query;

//     const query = {
//       pageNum: page,
//       pageSize: perPage,
//       ...rest,
//     };

//     request(
//       {
//         url: `${url}/v1/app/getMyApprovedApp?${stringify(query)}`,
//         method: 'GET',
//         headers: {
//           Cookie: req.header('Cookie'),
//         },
//       },
//       (error, response, body) => {
//         if (response.statusCode === 200) {
//           const data = JSON.parse(response.body);

//           let result = { code: data.code, message: data.message, data: data.result, metadata: { url, method: 'GET', query } };
//           if (data.code === '0') {
//             const newData = data.result.map(d => ({
//               ...d,
//               id: d.project_id,
//               owner: JSON.parse(d.owner),
//               contact: JSON.parse(d.contact),
//               follower_list: JSON.parse(d.follower_list),
//             }));

//             result = { code: 0, message: '操作成功', data: newData, metadata: { url, method: 'GET', query } };
//           }

//           return res.status(response.statusCode).json(result);
//         }

//         return res.status(response.statusCode).json({ status: 500, message: '系统异常', data: {} });
//       },
//     );
//   });

//   app.get('/custome/usable', (req, res, next) => {
//     const { page, perPage, ...rest } = req.query;

//     const query = {
//       pageNum: page,
//       pageSize: perPage,
//       ...rest,
//     };

//     request(
//       {
//         url: `${url}/v1/app/getMyApprovedApp?${stringify(query)}`,
//         method: 'GET',
//         headers: {
//           Cookie: req.header('Cookie'),
//         },
//       },
//       (error, response, body) => {
//         if (response.statusCode === 200) {
//           const data = JSON.parse(response.body);

//           let result = { code: data.code, message: data.message, data: data.result, metadata: { url, method: 'GET', query } };
//           if (data.code === '0') {
//             const newData = data.result.map(d => ({
//               ...d,
//               id: d.project_id,
//               owner: JSON.parse(d.owner),
//               contact: JSON.parse(d.contact),
//               follower_list: JSON.parse(d.follower_list),
//             }));

//             result = { code: 0, message: '操作成功', data: newData, metadata: { url, method: 'GET', query } };
//           }

//           return res.status(response.statusCode).json(result);
//         }

//         return res.status(response.statusCode).json({ status: 500, message: '系统异常', data: {} });
//       },
//     );
//   });

//   app.post('/custome/usable', (req, res, next) => {
//     const { page, perPage, ...rest } = req.query;

//     const query = {
//       pageNum: page,
//       pageSize: perPage,
//       ...rest,
//     };

//     request(
//       {
//         url: `${url}/v1/app/getMyApprovedApp?${stringify(query)}`,
//         method: 'GET',
//         headers: {
//           Cookie: req.header('Cookie'),
//         },
//       },
//       (error, response, body) => {
//         if (response.statusCode === 200) {
//           const data = JSON.parse(response.body);

//           let result = { code: data.code, message: data.message, data: data.result, metadata: { url, method: 'GET', query } };
//           if (data.code === '0') {
//             const newData = data.result.map(d => ({
//               ...d,
//               id: d.project_id,
//               owner: JSON.parse(d.owner),
//               contact: JSON.parse(d.contact),
//               follower_list: JSON.parse(d.follower_list),
//             }));

//             result = { code: 0, message: '操作成功', data: newData, metadata: { url, method: 'GET', query } };
//           }

//           return res.status(response.statusCode).json(result);
//         }

//         return res.status(response.statusCode).json({ status: 500, message: '系统异常', data: {} });
//       },
//     );
//   });

//   app.put('/custome/usable', (req, res, next) => {
//     const { page, perPage, ...rest } = req.query;

//     const query = {
//       pageNum: page,
//       pageSize: perPage,
//       ...rest,
//     };

//     request(
//       {
//         url: `${url}/v1/app/getMyApprovedApp?${stringify(query)}`,
//         method: 'GET',
//         headers: {
//           Cookie: req.header('Cookie'),
//         },
//       },
//       (error, response, body) => {
//         if (response.statusCode === 200) {
//           const data = JSON.parse(response.body);

//           let result = { code: data.code, message: data.message, data: data.result, metadata: { url, method: 'GET', query } };
//           if (data.code === '0') {
//             const newData = data.result.map(d => ({
//               ...d,
//               id: d.project_id,
//               owner: JSON.parse(d.owner),
//               contact: JSON.parse(d.contact),
//               follower_list: JSON.parse(d.follower_list),
//             }));

//             result = { code: 0, message: '操作成功', data: newData, metadata: { url, method: 'GET', query } };
//           }

//           return res.status(response.statusCode).json(result);
//         }

//         return res.status(response.statusCode).json({ status: 500, message: '系统异常', data: {} });
//       },
//     );
//   });

//   app.delete('/custome/usable', (req, res, next) => {
//     const { page, perPage, ...rest } = req.query;

//     const query = {
//       pageNum: page,
//       pageSize: perPage,
//       ...rest,
//     };

//     request(
//       {
//         url: `${url}/v1/app/getMyApprovedApp?${stringify(query)}`,
//         method: 'GET',
//         headers: {
//           Cookie: req.header('Cookie'),
//         },
//       },
//       (error, response, body) => {
//         if (response.statusCode === 200) {
//           const data = JSON.parse(response.body);

//           let result = { code: data.code, message: data.message, data: data.result, metadata: { url, method: 'GET', query } };
//           if (data.code === '0') {
//             const newData = data.result.map(d => ({
//               ...d,
//               id: d.project_id,
//               owner: JSON.parse(d.owner),
//               contact: JSON.parse(d.contact),
//               follower_list: JSON.parse(d.follower_list),
//             }));

//             result = { code: 0, message: '操作成功', data: newData, metadata: { url, method: 'GET', query } };
//           }

//           return res.status(response.statusCode).json(result);
//         }

//         return res.status(response.statusCode).json({ status: 500, message: '系统异常', data: {} });
//       },
//     );
//   });
// };

// const http = require('http');
// const url = require('url');
// const request = require('request');

// const low = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');
// const adapter = new FileSync('db.json');
// const db = low(adapter);
// const querystring = require('querystring');

// function gateway(req, res, options) {
//     // var u = url.parse(req.url);

//     // const options = {
//     //     // protocol:'https:',
//     //     hostname: 'seraph-pfe-monitor.test.za-tech.net',
//     //     path: '/api/jonsnow/v1/api/getRoles' + u.search,
//     //     // port: 8080,
//     //     // method: 'get',
//     //     headers: {
//     //         Cookie: req.get('cookie'),
//     //     },
//     // };

//     const sReq = http
//         .request(options, sRes => {
//             Object.keys(sRes.headers).forEach(function(key) {
//                 res.setHeader(key, sRes.headers[key]);
//             });

//             res.writeHead(sRes.statusCode);

//             // sRes.on('data', chunk => {
//             //     console.log(`响应主体: ${chunk}`);
//             // });

//             sRes.pipe(res);
//         })
//         .on('error', error => {
//             res.json({ message: error.message });
//         });

//     sReq.write('{"sort":{"field":"id","order":"ASC"},"user":"za-wangming001","pageNation":{"currentPage":1,"pageSize":10}}');
//     req.pipe(sReq);
//     sReq.end();
// }

// module.exports = app => {
//     const apis = db.get('api').value();

    // apis.map(api => {
    //     app.get(api.requestConfig.path, (req, res) => {
    //         var u = url.parse(req.url);

    //         let query = querystring.parse(u.query);
    //         let newQuery = querystring.parse(u.query);
    //         api.serviceParameters.map(param => {
    //             newQuery[param.name] = query[param.relevantRequestParameterName];
    //             delete newQuery[param.relevantRequestParameterName];
    //         });

    //         newQuery = '?' + querystring.stringify(newQuery);

    //         const post_data = querystring.stringify(newQuery);

    //         const options = {
    //             hostname: api.serviceConfig.url,
    //             path: api.serviceConfig.path + newQuery,
    //             method: api.serviceConfig.method,
    //             headers: {
    //                 Cookie: req.get('cookie'),
    //                 'Content-Type': 'application/json',
    //                 // 'Content-Length': Buffer.byteLength(post_data),
    //             },
    //         };

    //         gateway(req, res, options);
    //     });
    // });

    // apis.map(api => {
    //     const method = api.requestConfig.method.toLowerCase();
    //     app[method](api.requestConfig.path, (req, res) => {
    //         var u = url.parse(req.url);

    //         let query = querystring.parse(u.query);
    //         let newQuery = querystring.parse(u.query);
    //         api.serviceParameters.map(param => {
    //             const value = query[param.relevantRequestParameterName];
    //             if (value) {
    //                 newQuery[param.name] = query[param.relevantRequestParameterName];
    //                 delete newQuery[param.relevantRequestParameterName];
    //             }
    //         });

    //         newQuery = Object.keys(newQuery).length ? '?' + querystring.stringify(newQuery) : '';

    //         console.log(`http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`);

    //         request({
    //             url: `http://${api.serviceConfig.url}${api.serviceConfig.path}${newQuery}`,
    //             method: api.serviceConfig.method,
    //             body: JSON.stringify(req.body),
    //             headers: {
    //                 cookie: req.get('cookie'),
    //                 'Content-Type': 'application/json',
    //             },
    //         }).pipe(res);
    //     });
    // });

    // app.get('/api/jonsnow/v1/api/getRoles', (req, res) => {
    //     var u = url.parse(req.url);

    //     const options = {
    //         // protocol:'https:',
    //         hostname: 'seraph-pfe-monitor.test.za-tech.net',
    //         path: '/api/jonsnow/v1/api/getRoles' + u.search,
    //         // port: 8080,
    //         // method: 'get',
    //         headers: {
    //             Cookie: req.get('cookie'),
    //         },
    //     };
    //     gateway(req, res, options);
    // });

    // app.get('/api/jonsnow/v1/api/getRoles', (req, res, next) => {
    //     request({
    //         url: 'http://seraph-pfe-monitor.test.za-tech.net/api/jonsnow/v1/api/getRoles?service=seraph&loginName=za-wangming001',
    //         headers: {
    //             cookie: req.get('cookie'),
    //         },
    //     }).pipe(res);
    // });
// };
