import { TestBed, inject } from '@angular/core/testing';

import { ElderUserServiceService } from './elder-user-service.service';

describe('ElderUserServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ElderUserServiceService]
    });
  });

  it('should ...', inject([ElderUserServiceService], (service: ElderUserServiceService) => {
    expect(service).toBeTruthy();
  }));
});
