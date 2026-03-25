import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StablecoinPaymentComponent } from './stablecoin-payment/stablecoin-payment.component';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', pathMatch: 'full', redirectTo: 'stablecoin-payment' },
            { path: 'stablecoin-payment', component: StablecoinPaymentComponent },
            { path: 'transactions', component: TransactionsHistoryComponent },
        ]),
    ],
    exports: [RouterModule],
})
export class CryptoRoutingModule {}
