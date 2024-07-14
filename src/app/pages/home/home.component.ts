import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Output() openHowToPlay = new EventEmitter();
  constructor() {}
  goToHowToPlay() {
    this.openHowToPlay.emit();
  }
}
