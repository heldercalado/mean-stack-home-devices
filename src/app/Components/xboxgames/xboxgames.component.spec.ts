import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XboxgamesComponent } from './xboxgames.component';

describe('XboxgamesComponent', () => {
  let component: XboxgamesComponent;
  let fixture: ComponentFixture<XboxgamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XboxgamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
