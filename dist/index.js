"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.func2 = exports.func1 = exports.var3 = exports.var2 = exports.var1 = void 0;
exports.var1 = 999;
exports.var2 = "abcd";
exports.var3 = 3.14;
var func1 = function (log) {
    if (log === void 0) { log = "foo"; }
    console.log(log);
    return log;
};
exports.func1 = func1;
var func2 = function (a, b) { return a + b; };
exports.func2 = func2;
exports.default = {
    var1: exports.var1,
    var2: exports.var2,
    var3: exports.var3,
    func1: exports.func1,
    func2: exports.func2,
};
