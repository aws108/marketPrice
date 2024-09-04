import { TestBed } from '@angular/core/testing';

import { MarketsServiceService } from './markets-service.service';

describe('MarketsServiceService', () => {
  let service: MarketsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
