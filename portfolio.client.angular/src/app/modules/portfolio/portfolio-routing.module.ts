import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogpostComponent } from './blogpost/blogpost.component';

const routes: Routes = [
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },
  {
    path: 'about-me',
    component: AboutMeComponent,
    title: 'About me',
  },
  {
    path: 'blog',
    component: BlogsComponent,
    title: 'Blog',
  },
  {
    path: 'blogpost/:id',
    component: BlogpostComponent,
    title: 'Blogpost',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
