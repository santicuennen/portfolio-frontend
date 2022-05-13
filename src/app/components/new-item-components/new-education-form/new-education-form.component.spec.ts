import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEducationFormComponent } from './new-education-form.component';

describe('NewEducationFormComponent', () => {
  let component: NewEducationFormComponent;
  let fixture: ComponentFixture<NewEducationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEducationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEducationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
