const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'production') {
    module.exports = require('./webpack/webpack.prod.js');
} else {
    module.exports = require('./webpack/webpack.dev.js');
}