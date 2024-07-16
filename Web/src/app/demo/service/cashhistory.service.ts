import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CashHistory } from '../api/cashhistory';
import { CashHistoryDelta } from '../api/cashhistoryDelta';

@Injectable()
export class CashHistoryService {

    constructor(private http: HttpClient)
    {

    }

    getCashHistories()
    {
        return this.http.get<any>('assets/demo/data/cash-histories.json')
        .toPromise()
        .then(res => res.data as CashHistory[])
        .then(data => data);
    }
}