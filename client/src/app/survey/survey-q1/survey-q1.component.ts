import { Component, OnInit } from '@angular/core';
import { Ans1 } from 'src/app/models/ans1';
import { TimeQComponent } from '../time-q/time-q.component';
import { Input, ViewChild } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-survey-q1',
  templateUrl: './survey-q1.component.html',
  styleUrls: ['./survey-q1.component.css']
})
export class SurveyQ1Component implements OnInit {
  ans1: Ans1;
  clicked1 = false;
clicked2 = false;
img1 = true;
img2 = true;
span1 = false;
span2 = false;
selKey = false;
startExam = false;
  favoriteTF: string;
  TFs: string[] = ['Yes', 'No'];
  Yrs: string[] = ['less than 1 years', '1-3 years', '3-5 years', 'more than 5 years'];
  Res: string[] = ['PR', 'Citizen', 'Student', 'Work Permit'];
  Kc: string[] = ['30', '40', '50', 'More than 80'];
  lst: string[] = ['A people’s person', 'A number cruncher', 'Self motivated'
  , 'An effective communicator', 'Analytical', 'Negotiator', 'Organized and following procedures'];

  @ViewChild('counter', {read: TimeQComponent})
  private counter: TimeQComponent;
  @ViewChild('counter1', {read: TimeQComponent})
  private counter1: TimeQComponent;
  @ViewChild('counter2', {read: TimeQComponent})
  private counter2: TimeQComponent;
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
    private router: Router) { }

  ngOnInit() {
    this.ans1 = new Ans1();
    this.counter1.startAt = 7;
    this.counter1.counterState.subscribe((msg) => {
      if (msg === 'COMPLETE') {
        this.img1 = true;
        this.span1 = true;
      }
    });
    this.counter2.startAt = 7;
    this.counter2.counterState.subscribe((msg) => {
      if (msg === 'COMPLETE') {
        this.img2 = true;
        this.span2 = true;
      }
    });
    this.counter.startAt = 180;
    this.counter.counterState.subscribe((msg) => {
      if (msg === 'COMPLETE') {
        this.counterState = 'counter has stopped';
        console.log('calling submit');
        // submit here
        this.submit();
      }
    });

  }
  start(): void {
    this.counter.start();
    this.startExam = true;
  }
  submit(): void {
    console.log('read all data');
    console.log(this.ans1);
    this.ans1.keySp = this.count.toString();
    this.surveyService.addAns1(this.ans1).subscribe(data => {
      if (data.success) {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-success',
          timeOut: 3000
        });
        this.router.navigate(['/survey/submit']);
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
