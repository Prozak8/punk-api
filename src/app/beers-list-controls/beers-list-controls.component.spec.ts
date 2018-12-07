import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersListControlsComponent } from './beers-list-controls.component';

describe('BeersListControlsComponent', () => {
  let component: BeersListControlsComponent;
  let fixture: ComponentFixture<BeersListControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersListControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersListControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
