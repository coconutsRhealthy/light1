import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyCodesComponent } from './company-codes.component';

const routes: Routes = [
  { path: '', component: CompanyCodesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyCodesRoutingModule { }
