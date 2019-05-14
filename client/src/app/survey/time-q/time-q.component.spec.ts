import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeQComponent } from './time-q.component';

describe('TimeQComponent', () => {
  let component: TimeQComponent;
  let fixture: ComponentFixture<TimeQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
