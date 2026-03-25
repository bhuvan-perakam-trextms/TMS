import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
    CryptoNetwork,
    CryptoTransaction,
    CryptoTxStatus,
    StablecoinAsset,
} from 'src/app/demo/api/crypto-transaction';
import { CryptoLedgerService } from 'src/app/demo/service/crypto-ledger.service';

@Component({
    selector: 'app-crypto-transactions-history',
    templateUrl: './transactions-history.component.html',
    styleUrls: ['./transactions-history.component.scss'],
    standalone: false,
})
export class TransactionsHistoryComponent implements OnInit, OnDestroy {
    txs: CryptoTransaction[] = [];
    statusFilter: CryptoTxStatus | 'All' = 'All';

    statusOptions: { label: string; value: CryptoTxStatus | 'All' }[] = [
        { label: 'All', value: 'All' },
        { label: 'Pending', value: 'Pending' },
        { label: 'Confirming', value: 'Confirming' },
        { label: 'Success', value: 'Success' },
        { label: 'Failed', value: 'Failed' },
    ];

    private sub?: Subscription;

    constructor(private ledger: CryptoLedgerService) {}

    ngOnInit(): void {
        this.sub = this.ledger.transactions$.subscribe((rows) => {
            this.txs = rows;
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

    filtered(): CryptoTransaction[] {
        if (this.statusFilter === 'All') {
            return this.txs;
        }
        return this.txs.filter((t) => t.status === this.statusFilter);
    }

    severity(s: CryptoTxStatus): 'success' | 'secondary' | 'info' | 'warn' | 'danger' | 'contrast' {
        switch (s) {
            case 'Success':
                return 'success';
            case 'Failed':
                return 'danger';
            case 'Confirming':
                return 'warn';
            case 'Pending':
            default:
                return 'info';
        }
    }

    confirmationPercent(row: CryptoTransaction): number {
        if (!row.confirmationsRequired) {
            return 0;
        }
        return Math.min(100, (row.confirmations / row.confirmationsRequired) * 100);
    }

    networkIconUrl(network: CryptoNetwork): string {
        return network === 'Ethereum'
            ? 'assets/demo/images/crypto/network-ethereum.svg'
            : 'assets/demo/images/crypto/network-tron.svg';
    }

    assetIconUrl(asset: StablecoinAsset): string {
        return asset === 'USDC'
            ? 'assets/demo/images/crypto/asset-usdc.svg'
            : 'assets/demo/images/crypto/asset-usdt.svg';
    }
}
