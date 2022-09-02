import { Component, OnInit } from '@angular/core';
import { CoursesService } from './books.service';

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

  constructor(service: CoursesService) {
    this.courses = service.getCourses;
    console.log(this.courses);
  }

  handleClick(): void {
    this.show = !this.show;
  }

  handleChange(e: any) {
    this.name = e.target.value;
  }

  handleAdd(): void {
    this.books.push(this.name);
    this.name = '';
  }

  handleDelete(book: string): void {
    if (this.books.includes(book)) {
      this.books.splice(this.books.indexOf(book), 1);
    }
  }
  ngOnInit(): void {}
}
