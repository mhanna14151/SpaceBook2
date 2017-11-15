import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {PostService} from '../../../services/post.service.client';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})

export class PublicProfileComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private postService: PostService) { }
  userId: String;
  firstName: String;
  lastName: String;
  picture: String;
  follows: any[];
  birthday: Boolean;
  DOB: String;
  today = new Date();
  birthdayMsg = 'Happy Birthday!';
  postsInPublicProfile: any[];

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.birthday = false;
    this.userService.findUserById(this.userId)
      .subscribe( (user: any) => {
        var f = [];
        this.firstName = user['firstName'];
        this.lastName = user['lastName'];
        this.picture = user['picture'];
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
      });
    this.postService.findPostsByUser(this.userId)
      .subscribe((posts) => {
      this.postsInPublicProfile = posts;
      });
  }

  editProfile() {
    this.router.navigate(['user/' + this.userId + '/edit']);
  }

  goToUserProfile(userId) {
    this.router.navigate(['user/' + userId]);
  }

  navigateToPost() {
    this.router.navigate(['user/' + this.userId + '/posts/new']);

  }

  search() {
    this.router.navigate(['user/' + this.userId + '/search']);
  }

  deleteFollow(userId) {
    console.log(userId);
    for(var i = 0; i < this.follows.length; i++) {
      if (this.follows[i]._id === userId) {
        this.follows.splice(i, 1);
      }
    }
    console.log('SAVED ONES ', this.follows);
    this.userService.findUserById(this.userId)
      .subscribe((user: any) => {
        console.log('PREVIOUS USER.FOLLOWS ', user.follows);
        user.follows = [];
        for(var i = 0; i < this.follows.length; i++) {
          user.follows.push(this.follows[i]._id)
        }
        console.log('UPDATED USER.FOLLOWS ', user.follows);
        this.userService.updateUser(this.userId, user)
          .subscribe((usr: any) => {
          });
      });
    console.log(this.follows);
  }

}
