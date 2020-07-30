const request = require('request');

export function proxy(options) {
    return new Promise((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) {
                return reject(error);
            }

            resolve(body);
        });
    });
}
