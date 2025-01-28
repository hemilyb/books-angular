import { Component, OnInit } from '@angular/core';
import { Book, BooksService } from '../../services/books.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-details',
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {
  book: any;

  constructor(private bookService: BooksService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id')
    if (bookId) {
      this.loadBook(bookId)
    }
  }

  loadBook(id: string) {
    this.bookService.getBookById(id).subscribe({
      next: (book) => {
        this.book = book
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
