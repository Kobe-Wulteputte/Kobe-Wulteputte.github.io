import { PostDTO } from './../../common/models/postDTO';
import { bindable } from "aurelia-framework";

export class Postcard {
  @bindable
  post: PostDTO;

  constructor() {
  }
}
