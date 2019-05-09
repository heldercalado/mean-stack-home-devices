import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxconsolesComponent } from './xboxconsoles.component';

describe('XboxconsolesComponent', () => {
  let component: XboxconsolesComponent;
  let fixture: ComponentFixture<XboxconsolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XboxconsolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxconsolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
