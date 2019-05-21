// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: Functionality for displaying surveys

import { FilledSurvey } from "./../models/filled-survey";

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Survey } from "../models/survey";
import { User } from "../models/user";
import { Ans1 } from "../models/ans1";

@Injectable({
  providedIn: "root"
})
export class SurveyService {
  private user: User;
  private authToken: any = null;

  //private endpoint = 'https://shilasurvey.herokuapp.com/api/survey/';

  private endpoint = "http://localhost:3000/api/survey/";
  private endpoint1 = "http://localhost:3000/api/ans1/";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };

  constructor(private http: HttpClient) {
    this.user = new User();
  }

  public getList(): Observable<any> {
    // this.loadToken();
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }
  public getAnsList(): Observable<any> {
    // this.loadToken();
    return this.http.get<any>(this.endpoint1, this.httpOptions);
  }

  public getSurvey(survey: Survey): Observable<any> {
  //  this.loadToken();
    return this.http.get<any>(
      this.endpoint + "" + survey._id,
      this.httpOptions
    );
  }

  public getSurveyAnswers(survey: Survey): Observable<any> {
    this.loadToken();
    return this.http.get<any>(
      this.endpoint + "answer/" + survey._id,
      this.httpOptions
    );
  }

  public getMySurvey(username: string): Observable<any> {
    //this.loadToken();
    return this.http.get<any>(
      this.endpoint + "list/" + username,
      this.httpOptions
    );
  }

  public addSurvey(survey: Survey): Observable<any> {
    //this.loadToken();
    return this.http.post<any>(this.endpoint + "add", survey, this.httpOptions);
  }
  public addAns1(ans1: Ans1): Observable<any> {
    //this.loadToken();
    console.log(ans1);
    return this.http.post<any>(this.endpoint1 + "Add", ans1, this.httpOptions);
  }

  public addFilledSurvey(filledSurvey: FilledSurvey): Observable<any> {
    this.loadToken();
    return this.http.post<any>(
      this.endpoint + "filledSurvey/add",
      filledSurvey,
      this.httpOptions
    );
  }

  public editSurvey(survey: Survey): Observable<any> {
    this.loadToken();
    return this.http.post<any>(
      this.endpoint + "edit/" + survey._id,
      survey,
      this.httpOptions
    );
  }

  public deleteSurvey(survey: Survey): Observable<any> {
    this.loadToken();
    return this.http.get<any>(
      this.endpoint + "delete/" + survey._id,
      this.httpOptions
    );
  }

  private loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set(
      "Authorization",
      this.authToken
    );
  }
}
