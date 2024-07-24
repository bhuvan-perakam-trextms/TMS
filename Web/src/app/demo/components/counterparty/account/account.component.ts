import { Component, OnInit, OnDestroy } from '@angular/core';
import {ConfirmationService,MessageService} from 'primeng/api';


@Component({
  templateUrl: './account.component.html',
  providers: [ConfirmationService, MessageService]
})
export class AccountComponent  implements OnInit, OnDestroy
{

  counterpartyAccount: any[] = [];
  selectedcounterpartyAccount: any;




  ngOnInit(): void 
  {
    this.counterpartyAccount =
      [
        { name: 'counterparty Account1', code: 'CPA1' },
        { name: 'counterparty Account2', code: 'CPA2' },
      ];
  }

  ngOnDestroy(): void {
    
  }
  constructor( private confirmationService: ConfirmationService) { }

  display: boolean = false;
  
  clear1() {
    this.confirmationService.confirm({
        key: 'clear1',
        message: 'Data Saved Successfully'
    });
}
  
  
  clear2() {
    this.confirmationService.confirm({
        key: 'clear2',
        message: 'Are you sure to perform this action?'
    });
}

}
