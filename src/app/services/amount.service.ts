import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Amount } from '../models/amount.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AmountService {
  constructor(private http: HttpClient) {}

  getAmountInfo(apiUrl: string): Observable<Amount> {
    return this.http.get<Amount>(apiUrl);
  }
}
