import { Component, OnInit } from '@angular/core';
import { Ans1 } from 'src/app/models/ans1';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
clicked3 = false;
img1 = true;
img2 = true;
img3 = true;
span1 = false;
span2 = false;
span3 = false;
random1: number;
random2: number;
random3: number;
random4: number;
selKey = false;
startExam = false;
formGroup: FormGroup;
/** Returns a FormArray with the name 'formArray'. */
get formArray(): AbstractControl | null { return this.formGroup.get('formArray'); }
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
  @ViewChild('counter3', {read: TimeQComponent})
  private counter3: TimeQComponent;
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
    this.counter3.startAt = 7;
    this.counter3.counterState.subscribe((msg) => {
      if (msg === 'COMPLETE') {
        this.img3 = true;
        this.span3 = true;
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
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          NameCtrl: ['', Validators.required],
          EmailCtrl: [''],
          AgeCtrl: ['']
        }),
        this._formBuilder.group({
          isImiCtrl: ['',Validators.required],
          isImiYrCtrl: ['',Validators.required],
          isWorkCtrl: ['',Validators.required],
          ResCtrl: ['',Validators.required]
        }),
        this._formBuilder.group({
          isWorkedCtrl: ['',Validators.required],
          NoJobsCtrl: ['',Validators.required],
          WorkPerCtrl: ['',Validators.required],
          jobLCtrl: [''],
          isVolCtrl: ['',Validators.required],
          VolCtrl: ['',Validators.required]
        }),
        this._formBuilder.group({
          Work1Ctrl: ['',Validators.required],
      Work2Ctrl: ['',Validators.required],
      Work3Ctrl: ['',Validators.required],
      Work4Ctrl: ['',Validators.required],
      Work5Ctrl: ['',Validators.required],
      Work6Ctrl: ['',Validators.required],
      IntCtrl: ['']
        }),
        this._formBuilder.group({
          isExpJob: ['',Validators.required],
      isExpOrg: ['',Validators.required],
      isExpInt: ['',Validators.required],
      isExpRes: ['',Validators.required],
      isExpPre: ['',Validators.required],
      isExpTar: ['',Validators.required]
        }),
        this._formBuilder.group({
          ExpCount: [''],
          keySp: ['']
        }),
        this._formBuilder.group({
          redDot: [''],
          nums: [''],
          num1Typed: ['']
        }),
        this._formBuilder.group({
          desc: ['',Validators.required]
        }),
      ])
    });
  }
  start(): void {
    this.counter.start();
    this.startExam = true;
  }
  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
  genN(): void {
    this.random1 = this.randomInt(1, 20);
    this.random2 = this.randomInt(20, 40);
    this.random3 = this.randomInt(40, 60);
    this.random4 = this.randomInt(60, 80);
    //console.log( this.random1 +' '+ this.random2+ ' '+this.random3+ ' '+this.random4);
  }
  submit(): void {
    console.log('read all data');
    console.log(this.ans1);
    this.ans1.keySp = this.count.toString();
    this.ans1.num1Shown = this.random1 + ' ' + this.random2 + ' ' + this.random3 + ' ' + this.random4;
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
