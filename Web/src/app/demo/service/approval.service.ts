import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Approval } from '../api/approval';

@Injectable()
export class ApprovalService {
    constructor(private http: HttpClient) { }

    getPaymentApprovals() {
        return this.http.get<any>('assets/demo/data/approvals.json')
            .toPromise()
            .then(res => res.data as Approval[])
            .then(data => data);
    }

}