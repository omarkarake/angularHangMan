import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouLoseComponent } from './you-lose.component';

describe('YouLoseComponent', () => {
  let component: YouLoseComponent;
  let fixture: ComponentFixture<YouLoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YouLoseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouLoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
