CREATE OR REPLACE FUNCTION UpsertBankAccount(
    Id INT,
    AccountName TEXT,
    Iban TEXT,
    AccountNumber TEXT,
    SwiftBic TEXT,
    Currency TEXT,
    Market TEXT,
    Entity TEXT,
    Alias TEXT,
    Metadata TEXT[],
    Trexid TEXT[],
    IsActive BOOL,
    ImageUrl TEXT[]
) RETURNS VOID AS $$
BEGIN
    INSERT INTO BankAccounts (id, AccountName, IBAN, AccountNumber, SWIFTBIC, Currency, Market, Entity, Alias, Metadata, Trexid, IsActive, ImageUrl)
    VALUES (Id, AccountName, Iban, AccountNumber, SwiftBic, Currency, Market, Entity, Alias, Metadata, Trexid, isActive, imageUrl )
    ON CONFLICT (id) DO UPDATE
    SET AccountName = EXCLUDED.AccountName,
        IBAN = EXCLUDED.Iban,
        AccountNumber = EXCLUDED.AccountNumber,
        SWIFTBIC = EXCLUDED.SwiftBic,
        Currency = EXCLUDED.Currency,
        Market = EXCLUDED.Market,
        Entity = EXCLUDED.Entity,
        Alias = EXCLUDED.Alias,
        Metadata = EXCLUDED.Metadata,
        Trexid = EXCLUDED.Trexid;
        IsActive = EXCLUDED.isActive;
        ImageUrl = EXCLUDED.ImageUrl;
END;
$$ LANGUAGE plpgsql;
