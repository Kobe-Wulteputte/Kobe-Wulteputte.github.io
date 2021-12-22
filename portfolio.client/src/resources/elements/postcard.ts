import { Post } from "./../../modules/post/post";
import { bindable } from "aurelia-framework";

export class Postcard {
  @bindable
  post: Post;

  constructor() {
  }
}
