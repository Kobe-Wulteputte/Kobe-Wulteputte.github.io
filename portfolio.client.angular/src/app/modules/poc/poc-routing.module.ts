import { GridComponent } from './grid/grid.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'grid', component: GridComponent },
  { path: '', redirectTo: 'grid', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PocRoutingModule {}
