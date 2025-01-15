import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftcardsComponent } from './giftcards.component';
import { GiftcardsRoutingModule } from './giftcards-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GiftcardsComponent],
  imports: [
    CommonModule,
    GiftcardsRoutingModule,
    SharedModule
  ]
})
export class GiftcardsModule { }
