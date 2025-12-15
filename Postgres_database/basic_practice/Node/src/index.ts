// Import Client from pg package to connect and interact with PostgreSQL
import { Client } from "pg";

// Import express to create HTTP server and APIs
import express from "express";

// Create a PostgreSQL client using connection string
// This connection string contains:
// - database username
// - password
// - host
// - database name
// - ssl config (required for Neon DB)
const pgClient = new Client(
  "postgresql://neondb_owner:npg_0PmMYV3xEdHv@ep-cold-lake-ad9eqfjo-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
);

// Async function to connect to DB and create table
async function main() {

  // Establish connection with PostgreSQL database
  await pgClient.connect();

  // Run SQL query to create users table if it does not exist
  // SERIAL → auto-incrementing integer
  // PRIMARY KEY → uniquely identifies each row
  // UNIQUE → username cannot be duplicated
  // NOT NULL → value must be provided
  await pgClient.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      password VARCHAR(50) NOT NULL
    );
  `);
}

// Call main() to initialize DB setup
// catch() handles any error during connection or table creation
main().catch((err) => {
  console.error("Error during table creation:", err);
});

// Create express application
const app = express();

// Middleware to parse incoming JSON request body
// Without this, req.body will be undefined
app.use(express.json());

// POST API for sign-in (actually creating a user)
// URL → http://localhost:3000/signin
app.post("/signin", async (req, res) => {

  // Extract username and password from request body
  const { username, password } = req.body;

  // Log incoming data (for debugging purpose)
  console.log(username, password);

  try {
    // Insert new user into users table
    // $1 and $2 are placeholders to prevent SQL injection
    const result = await pgClient.query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *",
      [username, password]
    );

    // Extract newly created user from DB response
    const user = result.rows[0];

    // Send success response with created user
    res.status(201).json({
      message: "User created successfully",
      user,
    });

  } catch (err) {
    // This block runs if username already exists
    // or any DB error occurs
    console.error("Error during sign-in:", err);

    // Send generic error response
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Start server on port 3000
app.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});
