
interface address {
    city : string,
    country?: string,
    pincode : number,
}

interface people {
    name : string,
    age : number,
    address : address
}

interface user {
    name : string,
    age : number,
    address : address
}

let User : people = {
    name : "shivam",
    age : 1,
    address : {
        city : "thane",
        pincode : 121223,
    }
}

function print(User:people): void{
    console.log(User.name)
}

console.log(User)