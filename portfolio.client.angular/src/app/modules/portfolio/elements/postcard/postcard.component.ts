import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss'],
})
export class PostcardComponent implements OnInit {

  @Input()
  post!: Post; //Je moet blijkbaar expliciet meegeven dat post niet null zal zijn.
  constructor() {}

  ngOnInit(): void {
    if (this.post == null){
      console.error("Post mag geen NULL zijn");
    }
  }
}
