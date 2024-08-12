import { Component, OnInit, OnDestroy } from '@angular/core';
import { BankAccountDetail } from '../../api/bankaccountdetail';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { BankService } from '../../service/bank.service';
import { CountryService } from '../../service/country.service';
import { CurrencyService } from '../../service/currency.service';

@Component({
  templateUrl: './bankaccounts.component.html',
  styleUrls: ['./bankaccounts.component.css']
})
export class BankaccountsComponent implements OnInit, OnDestroy {

  group = [{ field: "entity" }]
  bankAccountDetails: BankAccountDetail[] = []
  filterMode: FilterableSettings = "menu";
  displayOverlay: boolean = false;
  selectedBankAccountDetail: any;

  constructor(private bankService: BankService, private countryService: CountryService, private currencyService:CurrencyService) {
  }

  ngOnInit(): void {
    this.bankService.getBankAccountsDetails().then(data => {
      this.bankAccountDetails = data;
      this.selectedBankAccountDetail = this.bankAccountDetails[0];
      console.log(this.selectedBankAccountDetail);
    }
    );
  }

  ngOnDestroy(): void {

  }

  handlePopup(dataItem) {
    this.displayOverlay = true;
    this.selectedBankAccountDetail = dataItem;
    console.log(this.selectedBankAccountDetail);
  }

  getUpcomingPaymentsArray(upcomingPayments: { [key: string]: string } | null | undefined): Array<{ key: string, value: string }> {
    if (!upcomingPayments) {
      return []; 
    }
    return Object.entries(upcomingPayments).map(([key, value]) => ({ key, value }));
  }

}
