import { Component, OnInit } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from 'src/app/demo/service/country.service';
import { SelectType } from 'src/app/demo/api/selectType';
import { CurrencyService } from 'src/app/demo/service/currency.service';
import { CounterpartyService } from 'src/app/demo/service/counterparty.service';

@Component({
    templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {

    filterMode: FilterableSettings = 'menu';
    displayOverlay: boolean = false;
    counterpartyForm: FormGroup;

    counterpartiesList: any[] = [];

    selectedCounterparty: any;
    treasuryTypes: SelectType[] = [];
    selectedTreasuryType: SelectType[] = [];

    counterpartyTypes: SelectType[] = [];
    selectedCounterpartyType: SelectType[] = [];

    selectedCountry!: SelectType;
    countries: SelectType[] = [];

    constructor(private formBuilder: FormBuilder,
        private countryService: CountryService,
        private currencyService: CurrencyService,
        private counterypartyService: CounterpartyService) {

    }

    ngOnInit(): void {
        this.countryService.getCountries().then(data => { this.countries = data; });
        this.counterypartyService.getCounterparties().then(data => { this.counterpartiesList = data });
        this.counterypartyService.getCounterpartyTypes().then(data => { this.counterpartyTypes = data });
        this.counterypartyService.getTreasuryTypes().then(data => { this.treasuryTypes = data });

        this.initForm();
    }

    initForm() {
        this.counterpartyForm = this.formBuilder.group({
            legalName: ['', Validators.required],
            aliasName: ['', Validators.required],
            selectedCounterpartyType: [null, Validators.required],
            selectedTreasuryType: [null, Validators.required],
            otherIdentifiers: ['', Validators.required],
            country: [null, Validators.required],
            address: ['', Validators.required],
            emailID: ['', [Validators.required, Validators.email]],
            Telephone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
            keyContact: ['', Validators.required],
        });
    }

    handlePopup(dataItem) {
        this.displayOverlay = true;
        this.selectedCounterparty = dataItem;
    }

    submitCounterpartyForm() {
        if (this.counterpartyForm.valid) {

        } else {
            this.counterpartyForm.markAllAsTouched();
        }
    }
}
