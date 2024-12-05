import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { LOCALE_ID } from '@angular/core';
import { ElementRef } from '@angular/core';

import { DiscountsService } from '../services/discounts.service';

declare let gtag: Function;

@Component({
  selector: 'app-company-codes',
  templateUrl: './company-codes.component.html',
  styleUrls: ['./company-codes.component.css', './../app.component.css'],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'nl' }, // Set the locale to Dutch
  ]
})
export class CompanyCodesComponent implements OnInit {

  company: string;
  webshopName: string;
  companySeoText: string;
  discountCodes: { code: string, discount: string, date: string }[] = [];

  isMenuCollapsed = true;

  constructor(private route: ActivatedRoute, private datePipe: DatePipe, private elementRef: ElementRef,
                private discountsService: DiscountsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.company = params.get('company');
      this.extractDiscountCodes(this.company);

      if(this.discountCodes.length > 0) {
        this.webshopName = this.getWebshopName(this.company);
      } else {

      }
    });
    this.elementRef.nativeElement.scrollTop = 0;
  }

  private extractDiscountCodes(companyName: string): void {

this.discountsService.getDiscounts().subscribe((data) => {
    // Mapping data into the structure of allDiscountCodes
    const allDiscountCodes = data.map((line) => {
      const [company, discountCode, percentage, , date] = line.split(', ');
      return {
        company,
        discountCode,
        percentage: +percentage,
        date,
      };
    });

    // Filtering and transforming the data into the desired format
    this.discountCodes = allDiscountCodes
      .filter(entry => entry.company.startsWith(companyName) || entry.company.startsWith(companyName))
      .map(entry => {
        // Removing 'company' and keeping the necessary fields
        return {
          code: entry.discountCode,
          discount: entry.percentage.toString(), // Convert percentage to string (since discount is of type string)
          date: entry.date
        };
      });

    //this.discountCodes.sort((a, b) => a.code.startsWith(urlString) ? -1 : 1);
  });
  }

  formatDate(date: string): string {
    //const formattedDate = this.getDateFromDateString(date);
    //return this.datePipe.transform(formattedDate, 'd MMM', '', 'nl');

    return date;
  }

  getCurrentDateAsString(): string {
    const currentDate = new Date();
    return String(currentDate.getMonth() + 1).padStart(2, '0') + '-' + String(currentDate.getDate()).padStart(2, '0');
  }

  getDateFromDateString(dateString) {
    dateString = dateString + "";
    var dateStringArray = dateString.split("-");
    var month = dateStringArray[0] - 1;
    var day = dateStringArray[1];
    return new Date(2023, month, day);
  }

  getWebshopName(companyName: string): string {
    return companyName;
  }

  shouldDisplayPercent(discount) {
    var shouldDisplayPercent = false;

    if(isFinite(discount) && discount.indexOf('€') === -1) {
      shouldDisplayPercent = true;
    }

    return shouldDisplayPercent;
  }

  get hasHttpCodes(): boolean {
    return this.discountCodes.some(code => code.code.startsWith('http'));
  }

  sendGiftcardEventsToGa() {
    if (typeof gtag === 'function') {
      gtag('event', 'giftcard', {
        'event_category': 'Giftcard',
        'event_label': 'giftcard_companypage_table'
      });

      gtag('event', 'giftcard', {
        'event_category': 'Giftcard',
        'event_label': 'giftcard_companypage_table_' + this.company
      });
    } else {
      console.error('gtag is not defined');
    }
  }
}
