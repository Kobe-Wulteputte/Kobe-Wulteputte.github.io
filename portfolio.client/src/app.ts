import { autoinject } from "aurelia-framework";
import { RouterConfiguration, Router } from "aurelia-router";

@autoinject
export class App {
  router: Router;

  constructor() {
  }

  activate() {}

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = "Kobe Wulteputte";
    config.options.root = "/";
    config.options.pushState = true;
    config.map([
      {
        route: ["", "welcome"],
        name: "home",
        title: "About me",
        nav: true,
        moduleId: "modules/about-me/about-me",
      },
      {
        route: ["blog"],
        name: "blog",
        title: "Blog",
        nav: true,
        moduleId: "modules/blogposts/blogposts",
      },
      {
        route: "post/:id",
        name: "blogpost",
        title: "Blog",
        href: 'blogpost',
        nav: false,
        moduleId: "modules/post/post",
      },
      // {
      //   route: "post/:id/edit",
      //   name: "blogedit",
      //   title: "Editor",
      //   nav: false,
      //   moduleId: "modules/blog-editor/blog-editor",
      // }
    ]);
    config.fallbackRoute("welcome");
  }
}
