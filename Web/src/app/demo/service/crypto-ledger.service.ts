import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
    CryptoNetwork,
    CryptoTransaction,
    CryptoTxStatus,
    StablecoinAsset,
} from '../api/crypto-transaction';

@Injectable({ providedIn: 'root' })
export class CryptoLedgerService {
    private readonly subject = new BehaviorSubject<CryptoTransaction[]>([]);
    readonly transactions$ = this.subject.asObservable();

    private treasury: Record<CryptoNetwork, string> = {
        Ethereum: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
        TRON: 'TV6MuMXfmrBazGm4cAh9AkzWBpc74QLfzC',
    };

    constructor() {
        this.seed();
    }

    getTreasuryAddress(network: CryptoNetwork): string {
        return this.treasury[network];
    }

    snapshot(): CryptoTransaction[] {
        return this.subject.value;
    }

    simulateIncomingPayment(params: {
        network: CryptoNetwork;
        asset: StablecoinAsset;
        amount: number;
        paymentUri: string;
        memo?: string;
    }): CryptoTransaction {
        const req =
            params.network === 'Ethereum'
                ? 12
                : 19;
        const tx: CryptoTransaction = {
            id: `TX-${Date.now().toString(36).toUpperCase()}`,
            createdAt: new Date().toISOString(),
            network: params.network,
            asset: params.asset,
            amount: params.amount,
            status: 'Pending',
            confirmations: 0,
            confirmationsRequired: req,
            gasFeeNative: params.network === 'Ethereum' ? '—' : '—',
            gasFeeUsd: '—',
            txHash: this.randomHash(params.network),
            memo: params.memo,
            paymentUri: params.paymentUri,
        };
        this.subject.next([tx, ...this.subject.value]);
        this.runLifecycle(tx.id, params.network);
        return tx;
    }

    private runLifecycle(id: string, network: CryptoNetwork): void {
        const steps: { delay: number; status: CryptoTxStatus; confirmations: number; gasNative?: string; gasUsd?: string }[] =
            network === 'Ethereum'
                ? [
                      { delay: 0, status: 'Pending', confirmations: 0 },
                      { delay: 900, status: 'Confirming', confirmations: 1 },
                      { delay: 2200, status: 'Confirming', confirmations: 4 },
                      { delay: 3600, status: 'Confirming', confirmations: 8 },
                      { delay: 5000, status: 'Confirming', confirmations: 11 },
                      {
                          delay: 6500,
                          status: 'Success',
                          confirmations: 12,
                          gasNative: '0.00184 ETH',
                          gasUsd: '$6.42',
                      },
                  ]
                : [
                      { delay: 0, status: 'Pending', confirmations: 0 },
                      { delay: 800, status: 'Confirming', confirmations: 3 },
                      { delay: 2000, status: 'Confirming', confirmations: 9 },
                      { delay: 3400, status: 'Confirming', confirmations: 15 },
                      {
                          delay: 4800,
                          status: 'Success',
                          confirmations: 19,
                          gasNative: '8.4 TRX',
                          gasUsd: '$0.89',
                      },
                  ];

        steps.forEach((step) => {
            setTimeout(() => {
                this.patch(id, {
                    status: step.status,
                    confirmations: step.confirmations,
                    ...(step.gasNative != null ? { gasFeeNative: step.gasNative } : {}),
                    ...(step.gasUsd != null ? { gasFeeUsd: step.gasUsd } : {}),
                });
            }, step.delay);
        });
    }

    private patch(id: string, partial: Partial<CryptoTransaction>): void {
        const next = this.subject.value.map((t) =>
            t.id === id ? { ...t, ...partial } : t
        );
        this.subject.next(next);
    }

    private randomHash(network: CryptoNetwork): string {
        const hex = () =>
            Array.from({ length: network === 'Ethereum' ? 64 : 32 }, () =>
                Math.floor(Math.random() * 16).toString(16)
            ).join('');
        return network === 'Ethereum' ? `0x${hex()}` : hex().toUpperCase();
    }

    private seed(): void {
        const now = Date.now();
        const demo: CryptoTransaction[] = [
            {
                id: 'TX-SEED-A',
                createdAt: new Date(now - 86400000).toISOString(),
                network: 'Ethereum',
                asset: 'USDC',
                amount: 250000,
                status: 'Success',
                confirmations: 12,
                confirmationsRequired: 12,
                gasFeeNative: '0.0021 ETH',
                gasFeeUsd: '$7.18',
                txHash: '0x' + 'a1'.repeat(32),
                paymentUri: '',
            },
            {
                id: 'TX-SEED-B',
                createdAt: new Date(now - 3600000).toISOString(),
                network: 'TRON',
                asset: 'USDT',
                amount: 89500,
                status: 'Success',
                confirmations: 19,
                confirmationsRequired: 19,
                gasFeeNative: '7.1 TRX',
                gasFeeUsd: '$0.76',
                txHash: Array.from({ length: 32 }, () =>
                    Math.floor(Math.random() * 16).toString(16).toUpperCase()
                ).join(''),
            },
        ];
        this.subject.next(demo);
    }
}
