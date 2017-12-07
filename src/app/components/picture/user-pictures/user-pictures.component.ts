import { Component, OnInit } from '@angular/core';
import {PictureServiceClient} from "../../../services/picture.service.client";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-pictures',
  templateUrl: './user-pictures.component.html',
  styleUrls: ['./user-pictures.component.css']
})
export class UserPicturesComponent implements OnInit {
  picId: String;
  picture = {};
  title: String;
  text: String;
  url: String;
  width: String;
  albumId: String;
  pictures = [];
  userId: String;

  constructor(private pictureService: PictureServiceClient, private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.albumId = params['aid'];
          this.picId = params['picid'];
          this.userId = params['uid'];
        }
      );
    this.pictureService.findPictureById(this.picId)
      .subscribe((picture: any) => {
        this.picture = picture;
        this.title = this.picture['title'];
        this.text = this.picture['text'];
        this.width = this.picture['width'];
        this.url = this.picture['url'];
      });
    this.pictureService.findPicturesByAlbum(this.albumId)
      .subscribe((pictures: any) => {
        this.pictures = pictures;
      });
  }
  commit(picId, text, title, url, width) {
    this.picture = {_id: picId, albumId: this.albumId, text: text, title: title, url: url, width: width};
    this.pictureService.updatePicture(picId, this.picture)
      .subscribe((pic: any) => {
        this.picture = pic;
        this.title = pic['title'];
        this.text = pic['text'];
        this.width = pic['width'];
        this.url = pic['url'];
        this.router.navigate(['user/' + this.userId + '/album/' + this.albumId]);
      });
  }

  goBackToAlbum() {
    this.router.navigate(['user/' + this.userId + '/album/' + this.albumId]);
  }

  deleted(picId) {
    this.pictureService.deletePicture(picId)
      .subscribe((pictures: any) => {
        this.router.navigate(['user/' + this.userId + '/album/' + this.albumId]);
      });
  }

}
