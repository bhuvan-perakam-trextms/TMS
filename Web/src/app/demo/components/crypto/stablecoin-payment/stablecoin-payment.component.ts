import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CryptoNetwork, StablecoinAsset } from 'src/app/demo/api/crypto-transaction';
import { CryptoLedgerService } from 'src/app/demo/service/crypto-ledger.service';

@Component({
    selector: 'app-stablecoin-payment',
    templateUrl: './stablecoin-payment.component.html',
    styleUrls: ['./stablecoin-payment.component.scss'],
    standalone: false,
})
export class StablecoinPaymentComponent implements OnInit, OnDestroy {
    readonly networkEthereumIcon = 'assets/demo/images/crypto/network-ethereum.svg';
    readonly networkTronIcon = 'assets/demo/images/crypto/network-tron.svg';
    readonly assetUsdcIcon = 'assets/demo/images/crypto/asset-usdc.svg';
    readonly assetUsdtIcon = 'assets/demo/images/crypto/asset-usdt.svg';
    networkOpts: { label: string; value: CryptoNetwork; hint: string }[] = [
        { label: 'Ethereum (ERC-20)', value: 'Ethereum', hint: '~12 confirmations for finality' },
        { label: 'TRON (TRC-20)', value: 'TRON', hint: '~19 confirmations recommended' },
    ];

    assetOpts: { label: string; value: StablecoinAsset }[] = [
        { label: 'USDC', value: 'USDC' },
        { label: 'USDT', value: 'USDT' },
    ];

    network: CryptoNetwork = 'Ethereum';
    asset: StablecoinAsset = 'USDC';
    amount: number | null = 100000;
    memo = '';
    paymentUri = '';

    qrSrc = '';

    settlementAvg = '4.2 min';
    networkHealth = 'Operational';
    volume24h = '$4.8M equiv.';

    recentRows: { id: string; status: string; amount: number; asset: string; network: string }[] =
        [];

    private sub?: Subscription;

    constructor(private ledger: CryptoLedgerService) {}

    ngOnInit(): void {
        this.refreshUri();
        this.sub = this.ledger.transactions$.subscribe((txs) => {
            this.recentRows = txs.slice(0, 5).map((t) => ({
                id: t.id,
                status: t.status,
                amount: t.amount,
                asset: t.asset,
                network: t.network,
            }));
        });
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }

    onGatewayFieldChange(): void {
        this.refreshUri();
    }

    treasuryAddress(): string {
        return this.ledger.getTreasuryAddress(this.network);
    }

    /** Encode pay request for QR — updates live as inputs change. */
    private refreshUri(): void {
        const to = this.treasuryAddress();
        const amt = this.amount ?? 0;
        const base =
            typeof window !== 'undefined'
                ? `${window.location.origin}/crypto/pay`
                : 'https://trex.tms/crypto/pay';
        const params = new URLSearchParams({
            network: this.network.toLowerCase(),
            asset: this.asset,
            amount: String(amt),
            to,
            ...(this.memo.trim() ? { memo: this.memo.trim() } : {}),
        });
        this.paymentUri = `${base}?${params.toString()}`;
        this.qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(
            this.paymentUri
        )}`;
    }

    copyUri(): void {
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(this.paymentUri);
        }
    }

    copyAddress(): void {
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(this.treasuryAddress());
        }
    }

    get activeNetworkIcon(): string {
        return this.network === 'Ethereum' ? this.networkEthereumIcon : this.networkTronIcon;
    }

    get activeAssetIcon(): string {
        return this.asset === 'USDC' ? this.assetUsdcIcon : this.assetUsdtIcon;
    }

    simulateTreasuryReceipt(): void {
        const amt = this.amount ?? 0;
        if (amt <= 0) {
            return;
        }
        this.ledger.simulateIncomingPayment({
            network: this.network,
            asset: this.asset,
            amount: amt,
            paymentUri: this.paymentUri,
            memo: this.memo.trim() || undefined,
        });
    }
}
