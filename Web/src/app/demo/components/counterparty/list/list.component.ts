import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';

@Component({
    templateUrl: './list.component.html',
})
export class ListComponent implements OnInit, OnDestroy {
    group = [{ field: 'entity' }];
    filterMode: FilterableSettings = 'menu';
    listData: any[] = [];
    displayOverlay: boolean = false;
    selectednameDetail: any;

  treasuryTypes: any[] = [];
  selectedTreasuryType: any[] = [];
  types: any[] = [];
  selectedType: any[] = [];


    value!: string;

    ngOnInit(): void {
        this.getlistdata();


        this.types = 
  [
    {name: 'Counterparty Type 1', code: 'CPT1'},
    {name: 'Counterparty Type 2', code: 'CPT2'},
  ];


        this.treasuryTypes = 
    [
      {name: 'Swaps', code: 'SWP'},
      {name: 'MM Deals', code: 'MMDEAL'},
      {name: 'Warehouse', code: 'WH'},
      {name: 'Repo', code: 'REPO'},
    ]
    }

    ngOnDestroy(): void {}

    handlePopup(dataItem) {
        this.displayOverlay = true;
        this.selectednameDetail = dataItem;
        console.log(this.selectednameDetail);
    }

   

    getlistdata() {
        this.listData = [
            {
                name: 'counterparty1',
                aliasName: 'Company Tertiary Corporate Account',
                country: 'Spain',
                currency: 'EUR',
            },
            {
                name: 'counterparty2',
                aliasName: 'Company European Corporate Account',
                country: 'UK',
                currency: 'GBP',
            },
            {
                name: 'counterparty3',
                aliasName: 'Company Tertiary Corporate Account',
                country: 'Spain',
                currency: 'EUR',
            },
            {
                name: 'counterparty4',
                aliasName: 'Company Primary Corporate Account',
                country: 'Uk',
                currency: 'GBP',
            },
            {
                name: 'counterparty5',
                aliasName: 'Company Tertiary Corporate Account',
                country: 'Spain',
                currency: 'EUR',
            },
            {
                name: 'counterparty6',
                aliasName: 'Company European Corporate Account',
                country: 'UK',
                currency: 'GBP',
            },
            {
                name: 'counterparty7',
                aliasName: 'Company Tertiary Corporate Account',
                country: 'Spain',
                currency: 'EUR',
            },
            {
                name: 'counterparty8',
                aliasName: 'Company Primary Corporate Account',
                country: 'UK',
                currency: 'GBP',
            },
            {
                name: 'counterparty9',
                aliasName: 'Company Tertiary Corporate Account',
                country: 'Spain',
                currency: 'EUR',
            },
        ];
    }


   

    
}
