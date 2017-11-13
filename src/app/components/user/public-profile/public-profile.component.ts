import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service.client";

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.css']
})
export class PublicProfileComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }
  userId: String;
  firstName: String;
  lastName: String;
  picture: String;

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
      });
  }
  editProfile() {
    this.router.navigate(['user/' + this.userId + '/edit'])
  }

}
