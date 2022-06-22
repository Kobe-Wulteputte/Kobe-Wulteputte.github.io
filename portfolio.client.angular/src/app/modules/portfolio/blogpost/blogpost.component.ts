import { PostService } from './../../../shared/services/post.service';
import { Post } from './../../../shared/models/post.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.scss'],
})
export class BlogpostComponent implements OnInit {
  post?: Post;
  content: string;
  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.content = 'No content loaded';
  }

  async ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.post = this.postService.postList.find((post) => post.id == id);
    this.postService
      .getContent(id)
      .then((content) => (this.content = content))
      .catch((err) => {
        console.error(err);
        this.content = 'No content found';
      });
  }
}
