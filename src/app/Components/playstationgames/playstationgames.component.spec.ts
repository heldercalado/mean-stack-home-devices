import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationgamesComponent } from './playstationgames.component';

describe('PlaystationgamesComponent', () => {
  let component: PlaystationgamesComponent;
  let fixture: ComponentFixture<PlaystationgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaystationgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystationgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
