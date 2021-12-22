import { Post } from '../post/post';
export class Blogposts {
  posts: Post[];

  constructor() {
    let testPost = new Post();
    testPost.postTitle = 'Een nieuwe';
    this.posts = [testPost, new Post()];
  }

  activate(){

  }
}
