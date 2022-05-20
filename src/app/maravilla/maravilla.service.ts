import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maravilla } from './maravilla';

@Injectable({
  providedIn: 'root'
})
export class MaravillaService {

constructor(private http: HttpClient) { }

  private API_URL = environment.baseURL +  'wonders.json';

  getMaravillas() : Observable<Maravilla[]> {
    return this.http.get<Maravilla[]>(this.API_URL);
  }
}
