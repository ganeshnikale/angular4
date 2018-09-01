import { TestBed, inject } from '@angular/core/testing';

import { UsersserviceService } from './usersservice.service';

describe('UsersserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersserviceService]
    });
  });

  it('should be created', inject([UsersserviceService], (service: UsersserviceService) => {
    expect(service).toBeTruthy();
  }));
});
