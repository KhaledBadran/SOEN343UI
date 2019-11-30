import { TestBed } from '@angular/core/testing';

import { CondoService } from './condo.service';

describe('CondoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CondoService = TestBed.get(CondoService);
    expect(service).toBeTruthy();
  });
});
