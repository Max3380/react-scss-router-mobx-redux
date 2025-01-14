const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/home',createProxyMiddleware({
        target: 'https://home-api.pinduoduo.com',
        changeOrigin: true,
      })
    );
    app.use(
      '/wapi',createProxyMiddleware({
        target: 'https://www.xxx.com/',
        changeOrigin: true,
      })
    );
    app.use(
      '/wp-json',createProxyMiddleware({
        target: 'https://xxx.xxx.cn/',
        changeOrigin: true,
      })
    );
};
