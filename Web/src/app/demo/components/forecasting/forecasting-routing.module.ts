import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CashComponent } from './cash/cash.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'cash', component: CashComponent }
    ])],
    exports: [RouterModule]
})
export class ForecastingRoutingModule { }
