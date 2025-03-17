import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css'],
  providers: [DatePipe]

})
export class TransfersComponent implements OnInit {
pageChange($event: any) {
throw new Error('Method not implemented.');
}
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

  internalPaymentsForm: FormGroup;
  externalPaymentsForm: FormGroup;
  internalFormattedDate: string | null = null;
  externalFormattedDate: string | null = null;

  internalPaymentsList = [
    { fromAccount: 'Account1', toAccount: 'Account2', currency: 'USD', amount: '2000', executionDate: 'Aug 6, 2024' },
    { fromAccount: 'Account2', toAccount: 'Account3', currency: 'EUR', amount: '3200', executionDate: 'Aug 1, 2024' },
    { fromAccount: 'Account3', toAccount: 'Account4', currency: 'GBP', amount: '1500', executionDate: 'Jul 26, 2024' },
    { fromAccount: 'Account4', toAccount: 'Account1', currency: 'USD', amount: '6000', executionDate: 'Jul 1, 2024' },
    { fromAccount: 'Account1', toAccount: 'Account3', currency: 'EUR', amount: '4000', executionDate: 'Jun 30, 2024' }
  ];

  externalPaymentsList = [
    { fromAccount: 'Account1', toAccount: 'Account3', currency: 'USD', sortCode: '123456', amount: '4500', executionDate: 'Aug 1, 2024' },
    { fromAccount: 'Account2', toAccount: 'Account4', currency: 'EUR', sortCode: '654321', amount: '2200', executionDate: 'Jul 29, 2024' },
    { fromAccount: 'Account3', toAccount: 'Account1', currency: 'GBP', sortCode: '111111', amount: '2000', executionDate: 'Jul 12, 2024' },
    { fromAccount: 'Account4', toAccount: 'Account2', currency: 'USD', sortCode: '222222', amount: '1000', executionDate: 'Jun 27, 2024' },
    { fromAccount: 'Account1', toAccount: 'Account4', currency: 'EUR', sortCode: '333333', amount: '2700', executionDate: 'Jun 8, 2024' }
  ];

  constructor(private fb: FormBuilder, private datePipe: DatePipe) { }

  ngOnInit() {
    this.internalPaymentsForm = this.fb.group({
      fromAccount: [null, Validators.required],
      toAccount: [null, Validators.required],
      currency: [null, Validators.required],
      amount: [null, Validators.required],
      executionDate: [null, Validators.required],
      reference: ['', Validators.required]
    });

    this.internalPaymentsForm.get('executionDate')?.valueChanges.subscribe(value => {
      this.internalFormattedDate = this.datePipe.transform(value, 'MMM dd, yyyy');
    });

    this.externalPaymentsForm = this.fb.group({
      fromAccount: [null, Validators.required],
      toAccount: [null, Validators.required],
      currency: [null, Validators.required],
      amount: [null, Validators.required],
      executionDate: [null, Validators.required],
      accountNumber: ['', Validators.required],
      sortCode: ['', Validators.required],
      reference: ['', Validators.required]
    });
    
    this.externalPaymentsForm.get('executionDate')?.valueChanges.subscribe(value => {
      this.externalFormattedDate = this.datePipe.transform(value, 'MMM dd, yyyy');
    });
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
        return `${baseClass} pi-money-bill`; 
    }
  }

  filterToAccounts(fromAccount: string) {
    return this.accounts.filter(account => account.value !== fromAccount);
  }

  submitInternal() {
    if (this.internalPaymentsForm.invalid) {
      this.internalPaymentsForm.markAllAsTouched();
      return;
    }
    this.internalPaymentsForm.value["executionDate"] = this.internalFormattedDate;
    this.internalPaymentsList.unshift(this.internalPaymentsForm.value);
    this.internalPaymentsForm.reset();
  }

  clearInternal() {
    this.internalPaymentsForm.reset();
  }

  submitExternal() {
    if (this.externalPaymentsForm.invalid) {
      this.externalPaymentsForm.markAllAsTouched();
      return;
    }

    this.externalPaymentsForm.value["executionDate"] = this.externalFormattedDate;
    this.externalPaymentsList.unshift(this.externalPaymentsForm.value);
    this.externalPaymentsForm.reset();
  }

  clearExternal() {
    this.externalPaymentsForm.reset();
  }
}
