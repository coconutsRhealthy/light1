import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftcardsComponent } from './giftcards.component';
import { GiftcardsRoutingModule } from './giftcards-routing.module';


@NgModule({
  declarations: [GiftcardsComponent],
  imports: [
    CommonModule,
    GiftcardsRoutingModule
  ]
})
export class GiftcardsModule { }
