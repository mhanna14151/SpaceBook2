import {Component, Input, OnInit} from '@angular/core';
import {NasaServiceClient} from '../../services/nasa.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-nasa-picture-details',
  templateUrl: './nasa-picture-details.component.html',
  styleUrls: ['./nasa-picture-details.component.css']
})
export class NasaPictureDetailsComponent implements OnInit {
  @Input()
  itemId: string;
  item: any;
  stringJson: string;


  constructor(private nasaService: NasaServiceClient,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.params['imgid'];
    this.item = this.nasaService.requestDetails(this.itemId);
    this.stringJson = JSON.stringify(this.item).replace(',', ',<br>');


  }

}
