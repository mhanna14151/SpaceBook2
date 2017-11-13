import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service.client';
import {UserService} from '../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
  ID: any;
  queryID: any;
  posts: any[];
  tags: any[];

  constructor(private postService: PostService, private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.queryID = null;
    this.route.params.subscribe(params => {
      this.ID = params['uid'];
      this.queryID = params['qid'];
      // tags = params[];
    });
    if (this.queryID === null) {
      this.postService.findPostsbyTag(this.ID)
        .subscribe((posts) => {
          this.posts = posts;
        });
      // } else {
      //   this.postService.findPostsbyTag(queries)
      //     .subscribe((posts) => {
      //       this.posts = posts;
      //     });
      // }
    }
  }


findPostsByTag(ID) {
  this.postService.findPostsbyTag(this.ID)
    .subscribe((posts) => {
      this.posts = posts;
    });
}

findPostsByTags(any) {
  this.postService.findPostsbyTags(any)
    .subscribe((posts) => {
      this.posts = posts;
    });
}

}
