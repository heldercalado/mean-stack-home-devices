import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputergamesComponent } from './computergames.component';

describe('ComputergamesComponent', () => {
  let component: ComputergamesComponent;
  let fixture: ComponentFixture<ComputergamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputergamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputergamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
