CREATE TABLE IF NOT EXISTS crawl_jobs (
  url TEXT PRIMARY KEY,
  jobStatus INTEGER NOT NULL,
  jobScheduledAt TEXT NOT NULL,
  jobUpdatedAt TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS crawl_results (
  profileLink TEXT PRIMARY KEY,
  phoneNumber TEXT NOT NULL,
  url TEXT NOT NULL,
  profileName TEXT NOT NULL,
  region TEXT,
  languages TEXT,
  publicationText TEXT,
  publicationTimestamp TEXT,
  nationality TEXT,
  createdAt TEXT DEFAULT (CURRENT_TIMESTAMP),
  contactedAt TEXT
);
