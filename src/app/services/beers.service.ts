import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BeersService {

  baseURL = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) { }

  getRequest(url?: string): Observable<any> {
    if (url === undefined) {
      url = this.baseURL;
    }
    return this.http.get(url);
  }
}
