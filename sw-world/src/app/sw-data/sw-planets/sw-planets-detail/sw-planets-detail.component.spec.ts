import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwPlanetsDetailComponent } from './sw-planets-detail.component';

describe('SwPlanetsDetailComponent', () => {
  let component: SwPlanetsDetailComponent;
  let fixture: ComponentFixture<SwPlanetsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwPlanetsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwPlanetsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
