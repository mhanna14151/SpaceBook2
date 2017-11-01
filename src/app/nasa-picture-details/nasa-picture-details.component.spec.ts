import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaPictureDetailsComponent } from './nasa-picture-details.component';

describe('NasaPictureDetailsComponent', () => {
  let component: NasaPictureDetailsComponent;
  let fixture: ComponentFixture<NasaPictureDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NasaPictureDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaPictureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
