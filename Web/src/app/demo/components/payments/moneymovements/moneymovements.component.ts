// moneymovements.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-moneymovements',
  templateUrl: './moneymovements.component.html',
//   styleUrls: ['./moneymovements.component.css']
})
export class MoneymovementsComponent {
  public tableData: any[] = [
    { status: 'Active', date: '29-07-2024', account: 'Account Number 1', counterparty: 'Counterpart 1', description: 'Loan Payment', direction: 'Debit', amount: '$2,000' },
    { status: 'Inactive', date: '28-07-2024', account: 'Account Number 2', counterparty: 'Counterpart 2', description: 'Contract Payment', direction: 'Debit', amount: '$3,000' },
    { status: 'Failed', date: '27-07-2024', account: 'Account Number 3', counterparty: 'Counterpart 1', description: 'Loan Payment', direction: 'Debit', amount: '$4,000' },
    { status: 'Not Approved', date: '29-07-2024', account: 'Account Number 1', counterparty: 'Counterpart 2', description: 'Contract Payment', direction: 'Debit', amount: '$2,000' },
    { status: 'Expired', date: '28-07-2024', account: 'Account Number 2', counterparty: 'Counterpart 1', description: 'Contract Payment', direction: 'Debit', amount: '$1,000' }
  ];
}
