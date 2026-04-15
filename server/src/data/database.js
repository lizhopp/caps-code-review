import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const databasePath = path.join(__dirname, "db.json");

async function readDatabase() {
  const fileContents = await fs.readFile(databasePath, "utf-8");
  return JSON.parse(fileContents);
}

async function writeDatabase(database) {
  await fs.writeFile(databasePath, JSON.stringify(database, null, 2));
}

function nextId(records) {
  return records.length === 0 ? 1 : Math.max(...records.map((record) => record.id)) + 1;
}

export async function getTrees() {
  const database = await readDatabase();
  return database.skillTrees;
}

export async function addTree({ title, description }) {
  const database = await readDatabase();
  const tree = {
    id: nextId(database.skillTrees),
    title,
    description,
    createdAt: new Date().toISOString(),
  };

  database.skillTrees.push(tree);
  await writeDatabase(database);
  return tree;
}
