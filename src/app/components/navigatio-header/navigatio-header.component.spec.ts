import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigatioHeaderComponent } from './navigatio-header.component';
import { GameStateService } from '../../services/game-state.service';
import { CustomTransformPipe } from '../../pipe/custom-transform.pipe';
import { of } from 'rxjs';

describe('NavigatioHeaderComponent', () => {
  let component: NavigatioHeaderComponent;
  let fixture: ComponentFixture<NavigatioHeaderComponent>;
  let gameStateServiceMock: any;

  beforeEach(async () => {
    // Mocking GameStateService
    gameStateServiceMock = {
      losedLetterLength$: of(0),
      gameResult$: of(null),
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
});
