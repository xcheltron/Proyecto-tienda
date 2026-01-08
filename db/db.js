import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, 'tienda.db');
const schemaPath = path.join(__dirname, 'schema.sql');
const seedPath = path.join(__dirname, 'seed.sql');

const db = new Database(dbPath);
db.pragma('foreign_keys = ON');

// schema
db.exec(fs.readFileSync(schemaPath, 'utf8'));

// seed
db.exec(fs.readFileSync(seedPath, 'utf8'));

export default db;
