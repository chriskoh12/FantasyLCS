import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CurrentWeekComponent } from './current-week.component';

describe('CurrentWeekComponent', () => {
  let component: CurrentWeekComponent;
  let fixture: ComponentFixture<CurrentWeekComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
