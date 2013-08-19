express-resetter
================

This is a simple utility module to reset an Express instance to a previous state after registering middleware. This is
very helpful for hot-reloading changes to routes during development (without requiring the 
restart of the entire application).

# Installation
```
npm install express-resetter --save
```

# Usage
```javascript
var expressResetter = require('express-resetter');
//...
app.use(beforeMiddlewareA);
app.use(beforeMiddlewareB);
expressResetter.resetRoutes(app);
app.use(afterMiddlewareA);
app.use(afterMiddlewareA);
```

The first time `expressResetter.resetRoutes(app)` is
called it simply stores the current state of the
Express app at the time it is invoked. The second time `expressResetter.resetRoutes(app)` is called, the previous state is restored. In the above example, right after the
second time `resetRoutes` is called, the only middleware
that will be registered is `beforeMiddlewareA` and `beforeMiddlewareB`. 

However, the only caveat is that all the registered routes are always completely reset after the subsequent calls to `resetRoutes`.