import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BankaccountsComponent } from './bankaccounts.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: BankaccountsComponent }
    ])],
    exports: [RouterModule]
})
export class BankAccountsRoutingModule { }
