import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeNl from '@angular/common/locales/nl';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
      path: '',
      loadChildren: () => import('./discounts-table/discounts-table.module').then(m => m.DiscountsTableModule)
    },
    {
      path: 'winkels',
      loadChildren: () => import('./winkels/winkels.module').then(m => m.WinkelsModule)
    },
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
    },
    {
      path: 'giftcards',
      loadChildren: () => import('./giftcards/giftcards.module').then(m => m.GiftcardsModule)
    },
    {
      path: 'giftcards/:company',
      loadChildren: () => import('./giftcards/giftcards.module').then(m => m.GiftcardsModule)
    },
    {
      path: ':company',
      loadChildren: () => import('./company-codes/company-codes.module').then(m => m.CompanyCodesModule)
    },
    {
      path: '**',
      component: NotFoundComponent
    },
]

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
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
