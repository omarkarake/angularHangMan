import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-navigatio-header',
  templateUrl: './navigatio-header.component.html',
  styleUrls: ['./navigatio-header.component.css']
})
export class NavigatioHeaderComponent implements OnInit {
  @Output() back = new EventEmitter();
  @Input('pageType') pageType: string | undefined;
  losedLetterLength: number = 0;
  isPauseModelVisible: boolean = false;

  constructor(private gameStateService: GameStateService) {}

  ngOnInit(): void {
    this.gameStateService.losedLetterLength$.subscribe(length => {
      this.losedLetterLength = length;
    });
  }

  goBack() {
    this.back.emit();
  }

  getProgressBarWidth(): string {
    return `${(100 - (this.losedLetterLength * 12.5))}%`;
  }

  togglePauseModel() {
    this.isPauseModelVisible = !this.isPauseModelVisible;
  }
}