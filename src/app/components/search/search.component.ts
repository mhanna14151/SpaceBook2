import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service.client';
import {PostService} from '../../services/post.service.client';
import {NasaServiceClient} from '../../services/nasa.service.client';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  searchparam: string;
  searchResult: any;
  userResult = [];
  postResult = [];
  nasaResult = [];
  searchResultString = '';
  peopleReady = false;
  nasaReady = false;
  postReady = false;

  constructor(private postService: PostService, private nasaService: NasaServiceClient, private userService: UserService) { }

  ngOnInit() {
  }

  search(param: string) {
    this.searchResultString = '' ;
    console.log('searching for', param) ;
    this.searchparam = param;
    this.userService.findUserByUsername(param).subscribe((response: any) => {
      this.userResult.push(response);
      this.peopleReady = true;
    });
      this.nasaService.searchImg(param).subscribe((imgresponse: any) => {
        this.nasaResult = imgresponse.collection.items;
        this.searchResultString += JSON.stringify(imgresponse) + '&nbsp&nbsp';
        this.nasaReady = true ;
      });

  }

}
