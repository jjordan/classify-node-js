var mix = function() {
    var arg, prop, child = {};
    for (arg = 0; arg < arguments.length; arg += 1) {
        for (prop in arguments[arg]) {
            if (arguments[arg].hasOwnProperty(prop) && !(child.hasOwnProperty(prop))) {
                child[prop] = arguments[arg][prop];
            }
        }
    }
    return child;
}

module.exports = mix;
