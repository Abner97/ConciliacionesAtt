import { TestBed } from '@angular/core/testing';

import { DetallesOutService } from './detalles-out.service';

describe('DetallesOutService', () => {
  let service: DetallesOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallesOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
