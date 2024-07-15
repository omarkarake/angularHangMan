import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private losedLetterLengthSource = new BehaviorSubject<number>(0);
  losedLetterLength$ = this.losedLetterLengthSource.asObservable();

  updateLosedLetterLength(length: number) {
    this.losedLetterLengthSource.next(length);
  }
}
