import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

import { AppComponent } from './app.component';
import { DiscountsTableComponent } from './discounts-table/discounts-table.component';
import { ModalComponent } from './modal/modal.component';
import { CompanyCodesComponent } from './company-codes/company-codes.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GiftcardsComponent } from './giftcards/giftcards.component';

const routes: Routes = [
    {
      path: '',
      component: DiscountsTableComponent
    },
    {
      path: 'winkels',
      loadChildren: () => import('./winkels/winkels.module').then(m => m.WinkelsModule)
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'giftcards',
      component: GiftcardsComponent
    },
    {
      path: 'giftcards/:company',
      component: GiftcardsComponent
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
    ModalComponent,
    CompanyCodesComponent,
    ContactComponent,
    NotFoundComponent,
    GiftcardsComponent
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
