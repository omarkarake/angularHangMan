import { Component } from '@angular/core';

@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.css']
})
export class InGameComponent {
  word = 'UNITED KINGDOM';
  specialLetters = ['T', 'E', 'K', 'G', 'M'];
  disabledLetters = ['D', 'I', 'N', 'O', 'U'];
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  isSpecialLetter(letter: string): boolean {
    return this.specialLetters.includes(letter);
  }

  isDisabledLetter(letter: string): boolean {
    return this.disabledLetters.includes(letter);
  }
}
