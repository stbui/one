import "reflect-metadata";
import { RouteDefinition } from "./RouteDefinition";

import http from "http";
import url from "url";

export const Proxy = (option): MethodDecorator => {
  return (target, propertyKey: string): void => {};
};

export const Request = (req, res) => {
  var u = url.parse(req.url);
  var options = {
    hostname: u.hostname,
    port: u.port || 80,
    path: u.path,
    method: req.method,
    headers: req.headers,
  };
  var pReq = http
    .request(options, (pRes) => {
      res.writeHead(pRes.statusCode, pRes.headers);
      pRes.pipe(res);
    })
    .on("error", (e) => {
      res.end();
    });
  req.pipe(pReq);
};
