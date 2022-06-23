import { PostService } from './../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { zoomInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
  animations: [zoomInOnEnterAnimation({ anchor: 'enter', duration: 300 })],
})
export class BlogsComponent implements OnInit {
  postList: Post[] = [];

  constructor(private postService: PostService) {
    this.postList = postService.postList;
  }

  ngOnInit(): void {}

  animationState = false;

  animate() {
    this.animationState = !this.animationState;
  }
}
