import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DragDropModule } from '@angular/cdk/drag-drop'; 
import { FundsComponent } from './funds.component';
import { FundsRoutingModule } from './funds-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';

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
        FundsRoutingModule,
        DragDropModule,
        GridModule
    ],
    declarations: [FundsComponent]
})
export class FundsModule { }
