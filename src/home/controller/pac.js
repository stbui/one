'use strict';

import Base from './base.js';
import net from 'net';
import http from 'http';
import url from 'url';
// import request from 'request';

let proxyStatus = false;
export default class extends Base {
    /**
     * IE代理pac脚本
     * @return JSON []
     * */
    async indexAction() {
        let port = this.config('port');
        let host = this.config('host');

        //
        if (proxyStatus == false) {
            // this.pac();
            this.tcpserverAction();
            // this.testAction();
            proxyStatus = true;
        }


        let content = `if() return "DIRECT"`;

        let pacContent = `function FindProxyForURL(url, host){return "PROXY ${host}:${port}";}`;
        this.end(pacContent);
    }

    /*
     * 打开代理服务
     * */
    tcpserverAction() {
        console.log('tcp')
        let server = net.createServer(function (socket) {
            // console.log('server connection');
            // socket.write('server success');
            // //socket.pipe(socket);
            // socket.on('data', function (data) {
            //     console.log('server print:', data.toString());
            // });
            let options = {
                host:'127.0.0.1',
                port:'1080'
            };

            let cNet = net.createConnection(options);
            socket.pipe(cNet);
            cNet.pipe(socket);

        });

        server.listen(8124, function () {
            console.log('server listen');
        });

        return this.json('server listen');
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

    testAction() {
        var LOCAL_PORT  = 8124;
        var REMOTE_PORT = 1080;
        var REMOTE_ADDR = "127.0.0.1";

        var server = net.createServer(function (socket) {
            socket.on('data', function (msg) {
                console.log('  ** START **');
                console.log('<< From client to proxy ', msg.toString());
                var serviceSocket = new net.Socket();
                serviceSocket.connect(parseInt(REMOTE_PORT), REMOTE_ADDR, function () {
                    console.log('>> From proxy to remote', msg.toString());
                    serviceSocket.write(msg);
                });
                serviceSocket.on("data", function (data) {
                    console.log('<< From remote to proxy', data.toString());
                    socket.write(data);
                    console.log('>> From proxy to client', data.toString());
                });
            });
        });

        server.listen(LOCAL_PORT);
        console.log("TCP server accepting connection on port: " + LOCAL_PORT);
    }

    pac() {
        http.createServer()
            .on('request', this.request.bind(this))
            .on('connect', this.connect.bind(this))
            .listen(this.config('port'), '0.0.0.0');
    }

    request(cReq, cRes) {
        let u = url.parse(cReq.url);
        // let userHost = this.getUserHosts(u.hostname);

        let options = {
            hostname: u.hostname,
            // hostname: userHost,
            port: u.port || 80,
            path: u.path,
            method: cReq.method,
            headers: cReq.headers
        };

        console.log(cReq.url);

        let pReq = http.request(options, function (pRes) {
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

    getUserHosts(hostname) {
        let host = '';

        return hostname;
    }
}