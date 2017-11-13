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
  username: String;
  password: String;
  email: String;
  firstName: String;
  lastName: String;
  errorFlag: Boolean;
  errorMsg: String;
  user: any;
  user_id: String;
  picture: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Creative-Tail-astronaut.svg';
  DOB: Date;
  phone: String;
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
  }
  register(username: String, password: String, email: String, firstName: String, lastName: String) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.errorMsg = 'Invalid username or password!';
    this.errorFlag = false;
  }
  registered(username, password, firstName, lastName, email, DOB, phone) {
    this.userService.findUserByUsername(username)
      .subscribe((user: any) => {
        if (user !== null) {
          this.errorFlag = true;
          this.errorMsg = 'Username already in use, please choose another username!';
        }else {
          const user1 = {username: username, password: password, firstName: firstName, lastName: lastName, email: email,
          picture: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Creative-Tail-astronaut.svg', DOB: DOB, phone: phone};
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
