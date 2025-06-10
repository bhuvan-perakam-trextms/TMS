import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardmanagementComponent } from './dashboardmanagement/dashboardmanagement.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'dashboard', component: DashboardmanagementComponent }
    ])],
    exports: [RouterModule]
})
export class SettingsRoutingModule { }
