// This imports the database client from client.js.
import db from "./client.js";

// This function gets every user from the users table.
export async function getUsers() {
  // This stores the SQL query in a variable.
  const SQL = "SELECT * FROM users ORDER BY id;";

  // This runs the SQL query.
  const { rows } = await db.query(SQL);

  // This returns all of the user rows.
  return rows;
}

// This function gets one user by email.
export async function getUserByEmail(email) {
  // This runs a SQL query that looks for one user with the matching email.
  const {
    // This takes the first row from the rows array and names it user.
    rows: [user],
  } = await db.query("SELECT * FROM users WHERE email = $1;", [email]);

  // This returns the one user that was found.
  return user;
}

// This function gets one user by id.
export async function getUserById(id) {
  // This runs a SQL query that looks for one user with the matching id.
  const {
    // This takes the first row from the rows array and names it user.
    rows: [user],
  } = await db.query("SELECT * FROM users WHERE id = $1;", [id]);

  // This returns the one user that was found.
  return user;
}

// This function creates one user in the users table.
export async function createUser(name, email, passwordHash) {
  // This runs an INSERT query to add a new user to the table.
  const {
    // This takes the first returned row and names it user.
    rows: [user],
  } = await db.query(
    // This SQL adds values into the name, email, and password_hash columns.
    `INSERT INTO users (name, email, password_hash)
     VALUES ($1, $2, $3)
     RETURNING *;`,
    // These are the real values that replace $1, $2, and $3.
    [name, email, passwordHash]
  );

  // This returns the new user that was just created.
  return user;
}

// This function creates the users table.
export async function createUsersTable() {
  // This creates the users table if it does not already exist.
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `);
}
