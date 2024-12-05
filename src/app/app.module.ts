import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { DiscountsTableComponent } from './discounts-table/discounts-table.component';

import { FormsModule } from '@angular/forms';

import { WinkelsComponent } from './winkels/winkels.component';
import { ModalComponent } from './modal/modal.component';

import { CompanyCodesComponent } from './company-codes/company-codes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    {
      path: '',
      component: DiscountsTableComponent
    },
    {
      path: 'winkels',
      component: WinkelsComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: ':company',
      component: CompanyCodesComponent
    },
]

@NgModule({
  declarations: [
    AppComponent,
    DiscountsTableComponent,
    WinkelsComponent,
    ModalComponent,
    CompanyCodesComponent,
    NavbarComponent,
    ContactComponent
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
