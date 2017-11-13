import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaTestComponent } from './nasa-test.component';

describe('NasaTestComponent', () => {
  let component: NasaTestComponent;
  let fixture: ComponentFixture<NasaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
