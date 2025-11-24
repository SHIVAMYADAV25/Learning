// simple greeting

// if u dont give string it will be :any (never use :Any can use | (or))
function greet(name: string){
    console.log(`hello ${name}`)
}

greet("shivam");
// greet(1); error

// Problem 2 - Sum function

function sum(x: number,y: number){
    return x + y;
}

sum(1,2);

//Problem 3 - Return true or false based on if a user is 18+

// in this we are getting implicilty value from the compiler
// that the return will be boolean (infered by the compiler)
function isLegal(age: number){
    if(age < 18){
        return true
    }else{
        return false
    }
}

isLegal(12); 

// Problem 4 - 
// Create a function that takes another function as input,
//  and runs it after 1 second.

// if we are passing function to another function then in paramter
// we should always mention that the return type of that function (void/numer/string/function)
// syntax (fn: () => void)
// its like giving knowledge about your function
function delayedCall(fn: (() => void) | ((a:string) => number) ){
    setTimeout(fn,1000);
}

function fn(){
    console.log('runs after 1000 mili-second')
}