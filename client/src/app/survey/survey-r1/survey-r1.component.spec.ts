import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyR1Component } from './survey-r1.component';

describe('SurveyR1Component', () => {
  let component: SurveyR1Component;
  let fixture: ComponentFixture<SurveyR1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyR1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyR1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
