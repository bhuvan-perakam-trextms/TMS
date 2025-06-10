import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { ReportbuilderComponent } from './reportbuilder/reportbuilder.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'reports', component: ReportsComponent },
        { path: 'reportbuilder', component: ReportbuilderComponent }
    ])],
    exports: [RouterModule]
})
export class ReportsRoutingModule { }
