import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProyectsComponent } from './edit-proyects.component';

describe('EditProyectsComponent', () => {
  let component: EditProyectsComponent;
  let fixture: ComponentFixture<EditProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProyectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
