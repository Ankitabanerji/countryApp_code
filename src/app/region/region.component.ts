import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  public region: any;
  public type: any;

  constructor(public appservice: AppService, private router: Router) {
    this.type = "region";
    this.region = [
      { name: "Africa", img: "../../assets/image/africa.gif" },
      { name: "Asia", img: "../../assets/image/asia.gif" },
      { name: "Europe", img: "../../assets/image/europe.gif" },
      { name: "North America", img: "../../assets/image/northamerica.gif" },
      { name: "Oceania", img: "../../assets/image/australia.gif" },
      { name: "South America", img: "../../assets/image/southamerica.gif" },
    ]
  }

  ngOnInit() {
  }

  //Function to select a region and load all the countries belonging to that particular region
  public selectRegion(name): any {
    if (name == 'North America' || name == "South America") {
      this.router.navigate(['/countries', 'Americas', this.type]);
    }
    else {
      this.router.navigate(['/countries', name, this.type]);
    }
  }
}
