import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CBService} from '../../../services/cb.service.client';

@Component({
  selector: 'app-search-cb',
  templateUrl: './search-cb.component.html',
  styleUrls: ['./search-cb.component.css']
})
export class SearchCbComponent implements OnInit {

  @Input()
  cb: any;
  profilePic: string;
  name: string;
  cbId: string;
  originalUserId: String;
  errorFlag: Boolean;
  errorMessage: String;

  constructor(private activatedRoute: ActivatedRoute, private cbService: CBService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.originalUserId = params['uid'];
      });
    this.profilePic = this.cb.image;
    this.name = this.cb.name;
    this.cbId = this.cb._id;
    this.errorFlag = false;
    console.log(this.errorMessage);
  }


}
