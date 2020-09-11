const path = require('path');

/**
 * 加载环境变量
 * 设置全局变量
 */
global.__ENV__ = process.env.DEPLOY_ENV || 'dev';
global.__DEVELOPMENT__ = global.__ENV__ === 'dev';
global.__DEBUG__ = process.env.DEBUG === 'true';

if (!__DEVELOPMENT__) {
    process.env.NODE_ENV = 'production';
}

const ROOT_PATH = process.cwd();

const pkg = require(ROOT_PATH + '/package.json');
const dev = require(ROOT_PATH + '/config/env/dev');
const test = require(ROOT_PATH + '/config/env/test');
const pre = require(ROOT_PATH + '/config/env/pre');
const prd = require(ROOT_PATH + '/config/env/prd');

const env = global.__ENV__;

const defaults = {
    pkgName: pkg.name,
    root: path.join(__dirname, '..'),
    env,
};

const configs = {
    dev: Object.assign({}, dev, defaults),
    test: Object.assign({}, test, defaults),
    pre: Object.assign({}, pre, defaults),
    prd: Object.assign({}, prd, defaults),
};

const config = configs[env];

module.exports = config;
