// Stefanov, Stoyan (2010-09-09). JavaScript Patterns (Kindle Locations 2850-2854). O'Reilly Media. Kindle Edition. 

var blend = function() {
    var arg, prop, child = {};
    for (arg = 0; arg < arguments.length; arg += 1) {
        for (prop in arguments[arg]) {
            if (arguments[arg].hasOwnProperty(prop)) {
                child[prop] = arguments[arg][prop];
            }
        }
    }
    return child;
}

module.exports = blend;
