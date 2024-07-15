import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private losedLetterLengthSubject = new BehaviorSubject<number>(0);
  private gameResultSubject = new BehaviorSubject<'win' | 'lose' | null>(null);
  private resetGameStateSubject = new BehaviorSubject<void>(undefined);

  losedLetterLength$ = this.losedLetterLengthSubject.asObservable();
  gameResult$ = this.gameResultSubject.asObservable();
  resetGameState$ = this.resetGameStateSubject.asObservable();

  private shouldLogResults = true;

  updateLosedLetterLength(length: number): void {
    this.losedLetterLengthSubject.next(length);
  }

  updateGameResult(result: 'win' | 'lose' | null): void {
    this.gameResultSubject.next(result);
  }

  resetGameState(): void {
    this.losedLetterLengthSubject.next(0);
    this.gameResultSubject.next(null);
    this.resetGameStateSubject.next();
  }

  startLogging(): void {
    this.shouldLogResults = true;
  }

  stopLogging(): void {
    this.shouldLogResults = false;
  }

  get shouldLog(): boolean {
    return this.shouldLogResults;
  }
}
