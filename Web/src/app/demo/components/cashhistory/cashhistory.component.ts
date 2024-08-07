import { Component, OnInit } from '@angular/core';
import { CashHistory } from '../../api/cashhistory';
import { FilterableSettings } from "@progress/kendo-angular-grid";
import { CashHistoryService } from '../../service/cashhistory.service';
import { CashHistoryDelta } from '../../api/cashhistoryDelta';

@Component({
  selector: 'app-cashhistory',
  templateUrl: './cashhistory.component.html'
})
export class CashHistoryComponent implements OnInit {

  group = [{ field: "Entity" }]
  cashHistories: CashHistory[];
  filterMode: FilterableSettings = "menu";

  groupByFields: any[] = [];
  selectedGroupByField: any = { name: 'Entity', code: 'Entity' };

  constructor(private cashHistoryService: CashHistoryService) {

  }

  ngOnInit() {
    this.groupByFields =
      [
        { name: 'Entity', code: 'Entity' },
        { name: 'BankAccountNumber', code: 'BankAccountNumber' },
        { name: 'Currency', code: 'Currency' },
        { name: 'Market', code: 'Market' },
        { name: 'Metadata', code: 'Metadata' },
      ];

    this.cashHistoryService.getCashHistories().then(data => this.cashHistories = data);
  }

  showOnlyDeltaSepcificDetails(dataItem: CashHistory): boolean {
    return dataItem.BalanceType === 'Delta';
  }

  onGroupChange($event) {
    console.log($event);
    this.group = [{ field: $event.code }]
  }

  getDate(days : number)
  {
    let date:Date = new Date();
    date.setDate(date.getDate() + days);
    
    let day: number = date.getDate();
    let month: number = date.getMonth() + 1; // Months are zero-based, so we add 1
    let year: number = date.getFullYear();

    let formattedDate: string = `${year}/${month}/${day}`;

    return formattedDate;
  }

  getBankImageUrl(value: string): string {
    let basePath = "assets/demo/images/bank/";
    switch (value) {
      case 'HSBC':
        return `${basePath}hsbc-logo.png`;
      case 'BBVA':
        return `${basePath}bbva-logo.png`;
      case 'Deutsche Bank':
        return `${basePath}deutsche-logo.png`;
        case 'Barclays':
          return `${basePath}barclays-logo.png`;
          case 'Bank of America':
          return `${basePath}boa-logo.png`;
      default:
        return 'path/to/default-image.png';  // Fallback image if needed
    }
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
}
