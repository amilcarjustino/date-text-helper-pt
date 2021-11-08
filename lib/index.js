"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFn = exports.sum = void 0;
var sum_1 = require("./sum");
Object.defineProperty(exports, "sum", { enumerable: true, get: function () { return sum_1.sum; } });
function myFn() { console.log("Hello Ami"); }
exports.myFn = myFn;
;
