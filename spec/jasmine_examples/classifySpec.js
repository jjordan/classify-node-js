describe("classify", function(){
    var classify = require('../../lib/classify.js');
    var Man, SuperMan;
    var joe, clark;
    describe("when called with null as the first argument", function(){
        beforeAll(function(){
            Man = classify( null, {
                _initialize: function (who) {
                    this.name = who;
                },
                getName: function () {
                    return this.name;
                }
            });
        });
        it("can create a base class constructor", function(){
            expect(typeof(Man)).toEqual("function");
            joe = new Man('Joeseph');
            expect(joe instanceof Man).toBeTruthy();
            expect(joe instanceof Object).toBeTruthy();
            expect(typeof(joe.getName)).toEqual("function");
            expect(joe.getName()).toEqual('Joeseph');
        });
    });
    describe("when called with another class constructor as the first argument", function(){
        beforeAll(function(){
            Man = classify( null, {
                _initialize: function (who) {
                    this.name = who;
                },
                getName: function () {
                    return this.name;
                }
            });
            SuperMan = classify( Man, {
                _initialize: function (what) {
                    this.powers = 'More Powerful than a Locomotive...';
                },
                getName: function () {
                    var name = SuperMan.uber.getName.call( this);
                    return "I am " + name;
                },
                liftCar: function(car){
                    return "I just lifted this " + car;
                }
            });
        });
        
        it("can create an inheritance chain", function(){
            expect(typeof(SuperMan)).toEqual("function");
            clark = new SuperMan('Clark Kent');
            joe = new Man('Regular Joe');
                
            expect(clark instanceof SuperMan).toBeTruthy();
            expect(clark instanceof Man).toBeTruthy();
            expect(clark instanceof Object).toBeTruthy();
            expect(typeof(clark.getName)).toEqual("function");
            expect(clark.getName()).toEqual('I am Clark Kent');
            expect(typeof(clark.liftCar)).toEqual("function");
            expect(clark.liftCar('oldsmobile')).toEqual("I just lifted this oldsmobile");
            expect(clark.powers).toEqual('More Powerful than a Locomotive...');

            // joe is still the same:
            expect(joe instanceof Man).toBeTruthy();
            expect(joe instanceof Object).toBeTruthy();
            expect(typeof(joe.getName)).toEqual("function");
            expect(joe.getName()).toEqual('Regular Joe');
            expect(typeof(joe.liftCar)).toEqual("undefined");
            expect(joe.powers).toEqual(undefined);
        });
    });
});
