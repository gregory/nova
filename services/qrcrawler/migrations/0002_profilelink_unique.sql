CREATE UNIQUE INDEX IF NOT EXISTS crawl_results_profileLink_idx ON crawl_results(profileLink);
ALTER TABLE crawl_results ADD COLUMN phoneHistory TEXT;
ALTER TABLE crawl_results ADD COLUMN website TEXT;
