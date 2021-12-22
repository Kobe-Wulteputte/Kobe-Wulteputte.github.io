import { PostDTO } from "./../../common/models/postDTO";
import { autoinject } from "aurelia-framework";
import { PostService } from "./../../common/services/post-service";
import { text } from "stream/consumers";

@autoinject
export class Post {
  postDTO: PostDTO;
  postService: PostService;
  content: string;

  constructor(postService: PostService) {
    this.postService = postService;
  }

  activate(params: any) {
    this.postDTO = this.postService.postList.find(
      (post) => post.id == params.id
    );
    console.log(this.postDTO);
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
