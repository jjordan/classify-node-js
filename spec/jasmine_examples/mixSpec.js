describe("mixins can mix in the properties and methods of other objects", function(){
    var blend = require('../../lib/blend.js');
    var mix = require('../../lib/mix.js');
    var superman;
    var clark;
    var bullet;
    var locomotive;
    var bird;
    var plane;
    beforeEach(function(){
        clark = {
            name: 'Clark Kent',
            temperament: 'Mild Mannered',
            job: 'News Reporter',
            speed: 'slow',
        };
        bullet = {
            speed: 'super fast!'
        };
        locomotive = {
            speed: 'fast',
            pull: function(n){
                return "I can pull " + n + " train cars";
            },
            push: function(n){
                return "I can push " + n + " train cars";
            }
        };
        bird = {
            speed: 'medium',
            fly: function(){
                return "I'm flying!";
            },
            leap: function(b){
                return "I just leaped over " + b + ".";
            }
        };
        plane = {
            speed: 'fast',
            fly: function(){
                return "We're about to take off";
            },
            carryPassengers: function(p){
                return "I'm carrying " + p;
            }
        };
    });
    describe("mix overrides properties in the child with those in the mixed in", function(){
        it("without an object passed in, it returns a new object with all combined properties, with later arguments overriding earlier ones.", function(){
            superman = blend( clark, bullet, locomotive, bird, plane );
            expect(superman.name).toEqual('Clark Kent');
            expect(superman.speed).toEqual('fast'); // last argument is plane, which overrides clark and everything else
            expect(typeof(superman.fly)).toEqual('function');
            // properties are overwritten with blend,
            // with the last one winning:
            expect(superman.fly()).not.toEqual("I'm flying!");
            expect(superman.fly()).toEqual("We're about to take off");
        });
        it("with an object passed in, it will override all properties defined in the child with those in the arguments", function(){
        });
    });
    describe("mix doesn't override properties present in the child", function(){
        it("without an object passed in, it returns a new object with combined properties, with earlier arguments taking precedence over later ones. ", function(){
            superman = mix( clark, bullet, locomotive, bird, plane );
            expect(superman.name).toEqual('Clark Kent');
            expect(superman.speed).toEqual('slow'); // first argument is clark, so speed stays the way it is
            expect(typeof(superman.fly)).toEqual('function');
            // properties are not overwritten with mix,
            // with the first one winning:
            expect(superman.fly()).toEqual("I'm flying!");
            expect(superman.fly()).not.toEqual("We're about to take off");

        });
        it("with an object passed in, it will only add properties which do not exist in the target.", function(){
        });
    });
});
