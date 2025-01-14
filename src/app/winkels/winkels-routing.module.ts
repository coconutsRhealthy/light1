import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinkelsComponent } from './winkels.component';

const routes: Routes = [
  { path: '', component: WinkelsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WinkelsRoutingModule { }