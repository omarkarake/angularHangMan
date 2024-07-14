import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pick-category',
  templateUrl: './pick-category.component.html',
  styleUrl: './pick-category.component.css'
})
export class PickCategoryComponent {
  @Output() goBack = new EventEmitter();

  constructor() {}

  backToHome() {
    this.goBack.emit();
  }
}
