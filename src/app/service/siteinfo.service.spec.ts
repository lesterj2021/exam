import { TestBed } from '@angular/core/testing';

import { SiteinfoService } from './siteinfo.service';

describe('SiteinfoService', () => {
  let service: SiteinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
