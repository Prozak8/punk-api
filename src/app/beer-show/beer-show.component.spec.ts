import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerShowComponent } from './beer-show.component';

describe('BeerShowComponent', () => {
  let component: BeerShowComponent;
  let fixture: ComponentFixture<BeerShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
