import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { DiscountsService } from '../services/discounts.service';

interface Discount {
  company: string;
  discountCode: string;
  percentage: string;
  date: string;
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

  constructor(private discountsService: DiscountsService, private datePipe: DatePipe) {}

  ngOnInit() {
    this.discountsService.getDiscounts().subscribe((data) => {
      this.discounts = data.map((line) => {
        const [company, discountCode, percentage, , date] = line.split(', ');
        return {
          company,
          discountCode,
          percentage,
          date,
        };
      });
      this.filteredDiscounts = this.discounts;
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
}
