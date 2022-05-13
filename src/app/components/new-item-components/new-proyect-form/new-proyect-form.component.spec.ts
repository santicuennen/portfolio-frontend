import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProyectFormComponent } from './new-proyect-form.component';

describe('NewProyectFormComponent', () => {
  let component: NewProyectFormComponent;
  let fixture: ComponentFixture<NewProyectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProyectFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProyectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
