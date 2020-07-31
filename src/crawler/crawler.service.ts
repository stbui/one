import { Injectable, Inject, HttpService, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CrudService } from '../common/crud/crud.service';

import { CrawlerEntity } from './crawler.entity';
import { Crawler_TOKEN } from './crawler.constants';

const request = require('request');
import { Schedule } from './proxy';

@Injectable()
export class CrawlerService extends CrudService<CrawlerEntity> {
    private readonly logger = new Logger(CrawlerService.name);

    constructor(
        @Inject(Crawler_TOKEN)
        protected readonly repository: Repository<CrawlerEntity>,
        private readonly httpService: HttpService,
    ) {
        super();
    }

    mock() {
        return [
            {
                serviceId: 1,
                serviceName: 'metadata',
                serviceDesc: 'metadata',
                id: '1',
                apiDesc: '',
                apiName: 'metadata',
                createdTime: '2017-08-07T00:00:00Z',
                modifiedTime: '2017-08-07T00:00:00Z',
                requestConfig: {
                    path: '/api/topapi',
                    method: 'GET',
                },
                requestParameters: [
                    {
                        name: 'usename',
                        in: 'QUERY',
                        type: 'String',
                        defaultValue: '',
                        required: 'True',
                        desc: '用户名称',
                    },
                ],
                serviceType: 'HTTPS',
                serviceTimeout: 60,
                serviceConfig: {
                    url: 'o2o.yesmywine.com',
                    path: '/topapi/',
                    method: 'POST',
                },
                serviceParameters: [
                    {
                        name: 'account',
                        desc: '用户名称',
                    },
                    {
                        name: 'vcode',
                        defaultValue: null,
                        desc: '用户名称',
                    },
                    {
                        name: 'sms_code',
                        desc: '用户名称',
                    },
                    {
                        name: 'origin',
                        defaultValue: 1,
                        desc: '用户名称',
                    },
                    {
                        name: 'format',
                        defaultValue: 'json',
                        desc: '用户名称',
                    },
                    {
                        name: 'v',
                        defaultValue: 'v1',
                        desc: '用户名称',
                    },
                    {
                        name: 'method',
                        defaultValue: 'user.vue.login',
                        desc: '用户名称',
                    },
                ],
                constantParameters: [
                    {
                        name: 'token',
                        desc: 'desc',
                        position: 'position',
                        defaultValue: '',
                    },
                ],
                responseType: 'JSON',
            },
        ];
    }

    login(data) {
        const options = {
            url: 'https://o2o.yesmywine.com/topapi/',
            method: 'POST',
            body: JSON.stringify({
                account: data.mobile,
                vcode: null,
                sms_code: data.vcode,
                origin: 1,
                tag_type: null,
                format: 'json',
                v: 'v1',
                method: 'user.vue.login',
            }),
            headers: {
                'Content-Type': 'application/json',
                'User-Agent':
                    'Mozilla/5.0 (iPhone CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A404 ifuli/2.7.0',
            },
        };

        return this.httpRequest(options);
    }

    reqService(record) {
        const service = this.mock()[0];

        const apiUrl =
            service.serviceType.toLowerCase() +
            '://' +
            service.serviceConfig.url +
            service.serviceConfig.path;

        const body: any = {};
        service.serviceParameters.map(param => {
            body[param.name] = param.defaultValue;
        });

        // 填充body值
        body.account = record.mobile;
        body.sms_code = record.vcode;

        const option = {
            url: apiUrl,
            method: service.serviceConfig.method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'User-Agent':
                    'Mozilla/5.0 (iPhone CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16A404 ifuli/2.7.0',
            },
        };

        const schedule = new Schedule(() => {
            this.httpRequest(option);
        });

        schedule.start();
    }

    async execute() {
        const record = await this.repository.createQueryBuilder().getMany();

        record.map(r => {
            this.reqService(r);
        });
    }

    httpRequest(options) {
        return new Promise((resolve, reject) => {
            request(options, (error, response, body) => {
                if (error) {
                    return reject(error);
                }

                console.log('===');
                console.log('request', options);
                this.logger.verbose('response', JSON.parse(body));
                resolve(JSON.parse(body));
            });
        });
    }
}
