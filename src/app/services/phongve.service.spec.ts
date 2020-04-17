import { TestBed } from '@angular/core/testing';

import { PhongveService } from './phongve.service';

describe('PhongveService', () => {
  let service: PhongveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhongveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
