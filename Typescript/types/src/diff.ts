// diff b/w types and interfaces

//  interfaces can be implemented by classes types cannot
// types has uniqueness that is Union(&) and intersection(|)

// syntax of type of both

type User_type = {
    name: string,
    age:number
}

interface User_interface {
    name : string,
    age : number
}

// 1. Unions
// Let’s say you want to print the id of a user, which can be a number or a string.

interface User1{
    name : string,
    age : number
}

interface User2{
    name : string,
    gender : string
}

// can be any (either or all) can be of User1 or User2 or can be all
type person = User1 | User2

const human:person = {
    name :"shivam",
    age : 23
}

// 2. Intersection
// What if you want to create a type that has every property of multiple types/ interfaces

type person2 = User1 & User2;

// has to all the value which are in both

const hum1 : person2 = {
    name : "shivam",
    age : 23,
    gender : "male"
}