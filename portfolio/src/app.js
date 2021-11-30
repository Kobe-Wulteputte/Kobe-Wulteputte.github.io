import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Kobe Wulteputte';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('about-me'), title: 'About Me' },
      { route: 'projects/:id',  moduleId: PLATFORM.moduleName('projects'), name:'projects' }
    ]);

    this.router = router;
  }
}
