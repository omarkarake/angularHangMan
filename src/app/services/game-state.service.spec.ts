import { TestBed } from '@angular/core/testing';
import { GameStateService } from './game-state.service';

describe('GameStateService', () => {
  let service: GameStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update losedLetterLength', (done) => {
    service.updateLosedLetterLength(5);
    service.losedLetterLength$.subscribe((length: any) => {
      expect(length).toBe(5);
      done();
    });
  });

  it('should update gameResult', (done) => {
    service.updateGameResult('win');
    service.gameResult$.subscribe((result: any) => {
      expect(result).toBe('win');
      done();
    });
  });

  it('should reset game state', (done) => {
    service.updateLosedLetterLength(5);
    service.updateGameResult('lose');
    service.resetGameState();

    service.losedLetterLength$.subscribe((length: any) => {
      expect(length).toBe(0);
    });

    service.gameResult$.subscribe((result: any) => {
      expect(result).toBeNull();
    });

    service.resetGameState$.subscribe(() => {
      done();
    });
  });

  it('should start and stop logging results', () => {
    service.stopLogging();
    expect(service.shouldLog).toBe(false);

    service.startLogging();
    expect(service.shouldLog).toBe(true);
  });
});

