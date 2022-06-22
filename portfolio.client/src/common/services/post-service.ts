import { PostDTO } from "./../models/postDTO";
import postfile from "../../posts.json";

export class PostService {
  public postList: PostDTO[];

  constructor() {
    let loaded: any[] = Array.of(postfile.posts)[0];
    loaded.forEach((e) => (e.createdDate = new Date(e.createdDate)));
    loaded = loaded as PostDTO[];
    this.postList = loaded;
  }

  async getContent(id: number) {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `assets/blogcontents/${id}.html`, true);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText,
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      };

      xhr.send();
    });
  }
}
