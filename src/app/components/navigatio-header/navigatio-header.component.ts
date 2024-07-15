import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-navigatio-header',
  templateUrl: './navigatio-header.component.html',
  styleUrls: ['./navigatio-header.component.css'],
})
export class NavigatioHeaderComponent implements OnInit {
  @Output() back = new EventEmitter();
  @Output() playAgain = new EventEmitter();
  @Output() newCategoryPlay = new EventEmitter();
  @Output() quitGameToHome = new EventEmitter();
  @Input('pageType') pageType: string | undefined;
  losedLetterLength: number = 0;
  isPauseModelVisible: boolean = false;
  gameResult: 'win' | 'lose' | null = null;

  constructor(private gameStateService: GameStateService) {}

  ngOnInit(): void {
    this.gameStateService.losedLetterLength$.subscribe((length) => {
      this.losedLetterLength = length;
      if (this.losedLetterLength === 8) {
        this.gameResult = 'lose';
        console.log('you lost in the navigation');
      }
    });

    this.gameStateService.gameResult$.subscribe((result) => {
      if (result === 'win') {
        this.gameResult = 'win';
        console.log('you won in the navigation');
      } else if (result === 'lose') {
        this.gameResult = 'lose';
        console.log('you lost in the navigation');
      }
    });
  }

  goBack() {
    this.back.emit();
  }

  getProgressBarWidth(): string {
    return `${100 - this.losedLetterLength * 12.5}%`;
  }

  togglePauseModel() {
    this.isPauseModelVisible = !this.isPauseModelVisible;
  }

  closeGameResultModel() {
    this.gameResult = null;
    console.log("game result is null");
  }

  handleContinue() {
    if (this.gameResult) {
      this.playAgain.emit();
      this.gameStateService.resetGameState(); // Reset game state
    } else {
      this.togglePauseModel();
    }
    this.closeGameResultModel();
  }

  playAgainBtn() {
    console.log('play again in navigation clicked');
    this.playAgain.emit();
    this.gameStateService.resetGameState(); // Reset game state
    this.closeGameResultModel();
  }

  newCategory(event: Event) {
    console.log('new category clicked in nav');
    this.gameStateService.resetGameState(); // Reset game state
    this.gameResult = null;
    this.isPauseModelVisible = false;
    this.newCategoryPlay.emit();
  }

  quitGame() {
    this.closeGameResultModel();
    this.isPauseModelVisible = false;
    console.log('quit game clicked in nav');
    this.quitGameToHome.emit();
  }
}
