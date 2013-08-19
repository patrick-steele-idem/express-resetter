function ExpressResetter(app, express)
{
    this.app = app;
    this.express = express;

    // keep track of the initial configuration of the Express app so that we can restore it later
    this.initialExpressStackSize = this.app.stack.length;
}

ExpressResetter.prototype.reset = function()
{
    if (this.app.stack.length > this.initialExpressStackSize)
    {
        this.app.stack.length = this.initialExpressStackSize;;
    }

    // HACK: Rebuild the router so the routes can be reinitialized
    var Router = this.express ? this.express.Router : require('express/lib/router');
    this.app._router = new Router(this);
    this.app.routes = this.app._router.map;
    this.app._usedRouter = false;
};

module.exports = ExpressResetter;