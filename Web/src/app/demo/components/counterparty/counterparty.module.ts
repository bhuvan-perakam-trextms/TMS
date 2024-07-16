import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';

import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';

import { counterpartyRoutingModule } from './counterparty-routing.module';
import { ListComponent } from './list/list.component';

import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { CheckboxModule } from "primeng/checkbox";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { RulesComponent } from './rules/rules.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        DividerModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        counterpartyRoutingModule,
        PanelModule,
        SplitterModule,

        //AutoCompleteModule,
        //CalendarModule,
        ChipsModule,
        DropdownModule,
        MultiSelectModule,
        CheckboxModule
        //InputMaskModule,
        //InputNumberModule,
        //CascadeSelectModule,
        //MultiSelectModule,
        //InputTextareaModule,
        //InputTextModule
    ],
    declarations: [
        ListComponent,
        RulesComponent
    ],
})
export class CounterpartyModule { }


