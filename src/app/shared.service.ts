import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TotalCases} from "./httpContent/TotalCases";
import {Countries} from "./httpContent/Countries";
import {CountryStats} from "./httpContent/CountryStats";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private userDetails: FormGroup[] = [];
  private urlForCases = 'https://api.covid19api.com/world/total';
  private urlForCountries = 'https://api.covid19api.com/countries';
  private selectedCountry = '';
  private urlForCovidCase = 'https://api.covid19api.com/country/' + this.selectedCountry;

  constructor(private http: HttpClient) { }

  addDetails(details: FormGroup): void {
    this.userDetails.push(details);
  }

  getDetails(): FormGroup[]{
    return this.userDetails;
  }

  getTotalCases(): Observable<TotalCases>{
    return this.http.get<TotalCases>(this.urlForCases);
  }

  getCountriesList(): Observable<Countries[]>{
    return this.http.get<Countries[]>(this.urlForCountries);
  }

  getCountryStats(): Observable<CountryStats[]>{
    return this.http.get<CountryStats[]>(this.urlForCovidCase);
  }

  changeSelectCountry(country: string){
    this.selectedCountry = country;
    this.urlForCovidCase = 'https://api.covid19api.com/country/' + this.selectedCountry;
  }
}
