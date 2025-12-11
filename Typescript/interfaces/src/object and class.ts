
// interface with function

interface User{
    name : string,
    age : number,
    greet : () => string,
}

let user : User = {
    name : "shivam",
    age : 12,
    greet(){
        return "hii" + this.name
    }
}

user.greet();

// interface with classes ( we cannot access the variable like this.name in object) in mine it is working

interface People {
    name : string,
    age : number,
    greet : () => boolean
}

class Manager implements People {
    // need to re declare the type with variable (more then given in interface => gender)
    name: string; 
    age: number;
    gender : string;

    constructor(a:string,b:number,c : string){
        this.age = b;
        this.name = a;
        this.gender = c;
    }

    // function creation
    greet(){
        return this.age < 12;
    }
}

// can be used like this
// class God extends Manager {
//     constructor(name:string,age:number){
//         super(name,age); // this is used to call the constructor of the class from where it is extended (parent class) so that 
//         // the value get initalize
//     }
// }

let userOffice = new Manager("shivam" , 2 , "yadav");
userOffice.age // can access element