import { Component, OnInit } from '@angular/core';
import {NasaServiceClient} from '../services/nasa.service.client';

@Component({
  selector: 'app-nasa-test',
  templateUrl: './nasa-test.component.html',
  styleUrls: ['./nasa-test.component.css']
})
export class NasaTestComponent implements OnInit {
  asteroidId: String;
  result: Object;
  searchAsteroid(asteroidId: String) {
    this.nasaService.searchAsteroid(asteroidId)
      .subscribe((result) => {
        this.result = result;
        console.log(result);
      });
  }
  constructor(private nasaService: NasaServiceClient) { }

  ngOnInit() {
  }

}
