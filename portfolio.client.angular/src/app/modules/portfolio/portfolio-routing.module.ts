import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },
  {
    path: 'about-me',
    component: AboutMeComponent,
    title: 'About me',
    data: { nav: true },
  },
  {
    path: 'blog',
    component: BlogsComponent,
    title: 'Blog',
    data: { nav: true },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
