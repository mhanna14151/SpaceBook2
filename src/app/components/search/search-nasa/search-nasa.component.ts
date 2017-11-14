import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-nasa',
  templateUrl: './search-nasa.component.html',
  styleUrls: ['./search-nasa.component.css']
})
export class SearchNasaComponent implements OnInit {
  @Input()
  nasaObject: any;
  description: string;
  picture: string;
  title: string;
  date: string;

  constructor() { }

  ngOnInit() {

    this.description = this.nasaObject.data['0'].description;
    this.picture = this.nasaObject.links['0'].href;
    this.title = this.nasaObject.data['0'].title;
    this.date = this.nasaObject.data['0'].date_created;
  }

}
