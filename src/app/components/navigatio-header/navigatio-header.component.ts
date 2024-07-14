import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigatio-header',
  templateUrl: './navigatio-header.component.html',
  styleUrl: './navigatio-header.component.css'
})
export class NavigatioHeaderComponent {
  @Output() back = new EventEmitter();
  @Input('pageType') pageType: string | undefined;

  constructor() {}

  goBack() {
    this.back.emit();
  }
}
