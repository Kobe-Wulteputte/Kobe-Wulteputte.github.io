import { BlogsComponent } from './blogs/blogs.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PostcardComponent } from './elements/postcard/postcard.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faLinkedin, faStrava } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [AboutMeComponent, BlogsComponent, PostcardComponent],
  imports: [CommonModule, PortfolioRoutingModule, FontAwesomeModule],
})
export class PortfolioModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faLinkedin, faStrava);
  }
}
