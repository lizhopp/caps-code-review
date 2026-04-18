// This imports the database client.
import db from "./client.js";
// This imports the tree creation function.
import { createTree } from "./trees.js";
// This imports the user creation function.
import { createUser } from "./users.js";

// This connects to the database.
await db.connect();

// This starts a try/finally block so the database always closes.
try {
  // This creates one sample user.
  const demoUser = await createUser("Demo User", "demo@example.com", "password123");
  // This creates one sample tree for that user.
  await createTree(
    demoUser.id,
    "Frontend Developer Path",
    "A simple path for learning HTML, CSS, JavaScript, and React.",
    false
  );
  // This logs a message after the seed finishes.
  console.log("Database seeded.");
} finally {
  // This closes the database connection.
  await db.end();
}
