import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwPeopleDetailComponent } from './sw-people-detail.component';

describe('SwPeopleDetailComponent', () => {
  let component: SwPeopleDetailComponent;
  let fixture: ComponentFixture<SwPeopleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwPeopleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwPeopleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
