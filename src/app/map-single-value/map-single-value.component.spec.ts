import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSingleValueComponent } from './map-single-value.component';

describe('MapSingleValueComponent', () => {
  let component: MapSingleValueComponent;
  let fixture: ComponentFixture<MapSingleValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSingleValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapSingleValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
