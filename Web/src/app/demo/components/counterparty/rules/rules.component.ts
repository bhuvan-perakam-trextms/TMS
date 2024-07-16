import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  templateUrl: './rules.component.html'
})
export class RulesComponent implements OnInit, OnDestroy {
  rules: any[] = [];
  selectedRule: any;

  currencies: any[] = [];
  selectedCurrency: any;

  markets:any[] = [];
  selectedMarket: any;

  entities:any[] = [];
  selectedEntity: any;

  fromAccounts: any[] = [];
  selectedFromAccount: any;

  toAccounts: any[] = [];
  selectedToAccount: any;

  ngOnInit(): void {
    this.rules =
      [
        { name: 'Transactions', code: 'TRNS' },
        { name: 'Deals', code: 'DLS' },
      ];

      this.currencies =
      [
        { name: 'GBP', code: 'GBP' },
        { name: 'EUR', code: 'EUR' },
      ];

      this.markets = 
      [
        { name: 'Market A', code: 'MKTA' },
        { name: 'Market B', code: 'MKTB' },
      ];

      this.entities = 
      [
        { name: 'Entity A', code: 'ENTA' },
        { name: 'Entity B', code: 'ENTB' },
      ];

      this.fromAccounts = 
      [
        { name: 'HSBC London UK', code: 'LondonUK' },
        { name: 'Barclay London UK', code: 'BarclayLondonUK' },
      ]

      this.toAccounts = 
      [
        { name: 'HSBC London UK', code: 'LondonUK' },
        { name: 'Barclay London UK', code: 'BarclayLondonUK' },
      ]
  }

  ngOnDestroy(): void {

  }
}
