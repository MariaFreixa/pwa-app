import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }

  getCountryById(id: String): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/name/' + id);
  }
}
