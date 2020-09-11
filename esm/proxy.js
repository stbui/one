"use strict";
const httpProxyMiddleware = require('http-proxy-middleware');
const { Tags, FORMAT_HTTP_HEADERS } = require('opentracing');
const { initTracer } = require('jaeger-client');
const { jaegerConfig, proxy } = require('./config');
const tracer = initTracer({
    serviceName: jaegerConfig.serviceName,
    reporter: jaegerConfig.reporter,
    sampler: { type: 'const', param: 1 },
}, { logger: console });
const proxyMiddlewares = () => {
    const _span = Symbol.for('proxy#span');
    const proxyMiddlewares = [];
    // Avoid 'proxy' declaration with const
    let _proxy = proxy;
    if (_proxy) {
        /**
         * Assume a proxy configuration specified as:
         * proxy: 'a url'
         */
        if (typeof _proxy === 'string') {
            _proxy = [
                {
                    context: _proxy,
                },
            ];
        }
        /**
         * Assume a proxy configuration specified as:
         * proxy: {
         *   'context': { options }
         * }
         * OR
         * proxy: {
         *   'context': 'target'
         * }
         */
        if (!Array.isArray(_proxy)) {
            _proxy = Object.keys(_proxy).map(context => {
                let proxyOptions;
                // For backwards compatibility reasons.
                const correctedContext = context.replace(/^\*$/, '**').replace(/\/\*$/, '');
                if (typeof _proxy[context] === 'string') {
                    proxyOptions = {
                        context: correctedContext,
                        target: _proxy[context],
                    };
                }
                else {
                    proxyOptions = _proxy[context];
                    proxyOptions.context = correctedContext;
                }
                return proxyOptions;
            });
        }
        if (tracer) {
            _proxy.forEach(proxyConfig => {
                // eslint-disable-next-line
                proxyConfig.onProxyReq = (proxyReq, req, res) => {
                    const reqCarrier = req.headers;
                    const prxCarrier = {};
                    const spanOptions = {};
                    const parentSpanContext = tracer.extract(FORMAT_HTTP_HEADERS, reqCarrier);
                    if (parentSpanContext) {
                        // @ts-ignore
                        spanOptions.childOf = parentSpanContext;
                    }
                    const span = tracer.startSpan(`${req.method}: ${req.path}`, spanOptions);
                    tracer.inject(span, FORMAT_HTTP_HEADERS, prxCarrier);
                    Object.entries(prxCarrier).forEach(([key, value]) => {
                        proxyReq.setHeader(key, value);
                    });
                    req[_span] = span;
                };
                // eslint-disable-next-line
                proxyConfig.onProxyRes = (proxyRes, req, res) => {
                    const span = req[_span];
                    span.setTag(Tags.HTTP_STATUS_CODE, res.statusCode);
                    span.setTag(Tags.ERROR, res.statusCode >= 500);
                    span.finish();
                };
            });
        }
    }
    _proxy.forEach(proxyConfig => {
        const context = proxyConfig.context || proxyConfig.path;
        if (proxyConfig.target) {
            // @ts-ignore
            proxyMiddlewares.push(httpProxyMiddleware(context, proxyConfig));
        }
    });
    if (!proxyMiddlewares.length) {
        return null;
    }
    return proxyMiddlewares;
};
module.exports = app => {
    app.use(proxyMiddlewares());
};
//# sourceMappingURL=proxy.js.map