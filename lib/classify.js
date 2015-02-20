// Stefanov, Stoyan (2010-09-09). JavaScript Patterns (Kindle Location 2735). O'Reilly Media. Kindle Edition.
var classify = function(Parent, props) {
    
    var Child, F, i;

    // 1. 
    // new constructor
    Child = function() {
        if (Child.uber && Child.uber.hasOwnProperty("_initialize")) {
            Child.uber._initialize.apply( this, arguments);
        }

        if (Child.prototype.hasOwnProperty("_initialize")) {
            Child.prototype._initialize.apply( this, arguments);
        }
    };

    // 2.
    // inherit
    Parent = Parent || Object;
    F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.uber = Parent.prototype;
    Child.prototype.constructor = Child;

    // 3.
    // add implementation methods
    for (i in props) {
        if (props.hasOwnProperty( i )) {
            Child.prototype[i] = props[i];
        }
    }
    // return the "class"
    return Child;
};

module.exports = classify;
