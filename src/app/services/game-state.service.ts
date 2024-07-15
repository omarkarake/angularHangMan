import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private losedLetterLengthSubject = new BehaviorSubject<number>(0);
  private gameResultSubject = new BehaviorSubject<'win' | 'lose' | null>(null);

  losedLetterLength$ = this.losedLetterLengthSubject.asObservable();
  gameResult$ = this.gameResultSubject.asObservable();

  updateLosedLetterLength(length: number): void {
    this.losedLetterLengthSubject.next(length);
  }

  updateGameResult(result: 'win' | 'lose' | null): void {
    this.gameResultSubject.next(result);
  }
}
