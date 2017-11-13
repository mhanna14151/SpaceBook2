import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service.client';
import {UserService} from '../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {

  @Input()
  ID: String;
  post: any;
  poster: String;
  text: String;
  images: any[];
  tags: any[];
  date: Date;
  likeAmount: Number;
  userId: String;

  constructor(private postService: PostService, private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
    });
    if (this.ID === null) {
        this.ID = '0';
      } else {
        this.postService.findPostbyId(this.ID)
          .subscribe((post) => {
            this.post = post;
            this.poster = post.username;
            this.images = post.images;
            this.text = post.text;
            this.tags = post.tags;
            this.date = post.date;
            this.likeAmount = post.likeAmount;
          });
      }
  }

  likeThisPost() {
    this.likeAmount = Number(this.likeAmount) + 1;
    this.post.likeAmount = this.likeAmount;
    this.postService.updatePost(this.ID, this.post)
      .subscribe((post) => {
      this.post = post;
      });
  }

  removeMyTag() {
    // SPLICE This stuff
    this.postService.updatePost(this.ID, this.post)
      .subscribe((post) => {
        this.post = post;
      });

  }


  //
  // findPostsByTag(ID) {
  //   this.postService.findPostsbyTag(this.ID)
  //     .subscribe((posts) => {
  //       this.post = posts;
  //     });
  // }
  //
  // findPostsByTags(any) {
  //   this.postService.findPostsbyTags(any)
  //     .subscribe((post) => {
  //       this.post = post;
  //     });
  // }

}
