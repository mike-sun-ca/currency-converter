import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from './payloads/exchange-rates-reponse';



@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {

  constructor(private http: HttpClient) { }

  getRates(base: string): Observable<ExchangeRatesResponse>{
    return this.http.get<ExchangeRatesResponse>(`https://api.exchangeratesapi.io/latest?base=${base}`)
  }
}
