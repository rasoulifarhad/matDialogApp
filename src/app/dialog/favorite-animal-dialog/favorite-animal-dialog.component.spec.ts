import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteAnimalDialogComponent } from './favorite-animal-dialog.component';

describe('CourseDialogContainerComponent', () => {
  let component: FavoriteAnimalDialogComponent;
  let fixture: ComponentFixture<FavoriteAnimalDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteAnimalDialogComponent]
    });
    fixture = TestBed.createComponent(FavoriteAnimalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
