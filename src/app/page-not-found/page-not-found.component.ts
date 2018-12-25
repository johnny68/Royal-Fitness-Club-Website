import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServices } from '../services';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  
  constructor(
  private router: Router,
  private service: MyServices
  ) { }

  ngOnInit() {


  }

  goToHome() {
    console.log('clicked');
    this.service.goToHome();
  }
}
