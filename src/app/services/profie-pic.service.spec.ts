import { TestBed } from '@angular/core/testing';

import { ProfiePicService } from './profie-pic.service';

describe('ProfiePicService', () => {
  let service: ProfiePicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfiePicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
