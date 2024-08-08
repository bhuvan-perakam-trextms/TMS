// moneymovements.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

import { FullCalendarModule } from '@fullcalendar/angular'; 


import { ApprovalsComponent } from './approvals.component';
import { ApprovalsRoutingModule } from './approvals-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';



@NgModule({
  declarations: [ApprovalsComponent],
  imports: [
    CommonModule,
    ApprovalsRoutingModule,
    
    GridModule,
    DropDownsModule,

    DialogModule,
    DividerModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    TabViewModule,

    FullCalendarModule 
  ]
})
export class ApprovalsModule { }
