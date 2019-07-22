import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  public pname: any;
  public type: any;
  public countriesFound: any;
  public countryData: any;


  constructor(private _route: ActivatedRoute, public appservice: AppService, private router: Router) {
  }

  ngOnInit() {
    this._route.params.subscribe((paramdata) => {
      this.countryData = [];
      this.countriesFound = false;
      this.pname = paramdata.pname;
      this.type = paramdata.type;

      //Getting list of all the countries based on type(region/currency/language)
      this.appservice.getCountriesList(this.pname, this.type).subscribe(
        data => {
          this.countriesFound = true;
          this.countryData = data;
        },
        error => {
          console.error("error occured");
        }
      );

    })
  }
//Function for filtering countries based on language or currency
  public filterCountries(name, type) {
    if (name) {
      this.router.navigate(['/countries', name, type])
    }
  }

  //function to view single country information/ to load country-info component
  public selectCountry(name): any {
    this.router.navigate(['/country-info', name]);
  }
}
