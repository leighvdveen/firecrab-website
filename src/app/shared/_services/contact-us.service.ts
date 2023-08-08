import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactUsService {

    private resourceUrl: string = 'https://restcountries.com/v3.1/all';
    private readonly http: HttpClient = inject(HttpClient);
    
    public getCountriesData(): Observable<any> {
        return this.http.get<any>(`${this.resourceUrl}`);
    }
}
