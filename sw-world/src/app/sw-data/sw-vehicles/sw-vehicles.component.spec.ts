import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwVehiclesComponent } from './sw-vehicles.component';

describe('SwVehiclesComponent', () => {
  let component: SwVehiclesComponent;
  let fixture: ComponentFixture<SwVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
