import { Component, OnInit, OnDestroy } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnDestroy {

  types: any[] = [];
  selectedType: any[] = [];
  
  treasuryTypes: any[] = [];
  selectedTreasuryType: any[] = [];

  ngOnInit(): void {
    
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

  ngOnDestroy(): void {
    
  }
}
