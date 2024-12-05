import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiscountsService {
  private url = 'assets/discounts.v1.json';

  constructor(private http: HttpClient) {}

  getDiscounts(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
