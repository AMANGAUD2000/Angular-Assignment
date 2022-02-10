import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import {retry, throwError } from 'rxjs';
import { IPost } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   private _url: string="https://jsonplaceholder.typicode.com/posts"
  constructor(private http: HttpClient) { }

  getPosts(): Observable<IPost[]>{
    return this.http.get<IPost[]>(this._url)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error")
  }
}
