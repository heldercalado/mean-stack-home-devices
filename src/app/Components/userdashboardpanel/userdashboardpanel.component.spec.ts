import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdashboardpanelComponent } from './userdashboardpanel.component';

describe('UserdashboardpanelComponent', () => {
  let component: UserdashboardpanelComponent;
  let fixture: ComponentFixture<UserdashboardpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdashboardpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdashboardpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
