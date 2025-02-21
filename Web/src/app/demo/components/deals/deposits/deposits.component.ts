import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-deposits',
  standalone: false,
  templateUrl: './deposits.component.html',
  styleUrl: './deposits.component.scss'
})
export class DepositsComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {

  }
  ngOnInit(): void {

  }
  filterMode: FilterableSettings = "menu";

  gridData = [
    {
      logo: 'assets/demo/images/bank/hsbc-logo.png',
      counterparty: 'HSBC',
      currency: 'GBP',
      exposure: '1,000,000',
      limit: '1,500,000',
      remainingLimit: '500,000'
    },
    {
      logo: 'assets/demo/images/bank/barclays-logo.png',
      counterparty: 'BARCLAYS BANK PLC',
      currency: 'GBP',
      exposure: '2,000,000',
      limit: '2,500,000',
      remainingLimit: '500,000'
    },
    {
      logo: 'assets/demo/images/bank/natwest-logo.png',
      counterparty: 'NATWEST MARKETS',
      currency: 'GBP',
      exposure: '10,000',
      limit: '100,000',
      remainingLimit: '90,000'
    },
    {
      logo: 'assets/demo/images/bank/lloyds-logo.jpg',
      counterparty: 'LLOYDS',
      currency: 'GBP',
      exposure: '5,000',
      limit: '100,000',
      remainingLimit: '95,000'
    },
    {
      logo: 'assets/demo/images/bank/DBS-logo.png',
      counterparty: 'DBS',
      currency: 'GBP',
      exposure: '2,000,000',
      limit: '2,500,000',
      remainingLimit: '500,000'
    },
    {
      logo: 'assets/demo/images/bank/citi_logo.png',
      counterparty: 'CITI BANK',
      currency: 'USD',
      exposure: '2,000,000',
      limit: '2,500,000',
      remainingLimit: '500,000'
    },
    {
      logo: 'assets/demo/images/bank/jpmorgan-logo.png',
      counterparty: 'J.P. MORGAN CHASE',
      currency: 'GBP',
      exposure: '2,000,000',
      limit: '2,500,000',
      remainingLimit: '500,000'
    },
    {
      logo: 'assets/demo/images/bank/boa-logo.png',
      counterparty: 'BANK OF AMERICA',
      currency: 'GBP',
      exposure: '2,000,000',
      limit: '2,500,000',
      remainingLimit: '500,000'
    },
    {
      logo: 'assets/demo/images/bank/bbva-logo.png',
      counterparty: 'BBVA',
      currency: 'EUR',
      exposure: '2,000,000',
      limit: '2,000,000',
      remainingLimit: '0'
    }
  ];
}
