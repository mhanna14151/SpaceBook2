import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.component.html',
  styleUrls: ['./search-profile.component.css']
})
export class SearchProfileComponent implements OnInit {
  @Input()
  user: any;
  profilePic: string;
  username: string;
  userId: string;
  originalUserId: String;
  errorFlag: Boolean;
  errorMessage: String;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.originalUserId = params['uid'];
      });
    this.profilePic = this.user.picture;
    this.username = this.user.username;
    this.userId = this.user._id;
    this.errorFlag = false;
    console.log(this.errorMessage);
  }

  addToFollow(userId) {
    console.log(userId);
    if (userId === this.originalUserId) {
      this.errorFlag = true;
      this.errorMessage = 'You cannot follow yourself!';
    } else {
      this.userService.findUserById(this.originalUserId)
        .subscribe((user: any) => {
          if (user.follows.includes(userId)) {
            this.errorFlag = true;
            this.errorMessage = 'You already follow this user.';
          } else {
            user.follows.push(userId);
            this.userService.updateUser(this.originalUserId, user)
              .subscribe((usr: any) => {
                this.router.navigate(['/user/' + this.originalUserId]);
              });
          }
        });

    }
  }
}
