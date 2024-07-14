import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatioHeaderComponent } from './navigatio-header.component';

describe('NavigatioHeaderComponent', () => {
  let component: NavigatioHeaderComponent;
  let fixture: ComponentFixture<NavigatioHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigatioHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigatioHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
