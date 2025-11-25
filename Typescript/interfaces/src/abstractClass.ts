
// abstract classes vd interfaces
// an abstract class can have default implements of function
// but an interface cannot have

abstract class User {
    // variable declaration
    name : string;
    constructor(name:string) {
        this.name = name;
    }

    // function declaration
    abstract greet(): string;

    // only difference is that we can make default implementation offunction which we cannot make in interface
    hello(){
        console.log("hii there");
    }
}

//example:

// interface User2{
//     name : string,
//     this is not happining in interface (function with default implementation)
//     hello (){
//         return "h1 "
//     }
// }

class Employee extends User{
    name: string;
    constructor(name : string){
        super(name);
        this.name = name
    }

    greet(): string {
        return "hi " + this.name;
    }
}

