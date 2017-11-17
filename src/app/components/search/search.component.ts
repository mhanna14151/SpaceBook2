import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../services/user.service.client';
import {PostService} from '../../services/post.service.client';
import {NasaServiceClient} from '../../services/nasa.service.client';
import {CBService} from '../../services/cb.service.client';
import {ActivatedRoute, Router} from "@angular/router";

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
  cbResult = [];
  postResult = [];
  nasaResult = [];
  searchResultString = '';
  peopleReady = false;
  nasaReady = false;
  postReady = false;
  cbReady = false;
  userId: String;

  constructor(private cbService: CBService, private postService: PostService,
              private nasaService: NasaServiceClient, private userService: UserService, private router: Router,
              private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    /*
    const pluto = {name: 'Pluto', region: 'Sol System', type: 'Celestial Dwarf',
      picture: 'http://pluto.jhuapl.edu/Multimedia/Science-Photos/pics/P_COLOR2_enhanced_release.jpg'};
    this.cbService.createCB(pluto).subscribe((res: any) => {
      console.log(res);
      console.log('Pluto made!');

    });
    */

  }

  search(param: string) {
    this.searchResultString = '' ;
    console.log('searching for', param) ;
    this.searchparam = param;
    this.userService.findUserByUsername(param).subscribe((response: any) => {
      if (response != null) {
      this.userResult.push(response);
      this.peopleReady = true;
      }
    });
      this.nasaService.searchImg(param).subscribe((imgresponse: any) => {
        if (imgresponse != null) {
          this.nasaResult = imgresponse.collection.items;
          this.searchResultString += JSON.stringify(imgresponse) + '&nbsp&nbsp';
          this.nasaReady = true ;
        }
      });
    this.cbService.findCBbyText(param).subscribe((response: any) => {
      if (response != null) {
        this.cbResult = response;
        this.cbReady = true;
        console.log(this.cbResult);
      }
    });

  }

  goToProfile() {
    this.router.navigate(['user/' + this.userId]);
  }

}
