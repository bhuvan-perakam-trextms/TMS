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
    Trexid TEXT[],
    IsActive BOOL,
    ImageUrl TEXT[]

);

CREATE TABLE Users (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    LastLoginAt DATETIME NULL
);

-- Insert user with hashed password for "P@ssw0rd@123"
INSERT INTO Users (Username, Email, PasswordHash, FirstName, LastName)
VALUES 
    ('admin', 'admin@example.com', '$2a$11$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBAQHxKxJ5J5Hy', 'Admin', 'User')
ON CONFLICT (Username) DO NOTHING;

-- Insert another user with the same password
INSERT INTO Users (Username, Email, PasswordHash, FirstName, LastName)
VALUES 
    ('user1', 'user1@example.com', '$2a$11$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBAQHxKxJ5J5Hy', 'Regular', 'User')
ON CONFLICT (Username) DO NOTHING;

-- Insert a test user (password: test123)
INSERT INTO Users (Username, Password, Email, IsActive)
VALUES ('testuser', 'test123', 'test@example.com', 1);
