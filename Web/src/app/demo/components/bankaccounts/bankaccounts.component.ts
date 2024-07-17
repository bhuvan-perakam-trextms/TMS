import { Component, OnInit, OnDestroy } from '@angular/core';
import { BankAccountDetail } from '../../api/bankaccountdetail';

@Component({
  templateUrl: './bankaccounts.component.html'
})
export class BankaccountsComponent implements OnInit, OnDestroy {

  bankAccountDetails: BankAccountDetail[] = []
  
  constructor() {

  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }
}
