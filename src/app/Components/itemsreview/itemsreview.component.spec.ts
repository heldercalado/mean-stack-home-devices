import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsreviewComponent } from './itemsreview.component';

describe('ItemsreviewComponent', () => {
  let component: ItemsreviewComponent;
  let fixture: ComponentFixture<ItemsreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
