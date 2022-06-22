import { PostDTO } from './../../common/models/postDTO';
import { autoinject } from 'aurelia-framework';
import { PostService } from './../../common/services/post-service';

@autoinject
export class Blogposts {
  postlist: PostDTO[];

  constructor(private postService: PostService) {
    this.postService = postService
  }

  activate() {
    this.postlist = this.postService.postList;
    this.postlist.sort((a,b) => (a.createdDate < b.createdDate) ? 1 : ((b.createdDate < a.createdDate) ? -1 : 0))
  }
}
