import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwMainPageComponent } from './sw-main-page.component';

describe('SwMainPageComponent', () => {
  let component: SwMainPageComponent;
  let fixture: ComponentFixture<SwMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
