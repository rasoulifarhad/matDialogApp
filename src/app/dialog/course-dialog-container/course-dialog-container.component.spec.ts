import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDialogContainerComponent } from './course-dialog-container.component';

describe('CourseDialogContainerComponent', () => {
  let component: CourseDialogContainerComponent;
  let fixture: ComponentFixture<CourseDialogContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseDialogContainerComponent]
    });
    fixture = TestBed.createComponent(CourseDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
