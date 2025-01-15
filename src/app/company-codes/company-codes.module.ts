import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCodesComponent } from './company-codes.component';
import { CompanyCodesRoutingModule } from './company-codes-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CompanyCodesComponent],
  imports: [
    CommonModule,
    CompanyCodesRoutingModule,
    SharedModule
  ]
})
export class CompanyCodesModule { }
