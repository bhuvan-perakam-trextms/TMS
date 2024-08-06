import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit, OnDestroy {
  accounts: any[] = [];
  currencies: any[] = [];
  internalPayments: any;
  externalPayments: any;

  ngOnInit(): void {
    this.accounts = [
      { label: 'Account 1', value: 'account1' },
      { label: 'Account 2', value: 'account2' },
      { label: 'Account 3', value: 'account3' },
    ];

    this.currencies = [
      { label: 'USD', value: 'usd' },
      { label: 'EUR', value: 'eur' },
      { label: 'GBP', value: 'gbp' },
    ];

    this.internalPayments = {
      fromAccount: '',
      toAccount: '',
      currency: '',
      account: '',
      reference: '',
      executionDate: null
    };

    this.externalPayments = {
      fromAccount: '',
      toAccount: '',
      accountNumber: '',
      name: '',
      sortCode: '',
      currency: '',
      account: '',
      reference: '',
      executionDate: null
    };
  }

  ngOnDestroy(): void {
  }

  submitInternal() {
    console.log('Internal Payments Submitted:', this.internalPayments);
  }

  clearInternal() {
    this.internalPayments = {
      fromAccount: '',
      toAccount: '',
      currency: '',
      account: '',
      reference: '',
      executionDate: null
    };
  }

  submitExternal() {
    console.log('External Payments Submitted:', this.externalPayments);
  }

  clearExternal() {
    this.externalPayments = {
      fromAccount: '',
      toAccount: '',
      accountNumber: '',
      name: '',
      sortCode: '',
      currency: '',
      account: '',
      reference: '',
      executionDate: null
    };
  }
}
