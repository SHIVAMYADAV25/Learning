# Step 10 - Relationships and Transactions

## Relationships

Relationships let you store data in different tables and relate them with each other.

### Relationships in MongoDB

Since MongoDB is a NoSQL database, you can store any shape of data in it.

For example, if you want to store a user's details along with their address, you can nest the address directly as part of the user's object.

{
"username": "johndoe",
"email": "john@example.com",
"address": {
"city": "New York",
"country": "USA",
"street": "123 Broadway St",
"pincode": "10001"
}
}


### Relationships in SQL

Since SQL databases cannot store nested objects directly, we define separate tables and link them through **relationships**.

This means the `addresses` table is related to the `users` table.

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
id SERIAL PRIMARY KEY,
user_id INTEGER NOT NULL,
city VARCHAR(100) NOT NULL,
country VARCHAR(100) NOT NULL,
street VARCHAR(255) NOT NULL,
pincode VARCHAR(20),
created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

---

## SQL Queries

### Inserting Address for a User

INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (1, 'New York', 'USA', '123 Broadway St', '10001');



### Getting the Address of a User by ID

SELECT city, country, street, pincode
FROM addresses
WHERE user_id = 1;



---

## Transactions in SQL

> When a user signs up and sends both their personal information and address in a single request, 
> we need to make sure **both** inserts succeed — or neither does.
> This is managed using **transactions**.

### SQL Transaction Example

BEGIN; -- Start transaction

INSERT INTO users (username, email, password)
VALUES ('john_doe', 'john_doe1@example.com', 'securepassword123');

INSERT INTO addresses (user_id, city, country, street, pincode)
VALUES (currval('users_id_seq'), 'New York', 'USA', '123 Broadway St', '10001');

COMMIT;



If one of the queries fails (for example, if the address insert fails), the whole transaction can be **rolled back**, ensuring consistent data.

---

## Node.js Transaction Example

import { Client } from 'pg';

async function insertUserAndAddress(
username: string,
email: string,
password: string,
city: string,
country: string,
street: string,
pincode: string
) {
const client = new Client({
host: 'localhost',
port: 5432,
database: 'postgres',
user: 'postgres',
password: 'mysecretpassword',
});

try {
await client.connect();

text
// Start transaction
await client.query('BEGIN');

// Insert user
const insertUserText = `
  INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3)
  RETURNING id;
`;
const userRes = await client.query(insertUserText, [username, email, password]);
const userId = userRes.rows.id;

// Insert address
const insertAddressText = `
  INSERT INTO addresses (user_id, city, country, street, pincode)
  VALUES ($1, $2, $3, $4, $5);
`;
await client.query(insertAddressText, [userId, city, country, street, pincode]);

// Commit transaction
await client.query('COMMIT');
console.log('User and address inserted successfully');
} catch (err) {
await client.query('ROLLBACK');
console.error('Error during transaction, rolled back.', err);
throw err;
} finally {
await client.end();
}
}

// Example usage
insertUserAndAddress(
'johndoe',
'john.doe@example.com',
'securepassword123',
'New York',
'USA',
'123 Broadway St',
'10001'
);


---

## References

- [100xDevs SQL Track](https://projects.100xdevs.com/tracks/YOSAherHkqWXhOdlE4yE/sql-10)
- [Download PDF](https://projects.100xdevs.com/pdf/YOSAherHkqWXhOdlE4yE/sql-10)
- [Previous Lesson](https://projects.100xdevs.com/tracks/YOSAherHkqWXhOdlE4yE/sql-9)
- [Next Lesson](https://projects.100xdevs.com/tracks/YOSAherHkqWXhOdlE4yE/sql-11)