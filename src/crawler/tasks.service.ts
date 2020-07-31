import { Injectable, Logger } from '@nestjs/common';
import { Cron, Interval, Timeout, SchedulerRegistry } from '@nestjs/schedule';

import { CrawlerService } from './crawler.service';

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);

    constructor(
        private crawlerService: CrawlerService,
        private schedulerRegistry: SchedulerRegistry,
    ) {}

    @Cron('45 * * * * *')
    handleCron() {
        this.logger.debug('Called when the current second is 45');
    }

    @Timeout(0)
    handleTimeout() {
        this.logger.debug('Called once after 5 seconds');
    }

    // @Interval(10000)
    // handleInterval() {
    //     this.logger.debug('Called every 10 seconds');
    // }

    addInterval(name: string, seconds: number) {
        const callback = () => {
            this.logger.warn(
                `Interval ${name} executing at time (${seconds})!`,
            );
        };

        const interval = setInterval(callback, seconds);
        this.schedulerRegistry.addInterval(name, interval);
    }
}
