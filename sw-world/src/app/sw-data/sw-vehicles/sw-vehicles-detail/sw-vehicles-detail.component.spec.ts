import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwVehiclesDetailComponent } from './sw-vehicles-detail.component';

describe('SwVehiclesDetailComponent', () => {
  let component: SwVehiclesDetailComponent;
  let fixture: ComponentFixture<SwVehiclesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwVehiclesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwVehiclesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
