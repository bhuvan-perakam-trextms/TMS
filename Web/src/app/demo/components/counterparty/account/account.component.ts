
import { Component, OnInit } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Country {
  name: string;
  code: string;
}

interface Currency {
  name: string;
  code: string;
}



@Component({
  templateUrl: './account.component.html',

})
export class AccountComponent implements OnInit {

  newForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  group = [{ field: "entity" }]
  filterMode: FilterableSettings = "menu";
  accountdata: any[] = [];
  selectedcounterPartyDetail: any
  displayOverlay: boolean = false;

  selectedCountry!: Country;
  selectedCurrency!: Currency;

  countries: Country[] = [
    { name: 'Germany', code: 'DE' },
    { name: 'France', code: 'FR' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'Italy', code: 'IT' },
    { name: 'Spain', code: 'ES' },
    { name: 'Portugal', code: 'PT' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Sweden', code: 'SE' },
    { name: 'Norway', code: 'NO' },
    { name: 'Finland', code: 'FI' }
  ];


  currencies: Currency[] = [
    { name: 'Euro', code: 'EUR' },
    { name: 'British Pound', code: 'GBP' },
    { name: 'Swiss Franc', code: 'CHF' },
    { name: 'Swedish Krona', code: 'SEK' },
    { name: 'Norwegian Krone', code: 'NOK' },
    { name: 'Danish Krone', code: 'DKK' },
    { name: 'Polish Złoty', code: 'PLN' },
    { name: 'Czech Koruna', code: 'CZK' },
    { name: 'Hungarian Forint', code: 'HUF' },
    { name: 'Russian Ruble', code: 'RUB' }
  ];



  ngOnInit(): void {
    this.getaccountData();

    this.newForm = this.fb.group({
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

  getaccountData() {
    this.accountdata = [
      { name: 'Counterparty 1', accountName: 'BBVA', country: 'Spain', currency: 'EUR', isActive: 'Active', accountNumber: '1234567', iban: 'GB29HBUK60161331926819', swift_bic: 'BUKBGB22', trexid: 'Trex-3456789', },
      { name: 'Counterparty 2', accountName: 'HSBC', country: 'United Kingdom', currency: 'GBP', isActive: 'InActive', accountNumber: '1234567', iban: 'GB89BUKB20201555555556', swift_bic: 'HBUKGB4B', trexid: 'Trex-5678901', },
      { name: 'Counterparty 3', accountName: 'BBVA', country: 'Spain', currency: 'EUR', isActive: 'InActive', accountNumber: '1234567', iban: 'GB29HBUK60161331926819', swift_bic: 'BUKBGB22', trexid: 'Trex-3456789', },
      { name: 'Counterparty 4', accountName: 'HSBC', country: 'United Kingdom', currency: 'GBP', isActive: 'Active', accountNumber: '1234567', iban: 'GB89BUKB20201555555556', swift_bic: 'HBUKGB4B', trexid: 'Trex-5678901', },
      { name: 'Counterparty 5', accountName: 'BBVA', country: 'Spain', currency: 'EUR', isActive: 'Active', accountNumber: '1234567', iban: 'GB29HBUK60161331926819', swift_bic: 'BUKBGB22', trexid: 'Trex-3456789', },
      { name: 'Counterparty 6', accountName: 'HSBC', country: 'United Kingdom', currency: 'GBP', isActive: 'InActive', accountNumber: '1234567', iban: 'GB89BUKB20201555555556', swift_bic: 'HBUKGB4B', trexid: 'Trex-5678901', },
      { name: 'Counterparty 7', accountName: 'BBVA', country: 'Spain', currency: 'EUR', isActive: 'InActive', accountNumber: '1234567', iban: 'GB29HBUK60161331926819', swift_bic: 'BUKBGB22', trexid: 'Trex-3456789', },
      { name: 'Counterparty 8', accountName: 'Barclays', country: 'United Kingdom', currency: 'GBP', isActive: 'InActive', accountNumber: '1234567', iban: 'GB89BUKB20201555555556', swift_bic: 'HBUKGB4B', trexid: 'Trex-5678901', },
      { name: 'Counterparty 9', accountName: 'BBVA', country: 'Spain', currency: 'EUR', isActive: 'Active', accountNumber: '1234567', iban: 'GB29HBUK60161331926819', swift_bic: 'BUKBGB22', trexid: 'Trex-3456789', }


    ]
  }

  getCurrencyClass(Currency) {
    let baseClass = " pi pi-fw";
    switch (Currency) {
      case 'GBP':
        return `${baseClass} pi-pound`;
      case 'EUR':
        return `${baseClass} pi-euro`;
      case 'USD':
        return `${baseClass} pi-dollar`;
      default:
        return `${baseClass} pi-money-bill`;  // Fallback image if needed
    }
  }

  getCountryImageUrl(value) {
    let basePath = "assets/demo/images/country/";
    switch (value) {
      case 'United Kingdom':
        return `${basePath}uk-logo.png`;
      case 'Spain':
        return `${basePath}spain-logo.png`;
      default:
        return 'path/to/default-image.png';  // Fallback image if needed
    }
  }


  handleSubmit() {
    if (this.newForm.valid) {
      // handle the form submission
    } else {
      this.newForm.markAllAsTouched(); // highlight all fields with errors
    }
  }
}













