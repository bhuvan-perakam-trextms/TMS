import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountries() {
        return this.http.get<any>('assets/demo/data/countries.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }

    getCountryImageUrl(value) {
        let basePath = "assets/demo/images/country/";
        switch (value) {
            case 'United Kingdom':
                return `${basePath}uk-logo.png`;
            case 'Spain':
                return `${basePath}spain-logo.png`;
            default:
                return 'path/to/default-image.png';  // Fallback image if needed
        }
    }
}
