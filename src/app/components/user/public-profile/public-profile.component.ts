import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {PostService} from '../../../services/post.service.client';
import {CBService} from '../../../services/cb.service.client';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})

export class PublicProfileComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private postService: PostService,
              private cbService: CBService) { }
  objType: String;
  objId: String;
  objData = {};
  follows: any[];
  birthday: Boolean;
  DOB: String;
  today = new Date();
  birthdayMsg = 'Happy Birthday!';
  postsInPublicProfile: any[];
  dataReady: boolean;


  ngOnInit() {
    this.dataReady = false;
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.objId = params['uid'];
          this.objType = params['obtype'];
        }
      );
    this.birthday = false;

    switch (this.objType) {

      case 'cb':
        this.getCBData(this.objId);
        break;
      case 'ce':
        break;
      case 'user':
        this.getUserData(this.objId);
        break;
      case 'org':
        break;

    }


    this.postService.findPostsByUser(this.objId)
      .subscribe((posts) => {
      this.postsInPublicProfile = posts;
      });
    console.log(this.follows);
  }

  editProfile() {
    this.router.navigate(['user/' + this.objId + '/edit']);
  }

  goToUserProfile(objId) {
    this.router.navigate(['user/' + objId]);
  }

  navigateToPost() {
    this.router.navigate(['user/' + this.objId + '/posts/new']);

  }

  search() {
    this.router.navigate(['user/' + this.objId + '/search']);
  }

  getCBData(objId){
    this.cbService.findCBbyId(this.objId).subscribe((cb:any) => {
        this.objData = cb;
        this.follows = [];
        this.dataReady = true;
    });
  }

  getUserData(objId){
    this.userService.findUserById(this.objId)
      .subscribe( (user: any) => {
        var f = [];
        this.objData = user;
        this.DOB = user['DOB'];
        if((this.DOB[5]+this.DOB[6] === (this.today.getUTCMonth()+1).toString()) && (this.DOB[8]+this.DOB[9] === this.today.getUTCDate().toString())) {
          this.birthday = true;
        }
        for (var i = 0; i < user['follows'].length; i++) {
          this.userService.findUserById(user['follows'][i])
            .subscribe((user: any) => {
              f.push(user);
            });
          this.follows = f;
        }
        this.dataReady = true;
      });
  }

  deleteFollow(objId) {
    console.log(objId);
    for(var i = 0; i < this.follows.length; i++) {
      if (this.follows[i]._id === objId) {
        this.follows.splice(i, 1);
      }
    }
    console.log('SAVED ONES ', this.follows);
    this.userService.findUserById(this.objId)
      .subscribe((user: any) => {
        console.log('PREVIOUS USER.FOLLOWS ', user.follows);
        user.follows = [];
        for(var i = 0; i < this.follows.length; i++) {
          user.follows.push(this.follows[i]._id)
        }
        console.log('UPDATED USER.FOLLOWS ', user.follows);
        this.userService.updateUser(this.objId, user)
          .subscribe((usr: any) => {
          });
      });
    console.log(this.follows);
  }

  goToAlbums() {
    this.router.navigate(['user/' + this.objId + '/album']);
  }

}
