import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyQComponent } from './survey-q.component';

describe('SurveyQComponent', () => {
  let component: SurveyQComponent;
  let fixture: ComponentFixture<SurveyQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
