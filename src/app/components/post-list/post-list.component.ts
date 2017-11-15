import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service.client';
import {UserService} from '../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  @Input()
  posts: any[];
  userId: String;


  constructor(private postService: PostService, private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      console.log('userId is: ', this.userId);
    });
    this.postService.findPostsForUser(this.userId)
      .subscribe((posts) => {
        this.posts = posts;
        console.log('posts are: ', posts);
      });
  }
}

//
// findPostsByTag(ID) {
//   this.postService.findPostsbyTag(this.ID)
//     .subscribe((posts) => {
//       this.posts = posts;
//     });
// }
//
// findPostsByTags(any) {
//   this.postService.findPostsbyTags(any)
//     .subscribe((posts) => {
//       this.posts = posts;
//     });
// }
