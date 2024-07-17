import { BackAccountBalance } from "./bankAccountBalance";

export interface BankAccountDetail
{
    entity: string;
    imageUrl: string;
    acountName: string;
    iban: string;
    accountNumber: string;
    swiftCode: string;
    currency: string;
    market: string;
    country: string;
    city: string;
    alias: string;
    metadata: string;
    trexid: string;
    balance: BackAccountBalance;
}