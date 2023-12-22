import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  url: string = "https://localhost:7202/api/Books/GetBooks";
  constructor(private http:HttpClient) { }

  getData(page: number): Observable<any[]> {
    // Adjust your API endpoint to support pagination
    //const url = `${this.url}?pageNumber=${page}`;
    return this.http.get<any[]>(this.url+'/'+page);
  }
}
