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
  @Input() selectedCategory: string | undefined;
  @Output() newCategory = new EventEmitter();
  @Output() playAgain = new EventEmitter();
  @Output() quitGameToHome = new EventEmitter();
  disabledLetters: string[] = [];
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  indexOfSpecialLetter: number | undefined;
  losedLetter: string[] = [];

  constructor(private gameStateService: GameStateService) {}

  ngOnInit(): void {
    console.log(`selected Word is: ${this.word} and specialWords are: ${this.specialLetters}`);
    

    this.gameStateService.resetGameState$.subscribe(() => {
      this.disabledLetters = [];
      this.losedLetter = [];
    });
  }

  isSpecialLetter(letter: string): boolean {
    return this.specialLetters.includes(letter);
  }

  isDisabledLetter(letter: string): boolean {
    return this.disabledLetters.includes(letter);
  }

  isTheLetterIncludeInString(letter: string) {
    if (!this.word.toLowerCase().includes(letter.toLowerCase())) {
      this.disabledLetters.push(letter);
      this.losedLetter.push(letter);
      this.gameStateService.updateLosedLetterLength(this.losedLetter.length);
      if (this.losedLetter.length === 8) {
        this.gameStateService.updateGameResult('lose');
      }
    } else {
      if (this.specialLetters.includes(letter)) {
        this.disabledLetters.push(letter);
        this.indexOfSpecialLetter = this.specialLetters.indexOf(letter);
        this.specialLetters.splice(this.indexOfSpecialLetter, 1);
        if (this.specialLetters.length < 1) {
          this.gameStateService.updateGameResult('win');
        }
      } else {
        this.losedLetter.push(letter);
        this.gameStateService.updateLosedLetterLength(this.losedLetter.length);
        this.disabledLetters.push(letter);
      }
    }
  }

  handlePlayAgainEvent() {
    this.gameStateService.resetGameState();
    this.playAgain.emit();
  }
  quitGameToHomeInGame(){
    this.gameStateService.resetGameState();
    this.quitGameToHome.emit();
  }
  
  newCategoryPlay(){
    this.gameStateService.resetGameState();
    this.newCategory.emit();
  }
}
