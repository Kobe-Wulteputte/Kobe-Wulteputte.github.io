import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import postfile from 'src/assets/posts.json';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public postList: Post[];

  constructor() {
    let loaded: any[] = Array.of(postfile.posts)[0];
    loaded.forEach((e) => (e.createdDate = new Date(e.createdDate)));
    loaded = loaded as Post[];
    this.postList = loaded;
  }

  async getContent(id: number): Promise<string> {
    return new Promise(function (resolve, reject) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', `assets/blogcontents/${id}.html`, true);
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
