import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) {}

  public getList(): Observable<any> {
    let Url = 'https://jsonplaceholder.typicode.com/posts';
    return this.httpClient.get(Url);
  }

}

