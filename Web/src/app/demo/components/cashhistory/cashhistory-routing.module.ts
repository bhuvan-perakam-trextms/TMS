import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CashHistoryComponent } from './cashhistory.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CashHistoryComponent }
    ])],
    exports: [RouterModule]
})
export class CashHistoryRoutingModule { }
