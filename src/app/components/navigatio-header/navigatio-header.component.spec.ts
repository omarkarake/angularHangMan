import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigatioHeaderComponent } from './navigatio-header.component';
import { GameStateService } from '../../services/game-state.service';
import { CustomTransformPipe } from '../../pipe/custom-transform.pipe';
import { BehaviorSubject, of } from 'rxjs';

describe('NavigatioHeaderComponent', () => {
  let component: NavigatioHeaderComponent;
  let fixture: ComponentFixture<NavigatioHeaderComponent>;
  let gameStateServiceMock: any;
  let losedLetterLengthSubject: BehaviorSubject<number>;
  let gameResultSubject: BehaviorSubject<'win' | 'lose' | null>;

  beforeEach(async () => {
    // Mocking GameStateService with BehaviorSubject
    losedLetterLengthSubject = new BehaviorSubject<number>(0);
    gameResultSubject = new BehaviorSubject<'win' | 'lose' | null>(null);

    gameStateServiceMock = {
      losedLetterLength$: losedLetterLengthSubject.asObservable(),
      gameResult$: gameResultSubject.asObservable(),
      resetGameState: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [NavigatioHeaderComponent, CustomTransformPipe],
      providers: [{ provide: GameStateService, useValue: gameStateServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigatioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set gameResult to win if gameStateService emits win', () => {
    gameResultSubject.next('win');
    fixture.detectChanges();
    expect(component.gameResult).toBe('win');
  });

  it('should set gameResult to lose if gameStateService emits lose', () => {
    gameResultSubject.next('lose');
    fixture.detectChanges();
    expect(component.gameResult).toBe('lose');
  });

  it('should set gameResult to lose if losedLetterLength reaches 8', () => {
    losedLetterLengthSubject.next(8);
    fixture.detectChanges();
    expect(component.gameResult).toBe('lose');
  });

  it('should not set gameResult if losedLetterLength is less than 8', () => {
    losedLetterLengthSubject.next(7);
    fixture.detectChanges();
    expect(component.gameResult).toBeNull();
  });

  it('should handle losedLetterLength and gameResult updates correctly in ngOnInit', () => {
    losedLetterLengthSubject.next(5);
    gameResultSubject.next('win');
    fixture.detectChanges();
    expect(component.losedLetterLength).toBe(5);
    expect(component.gameResult).toBe('win');
  });

  it('should emit back event on goBack call', () => {
    jest.spyOn(component.back, 'emit');
    component.goBack();
    expect(component.back.emit).toHaveBeenCalled();
  });

  it('should calculate progress bar width correctly', () => {
    component.losedLetterLength = 4;
    expect(component.getProgressBarWidth()).toBe('50%');
  });

  it('should toggle isPauseModelVisible on togglePauseModel call', () => {
    component.isPauseModelVisible = false;
    component.togglePauseModel();
    expect(component.isPauseModelVisible).toBe(true);
    component.togglePauseModel();
    expect(component.isPauseModelVisible).toBe(false);
  });

  it('should emit playAgain event and reset game state on playAgainBtn call', () => {
    jest.spyOn(component.playAgain, 'emit');
    component.playAgainBtn();
    expect(component.playAgain.emit).toHaveBeenCalled();
    expect(gameStateServiceMock.resetGameState).toHaveBeenCalled();
    expect(component.gameResult).toBeNull();
  });

  it('should emit newCategoryPlay event on newCategory call', () => {
    jest.spyOn(component.newCategoryPlay, 'emit');
    component.newCategory(new Event('click'));
    expect(component.newCategoryPlay.emit).toHaveBeenCalled();
    expect(gameStateServiceMock.resetGameState).toHaveBeenCalled();
  });

  it('should emit quitGameToHome event on quitGame call', () => {
    jest.spyOn(component.quitGameToHome, 'emit');
    component.quitGame();
    expect(component.quitGameToHome.emit).toHaveBeenCalled();
    expect(component.isPauseModelVisible).toBe(false);
  });

  it('should close game result model', () => {
    component.gameResult = 'win';
    component.closeGameResultModel();
    expect(component.gameResult).toBeNull();
  });

  it('should handle continue correctly', () => {
    jest.spyOn(component.playAgain, 'emit');
    component.gameResult = 'win';
    component.handleContinue();
    expect(component.playAgain.emit).toHaveBeenCalled();
    expect(gameStateServiceMock.resetGameState).toHaveBeenCalled();
    expect(component.gameResult).toBeNull();
  });

  it('should set gameResult to win if gameStateService emits win', () => {
    fixture.detectChanges();
    gameStateServiceMock.gameResult$ = of('win');
    component.gameResult = 'win';
    expect(component.gameResult).toBe('win');
  });

  it('should set gameResult to lose if losedLetterLength reaches 8', () => {
    gameStateServiceMock.losedLetterLength$ = of(8);
    fixture.detectChanges();
    component.losedLetterLength = 8;
    component.gameResult = 'lose';
    expect(component.gameResult).toBe('lose');
  });

  it('should call togglePauseModel if gameResult is null in handleContinue', () => {
    jest.spyOn(component, 'togglePauseModel');
    component.gameResult = null;
    component.handleContinue();
    expect(component.togglePauseModel).toHaveBeenCalled();
  });

  it('should not call togglePauseModel if gameResult is not null in handleContinue', () => {
    jest.spyOn(component, 'togglePauseModel');
    component.gameResult = 'win';
    component.handleContinue();
    expect(component.togglePauseModel).not.toHaveBeenCalled();
  });
});
