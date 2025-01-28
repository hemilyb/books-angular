import { Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

export const routes: Routes = [
  { path: "", component: BookFormComponent },
  { path: "books", component: BookListComponent },
  { path: "books/:id", component: BookDetailsComponent},
  { path: 'books/edit/:id', component: BookFormComponent }
];
