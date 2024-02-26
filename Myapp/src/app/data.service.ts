import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  fetchData() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://dummyjson.com/products/1'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
