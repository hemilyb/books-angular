import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book, BooksService } from '../../services/books.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit {
  newBook: Book = {
    id: '',
    title: '',
    author: '',
    description: '',
  };

  message: boolean = false;

  constructor(private bookService: BooksService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.loadBook(bookId);
    }
  }

  loadBook(id: string): void {
    this.bookService.getBookById(id).subscribe({
      next: (book) => {
        this.newBook = book;
      },
      error: (err) => {
        console.error('Erro ao buscar livro:', err);
      }
    });
  }

  onSubmit() {
    const bookToCreate = { ...this.newBook };
    delete bookToCreate.id;

    if (this.newBook.id) {
      this.bookService.updateBook(this.newBook).subscribe({
        next: () => {
          this.message = true
        }
      })
    } else {
      this.bookService.addBook(bookToCreate).subscribe({
        next: () => {
          this.router.navigate(["/books"])
        },
        error: (err) => {
          console.error('Erro ao adicionar livro:', err);
        }
      })
    }
  }
}
