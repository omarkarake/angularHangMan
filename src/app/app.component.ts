import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angularHangMan';
  constructor() {}
  openHowToPlay() {
    console.log('go to how to play clicked');
  }
}
