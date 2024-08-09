import { Component, OnInit } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from 'src/app/demo/service/country.service';
import { SelectType } from 'src/app/demo/api/selectType';
import { CurrencyService } from 'src/app/demo/service/currency.service';
import { CounterpartyService } from 'src/app/demo/service/counterparty.service';


@Component({
  templateUrl: './account.component.html',

})
export class AccountComponent implements OnInit {
  filterMode: FilterableSettings = "menu";
  counterpartyAccountForm: FormGroup;
  displayOverlay: boolean = false;

  accountdata: any[] = [];
  selectedcounterPartyDetail: any

  selectedCountry!: SelectType;
  countries: SelectType[];

  selectedCurrency!: SelectType;
  currencies: SelectType[] = [];

  constructor(private fb: FormBuilder,
    private countryService: CountryService,
    private currencyService: CurrencyService,
    private counterpartyService: CounterpartyService) {

  }

  ngOnInit(): void {
    this.countryService.getCountries().then(data => { this.countries = data; });
    this.currencyService.getCurrencies().then(data => { this.currencies = data; });
    this.counterpartyService.getCounterpartyAccounts().then(data => {this.accountdata = data;});

    this.initForm();
  }

  initForm() {
    this.counterpartyAccountForm = this.fb.group({
      accountName: ['', Validators.required],
      accountNumber: ['', Validators.required],
      country: [null, Validators.required],
      currency: [null, Validators.required],
      iban: ['', Validators.required],
      swift_bic: ['', Validators.required],
      trexid: ['', Validators.required],
      isActive: ['', Validators.required],
    });
  }

  handlePopup(dataItem) {
    this.displayOverlay = true;
    this.selectedcounterPartyDetail = dataItem;
    console.log(this.selectedcounterPartyDetail);
  }

  handleSubmit() {
    if (this.counterpartyAccountForm.valid) {

    } else {
      this.counterpartyAccountForm.markAllAsTouched();
    }
  }
}













