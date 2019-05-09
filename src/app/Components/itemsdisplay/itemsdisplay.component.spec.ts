import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsdisplayComponent } from './itemsdisplay.component';

describe('ItemsdisplayComponent', () => {
  let component: ItemsdisplayComponent;
  let fixture: ComponentFixture<ItemsdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
