import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(public router: Router) {}
  // TODO: de routes bekomen van de router
  // kan via router.config, maar ook nog eens uitzoeken hoe je aan de routes van submodules komt...
  routes: Routes = [
    {
      path: 'about-me',
      title: 'About me',
      data: { nav: true },
    },
    {
      path: 'blog',
      title: 'Blog',
      data: { nav: true },
    },
    {
      path: 'proof-of-concept/grid',
      title: 'Grid',
      data: { nav: true },
    },
  ];


  ngOnInit() {
    // this.router.config.forEach((i) => {
    //   this.getPaths(i);
    // });
    // console.log(this.urls);
  }

  // urls: string[] = [];
  // getPaths(route: Route, parent: string = '') {
  //   if (route.redirectTo) {
  //     return;
  //   }
  //   if (route.children) {
  //     route.children.forEach((i) => {
  //       this.getPaths(i, parent + route.path);
  //     });
  //   } else if (route.loadChildren) {
  //     (<any>this.router).configLoader
  //       .load(this.injector, route)
  //       .subscribe((i: any) => {
  //         i.routes.forEach((j: any) => {
  //           this.getPaths(j, parent + route.path);
  //         });
  //       });
  //   } else if (route.path != null) {
  //     this.setPath(route.path, parent);
  //   }
  // }
  // setPath(path: any, parent: any) {
  //   let fullPath: string = '';
  //   if (path != null) {
  //     if (parent) {
  //       fullPath = `/${parent}/${path}`;
  //     } else {
  //       fullPath = `/${path}`;
  //     }
  //   }
  //   this.urls.push(fullPath);
  // }
}
