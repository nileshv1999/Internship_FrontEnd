import { TestBed } from '@angular/core/testing';

import { AccountRegistrationService } from './account-registration.service';

describe('AccountRegistrationService', () => {
  let service: AccountRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
