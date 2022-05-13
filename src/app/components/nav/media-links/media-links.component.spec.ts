import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaLinksComponent } from './media-links.component';

describe('MediaLinksComponent', () => {
  let component: MediaLinksComponent;
  let fixture: ComponentFixture<MediaLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
