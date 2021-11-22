const path = require('path');

module.exports = {
    devServer: {
        port: 8080,
        hot: true,
        open: false,
        proxy: 'http://localhost:5005'
    },
    chainWebpack: config => {
        config.resolve.alias.set('@core', path.join(__dirname, 'src', 'core'));
        config.resolve.alias.set('@api', path.join(__dirname, 'src', 'core', 'api'));
        config.resolve.alias.set('@store', path.join(__dirname, 'src', 'core', 'store'));
        config.resolve.alias.set('@router', path.join(__dirname, 'src', 'core', 'router'));
        config.resolve.alias.set('@providers', path.join(__dirname, 'src', 'providers'));
        config.resolve.alias.set('@domain', path.join(__dirname, 'src', 'domain'));
        config.resolve.alias.set('@views', path.join(__dirname, 'src', 'views'));
        config.resolve.alias.set('@components', path.join(__dirname, 'src', 'components'));
    },
    productionSourceMap: false
}