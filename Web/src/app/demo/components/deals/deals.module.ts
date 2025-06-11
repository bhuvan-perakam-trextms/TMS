import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DealsRoutingModule } from './deals-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

import { DepositsComponent } from './deposits/deposits.component';
import { FundsComponent } from './funds/funds.component';
import { ProjectionsComponent } from './projections/projections.component';
import { InterestRateSwapsComponent } from './interest-rate-swaps/interest-rate-swaps.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ChartModule,
        MenuModule,
        TableModule,
        StyleClassModule,
        PanelMenuModule,
        ButtonModule,
        DealsRoutingModule,
        DragDropModule,
        InputNumberModule,
        DropdownModule,
        CalendarModule,
        ToastModule,
        InputTextModule,
        DialogModule
    ],
    declarations: [DepositsComponent, FundsComponent, ProjectionsComponent, InterestRateSwapsComponent]
})
export class DealsModule { }
