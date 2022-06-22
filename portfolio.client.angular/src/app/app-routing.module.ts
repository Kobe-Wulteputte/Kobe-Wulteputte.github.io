import { AboutMeComponent } from './about-me/about-me.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMeComponent,
    title: 'About me',
    data: { nav: true },
  },
  {
    path: 'blog',
    component: AboutMeComponent,
    title: 'Blog',
    data: { nav: true },
  },
  { path: '', redirectTo: 'about-me', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
