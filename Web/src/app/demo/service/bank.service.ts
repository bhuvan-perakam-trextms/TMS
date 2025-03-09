import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from '../api/bankAccount';
import { BankAccountDetail } from '../api/bankAccountDetail';

@Injectable()
export class BankService {
    constructor(private http: HttpClient) { }

    getBankAccounts() {
        return this.http.get<any>('assets/demo/data/bank-accounts.json')
            .toPromise()
            .then(res => res.data as BankAccount[])
            .then(data => data);
    }

    getBankAccountsDetails() {
        return this.http.get<any>('assets/demo/data/bank-accounts-details.json')
            .toPromise()
            .then(res => res.data as BankAccountDetail[])
            .then(data => data);
    }

}