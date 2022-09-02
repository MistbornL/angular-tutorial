import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() books: string[] = [];
  @Input() handleDelete: any;
  constructor() {}

  ngOnInit(): void {
    this.handleDelete();
  }
}
