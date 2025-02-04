import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  private apiUrl = 'http://localhost:5066/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl)
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book)
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`)
  }

  updateBook(book: Book) {
    return this.http.put(`${this.apiUrl}/${book.id}`, book)
  }

  deleteBook(id: string): Observable<Book> {
    return this.http.delete<Book>(`${this.apiUrl}/${id}`)
  }
}

export interface Book {
  id?: string;
  title: string;
  author: string;
  description: string;
}