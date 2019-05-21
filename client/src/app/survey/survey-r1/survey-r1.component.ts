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
  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.ans1s = new Array<Ans1>();
    this.surveyService.getAnsList().subscribe( data => {
        if (data.success) {
            this.ans1s = data.contactList;
        } else {
          this.flashMessage.show('some error', {cssClass: 'alert-danger', timeOut: 3000});
        }

      });
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
