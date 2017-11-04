import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodarchiveComponent } from './apodarchive.component';

describe('ApodarchiveComponent', () => {
  let component: ApodarchiveComponent;
  let fixture: ComponentFixture<ApodarchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApodarchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApodarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
