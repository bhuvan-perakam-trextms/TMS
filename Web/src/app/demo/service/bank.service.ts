import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccount } from '../api/bankAccount';

@Injectable()
export class BankService {
    constructor(private http: HttpClient) { }

    getBankAccounts() {
        return this.http.get<any>('assets/demo/data/bank-accounts.json')
            .toPromise()
            .then(res => res.data as BankAccount[])
            .then(data => data);
    }

}