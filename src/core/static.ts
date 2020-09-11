const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const consolidate = require('consolidate');

const ROOT_PATH = process.cwd();
const APP_PATH = __dirname;
const STATIC_PATH = `${ROOT_PATH}/dist`;
const VIEW_PATH = `${STATIC_PATH}/views`;

export default app => {
    app.use('/static', express.static(STATIC_PATH, { maxAge: '2h' }));
    app.use('/public', express.static(`${ROOT_PATH}/public`, { maxAge: '2h' }));

    app.use(morgan('tiny'));

    app.engine('html', consolidate.lodash);
    app.set('views', VIEW_PATH);
    app.set('view engine', 'html');

    app.use(compression());

    app.disable('x-powered-by');
    app.enable('trust proxy');

    app.get('*', (_req, res) => res.render('index'));
};
