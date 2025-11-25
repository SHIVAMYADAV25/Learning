interface User{
    name : string,
    age : number,
    greet : () => void
}

let user : User = {
    name : "shivam",
    age : 12,
    greet(){
        console.log("hii")
    }
}

user.greet();