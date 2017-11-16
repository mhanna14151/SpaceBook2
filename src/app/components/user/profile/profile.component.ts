import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {environment} from '../../../../environments/environment';

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
  picture: String;
  phone: String;
  DOB: String;

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
        this.picture = this.user['picture'];
        this.DOB = this.user['DOB'];
        this.phone = this.user['phone'];
      });
  }

  goToProfile(uname, email, fname, lname, phone, DOB) {
    const user = {username: uname, email: email, firstName: fname, lastName: lname, phone: phone, DOB: DOB};
    this.userService.updateUser(this.userId, user)
      .subscribe((user1) => {
        this.router.navigate(['user/' + this.userId]);
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

  // commit(pic) {
  //   const user = {_id: this.userId, password: this.password, username: this.username, firstName: this.firstName,
  //     lastName: this.lastName, email: this.email, picture: pic};
  //   this.userService.updateUser(this.userId, user)
  //     .subscribe((usr: any) => {
  //       this.user = usr;
  //     });
  //
  // }
}
