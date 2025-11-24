"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(name) {
    console.log(`hello ${name}`);
}
greet("shivam");
function sum(x, y) {
    return x + y;
}
sum(1, 2);
function isLegal(age) {
    if (age < 18) {
        return true;
    }
    else {
        return false;
    }
}
isLegal(12);
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
function fn() {
    console.log('runs after 1000 mili-second');
}
let geed = () => {
    console.log("hello");
};
//# sourceMappingURL=index.js.map