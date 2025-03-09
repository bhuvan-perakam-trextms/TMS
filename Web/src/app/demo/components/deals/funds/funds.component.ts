import { Component } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-funds',
  standalone: false,
  templateUrl: './funds.component.html',
  styleUrl: './funds.component.scss'
})
export class FundsComponent {
filterMode: FilterableSettings = "menu";

  public gridData: any[] = [
    {
      ISIN: 'IE0004806687',
      Counterparty: 'BlackRock Asset Management Ireland Limited',
      FundName: 'BlackRock ICS Sterling Liquidity Fund',
      Currency: 'GBP',
      Exposure: 250000,
      Limit: 500000,
      MMFInvestment: 100000,
      DailyYield: '4.86%'
    },
    {
      ISIN: 'LU0034386470',
      Counterparty: 'Morgan Stanley Investment Management',
      FundName: 'Morgan Stanley Sterling Liquidity Fund',
      Currency: 'GBP',
      Exposure: 250000,
      Limit: 500000,
      MMFInvestment: 100000,
      DailyYield: '4.91%'
    },
    {
      ISIN: 'IE00B3T20819',
      Counterparty: 'Morgan Stanley Investment Management',
      FundName: 'Morgan Stanley USD Liquidity Fund',
      Currency: 'USD',
      Exposure: 400000,
      Limit: 500000,
      MMFInvestment: 100000,
      DailyYield: '4.69%'
    },
    {
      ISIN: 'LU0037073115',
      Counterparty: 'Credit Suisse Asset Management',
      FundName: 'Credit Suisse Money Market Fund',
      Currency: 'USD',
      Exposure: 100000,
      Limit: 500000,
      MMFInvestment: 100000,
      DailyYield: '4.90%'
    },
    {
      ISIN: 'LU0090788026',
      Counterparty: 'J.P. Morgan Asset Management',
      FundName: 'JPM USD Liquidity Fund',
      Currency: 'USD',
      Exposure: 150000,
      Limit: 500000,
      MMFInvestment: 100000,
      DailyYield: '4.95%'
    },
    {
      ISIN: 'LU0233138472',
      Counterparty: 'DWS Investment GmbH',
      FundName: 'DWS Euro Reserve Fund',
      Currency: 'EUR',
      Exposure: 100000,
      Limit: 500000,
      MMFInvestment: 100000,
      DailyYield: '2.35%'
    },
    {
      ISIN: 'IE00B3RTQP90',
      Counterparty: 'HSBC Global Asset Management',
      FundName: 'HSBC US Dollar Liquidity Fund',
      Currency: 'USD',
      Exposure: 150000,
      Limit: 500000,
      MMFInvestment: 100000,
      DailyYield: '4.86%'
    },
    {
      ISIN: 'LU0062305093',
      Counterparty: 'UBS Asset Management',
      FundName: 'UBS EUR Money Market Fund',
      Currency: 'EUR',
      Exposure: 100000,
      Limit: 500000,
      MMFInvestment: 100000,
      DailyYield: '2.15%'
    }
  ];
}
