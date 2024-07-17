export interface BackAccountBalance
{
    openingBalance: number;
    liveBalance: number;
    inFlow: number;
    outFlow: number;
    weeklyBalance: number;
    monthlyBalance: number;
    upcomingPayments: Map<string, string>;
}