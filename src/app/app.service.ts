import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public url = "https://restcountries.eu/rest/v2/";
  constructor(public http: HttpClient) { }

  public getAllCountries(): Observable<any> {
    let response = this.http.get(`${this.url}all`);
    return response;
  }

  public getSingleCountry(name): Observable<any> {
    let response = this.http.get(`${this.url}name/${name}?fullText=true`);
    return response;
  }
  public filterLanguage(name): Observable<any> {
    let response = this.http.get(`${this.url}lang/${name}`);
    return response;
  }
  public filterCurrency(name): Observable<any> {
    let response = this.http.get(`${this.url}currency/${name}`);
    return response;
  }
  public getCountriesList(name, type): Observable<any> {
    let response = this.http.get(`${this.url}${type}/${name}`)
    return response;
  }
}
