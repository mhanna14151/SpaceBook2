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
  follows: any [];
  postsInPublicProfile: any[];


  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.userService.findUserById(this.userId)
      .subscribe( (user: any) => {
        console.log(user);
        this.firstName = user['firstName'];
        this.lastName = user['lastName'];
        this.picture = user['picture'];
        for (var i = 0; i < user['follows'].length; i++) {
          this.userService.findUserById(user['follows'][i])
            .subscribe((user: any) => {
              this.follows.push(user);
            });
        }
      });
    this.postService.findPostsByUser(this.userId)
      .subscribe((posts) => {
      this.postsInPublicProfile = posts;
      });
  }

  editProfile() {
    this.router.navigate(['user/' + this.userId + '/edit'])
  }

  goToUserProfile(userId) {
    this.router.navigate(['user/' + userId]);
  }

  navigateToPost() {
    this.router.navigate(['user/' + this.userId + '/posts/new']);

  }

}
