import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';

import { CryptoRoutingModule } from './crypto-routing.module';
import { StablecoinPaymentComponent } from './stablecoin-payment/stablecoin-payment.component';
import { TransactionsHistoryComponent } from './transactions-history/transactions-history.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CryptoRoutingModule,
        ButtonModule,
        CardModule,
        DividerModule,
        DropdownModule,
        InputNumberModule,
        InputTextModule,
        ProgressBarModule,
        TableModule,
        TagModule,
        TooltipModule,
        RippleModule,
    ],
    declarations: [StablecoinPaymentComponent, TransactionsHistoryComponent],
})
export class CryptoModule {}
