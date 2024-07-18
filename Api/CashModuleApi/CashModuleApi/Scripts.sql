CREATE TABLE IF NOT EXISTS BankAccounts (
    id SERIAL PRIMARY KEY,
    AccountName TEXT NOT NULL,
    IBAN TEXT NOT NULL,
    AccountNumber TEXT NOT NULL,
    SWIFTBIC TEXT NOT NULL,
    Currency TEXT NOT NULL,
    Market TEXT NOT NULL,
    Entity TEXT NOT NULL,
    Alias TEXT NOT NULL,
    Metadata TEXT[],
    Trexid TEXT[]
);
