import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CrudService } from '../common/crud/crud.service';

import { CrawlerEntity } from './crawler.entity';
import { Crawler_TOKEN } from './crawler.constants';
import { execute } from './proxy';

const request = require('request');

// 测试次数
var testTime = 5;
// 间隔多少毫秒调用一次接口
var sleepTime = 500;

@Injectable()
export class CrawlerService extends CrudService<CrawlerEntity> {
    location = {
        host: 'h5.zuifuli.com',
        origin: 'https://ehr.zuifuli.com',
        pathname: '/v1/attendance/record/getAttendRecordById',
        port: '',
        protocol: 'https:',
        search: '?recordeId=1183227042372460545',
    };

    constructor(
        @Inject(Crawler_TOKEN)
        protected readonly repository: Repository<CrawlerEntity>,
    ) {
        super();
    }

    login(data) {
        const options = {
            url: 'https://o2o.yesmywine.com/topapi/',
            method: 'POST',
            body: JSON.stringify({
                account: data.account,
                vcode: data.vcode,
                sms_code: '2',
                origin: 1,
                tag_type: null,
                format: 'json',
                v: 'v1',
                method: 'user.vue.login',
            }),
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (iPhone CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A404 ifuli/2.7.0',
            },
        };

        return new Promise((resolve, reject) => {
            request(options, (error, response, body) => {
                if (error) {
                    return reject(error);
                }

                resolve(body);
            });
        });
    }

    zuifuli() {
        const options = {
            url: 'https://o2o.yesmywine.com/topapi/',
            method: 'POST',
            body: JSON.stringify({
                format: 'json',
                v: 'v1',
                method: 'user.vue.login',
            }),
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (iPhone CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A404 ifuli/2.7.0',
            },
        };

        return new Promise((resolve, reject) => {
            request(options, (error, response, body) => {
                if (error) {
                    return reject(error);
                }

                resolve(body);
            });
        });
    }

    execute() {
        const options = {
            url:
                this.location.origin +
                this.location.pathname +
                this.location.search,
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (iPhone CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A404 ifuli/2.7.0',
                Cookie:
                    'za_itid=dP9X5NfaSt8R7NrLfn+KIq/zauZQqqPxecRDpBb87D45+zoiDR/B+KFFPEdcqXjJA/YwK4i5hZipV4WObLV4ig==;',
            },
        };

        return new Promise((resolve, reject) => {
            request(options, (error, response, body) => {
                if (error) {
                    return reject(error);
                }

                resolve(body);
            });
        });
    }

    proxy() {
        const interval = setInterval(() => {
            if (testTime > 0) {
                this.zuifuli();
            } else {
                clearInterval(interval);
            }

            testTime = testTime - 1;
        }, sleepTime);
    }
}
