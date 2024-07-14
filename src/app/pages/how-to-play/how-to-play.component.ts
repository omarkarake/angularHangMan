import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.css'
})
export class HowToPlayComponent {
  @Output() goBack = new EventEmitter();

  constructor() {}

  backToHome() {
    this.goBack.emit();
  }
}
