
// using ? means the field can be opptional use it or do not use it

interface people {
    name : string,
    age : number,
    address? : {
        city : string,
        country?: string,
        pincode : number,
    }
}

let p1  : people = {
    name: "shivam",
    age: 23,
    address : {
        city : "thane",
        pincode : 123123
    }
}