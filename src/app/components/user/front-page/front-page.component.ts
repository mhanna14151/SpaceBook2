import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';


@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: String;
  password: String;
  errorFlag: Boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.errorFlag = false;
  }
  login(username: String, password: String) {
    this.username = username;
    this.password = password;
    this.userService.findUserByCredentials(this.username, this.password)
      .subscribe( (user: any) => {
        if (user) {
          this.router.navigate(['user/', user._id]);
        } else {
          this.errorFlag = true;
        }
    });
  }

  goTofindAsteroid() {
    this.router.navigate(['/searchAsteroids']);
  }

  goToImageSearch() {
    this.router.navigate(['/nasa-pic']);
  }

  goToAPOD() {
    this.router.navigate(['/APOD']);
  }



}
