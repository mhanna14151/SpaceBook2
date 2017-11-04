import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTofindAsteroid() {
    this.router.navigate(['/searchAsteroids']);
  }

  goToImageSearch() {
    this.router.navigate(['/nasa-pic']);
  }

  goToAPOD() {
    this.router.navigate(['/APOD']);
  }



}
