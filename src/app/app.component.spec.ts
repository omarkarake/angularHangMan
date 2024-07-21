// src/app/app.component.spec.ts
// ----------------------------------------------------------------------

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GameStateService } from './services/game-state.service';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let gameStateServiceMock: any;

  beforeEach(async () => {
    gameStateServiceMock = {
      resetGameState: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [AppComponent],
      providers: [
        { provide: GameStateService, useValue: gameStateServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularHangMan'`, () => {
    expect(app.title).toEqual('angularHangMan');
  });

  it('should open how to play section', () => {
    app.openHowToPlay();
    expect(app.showHome).toBe(false);
    expect(app.showHowToPlay).toBe(true);
    expect(app.showPickACategory).toBe(false);
    expect(app.showInGame).toBe(false);
  });

  it('should open play section', () => {
    app.openToPlay();
    expect(app.showHome).toBe(false);
    expect(app.showHowToPlay).toBe(false);
    expect(app.showPickACategory).toBe(true);
    expect(app.showInGame).toBe(false);
  });

  it('should go back to home', () => {
    app.goBackToHome();
    expect(app.showHome).toBe(true);
    expect(app.showHowToPlay).toBe(false);
    expect(app.showPickACategory).toBe(false);
    expect(app.showInGame).toBe(false);
  });

  it('should pick a category and start the game', () => {
    const category = 'movies';
    jest.spyOn(app, 'pickCategoryEvent');
    app.pickCategoryEvent(category);
    expect(app.pickCategoryEvent).toHaveBeenCalledWith(category);
    expect(app.showHome).toBe(false);
    expect(app.showHowToPlay).toBe(false);
    expect(app.showPickACategory).toBe(false);
    expect(app.showInGame).toBe(true);
    expect(app.currentWord).toBeTruthy();
    expect(app.specialLetters).toBeTruthy();
    expect(app.disabledLetters.length).toBe(0);
  });

  it('should handle play again event', () => {
    const category = 'movies';
    app.selectedCategory = category;
    app.handlePlayAgainEvent();
    expect(gameStateServiceMock.resetGameState).toHaveBeenCalled();
    expect(app.currentWord).toBeTruthy();
  });

  it('should handle new category event', () => {
    jest.spyOn(app, 'openToPlay');
    app.newCategory();
    expect(app.openToPlay).toHaveBeenCalled();
  });

  it('should handle quit game to home event', () => {
    jest.spyOn(app, 'goBackToHome');
    app.quitGameToHome();
    expect(app.goBackToHome).toHaveBeenCalled();
  });

  it('should calculate special letters from current word', () => {
    const word = 'HELLO WORLD';
    const specialLetters = app.getSpecialLetters(word);
    expect(specialLetters).toEqual(['H', 'E', 'L', 'O', 'W', 'R', 'D']);
  });

  it('should update selectedCategory on categoryPicked', () => {
    const category = 'animals';
    app.categoryPicked(category);
    expect(app.selectedCategory).toBe(category);
  });

  it('should initialize data in uppercase', () => {
    const allWordsUppercase = Object.values(app.data).flat().every((word: unknown) => {
      return typeof word === 'string' && word === word.toUpperCase();
    });
    expect(allWordsUppercase).toBe(true);
  });
  
});
