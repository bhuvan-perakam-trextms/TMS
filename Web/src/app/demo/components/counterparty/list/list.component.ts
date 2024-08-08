import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Country {
    name: string;
    code: string;
}


@Component({
    templateUrl: './list.component.html',
})
export class ListComponent implements OnInit, OnDestroy {

    inValid: string | undefined;

    myForm: FormGroup;
    constructor(private fb: FormBuilder) { }

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

    selectedCountry!: Country;

    countries: Country[] = [
        { name: 'Germany', code: 'DE' },
        { name: 'France', code: 'FR' },
        { name: 'United Kingdom', code: 'GB' },
        { name: 'Italy', code: 'IT' },
        { name: 'Spain', code: 'ES' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Netherlands', code: 'NL' },
        { name: 'Sweden', code: 'SE' },
        { name: 'Norway', code: 'NO' },
        { name: 'Finland', code: 'FI' }
    ];



    ngOnInit(): void {
        this.getlistdata();

        this.types =
            [
                { name: 'Counterparty Type 1', code: 'CPT1' },
                { name: 'Counterparty Type 2', code: 'CPT2' },
            ];


        this.treasuryTypes =
            [
                { name: 'Swaps', code: 'SWP' },
                { name: 'MM Deals', code: 'MMDEAL' },
                { name: 'Warehouse', code: 'WH' },
                { name: 'Repo', code: 'REPO' },
            ]


        this.myForm = this.fb.group({
            legalName: ['', Validators.required],
            aliasName: ['', Validators.required],
            selectedType: [null, Validators.required],
            selectedTreasuryType: [null, Validators.required],
            otherIdentifiers: ['', Validators.required],
            country: [null, Validators.required],
            address: ['', Validators.required],
            emailID: ['', [Validators.required, Validators.email]],
            Telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
            keyContact: ['', Validators.required],
        });
    }

    ngOnDestroy(): void { }

    handlePopup(dataItem) {
        this.displayOverlay = true;
        this.selectednameDetail = dataItem;
        console.log(this.selectednameDetail);
    }



    getlistdata() {
        this.listData = [
            {
                legalName: 'Counterparty 1', aliasName: 'Company Tertiary Corporate Account', country: 'Spain', currency: 'EUR', Telephone: '9876543210', emailID: 'Counterparty1@gmail.com', otherIdentifiers: 'Identifier 1', selectedType: "Counter Party 1", selectedTreasuryType: 'Swaps', address: '1234 Elm Street, Springfield, Il 62704', keyContact: 'Test Contact',
            },
            {
                legalName: 'Counterparty 2', aliasName: 'Company European Corporate Account', country: 'United Kingdom', currency: 'GBP', Telephone: '0912345678', emailID: 'Counterparty2@gmail.com', otherIdentifiers: 'Identifier 2', selectedType: "Counter Party 2", selectedTreasuryType: 'MM Deals', address: '1234 Elm Street, Springfield, Il 62704', keyContact: 'Test Contact',
            },
            {
                legalName: 'Counterparty 3', aliasName: 'Company Tertiary Corporate Account', country: 'Spain', currency: 'EUR', Telephone: '9876543210', emailID: 'Counterparty3@gmail.com', otherIdentifiers: 'Identifier 3', selectedType: "Counter Party 1", selectedTreasuryType: 'Warehouse', address: '1234 Elm Street, Springfield, Il 62704', keyContact: 'Test Contact',
            },
            {
                legalName: 'Counterparty 4', aliasName: 'Company Primary Corporate Account', country: 'United Kingdom', currency: 'GBP', Telephone: '0912345678', emailID: 'Counterparty4@gmail.com', otherIdentifiers: 'Identifier 4', selectedType: "Counter Party 2", selectedTreasuryType: 'Repo', address: '1234 Elm Street, Springfield, Il 62704', keyContact: 'Test Contact',
            },
            {
                legalName: 'Counterparty 5', aliasName: 'Company Tertiary Corporate Account', country: 'Spain', currency: 'EUR', Telephone: '9876543210', emailID: 'Counterparty5@gmail.com', otherIdentifiers: 'Identifier 5', selectedType: "Counter Party 1", selectedTreasuryType: 'Swaps', address: '1234 Elm Street, Springfield, Il 62704', keyContact: 'Test Contact',
            },
            {
                legalName: 'Counterparty 6', aliasName: 'Company European Corporate Account', country: 'United Kingdom', currency: 'GBP', Telephone: '0912345678', emailID: 'Counterparty6@gmail.com', otherIdentifiers: 'Identifier 6', selectedType: "Counter Party 2", selectedTreasuryType: 'MM Deals', address: '1234 Elm Street, Springfield, Il 62704', keyContact: 'Test Contact',
            },
            {
                legalName: 'Counterparty 7', aliasName: 'Company Tertiary Corporate Account', country: 'Spain', currency: 'EUR', Telephone: '9876543210', emailID: 'Counterparty7@gmail.com', otherIdentifiers: 'Identifier 7', selectedType: "Counter Party 1", selectedTreasuryType: 'Warehouse', address: '1234 Elm Street, Springfield, Il 62704', keyContact: 'Test Contact',
            },
            {
                legalName: 'Counterparty 8', aliasName: 'Company Primary Corporate Account', country: 'United Kingdom', currency: 'GBP', Telephone: '0912345678', emailID: 'Counterparty8@gmail.com', otherIdentifiers: 'Identifier 8', selectedType: "Counter Party 2", selectedTreasuryType: 'Repo', address: '1234 Elm Street, Springfield, Il 62704', keyContact: 'Test Contact',
            },
            {
                legalName: 'Counterparty 9', aliasName: 'Company Tertiary Corporate Account', country: 'Spain', currency: 'EUR', Telephone: '9876543210', emailID: 'Counterparty9@gmail.com', otherIdentifiers: 'Identifier 9', selectedType: "Counter Party 1", selectedTreasuryType: 'Swaps', address: '1234 Elm Street, Springfield, Il 62704', keyContact: 'Test Contact',
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
