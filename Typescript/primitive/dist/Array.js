"use strict";
// Example 1 
// Given an array of positive integers as input, return the maximum value in the array
Object.defineProperty(exports, "__esModule", { value: true });
function find_max(num) {
    if (num.length === 0) {
        throw new Error("Array is empty");
    }
    let max_value = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > max_value) {
            max_value = num[i];
        }
    }
    return max_value;
}
console.log(find_max([5, 47, 23, 43, 13, 90]));
function isLegal(user) {
    return user.filter(e => e.age > 18);
}
isLegal([{
        firstName: "shivam",
        lastName: "yadav",
        age: 21
    }]);
let user = {
    name: "shivam",
    age: 21,
    adresses: [{
            city: "thane",
            pincode: "123"
        }]
};
//# sourceMappingURL=Array.js.map