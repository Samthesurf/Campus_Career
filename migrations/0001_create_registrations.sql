CREATE TABLE registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  college TEXT NOT NULL,
  department TEXT NOT NULL,
  level TEXT NOT NULL,
  interest TEXT NOT NULL,
  heard_from TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);
