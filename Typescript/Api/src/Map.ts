// Maps:
// maps gives you an even fancier way to deal with objects. Very similar to Maps in C++


type User = {
    id : string,
    name : string,
}

// Initialize an empty Map
const users = new Map<string,User>()

// Add users to the map using .set
users.set('abc123', { id: 'abc123', name: 'John Doe' });
users.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });


// Accessing a value using .get
console.log(users.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }