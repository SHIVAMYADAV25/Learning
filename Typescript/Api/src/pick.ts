interface User{
    id : number,
    name : string,
    age : number,
    email : string,
    password : number
}

type updateProps = Pick <User , 'name' | 'age' | 'password'>

function UpdateUser(UpdateUser : updateProps){

}

// PICK :
// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
// Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.