import { Component, OnInit, OnDestroy } from '@angular/core';
import { BankAccountDetail } from '../../api/bankaccountdetail';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { BankService } from '../../service/bank.service';

@Component({
  templateUrl: './bankaccounts.component.html'
})
export class BankaccountsComponent implements OnInit, OnDestroy {

  group = [{ field: "entity" }]
  bankAccountDetails: BankAccountDetail[] = []
  filterMode: FilterableSettings = "menu";
  
  constructor(private bankService: BankService) {

  }

  ngOnInit(): void {
    this.bankService.getBankAccountsDetails().then(data => this.bankAccountDetails = data);
  }

  ngOnDestroy(): void {
    
  }
}
