import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterpartyService {

    constructor(private http: HttpClient) { }

    getCounterpartyTypes() {
        return this.http.get<any>('assets/demo/data/counterparty-types.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }

    getCounterpartyAccounts() {
        return this.http.get<any>('assets/demo/data/counterparty-accounts.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }

    getTreasuryTypes() {
        return this.http.get<any>('assets/demo/data/treasury-types.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
    
    getCounterparties() {
        return this.http.get<any>('assets/demo/data/counterparties.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }
}
