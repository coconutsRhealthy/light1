import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftcardsComponent } from './giftcards.component';

const routes: Routes = [
  { path: '', component: GiftcardsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiftcardsRoutingModule { }
