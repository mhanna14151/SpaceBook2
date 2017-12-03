import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureNewComponent } from './picture-new.component';

describe('PictureNewComponent', () => {
  let component: PictureNewComponent;
  let fixture: ComponentFixture<PictureNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
