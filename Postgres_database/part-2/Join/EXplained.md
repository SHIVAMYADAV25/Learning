# Step 11 - Joins

Defining relationships is easy.  
What’s hard is joining data from two (or more) tables together.

For example, if you need to fetch a user’s details and their address, what SQL would you run?

---

## Approach 1 (Bad)

Two separate queries:

-- Query 1: Fetch user's details
SELECT id, username, email
FROM users
WHERE id = YOUR_USER_ID;

-- Query 2: Fetch user's address
SELECT city, country, street, pincode
FROM addresses
WHERE user_id = YOUR_USER_ID;

text

---

## Approach 2 (Using Joins)

Single query using a JOIN:

SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
JOIN addresses ON users.id = addresses.user_id
WHERE users.id = '1';

text

Using aliases:

SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
FROM users u
JOIN addresses a ON u.id = a.user_id
WHERE u.id = YOUR_USER_ID;

text

---

## Node.js – Approach 1 (Bad)

Separate queries in the app:

import { Client } from 'pg';

// Async function to fetch user details and address separately
async function getUserDetailsAndAddressSeparately(userId: string) {
const client = new Client({
host: 'localhost',
port: 5432,
database: 'postgres',
user: 'postgres',
password: 'mysecretpassword',
});

text
try {
    await client.connect();

    // Fetch user details
    const userDetailsQuery = 'SELECT id, username, email FROM users WHERE id = $1';
    const userDetails = await client.query(userDetailsQuery, [userId]);

    // Fetch user address
    const userAddressQuery = 'SELECT city, country, street, pincode FROM addresses WHERE user_id = $1';
    const userAddress = await client.query(userAddressQuery, [userId]);

    if (userDetails.rows.length > 0) {
        console.log('User found:', userDetails.rows);
        console.log('Address:', userAddress.rows.length > 0 ? userAddress.rows : 'No address found');
        return { user: userDetails.rows, address: userAddress.rows.length > 0 ? userAddress.rows : null };
    } else {
        console.log('No user found with the given ID.');
        return null;
    }
} catch (err) {
    console.error('Error during fetching user and address:', err);
    throw err;
} finally {
    await client.end();
}
}

getUserDetailsAndAddressSeparately("1");

text

---

## Node.js – Approach 2 (Using Joins)

Single query with JOIN:

import { Client } from 'pg';

// Async function to fetch user data and their address together
async function getUserDetailsWithAddress(userId: string) {
const client = new Client({
host: 'localhost',
port: 5432,
database: 'postgres',
user: 'postgres',
password: 'mysecretpassword',
});

text
try {
    await client.connect();
    const query = `
        SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
        FROM users u
        JOIN addresses a ON u.id = a.user_id
        WHERE u.id = $1
    `;
    const result = await client.query(query, [userId]);

    if (result.rows.length > 0) {
        console.log('User and address found:', result.rows);
        return result.rows;
    } else {
        console.log('No user or address found with the given ID.');
        return null;
    }
} catch (err) {
    console.error('Error during fetching user and address:', err);
    throw err;
} finally {
    await client.end();
}
}

getUserDetailsWithAddress("1");

text

---

## Benefits of Using a Join

- Reduced Latency  
- Simplified Application Logic  
- Transactional Integrity  

---

## Types of Joins

### 1. INNER JOIN

Returns rows when there is at least one match in both tables.  
If there is no match, the rows are not returned.  
Use case: Find all users with their addresses. If a user hasn’t filled their address, that user shouldn’t be returned.

SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
INNER JOIN addresses ON users.id = addresses.user_id;


### 2. LEFT JOIN

Returns all rows from the left table, and the matched rows from the right table.  
Users without an address will still appear, but the address fields will be NULL.

SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
LEFT JOIN addresses ON users.id = addresses.user_id;


### 3. RIGHT JOIN

Returns all rows from the right table, and the matched rows from the left table.  
Less common here because `addresses.user_id` is a foreign key that should always point to a user.

SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
RIGHT JOIN addresses ON users.id = addresses.user_id;


### 4. FULL JOIN

Returns rows when there is a match in one of the tables.  
Effectively combines the results of LEFT JOIN and RIGHT JOIN.

SELECT users.username, addresses.city, addresses.country, addresses.street, addresses.pincode
FROM users
FULL JOIN addresses ON users.id = addresses.user_id;


undefined