import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    DiscountsTableRoutingModule,
    SharedModule
  ]
})
export class DiscountsTableModule { }
