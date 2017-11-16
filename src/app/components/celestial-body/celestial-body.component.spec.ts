import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CelestialBodyComponent } from './celestial-body.component';

describe('CelestialBodyComponent', () => {
  let component: CelestialBodyComponent;
  let fixture: ComponentFixture<CelestialBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CelestialBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CelestialBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
