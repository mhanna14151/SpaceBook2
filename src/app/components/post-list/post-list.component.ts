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
  IDfromProfile: String;
  @Input()
  posts: any[];


  constructor(private postService: PostService,
              private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
          console.log('Post-list: posts are: ', this.posts);

  }

  removeMyTag(ID) {
  this.postService.deletePost(ID)
    .subscribe((post) => {
      this.postService.findPostsByUser(this.IDfromProfile)
        .subscribe((posts) => {
          this.posts = posts;
        });
    });
  }

}

  // this.route.params.subscribe(params => {
    //   this.userId = params['uid'];
    //   console.log('Post-list: userId is: ', this.userId);
    // });
  //   this.postService.findPostsByUser(this.IDfromProfile)
  //     .subscribe((posts) => {
  //       this.posts = posts;
  //       console.log('Post-list: posts are: ', posts);
  //     });
  // }}

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
