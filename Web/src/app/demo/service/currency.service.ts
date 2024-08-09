import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyService {
    constructor(private http: HttpClient) { }
    
    getCurrencies() {
      return this.http.get<any>('assets/demo/data/currencies.json')
          .toPromise()
          .then(res => res.data as any[])
          .then(data => data);
  }

    getCurrencyClass(Currency) {
        let baseClass = " pi pi-fw";
        switch (Currency) {
          case 'GBP':
            return `${baseClass} pi-pound`;
          case 'EUR':
            return `${baseClass} pi-euro`;
          case 'USD':
            return `${baseClass} pi-dollar`;
          default:
            return `${baseClass} pi-money-bill`;  // Fallback image if needed
        }
      }

}