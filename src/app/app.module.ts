import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleBootstrapComponent } from './simple-bootstrap/simple-bootstrap.component';

import { DiscountsTableComponent } from './discounts-table/discounts-table.component';

import { FormsModule } from '@angular/forms';

import { WinkelsComponent } from './winkels/winkels.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleBootstrapComponent,
    DiscountsTableComponent,
    WinkelsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
