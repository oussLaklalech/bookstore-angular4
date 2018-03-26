import { TestBed, inject } from '@angular/core/testing';

import { ManageAlertService } from './manage-alert.service';

describe('ManageAlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageAlertService]
    });
  });

  it('should be created', inject([ManageAlertService], (service: ManageAlertService) => {
    expect(service).toBeTruthy();
  }));
});
