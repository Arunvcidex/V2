import { TestBed } from '@angular/core/testing';

import { EmsAssetService } from './ems-asset.service';

describe('EmsAssetService', () => {
  let service: EmsAssetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmsAssetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
