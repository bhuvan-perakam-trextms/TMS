import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent {
  accounts = [
    { label: 'Account1', value: 'Account1' },
    { label: 'Account2', value: 'Account2' },
    { label: 'Account3', value: 'Account3' },
    { label: 'Account4', value: 'Account4' }

  ]; 
  currencies = [
    { label: 'USD', value: 'USD' },
    { label: 'EUR', value: 'EUR' },
    { label: 'GBP', value: 'GBP' }
  ]; 

  internalPayments = {
    fromAccount: null,
    toAccount: null,
    currency: null,
    executionDate: null,
    reference: ''
  };

  externalPayments = {
    fromAccount: null,
    toAccount: null,
    currency: null,
    executionDate: null,
    accountNumber: '',
    sortCode: '',
    reference: ''
  };

  internalPaymentsList = [
    { fromAccount: 'Account1', toAccount: 'Account2', currency: 'USD', executionDate: 'Aug 6, 2024' },
    { fromAccount: 'Account2', toAccount: 'Account3', currency: 'EUR', executionDate: 'Aug 1, 2024' },
    { fromAccount: 'Account3', toAccount: 'Account4', currency: 'GBP', executionDate: 'Jul 26, 2024' },
    { fromAccount: 'Account4', toAccount: 'Account1', currency: 'USD', executionDate: 'Jul 1, 2024' },
    { fromAccount: 'Account1', toAccount: 'Account3', currency: 'EUR', executionDate: 'Jun 30, 2024' }
  ];

  externalPaymentsList = [
    { fromAccount: 'Account1', toAccount: 'Account3', currency: 'USD', sortCode: '123456', executionDate: 'Aug 1, 2024' },
    { fromAccount: 'Account2', toAccount: 'Account4', currency: 'EUR', sortCode: '654321', executionDate: 'Jul 29, 2024' },
    { fromAccount: 'Account3', toAccount: 'Account1', currency: 'GBP', sortCode: '111111', executionDate: 'Jul 12, 2024' },
    { fromAccount: 'Account4', toAccount: 'Account2', currency: 'USD', sortCode: '222222', executionDate: 'Jun 27, 2024' },
    { fromAccount: 'Account1', toAccount: 'Account4', currency: 'EUR', sortCode: '333333', executionDate: 'Jun 8, 2024' }
  ];

  submitInternal() {
    this.internalPaymentsList.unshift({ ...this.internalPayments });
    this.clearInternal();
  }

  clearInternal() {
    this.internalPayments = {
      fromAccount: null,
      toAccount: null,
      currency: null,
      executionDate: null,
      reference: ''
    };
  }

  getCurrencyClass(currency: string): string {
    const baseClass = "pi pi-fw";
    switch (currency) {
      case 'GBP':
        return `${baseClass} pi-pound`;
      case 'EUR':
        return `${baseClass} pi-euro`;
      case 'USD':
        return `${baseClass} pi-dollar`;
      default:
        return `${baseClass} pi-money-bill`; // Fallback icon
    }
  }
  filterToAccounts(fromAccount: string) {
    return this.accounts.filter(account => account.value !== fromAccount);
  }
  submitExternal() {
    this.externalPaymentsList.unshift({ ...this.externalPayments });
    this.clearExternal();
  }

  clearExternal() {
    this.externalPayments = {
      fromAccount: null,
      toAccount: null,
      currency: null,
      executionDate: null,
      accountNumber: '',
      sortCode: '',
      reference: ''
    };
  }
}
