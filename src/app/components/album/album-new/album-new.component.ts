import { Component, OnInit } from '@angular/core';
import {AlbumServiceClient} from "../../../services/album.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album-new',
  templateUrl: './album-new.component.html',
  styleUrls: ['./album-new.component.css']
})
export class AlbumNewComponent implements OnInit {
  userId: String;
  albumId: String;
  title: String;
  description: String;
  dateCreated: Date;
  album = {};

  constructor(private albumService: AlbumServiceClient, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params:any) => {
        this.userId = params['uid'];
      });
    this.dateCreated = new Date();
  }

  commit(title: String, description: String) {
    this.album = {uploaderId: this.userId, title: title, description: description, dateCreated: this.dateCreated};
    this.albumService.createAlbum(this.userId, this.album)
      .subscribe((album: any) => {
        this.router.navigate(['user/' + this.userId + '/album']); //@TODO possibly change this to route to a list of albums??
      });
  }

  cancel() {
    this.router.navigate(['user/' + this.userId ]);
  }

}
