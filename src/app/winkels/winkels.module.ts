import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinkelsComponent } from './winkels.component';
import { WinkelsRoutingModule } from './winkels-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WinkelsComponent
  ],
  imports: [
    CommonModule,
    WinkelsRoutingModule,
    SharedModule
  ]
})
export class WinkelsModule { }