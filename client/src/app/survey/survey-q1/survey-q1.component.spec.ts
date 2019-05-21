import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyQ1Component } from './survey-q1.component';

describe('SurveyQ1Component', () => {
  let component: SurveyQ1Component;
  let fixture: ComponentFixture<SurveyQ1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyQ1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyQ1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
