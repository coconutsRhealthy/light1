import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { DiscountsService } from '../services/discounts.service';
import { AffiliateLinkService } from '../services/affiliate-link.service';
import { MetaService } from '../services/meta.service';

declare global {
  interface Window {
    sendCopyCodeToGa: (element_id_index: number) => void;
  }
}

interface Discount {
  company: string;
  discountCode: string;
  percentage: string;
  date: string;
  index: number;
}

@Component({
  selector: 'app-discounts-table',
  templateUrl: './discounts-table.component.html',
  styleUrls: ['./discounts-table.component.css', './../app.component.css'],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'nl' },
  ]
})
export class DiscountsTableComponent implements OnInit {
  discounts: Discount[] = [];
  filteredDiscounts: Discount[] = [];
  searchTerm: string = '';
  page: number = 1;
  itemsPerPage: number = 50;
  isModalVisible = false;
  selectedDiscount: any = null;
  sortByCompanyAscending = false;
  sortByDateAscending = false;
  sendCopyCodeToGa = window.sendCopyCodeToGa;

  constructor(private discountsService: DiscountsService, private affiliateLinkService: AffiliateLinkService,
                private meta: MetaService, private datePipe: DatePipe) {
    var monthYear = this.meta.getDateString();
    this.meta.updateTitle("Diski | Online shoppen met kortingscodes in " + monthYear);
    this.meta.updateMetaInfo("De nieuwste werkende kortingscodes van een groot aantal webshops; Bespaar op online shoppen in " + monthYear + " via diski.nl", "diski.nl", "Kortingscode, Korting");
  }

  ngOnInit() {
    this.discountsService.getDiscounts().subscribe((data) => {
      this.discounts = data.map((line, index) => {
        const [company, discountCode, percentage, , date] = line.split(', ');
        return {
          company,
          discountCode,
          percentage,
          date,
          index: index
        };
      });
      this.filteredDiscounts = this.discounts;
      const queryParams = new URLSearchParams(window.location.search);
      if(queryParams.has('i')) {
        this.openModal(this.discounts[queryParams.get('i')]);
      }
    });
  }

  onSearch() {
    this.filteredDiscounts = this.discounts.filter((discount) =>
      discount.company.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.page = 1;
  }

  get paginatedDiscounts(): Discount[] {
    const start = (this.page - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredDiscounts.slice(start, end);
  }

  nextPage() {
    if (this.page < this.totalPages) this.page++;
  }

  prevPage() {
    if (this.page > 1) this.page--;
  }

  get totalPages(): number {
    return Math.ceil(this.filteredDiscounts.length / this.itemsPerPage);
  }

  openModal(discount: any) {
    this.selectedDiscount = discount;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.selectedDiscount = null;
  }

  formatDate(date: string): string {
    const formattedDate = this.getDateFromDateString(date);
    return this.datePipe.transform(formattedDate, 'd MMM', '', 'nl');
  }

  getDateFromDateString(dateString) {
    dateString = dateString + "";
    var dateStringArray = dateString.split("-");
    var month = dateStringArray[0] - 1;
    var day = dateStringArray[1];
    const currentYear = new Date().getFullYear();
    return new Date(currentYear, month, day);
  }

  sortByCompany() {
    this.sortByCompanyAscending = !this.sortByCompanyAscending;
    this.filteredDiscounts.sort((a, b) => {
      const comparison = a.company.localeCompare(b.company);
      return this.sortByCompanyAscending ? comparison : -comparison;
    });
  }

  sortByDate() {
    this.sortByDateAscending = !this.sortByDateAscending;
    this.filteredDiscounts.sort((a, b) => {
      const dateA = this.getDateFromDateString(a.date);
      const dateB = this.getDateFromDateString(b.date);
      return this.sortByDateAscending
        ? dateA.getTime() - dateB.getTime()
        : dateB.getTime() - dateA.getTime();
    });
  }

  affiliateModalAction(discount) {
    if(this.affiliateLinkService.getAffiliateLink(discount.company) !== undefined) {
      this.openNewPageWithCodeDetailModal(discount.index, this.affiliateLinkService.getAffiliateLink(discount.company));
    } else {
      this.openModal(discount);
    }
  }

  openNewPageWithCodeDetailModal(codeTableIndex, affiliateLink) {
    var url = 'https://www.dutchtoy.nl?i=' + encodeURIComponent(codeTableIndex)
    window.open(url, '_blank');
    location.href = affiliateLink;
  }
}
