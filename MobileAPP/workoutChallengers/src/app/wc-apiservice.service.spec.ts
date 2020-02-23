import { TestBed } from '@angular/core/testing';

import { WcAPIServiceService } from './wc-apiservice.service';

describe('WcAPIServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WcAPIServiceService = TestBed.get(WcAPIServiceService);
    expect(service).toBeTruthy();
  });
});
