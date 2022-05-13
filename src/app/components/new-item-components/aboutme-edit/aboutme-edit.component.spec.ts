import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmeEditComponent } from './aboutme-edit.component';

describe('AboutmeEditComponent', () => {
  let component: AboutmeEditComponent;
  let fixture: ComponentFixture<AboutmeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
