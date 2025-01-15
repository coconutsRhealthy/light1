import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountsTableComponent } from './discounts-table.component';
import { DiscountsTableRoutingModule } from './discounts-table-routing.module';
import { ModalComponent } from '../modal/modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DiscountsTableComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    DiscountsTableRoutingModule,
    SharedModule
  ]
})
export class DiscountsTableModule { }
