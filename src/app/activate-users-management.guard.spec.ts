import { TestBed } from '@angular/core/testing';

import { ActivateUsersManagementGuard } from './activate-users-management.guard';

describe('ActivateUsersManagementGuard', () => {
  let guard: ActivateUsersManagementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateUsersManagementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
