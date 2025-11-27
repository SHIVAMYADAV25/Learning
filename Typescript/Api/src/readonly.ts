// ReadOnly

// When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.

const user = {
    name : "shivam",
    age : 12
}

user.name = "yadav" // this is changeable to stop this there is readonly property

interface Config {
    readonly endPoint : string,
    readonly apiKey : string;
}

const config:Readonly<Config> = {
    endPoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
}
// config.apikey = "newkey" // Error: Cannot assign to 'apiKey' because it is a read-only property.