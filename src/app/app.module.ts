import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

import { BookComponent } from './book/book.component';
import { FetchingComponent } from './fetching/fetching.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookComponent,
    FetchingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],

  bootstrap: [AppComponent],
})
export class AppModule {}
