import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  constructor(private location: Location, public router: Router) { }

  ngOnInit() {
  }
  //Function to go back to previous page
  public goBackToPreviousPage(): any {
    this.location.back();
  }

  //Function to go to home page
  public goToHome(): any {
    this.router.navigate(['/region']);
  }
}
