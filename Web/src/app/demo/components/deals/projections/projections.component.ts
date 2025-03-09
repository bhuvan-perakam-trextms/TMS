import { Component } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { GroupDescriptor } from '@progress/kendo-data-query';

@Component({
  selector: 'app-projections',
  standalone: false,
  templateUrl: './projections.component.html',
  styleUrl: './projections.component.scss'
})
export class ProjectionsComponent {

  filterMode: FilterableSettings = "menu";
  chartData: any;
  chartOptions: any;

  chartWidth = '1';
  chartHeight = '1';

  constructor() {
    this.chartData = {
      labels: ['Money Market Funds (60%)', 'Money Market Deposits (20%)', 'Asset Backed Security (20%)'],
      datasets: [
        {
          data: [60, 20, 20],
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFCA28']
        }
      ]
    };

    this.chartOptions = {
      plugins: {
        legend: {
          display: true,
          position: 'bottom'
        }
      }
    };
  }

  public group: GroupDescriptor[] = [];

  public onGroupChange(groups: GroupDescriptor[]): void {
    this.group = groups;
  }

  gridData: any[] = [
    {
      Instrument: 'Money Market Fund',
      Counterparty: 'Blackrock',
      StartDate: new Date('2025-01-15'),
      Maturity: new Date('2025-04-15'),
      Notional: 50000,
      InterestRate: '4.50%',
      Yield: '4.50%'
    },
    {
      Instrument: 'Money Market Fund',
      Counterparty: 'Morgan Stanley',
      StartDate: new Date('2025-01-16'),
      Maturity: new Date('2025-04-15'),
      Notional: 40000,
      InterestRate: '5.00%',
      Yield: '5.00%'
    },
    {
      Instrument: 'Money Market Deposits',
      Counterparty: 'HSBC',
      StartDate: new Date('2025-01-16'),
      Maturity: new Date('2025-04-15'),
      Notional: 20000,
      InterestRate: '4.50%',
      Yield: '4.50%'
    },
    {
      Instrument: 'Money Market Fund',
      Counterparty: 'DSS',
      StartDate: new Date('2025-01-16'),
      Maturity: new Date('2025-04-15'),
      Notional: 20000,
      InterestRate: '5.00%',
      Yield: '5.00%'
    },
    {
      Instrument: 'Money Market Deposit',
      Counterparty: 'CHASE',
      StartDate: new Date('2025-01-15'),
      Maturity: new Date('2025-04-15'),
      Notional: 50000,
      InterestRate: '5.00%',
      Yield: '5.00%'
    },
    {
      Instrument: 'Asset Backed Security',
      Counterparty: 'Paragon Mortgages',
      StartDate: new Date('2025-01-15'),
      Maturity: new Date('2025-04-15'),
      Notional: 100000,
      InterestRate: '6.00%',
      Yield: '6.00%'
    },
  ];
}
