import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { MessageService } from 'primeng/api';

interface Counterparty {
    name: string;
    code: string;
}

interface Account {
    name: string;
    code: string;
}

interface Deposit {
    id?: number;
    counterparty: Counterparty;
    currency: string;
    amount: number;
    interestRate: number;
    startDate: Date;
    maturityDate: Date;
    account: Account;
    notes?: string;
}

@Component({
    selector: 'app-deposits',
    standalone: false,
    templateUrl: './deposits.component.html',
    styleUrl: './deposits.component.scss',
    providers: [MessageService]
})
export class DepositsComponent implements OnInit, OnDestroy {

    filterMode: FilterableSettings = "menu";
    
    // Dropdown options
    counterparties: Counterparty[] = [
        { name: 'HSBC', code: 'HSBC' },
        { name: 'Barclays', code: 'BARC' },
        { name: 'NatWest', code: 'NW' },
        { name: 'Lloyds', code: 'LLOY' },
        { name: 'DBS', code: 'DBS' },
        { name: 'Citi Bank', code: 'CITI' },
        { name: 'J.P. Morgan Chase', code: 'JPM' },
        { name: 'Bank of America', code: 'BOA' },
        { name: 'BBVA', code: 'BBVA' }
    ];

    currencies: string[] = ['GBP', 'USD', 'EUR'];

    accounts: Account[] = [
        { name: 'UK Safeguarding Account', code: 'UKSA' },
        { name: 'UK Fee Account', code: 'UKFA' },
        { name: 'UK Product Settlement Account', code: 'UKPSA' },
        { name: 'UK Treasury Settlement Account', code: 'UKTSA' },
        { name: 'UK Collateral Account', code: 'UKCA' },
        { name: 'EEA Treasury Settlement Account', code: 'EETSA' },
        { name: 'EEA Fee Account', code: 'EEFA' },
        { name: 'EEA Collateral Account', code: 'EECA' }
    ];

    // New deposit form model
    newDeposit: Deposit = {
        counterparty: null,
        currency: 'GBP',
        amount: null,
        interestRate: null,
        startDate: new Date(),
        maturityDate: null,
        account: null,
        notes: ''
    };

    // List of deposits
    deposits: Deposit[] = [];
    
    // Edit mode flag
    isEditMode: boolean = false;
    editingDepositId: number = null;

    showCalculationDialog: boolean = false;
    selectedDeposit: Deposit | null = null;
    totalDays: number = 0;
    totalInterest: number = 0;
    maturityAmount: number = 0;

    constructor(private messageService: MessageService) {}

    ngOnInit(): void {
        // Load existing deposits from service/storage
        this.loadDeposits();
    }

    ngOnDestroy(): void {
        // Cleanup if needed
    }

    loadDeposits(): void {
        // TODO: Load deposits from service
        // For now, using sample data
        this.deposits = [
            {
                id: 1,
                counterparty: this.counterparties[0],
                currency: 'GBP',
                amount: 1000000,
                interestRate: 4.5,
                startDate: new Date('2024-03-15'),
                maturityDate: new Date('2024-06-15'),
                account: this.accounts[0],
                notes: '3-month deposit'
            },
            {
                id: 2,
                counterparty: this.counterparties[1],
                currency: 'USD',
                amount: 2000000,
                interestRate: 5.0,
                startDate: new Date('2024-03-16'),
                maturityDate: new Date('2024-09-16'),
                account: this.accounts[2],
                notes: '6-month deposit'
            }
        ];
    }

    addDeposit(): void {
        if (this.validateDeposit()) {
            if (this.isEditMode) {
                // Update existing deposit
                const index = this.deposits.findIndex(d => d.id === this.editingDepositId);
                if (index !== -1) {
                    this.deposits[index] = {
                        ...this.newDeposit,
                        id: this.editingDepositId
                    };
                    this.messageService.add({
                        severity: 'success',
                        summary: 'Success',
                        detail: 'Deposit updated successfully'
                    });
                }
                this.cancelEdit();
            } else {
                // Add new deposit
                const deposit: Deposit = {
                    ...this.newDeposit,
                    id: this.deposits.length + 1
                };
                this.deposits.push(deposit);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Success',
                    detail: 'Deposit added successfully'
                });
            }
            this.resetForm();
        }
    }

    editDeposit(deposit: Deposit): void {
        this.isEditMode = true;
        this.editingDepositId = deposit.id;
        this.newDeposit = { ...deposit };
    }

    cancelEdit(): void {
        this.isEditMode = false;
        this.editingDepositId = null;
        this.resetForm();
    }

    deleteDeposit(deposit: Deposit): void {
        const index = this.deposits.findIndex(d => d.id === deposit.id);
        if (index !== -1) {
            this.deposits.splice(index, 1);
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Deposit deleted successfully'
            });
        }
    }

    private validateDeposit(): boolean {
        if (!this.newDeposit.counterparty) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Please select a counterparty'
            });
            return false;
        }

        if (!this.newDeposit.amount || this.newDeposit.amount <= 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Please enter a valid amount'
            });
            return false;
        }

        if (!this.newDeposit.interestRate || this.newDeposit.interestRate <= 0) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Please enter a valid interest rate'
            });
            return false;
        }

        if (!this.newDeposit.startDate) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Please select a start date'
            });
            return false;
        }

        if (!this.newDeposit.maturityDate) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Please select a maturity date'
            });
            return false;
        }

        if (this.newDeposit.maturityDate <= this.newDeposit.startDate) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Maturity date must be after start date'
            });
            return false;
        }

        if (!this.newDeposit.account) {
            this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Please select an account'
            });
            return false;
        }

        return true;
    }

    private resetForm(): void {
        this.newDeposit = {
            counterparty: null,
            currency: 'GBP',
            amount: null,
            interestRate: null,
            startDate: new Date(),
            maturityDate: null,
            account: null,
            notes: ''
        };
    }

    calculateReturns(deposit: Deposit) {
        this.selectedDeposit = deposit;
        const startDate = new Date(deposit.startDate);
        const maturityDate = new Date(deposit.maturityDate);
        
        // Calculate total days
        this.totalDays = Math.ceil((maturityDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        
        // Calculate total interest
        this.totalInterest = (deposit.amount * deposit.interestRate * this.totalDays) / (365 * 100);
        
        // Calculate maturity amount
        this.maturityAmount = deposit.amount + this.totalInterest;
        
        // Show calculation dialog
        this.showCalculationDialog = true;
    }
}
