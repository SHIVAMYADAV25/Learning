// Importing the Client class from the 'pg' module to interact with PostgreSQL.
// Client is a class in which we will be making instance
import { Client } from "pg"

// Creating a new instance of the Client with a connection string for the PostgreSQL database.
const pgClient = new Client('postgresql://neondb_owner:npg_0PmMYV3xEdHv@ep-cold-lake-ad9eqfjo-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');


// Alternative way to create the Client instance using an object for more flexibility (commented out here).
// const pgClient2 = new Client({
//     user: "neondb_owner", // Username for authentication
//     password: "npg_0PmMYV3xEdHv", // Password for authentication
//     port: "8080", // Port number for the database server
//     host: "ep-cold-lake-ad9eqfjo-pooler.c-2.us-east-1.aws.neon.tech", // Database server host
//     database: "neondb", // Database name to connect to
//     ssl: true // Enabling SSL for secure communication
// });

// Defining an asynchronous function to handle the database operations.
async function CRUD() {
    // Establishing the connection to the PostgreSQL database using the connect method.
    await pgClient.connect();


    // SQL query to create a new table called 'users' with specific columns
    // SERIAL Auto Increment the value
    // Using PRIMARY KEY it will be having power of UNIQUE and NOT NULL
    // VARCHAR(value) defined string with limited value in it
    // TIMESTAMP WITH TIME ZONE it is type (time stamp depending on your zone)
    // DEFAULT CURRENT_TIMESTAMP if not defined by user give the default by the database
    await pgClient.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            create_At TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    
    // SQL query to insert a new record into the 'users' table
    await pgClient.query(`
        INSERT INTO users (username , email , password)
        VALUES ('Shivam Yadav', 'Shivam@gmail.com' ,'987654321');
    `)

    // SQL query to nsert another user record into the 'users' table
    await pgClient.query(`
        INSERT INTO users (username , email , password)
        VALUES ('Shiv Yadav' , 'Shiv@gmail.com' ,'987654320');
    `)

    //SQL query to update the password based of a user on the given email condition.
    await pgClient.query(`
        UPDATE users SET password = '12121212'
        WHERE id = '1'
    `)

    // SQL query to delete a users record based on the provided ID condition
    await pgClient.query(`
        DELETE FROM users
        WHERE id = 2;
    `)

    // SQL query to retrieve all records from the 'users' table.
    const response = await pgClient.query(`
        SELECT * FROM users;
    `)

    // Logging the response, which contains all rows from the 'users' table.
    console.log(response.rows); // Logs the rows returned by the SELECT query
}

// Calling the main function to execute the database operations.
CRUD();

//IMPORTANT THING TO BE CONSIDERD

// -> When INSERTING data when u pass the value pass it in single qoute double might give u and error
    // -> VALUES ('Shivam Yadav', 'Shivam@gmail.com' ,'987654321');

