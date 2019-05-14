// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

// Brief Description: Functionality for storing questions filled by the user for new surveys.

import { Answer } from './../../models/answer';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyService } from 'src/app/services/survey.service';
import { AuthService } from 'src/app/services/auth.service';
import { Survey } from 'src/app/models/survey';
import { Question } from 'src/app/models/question';
import { User } from 'src/app/models/user';
import { FilledSurvey } from 'src/app/models/filled-survey';

import { Input, ViewChild } from '@angular/core';
import { TimeQComponent } from '../time-q/time-q.component';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-survey-questions',
  templateUrl: './survey-questions.component.html',
  styleUrls: ['./survey-questions.component.css']
})
export class SurveyQuestionsComponent implements OnInit {

/* @HostListener('window:keydown', ['$event']).spaceEvent(event) {
  if (event.keyCode == 38) {
    this.count++;
  } else if (event.keyCode == 49) {
     this.count--;
  }
} */
title: string;
survey: Survey;
questions: Question[];
user: User;

filledSurvey: FilledSurvey;
answers: Answer[];
@ViewChild('counter', {read: TimeQComponent})
  private counter: TimeQComponent;

counterState = 'counter is ticking';
count = 0;
receiveMessage($event) {
  this.count = $event;
}

constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private authService: AuthService,
    private router: Router
  ) {}

ngOnInit() {
    this.filledSurvey = new FilledSurvey();
    this.user = new User();
    this.questions = new Array<Question>();
    this.answers = new Array<Answer>();
    this.title = this.activatedRoute.snapshot.data.title;
    this.survey = new Survey();

    this.activatedRoute.params.subscribe(params => {
      this.survey._id = params.id;
    });

    this.getSurvey(this.survey);
    this.counter.startAt = 360;
    this.counter.counterState.subscribe((msg) => {
      if (msg === 'COMPLETE') {
        this.counterState = 'counter has stopped';
        console.log('calling submit');
        // submit here
        this.onSurveySubmit();
      }
    });
    this.counter.start();

  }
/* onKeyPress(event: any); {
    console.log(event);
  } */
  private getSurvey(survey: Survey): void {
    this.surveyService.getSurvey(survey).subscribe(data => {
      this.survey = data.survey;
      this.questions = this.survey.questions;

      console.log(this.survey);

      for (let index = 0; index < this.questions.length; index++) {
        const answer = new Answer();

        answer.question = this.questions[index].question;

        this.answers[index] = answer;
      }
    });
  };

onSurveySubmit(): void {
    console.log('inside submit');
    this.filledSurvey.userName = this.user.username;
    this.filledSurvey.answers = this.answers;
    this.filledSurvey.surveyId = this.survey._id;
    this.filledSurvey.surveyCompletionDate = new Date();

    this.surveyService.addFilledSurvey(this.filledSurvey).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-success',
          timeOut: 3000
        });
        this.router.navigate(['/survey/list']);
      } else {
        this.flashMessage.show('Add Contact Failed', {
          cssClass: 'alert-danger',
          timeOut: 3000
        });
        this.router.navigate(['/survey/list']);
      }
    });
  }
}
