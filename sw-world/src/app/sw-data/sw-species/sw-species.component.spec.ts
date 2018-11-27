import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSpeciesComponent } from './sw-species.component';

describe('SwSpeciesComponent', () => {
  let component: SwSpeciesComponent;
  let fixture: ComponentFixture<SwSpeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwSpeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwSpeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
