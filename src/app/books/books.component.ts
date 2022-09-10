import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  title = 'List of courses';
  courses: any;
  show: boolean = false;
  name: string = '';
  books: string[] = [];

  constructor() {}

  handleClick(): void {
    this.show = !this.show;
  }

  handleChange(e: any) {
    this.name = e.target.value;
  }

  handleAdd(): void {
    if (this.name !== '') {
      this.books.push(this.name);
      this.name = '';
    } else {
      alert('nununu');
    }
  }

  handleDelete(book: string): void {
    if (this.books.includes(book)) {
      this.books.splice(this.books.indexOf(book), 1);
    }
  }
  ngOnInit(): void {}
}
