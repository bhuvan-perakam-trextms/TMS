import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FundsComponent } from './funds.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: FundsComponent },
    ])],
    exports: [RouterModule]
})
export class FundsRoutingModule { }
