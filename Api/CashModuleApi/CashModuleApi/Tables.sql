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

CREATE TABLE IF NOT EXISTS Users (
    id SERIAL PRIMARY KEY,
    Username VARCHAR(50) UNIQUE NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    PasswordHash VARCHAR(255) NOT NULL,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    IsActive BOOLEAN DEFAULT true,
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LastLoginAt TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Modules (
    id SERIAL PRIMARY KEY,
    Name VARCHAR(50) UNIQUE NOT NULL,
    Description TEXT,
    IsActive BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS UserModules (
    id SERIAL PRIMARY KEY,
    UserId INTEGER REFERENCES Users(id),
    ModuleId INTEGER REFERENCES Modules(id),
    AssignedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(UserId, ModuleId)
);

CREATE TABLE IF NOT EXISTS Features (
    id SERIAL PRIMARY KEY,
    Name VARCHAR(50) UNIQUE NOT NULL,
    Description TEXT,
    ModuleId INTEGER REFERENCES Modules(id),
    IsActive BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS UserFeatures (
    id SERIAL PRIMARY KEY,
    UserId INTEGER REFERENCES Users(id),
    FeatureId INTEGER REFERENCES Features(id),
    AssignedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(UserId, FeatureId)
);

-- Insert default module
INSERT INTO Modules (Name, Description) 
VALUES ('Treasury Deals', 'Treasury Deals Management Module')
ON CONFLICT (Name) DO NOTHING;

-- Insert default features for Treasury Deals module
INSERT INTO Features (Name, Description, ModuleId)
SELECT 
    'View Deals',
    'Can view treasury deals',
    id
FROM Modules 
WHERE Name = 'Treasury Deals'
ON CONFLICT (Name) DO NOTHING;

INSERT INTO Features (Name, Description, ModuleId)
SELECT 
    'Create Deals',
    'Can create new treasury deals',
    id
FROM Modules 
WHERE Name = 'Treasury Deals'
ON CONFLICT (Name) DO NOTHING;

INSERT INTO Features (Name, Description, ModuleId)
SELECT 
    'Edit Deals',
    'Can edit existing treasury deals',
    id
FROM Modules 
WHERE Name = 'Treasury Deals'
ON CONFLICT (Name) DO NOTHING;

-- Insert two default users (password: Test@123)
INSERT INTO Users (Username, Email, PasswordHash, FirstName, LastName)
VALUES 
    ('admin', 'admin@example.com', '$2a$11$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBAQHxKxJ5J5Hy', 'Admin', 'User'),
    ('user1', 'user1@example.com', '$2a$11$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBAQHxKxJ5J5Hy', 'Regular', 'User')
ON CONFLICT (Username) DO NOTHING;

-- Assign Treasury Deals module to both users
INSERT INTO UserModules (UserId, ModuleId)
SELECT u.id, m.id
FROM Users u
CROSS JOIN Modules m
WHERE m.Name = 'Treasury Deals'
ON CONFLICT (UserId, ModuleId) DO NOTHING;

-- Assign all features to admin user
INSERT INTO UserFeatures (UserId, FeatureId)
SELECT u.id, f.id
FROM Users u
CROSS JOIN Features f
WHERE u.Username = 'admin'
ON CONFLICT (UserId, FeatureId) DO NOTHING;

-- Assign only View Deals feature to regular user
INSERT INTO UserFeatures (UserId, FeatureId)
SELECT u.id, f.id
FROM Users u
CROSS JOIN Features f
WHERE u.Username = 'user1' AND f.Name = 'View Deals'
ON CONFLICT (UserId, FeatureId) DO NOTHING;
