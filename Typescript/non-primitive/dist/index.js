"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(user) {
    console.log(`hello ${user.name}`);
}
// here when we hover on user u can see there is implicitly
// give the type which look like similar we have given to the 
// function (user) type
// so we can pass it directly
let user = {
    "name": "shivam",
    "age": 21
};
greet(user);
function hello(user) {
    console.log(`hello ${user.name}`);
}
let userinfo = {
    name: "shivam",
    age: 12
};
hello(userinfo);
//# sourceMappingURL=index.js.map