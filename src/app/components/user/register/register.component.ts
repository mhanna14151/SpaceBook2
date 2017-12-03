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
  DOB: String;
  phone: String;
  constructor(private userService: UserService, private router: Router) {

  }

  ngOnInit() {
  }
  register(username: String, password: String, email: String, firstName: String, lastName: String, DOB: String) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.DOB = DOB;
    this.errorMsg = 'Invalid username or password!';
    this.errorFlag = false;
  }
  registered(username, password, firstName, lastName, email, DOB, phone) {
    console.log(DOB);
    console.log(DOB[5]+DOB[6]);
    console.log(DOB[8]+DOB[9]);
    const d = new Date();
    console.log(d.getUTCDate());
    console.log(d.getUTCDate().toString() === DOB[8] + DOB[9]);
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
