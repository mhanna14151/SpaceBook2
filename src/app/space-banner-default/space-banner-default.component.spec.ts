import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceBannerDefaultComponent } from './space-banner-default.component';

describe('SpaceBannerDefaultComponent', () => {
  let component: SpaceBannerDefaultComponent;
  let fixture: ComponentFixture<SpaceBannerDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceBannerDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceBannerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
