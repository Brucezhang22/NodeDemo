function route(pathname, handler) {
    console.log(`Route for the path requested: ${pathname}`);
    if (typeof handler[pathname] === 'function') {
        return handler[pathname]();
    } else {
        console.log(`No method found for ${pathname}`);
        return null;
    }
}

module.exports = {
    route: route
}