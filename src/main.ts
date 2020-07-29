import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TypeormExceptionFilter } from './common/filters/typeorm-exception.filter';

import { join } from 'path';
import { Config } from './config/config';
import { AppModule } from './app.module';
import nunjucks = require('nunjucks');

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useGlobalFilters(new TypeormExceptionFilter());
    app.enableCors({ origin: '*' });

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    nunjucks.configure('views', {
        ext: 'html',
        autoescape: true,
        express: app,
        watch: true,
    });

    // swagger
    const options = new DocumentBuilder()
        .setTitle(Config.name)
        .setDescription(Config.description)
        .setVersion(Config.version)
        .addTag(Config.name)
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('docs', app, document);

    await app.listen(Config.port);
    Logger.log(`Server running on http://localhost:${Config.port}`);
}
bootstrap();
