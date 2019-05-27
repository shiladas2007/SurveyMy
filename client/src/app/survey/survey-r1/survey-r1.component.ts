import { Component, OnInit } from '@angular/core';
import { Ans1 } from "./../../models/ans1";
import { Ans1c } from "./../../models/ans1c";
import { saveAs } from "../../../../node_modules/file-saver";
import { ActivatedRoute, Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { SurveyService } from "src/app/services/survey.service";
import { AuthService } from "src/app/services/auth.service";
import { User } from "src/app/models/user";

@Component({
  selector: 'app-survey-r1',
  templateUrl: './survey-r1.component.html',
  styleUrls: ['./survey-r1.component.css']
})
export class SurveyR1Component implements OnInit {
  ans1s: Ans1[];
  ans1cs: Ans1c[];
  output: string;
  jobType: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ans1s = new Array<Ans1>();
    this.ans1cs = new Array<Ans1c>();
    this.output = 'Results:\r\n';
    this.surveyService.getAnsList().subscribe( data => {
        if (data.success) {
            this.ans1s = data.contactList;
            // prepare result
            let i = 1;
            this.ans1s.forEach(item => {

  if (item.isWork === 'Yes') {
    const c: Ans1c = new Ans1c();
    c.Name = item.Name;
    c.Email = item.Email;
    c.MemoryScore = 0;
    c.MotivationScore = 0;
    c.IqScore = 0;
    if (item.n1 == '128') {
      c.IqScore += 2;
    }
    if (item.n2 == '21') {
      c.IqScore += 2;
    }
    if (item.n3 == '125') {
      c.IqScore += 2;
    }
    if (item.midDot == 'red') {
      c.MotivationScore += 1;
    }
    if (item.redDot == '5') {
      c.MemoryScore += 1;
    }
    if (item.blueDot == '13') {
      c.MemoryScore += 3;
    }
    if (item.blueDot == '11') {
      c.MemoryScore += 1;
    }
    if ((item.blueDot == '14') || (item.blueDot == '12') ) {
      c.MemoryScore += 2;
    }
    var str1 = new String(item.nums);

    if (str1.indexOf('62') != -1) {
      c.MemoryScore += 1;
    }
    if (str1.indexOf('15') != -1) {
      c.MemoryScore += 1;
    }
    if (str1.indexOf('74') != -1) {
      c.MemoryScore += 1;
    }
    if (str1.indexOf('43') != -1) {
      c.MemoryScore += 1;
    }
    if (str1.indexOf('80') != -1) {
      c.MemoryScore += 1;
    }
var str2 = new String(item.num1Shown);
var str3 = new String(item.num1Typed);
var ns = str2.split(' ');
for(let n in ns) {
  if (str3.indexOf(n)!=-1){
    c.MemoryScore += 1;
  }
}

    const sp: number = +item.keySp;
    if ( sp > 21) {
      c.MotivationScore += 2;
    } else if ( sp > 51) {
      c.MotivationScore += 4;
    } else if ( sp > 81) {
      c.MotivationScore += 6;
    }
    if (
      (item.Work4.startsWith('Cleaning')) &&
      (item.Work2.endsWith('indoors')) &&
     // (item.Work6.endsWith('company')) &&
      (item.Work3.endsWith('numbers')) &&
      (item.Work5.startsWith('Office')) &&
      sp > 21)  {
        this.output += i + '. Name:' + item.Name + ',' + item.Email + ', Administrative jobs;\r\n';
        this.jobType = 'Administrative jobs';
    console.log(item.isWork + i++);
  } else if (
    (item.Work4.startsWith('Cleaning')) &&
   // (item.Work6.endsWith('company')) &&
    (item.Work3.endsWith('ideas')) &&
    (item.Work1.endsWith('people')) &&
    sp > 51) { this.output += i + '. Name:' + item.Name + ',' + item.Email + ', Digital Marketing;\r\n';
    this.jobType = 'Digital Marketing';
  console.log(item.isWork + i++);
}
c.JobType=this.jobType;
if (c.IqScore>=5) {
  c.IqLevel='High';
} else if(c.IqScore<=2){
  c.IqLevel='Low';
} else {
  c.IqLevel='Mid';
}
if (c.MemoryScore>=9) {
  c.MemoryLevel='Sharp';
} else if(c.MemoryScore<=4){
  c.MemoryLevel='Clever';
} else {
  c.MemoryLevel='Smart';
}
if (c.MotivationScore>=6) {
  c.MotivationLevel='High Motivated';
} else if(c.MotivationScore<=2){
  c.MotivationLevel='Less Motivated';
} else {
  c.MotivationLevel='Motivated';
}

this.ans1cs.push(c);
  }
});


        } else {
          this.flashMessage.show('some error', {cssClass: 'alert-danger', timeOut: 3000});
        }

      });
      console.log(this.output);
  }
  download() {
    this.downloadFile(this.ans1s);
  }
  downloadC() {
    this.downloadFileC(this.ans1cs);
  }
  downloadFileC(data: any) {

    const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);

    console.log(header);
    let csv = data.map(row =>
      header
        .map(fieldName => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    console.log('csv');
    console.log(csv);
    csv.unshift(header.join(","));
    console.log('un');
    console.log(csv);
    let csvArray = csv.join("\r\n");
    console.log('ar');
    console.log(csvArray);

    var blob = new Blob([csvArray], { type: "text/csv" });
    saveAs(blob, "CustomizedResult.csv");
  }
  downloadFile(data: any) {
    const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map(row =>
      header
        .map(fieldName => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    let r1 = 'Motivation Score (0-7): less(0-2) normal(3-5) high(6-7)';
    let r2 = 'Memory Sore (0-13):  clever(0-4) smart(5-8) sharp(9-13)';
    let r3 = 'Aptitude Score (0-6): low(0-2) mid(3-4) high(5-6)';
    csv.unshift(header.join(","));

    let csvArray = csv.join("\r\n");

    console.log(csvArray);

    var blob = new Blob([csvArray], { type: "text/csv" });
    saveAs(blob, "Result.csv");
  }

}
