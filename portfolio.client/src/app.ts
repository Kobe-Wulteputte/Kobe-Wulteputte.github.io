import { autoinject } from 'aurelia-framework';

@autoinject
export class App {
  public message = 'Hello World!';

  constructor(){
    console.log("Constructed");
  }

  activate(){
    console.log("Activated");
  }

}
