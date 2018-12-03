import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwFilmsDetailComponent } from './sw-films-detail.component';

describe('SwFilmsDetailComponent', () => {
  let component: SwFilmsDetailComponent;
  let fixture: ComponentFixture<SwFilmsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwFilmsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwFilmsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
