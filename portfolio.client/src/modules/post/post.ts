export class Post {
  postTitle: string;
  createdDate: Date;
  short: string;
  blogType: string; //TODO: enum?
  thumbnail: string;

  constructor() {
    this.postTitle = 'Titel';
    this.createdDate = new Date();
    this.short= 'Een korte uitleg';
    this.blogType= 'Code';
    this.thumbnail = 'assets/images/07CAT-STRIPES-mediumSquareAt3X-v2.jpg';
  }
}
