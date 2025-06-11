import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { MessageService } from 'primeng/api';

interface Fund {
    ISIN: string;
    Counterparty: string;
    FundName: string;
    Currency: string;
    Exposure: number;
    Limit: number;
    MMFInvestment: number;
    DailyYield: number;
}

interface MonthlyBreakdown {
    month: string;
    openingBalance: number;
    monthlyReturn: number;
    closingBalance: number;
}

@Component({
    selector: 'app-funds',
    standalone: false,
    templateUrl: './funds.component.html',
    styleUrl: './funds.component.scss',
    providers: [MessageService]
})
export class FundsComponent implements OnInit, OnDestroy {
    filterMode: FilterableSettings = "menu";
    gridData: Fund[] = [];
    selectedFund: Fund | null = null;
    monthlyYield: number = 0;
    monthlyReturn: number = 0;
    monthlyBreakdown: MonthlyBreakdown[] = [];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.loadFunds();
    }

    ngOnDestroy() {}

    loadFunds() {
        // Sample data - replace with actual API call
        this.gridData = [
            {
                ISIN: 'ISIN001',
                Counterparty: 'Bank A',
                FundName: 'Money Market Fund A',
                Currency: 'USD',
                Exposure: 1000000,
                Limit: 2000000,
                MMFInvestment: 1500000,
                DailyYield: 4.86
            },
            {
                ISIN: 'ISIN002',
                Counterparty: 'Bank B',
                FundName: 'Money Market Fund B',
                Currency: 'EUR',
                Exposure: 2000000,
                Limit: 3000000,
                MMFInvestment: 2500000,
                DailyYield: 4.91
            }
        ];
    }

    selectFund(fund: Fund) {
        this.selectedFund = fund;
        this.calculateMonthlyReturns();
    }

    calculateMonthlyReturns() {
        if (!this.selectedFund) return;

        // Calculate monthly yield (assuming 30 days in a month)
        this.monthlyYield = this.selectedFund.DailyYield * 30;
        
        // Calculate monthly return
        this.monthlyReturn = (this.selectedFund.MMFInvestment * this.monthlyYield) / 100;

        // Generate monthly breakdown
        this.generateMonthlyBreakdown();
    }

    generateMonthlyBreakdown() {
        if (!this.selectedFund) return;

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        let balance = this.selectedFund.MMFInvestment;
        this.monthlyBreakdown = months.map(month => {
            const monthlyReturn = (balance * this.monthlyYield) / 100;
            const closingBalance = balance + monthlyReturn;
            
            const breakdown = {
                month,
                openingBalance: balance,
                monthlyReturn,
                closingBalance
            };

            balance = closingBalance; // Update balance for next month
            return breakdown;
        });
    }
}
