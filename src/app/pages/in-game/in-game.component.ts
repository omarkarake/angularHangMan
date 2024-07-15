// src/app/pages/in-game/in-game.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.css'],
})
export class InGameComponent implements OnInit {
  @Input() word: string = '';
  @Input() specialLetters: string[] = [];
  @Output() newCategory = new EventEmitter();
  @Output() playAgain = new EventEmitter();
  disabledLetters: string[] = [];
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  indexOfSpecialLetter: number | undefined;
  losedLetter: string[] = [];

  constructor(private gameStateService: GameStateService) {}

  ngOnInit(): void {
    console.log(
      'initial word and disabled letter',
      this.word,
      this.disabledLetters
    );
    console.log(
      'initial word and special letters',
      this.word,
      this.specialLetters
    );

    this.gameStateService.resetGameState$.subscribe(() => {
      this.disabledLetters = [];
      this.losedLetter = [];
      console.log('Game state has been reset');
    });
  }

  isSpecialLetter(letter: string): boolean {
    return this.specialLetters.includes(letter);
  }

  isDisabledLetter(letter: string): boolean {
    return this.disabledLetters.includes(letter);
  }

  // isTheLetterIncludeInString(letter: string) {
  //   if (!this.word.toLowerCase().includes(letter.toLowerCase())) {
  //     this.disabledLetters.push(letter);
  //     this.losedLetter.push(letter);
  //     this.gameStateService.updateLosedLetterLength(this.losedLetter.length);
  //     if (this.losedLetter.length === 8) {
  //       console.log('you lost');
  //     }
  //   } else {
  //     if (this.specialLetters.includes(letter)) {
  //       this.indexOfSpecialLetter = this.specialLetters.indexOf(letter);
  //       this.specialLetters.splice(this.indexOfSpecialLetter, 1);
  //       this.gameStateService.updateLosedLetterLength(this.losedLetter.length);
  //       if (this.losedLetter.length === 8) {
  //         console.log('you lost');
  //       }
  //       if (this.specialLetters.length < 1) {
  //         console.log('you win');
  //       }
  //     } else {
  //       this.losedLetter.push(letter);
  //       this.disabledLetters.push(letter);
  //       this.gameStateService.updateLosedLetterLength(this.losedLetter.length);
  //       if (this.losedLetter.length === 8) {
  //         console.log('you lost');
  //       }
  //     }
  //   }
  // }
  isTheLetterIncludeInString(letter: string) {
    if (!this.word.toLowerCase().includes(letter.toLowerCase())) {
      this.disabledLetters.push(letter);
      this.losedLetter.push(letter);
      this.gameStateService.updateLosedLetterLength(this.losedLetter.length);
      if (this.losedLetter.length === 8) {
        console.log('you lost');
        this.gameStateService.updateGameResult('lose');
      }
    } else {
      if (this.specialLetters.includes(letter)) {
        this.indexOfSpecialLetter = this.specialLetters.indexOf(letter);
        this.specialLetters.splice(this.indexOfSpecialLetter, 1);
        if (this.specialLetters.length < 1) {
          console.log('you win');
          this.gameStateService.updateGameResult('win');
        }
      } else {
        this.losedLetter.push(letter);
        console.log("lose letter in: ",this.losedLetter);
        this.gameStateService.updateLosedLetterLength(this.losedLetter.length);
        this.disabledLetters.push(letter);
      }
    }
  }

  handlePlayAgainEvent() {
    this.gameStateService.resetGameState();
    this.playAgain.emit();
    console.log('play again clicked in in-game');
  }

  newCategoryPlay(){
    this.newCategory.emit();
    console.log("new category in game clicked");
  }
}
