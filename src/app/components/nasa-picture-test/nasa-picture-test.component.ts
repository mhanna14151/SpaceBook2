import { Component, OnInit } from '@angular/core';
import {NasaServiceClient} from '../../services/nasa.service.client';

@Component({
  selector: 'app-nasa-picture-test',
  templateUrl: './nasa-picture-test.component.html',
  styleUrls: ['./nasa-picture-test.component.css']
})
export class NasaPictureTestComponent implements OnInit {
  searchParams: String;
  result: Object;
  gotResult: Boolean;
  search(params: String) {
    this.nasaService.searchImg(this.searchParams)
      .subscribe((result) => {
        this.result = result;
        this.gotResult = true;
        // console.log(result);
      });
  }
  constructor(private nasaService: NasaServiceClient) { }

  ngOnInit() {
    this.gotResult = false;
  }

}
