import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
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
