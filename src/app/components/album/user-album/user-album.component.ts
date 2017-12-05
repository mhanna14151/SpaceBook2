import { Component, OnInit } from '@angular/core';
import {AlbumServiceClient} from "../../../services/album.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-album',
  templateUrl: './user-album.component.html',
  styleUrls: ['./user-album.component.css']
})
export class UserAlbumComponent implements OnInit {
  userId: String;
  albumId: String;
  pictures = [];
  album: {};
  title: String;
  description: String;

  constructor(private albumService: AlbumServiceClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.userId = params['uid'];
        this.albumId = params['aid'];
      });
    this.albumService.findAlbumById(this.albumId)
      .subscribe((album: any) => {
        this.album = album;
        this.pictures = album['pictures'];
        console.log(this.pictures);
        this.title = album['title'];
        this.description = album['description'];
      });
  }

  deleted(aid) {
    this.albumService.deleteAlbum(aid)
      .subscribe((status: any) => {
        this.router.navigate(['user/' + this.userId + '/album']);
      });
  }

  goToPicture(picId) {
    console.log(picId);
    this.router.navigate(['user/' + this.userId + '/album/' + this.albumId + '/pic/' + picId]);
  }

  addPicture() {
    this.router.navigate(['user/' + this.userId + '/album/' + this.albumId + '/pic/new']);
  }

  goBackToAlbums() {
    this.router.navigate(['user/' + this.userId + '/album']);
  }

  commit(title, description) {
    this.album = {
      uploaderId: this.userId,
      title: title,
      description: description,
      dateCreated: this.album['dateCreated'],
      pictures: this.pictures
    };
    this.albumService.updateAlbum(this.albumId, this.album)
      .subscribe((album: any) => {
        this.album = album;
        this.pictures = album['pictures'];
        this.title = album['title'];
        this.description = album['description'];
        this.goBackToAlbums();
      });
  }
}
