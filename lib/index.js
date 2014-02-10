var ExpressResetter = require('./ExpressResetter');

exports.resetApp = function(app, express) {
    if (app._expressResetter) {
        app._expressResetter.reset();
    }
    else {
        app._expressResetter = new ExpressResetter(app, express);
    }
};

exports.resetRoutes = function(app, express) {
    console.log('WARNING: require("express-resetter").resetRoutes(...) deprecated. Use resetApp instead');
    exports.resetApp.apply(exports, arguments);
};