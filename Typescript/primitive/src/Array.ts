// Example 1 
// Given an array of positive integers as input, return the maximum value in the array

function find_max(num: number[]) {
    if (num.length === 0) {
        throw new Error("Array is empty");
    }

    let max_value: number = num[0]!;

    for (let i = 1; i < num.length; i++) {
        if (num[i]! > max_value) {
            max_value = num[i]!;
        }
    }

    return max_value;
}

console.log(find_max([5, 47, 23, 43, 13, 90]));


// Example 2 
// Given a list of users, filter out the users that are legal (greater than 18 years of age)

interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function isLegal(user: User[]){
    return user.filter( e => e.age > 18)
}

isLegal([{
    firstName: "shivam",
    lastName : "yadav",
    age : 21
}])

interface Address{
    city : string,
    pincode : string
}

interface User1 {
    name : string,
    age : number,
    adresses : Address[] ;

    // or

    // addresses : {
    // city : string,
    // pincode : string
    // }[]
}

let user : User1 = {
    name : "shivam",
    age : 21,
    adresses : [{
        city : "thane",
        pincode : "123"
    }]
}

