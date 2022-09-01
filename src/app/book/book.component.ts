import { Component, OnInit } from '@angular/core';
import { CoursesService } from './book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
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

  ngOnInit(): void {}
}
