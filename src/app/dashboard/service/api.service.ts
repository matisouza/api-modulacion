import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = 'https://api.giphy.com/v1/gifs/search';
  private apiKey: string = 'CtbSNZMFPFlbWl1x5KQjtqPOHnE1ema5';

  result: Gif[] = []

  constructor(private http: HttpClient) { }

  getGifs(query: string = ''): void {

    // saco los espacios y saco las mayusculas
    query = query.trim().toLocaleLowerCase();

    // armo el header
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', 5)
      .set('q', query)

    // la consulta
    this.http
      .get<SearchGifsResponse>(`${this.url}`, { params })
      .subscribe((resp) => (this.result = resp.data))

  }
}
