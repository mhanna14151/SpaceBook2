import { Component, OnInit } from '@angular/core';
import {AlbumServiceClient} from "../../../services/album.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  userId: String;
  albums = [];
  user: {};

  constructor(private albumService: AlbumServiceClient, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['uid'];
          this.albumService.findAllAlbumsByUser(this.userId)
            .subscribe((albums: any) => {
              this.albums = albums;
            });
        }
      );
  }

  newAlbum() {
    this.router.navigate(['user/' + this.userId + '/album/new']);
  }

  editAlbum(albumId) {
    this.router.navigate(['user/' + this.userId + '/album/' + albumId]);
  }

  goBackToProfile() {
    this.router.navigate(['user/' + this.userId]);
  }
}
