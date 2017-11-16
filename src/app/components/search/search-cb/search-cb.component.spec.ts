import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCbComponent } from './search-cb.component';

describe('SearchCbComponent', () => {
  let component: SearchCbComponent;
  let fixture: ComponentFixture<SearchCbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
