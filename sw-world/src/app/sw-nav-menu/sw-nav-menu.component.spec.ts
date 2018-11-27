import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwNavMenuComponent } from './sw-nav-menu.component';

describe('SwNavMenuComponent', () => {
  let component: SwNavMenuComponent;
  let fixture: ComponentFixture<SwNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
