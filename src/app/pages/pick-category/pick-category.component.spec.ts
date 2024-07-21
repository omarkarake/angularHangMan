import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickCategoryComponent } from './pick-category.component';

describe('PickCategoryComponent', () => {
  let component: PickCategoryComponent;
  let fixture: ComponentFixture<PickCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickCategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PickCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pickCategory emit the categoryPicked and pickCategoryEvent', () => {
    const category: string = 'animals';
    const emitSpycategoryPicked = jest.spyOn(component.categoryPicked, 'emit');
    const emitSpypickCategoryEvent = jest.spyOn(
      component.pickCategoryEvent,
      'emit'
    );
    component.pickCategory(category);
    expect(emitSpycategoryPicked).toHaveBeenCalled();
    expect(emitSpypickCategoryEvent).toHaveBeenCalled();
    expect(emitSpycategoryPicked).toHaveBeenCalledWith(category);
    expect(emitSpypickCategoryEvent).toHaveBeenCalledWith(category);
  });
});
