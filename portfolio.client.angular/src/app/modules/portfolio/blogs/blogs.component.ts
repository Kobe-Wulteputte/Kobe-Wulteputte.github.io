import { PostService } from './../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  postList: Post[] = [];

  constructor(private postService: PostService) {
    this.postList = postService.postList;
  }

  ngOnInit(): void {}
}
