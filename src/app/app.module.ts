import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

import { AppComponent } from './app.component';
import { DiscountsTableComponent } from './discounts-table/discounts-table.component';
import { WinkelsComponent } from './winkels/winkels.component';
import { ModalComponent } from './modal/modal.component';
import { CompanyCodesComponent } from './company-codes/company-codes.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

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
    {
      path: '**',
      component: NotFoundComponent
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
    ContactComponent,
    NotFoundComponent,
    FooterComponent
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
export class AppModule {
  constructor() {
    registerLocaleData(localeNl, 'nl');
  }
}
