import { Component } from '@angular/core';

@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.component.html',
  styleUrl: './in-game.component.css'
})
export class InGameComponent {
  word = 'UNITED KINGDOM';
  specialLetters = ['T', 'E', 'K', 'G', 'M'];

  isSpecialLetter(letter: string): boolean {
    return this.specialLetters.includes(letter);
  }
}
