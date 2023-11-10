import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAnimalComponent } from './favorite-animal.component';

describe('CourseDialogComponent', () => {
  let component: FavoriteAnimalComponent;
  let fixture: ComponentFixture<FavoriteAnimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteAnimalComponent]
    });
    fixture = TestBed.createComponent(FavoriteAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
