import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';

@Component({
  selector: 'app-celestial-body',
  templateUrl: './celestial-body.component.html',
  styleUrls: ['./celestial-body.component.css']
})
export class CelestialBodyComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }
  cbId: String;
  name: String;
  region: String;
  picture: String;
  type: [String];


  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.cbId = params['cbId'];
        }
      );
    this.userService.findUserById(this.cbId)
      .subscribe( (cb: any) => {
        const f = [];
        this.name = cb['name'];
        this.region = cb['region'];
        this.picture = cb['picture'];
      });
  }


  goToUserProfile(userId) {
    this.router.navigate(['user/' + userId]);
  }


}
