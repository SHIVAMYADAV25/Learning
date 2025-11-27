// Record
// Record let’s you give a cleaner type to objects
// You can type objects like follows - 

interface User {
    id : string,
    name : string
}

type Users = { [key : string] : User};

const users:Users = {
     'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
}

// OR use Record 

type User1 = Record < string , User>

//record => let u initalize the key type to any given type
const user1 : User1 = {
     'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
}

console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }