import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Input, ViewChild } from '@angular/core';
import { TimeQComponent } from '../time-q/time-q.component';
import { HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyService } from 'src/app/services/survey.service';
import { AuthService } from 'src/app/services/auth.service';
import { Ans1 } from 'src/app/models/ans1';


@Component({
  selector: 'app-survey-q',
  templateUrl: './survey-q.component.html',
  styleUrls: ['./survey-q.component.css']
})
export class SurveyQComponent implements OnInit {
  isLinear = false;
  ans1: Ans1;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  clicked1 = false;
clicked2 = false;
img1 = true;
img2 = true;
span1 = false;
span2 = false;
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
    private _formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private authService: AuthService,
    private router: Router) {}

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

    this.firstFormGroup = this._formBuilder.group({
      NameCtrl: ['', Validators.required],
      EmailCtrl: [''],
      AgeCtrl: ['']
    });

    this.secondFormGroup = this._formBuilder.group({
      isImiCtrl: [''],
      isImiYrCtrl: [''],
      isWorkCtrl: [''],
      ResCtrl: ['']
    });

    this.thirdFormGroup = this._formBuilder.group({
      isWorkedCtrl: [''],
      NoJobsCtrl: [''],
      WorkPerCtrl: [''],
      jobLCtrl: [''],
      isVolCtrl: [''],
      VolCtrl: ['']
    });
    this.fourthFormGroup = this._formBuilder.group({
      Work1Ctrl: [''],
      Work2Ctrl: [''],
      Work3Ctrl: [''],
      Work4Ctrl: [''],
      Work5Ctrl: [''],
      Work6Ctrl: [''],
      IntCtrl: ['']
    });
    this.fifthFormGroup = this._formBuilder.group({

      isExpJob: [''],
      isExpOrg: [''],
      isExpInt: [''],
      isExpRes: [''],
      isExpPre: [''],
      isExpTar: ['']
    });
    this.sixthFormGroup = this._formBuilder.group({

      ExpCount: [''],

      keySp: ['']
    });
    this.seventhFormGroup = this._formBuilder.group({

      redDot: [''],

      nums: ['']
    });
    this.eighthFormGroup = this._formBuilder.group({

      desc: ['']
    });
  }
  start(): void {
    this.counter.start();
  }
  submit(): void {
    console.log('read all data');
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);
    console.log(this.fourthFormGroup.value);
    console.log(this.fifthFormGroup.value);
   // this.sixthFormGroup.setValue({keySp: this.count, E});
    console.log(this.sixthFormGroup.value);
    console.log(this.count);
    console.log(this.seventhFormGroup.value);
    this.firstFormGroup.getRawValue();
  }
}
