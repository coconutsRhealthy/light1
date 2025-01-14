import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountsTableComponent } from './discounts-table.component';
import { DiscountsTableRoutingModule } from './discounts-table-routing.module';


@NgModule({
  declarations: [DiscountsTableComponent],
  imports: [
    CommonModule,
    DiscountsTableRoutingModule
  ]
})
export class DiscountsTableModule { }
