"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Test = /** @class */ (function () {
    function Test() {
        this.name = 'shawnkoon';
    }
    Test.prototype.say = function () {
        console.log('Hello world!');
    };
    Test.prototype.whoami = function () {
        console.log("I am " + this.name);
    };
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=test.js.map