import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
const request = require('request');

const config = {
    url: 'https://ehr.zuifuli.com',
    headers: {
        'User-Agent':
            'Mozilla/5.0 (iPhone CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A404 ifuli/2.7.0',
    },
};

export class CrawlerProxyMiddleware implements NestMiddleware {
    constructor() {}

    use(req: Request, res: Response) {
        const options = {
            url: config.url + req.url,
            method: req.method,
            body: req.method === 'POST' ? req.body : undefined,
            headers: config.headers,
        };

        request(options, (error, response, body) => {
            if (error) {
                res.send(error);
            }

            res.send(body);
        });
    }
}
