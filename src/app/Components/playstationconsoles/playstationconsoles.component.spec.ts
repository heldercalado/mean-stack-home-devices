import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystationconsolesComponent } from './playstationconsoles.component';

describe('PlaystationconsolesComponent', () => {
  let component: PlaystationconsolesComponent;
  let fixture: ComponentFixture<PlaystationconsolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaystationconsolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystationconsolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
