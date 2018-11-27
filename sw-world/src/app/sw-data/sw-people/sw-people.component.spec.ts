import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwPeopleComponent } from './sw-people.component';

describe('SwPeopleComponent', () => {
  let component: SwPeopleComponent;
  let fixture: ComponentFixture<SwPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
