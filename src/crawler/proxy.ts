const request = require('request');

export function httpRequest(options) {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                return reject(error);
            }

            resolve(JSON.parse(body));
        });
    });
}

export class Schedule {
    timeout: NodeJS.Timeout;
    interval: number = 500;
    status: 'start' | 'stop';

    taskCallback: Function;

    constructor(taskCallback) {
        this.taskCallback = taskCallback;
    }

    task() {
        if (this.status === 'start') {
            clearInterval(this.timeout);
            this.timeout = setInterval(() => {
                this.taskCallback();
            }, this.interval);
        } else if (this.status === 'stop') {
            clearInterval(this.timeout);
        }
    }

    start() {
        this.status = 'start';
        this.task();

        return this;
    }

    stop() {
        this.status = 'stop';
        this.task();
    }
}

// const schedule = new Schedule(() => {
//     console.log('执行请求');
//     const options = {
//         url: 'https://o2o.yesmywine.com/topapi/',
//         method: 'POST',
//         body: JSON.stringify({
//             account: 1,
//             vcode: null,
//             sms_code: 1,
//             origin: 1,
//             tag_type: null,
//             format: 'json',
//             v: 'v1',
//             method: 'user.vue.login',
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//             'User-Agent':
//                 'Mozilla/5.0 (iPhone CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A404 ifuli/2.7.0',
//         },
//     };
//     http(options).then(res => {
//         console.log(res);
//     });
// });

// schedule.start();
