import { Component, EventEmitter, Input, Output } from '@angular/core';
type Categories = {
  [key: string]: string[];
};
@Component({
  selector: 'app-pick-category',
  templateUrl: './pick-category.component.html',
  styleUrls: ['./pick-category.component.css'],
})
export class PickCategoryComponent {
  @Output() goBack = new EventEmitter();
  @Output() pickCategoryEvent = new EventEmitter();
  @Output() categoryPicked = new EventEmitter();
  @Input('pageType') pageType: string | undefined;
  @Input() categories: Categories = {};

  constructor() {}

  backToHome() {
    this.goBack.emit();
  }
  
  pickCategory(category: string) {
    this.categoryPicked.emit(category);
    this.pickCategoryEvent.emit(category);
  }
}
