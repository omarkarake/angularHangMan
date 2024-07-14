import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularHangMan';
  showHome = true;
  showHowToPlay = false;

  constructor() {}

  openHowToPlay() {
    this.showHome = false;
    this.showHowToPlay = true;
  }

  goBackToHome() {
    this.showHome = true;
    this.showHowToPlay = false;
  }
}
