export type CryptoNetwork = 'Ethereum' | 'TRON';

export type StablecoinAsset = 'USDC' | 'USDT';

export type CryptoTxStatus = 'Pending' | 'Confirming' | 'Success' | 'Failed';

export interface CryptoTransaction {
    id: string;
    createdAt: string;
    network: CryptoNetwork;
    asset: StablecoinAsset;
    amount: number;
    status: CryptoTxStatus;
    confirmations: number;
    confirmationsRequired: number;
    gasFeeNative: string;
    gasFeeUsd: string;
    txHash: string;
    memo?: string;
    paymentUri?: string;
}
