import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

import { ReportsComponent } from './reports/reports.component';
import { ReportbuilderComponent } from './reportbuilder/reportbuilder.component';
import { ReportsRoutingModule } from './reports-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReportsComponent, ReportbuilderComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    DialogModule,
    DropdownModule,
    FormsModule
  ]
})
export class ReportsModule { }
