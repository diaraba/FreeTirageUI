import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTirageComponent } from './detail-tirage.component';

describe('DetailTirageComponent', () => {
  let component: DetailTirageComponent;
  let fixture: ComponentFixture<DetailTirageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTirageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTirageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
