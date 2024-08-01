import { Component, OnInit } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-moneymovements',
  templateUrl: './moneymovements.component.html',
  styleUrls: ['./moneymovements.component.css']
})
export class MoneymovementsComponent implements OnInit {
  public tableData: any[] = [
    { date: '29-07-2024', account: '123456789', counterparty: 'Counterpart 1', description: 'Loan Payment', direction: 'Credit', amount: '$2000', status: 'Active' },
    { date: '28-07-2024', account: '987654321', counterparty: 'Counterpart 2', description: 'Contract Payment', direction: 'Debit', amount: '$3000', status: 'InActive' },
    { date: '27-07-2024', account: '111222333', counterparty: 'Counterpart 3', description: 'Loan Payment', direction: 'Credit', amount: '$4000', status: 'Failed' },
    { date: '29-07-2024', account: '444555666', counterparty: 'Counterpart 2', description: 'Contract Payment', direction: 'Debit', amount: '$2000', status: 'Not Approved' },
    { date: '28-07-2024', account: '777888999', counterparty: 'Counterpart 1', description: 'Contract Payment', direction: 'Debit', amount: '$1000', status: 'Expired' },
    { date: '29-07-2024', account: '123123123', counterparty: 'Counterpart 4', description: 'Loan Payment', direction: 'Debit', amount: '$5000', status: 'Active' },
    { date: '28-07-2024', account: '456456456', counterparty: 'Counterpart 5', description: 'Contract Payment', direction: 'Credit', amount: '$2500', status: 'InActive' },
    { date: '27-07-2024', account: '789789789', counterparty: 'Counterpart 6', description: 'Loan Payment', direction: 'Debit', amount: '$3500', status: 'Failed' },
    { date: '29-07-2024', account: '101010101', counterparty: 'Counterpart 5', description: 'Contract Payment', direction: 'Debit', amount: '$1500', status: 'Not Approved' },
    { date: '28-07-2024', account: '202020202', counterparty: 'Counterpart 4', description: 'Contract Payment', direction: 'Debit', amount: '$2200', status: 'Expired' },
    { date: '29-07-2024', account: '303030303', counterparty: 'Counterpart 7', description: 'Loan Payment', direction: 'Debit', amount: '$3800', status: 'Active' },
    { date: '28-07-2024', account: '404040404', counterparty: 'Counterpart 8', description: 'Contract Payment', direction: 'Credit', amount: '$4100', status: 'InActive' },
    { date: '27-07-2024', account: '505050505', counterparty: 'Counterpart 9', description: 'Loan Payment', direction: 'Debit', amount: '$2700', status: 'Failed' },
    { date: '29-07-2024', account: '606060606', counterparty: 'Counterpart 8', description: 'Contract Payment', direction: 'Debit', amount: '$1800', status: 'Not Approved' },
    { date: '28-07-2024', account: '707070707', counterparty: 'Counterpart 7', description: 'Contract Payment', direction: 'Credit', amount: '$2900', status: 'Expired' },
    { date: '29-07-2024', account: '808080808', counterparty: 'Counterpart 10', description: 'Loan Payment', direction: 'Debit', amount: '$3000', status: 'Active' },
    { date: '28-07-2024', account: '909090909', counterparty: 'Counterpart 11', description: 'Contract Payment', direction: 'Debit', amount: '$2400', status: 'InActive' },
    { date: '27-07-2024', account: '123321123', counterparty: 'Counterpart 12', description: 'Loan Payment', direction: 'Credit', amount: '$4500', status: 'Failed' },
    { date: '29-07-2024', account: '321123321', counterparty: 'Counterpart 10', description: 'Contract Payment', direction: 'Debit', amount: '$3600', status: 'Not Approved' },
    { date: '28-07-2024', account: '654321654', counterparty: 'Counterpart 11', description: 'Contract Payment', direction: 'Credit', amount: '$1900', status: 'Expired' }
  ];


  filterMode: FilterableSettings = "menu";
  group: any[] = [];
  groupByFields: any[] = [];
  selectedGroupByField: { code: 'date', name: 'Date' };

  ngOnInit() {
    this.groupByFields = [
      { code: 'date', name: 'Date' },
      { code: 'account', name: 'Account' },
      { code: 'counterparty', name: 'Counterparty' },
      { code: 'description', name: 'Description' },
      { code: 'direction', name: 'Direction' },
      { code: 'amount', name: 'Amount' },
      { code: 'status', name: 'Status' }
    ];

    this.selectedGroupByField = this.groupByFields[0];
    console.log('groupByFields:', this.groupByFields);
    console.log('selectedGroupByField:', this.selectedGroupByField);
  }

  onGroupChange(event: { code: 'date', name: 'Date' }) {
    this.group = [{ field: event.code }];
    console.log('Group changed to:', this.group);
  }
}
