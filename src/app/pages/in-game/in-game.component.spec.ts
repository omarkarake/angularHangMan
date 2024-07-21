import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InGameComponent } from './in-game.component';
import { GameStateService } from '../../services/game-state.service';
import { BehaviorSubject } from 'rxjs';

class MockGameStateService {
  resetGameState$ = new BehaviorSubject<void>(undefined);
  updateLosedLetterLength = jest.fn();
  updateGameResult = jest.fn();
  resetGameState = jest.fn();
}

describe('InGameComponent', () => {
  let component: InGameComponent;
  let fixture: ComponentFixture<InGameComponent>;
  let mockGameStateService: MockGameStateService;

  beforeEach(async () => {
    mockGameStateService = new MockGameStateService();

    await TestBed.configureTestingModule({
      declarations: [InGameComponent],
      providers: [
        { provide: GameStateService, useValue: mockGameStateService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset game state on init', () => {
    component.ngOnInit();
    mockGameStateService.resetGameState$.next();
    expect(component.disabledLetters).toEqual([]);
    expect(component.losedLetter).toEqual([]);
  });

  it('should detect special letters', () => {
    component.specialLetters = ['A', 'B'];
    expect(component.isSpecialLetter('A')).toBeTruthy();
    expect(component.isSpecialLetter('C')).toBeFalsy();
  });

  it('should detect disabled letters', () => {
    component.disabledLetters = ['A', 'B'];
    expect(component.isDisabledLetter('A')).toBeTruthy();
    expect(component.isDisabledLetter('C')).toBeFalsy();
  });

  it('should handle letters not included in the word', () => {
    component.word = 'hello';
    component.isTheLetterIncludeInString('Z');
    expect(component.disabledLetters).toContain('Z');
    expect(component.losedLetter).toContain('Z');
    expect(mockGameStateService.updateLosedLetterLength).toHaveBeenCalledWith(
      1
    );
  });

  it('should handle letters included in the word but not special', () => {
    component.word = 'hello';
    component.isTheLetterIncludeInString('H');
    expect(component.disabledLetters).toContain('H');
    expect(component.losedLetter).toContain('H');
    expect(mockGameStateService.updateLosedLetterLength).toHaveBeenCalledWith(
      1
    );
  });

  it('should handle special letters included in the word', () => {
    component.word = 'hello';
    component.specialLetters = ['H'];
    component.isTheLetterIncludeInString('H');
    expect(component.disabledLetters).toContain('H');
    expect(component.specialLetters).not.toContain('H');
    expect(mockGameStateService.updateGameResult).toHaveBeenCalled();
  });

  it('should update game result to win when no special letters left', () => {
    component.word = 'hello';
    component.specialLetters = ['H'];
    component.isTheLetterIncludeInString('H');
    expect(mockGameStateService.updateGameResult).toHaveBeenCalledWith('win');
  });

  it('should update game result to lose when max losed letters reached', () => {
    component.word = 'hello';
    for (let i = 0; i < 8; i++) {
      component.isTheLetterIncludeInString('Z' + i);
    }
    expect(mockGameStateService.updateGameResult).toHaveBeenCalledWith('lose');
  });

  it('should handle play again event', () => {
    jest.spyOn(component.playAgain, 'emit');
    component.handlePlayAgainEvent();
    expect(mockGameStateService.resetGameState).toHaveBeenCalled();
    expect(component.playAgain.emit).toHaveBeenCalled();
  });

  it('should handle quit game to home event', () => {
    jest.spyOn(component.quitGameToHome, 'emit');
    component.quitGameToHomeInGame();
    expect(mockGameStateService.resetGameState).toHaveBeenCalled();
    expect(component.quitGameToHome.emit).toHaveBeenCalled();
  });

  it('should handle new category event', () => {
    jest.spyOn(component.newCategory, 'emit');
    component.newCategoryPlay();
    expect(mockGameStateService.resetGameState).toHaveBeenCalled();
    expect(component.newCategory.emit).toHaveBeenCalled();
  });
});
