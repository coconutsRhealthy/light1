import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleBootstrapComponent } from './simple-bootstrap/simple-bootstrap.component';

import { DiscountsTableComponent } from './discounts-table/discounts-table.component';

import { FormsModule } from '@angular/forms';

import { WinkelsComponent } from './winkels/winkels.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleBootstrapComponent,
    DiscountsTableComponent,
    WinkelsComponent
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
