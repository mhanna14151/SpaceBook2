import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registrationForm: NgForm;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  errorFlag: boolean;
  errorMsg: string;
  user: any;
  user_id: string;
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
  }
  register(username: string, password: string, email: string, firstName: string, lastName: string) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.errorMsg = 'Invalid username or password!';
    this.errorFlag = false;
  }
  registered(username, password, firstName, lastName, email) {
    this.userService.findUserByUsername(username)
      .subscribe((user: any) => {
        if (user !== null) {
          this.errorFlag = true;
          this.errorMsg = 'Username already in use, please choose another username!';
        }else {
          const user1 = {username: username, password: password, firstName: firstName, lastName: lastName, email: email};
          this.userService.createUser(user1)
            .subscribe((user2) => {
              this.user = user2;
              this.user_id = user2['_id'];
              this.router.navigate(['user/', this.user_id]);
            });
        }
      });
  }

}
