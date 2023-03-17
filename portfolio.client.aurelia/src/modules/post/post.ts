import { PostDTO } from "./../../common/models/postDTO";
import { autoinject } from "aurelia-framework";
import { PostService } from "./../../common/services/post-service";

@autoinject
export class Post {
  postDTO: PostDTO;
  content: string;

  constructor(private postService: PostService) {

  }

  activate(params: any) {
    this.postDTO = this.postService.postList.find(
      (post) => post.id == params.id
    );
    // this.content = this.postService.getContent(params.id)
    this.content = "Content";
    this.postService
      .getContent(params.id)
      .then((content: string) => {
        this.content = content;
      })
      .catch((err) => {
        console.error(err);
        this.content = "No content found";
      });
  }
}
