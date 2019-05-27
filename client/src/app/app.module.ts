// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+

//Brief Description: Modules used in the app

// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";

// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./partials/header/header.component";
import { FooterComponent } from "./partials/footer/footer.component";
import { BasePageComponent } from "./partials/base-page/base-page.component";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ServicesComponent } from "./pages/services/services.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { ContactListComponent } from "./contacts/contact-list/contact-list.component";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";
import { ContactDetailsComponent } from "./contacts/contact-details/contact-details.component";
import { ContactDeleteComponent } from "./contacts/contact-delete/contact-delete.component";

// Services
import {
  FlashMessagesModule,
  FlashMessagesService
} from "angular2-flash-messages";
import { AuthService } from "./services/auth.service";
import {
  JwtModule,
  JwtHelperService,
  JwtInterceptor
} from "@auth0/angular-jwt";

// Route Guards
import { AuthGuard } from "./guards/auth.guard";
import { SurveyDetailsComponent } from "./survey/survey-details/survey-details.component";
import { MaterialModule } from "./material.module";
import { SurveyListComponent } from "./survey/survey-list/survey-list.component";
import { SurveyQuestionsComponent } from "./survey/survey-questions/survey-questions.component";
import { SurveyDeleteComponent } from "./survey/survey-delete/survey-delete.component";
import { SurveyResultComponent } from "./survey/survey-result/survey-result.component";
import { TimeQComponent } from './survey/time-q/time-q.component';
import { KeyCountComponent } from './survey/key-count/key-count.component';
import { SurveyQComponent } from './survey/survey-q/survey-q.component';
import { SurveyQ1Component } from './survey/survey-q1/survey-q1.component';
import { SurveySubmitComponent } from './survey/survey-submit/survey-submit.component';
import { SurveyR1Component } from './survey/survey-r1/survey-r1.component';
import { LinkEncryptComponent } from './pages/link-encrypt/link-encrypt.component';
import { NoLayoutComponent } from './no-layout/no-layout.component';

export function jwtTokenGetter() {
  return localStorage.getItem("id_token");
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ServicesComponent,
    ContactComponent,
    PageNotFoundComponent,
    ContactListComponent,
    RegisterComponent,
    LoginComponent,
    ContactDetailsComponent,
    ContactDeleteComponent,
    SurveyDetailsComponent,
    SurveyListComponent,
    SurveyQuestionsComponent,
    SurveyDeleteComponent,
    SurveyResultComponent,
    TimeQComponent,
    KeyCountComponent,
    SurveyQComponent,
    SurveyQ1Component,
    SurveySubmitComponent,
    SurveyR1Component,
    LinkEncryptComponent,
    NoLayoutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule, ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
