# Relationships in Databases

Relationships describe how data in one table connects to data in another. They let you split data into multiple tables while still being able to query it together using keys and joins.

---

## Core Concepts

- **Table**: A collection of rows (records) with columns (fields).
- **Primary key (PK)**: A column (or set of columns) that uniquely identifies each row in a table.
- **Foreign key (FK)**: A column in one table that refers to the primary key of another table.
- **Relationship**: A logical link between two tables, often implemented via foreign keys.

Example:

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE addresses (
id SERIAL PRIMARY KEY,
user_id INTEGER NOT NULL,
city VARCHAR(100) NOT NULL,
country VARCHAR(100) NOT NULL,
street VARCHAR(255) NOT NULL,
pincode VARCHAR(20),
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

text

Here, `addresses.user_id` is a foreign key pointing to `users.id`, creating a relationship between the two tables.

---

## Types of Relationships

### One-to-One (1:1)

Each row in table A is related to at most one row in table B, and vice versa.

Use cases:
- Splitting sensitive or rarely used data into a separate table.
- Extending a row only when needed.

Example:

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL
);

CREATE TABLE user_profiles (
user_id INTEGER PRIMARY KEY,
bio TEXT,
avatar_url TEXT,
FOREIGN KEY (user_id) REFERENCES users(id)
);

text

Each `user` has at most one `user_profile`, and each `user_profile` belongs to exactly one `user`.

---

### One-to-Many (1:N)

A single row in table A can be linked to many rows in table B, but each row in table B refers back to only one row in table A.

This is the most common relationship.

Example (user → addresses):

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL
);

CREATE TABLE addresses (
id SERIAL PRIMARY KEY,
user_id INTEGER NOT NULL,
city VARCHAR(100) NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id)
);

text

- One user can have many addresses.
- Each address belongs to exactly one user.

---

### Many-to-Many (M:N)

Rows in table A can relate to many rows in table B, and rows in table B can relate to many rows in table A.  
This is implemented using a **junction table** (also called a join table or bridge table).

Example (students ↔ courses):

CREATE TABLE students (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL
);

CREATE TABLE courses (
id SERIAL PRIMARY KEY,
title VARCHAR(100) NOT NULL
);

CREATE TABLE student_courses (
student_id INTEGER NOT NULL,
course_id INTEGER NOT NULL,
PRIMARY KEY (student_id, course_id),
FOREIGN KEY (student_id) REFERENCES students(id),
FOREIGN KEY (course_id) REFERENCES courses(id)
);

text

- One student can enroll in many courses.
- One course can have many students.
- `student_courses` connects them.

---

## How Relationships Are Implemented

### Primary Keys

- Uniquely identify rows.
- Common patterns:
  - Auto-increment integer (`SERIAL`, `BIGSERIAL`).
  - UUIDs.

Example:

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) NOT NULL
);

text

### Foreign Keys

- Enforce that a value in one table must exist in another table’s primary key column.
- Help maintain **referential integrity**.

Example:

CREATE TABLE addresses (
id SERIAL PRIMARY KEY,
user_id INTEGER NOT NULL,
city VARCHAR(100) NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

text

`ON DELETE CASCADE` means:
- If a user is deleted, all their addresses are deleted automatically.

Other common options:
- `ON DELETE RESTRICT` / `NO ACTION`: Prevent deleting the parent row if child rows exist.
- `ON DELETE SET NULL`: Set FK to `NULL` when parent row is deleted.

---

## Relationships in SQL vs NoSQL

### In SQL (Relational Databases)

- Data is spread across multiple **normalized** tables.
- Relationships are explicit via foreign keys.
- You read related data using **joins**.

Example: get user and their address in a single query:

SELECT u.id, u.username, u.email,
a.city, a.country, a.street, a.pincode
FROM users u
JOIN addresses a ON u.id = a.user_id
WHERE u.id = 1;

text

### In MongoDB (NoSQL)

Two main ways to represent relationships:

1. **Embedding (denormalization)**  
   Store related data inside the same document.

{
"_id": ObjectId("..."),
"username": "johndoe",
"email": "john@example.com",
"address": {
"city": "New York",
"country": "USA",
"street": "123 Broadway St",
"pincode": "10001"
}
}

text

2. **Referencing (manual relations)**  
Store references using IDs and resolve in the application.

// users
{ "_id": ObjectId("u1"), "username": "johndoe" }

// addresses
{ "_id": ObjectId("a1"), "userId": ObjectId("u1"), "city": "New York" }

text

NoSQL databases typically do not enforce foreign keys at the database level; relationships are handled by the application.

---

## Why Relationships Matter

- **Data integrity**: Ensures data is consistent (no orders without customers, no addresses without users if not allowed).
- **Reduced redundancy**: Avoids duplicating the same data all over the place.
- **Better organization**: Models real-world entities and their connections clearly.
- **Efficient querying**: Using joins, you can fetch related data in a single query.

---

## Quick Summary Table

| Concept         | What it is                                   | Example                            |
|----------------|-----------------------------------------------|------------------------------------|
| Primary key    | Unique ID for each row                       | `users.id`                         |
| Foreign key    | Column that references another table’s PK    | `addresses.user_id → users.id`     |
| One-to-one     | One row ↔ one row                            | `users` ↔ `user_profiles`          |
| One-to-many    | One row ↔ many rows                          | `users` → `addresses`              |
| Many-to-many   | Many rows ↔ many rows                        | `students` ↔ `courses` via junction|
| Join (SQL)     | Query-time combination of related tables     | `users JOIN addresses ON ...`      |

If you want, the next step can be a similar Markdown note just for joins with diagrams or ASCII visuals for INNER, LEFT, RIGHT, and FULL joins.