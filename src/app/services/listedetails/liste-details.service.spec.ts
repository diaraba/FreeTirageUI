import { TestBed } from '@angular/core/testing';

import { ListeDetailsService } from './liste-details.service';

describe('ListeDetailsService', () => {
  let service: ListeDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
