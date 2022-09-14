import { TestBed } from '@angular/core/testing';

import { ImportFichierService } from './import-fichier.service';

describe('PostulantService', () => {
  let service: ImportFichierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportFichierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
