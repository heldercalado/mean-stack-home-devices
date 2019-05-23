import { TestBed } from '@angular/core/testing';

import { UsermessagesService } from './usermessages.service';

describe('UsermessagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsermessagesService = TestBed.get(UsermessagesService);
    expect(service).toBeTruthy();
  });
});
