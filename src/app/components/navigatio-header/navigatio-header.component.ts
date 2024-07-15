import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-navigatio-header',
  templateUrl: './navigatio-header.component.html',
  styleUrls: ['./navigatio-header.component.css'],
})
export class NavigatioHeaderComponent implements OnInit {
  @Input('selectedCategory') selectedCategory:any;
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
      }
    });

    this.gameStateService.gameResult$.subscribe((result) => {
      if (result === 'win') {
        this.gameResult = 'win';
      } else if (result === 'lose') {
        this.gameResult = 'lose';
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
  }

  handleContinue() {
    if (this.gameResult) {
      this.playAgain.emit();
      this.gameStateService.resetGameState();
    } else {
      this.togglePauseModel();
    }
    this.closeGameResultModel();
  }

  playAgainBtn() {
    this.playAgain.emit();
    this.gameStateService.resetGameState();
    this.closeGameResultModel();
  }

  newCategory(event: Event) {
    this.gameStateService.resetGameState();
    this.gameResult = null;
    this.isPauseModelVisible = false;
    this.newCategoryPlay.emit();
  }

  quitGame() {
    this.closeGameResultModel();
    this.isPauseModelVisible = false;
    this.quitGameToHome.emit();
  }
}
