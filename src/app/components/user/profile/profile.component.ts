import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('f') profileForm: NgForm;
  userId: string;
  user = {};
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
        }
      );
    this.userService.findUserById(this.userId)
      .subscribe((user: any) => {
        this.user = user;
        this.username = this.user['username'];
        this.firstName = this.user['firstName'];
        this.password = this.user['password'];
        this.lastName = this.user['lastName'];
        this.email = this.user['email'];
      });
  }

  websites() {
    this.router.navigate(['user/', this.userId, 'website']);
  }

  goToProfile(uname, email, fname, lname) {
    const user = {username: uname, email: email, firstName: fname, lastName: lname};
    this.userService.updateUser(this.userId, user)
      .subscribe((user1) => {
      });
  }

  cancelChanges() {
    this.ngOnInit();
  }

  deleteAccount(userId: string) {
    this.userService.deleteUser(userId)
      .subscribe((users) => {
        this.router.navigate(['/login']);
      });
  }
}
