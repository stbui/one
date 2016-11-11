'use strict';

import Base from './base.js';
import net from 'net';
import http from 'http';
import url from 'url';
// import request from 'request';

export default class extends Base {
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display();
    }

    /**
     * IE代理pac脚本
     * @return JSON []
     * */
    async pacAction() {
        let port = this.config('port');
        let host = this.config('host');

        let content = `if() return "DIRECT"`;

        let pacContent = `function FindProxyForURL(url, host){return "PROXY ${host}:${port}";}`;
        this.end(pacContent);
    }

    /*
     * 打开代理服务
     * */
    tcpserverAction() {
        let server = net.createServer(function (socket) {
            console.log('server connection');

            socket.write('server success');
            //socket.pipe(socket);

            socket.on('data', function (data) {
                console.log('server print:', data.toString());
            });

        });

        server.listen(8124, function () {
            console.log('server listen');
        });

    }

    tcpclientAction() {
        let client = net.connect({port: 8124}, function () {
            console.log('client connected');
            client.write('client success');
        });

        client.on('data', function (data) {
            console.log('data:', data.toString());
            client.end();
        });

        client.on('end', function () {
            console.log('client disconnection');
        })
    }

    pac() {
        http.createServer()
            .on('request', this.request.bind(this))
            .on('connect', this.connect.bind(this))
            .listen(config.port, '0.0.0.0');
    }

    request(cReq, cRes) {
        let u = url.parse(cReq.url);
        // let userHost = this.getUserHosts(u.hostname);

        var options = {
            hostname: u.hostname,
            // hostname: userHost,
            port: u.port || 80,
            path: u.path,
            method: cReq.method,
            headers: cReq.headers
        };

        var pReq = http.request(options, function (pRes) {
            cRes.writeHead(pRes.statusCode, pRes.headers);
            pRes.pipe(cRes);
        }).on('error', function (e) {
            cRes.end();
        });

        cReq.pipe(pReq);
    }

    connect(cReq, cSock) {
        var u = url.parse('http://' + cReq.url);

        var pSock = net.connect(u.port, u.hostname, function () {
            cSock.write('HTTP/1.1 200 Connection Established\r\n\r\n');
            // cSock.on('data', function (chunk) {
            //    console.log(chunk.toString());
            // });
            pSock.pipe(cSock);
        }).on('error', function (e) {
            cSock.end();
        });

        cSock.pipe(pSock);
    }
}