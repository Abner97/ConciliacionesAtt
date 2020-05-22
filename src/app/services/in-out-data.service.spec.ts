import { TestBed } from '@angular/core/testing';
import { InOutDataService } from './in-out-data.service';

describe('InOutDataService', () => {
  let service: InOutDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InOutDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
