import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public showSearchBox: boolean;
  public countryArray: Array<any>;
  public showCountryList: boolean;
  public searchBy: any;
  public searchByCountry: any;

  constructor(private router: Router, public appservice: AppService) {
    this.showSearchBox = false;
    this.searchByCountry = "";
    this.countryArray = [];
    this.showCountryList = false;
    this.searchBy = "";
  }

  ngOnInit() {

    // getting name of all the countries required for search box
    this.appservice.getAllCountries().subscribe(
      data => {
        data.map((names) => {
          this.countryArray.push(names.name);
        });
      },
      error => {
        console.log("error occured")
      }
    );
  }

//Function to toggle(open and close) search box
  public toggleSearch(): any {
    this.showSearchBox = !this.showSearchBox;
  }

  //Function to show country info based on user's search input
  public searchCountry(countryName) {
    this.searchByCountry = countryName;
    if (countryName != "") {
      this.showCountryList = false;
      this.router.navigate(['/country-info', countryName]);
      this.toggleSearch();
    }
  }

  //Function to hide the list 
  public hideList() {
    setTimeout(() => {
      this.showCountryList = false;
    }, 1000)
  }

  //Function to show list
  public showList() {
    this.showCountryList = true;
  }

  //Function to get user's input
  public getSearchValue(event) {
    this.searchBy = event.target.value;
  }

  //Function to give suggestions to user
  public autoComplete(arr, value) {
    return arr.filter((item) => {
      if (item.toLowerCase().includes(value)) return item;
    });
  }
}
