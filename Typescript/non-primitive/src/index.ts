function greet(user : {
    name:string,
    age:number
}){
    console.log(`hello ${user.name}`)
}

// here when we hover on user u can see there is implicitly
// give the type which look like similar we have given to the 
// function (user) type
// so we can pass it directly

let user = {
    "name":"shivam",
    "age" :21
}

greet(user);
// can do this too but if there is a change in objecy u have to do both the side 
// in function also and in object also

// let user :{
//     name: string;
//     age: number;
// } = {
//     "name":"shivam",
//     "age" :21
// }


// solution 
// can do one thing define a interface

// now this can be add anywhere where this kind of data require
interface userData  {
    name : string,
    age : number
}

function hello(user : userData){
    console.log(`hello ${user.name}`)
}

let userinfo:userData = {
    name:"shivam",
    age : 12
}

hello(userinfo);