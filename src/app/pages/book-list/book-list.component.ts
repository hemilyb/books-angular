import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: any[] = []

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe({
      next: (data) => this.books = data,
      error: (err) => console.log(err)
    }
    )
  }

  delete(id: string) {
    this.bookService.deleteBook(id).subscribe({
      next: () => {
        this.ngOnInit()
      },
      error: (err) => console.log(err)
    })
  }
}
