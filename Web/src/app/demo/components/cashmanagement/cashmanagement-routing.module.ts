import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { CashHistoryComponent } from './cashhistory/cashhistory.component';
import { TransfersComponent } from './transfers/transfers.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'bank-accounts', component: BankaccountsComponent },
        { path: 'cashhistory', component: CashHistoryComponent },
        { path: 'transfers', component: TransfersComponent },
    ])],
    exports: [RouterModule]
})
export class CashManagementRoutingModule { }
