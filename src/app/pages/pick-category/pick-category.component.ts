import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pick-category',
  templateUrl: './pick-category.component.html',
  styleUrl: './pick-category.component.css'
})
export class PickCategoryComponent {
  @Output() goBack = new EventEmitter();
  @Input('pageType') pageType: string | undefined;


  constructor() {}

  backToHome() {
    this.goBack.emit();
  }
}
