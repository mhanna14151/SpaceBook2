import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-space-banner-default',
  templateUrl: './space-banner-default.component.html',
  styleUrls: ['./space-banner-default.component.css']
})
export class SpaceBannerDefaultComponent implements OnInit {
  title: String;
  userId: String;


  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
    });
  }

  navigateToProfile() {
    this.router.navigate(['user/', this.userId]);
  }

  /**
   * This will have to be improved for security.
   */
  logOut() {
    this.router.navigate(['/login']);
  }

}
