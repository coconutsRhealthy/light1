import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleBootstrapComponent } from './simple-bootstrap/simple-bootstrap.component';

import { DiscountsTableComponent } from './discounts-table/discounts-table.component';

import { FormsModule } from '@angular/forms';

import { WinkelsComponent } from './winkels/winkels.component';
import { ModalComponent } from './modal/modal.component';

import { CompanyCodesComponent } from './company-codes/company-codes.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
    {
      path: '',
      component: DiscountsTableComponent
    },
    {
      path: ':company',
      component: CompanyCodesComponent
    },
]

@NgModule({
  declarations: [
    AppComponent,
    SimpleBootstrapComponent,
    DiscountsTableComponent,
    WinkelsComponent,
    ModalComponent,
    CompanyCodesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
