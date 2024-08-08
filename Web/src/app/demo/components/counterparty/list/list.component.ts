import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './list.component.html',
})
export class ListComponent implements OnInit, OnDestroy {

    myForm: FormGroup;
     
    constructor(private fb: FormBuilder) {}

    group = [{ field: 'entity' }];
    filterMode: FilterableSettings = 'menu';
    listData: any[] = [];
    displayOverlay: boolean = false;
    selectednameDetail: any;
    selectedNameDetail: any;
    

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


    this.myForm = this.fb.group({
        legalName: ['', Validators.required],
        aliasName: ['', Validators.required],
        selectedType: [null, Validators.required],
        selectedTreasuryType: [null, Validators.required],
        otherIdentifiers: ['', Validators.maxLength(50)],
        address: ['', Validators.required],
        emailID: ['', [Validators.required, Validators.email]],
        Telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
        keyContact: ['', Validators.required],
      });
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

    handleSubmit() {
        if (this.myForm.valid) {
          // handle the form submission
        } else {
          this.myForm.markAllAsTouched(); // highlight all fields with errors
        }
      }
    
   

    
}
