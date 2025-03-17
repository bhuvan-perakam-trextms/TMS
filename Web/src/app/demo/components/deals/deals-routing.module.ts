import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DepositsComponent } from './deposits/deposits.component';
import { FundsComponent } from './funds/funds.component';
import { ProjectionsComponent } from './projections/projections.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'deposits', component: DepositsComponent },
        { path: 'funds', component: FundsComponent },
        { path: 'projections', component: ProjectionsComponent },
    ])],
    exports: [RouterModule]
})
export class DealsRoutingModule { }
