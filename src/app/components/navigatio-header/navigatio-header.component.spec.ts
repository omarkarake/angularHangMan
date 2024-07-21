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
});
