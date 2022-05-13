import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApLogoComponent } from './ap-logo.component';

describe('ApLogoComponent', () => {
  let component: ApLogoComponent;
  let fixture: ComponentFixture<ApLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
