import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectType } from 'src/app/demo/api/selectType';
import { CurrencyService } from 'src/app/demo/service/currency.service';
import { CounterpartyService } from 'src/app/demo/service/counterparty.service';

@Component({
  templateUrl: './rules.component.html'
})
export class RulesComponent implements OnInit {
  filterMode: FilterableSettings = "menu";
  counterpartyRuleForm: FormGroup;
  displayOverlay: boolean = false;

  ruledata: any[] = [];
  selectedcounterPartyRule: any

  selectedCurrency!: SelectType;
  currencies: SelectType[] = [];

  constructor(private formBuilder: FormBuilder,
    private currencyService: CurrencyService,
    private counterpartyService: CounterpartyService) {

  }


  ngOnInit(): void {

    this.currencyService.getCurrencies().then(data => { this.currencies = data; });
    this.counterpartyService.getCounterpartyRule().then(data => { this.ruledata = data; });

    this.initForm();
  }

  initForm() {
    this.counterpartyRuleForm = this.formBuilder.group({
      ruleType: ['', Validators.required],
      currency: [null, Validators.required],
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      market: ['', Validators.required],
      entity: ['', Validators.required],
      operator: ['', Validators.required],
      value: ['', Validators.required],
    });
  }

  handlePopup(dataItem) {
    this.displayOverlay = true;
    this.selectedcounterPartyRule = dataItem;
    console.log(this.selectedcounterPartyRule);
  }

  submitcounterpartyRule() {
    if (this.counterpartyRuleForm.valid) {

    } else {
      this.counterpartyRuleForm.markAllAsTouched();
    }
  }

}
