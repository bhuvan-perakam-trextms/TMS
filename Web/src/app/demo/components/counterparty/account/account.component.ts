import { Component,OnInit } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';

interface Country {
  name: string;
  code: string;
}

interface Currency {
  name: string;
  code: string;
}


@Component({
  templateUrl: './account.component.html'
})
export class AccountComponent implements OnInit {

  group = [{ field: "entity" }]
  filterMode: FilterableSettings = "menu";
  accountdata: any[] = [];
  selectedcounterPartyDetail:any
  displayOverlay: boolean = false;

  selectedCountry!: Country;
  selectedCurrency!: Currency;

  countries: Country[] = [
    {name: 'Germany', code: 'DE'},
    {name: 'France', code: 'FR'},
    {name: 'United Kingdom', code: 'GB'},
    {name: 'Italy', code: 'IT'},
    {name: 'Spain', code: 'ES'},
    {name: 'Portugal', code: 'PT'},
    {name: 'Netherlands', code: 'NL'},
    {name: 'Sweden', code: 'SE'},
    {name: 'Norway', code: 'NO'},
    {name: 'Finland', code: 'FI'}
  ];


  currencies: Currency[] = [
    {name: 'Euro', code: 'EUR'},
    {name: 'British Pound', code: 'GBP'},
    {name: 'Swiss Franc', code: 'CHF'},
    {name: 'Swedish Krona', code: 'SEK'},
    {name: 'Norwegian Krone', code: 'NOK'},
    {name: 'Danish Krone', code: 'DKK'},
    {name: 'Polish Złoty', code: 'PLN'},
    {name: 'Czech Koruna', code: 'CZK'},
    {name: 'Hungarian Forint', code: 'HUF'},
    {name: 'Russian Ruble', code: 'RUB'}
  ];

  ngOnInit(): void {
    this.getaccountData();
    
  }


  


  handlePopup(dataItem)  {
    this.displayOverlay = true;
    this.selectedcounterPartyDetail = dataItem;
    console.log(this.selectedcounterPartyDetail);
  }

  getaccountData(){
    this.accountdata=[
      {name:'counterparty1',accountName:'BBVA',country:'Spain',currency:'EUR',isActive:'Active'},
      {name:'counterparty2',accountName:'HSBC',country:'United Kingdom',currency:'GBP',isActive:'InActive'},
      {name:'counterparty3',accountName:'BBVA',country:'Spain',currency:'EUR',isActive:'InActive'},
      {name:'counterparty4',accountName:'HSBC',country:'United Kingdom',currency:'GBP',isActive:'Active'},
      {name:'counterparty5',accountName:'BBVA',country:'Spain',currency:'EUR',isActive:'Active'},
      {name:'counterparty6',accountName:'HSBC',country:'United Kingdom',currency:'GBP',isActive:'InActive'},
      {name:'counterparty7',accountName:'BBVA',country:'Spain',currency:'EUR',isActive:'InActive'},
      {name:'counterparty8',accountName:'Barclays',country:'United Kingdom',currency:'GBP',isActive:'InActive'},
      {name:'counterparty9',accountName:'BBVA',country:'Spain',currency:'EUR',isActive:'Active'}


    ]
  }

  getCurrencyClass(Currency)
  {
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

  getCountryImageUrl(value)
  {
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
}
