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
  cashHistoriesDelta: CashHistoryDelta[];
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
}
