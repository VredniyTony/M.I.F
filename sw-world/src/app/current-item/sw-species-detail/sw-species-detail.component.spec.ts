import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSpeciesDetailComponent } from './sw-species-detail.component';

describe('SwSpeciesDetailComponent', () => {
  let component: SwSpeciesDetailComponent;
  let fixture: ComponentFixture<SwSpeciesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwSpeciesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwSpeciesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
