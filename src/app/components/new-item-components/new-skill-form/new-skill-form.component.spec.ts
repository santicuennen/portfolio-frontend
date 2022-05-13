import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSkillFormComponent } from './new-skill-form.component';

describe('NewSkillFormComponent', () => {
  let component: NewSkillFormComponent;
  let fixture: ComponentFixture<NewSkillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSkillFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSkillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
