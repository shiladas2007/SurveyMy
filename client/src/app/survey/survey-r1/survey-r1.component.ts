import { Component, OnInit } from '@angular/core';
import { Ans1 } from "./../../models/ans1";
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
  output: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ans1s = new Array<Ans1>();
    this.output = 'Results:\r\n';
    this.surveyService.getAnsList().subscribe( data => {
        if (data.success) {
            this.ans1s = data.contactList;
//prepare result
let i=1;
            this.ans1s.forEach(item => {

  if (item.isWork === 'Yes') {

    const sp: number = +item.keySp;
    if (
      (item.Work4.startsWith('Cleaning')) &&
      (item.Work2.endsWith('indoors')) &&
      (item.Work6.endsWith('company')) &&
      (item.Work3.endsWith('numbers')) &&
      (item.Work5.startsWith('Office')) &&
      sp > 21)  {
        this.output += i +'. Name:' + item.Name + ',' + item.Email + ', Administrative jobs;\r\n';
    console.log(item.isWork + i++);
  } else if (
    (item.Work4.startsWith('Cleaning')) &&
    (item.Work6.endsWith('company')) &&
    (item.Work3.endsWith('ideas')) &&
    (item.Work1.endsWith('people')) &&
    sp > 51) { this.output += i + '. Name:' + item.Name + ',' + item.Email + ', Digital Marketing;\r\n';
  console.log(item.isWork + i++);
}
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

  downloadFile(data: any) {
    const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map(row =>
      header
        .map(fieldName => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    let csvArray = csv.join("\r\n");

    console.log(csvArray);

    var blob = new Blob([csvArray], { type: "text/csv" });
    saveAs(blob, "myFile.csv");
  }

}
