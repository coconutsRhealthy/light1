import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleBootstrapComponent } from './simple-bootstrap/simple-bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleBootstrapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
