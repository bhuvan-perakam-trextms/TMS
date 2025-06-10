import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';

import { PanelModule } from 'primeng/panel';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';

import { CashHistoryComponent } from './cashhistory/cashhistory.component';
import { TransfersComponent } from './transfers/transfers.component';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';

import { CashManagementRoutingModule } from './cashmanagement-routing.module';

import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { DialogModule } from "primeng/dialog";
import { TabViewModule } from "primeng/tabview";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";


import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';

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
        CashManagementRoutingModule,
        PanelModule,
        SplitterModule,

        //AutoCompleteModule,
        //CalendarModule,
        ChipsModule,
        DropdownModule,
        //DropdownModule,
        //InputMaskModule,
        //InputNumberModule,
        //CascadeSelectModule,
        //MultiSelectModule,
        //InputTextareaModule,
        //InputTextModule

        GridModule,
        DropDownsModule,
        DialogModule,
        TabViewModule,
        ReactiveFormsModule
    ],
    declarations: [CashHistoryComponent, BankaccountsComponent, TransfersComponent],
})
export class CashManagementModule { }


