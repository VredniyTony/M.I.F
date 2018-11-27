import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwFilmsComponent } from './sw-films.component';

describe('SwFilmsComponent', () => {
  let component: SwFilmsComponent;
  let fixture: ComponentFixture<SwFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
