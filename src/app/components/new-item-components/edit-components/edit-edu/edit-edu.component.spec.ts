import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEduComponent } from './edit-edu.component';

describe('EditEduComponent', () => {
  let component: EditEduComponent;
  let fixture: ComponentFixture<EditEduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
