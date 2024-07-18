CREATE OR REPLACE FUNCTION upsert_bank_account(
    p_id INT,
    p_account_name TEXT,
    p_iban TEXT,
    p_account_number TEXT,
    p_swift_bic TEXT,
    p_currency TEXT,
    p_market TEXT,
    p_entity TEXT,
    p_alias TEXT,
    p_metadata TEXT[],
    p_trexid TEXT[]
) RETURNS VOID AS $$
BEGIN
    INSERT INTO BankAccounts (id, AccountName, IBAN, AccountNumber, SWIFTBIC, Currency, Market, Entity, Alias, Metadata, Trexid)
    VALUES (p_id, p_account_name, p_iban, p_account_number, p_swift_bic, p_currency, p_market, p_entity, p_alias, p_metadata, p_trexid)
    ON CONFLICT (id) DO UPDATE
    SET AccountName = EXCLUDED.account_name,
        IBAN = EXCLUDED.iban,
        AccountNumber = EXCLUDED.account_number,
        SWIFTBIC = EXCLUDED.swift_bic,
        Currency = EXCLUDED.currency,
        Market = EXCLUDED.market,
        Entity = EXCLUDED.entity,
        Alias = EXCLUDED.alias,
        Metadata = EXCLUDED.metadata,
        Trexid = EXCLUDED.trexid;
END;
$$ LANGUAGE plpgsql;
