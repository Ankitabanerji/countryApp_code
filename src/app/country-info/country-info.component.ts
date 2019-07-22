import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {
  public country: any;
  public singleCountryData; any;
  public type: any;
  public noDataFound: boolean;

  constructor(private _route: ActivatedRoute, public appservice: AppService, private router: Router) {
    this.type = "currency";
    this.noDataFound = false;
  }

  ngOnInit() {
    this._route.params.subscribe((paramCountry) => {
      this.singleCountryData = [];
      this.noDataFound = false;
      this.country = paramCountry.cname;

      // Getting single country data
      this.appservice.getSingleCountry(this.country).subscribe(
        data => {
          this.singleCountryData = data;
        },
        error => {
          this.noDataFound = true;
          console.error("error occured");
        }
      )
    });

  }
  
// function for filtering Country based on Currency or language
  public filterCountries(name, type) {
    this.router.navigate(['/countries', name, type])
  }
}
