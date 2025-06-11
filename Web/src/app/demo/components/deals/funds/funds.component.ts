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
    showCalculationDialog: boolean = false;
    showFundDialog: boolean = false;
    newFund: Fund = {
        ISIN: '',
        Counterparty: '',
        FundName: '',
        Currency: 'USD',
        Exposure: null,
        Limit: null,
        MMFInvestment: null,
        DailyYield: null
    };
    isEditMode: boolean = false;
    editingIndex: number = null;

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
                Exposure: 1000,
                Limit: 2000,
                MMFInvestment: 1500,
                DailyYield: 0.25
    },
    {
                ISIN: 'ISIN002',
                Counterparty: 'Bank B',
                FundName: 'Money Market Fund B',
      Currency: 'EUR',
                Exposure: 2000,
                Limit: 3000,
                MMFInvestment: 2500,
                DailyYield: 0.5
            }
        ];
    }

    selectFund(fund: Fund) {
        this.selectedFund = fund;
        this.calculateMonthlyReturns();
        this.showCalculationDialog = true;
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

    closeCalculationDialog() {
        this.showCalculationDialog = false;
    }

    openFundDialog() {
        this.resetFundForm();
        this.showFundDialog = true;
    }

    openEditFundDialog(fund: Fund, idx: number) {
        this.editFund(fund, idx);
        this.showFundDialog = true;
    }

    closeFundDialog() {
        this.showFundDialog = false;
        this.resetFundForm();
    }

    addOrUpdateFund() {
        if (!this.newFund.ISIN || !this.newFund.FundName || !this.newFund.Currency) return;
        if (this.isEditMode && this.editingIndex !== null) {
            this.gridData[this.editingIndex] = { ...this.newFund };
        } else {
            this.gridData.push({ ...this.newFund });
        }
        this.closeFundDialog();
    }

    editFund(fund: Fund, idx: number) {
        this.newFund = { ...fund };
        this.isEditMode = true;
        this.editingIndex = idx;
    }

    resetFundForm() {
        this.newFund = {
            ISIN: '',
            Counterparty: '',
            FundName: '',
            Currency: 'USD',
            Exposure: null,
            Limit: null,
            MMFInvestment: null,
            DailyYield: null
        };
        this.isEditMode = false;
        this.editingIndex = null;
    }
}
