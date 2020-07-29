const request = require('request');

// 请填写无忧代理订单号
var order = 'please-input-your-order-here';
// 要测试的网址
var targetURL = 'http://pv.sohu.com/cityjson?ie=utf-8';
// 请求超时时间
var timeout = 8000;

var apiURL =
    'http://api.ip.data5u.com/dynamic/get.html?order=' + order + '&sep=3';

function getProxyList() {
    return new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: apiURL,
            gzip: true,
            encoding: null,
            headers: {},
        };

        request(options, function(error, response, body) {
            try {
                if (error) throw error;
                var ret = (body + '').match(
                    /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}:\d{1,5}/g,
                );
                resolve(['113.195.232.87']);
            } catch (e) {
                return reject(e);
            }
        });
    });
}

export function execute() {
    getProxyList()
        .then(function(proxyList: any) {
            var targetOptions: any = {
                method: 'GET',
                url: targetURL,
                timeout: timeout,
                encoding: null,
            };

            proxyList.forEach(function(proxyurl) {
                console.log(`* testing `);
                var startTimestamp = new Date().valueOf();
                targetOptions.proxy = 'http://' + proxyurl;
                request(targetOptions, function(error, response, body) {
                    try {
                        if (error) throw error;
                        body = body.toString();
                        var endTimestamp = new Date().valueOf();
                        console.log(
                            '  > time ' +
                                (endTimestamp - startTimestamp) +
                                'ms ' +
                                body,
                        );
                    } catch (e) {
                        console.error(e);
                    }
                });
            });
        })
        .catch(e => {
            console.log(e);
        });
}
