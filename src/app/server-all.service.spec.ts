import { TestBed } from '@angular/core/testing';

import { ServerAllService } from './server-all.service';

describe('ServerAllService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServerAllService = TestBed.get(ServerAllService);
    expect(service).toBeTruthy();
  });
});
