import {Component, Input, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.profilePic = this.user.picture;
    this.username = this.user.username;
    this.userId = this.user._id;
  }

}
