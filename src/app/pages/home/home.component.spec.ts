import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should goToHowToPlay emit openHowToPlay', () => {
    const emitSpyOnHowToPlay = jest.spyOn(component.openHowToPlay, 'emit');
    component.goToHowToPlay();
    expect(emitSpyOnHowToPlay).toHaveBeenCalled();
  });

  it('should goToPlay emit openToPlay', () => {
    const emitSpyOpenToPlay = jest.spyOn(component.openToPlay, 'emit');
    component.goToPlay();
    expect(emitSpyOpenToPlay).toHaveBeenCalled();
  });
});
