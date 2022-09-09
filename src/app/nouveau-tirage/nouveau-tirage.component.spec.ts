import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauTirageComponent } from './nouveau-tirage.component';

describe('NouveauTirageComponent', () => {
  let component: NouveauTirageComponent;
  let fixture: ComponentFixture<NouveauTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
