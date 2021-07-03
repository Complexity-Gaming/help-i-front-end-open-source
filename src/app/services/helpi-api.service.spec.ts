import { TestBed } from '@angular/core/testing';

import { HelpiApiService } from './helpi-api.service';

describe('GamesApiService', () => {
  let service: HelpiApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpiApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
