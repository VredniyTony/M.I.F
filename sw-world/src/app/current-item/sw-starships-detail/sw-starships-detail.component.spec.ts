import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwStarshipsDetailComponent } from './sw-starships-detail.component';

describe('SwStarshipsDetailComponent', () => {
  let component: SwStarshipsDetailComponent;
  let fixture: ComponentFixture<SwStarshipsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwStarshipsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwStarshipsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
