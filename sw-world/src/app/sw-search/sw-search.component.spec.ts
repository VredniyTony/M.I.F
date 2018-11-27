import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwSearchComponent } from './sw-search.component';

describe('SwSearchComponent', () => {
  let component: SwSearchComponent;
  let fixture: ComponentFixture<SwSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
