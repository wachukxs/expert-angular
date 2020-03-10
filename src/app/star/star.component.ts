import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor'; // what's protractor?

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {

  @Input() rating: number;

  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.starWidth = this.rating * 86 / 5 ;
    console.log('starWidth:', this.starWidth);
  }

  ratingOnClicked() {
    this.ratingClicked.emit(`The ${this.rating} rating was clicked!`);
  }

}
