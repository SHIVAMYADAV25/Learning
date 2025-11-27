// Partial

// Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.

interface User{
    id : string,
    name : string,
    age : string,
    email : string,
    password : string;
}

type updateProps = Pick<User , 'name' | 'age' | 'email'>

type updatePropsOptional = Partial<updateProps>

function UpdateUser(updateprops : updatePropsOptional){

}

// in pick u have to compulsoryly use all the values not optional
//  data looks like : {
//                         name :string,
//                         age : string,
//                         email : string
//                     }

// in partial u have can or acnnot use the value 
// data looks like  : {
//                         name? :string,
//                         age? : string,
//                         email? : string
//                     }