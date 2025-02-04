import { Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: "", component: BookFormComponent },
  { path: "books", component: BookListComponent },
  { path: "books/:id", component: BookDetailsComponent },
  { path: 'books/edit/:id', component: BookFormComponent },
  { path: "**", component: NotFoundComponent }
];
