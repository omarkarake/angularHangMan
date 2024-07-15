import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.css']
})
export class InGameComponent {
  @Input() word: string = '';
  @Input() specialLetters: string[] = [];
  @Input() disabledLetters: string[] = [];
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  isSpecialLetter(letter: string): boolean {
    return this.specialLetters.includes(letter);
  }

  isDisabledLetter(letter: string): boolean {
    return this.disabledLetters.includes(letter);
  }
}
