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
  poster: any;
  text: String;
  images: any[];
  tags: any[];
  date: Date;
  likes: Number;
  userId: String;
  testPost: any;
  image1: any; // here for testing
  image2: any; // here for testing
  tag1: any; // here for testing
  tag2: any; // here for testing

  constructor(private postService: PostService, private userService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
    });
    if (this.ID === undefined) {
      this.poster = {name: 'Alice'};
      this.image1 = {name: 'Image 1', url: 'https://res.cloudinary.com/demo/image/upload/sample.jpg'};
      this.image2 = {name: 'Image 2', url: 'https://i.ytimg.com/vi/lt0WQ8JzLz4/maxresdefault.jpg'};
      this.tag1 = {name: 'SpaceX'};
      this.tag2 = {name: 'NASA'};
      this.ID = '0';
      this.text = 'This is a sample post, where you can see that this functionality works';
      this.images = [this.image1, this.image2];
      this.likes = 3;
      this.date = new Date;
      this.tags = [this.tag1, this.tag2, {name: 'Alice'}, {name: 'Frankenstein'}];
    } else {
      this.postService.findPostbyId(this.ID)
        .subscribe((post) => {
          console.log('post from component', post);
          this.post = post;
          this.poster = post.username;
          this.images = post.images;
          this.text = post.text;
          this.tags = post.tags;
          this.date = post.date;
          this.likes = post.likes;
        });
      // }
    }
  }

  likeThisPost() {
    console.log(this.post.likes);
    this.post.likes++;
    console.log(this.post.likes)
    console.log('this is the POST', this.post);
    this.postService.updatePost(this.ID, this.post)
      .subscribe((post) => {
      this.ngOnInit();
      // this.router.navigate(['user/' + this.userId]);
        // this.post = post;
      });
  }

  removeMyTag() {
    // SPLICE This stuff
    this.postService.deletePost(this.ID)
      .subscribe((post) => {
        this.post = post;
        this.ngOnInit();
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
