import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountsTableComponent } from './discounts-table.component';
import { DiscountsTableRoutingModule } from './discounts-table-routing.module';
import { ModalComponent } from '../modal/modal.component';


@NgModule({
  declarations: [
    DiscountsTableComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    DiscountsTableRoutingModule
  ]
})
export class DiscountsTableModule { }
