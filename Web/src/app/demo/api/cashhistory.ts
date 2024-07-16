import { CashHistoryDelta } from "./cashhistoryDelta";

export interface CashHistory
{
    Entity: string;
    BankAccountNumber: string;
    Currency: string;
    Market: string;
    Metadata:string;
    BalanceType: string;
    Day1: number;
    Day2: number;
    Day3: number;
    Day4: number;
    Day5: number;
    Day6: number;
    Day7: number;
    Delta: CashHistoryDelta[];
}