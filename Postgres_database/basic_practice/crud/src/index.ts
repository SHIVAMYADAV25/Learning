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
}

CRUD();