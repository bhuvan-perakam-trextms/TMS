import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { TabViewModule  } from 'primeng/tabview';
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { CalendarModule } from "primeng/calendar";
import { TableModule } from 'primeng/table';

import { TransfersComponent } from './transfers.component';
import { TransfersRoutingModule } from './transfers-routing.module'; 

@NgModule({
  declarations: [
    TransfersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TransfersRoutingModule ,
    PanelModule,
    TableModule,
    TabViewModule,
    DropdownModule,
    InputTextModule,
    CalendarModule
  ],
  exports: [TransfersComponent]
})
export class TransfersModule { }
