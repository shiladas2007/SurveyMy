(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _survey_survey_questions_survey_questions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./survey/survey-questions/survey-questions.component */ "./src/app/survey/survey-questions/survey-questions.component.ts");
/* harmony import */ var _survey_survey_q_survey_q_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./survey/survey-q/survey-q.component */ "./src/app/survey/survey-q/survey-q.component.ts");
/* harmony import */ var _survey_survey_q1_survey_q1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./survey/survey-q1/survey-q1.component */ "./src/app/survey/survey-q1/survey-q1.component.ts");
/* harmony import */ var _survey_survey_r1_survey_r1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./survey/survey-r1/survey-r1.component */ "./src/app/survey/survey-r1/survey-r1.component.ts");
/* harmony import */ var _survey_survey_submit_survey_submit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./survey/survey-submit/survey-submit.component */ "./src/app/survey/survey-submit/survey-submit.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contacts/contact-details/contact-details.component */ "./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contacts/contact-delete/contact-delete.component */ "./src/app/contacts/contact-delete/contact-delete.component.ts");
/* harmony import */ var _survey_survey_details_survey_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./survey/survey-details/survey-details.component */ "./src/app/survey/survey-details/survey-details.component.ts");
/* harmony import */ var _survey_survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./survey/survey-list/survey-list.component */ "./src/app/survey/survey-list/survey-list.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _survey_survey_delete_survey_delete_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./survey/survey-delete/survey-delete.component */ "./src/app/survey/survey-delete/survey-delete.component.ts");
/* harmony import */ var _survey_survey_result_survey_result_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./survey/survey-result/survey-result.component */ "./src/app/survey/survey-result/survey-result.component.ts");






// Modules


// Components
















var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], data: { title: 'Home' } },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], data: { title: 'About' } },
    { path: 'products', component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], data: { title: 'Products' } },
    { path: 'services', component: _pages_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], data: { title: 'Services' } },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], data: { title: 'Contact' } },
    { path: 'survey/add', component: _survey_survey_details_survey_details_component__WEBPACK_IMPORTED_MODULE_17__["SurveyDetailsComponent"], data: { title: 'Add Survey' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'survey/list', component: _survey_survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_18__["SurveyListComponent"], data: { title: 'Active Survey' } },
    { path: 'survey/list/:username', component: _survey_survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_18__["SurveyListComponent"], data: { title: 'My Survey' } },
    { path: 'survey/edit/:id', component: _survey_survey_details_survey_details_component__WEBPACK_IMPORTED_MODULE_17__["SurveyDetailsComponent"], data: { title: 'Edit Survey' } },
    { path: 'survey/result/:id', component: _survey_survey_result_survey_result_component__WEBPACK_IMPORTED_MODULE_23__["SurveyResultComponent"], data: { title: 'Edit Survey' } },
    { path: 'survey/questions/:id', component: _survey_survey_questions_survey_questions_component__WEBPACK_IMPORTED_MODULE_1__["SurveyQuestionsComponent"], data: { title: 'Survey Questions' } },
    { path: 'survey/questionsS/1', component: _survey_survey_q_survey_q_component__WEBPACK_IMPORTED_MODULE_2__["SurveyQComponent"], data: { title: 'Survey Questions' } },
    { path: 'survey/questionsS/2', component: _survey_survey_q1_survey_q1_component__WEBPACK_IMPORTED_MODULE_3__["SurveyQ1Component"], data: { title: 'Survey Questions' } },
    { path: 'survey/Results/2', component: _survey_survey_r1_survey_r1_component__WEBPACK_IMPORTED_MODULE_4__["SurveyR1Component"], data: { title: 'Survey Questions' } },
    { path: 'survey/submit', component: _survey_survey_submit_survey_submit_component__WEBPACK_IMPORTED_MODULE_5__["SurveySubmitComponent"], data: { title: 'Survey Questions' } },
    { path: 'survey/list/delete/:id', component: _survey_survey_delete_survey_delete_component__WEBPACK_IMPORTED_MODULE_22__["SurveyDeleteComponent"], data: { title: 'Delete Contact' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'contact/contact-list', component: _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_14__["ContactListComponent"], data: { title: 'Contact List' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'contact/contact-list/add', component: _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_15__["ContactDetailsComponent"], data: { title: 'Add Contact' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'contact/contact-list/edit/:id', component: _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_15__["ContactDetailsComponent"], data: { title: 'Edit Contact' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'contact/contact-list/delete/:id', component: _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_16__["ContactDeleteComponent"], data: { title: 'Add Contact' }, canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"], data: { title: 'Register' } },
    { path: 'editprofile', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"], data: { title: 'Edit' } },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"], data: { title: 'Register' } },
    { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7QUFDekMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<flash-messages></flash-messages>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'COMP308-W2019-Lesson8b';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: jwtTokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtTokenGetter", function() { return jwtTokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./partials/footer/footer.component */ "./src/app/partials/footer/footer.component.ts");
/* harmony import */ var _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_services_services_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "./src/app/pages/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contacts/contact-list/contact-list.component */ "./src/app/contacts/contact-list/contact-list.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contacts/contact-details/contact-details.component */ "./src/app/contacts/contact-details/contact-details.component.ts");
/* harmony import */ var _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contacts/contact-delete/contact-delete.component */ "./src/app/contacts/contact-delete/contact-delete.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _survey_survey_details_survey_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./survey/survey-details/survey-details.component */ "./src/app/survey/survey-details/survey-details.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _survey_survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./survey/survey-list/survey-list.component */ "./src/app/survey/survey-list/survey-list.component.ts");
/* harmony import */ var _survey_survey_questions_survey_questions_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./survey/survey-questions/survey-questions.component */ "./src/app/survey/survey-questions/survey-questions.component.ts");
/* harmony import */ var _survey_survey_delete_survey_delete_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./survey/survey-delete/survey-delete.component */ "./src/app/survey/survey-delete/survey-delete.component.ts");
/* harmony import */ var _survey_survey_result_survey_result_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./survey/survey-result/survey-result.component */ "./src/app/survey/survey-result/survey-result.component.ts");
/* harmony import */ var _survey_time_q_time_q_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./survey/time-q/time-q.component */ "./src/app/survey/time-q/time-q.component.ts");
/* harmony import */ var _survey_key_count_key_count_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./survey/key-count/key-count.component */ "./src/app/survey/key-count/key-count.component.ts");
/* harmony import */ var _survey_survey_q_survey_q_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./survey/survey-q/survey-q.component */ "./src/app/survey/survey-q/survey-q.component.ts");
/* harmony import */ var _survey_survey_q1_survey_q1_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./survey/survey-q1/survey-q1.component */ "./src/app/survey/survey-q1/survey-q1.component.ts");
/* harmony import */ var _survey_survey_submit_survey_submit_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./survey/survey-submit/survey-submit.component */ "./src/app/survey/survey-submit/survey-submit.component.ts");
/* harmony import */ var _survey_survey_r1_survey_r1_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./survey/survey-r1/survey-r1.component */ "./src/app/survey/survey-r1/survey-r1.component.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Modules used in the app
// Modules





// Components















// Services


// Route Guards













function jwtTokenGetter() {
    return localStorage.getItem("id_token");
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _partials_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _partials_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_9__["BasePageComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _pages_products_products_component__WEBPACK_IMPORTED_MODULE_12__["ProductsComponent"],
                _pages_services_services_component__WEBPACK_IMPORTED_MODULE_13__["ServicesComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"],
                _contacts_contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_16__["ContactListComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _contacts_contact_details_contact_details_component__WEBPACK_IMPORTED_MODULE_19__["ContactDetailsComponent"],
                _contacts_contact_delete_contact_delete_component__WEBPACK_IMPORTED_MODULE_20__["ContactDeleteComponent"],
                _survey_survey_details_survey_details_component__WEBPACK_IMPORTED_MODULE_24__["SurveyDetailsComponent"],
                _survey_survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_26__["SurveyListComponent"],
                _survey_survey_questions_survey_questions_component__WEBPACK_IMPORTED_MODULE_27__["SurveyQuestionsComponent"],
                _survey_survey_delete_survey_delete_component__WEBPACK_IMPORTED_MODULE_28__["SurveyDeleteComponent"],
                _survey_survey_result_survey_result_component__WEBPACK_IMPORTED_MODULE_29__["SurveyResultComponent"],
                _survey_time_q_time_q_component__WEBPACK_IMPORTED_MODULE_30__["TimeQComponent"],
                _survey_key_count_key_count_component__WEBPACK_IMPORTED_MODULE_31__["KeyCountComponent"],
                _survey_survey_q_survey_q_component__WEBPACK_IMPORTED_MODULE_32__["SurveyQComponent"],
                _survey_survey_q1_survey_q1_component__WEBPACK_IMPORTED_MODULE_33__["SurveyQ1Component"],
                _survey_survey_submit_survey_submit_component__WEBPACK_IMPORTED_MODULE_34__["SurveySubmitComponent"],
                _survey_survey_r1_survey_r1_component__WEBPACK_IMPORTED_MODULE_35__["SurveyR1Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_25__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__["FlashMessagesModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: jwtTokenGetter
                    }
                })
            ],
            providers: [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_21__["FlashMessagesService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtZGVsZXRlL2NvbnRhY3QtZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contacts/contact-delete/contact-delete.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/contacts/contact-delete/contact-delete.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDeleteComponent", function() { return ContactDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/contact */ "./src/app/models/contact.ts");






var ContactDeleteComponent = /** @class */ (function () {
    function ContactDeleteComponent(activatedRoute, flashMessage, contactListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.contactListService = contactListService;
        this.router = router;
    }
    ContactDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.contact = new src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.contact._id = params.id;
        });
        this.deleteContact(this.contact);
    };
    ContactDeleteComponent.prototype.deleteContact = function (contact) {
        var _this = this;
        this.contactListService.deleteContact(contact).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-warning', timeOut: 3000 });
                _this.router.navigate(['/contact/contact-list']);
            }
            else {
                _this.flashMessage.show('Delete Contact Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                _this.router.navigate(['/contact/contact-list']);
            }
        });
    };
    ContactDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-delete',
            template: __webpack_require__(/*! ./contact-delete.component.html */ "./src/app/contacts/contact-delete/contact-delete.component.html"),
            styles: [__webpack_require__(/*! ./contact-delete.component.css */ "./src/app/contacts/contact-delete/contact-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactDeleteComponent);
    return ContactDeleteComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtZGV0YWlscy9jb250YWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Content for the Details Page -->\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-3 col-md-6\">\n          <h1>{{ title }}</h1>\n\n          <form class=\"form\" (submit)=\"onDetailsPageSubmit()\">\n              <div class=\"form-group\">\n                  <label for=\"FirstNameTextField\">First Name</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"FirstNameTextField\"\n                  placeholder=\"Enter First Name\"\n                  name=\"firstName\"\n                  [(ngModel)]=\"contact.firstName\"\n                  value=\"{{ contact.firstName }}\"\n                  required>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"LastNameTextField\">Last Name</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"LastNameTextField\"\n                  placeholder=\"Enter Last Name\"\n                  name=\"lastName\"\n                  [(ngModel)]=\"contact.lastName\"\n                  value=\"{{ contact.lastName }}\"\n                  required>\n              </div>\n\n              <div class=\"form-group\">\n                  <label for=\"AgeTextField\">Age</label>\n                  <input type=\"text\" class=\"form-control\"\n                  id=\"AgeTextField\"\n                  placeholder=\"Enter Age\"\n                  name=\"age\"\n                  [(ngModel)]=\"contact.age\"\n                  value=\"{{ contact.age }}\"\n                  required>\n              </div>\n\n              <button type=\"submit\" class=\"btn btn-primary\">\n              <i class=\"fas fa-edit\"></i> {{ title }}</button>\n              <a routerLink=\"/contact/contact-list\" class=\"btn btn-warning\">\n                  <i class=\"fas fa-undo\"></i> Cancel</a>\n          </form>\n\n\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contact-details/contact-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/contacts/contact-details/contact-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/contact */ "./src/app/models/contact.ts");






var ContactDetailsComponent = /** @class */ (function () {
    function ContactDetailsComponent(activatedRoute, flashMessage, contactListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.contactListService = contactListService;
        this.router = router;
    }
    ContactDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.contact = new src_app_models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.contact._id = params.id;
        });
        if (this.title === 'Edit Contact') {
            this.getContact(this.contact);
        }
    };
    ContactDetailsComponent.prototype.getContact = function (contact) {
        var _this = this;
        this.contactListService.getContact(contact).subscribe(function (data) {
            _this.contact = data.contact;
        });
    };
    ContactDetailsComponent.prototype.onDetailsPageSubmit = function () {
        var _this = this;
        switch (this.title) {
            case 'Add Contact':
                this.contactListService.addContact(this.contact).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
                        _this.router.navigate(['/contact/contact-list']);
                    }
                    else {
                        _this.flashMessage.show('Add Contact Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                        _this.router.navigate(['/contact/contact-list']);
                    }
                });
                break;
            case 'Edit Contact':
                this.contactListService.editContact(this.contact).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeOut: 3000 });
                        _this.router.navigate(['/contact/contact-list']);
                    }
                    else {
                        _this.flashMessage.show('Edit Contact Failed', { cssClass: 'alert-danger', timeOut: 3000 });
                        _this.router.navigate(['/contact/contact-list']);
                    }
                });
                break;
        }
    };
    ContactDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-details',
            template: __webpack_require__(/*! ./contact-details.component.html */ "./src/app/contacts/contact-details/contact-details.component.html"),
            styles: [__webpack_require__(/*! ./contact-details.component.css */ "./src/app/contacts/contact-details/contact-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactDetailsComponent);
    return ContactDetailsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3QtbGlzdC9jb250YWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-offset-3 col-md-6\">\n          <h1>Contact List</h1>\n          <a class=\"btn btn-primary\" routerLink=\"/contact/contact-list/add\" role=\"button\">\n          <i class=\"fas fa-plus-circle\"></i> Add a Contact</a>\n          <br>\n          <table class=\"table table-bordered table-striped table-hover\">\n              <!-- Header Row-->\n              <tr>\n                  <th class=\"text-center\">First Name</th>\n                  <th class=\"text-center\">Last Name</th>\n                  <th class=\"text-center\">Age</th>\n                  <th class=\"text-center\"></th>\n                  <th class=\"text-center\"></th>\n              </tr>\n\n              <!-- Repeatable Template Row -->\n                  <tr *ngFor=\"let contact of contacts\">\n                      <td class=\"text-center\">{{ contact.firstName }}</td>\n                      <td class=\"text-center\">{{ contact.lastName }}</td>\n                      <td class=\"text-center\">{{ contact.age }}</td>\n\n                      <td class=\"text-center\">\n                      <a routerLink=\"/contact/contact-list/edit/{{ contact._id }}\"\n                          class=\"btn btn-primary\"><i class=\"fas fa-pencil-alt\"></i> Edit</a>\n                      </td>\n\n                      <td class=\"text-center\">\n                              <a routerLink=\"/contact/contact-list/delete/{{ contact._id }}\" (click)=\"onDeleteClick()\"\n                                  class=\"btn btn-danger\"><i class=\"fas fa-trash-alt\"></i> Delete</a>\n                              </td>\n                  </tr>\n          </table>\n\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contacts/contact-list/contact-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contacts/contact-list/contact-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/contact-list.service */ "./src/app/services/contact-list.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactListService, flashMessage, router) {
        this.contactListService = contactListService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contacts = new Array();
        this.displayContactList();
    };
    ContactListComponent.prototype.onDeleteClick = function () {
        if (!confirm('Are You Sure?')) {
            this.router.navigate(['/contact/contact-list']);
        }
    };
    ContactListComponent.prototype.displayContactList = function () {
        var _this = this;
        this.contactListService.getList().subscribe(function (data) {
            if (data.success) {
                _this.contacts = data.contactList;
            }
            else {
                _this.flashMessage.show('User must be logged-in', { cssClass: 'alert-danger', timeOut: 3000 });
            }
        });
    };
    ContactListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__(/*! ./contact-list.component.html */ "./src/app/contacts/contact-list/contact-list.component.html"),
            styles: [__webpack_require__(/*! ./contact-list.component.css */ "./src/app/contacts/contact-list/contact-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_contact_list_service__WEBPACK_IMPORTED_MODULE_2__["ContactListService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Authentication for registered users.



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: material modules used in the app







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
            ],
            providers: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/ans1.ts":
/*!********************************!*\
  !*** ./src/app/models/ans1.ts ***!
  \********************************/
/*! exports provided: Ans1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ans1", function() { return Ans1; });
var Ans1 = /** @class */ (function () {
    function Ans1() {
    }
    return Ans1;
}());



/***/ }),

/***/ "./src/app/models/answer.ts":
/*!**********************************!*\
  !*** ./src/app/models/answer.ts ***!
  \**********************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)
// WebApp Name: Poll+
//Brief Description: It will store the answers for each questions filled by a user in the survey.
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());



/***/ }),

/***/ "./src/app/models/contact.ts":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact() {
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/models/filled-survey.ts":
/*!*****************************************!*\
  !*** ./src/app/models/filled-survey.ts ***!
  \*****************************************/
/*! exports provided: FilledSurvey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilledSurvey", function() { return FilledSurvey; });
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)
var FilledSurvey = /** @class */ (function () {
    function FilledSurvey() {
        this.answers = new Array();
    }
    return FilledSurvey;
}());



/***/ }),

/***/ "./src/app/models/question.ts":
/*!************************************!*\
  !*** ./src/app/models/question.ts ***!
  \************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)
var Question = /** @class */ (function () {
    function Question() {
        this.questionType = 1; //1 for mcq, 2 for text, 3 for key tab, 4=missing q-2mcq, 5=dropdown, 6=image-mcq,7=image-text
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/models/survey.ts":
/*!**********************************!*\
  !*** ./src/app/models/survey.ts ***!
  \**********************************/
/*! exports provided: Survey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return Survey; });
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)
var Survey = /** @class */ (function () {
    function Survey() {
    }
    return Survey;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)
// WebApp Name: Poll+
// Brief Description: User table that will store all the data of users registered for our app
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-base-page></app-base-page>>\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality of about page.



var AboutComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AboutComponent, _super);
    function AboutComponent(route) {
        return _super.call(this, route) || this;
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-about",
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AboutComponent);
    return AboutComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-base-page></app-base-page>>\n<div *ngIf=\"isLoggedIn()\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col col-md-6\">\n      <div class=\"card\">\n        <h5 class=\"card-header alert-success\">Secure</h5>\n        <div class=\"card-body\">\n          <a routerLink=\"contact-list\" class=\"btn btn-primary\"><i class=\"fas fa-users fa-lg\"></i> Contact List</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality of contact us page.




var ContactComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ContactComponent, _super);
    function ContactComponent(route, authService) {
        var _this = _super.call(this, route) || this;
        _this.authService = authService;
        return _this;
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.isLoggedIn = function () {
        return this.authService.loggedIn();
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-contact",
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ContactComponent);
    return ContactComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_3__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .carousel-fade .carousel-inner .item {\n    opacity: 0;\n    transition-property: opacity;\n  }\n\n  .carousel-fade .carousel-inner .active {\n    opacity: 1;\n  }\n\n  .carousel-fade .carousel-inner .active.left,\n  .carousel-fade .carousel-inner .active.right {\n    left: 0;\n    opacity: 0;\n    z-index: 1;\n  }\n\n  .carousel-fade .carousel-inner .next.left,\n  .carousel-fade .carousel-inner .prev.right {\n    opacity: 1;\n  }\n\n  .carousel-fade .carousel-control {\n    z-index: 2;\n  }\n\n  @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-fade .carousel-inner > .item.next,\n      .carousel-fade .carousel-inner > .item.active.right {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n      }\n      .carousel-fade .carousel-inner > .item.prev,\n      .carousel-fade .carousel-inner > .item.active.left {\n        opacity: 0;\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n      }\n      .carousel-fade .carousel-inner > .item.next.left,\n      .carousel-fade .carousel-inner > .item.prev.right,\n      .carousel-fade .carousel-inner > .item.active {\n        opacity: 1;\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n      }\n  }\n\n  .carousel-caption {\n      text-shadow: 0 1px 4px rgba(0,0,0,.9);\n    font-size:17px\n  }\n\n  .carousel-caption h3 {\n    font-size: 30px;\n    font-family: 'Lato', sans-serif;\n  }\n\n  html,\n      body,\n      .carousel,\n      .carousel-inner,\n      .carousel-inner .carousel-item {\n        height: 100%;\n      }\n\n  .carousel-item:nth-child(1) {\n        background: url('banner1.png');\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n      }\n\n  .carousel-item:nth-child(2) {\n        background: url('banner2.png');\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n      }\n\n  .carousel-item:nth-child(3) {\n        background: url('banner3.jpg');\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n      }\n\n  .carousel-item:nth-child(4) {\n        background: black;\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n      }\n\n  @media (max-width: 736px) {\n  html,\n  body,\n  .carousel,\n  .carousel-inner,\n  .carousel-inner .carousel-item {\n    height: 100%;\n  }\n  .carousel-item:nth-child(1) {\n    background: url('banner1.png');\nbackground-size: cover;\nbackground-position: center center;\nbackground-repeat: no-repeat;\n  }\n\n  .carousel-item:nth-child(2) {\n    background: url('banner2.png');\nbackground-size: cover;\nbackground-position: center center;\nbackground-repeat: no-repeat;\n  }\n\n  .carousel-item:nth-child(3) {\n    background: url('banner3.jpg');\nbackground-size: cover;\nbackground-position: center center;\nbackground-repeat: no-repeat;\n  }\n\n  .carousel-item:nth-child(3) {\n    display: none;\n  }\n}\n\n  .our-mission{\n  font-family: 'Nanum Gothic', sans-serif;\n  margin-bottom: 50px;\n}\n\n  .our-mission h1{\n  margin: 50px;\n  text-align: center;\n}\n\n  .our-mission p{\n  text-align: center;\n}\n\n  .myImage{\n  height: 400px;\n  width: 100%;\n  background: url('banner3.jpg');\n  background-position: center center;\n  background-repeat: no-repeat;\n  overflow: hidden;\n}\n\n  .myImage2{\n  height: 400px;\n  width: 100%;\n  background: url('banner1.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  overflow: hidden;\n}\n\n  @media (max-width: 736px) {\n  .our-mission{\n    font-family: 'Nanum Gothic', sans-serif;\n    margin-bottom: 10px;\n  }\n\n  .our-mission h1{\n    margin: 20px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsVUFBVTtJQUNWLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxPQUFPO0lBQ1AsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBQ0E7TUFDSTs7UUFFRSxVQUFVO1FBQ1YsdUNBQXVDO2dCQUMvQiwrQkFBK0I7TUFDekM7TUFDQTs7UUFFRSxVQUFVO1FBQ1YsdUNBQXVDO2dCQUMvQiwrQkFBK0I7TUFDekM7TUFDQTs7O1FBR0UsVUFBVTtRQUNWLHVDQUF1QztnQkFDL0IsK0JBQStCO01BQ3pDO0VBQ0o7O0VBQ0E7TUFDSSxxQ0FBcUM7SUFDdkM7RUFDRjs7RUFDQTtJQUNFLGVBQWU7SUFDZiwrQkFBK0I7RUFDakM7O0VBQ0k7Ozs7O1FBS0UsWUFBWTtNQUNkOztFQUNBO1FBQ0UsOEJBQXFEO0lBQ3pELHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsNEJBQTRCO01BQzFCOztFQUVBO1FBQ0UsOEJBQXFEO0lBQ3pELHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsNEJBQTRCO01BQzFCOztFQUVBO1FBQ0UsOEJBQXFEO0lBQ3pELHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsNEJBQTRCO01BQzFCOztFQUdBO1FBQ0UsaUJBQWlCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsNEJBQTRCO01BQzFCOztFQUlOO0VBQ0U7Ozs7O0lBS0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSw4QkFBcUQ7QUFDekQsc0JBQXNCO0FBQ3RCLGtDQUFrQztBQUNsQyw0QkFBNEI7RUFDMUI7O0VBRUE7SUFDRSw4QkFBcUQ7QUFDekQsc0JBQXNCO0FBQ3RCLGtDQUFrQztBQUNsQyw0QkFBNEI7RUFDMUI7O0VBRUE7SUFDRSw4QkFBcUQ7QUFDekQsc0JBQXNCO0FBQ3RCLGtDQUFrQztBQUNsQyw0QkFBNEI7RUFDMUI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7RUFHQTtFQUNFLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBcUQ7RUFDckQsa0NBQWtDO0VBQ2xDLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0VBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDhCQUFxRDtFQUNyRCxrQ0FBa0M7RUFDbEMsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7RUFHQTtFQUNFO0lBQ0UsdUNBQXVDO0lBQ3ZDLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWlubmVyIC5pdGVtIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XG4gIH1cblxuICAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlLmxlZnQsXG4gIC5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlLnJpZ2h0IHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pbm5lciAubmV4dC5sZWZ0LFxuICAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaW5uZXIgLnByZXYucmlnaHQge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtY29udHJvbCB7XG4gICAgei1pbmRleDogMjtcbiAgfVxuICBAbWVkaWEgYWxsIGFuZCAodHJhbnNmb3JtLTNkKSwgKC13ZWJraXQtdHJhbnNmb3JtLTNkKSB7XG4gICAgICAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbS5uZXh0LFxuICAgICAgLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWlubmVyID4gLml0ZW0uYWN0aXZlLnJpZ2h0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICB9XG4gICAgICAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbS5wcmV2LFxuICAgICAgLmNhcm91c2VsLWZhZGUgLmNhcm91c2VsLWlubmVyID4gLml0ZW0uYWN0aXZlLmxlZnQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgIH1cbiAgICAgIC5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLm5leHQubGVmdCxcbiAgICAgIC5jYXJvdXNlbC1mYWRlIC5jYXJvdXNlbC1pbm5lciA+IC5pdGVtLnByZXYucmlnaHQsXG4gICAgICAuY2Fyb3VzZWwtZmFkZSAuY2Fyb3VzZWwtaW5uZXIgPiAuaXRlbS5hY3RpdmUge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgIH1cbiAgfVxuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgICB0ZXh0LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsLjkpO1xuICAgIGZvbnQtc2l6ZToxN3B4XG4gIH1cbiAgLmNhcm91c2VsLWNhcHRpb24gaDMge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICB9XG4gICAgICBodG1sLFxuICAgICAgYm9keSxcbiAgICAgIC5jYXJvdXNlbCxcbiAgICAgIC5jYXJvdXNlbC1pbm5lcixcbiAgICAgIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5jYXJvdXNlbC1pdGVtOm50aC1jaGlsZCgxKSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIxLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgfVxuXG4gICAgICAuY2Fyb3VzZWwtaXRlbTpudGgtY2hpbGQoMikge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyMi5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIH1cblxuICAgICAgLmNhcm91c2VsLWl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lcjMuanBnJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB9XG5cblxuICAgICAgLmNhcm91c2VsLWl0ZW06bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB9XG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgaHRtbCxcbiAgYm9keSxcbiAgLmNhcm91c2VsLFxuICAuY2Fyb3VzZWwtaW5uZXIsXG4gIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5jYXJvdXNlbC1pdGVtOm50aC1jaGlsZCgxKSB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Jhbm5lcjEucG5nJyk7XG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cblxuICAuY2Fyb3VzZWwtaXRlbTpudGgtY2hpbGQoMikge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIyLnBuZycpO1xuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbmJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB9XG5cbiAgLmNhcm91c2VsLWl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyMy5qcGcnKTtcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfVxuXG4gIC5jYXJvdXNlbC1pdGVtOm50aC1jaGlsZCgzKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5cbi5vdXItbWlzc2lvbntcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4ub3VyLW1pc3Npb24gaDF7XG4gIG1hcmdpbjogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ub3VyLW1pc3Npb24gcHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXlJbWFnZXtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYW5uZXIzLmpwZycpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubXlJbWFnZTJ7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFubmVyMS5wbmcnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLm91ci1taXNzaW9ue1xuICAgIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLm91ci1taXNzaW9uIGgxe1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content for home page-->\n\n<header style=\"height: 100vh;\">\n  <div\n    id=\"carouselFade\"\n    class=\"carousel slide carousel-fade\"\n    data-ride=\"carousel\"\n  >\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\"></div>\n      <div class=\"carousel-item\"></div>\n      <div class=\"carousel-item\"></div>\n    </div>\n  </div>\n</header>\n\n<section class=\"our-mission container\">\n  <h1>Our Mission</h1>\n  <div class=\"row\">\n    <div class=\"col-lg-12\" style=\"line-height: 30px;\">\n      <p>\n       THIS IS INTRODUCTION\n      </p>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"myImage2\"></div>\n</section>\n\n<section class=\"our-mission container\">\n  <h1>Our Vision</h1>\n  <div class=\"col-lg-12\" style=\"line-height: 30px;\">\n    <p>\n        THIS IS INTRODUCTION\n    </p>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-6\"></div>\n  </div>\n</section>\n\n<section>\n  <div class=\"myImage\"></div>\n</section>\n\n<script>\n  $(document).ready(function() {\n    $(\"#carouselFade\").carousel({\n      interval: 200\n    });\n  });\n\n  $(function() {\n    $(document).scroll(function() {\n      var $nav = $(\".fixed-top\");\n      $nav.toggleClass(\"scrolled\", $(this).scrollTop() > $nav.height());\n    });\n  });\n\n  $(document).ready(function() {\n    // Add smooth scrolling to all links\n    $(\"a\").on(\"click\", function(event) {\n      // Make sure this.hash has a value before overriding default behavior\n      if (this.hash !== \"\") {\n        // Prevent default anchor click behavior\n        event.preventDefault();\n\n        // Store hash\n        var hash = this.hash;\n\n        // Using jQuery's animate() method to add smooth page scroll\n        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area\n        $(\"html, body\").animate(\n          {\n            scrollTop: $(hash).offset().top\n          },\n          800,\n          function() {\n            // Add hash (#) to URL when done scrolling (default click behavior)\n            window.location.hash = hash;\n          }\n        );\n      } // End if\n    });\n  });\n</script>\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality of Home page.



var HomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HomeComponent, _super);
    function HomeComponent(route) {
        return _super.call(this, route) || this;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HomeComponent);
    return HomeComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .login{\nheight: 80vh;\n} */\n\n.inside{\n  margin-top: 30vh;\n  margin-bottom: 20vh;\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n@media (max-width: 736px) {\n\n.inside{\n  margin:10px;\n  margin-top: 20vh;\n}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUNBQXVDO0FBQ3pDOztBQUdBOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5sb2dpbntcbmhlaWdodDogODB2aDtcbn0gKi9cblxuLmluc2lkZXtcbiAgbWFyZ2luLXRvcDogMzB2aDtcbiAgbWFyZ2luLWJvdHRvbTogMjB2aDtcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuXG4uaW5zaWRle1xuICBtYXJnaW46MTBweDtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbn1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content of Login Page-->\n\n<section class=\"container login\">\n  <div class=\"row inside\">\n    <div class=\"col-md-4\" style=\"margin: 0px auto;\">\n      <h1>Please Login</h1>\n      <form autocomplete=\"off\" (submit)=\"onLoginSubmit()\">\n        <fieldset class=\"form-group\">\n          <label for=\"username\">Username:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.username\"\n            name=\"username\"\n            placeholder=\"Enter Username\"\n            id=\"username\"\n            required\n            autofocus\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.password\"\n            name=\"password\"\n            placeholder=\"Enter Password\"\n            id=\"password\"\n            required\n            autocomplete=\"off\"\n          />\n          or\n          <a routerLink=\"/register\">Register Here</a>\n        </fieldset>\n        <fieldset class=\"form-group text-right\">\n          <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" />\n          <a routerLink=\"/home\">\n            <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\" />\n          </a>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality for login page





var LoginComponent = /** @class */ (function () {
    function LoginComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.authService.authenticateUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show(data.msg, {
                    cssClass: "alert-success",
                    timeOut: 3000
                });
                _this.router.navigate(["/home"]);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: "alert-danger",
                    timeOut: 3000
                });
                _this.router.navigate(["/login"]);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content of Page not found-->\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col col-md-12\">\n      <h1 class=\"display-2\"><strong>Error: 404</strong>-Page Not Found</h1>\n      <a routerLink=\"/home\" class=\"btn btn-primary btn-lg\"\n        ><i class=\"fas fa-undo-alt fa-lg\"></i> Take Me Home</a\n      >\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/page-not-found/page-not-found.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality for page not found error!

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-page-not-found",
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/pages/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/pages/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/products/products.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/products/products.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/products/products.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-base-page></app-base-page>>\n"

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/products/products.component.ts ***!
  \******************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProductsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductsComponent, _super);
    function ProductsComponent(route) {
        return _super.call(this, route) || this;
    }
    ProductsComponent.prototype.ngOnInit = function () { };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-products",
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/pages/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/pages/products/products.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductsComponent);
    return ProductsComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .login{\nheight: 80vh;\n} */\n\n.inside{\n  margin-top: 20vh;\n  margin-bottom: 10vh;\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n@media (max-width: 736px) {\n\n  .inside{\n    margin:10px;\n    margin-top: 20vh;\n  }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUNBQXVDO0FBQ3pDOztBQUdBOztFQUVFO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtFQUNsQjtFQUNBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5sb2dpbntcbmhlaWdodDogODB2aDtcbn0gKi9cblxuLmluc2lkZXtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbiAgbWFyZ2luLWJvdHRvbTogMTB2aDtcbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MzZweCkge1xuXG4gIC5pbnNpZGV7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjB2aDtcbiAgfVxuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content of Registration Page-->\n\n<section class=\"container login\">\n  <div class=\"row inside\">\n    <div class=\"col-md-4\" style=\"margin: 0px auto;\">\n      <h1>Please Register</h1>\n      <form autocomplete=\"off\" (submit)=\"onRegisterSubmit()\">\n        <fieldset *ngIf=\"!isLogIn\" class=\"form-group\">\n          <label for=\"username\">Username:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.username\"\n            name=\"username\"\n            placeholder=\"Enter Username\"\n            id=\"username\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"password\">Password:</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.password\"\n            name=\"password\"\n            placeholder=\"Enter Password\"\n            id=\"password\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"email\">Email:</label>\n          <input\n            type=\"email\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.email\"\n            name=\"email\"\n            placeholder=\"Enter Email\"\n            id=\"email\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group\">\n          <label for=\"displayName\">Dispaly Name:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [(ngModel)]=\"user.displayName\"\n            name=\"displayName\"\n            placeholder=\"Enter Display Name\"\n            id=\"displayName\"\n            required\n            autocomplete=\"off\"\n          />\n        </fieldset>\n        <fieldset class=\"form-group text-right\">\n          <input type=\"submit\" class=\"btn btn-success\" value=\"{{ title }}\" />\n          <a style=\"margin-left: 10px\" routerLink=\"/home\">\n            <input type=\"button\" class=\"btn btn-warning\" value=\"Cancel\" />\n          </a>\n        </fieldset>\n      </form>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality of Registration page for new users.





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(activatedRoute, flashMessage, authService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.isLogIn = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.isLoggedIn();
        this.title = this.activatedRoute.snapshot.data.title;
    };
    RegisterComponent.prototype.isLoggedIn = function () {
        var result = this.authService.loggedIn();
        if (result) {
            this.user = JSON.parse(localStorage.getItem("user"));
            console.log(this.user.id);
            this.isLogIn = true;
        }
        return result;
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if (this.title === "Edit") {
            console.log(this.user.displayName);
            this.authService.updateUser(this.user).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show("You are now registered and may log in", {
                        cssClass: "alert-success",
                        timeOut: 3000
                    });
                    _this.router.navigate(["/login"]);
                }
                else {
                    _this.flashMessage.show("A registration Error Occurred", {
                        cssClass: "alert-danger",
                        timeOut: 3000
                    });
                    _this.router.navigate(["/register"]);
                }
            });
        }
        else {
            this.authService.registerUser(this.user).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show("You are now registered and may log in", {
                        cssClass: "alert-success",
                        timeOut: 3000
                    });
                    _this.router.navigate(["/login"]);
                }
                else {
                    _this.flashMessage.show("A registration Error Occurred", {
                        cssClass: "alert-danger",
                        timeOut: 3000
                    });
                    _this.router.navigate(["/register"]);
                }
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-register",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-base-page></app-base-page>>\n"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/partials/base-page/base-page.component */ "./src/app/partials/base-page/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ServicesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ServicesComponent, _super);
    function ServicesComponent(route) {
        return _super.call(this, route) || this;
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ServicesComponent);
    return ServicesComponent;
}(src_app_partials_base_page_base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"]));



/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.css":
/*!************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Jhc2UtcGFnZS9iYXNlLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.html":
/*!*************************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content of Base Page-->\n\n<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1 class=\"display-4\">Welcome to {{ title }}</h1>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/partials/base-page/base-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/partials/base-page/base-page.component.ts ***!
  \***********************************************************/
/*! exports provided: BasePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePageComponent", function() { return BasePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality of base page for app


var BasePageComponent = /** @class */ (function () {
    function BasePageComponent(route) {
        this.route = route;
    }
    BasePageComponent.prototype.ngOnInit = function () {
        this.title = this.route.snapshot.data.title;
    };
    BasePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-base-page",
            template: __webpack_require__(/*! ./base-page.component.html */ "./src/app/partials/base-page/base-page.component.html"),
            styles: [__webpack_require__(/*! ./base-page.component.css */ "./src/app/partials/base-page/base-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BasePageComponent);
    return BasePageComponent;
}());



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\n  list-style-type: none;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n}\n\n\n.footer{\n  margin: 50px;\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n\n.footer ul li{\n  margin-top: 10px;\n}\n\n\n.subscribeBox{\nheight: 50px;\n}\n\n\n.fab{\n  margin: 10px;\n}\n\n\n@media (max-width: 736px) {\n  .footer{\n    margin: 10px;\n    font-family: 'Nanum Gothic', sans-serif;\n  }\n}\n\n\n/* @media (min-width: 736px) {\n  footer {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n   }\n} */\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLHVDQUF1QztBQUN6Qzs7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUVBO0FBQ0EsWUFBWTtBQUNaOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBR0E7RUFDRTtJQUNFLFlBQVk7SUFDWix1Q0FBdUM7RUFDekM7QUFDRjs7O0FBRUE7Ozs7OztHQU1HIiwiZmlsZSI6InNyYy9hcHAvcGFydGlhbHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG59XG5cblxuLmZvb3RlcntcbiAgbWFyZ2luOiA1MHB4O1xuICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYycsIHNhbnMtc2VyaWY7XG59XG5cbi5mb290ZXIgdWwgbGl7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zdWJzY3JpYmVCb3h7XG5oZWlnaHQ6IDUwcHg7XG59XG5cbi5mYWJ7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcbiAgLmZvb3RlcntcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xuICB9XG59XG5cbi8qIEBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuICBmb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICB9XG59ICovXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content for footer of each Page-->\n\n<footer>\n  <br />\n  <div class=\"navbar navbar-light bg-light\">\n    <div class=\"col-lg-6\">\n      <ul>\n        <li>\n          <a class=\"\" routerLink=\"/\">Home</a>\n        </li>\n        <li>\n          <a class=\"\" routerLink=\"/\">FAQ</a>\n        </li>\n        <li>\n          <a class=\"\" routerLink=\"/\">Contact Us</a>\n        </li>\n        <li>\n          <a class=\"\" routerLink=\"/\">Active Surveys</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-lg-6\">\n      <div id=\"mc_embed_signup\">\n        <form\n          class=\"validate material\"\n          asp-action=\"Subscribe\"\n          asp-controller=\"Home\"\n          method=\"post\"\n          id=\"mc-embedded-subscribe-form\"\n          name=\"mc-embedded-subscribe-form\"\n          novalidate\n        >\n          <div class=\"input-group mb-3\">\n            <input\n              type=\"text\"\n              class=\"form-control subscribeBox\"\n              placeholder=\"Email Address\"\n              aria-label=\"Email Address\"\n              aria-describedby=\"basic-addon2\"\n              name=\"EmailAddress\"\n            />\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-secondary\" type=\"submit\">\n                <i class=\"fa fa-check fa-2x\"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"row\">\n        <i style=\"margin: 10px;\" class=\"fab fa-facebook-f\"></i>\n        <i style=\"margin: 10px;\" class=\"fab fa-twitter\"></i>\n        <i style=\"margin: 10px;\" class=\"fab fa-github\"></i>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality for footer in the app

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        var date = new Date();
        this.year = date.getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/partials/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-logo{\n  margin-left: 30px;\n  height: 50px;\n}\n\n.navbar{\n  background-color: white;\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n.navbar-nav .nav-link{\n  color: black;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFydGlhbHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wYXJ0aWFscy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWxvZ297XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5uYXZiYXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ05hbnVtIEdvdGhpYycsIHNhbnMtc2VyaWY7XG59XG5cbi5uYXZiYXItbmF2IC5uYXYtbGlua3tcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/partials/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/partials/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content for header in each Page-->\n\n<nav class=\"navbar navbar-expand-lg fixed-top navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink=\"/\"\n    ><img class=\"header-logo\" src=\"../../../assets/images/logo.jpeg\"\n  /></a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">Home </a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">FAQ</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">Contact Us</a>\n      </li> -->\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn()\">\n        <a class=\"nav-link\" routerLink=\"/survey/list\">Active Surveys</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto navbar-right\">\n      <li class=\"nav-item\" *ngIf=\"isLoggedIn()\">\n        <a class=\"nav-link\" routerLink=\"/survey/add\">Create Survey</a>\n      </li>\n\n      <li *ngIf=\"isLoggedIn()\">\n        <a\n          class=\"nav-link dropdown-toggle\"\n          id=\"navbarDropdown\"\n          data-toggle=\"dropdown\"\n          aria-expanded=\"false\"\n        >\n          Welcome, {{ user.displayName }}\n          <div class=\"dropdown-menu dropdown-menu-right\">\n            <a\n              class=\"dropdown-item\"\n              routerLink=\"/survey/list/{{ user.username }}\"\n              name=\"mySurvey\"\n              >My Surveys</a\n            >\n            <a\n              class=\"dropdown-item\"\n              routerLink=\"/editprofile\"\n              name=\"editProfile\"\n              >Edit Profile</a\n            >\n            <a\n              class=\"dropdown-item\"\n              *ngIf=\"isLoggedIn()\"\n              (click)=\"onLogoutClick()\"\n              routerLink=\"/logout\"\n            >\n              Logout</a\n            >\n          </div>\n        </a>\n      </li>\n      <!-- <li *ngIf=\"!isLoggedIn()\" class=\"nav-item\">\n        <a routerLink=\"/login\" class=\"nav-link\"> Login</a>\n      </li> -->\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality for header of the app





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(flashMessage, authService, router) {
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
    };
    HeaderComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.authService.logout().subscribe(function (data) {
            _this.flashMessage.show(data.msg, {
                cssClass: "alert-warning",
                timeOut: 5000
            });
            _this.router.navigate(["/login"]);
        });
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        var result = this.authService.loggedIn();
        if (result) {
            this.user = JSON.parse(localStorage.getItem("user"));
        }
        return result;
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/partials/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality for authentication




var AuthService = /** @class */ (function () {
    function AuthService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
        this.endpoint = 'https://shilasurvey.herokuapp.com/api/';
        //  private endpoint = "http://localhost:3000/api/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.endpoint + "register", user, this.httpOptions);
    };
    AuthService.prototype.updateUser = function (user) {
        return this.http.post(this.endpoint + "register/" + user.id, user, this.httpOptions);
    };
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post(this.endpoint + "login", user, this.httpOptions);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem("id_token", "Bearer " + token);
        localStorage.setItem("user", JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get(this.endpoint + "logout", this.httpOptions);
    };
    AuthService.prototype.loggedIn = function () {
        return !this.jwtService.isTokenExpired(this.authToken);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/contact-list.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/contact-list.service.ts ***!
  \**************************************************/
/*! exports provided: ContactListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListService", function() { return ContactListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");




var ContactListService = /** @class */ (function () {
    function ContactListService(http) {
        this.http = http;
        this.authToken = null;
        this.endpoint = 'https://shilasurvey.herokuapp.com/api/contact-list/';
        // private endpoint = 'https://pollplusnew.herokuapp.com/api/contact-list/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    ContactListService.prototype.getList = function () {
        this.loadToken();
        return this.http.get(this.endpoint, this.httpOptions);
    };
    ContactListService.prototype.getContact = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + 'edit/' + contact._id, this.httpOptions);
    };
    ContactListService.prototype.addContact = function (contact) {
        this.loadToken();
        return this.http.post(this.endpoint + 'add', contact, this.httpOptions);
    };
    ContactListService.prototype.editContact = function (contact) {
        this.loadToken();
        return this.http.post(this.endpoint + 'edit/' + contact._id, contact, this.httpOptions);
    };
    ContactListService.prototype.deleteContact = function (contact) {
        this.loadToken();
        return this.http.get(this.endpoint + 'delete/' + contact._id, this.httpOptions);
    };
    ContactListService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    };
    ContactListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactListService);
    return ContactListService;
}());



/***/ }),

/***/ "./src/app/services/survey.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/survey.service.ts ***!
  \********************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)




var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
        this.authToken = null;
        this.endpoint = 'https://shilasurvey.herokuapp.com/api/survey/';
        this.endpoint1 = 'https://shilasurvey.herokuapp.com/api/ans1/';
        //private endpoint = "http://localhost:3000/api/survey/";
        // private endpoint1 = "http://localhost:3000/api/ans1/";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            })
        };
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    SurveyService.prototype.getList = function () {
        // this.loadToken();
        return this.http.get(this.endpoint, this.httpOptions);
    };
    SurveyService.prototype.getAnsList = function () {
        // this.loadToken();
        return this.http.get(this.endpoint1, this.httpOptions);
    };
    SurveyService.prototype.getSurvey = function (survey) {
        //  this.loadToken();
        return this.http.get(this.endpoint + "" + survey._id, this.httpOptions);
    };
    SurveyService.prototype.getSurveyAnswers = function (survey) {
        this.loadToken();
        return this.http.get(this.endpoint + "answer/" + survey._id, this.httpOptions);
    };
    SurveyService.prototype.getMySurvey = function (username) {
        //this.loadToken();
        return this.http.get(this.endpoint + "list/" + username, this.httpOptions);
    };
    SurveyService.prototype.addSurvey = function (survey) {
        //this.loadToken();
        return this.http.post(this.endpoint + "add", survey, this.httpOptions);
    };
    SurveyService.prototype.addAns1 = function (ans1) {
        //this.loadToken();
        console.log(ans1);
        return this.http.post(this.endpoint1 + "Add", ans1, this.httpOptions);
    };
    SurveyService.prototype.addFilledSurvey = function (filledSurvey) {
        this.loadToken();
        return this.http.post(this.endpoint + "filledSurvey/add", filledSurvey, this.httpOptions);
    };
    SurveyService.prototype.editSurvey = function (survey) {
        this.loadToken();
        return this.http.post(this.endpoint + "edit/" + survey._id, survey, this.httpOptions);
    };
    SurveyService.prototype.deleteSurvey = function (survey) {
        this.loadToken();
        return this.http.get(this.endpoint + "delete/" + survey._id, this.httpOptions);
    };
    SurveyService.prototype.loadToken = function () {
        var token = localStorage.getItem("id_token");
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set("Authorization", this.authToken);
    };
    SurveyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "./src/app/survey/key-count/key-count.component.css":
/*!**********************************************************!*\
  !*** ./src/app/survey/key-count/key-count.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9rZXktY291bnQva2V5LWNvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/survey/key-count/key-count.component.html":
/*!***********************************************************!*\
  !*** ./src/app/survey/key-count/key-count.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-time-q #counter></app-time-q>\n"

/***/ }),

/***/ "./src/app/survey/key-count/key-count.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/survey/key-count/key-count.component.ts ***!
  \*********************************************************/
/*! exports provided: KeyCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyCountComponent", function() { return KeyCountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-q/time-q.component */ "./src/app/survey/time-q/time-q.component.ts");



var KeyCountComponent = /** @class */ (function () {
    function KeyCountComponent() {
        this.value = 0;
        this.firstTime = false;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.counterState = 'counter is ticking';
        this.running = false;
        this.firstTime = true;
    }
    KeyCountComponent.prototype.keyEvent = function (event) {
        if (event.keyCode === 39) {
            if (this.firstTime) {
                console.log('start timer');
                this.firstTime = false;
                this.running = true;
                this.counter.start();
            }
            this.increment();
        }
    };
    KeyCountComponent.prototype.increment = function () {
        if (this.running) {
            this.value++;
        }
        this.messageEvent.emit(this.value);
    };
    KeyCountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.counter.startAt = 15;
        this.counter.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.counterState = 'counter has stopped';
                _this.running = false;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], KeyCountComponent.prototype, "messageEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('counter', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_2__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_2__["TimeQComponent"])
    ], KeyCountComponent.prototype, "counter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], KeyCountComponent.prototype, "keyEvent", null);
    KeyCountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-key-count',
            template: __webpack_require__(/*! ./key-count.component.html */ "./src/app/survey/key-count/key-count.component.html"),
            styles: [__webpack_require__(/*! ./key-count.component.css */ "./src/app/survey/key-count/key-count.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KeyCountComponent);
    return KeyCountComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-delete/survey-delete.component.css":
/*!******************************************************************!*\
  !*** ./src/app/survey/survey-delete/survey-delete.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9zdXJ2ZXktZGVsZXRlL3N1cnZleS1kZWxldGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/survey/survey-delete/survey-delete.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/survey/survey-delete/survey-delete.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content for deleting survey Page-->\n<p>\n  survey-delete works!\n</p>\n"

/***/ }),

/***/ "./src/app/survey/survey-delete/survey-delete.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/survey/survey-delete/survey-delete.component.ts ***!
  \*****************************************************************/
/*! exports provided: SurveyDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDeleteComponent", function() { return SurveyDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_survey__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/survey */ "./src/app/models/survey.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality for deleting an existing survey





var SurveyDeleteComponent = /** @class */ (function () {
    function SurveyDeleteComponent(activatedRoute, flashMessage, surveyListService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.surveyListService = surveyListService;
        this.router = router;
    }
    SurveyDeleteComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.activatedRoute.snapshot.data.title;
        this.survey = new src_app_models_survey__WEBPACK_IMPORTED_MODULE_5__["Survey"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.survey._id = params.id;
        });
        this.deleteSurvey(this.survey);
    };
    SurveyDeleteComponent.prototype.deleteSurvey = function (survey) {
        var _this = this;
        this.surveyListService.deleteSurvey(survey).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: "alert-warning",
                    timeOut: 3000
                });
                _this.router.navigate(["/survey/list"]);
            }
            else {
                _this.flashMessage.show("Delete Contact Failed", {
                    cssClass: "alert-danger",
                    timeOut: 3000
                });
                _this.router.navigate(["/survey/list"]);
            }
        });
    };
    SurveyDeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: "app-survey-delete",
            template: __webpack_require__(/*! ./survey-delete.component.html */ "./src/app/survey/survey-delete/survey-delete.component.html"),
            styles: [__webpack_require__(/*! ./survey-delete.component.css */ "./src/app/survey/survey-delete/survey-delete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_1__["FlashMessagesService"],
            _services_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SurveyDeleteComponent);
    return SurveyDeleteComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-details/survey-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/survey/survey-details/survey-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.addquestion{\n\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n.addButton{\nmargin-bottom: 20px;\n}\n\n@media (min-width: 736px) {\n.margin-left{\n  margin-left: 10px;\n}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L3N1cnZleS1kZXRhaWxzL3N1cnZleS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztFQUVFLHVDQUF1QztBQUN6Qzs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9zdXJ2ZXkvc3VydmV5LWRldGFpbHMvc3VydmV5LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFkZHF1ZXN0aW9ue1xuXG4gIGZvbnQtZmFtaWx5OiAnTmFudW0gR290aGljJywgc2Fucy1zZXJpZjtcbn1cblxuLmFkZEJ1dHRvbntcbm1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MzZweCkge1xuLm1hcmdpbi1sZWZ0e1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/survey/survey-details/survey-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/survey/survey-details/survey-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content of displaying details of survey Page-->\n\n<div class=\"container addquestion\">\n  <div class=\"row\">\n    <section class=\"col-md-6\" style=\"margin: 0px auto;\">\n      <br />\n      <br />\n      <h1>{{ title }}</h1>\n\n      <form class=\"form\" (submit)=\"onDetailsPageSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"FirstNameTextField\">Title</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"TitleTextField\"\n            placeholder=\"Enter a title\"\n            name=\"title\"\n            [(ngModel)]=\"survey.surveyTitle\"\n            value=\"{{ survey.surveyTitle }}\"\n            required\n          />\n        </div>\n\n        <div class=\"row\">\n          <div class=\"form-group col-lg-6\">\n            <label for=\"FromTextField\">From (MM/DD/YYYY)</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"FromTextField\"\n              placeholder=\"From\"\n              name=\"from\"\n              [(ngModel)]=\"survey.surveyFrom\"\n              value=\"{{ survey.surveyFrom }}\"\n              required\n            />\n          </div>\n\n          <div class=\"form-group col-lg-6\">\n            <label for=\"ToTextField\">To(MM/DD/YYYY)</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"ToTextField\"\n              placeholder=\"To\"\n              name=\"from\"\n              [(ngModel)]=\"survey.surveyTill\"\n              value=\"{{ survey.surveyTill }}\"\n              required\n            />\n          </div>\n        </div>\n        <!-- <mat-form-field>\n                    <input\n                    [(ngModel)]=\"survey.surveyTill\"\n                    value=\"{{ survey.surveyTill }}\"\n                    matInput [matDatepicker]=\"picker\"\n                    placeholder=\"Choose a date\" required>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                  </mat-form-field> -->\n\n        <table>\n          <tr *ngFor=\"let question of questions; let i = index\">\n            <section id=\"quesion\" name=\"\">\n              <div class=\"form-group\">\n                <hr />\n                <label for=\"questionField\">Question - {{ i + 1 }}</label>\n                <input\n                  type=\"text\"\n                  class=\"form-control\"\n                  id=\"questionField\"\n                  placeholder=\"Enter a Question\"\n                  name=\"question{{ i }}\"\n                  [(ngModel)]=\"question.question\"\n                  value=\"{{ question.question }}\"\n                  required\n                />\n                <br />\n                <div class=\"row\">\n                  <div class=\"col-lg-3\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"optionField\"\n                      placeholder=\"Option 1\"\n                      name=\"question{{ i }}\"\n                      [(ngModel)]=\"question.option1\"\n                      value=\"{{ question.option1 }}\"\n                      required\n                    />\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"optionField\"\n                      placeholder=\"Option 2\"\n                      name=\"question{{ i }}\"\n                      [(ngModel)]=\"question.option2\"\n                      value=\"{{ question.option2 }}\"\n                      required\n                    />\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"optionField\"\n                      placeholder=\"Option 3\"\n                      name=\"question{{ i }}\"\n                      [(ngModel)]=\"question.option3\"\n                      value=\"{{ question.option3 }}\"\n                      required\n                    />\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      id=\"optionField\"\n                      placeholder=\"Option 4\"\n                      name=\"question{{ i }}\"\n                      [(ngModel)]=\"question.option4\"\n                      value=\"{{ question.option4 }}\"\n                      required\n                    />\n                  </div>\n                </div>\n                <br />\n                <a\n                  [routerLink]=\"\"\n                  (click)=\"onDelete(i)\"\n                  class=\"btn btn-outline-danger btn-sm col-lg-5 margin-left\"\n                >\n                  Delete Question</a\n                >\n              </div>\n            </section>\n          </tr>\n          <a\n            [routerLink]=\"\"\n            (click)=\"onAddNew()\"\n            class=\"btn btn-outline-success btn-sm col-lg-5 margin-left\"\n            >Add new question</a\n          >\n        </table>\n\n        <br />\n        <div class=\"container row\">\n          <button type=\"submit\" class=\"btn btn-primary col-lg-5\">\n            {{ title }}\n          </button>\n\n          <a\n            routerLink=\"/survey/list\"\n            class=\"btn btn-warning col-lg-5 margin-left\"\n          >\n            Cancel</a\n          >\n        </div>\n      </form>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/survey/survey-details/survey-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/survey/survey-details/survey-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: SurveyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDetailsComponent", function() { return SurveyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../models/question */ "./src/app/models/question.ts");
/* harmony import */ var _models_survey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../models/survey */ "./src/app/models/survey.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/survey.service */ "./src/app/services/survey.service.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality for displaying details of a survey








var SurveyDetailsComponent = /** @class */ (function () {
    function SurveyDetailsComponent(activatedRoute, flashMessage, surveyService, authService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.surveyService = surveyService;
        this.authService = authService;
        this.router = router;
    }
    SurveyDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
        this.questions = new Array();
        this.questions.push(new _models_question__WEBPACK_IMPORTED_MODULE_3__["Question"]());
        this.title = this.activatedRoute.snapshot.data.title;
        this.survey = new _models_survey__WEBPACK_IMPORTED_MODULE_4__["Survey"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.survey._id = params.id;
        });
        if (this.title === "Edit Survey") {
            this.getSurvey(this.survey);
        }
        this.isLoggedIn();
    };
    SurveyDetailsComponent.prototype.getSurvey = function (survey) {
        var _this = this;
        this.surveyService.getSurvey(survey).subscribe(function (data) {
            _this.survey = data.survey;
        });
    };
    SurveyDetailsComponent.prototype.onAddNew = function () {
        var question = new _models_question__WEBPACK_IMPORTED_MODULE_3__["Question"]();
        this.questions.push(question);
    };
    SurveyDetailsComponent.prototype.onDelete = function (i) {
        if (!confirm("Are You Sure?")) {
            this.router.navigate(["/survey/add"]);
        }
        else {
            // for( var i = 0; i < this.questions.length; i++){
            //  if ( this.questions[i] === 5) {
            //    this.questions.splice(i, 1);
            //  }
            //}
            this.questions.splice(i, 1);
        }
    };
    SurveyDetailsComponent.prototype.onDetailsPageSubmit = function () {
        var _this = this;
        console.log(this.survey.surveyTill);
        this.survey.questions = this.questions;
        this.survey.surveyAuthor = this.user.username;
        switch (this.title) {
            case "Add Survey":
                console.log(this.survey);
                this.surveyService.addSurvey(this.survey).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, {
                            cssClass: "alert-success",
                            timeOut: 3000
                        });
                        _this.router.navigate(["/survey/list"]);
                    }
                    else {
                        _this.flashMessage.show("Add Contact Failed", {
                            cssClass: "alert-danger",
                            timeOut: 3000
                        });
                        _this.router.navigate(["/survey/list"]);
                    }
                });
                break;
            case "Edit Survey":
                this.surveyService.editSurvey(this.survey).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessage.show(data.msg, {
                            cssClass: "alert-success",
                            timeOut: 3000
                        });
                        _this.router.navigate(["/survey/my-survey"]);
                    }
                    else {
                        _this.flashMessage.show("Edit Survey Failed", {
                            cssClass: "alert-danger",
                            timeOut: 3000
                        });
                        _this.router.navigate(["/survey/my-survey"]);
                    }
                });
                break;
        }
    };
    SurveyDetailsComponent.prototype.isLoggedIn = function () {
        var result = this.authService.loggedIn();
        if (result) {
            this.user = JSON.parse(localStorage.getItem("user"));
        }
        return result;
    };
    SurveyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: "app-survey-details",
            template: __webpack_require__(/*! ./survey-details.component.html */ "./src/app/survey/survey-details/survey-details.component.html"),
            styles: [__webpack_require__(/*! ./survey-details.component.css */ "./src/app/survey/survey-details/survey-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_7__["FlashMessagesService"],
            src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_8__["SurveyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], SurveyDetailsComponent);
    return SurveyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-list/survey-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/survey/survey-list/survey-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".surveyList{\n\n  font-family: 'Nanum Gothic', sans-serif;\n}\n\n\n.btn{\n  margin: 2px;\n}\n\n\n.buttons{\n  margin:auto;\n  text-align: right;\n}\n\n\n@media (max-width: 736px) {\n\n.buttons{\n  margin:auto;\n  text-align: left;\n}\n\n  }\n\n\n.full-width-table {\n    width: 100%;\n  }\n\n\nsearch-div{\n  margin: 10px;\n  }\n\n\nsearch-form-field{\n  width:90%;\n  margin-left: 10px;\n  padding: 5px 10px;\n  background-color: #f5f5f5;\n  border-radius:5px\n  }\n\n\nsearch-form-field div.mat-form-field-underline{\n    display: none;\n  }\n\n\nsearch-form-field div.mat-form-field-infix{\n    display: none;\n  }\n\n\ntable {\n    width: 100%;\n  }\n\n\n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n\n\ntd, th {\n    width: 15%;\n  }\n\n\n.hide{\n    display: none;\n  }\n\n\nmat-footer-row mat-footer-cell{\n    justify-content: center;\n    font-style: italic;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L3N1cnZleS1saXN0L3N1cnZleS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsdUNBQXVDO0FBQ3pDOzs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COzs7QUFLQTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0VBRUU7OztBQUVBO0lBQ0UsV0FBVztFQUNiOzs7QUFDQTtFQUNBLFlBQVk7RUFDWjs7O0FBQ0E7RUFDQSxTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekI7RUFDQTs7O0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7OztBQUNBO0lBQ0UsYUFBYTtFQUNmOzs7QUFDQTtJQUNFLFdBQVc7RUFDYjs7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOzs7QUFFQTtJQUNFLFVBQVU7RUFDWjs7O0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7OztBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9zdXJ2ZXktbGlzdC9zdXJ2ZXktbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1cnZleUxpc3R7XG5cbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xufVxuXG5cbi5idG57XG4gIG1hcmdpbjogMnB4O1xufVxuXG4uYnV0dG9uc3tcbiAgbWFyZ2luOmF1dG87XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzM2cHgpIHtcblxuLmJ1dHRvbnN7XG4gIG1hcmdpbjphdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4gIH1cblxuICAuZnVsbC13aWR0aC10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgc2VhcmNoLWRpdntcbiAgbWFyZ2luOiAxMHB4O1xuICB9XG4gIHNlYXJjaC1mb3JtLWZpZWxke1xuICB3aWR0aDo5MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLXJhZGl1czo1cHhcbiAgfVxuICBzZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICB0ZCwgdGgge1xuICAgIHdpZHRoOiAxNSU7XG4gIH1cbiAgLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBtYXQtZm9vdGVyLXJvdyBtYXQtZm9vdGVyLWNlbGx7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/survey/survey-list/survey-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/survey/survey-list/survey-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content for displaying list of surveys Page-->\n\n<br />\n\n<div class=\"container surveyList\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1>{{ title }}</h1>\n\n      <br />\n\n      <div class=\"\">\n        <hr />\n\n        <div *ngFor=\"let survey of surveys; let i = index\">\n          <div class=\"row\">\n            <div class=\"col-lg-9\">\n              <h2>{{ survey.surveyTitle }}</h2>\n              <p>Ends in {{ numOfDays[i] }} days.</p>\n            </div>\n            <div *ngIf=\"isMySurvey\" class=\"col-lg-3 buttons\">\n              <a\n                routerLink=\"/survey/result/{{ survey._id }}\"\n                class=\"btn btn-primary\"\n                ><i class=\"fas fa-chart-pie\"></i>\n              </a>\n              <a\n                routerLink=\"/survey/list/delete/{{ survey._id }}\"\n                (click)=\"onDeleteClick()\"\n                class=\"btn btn-danger\"\n                ><i class=\"fas fa-trash-alt\"></i\n              ></a>\n              <!-- <a routerLink=\"/survey/edit/{{ survey._id }}\" class=\"btn btn-primary\"><i class=\"fas fa-pencil-alt\"></i>\n                        </a> -->\n            </div>\n\n            <div *ngIf=\"!isMySurvey\" class=\"col-lg-3 buttons\">\n              <a\n                routerLink=\"/survey/questions/{{ survey._id }}\"\n                class=\"btn btn-primary\"\n              >\n                Participate</a\n              >\n            </div>\n          </div>\n\n          <hr />\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/survey/survey-list/survey-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/survey/survey-list/survey-list.component.ts ***!
  \*************************************************************/
/*! exports provided: SurveyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyListComponent", function() { return SurveyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality for displaying list of surveys




var SurveyListComponent = /** @class */ (function () {
    function SurveyListComponent(activatedRoute, surveyService, flashMessage, router) {
        this.activatedRoute = activatedRoute;
        this.surveyService = surveyService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.numOfDays = new Array();
        this.isMySurvey = false;
    }
    SurveyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surveys = new Array();
        this.title = this.activatedRoute.snapshot.data.title;
        this.activatedRoute.params.subscribe(function (params) {
            _this.username = params.username;
        });
        if (this.username != null) {
            this.isMySurvey = true;
            this.displayMySurveyList(this.username);
        }
        else {
            this.isMySurvey = false;
            this.displaySurveyList();
        }
    };
    SurveyListComponent.prototype.displaySurveyList = function () {
        var _this = this;
        this.surveyService.getList().subscribe(function (data) {
            if (data.success) {
                _this.surveys = data.surveyList;
                for (var index = 0; index < _this.surveys.length; index++) {
                    var today = new Date();
                    var secondDate = new Date(_this.surveys[index].surveyTill);
                    var timeDiff = Math.abs(today.getTime() - secondDate.getTime());
                    _this.numOfDays[index] = Math.ceil(timeDiff / (1000 * 3600 * 24));
                }
            }
            else {
                _this.flashMessage.show("User must be logged-in", {
                    cssClass: "alert-danger",
                    timeOut: 3000
                });
            }
        });
    };
    SurveyListComponent.prototype.displayMySurveyList = function (username) {
        var _this = this;
        this.surveyService.getMySurvey(username).subscribe(function (data) {
            if (data.success) {
                _this.surveys = data.surveyList;
                for (var index = 0; index < _this.surveys.length; index++) {
                    var today = new Date();
                    var secondDate = new Date(_this.surveys[index].surveyTill);
                    var timeDiff = Math.abs(today.getTime() - secondDate.getTime());
                    _this.numOfDays[index] = Math.ceil(timeDiff / (1000 * 3600 * 24));
                }
            }
            else {
                _this.flashMessage.show("User must be logged-in", {
                    cssClass: "alert-danger",
                    timeOut: 3000
                });
            }
        });
    };
    SurveyListComponent.prototype.onDeleteClick = function () {
        if (!confirm("Are You Sure?")) {
            this.router.navigate(["/survey/list"]);
        }
    };
    SurveyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-survey-list",
            template: __webpack_require__(/*! ./survey-list.component.html */ "./src/app/survey/survey-list/survey-list.component.html"),
            styles: [__webpack_require__(/*! ./survey-list.component.css */ "./src/app/survey/survey-list/survey-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SurveyListComponent);
    return SurveyListComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-q/survey-q.component.css":
/*!********************************************************!*\
  !*** ./src/app/survey/survey-q/survey-q.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\r\n\r\n  margin: 15px 0;\r\n  display: flex; flex-direction: row; padding: 4px 0;\r\n}\r\n\r\n.example-radio-button {\r\n  margin: 5px; padding: 2px 10px;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 80%;\r\n}\r\n\r\n.example-card {\r\n\r\n  width:60%;\r\n}\r\n\r\n.counter-wrapper {\r\n  width: 200px;\r\n  height: 50px;\r\n  float: right;\r\n  background-color: #c2c2c2;\r\n  font-size: 2rem;\r\n  text-align: right;\r\n   align-items: right;\r\n}\r\n\r\n.cardHeader{ text-align: center; font-size: 2vw}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L3N1cnZleS1xL3N1cnZleS1xLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsY0FBYztFQUNkLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxjQUFjO0FBQ3BEOztBQUVBO0VBQ0UsV0FBVyxFQUFFLGlCQUFpQjtBQUNoQzs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUNBOztFQUVFLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0dBQ2hCLGtCQUFrQjtBQUNyQjs7QUFFQSxhQUFhLGtCQUFrQixFQUFFLGNBQWMiLCJmaWxlIjoic3JjL2FwcC9zdXJ2ZXkvc3VydmV5LXEvc3VydmV5LXEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXJhZGlvLWdyb3VwIHtcclxuXHJcbiAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsgcGFkZGluZzogNHB4IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLXJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7IHBhZGRpbmc6IDJweCAxMHB4O1xyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDgwJTtcclxufVxyXG4uZXhhbXBsZS1jYXJkIHtcclxuXHJcbiAgd2lkdGg6NjAlO1xyXG59XHJcbi5jb3VudGVyLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmMyYzI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBhbGlnbi1pdGVtczogcmlnaHQ7XHJcbn1cclxuXHJcbi5jYXJkSGVhZGVyeyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMnZ3fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/survey/survey-q/survey-q.component.html":
/*!*********************************************************!*\
  !*** ./src/app/survey/survey-q/survey-q.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<h1> Readiness to Engage in Employment – Questionnaire </h1>\n<h4>   <div class=\"counter-wrapper\">\n    <app-time-q #counter></app-time-q>\n    <app-time-q #counter1 style=\"display: none\"></app-time-q>\n    <app-time-q #counter2 style=\"display: none\"></app-time-q>\n  </div><br>\n   </h4>\n<br>\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n  <mat-step [stepControl]=\"firstFormGroup\">\n    <form [formGroup]=\"firstFormGroup\">\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\" >\n        <mat-card-header class=\"cardHeader\">\n            General Info\n        </mat-card-header>\n        <mat-card-content>\n<hr>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Name\" formControlName=\"NameCtrl\"  >\n      </mat-form-field><br>\n      <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" formControlName=\"EmailCtrl\"  >\n        </mat-form-field><br>\n      <mat-form-field>\n        <input matInput placeholder=\"Age\" formControlName=\"AgeCtrl\" >\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext (click)=\"start()\">Start Exam</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\">\n          <mat-card-header class=\"cardHeader\">\n              Immigration Status\n          </mat-card-header>\n          <mat-card-content>\n              <hr>\n      <label id=\"example-radio-group-label\">1. Are you a visible minority or a new immigrant woman?</label>\n      <mat-radio-group\n        aria-labelledby=\"example-radio-group-label\"\n        class=\"example-radio-group\" formControlName=\"isImiCtrl\"\n        >\n        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n          {{item}}\n        </mat-radio-button>\n      </mat-radio-group>\n      <div>\n\n        <label id=\"example-radio-group-label\">2. When did you arrived in Canada?</label>\n        <mat-radio-group\n        aria-labelledby=\"example-radio-group-label\"\n        class=\"example-radio-group\" formControlName=\"isImiYrCtrl\"\n        >\n        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of Yrs\" [value]=\"item\">\n          {{item}}\n        </mat-radio-button>\n      </mat-radio-group>\n\n\n      <label id=\"example-radio-group-label\">3. Are you able to legally work in Canada?</label>\n      <mat-radio-group\n      aria-labelledby=\"example-radio-group-label\"\n      class=\"example-radio-group\" formControlName=\"isWorkCtrl\"\n      >\n      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n        {{item}}\n      </mat-radio-button>\n    </mat-radio-group>\n\n    <label id=\"example-radio-group-label\">4. What is your resident status?</label>\n    <mat-radio-group\n    aria-labelledby=\"example-radio-group-label\"\n    class=\"example-radio-group\" formControlName=\"ResCtrl\"\n    >\n    <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of Res\" [value]=\"item\">\n      {{item}}\n    </mat-radio-button>\n  </mat-radio-group>\n\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"thirdFormGroup\">\n    <form [formGroup]=\"thirdFormGroup\">\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\">\n          <mat-card-header class=\"cardHeader\">\n              Work in Canada\n          </mat-card-header>\n          <mat-card-content>\n              <hr>\n      <label id=\"example-radio-group-label\">1. Have you ever worked in Canada?</label>\n      <mat-radio-group\n        aria-labelledby=\"example-radio-group-label\"\n        class=\"example-radio-group\" formControlName=\"isWorkedCtrl\"\n        >\n        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n          {{item}}\n        </mat-radio-button>\n      </mat-radio-group>\n      <div>\n\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"2. How many jobs have you worked on?\" formControlName=\"NoJobsCtrl\">\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"3. What is the maximum work period you have worked in a job (months/years)?\" formControlName=\"WorkPerCtrl\">\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"4. Why did you leave your previous job?\" formControlName=\"jobLCtrl\">\n        </mat-form-field><br>\n      <label id=\"example-radio-group-label\">5. Have you done any volunteering jobs in Canada?</label>\n      <mat-radio-group\n      aria-labelledby=\"example-radio-group-label\"\n      class=\"example-radio-group\" formControlName=\"isVolCtrl\"\n      >\n      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n        {{item}}\n      </mat-radio-button>\n    </mat-radio-group>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"6. For how long have you done the volunteering Work?\" formControlName=\"VolCtrl\">\n    </mat-form-field>\n<br>\n\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"fourthFormGroup\">\n    <form [formGroup]=\"fourthFormGroup\">\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\">\n          <mat-card-header class=\"cardHeader\">\n              What type of work interests you?\n          </mat-card-header>\n          <mat-card-content>\n              <hr>\n            <label id=\"example-radio-group-label\">Choose one option for each row</label>\n\n      <mat-radio-group\n        aria-labelledby=\"example-radio-group-label\"\n        class=\"example-radio-group\" formControlName=\"Work1Ctrl\"\n        >\n        <mat-radio-button class=\"example-radio-button\" value=\"Working alone\" >Working alone</mat-radio-button>\n        <mat-radio-button class=\"example-radio-button\" value=\"Working with people\">Working with people</mat-radio-button>\n      </mat-radio-group>\n      <hr>\n      <mat-radio-group\n      aria-labelledby=\"example-radio-group-label\"\n      class=\"example-radio-group\" formControlName=\"Work2Ctrl\"\n      >\n      <mat-radio-button class=\"example-radio-button\" value=\"Working outdoors\" >Working outdoors</mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" value=\"Working indoors\" >Working indoors</mat-radio-button>\n    </mat-radio-group><hr>\n    <mat-radio-group\n    aria-labelledby=\"example-radio-group-label\"\n    class=\"example-radio-group\" formControlName=\"Work3Ctrl\"\n    >\n    <mat-radio-button class=\"example-radio-button\" value=\"Working with numbers\">Working with numbers</mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" value=\"Working with ideas\">Working with ideas</mat-radio-button>\n  </mat-radio-group><hr>\n  <mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\" formControlName=\"Work4Ctrl\"\n  >\n  <mat-radio-button class=\"example-radio-button\" value=\"Cleaning and organizing\">Cleaning and organizing </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" value=\"Creating new objects\" >Creating new objects</mat-radio-button>\n</mat-radio-group><hr>\n<mat-radio-group\naria-labelledby=\"example-radio-group-label\"\nclass=\"example-radio-group\" formControlName=\"Work5Ctrl\"\n>\n<mat-radio-button class=\"example-radio-button\" value=\"Operating machines\">Operating machines </mat-radio-button>\n<mat-radio-button class=\"example-radio-button\" value=\"Office work\">Office work</mat-radio-button>\n</mat-radio-group><hr>\n<mat-radio-group\naria-labelledby=\"example-radio-group-label\"\nclass=\"example-radio-group\" formControlName=\"Work6Ctrl\"\n>\n<mat-radio-button class=\"example-radio-button\" value=\"perating own business\" >perating own business</mat-radio-button>\n<mat-radio-button class=\"example-radio-button\" value=\"Woking in a company\">Woking in a company</mat-radio-button>\n</mat-radio-group><br>\n<mat-form-field class=\"example-full-width\">\n  <input matInput placeholder=\"Mention your career interest\" formControlName=\"IntCtrl\">\n</mat-form-field>\n<br>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"fifthFormGroup\">\n    <form [formGroup]=\"fifthFormGroup\">\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\">\n          <mat-card-header class=\"cardHeader\">\n              Attempts made for job\n          </mat-card-header>\n        <mat-card-content>\n            <hr>\n\n          <label id=\"example-radio-group-label\">1. I  have explored job possibilities for me</label>\n          <mat-radio-group\n          aria-labelledby=\"example-radio-group-label\"\n          class=\"example-radio-group\" formControlName=\"isExpJob\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <label id=\"example-radio-group-label\">2. I have explored possible organizations for me to work</label>\n          <mat-radio-group\n          aria-labelledby=\"example-radio-group-label\"\n          class=\"example-radio-group\" formControlName=\"isExpOrg\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <label id=\"example-radio-group-label\">3. I have explored interview sessions</label>\n          <mat-radio-group\n          aria-labelledby=\"example-radio-group-label\"\n          class=\"example-radio-group\" formControlName=\"isExpInt\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <label id=\"example-radio-group-label\">4. I have explored circulating my resume to as many contacts as possible</label>\n          <mat-radio-group\n          aria-labelledby=\"example-radio-group-label\"\n          class=\"example-radio-group\" formControlName=\"isExpRes\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <label id=\"example-radio-group-label\">5. I have prepared for possible interview sessions</label>\n          <mat-radio-group\n          aria-labelledby=\"example-radio-group-label\"\n          class=\"example-radio-group\" formControlName=\"isExpPre\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <label id=\"example-radio-group-label\">6. I have identified five target companies that I have to send my resume to them</label>\n          <mat-radio-group\n          aria-labelledby=\"example-radio-group-label\"\n          class=\"example-radio-group\" formControlName=\"isExpTar\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"sixthFormGroup\">\n    <form [formGroup]=\"sixthFormGroup\">\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\">\n          <mat-card-header class=\"cardHeader\">\n              Motivation/ initiative\n          </mat-card-header>\n        <mat-card-content>\n            <hr>\n          <label id=\"example-radio-group-label\">You are given 15 seconds; how many times can you tab on the right arrow key?</label>\n          <mat-radio-group\n          aria-labelledby=\"example-radio-group-label\"\n          class=\"example-radio-group\" formControlName=\"ExpCount\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of Kc\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n\n        <label>Check Now your current speed!</label>\n        <app-key-count (messageEvent)=\"receiveMessage($event)\"></app-key-count>\n                      <input\n                        name=\"keySp\"\n                        type=\"text\" readonly=\"readonly\"\n                        style=\"width: 50%; margin-left: 30px;\"\n                        id=\"keySp\"\n                        value=\"{{count}}\"\n                        formControlName=\"keySp\"\n                      />\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"seventhFormGroup\">\n      <form [formGroup]=\"seventhFormGroup\">\n        <ng-template matStepLabel></ng-template>\n        <mat-card class=\"example-card\">\n            <mat-card-header class=\"cardHeader\">\n                Memory Test\n            </mat-card-header>\n          <mat-card-content>\n              <hr>\n            <label id=\"example-radio-group-label\">Click on button see the image!</label><br>\n            <button type=\"button\" class=\"btn\" [hidden]=\"clicked1\"\n            (click)=\"clicked1=!clicked1; img1=false; counter1.start();\">Show</button>\n            <span [hidden]=\"!span1\">How many red dot is there?<br> </span>\n            <img  src=\"../../../assets/images/mem1.jpg\" [hidden]=\"img1\" width=\"50%\" height=\"15%\"/>\n            <input [hidden]=\"!span1\"\n            name=\"redDot\"\n            type=\"text\"\n            style=\"width: 50%; margin-left: 30px;\"\n            id=\"redDot\"\n            formControlName=\"redDot\"\n          />\n\n            <br>\n            <label id=\"example-radio-group-label\">Click on button see the image!</label><br>\n            <button type=\"button\" class=\"btn\" [hidden]=\"clicked2\"\n            (click)=\"clicked2=!clicked2; img2=false; counter2.start();\">Show</button>\n            <span [hidden]=\"!span2\">Can you write down the numbers from the image?<br> </span>\n            <img  src=\"../../../assets/images/mem2.png\" [hidden]=\"img2\" width=\"50%\" height=\"15%\"/>\n            <input [hidden]=\"!span2\"\n            name=\"nums\"\n            type=\"text\"\n            style=\"width: 50%; margin-left: 30px;\"\n            id=\"nums\"\n            formControlName=\"nums\"\n          />\n\n        <div>\n          <button mat-button matStepperNext>Next</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n      </form>\n    </mat-step>\n    <mat-step [stepControl]=\"eighthFormGroup\">\n        <form [formGroup]=\"eighthFormGroup\">\n          <ng-template matStepLabel></ng-template>\n          <mat-card class=\"example-card\">\n              <mat-card-header class=\"cardHeader\">\n                  Match with you\n              </mat-card-header>\n            <mat-card-content>\n                <hr>\n                <mat-form-field>\n                    <mat-label>What describe you best?</mat-label>\n                    <mat-select formControlName=\"desc\">\n                      <mat-option *ngFor=\"let item of lst\" [value]=\"item\">\n                        {{item}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n          <div>\n            <button mat-button matStepperNext>Next</button>\n          </div>\n        </mat-card-content>\n      </mat-card>\n        </form>\n      </mat-step>\n\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    You are now done.\n    <div>\n\n      <button mat-button (click)=\"submit()\">Submit</button>\n    </div>\n  </mat-step>\n</mat-horizontal-stepper>\n"

/***/ }),

/***/ "./src/app/survey/survey-q/survey-q.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/survey/survey-q/survey-q.component.ts ***!
  \*******************************************************/
/*! exports provided: SurveyQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQComponent", function() { return SurveyQComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../time-q/time-q.component */ "./src/app/survey/time-q/time-q.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_models_ans1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/ans1 */ "./src/app/models/ans1.ts");










var SurveyQComponent = /** @class */ (function () {
    function SurveyQComponent(_formBuilder, activatedRoute, flashMessage, surveyService, authService, router) {
        this._formBuilder = _formBuilder;
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.surveyService = surveyService;
        this.authService = authService;
        this.router = router;
        this.isLinear = false;
        this.clicked1 = false;
        this.clicked2 = false;
        this.img1 = true;
        this.img2 = true;
        this.span1 = false;
        this.span2 = false;
        this.TFs = ['Yes', 'No'];
        this.Yrs = ['less than 1 years', '1-3 years', '3-5 years', 'more than 5 years'];
        this.Res = ['PR', 'Citizen', 'Student', 'Work Permit'];
        this.Kc = ['30', '40', '50', 'More than 80'];
        this.lst = ['A people’s person', 'A number cruncher', 'Self motivated',
            'An effective communicator', 'Analytical', 'Negotiator', 'Organized and following procedures'];
        this.counterState = 'counter is ticking';
        this.count = 0;
    }
    SurveyQComponent.prototype.receiveMessage = function ($event) {
        this.count = $event;
    };
    SurveyQComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ans1 = new src_app_models_ans1__WEBPACK_IMPORTED_MODULE_8__["Ans1"]();
        this.counter1.startAt = 7;
        this.counter1.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.img1 = true;
                _this.span1 = true;
            }
        });
        this.counter2.startAt = 7;
        this.counter2.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.img2 = true;
                _this.span2 = true;
            }
        });
        this.counter.startAt = 180;
        this.counter.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.counterState = 'counter has stopped';
                console.log('calling submit');
                // submit here
                _this.submit();
            }
        });
        this.firstFormGroup = this._formBuilder.group({
            NameCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
    };
    SurveyQComponent.prototype.start = function () {
        this.counter.start();
    };
    SurveyQComponent.prototype.submit = function () {
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
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('counter', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_3__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_3__["TimeQComponent"])
    ], SurveyQComponent.prototype, "counter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('counter1', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_3__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_3__["TimeQComponent"])
    ], SurveyQComponent.prototype, "counter1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('counter2', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_3__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_3__["TimeQComponent"])
    ], SurveyQComponent.prototype, "counter2", void 0);
    SurveyQComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-q',
            template: __webpack_require__(/*! ./survey-q.component.html */ "./src/app/survey/survey-q/survey-q.component.html"),
            styles: [__webpack_require__(/*! ./survey-q.component.css */ "./src/app/survey/survey-q/survey-q.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_6__["SurveyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SurveyQComponent);
    return SurveyQComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-q1/survey-q1.component.css":
/*!**********************************************************!*\
  !*** ./src/app/survey/survey-q1/survey-q1.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-radio-group {\r\n\r\n  margin: 15px 0;\r\n  display: flex; flex-direction: row; padding: 4px 0;\r\n}\r\n\r\n.example-radio-button {\r\n  margin: 5px; padding: 2px 10px;\r\n}\r\n\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 80%;\r\n}\r\n\r\n.example-card {\r\n\r\n  width:60%;\r\n}\r\n\r\n.counter-wrapper {\r\n  width: 200px;\r\n  height: 50px;\r\n  float: right;\r\n  background-color: #c2c2c2;\r\n  font-size: 2rem;\r\n  text-align: right;\r\n   align-items: right;\r\n}\r\n\r\n.cardHeader{ text-align: center; font-size: 2vw}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L3N1cnZleS1xMS9zdXJ2ZXktcTEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxjQUFjO0VBQ2QsYUFBYSxFQUFFLG1CQUFtQixFQUFFLGNBQWM7QUFDcEQ7O0FBRUE7RUFDRSxXQUFXLEVBQUUsaUJBQWlCO0FBQ2hDOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBQ0E7O0VBRUUsU0FBUztBQUNYOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7R0FDaEIsa0JBQWtCO0FBQ3JCOztBQUVBLGFBQWEsa0JBQWtCLEVBQUUsY0FBYyIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9zdXJ2ZXktcTEvc3VydmV5LXExLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1yYWRpby1ncm91cCB7XHJcblxyXG4gIG1hcmdpbjogMTVweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiByb3c7IHBhZGRpbmc6IDRweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbjogNXB4OyBwYWRkaW5nOiAycHggMTBweDtcclxufVxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLmV4YW1wbGUtY2FyZCB7XHJcblxyXG4gIHdpZHRoOjYwJTtcclxufVxyXG4uY291bnRlci13cmFwcGVyIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2FyZEhlYWRlcnsgdGV4dC1hbGlnbjogY2VudGVyOyBmb250LXNpemU6IDJ2d31cclxuIl19 */"

/***/ }),

/***/ "./src/app/survey/survey-q1/survey-q1.component.html":
/*!***********************************************************!*\
  !*** ./src/app/survey/survey-q1/survey-q1.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br>\n<h1> Readiness to Engage in Employment – Questionnaire </h1>\n<h4>   <div class=\"counter-wrapper\">\n    <app-time-q #counter></app-time-q>\n    <app-time-q #counter1 style=\"display: none\"></app-time-q>\n    <app-time-q #counter2 style=\"display: none\"></app-time-q>\n    <app-time-q #counter3 style=\"display: none\"></app-time-q>\n  </div><br>\n   </h4>\n<br>\n<form [formGroup]=\"formGroup\">\n    <mat-horizontal-stepper formArrayName=\"formArray\" [linear]=\"true\" #stepper>\n        <mat-step [editable]=\"false\" formGroupName=\"0\" [stepControl]=\"formArray?.get([0])\">\n            <ng-template matStepLabel></ng-template>\n    <mat-card class=\"example-card\"  >\n        <mat-card-header class=\"cardHeader\">\n            General Info\n        </mat-card-header>\n        <mat-card-content>\n<hr>\n\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Name\" name=\"Name\" formControlName=\"NameCtrl\" [(ngModel)]=\"ans1.Name\" required >\n        <mat-error>This field is required</mat-error>\n      </mat-form-field><br>\n      <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Email\" name=\"Email\"formControlName=\"EmailCtrl\"  type=\"email\" required  [(ngModel)]=\"ans1.Email\">\n          <mat-error>This field is required</mat-error>\n        </mat-form-field><br>\n      <mat-form-field>\n        <input matInput placeholder=\"Age\" name=\"Age\" formControlName=\"AgeCtrl\"   [(ngModel)]=\"ans1.Age\">\n      </mat-form-field>\n\n\n      <div>\n        <button mat-button type=\"button\" autofocus matStepperNext (click)=\"start()\">Start Exam</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</mat-step>\n\n  <mat-step editable=\"false\" formGroupName=\"1\" [stepControl]=\"formArray?.get([1])\">\n\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\">\n          <mat-card-header class=\"cardHeader\">\n              Immigration Status\n          </mat-card-header>\n          <mat-card-content>\n              <hr>\n      <label id=\"example-radio-group-label\">1. Are you a visible minority or a new immigrant woman?</label>\n      <mat-radio-group\n        aria-labelledby=\"example-radio-group-label\" name=\"isImi\" #isImi required\n        class=\"example-radio-group\"  [(ngModel)]=\"ans1.isImi\" formControlName=\"isImiCtrl\"\n        >\n        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n          {{item}}\n        </mat-radio-button>\n        <mat-error *ngIf=\"isImi.invalid\">required</mat-error>\n      </mat-radio-group>\n      <div>\n\n        <label id=\"example-radio-group-label\">2. When did you arrived in Canada?</label>\n        <mat-radio-group required\n        aria-labelledby=\"example-radio-group-label\" name=\"isImiYr\"\n        class=\"example-radio-group\"  [(ngModel)]=\"ans1.isImiYr\" formControlName=\"isImiYrCtrl\"\n        >\n        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of Yrs\" [value]=\"item\">\n          {{item}}\n        </mat-radio-button>\n      </mat-radio-group>\n\n\n      <label id=\"example-radio-group-label\">3. Are you able to legally work in Canada?</label>\n      <mat-radio-group required\n      aria-labelledby=\"example-radio-group-label\" name=\"isWork\"  formControlName=\"isWorkCtrl\"\n      class=\"example-radio-group\"  [(ngModel)]=\"ans1.isWork\"\n      >\n      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n        {{item}}\n      </mat-radio-button>\n    </mat-radio-group>\n\n    <label id=\"example-radio-group-label\">4. What is your resident status?</label>\n    <mat-radio-group name=\"Res\" required\n    aria-labelledby=\"example-radio-group-label\" formControlName=\"ResCtrl\"\n    class=\"example-radio-group\"  [(ngModel)]=\"ans1.Res\"\n    >\n    <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of Res\" [value]=\"item\">\n      {{item}}\n    </mat-radio-button>\n  </mat-radio-group>\n\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n  </mat-step>\n  <mat-step editable=\"false\" formGroupName=\"2\" [stepControl]=\"formArray?.get([2])\">\n\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\">\n          <mat-card-header class=\"cardHeader\">\n              Work in Canada\n          </mat-card-header>\n          <mat-card-content>\n              <hr>\n      <label id=\"example-radio-group-label\">1. Have you ever worked in Canada?</label>\n      <mat-radio-group required\n        aria-labelledby=\"example-radio-group-label\" name=\"isWorked\"\n        class=\"example-radio-group\"  [(ngModel)]=\"ans1.isWorked\" formControlName=\"isWorkedCtrl\"\n        >\n        <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n          {{item}}\n        </mat-radio-button>\n      </mat-radio-group>\n      <div>\n\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput required formControlName=\"NoJobsCtrl\" placeholder=\"2. How many jobs have you worked on?\" name=\"NoJobs\"  [(ngModel)]=\"ans1.NoJobs\">\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput required [(ngModel)]=\"ans1.WorkPer\"  formControlName=\"WorkPerCtrl\" name=\"WorkPer\" placeholder=\"3. What is the maximum work period you have worked in a job (months/years)?\" >\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n          <input matInput  [(ngModel)]=\"ans1.jobL\" formControlName=\"jobLCtrl\" name=\"jobL\" placeholder=\"4. Why did you leave your previous job?\" >\n        </mat-form-field><br>\n      <label id=\"example-radio-group-label\">5. Have you done any volunteering jobs in Canada?</label>\n      <mat-radio-group required\n      aria-labelledby=\"example-radio-group-label\" name=\"isVol\" formControlName=\"isVolCtrl\"\n      class=\"example-radio-group\"  [(ngModel)]=\"ans1.isVol\"\n      >\n      <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n        {{item}}\n      </mat-radio-button>\n    </mat-radio-group>\n\n    <mat-form-field class=\"example-full-width\">\n      <input matInput required formControlName=\"VolCtrl\" [(ngModel)]=\"ans1.Vol\" name=\"Vol\" placeholder=\"6. For how long have you done the volunteering Work?\" >\n    </mat-form-field>\n<br>\n\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n\n  </mat-step>\n  <mat-step editable=\"false\" formGroupName=\"3\" [stepControl]=\"formArray?.get([3])\">\n\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\">\n          <mat-card-header class=\"cardHeader\">\n              What type of work interests you?\n          </mat-card-header>\n          <mat-card-content>\n              <hr>\n            <label id=\"example-radio-group-label\">Choose one option for each row</label>\n\n      <mat-radio-group formControlName=\"Work1Ctrl\" required\n        aria-labelledby=\"example-radio-group-label\" name=\"Work1\"\n        class=\"example-radio-group\"  [(ngModel)]=\"ans1.Work1\"\n        >\n        <mat-radio-button class=\"example-radio-button\" value=\"Working alone\" >Working alone</mat-radio-button>\n        <mat-radio-button class=\"example-radio-button\" value=\"Working with people\">Working with people</mat-radio-button>\n      </mat-radio-group>\n      <hr>\n      <mat-radio-group formControlName=\"Work2Ctrl\" required\n      aria-labelledby=\"example-radio-group-label\" name=\"Work2\"\n      class=\"example-radio-group\" [(ngModel)]=\"ans1.Work2\"\n      >\n      <mat-radio-button class=\"example-radio-button\" value=\"Working outdoors\" >Working outdoors</mat-radio-button>\n      <mat-radio-button class=\"example-radio-button\" value=\"Working indoors\" >Working indoors</mat-radio-button>\n    </mat-radio-group><hr>\n    <mat-radio-group formControlName=\"Work3Ctrl\" required\n    aria-labelledby=\"example-radio-group-label\"\n    class=\"example-radio-group\" [(ngModel)]=\"ans1.Work3\" name=\"Work3\"\n    >\n    <mat-radio-button class=\"example-radio-button\" value=\"Working with numbers\">Working with numbers</mat-radio-button>\n    <mat-radio-button class=\"example-radio-button\" value=\"Working with ideas\">Working with ideas</mat-radio-button>\n  </mat-radio-group><hr>\n  <mat-radio-group formControlName=\"Work4Ctrl\"\n  aria-labelledby=\"example-radio-group-label\" required\n  class=\"example-radio-group\" [(ngModel)]=\"ans1.Work4\" name=\"Work4\"\n  >\n  <mat-radio-button class=\"example-radio-button\" value=\"Cleaning and organizing\">Cleaning and organizing </mat-radio-button>\n  <mat-radio-button class=\"example-radio-button\" value=\"Creating new objects\" >Creating new objects</mat-radio-button>\n</mat-radio-group><hr>\n<mat-radio-group formControlName=\"Work5Ctrl\"\naria-labelledby=\"example-radio-group-label\" required\nclass=\"example-radio-group\" [(ngModel)]=\"ans1.Work5\" name=\"Work5\"\n>\n<mat-radio-button class=\"example-radio-button\" value=\"Operating machines\">Operating machines </mat-radio-button>\n<mat-radio-button class=\"example-radio-button\" value=\"Office work\">Office work</mat-radio-button>\n</mat-radio-group><hr>\n<mat-radio-group formControlName=\"Work6Ctrl\" required\naria-labelledby=\"example-radio-group-label\"\nclass=\"example-radio-group\" [(ngModel)]=\"ans1.Work6\" name=\"Work6\"\n>\n<mat-radio-button class=\"example-radio-button\" value=\"perating own business\" >perating own business</mat-radio-button>\n<mat-radio-button class=\"example-radio-button\" value=\"Woking in a company\">Woking in a company</mat-radio-button>\n</mat-radio-group><br>\n<mat-form-field class=\"example-full-width\">\n  <input matInput [(ngModel)]=\"ans1.Interest\" formControlName=\"IntCtrl\" name=\"Interest\" placeholder=\"Mention your career interest\" >\n</mat-form-field>\n<br>\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n\n  </mat-step>\n  <mat-step editable=\"false\" formGroupName=\"4\" [stepControl]=\"formArray?.get([4])\">\n\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\">\n          <mat-card-header class=\"cardHeader\">\n              Attempts made for job\n          </mat-card-header>\n        <mat-card-content>\n            <hr>\n\n          <label id=\"example-radio-group-label\">1. I  have explored job possibilities for me</label>\n          <mat-radio-group required\n          aria-labelledby=\"example-radio-group-label\" name=\"isExpJob\" formControlName=\"isExpJob\"\n          class=\"example-radio-group\" [(ngModel)]=\"ans1.isExpJob\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <label id=\"example-radio-group-label\">2. I have explored possible organizations for me to work</label>\n          <mat-radio-group formControlName=\"isExpOrg\" required\n          aria-labelledby=\"example-radio-group-label\" name=\"isExpOrg\"\n          class=\"example-radio-group\"  [(ngModel)]=\"ans1.isExpOrg\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <label id=\"example-radio-group-label\">3. I have explored interview sessions</label>\n          <mat-radio-group  [(ngModel)]=\"ans1.isExpInt\" required\n          aria-labelledby=\"example-radio-group-label\" formControlName=\"isExpInt\"\n          class=\"example-radio-group\" name=\"isExpInt\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <label id=\"example-radio-group-label\">4. I have explored circulating my resume to as many contacts as possible</label>\n          <mat-radio-group  [(ngModel)]=\"ans1.isExpRes\" name=\"isExpRes\" formControlName=\"isExpRes\"\n          aria-labelledby=\"example-radio-group-label\" required\n          class=\"example-radio-group\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <label id=\"example-radio-group-label\">5. I have prepared for possible interview sessions</label>\n          <mat-radio-group  [(ngModel)]=\"ans1.isExpPre\" name=\"isExpPre\" formControlName=\"isExpPre\"\n          aria-labelledby=\"example-radio-group-label\" required\n          class=\"example-radio-group\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n        <label id=\"example-radio-group-label\">6. I have identified five target companies that I have to send my resume to them</label>\n          <mat-radio-group name=\"isExpTar\" formControlName=\"isExpTar\" required\n          aria-labelledby=\"example-radio-group-label\"  [(ngModel)]=\"ans1.isExpTar\"\n          class=\"example-radio-group\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of TFs\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n  </mat-step>\n  <mat-step editable=\"false\" formGroupName=\"5\" [stepControl]=\"formArray?.get([5])\">\n\n      <ng-template matStepLabel></ng-template>\n      <mat-card class=\"example-card\">\n          <mat-card-header class=\"cardHeader\">\n              Motivation/ initiative\n          </mat-card-header>\n        <mat-card-content>\n            <hr>\n          <label id=\"example-radio-group-label\">You are given 15 seconds; how many times can you tab on the right arrow key?</label>\n          <mat-radio-group  (change)=\"selKey=true;\" [disabled]=\"selKey\" required\n          aria-labelledby=\"example-radio-group-label\" name=\"ExpCount\" formControlName=\"ExpCount\"\n          class=\"example-radio-group\"  [(ngModel)]=\"ans1.ExpCount\"\n          >\n          <mat-radio-button class=\"example-radio-button\" *ngFor=\"let item of Kc\" [value]=\"item\">\n            {{item}}\n          </mat-radio-button>\n        </mat-radio-group>\n\n        <label [hidden]=\"!selKey\">Check Now your current speed!</label>\n        <app-key-count (messageEvent)=\"receiveMessage($event)\"></app-key-count>\n                      <input [hidden]=\"!selKey\"\n                        name=\"keySp\"\n                        type=\"text\" readonly=\"readonly\"\n                        style=\"width: 50%; margin-left: 30px;\"\n                        id=\"keySp\"\n                        value=\"{{count}}\"\n                        [(ngModel)]=\"ans1.keySp\"\n                        formControlName=\"keySp\"\n                      />\n      <div>\n        <button mat-button type=\"button\" matStepperNext>Next</button>\n      </div>\n    </mat-card-content>\n  </mat-card>\n\n  </mat-step>\n  <mat-step editable=\"false\" formGroupName=\"6\" [stepControl]=\"formArray?.get([6])\">\n\n        <ng-template matStepLabel></ng-template>\n        <mat-card class=\"example-card\">\n            <mat-card-header class=\"cardHeader\">\n                Memory Test\n            </mat-card-header>\n          <mat-card-content>\n              <hr>\n            <label id=\"example-radio-group-label\">Click on button see the image of dots. please count the dots by color.!</label><br>\n            <button type=\"button\" class=\"btn\" [hidden]=\"clicked1\"\n            (click)=\"clicked1=!clicked1; img1=false; counter1.start();\">Show</button>\n            <span [hidden]=\"!span1\">How many red dot is there?<br> </span>\n            <img  src=\"../../../assets/images/mem1.jpg\" [hidden]=\"img1\" width=\"50%\" height=\"15%\"/>\n            <input [hidden]=\"!span1\"\n            name=\"redDot\"\n            type=\"text\"\n            style=\"width: 50%; margin-left: 30px;\"\n            id=\"redDot\"\n            [(ngModel)]=\"ans1.redDot\"\n            formControlName=\"redDot\"\n          />\n\n            <br>\n            <label id=\"example-radio-group-label\">Click on button see the image! Please read all the numbers from image.</label><br>\n            <button type=\"button\" class=\"btn\" [hidden]=\"clicked2\"\n            (click)=\"clicked2=!clicked2; img2=false; counter2.start();\">Show</button>\n            <span [hidden]=\"!span2\">Can you write down the numbers from the image?<br> </span>\n            <img  src=\"../../../assets/images/mem2.png\" [hidden]=\"img2\" width=\"50%\" height=\"15%\"/>\n            <input [hidden]=\"!span2\"\n            name=\"nums\"\n            type=\"text\"\n            style=\"width: 50%; margin-left: 30px;\"\n            id=\"nums\"\n            [(ngModel)]=\"ans1.nums\"\n            formControlName=\"nums\"\n          />\n          <br>\n          <label id=\"example-radio-group-label\">Click on button see the questions!</label><br>\n          <button type=\"button\" class=\"btn\" [hidden]=\"clicked3\"\n          (click)=\"clicked3=!clicked3; img3=false; counter3.start(); genN();\">Show</button>\n          <label [hidden]=\"img3\">{{random1}} {{random2}} {{random3}} {{random4}}</label>\n          <span [hidden]=\"!span3\">Can you write down the numbers which has shown?<br> </span>\n          <input [hidden]=\"!span3\"\n          name=\"num1Typed\"\n          type=\"text\"\n          style=\"width: 50%; margin-left: 30px;\"\n          id=\"num1Typed\"\n          [(ngModel)]=\"ans1.num1Typed\"\n          formControlName=\"num1Typed\"\n        />\n\n        <div>\n          <button mat-button type=\"button\" matStepperNext>Next</button>\n        </div>\n      </mat-card-content>\n    </mat-card>\n\n    </mat-step>\n    <mat-step formGroupName=\"7\" [stepControl]=\"formArray?.get([7])\">\n\n          <ng-template matStepLabel></ng-template>\n          <mat-card class=\"example-card\">\n              <mat-card-header class=\"cardHeader\">\n                  Match with you\n              </mat-card-header>\n            <mat-card-content>\n                <hr>\n                <mat-form-field>\n                    <mat-label>What describe you best?</mat-label>\n                    <mat-select  [(ngModel)]=\"ans1.desc\" name=\"desc\" required formControlName=\"desc\" >\n                      <mat-option *ngFor=\"let item of lst\" [value]=\"item\">\n                        {{item}}\n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n          <div>\n              <button mat-button type=\"button\"  (click)=\"submit()\">Submit</button>\n          </div>\n        </mat-card-content>\n      </mat-card>\n\n      </mat-step>\n\n\n</mat-horizontal-stepper>\n</form>\n"

/***/ }),

/***/ "./src/app/survey/survey-q1/survey-q1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/survey/survey-q1/survey-q1.component.ts ***!
  \*********************************************************/
/*! exports provided: SurveyQ1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQ1Component", function() { return SurveyQ1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_models_ans1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/ans1 */ "./src/app/models/ans1.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../time-q/time-q.component */ "./src/app/survey/time-q/time-q.component.ts");
/* harmony import */ var src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);










var SurveyQ1Component = /** @class */ (function () {
    function SurveyQ1Component(_formBuilder, activatedRoute, flashMessage, surveyService, authService, router) {
        this._formBuilder = _formBuilder;
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.surveyService = surveyService;
        this.authService = authService;
        this.router = router;
        this.clicked1 = false;
        this.clicked2 = false;
        this.clicked3 = false;
        this.img1 = true;
        this.img2 = true;
        this.img3 = true;
        this.span1 = false;
        this.span2 = false;
        this.span3 = false;
        this.selKey = false;
        this.startExam = false;
        this.TFs = ['Yes', 'No'];
        this.Yrs = ['less than 1 years', '1-3 years', '3-5 years', 'more than 5 years'];
        this.Res = ['PR', 'Citizen', 'Student', 'Work Permit'];
        this.Kc = ['30', '40', '50', 'More than 80'];
        this.lst = ['A people’s person', 'A number cruncher', 'Self motivated',
            'An effective communicator', 'Analytical', 'Negotiator', 'Organized and following procedures'];
        this.counterState = 'counter is ticking';
        this.count = 0;
    }
    Object.defineProperty(SurveyQ1Component.prototype, "formArray", {
        /** Returns a FormArray with the name 'formArray'. */
        get: function () { return this.formGroup.get('formArray'); },
        enumerable: true,
        configurable: true
    });
    SurveyQ1Component.prototype.receiveMessage = function ($event) {
        this.count = $event;
    };
    SurveyQ1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.ans1 = new src_app_models_ans1__WEBPACK_IMPORTED_MODULE_2__["Ans1"]();
        this.counter1.startAt = 7;
        this.counter1.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.img1 = true;
                _this.span1 = true;
            }
        });
        this.counter2.startAt = 7;
        this.counter2.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.img2 = true;
                _this.span2 = true;
            }
        });
        this.counter3.startAt = 7;
        this.counter3.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.img3 = true;
                _this.span3 = true;
            }
        });
        this.counter.startAt = 180;
        this.counter.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.counterState = 'counter has stopped';
                console.log('calling submit');
                // submit here
                _this.submit();
            }
        });
        this.formGroup = this._formBuilder.group({
            formArray: this._formBuilder.array([
                this._formBuilder.group({
                    NameCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    EmailCtrl: [''],
                    AgeCtrl: ['']
                }),
                this._formBuilder.group({
                    isImiCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    isImiYrCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    isWorkCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    ResCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                }),
                this._formBuilder.group({
                    isWorkedCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    NoJobsCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    WorkPerCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    jobLCtrl: [''],
                    isVolCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    VolCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                }),
                this._formBuilder.group({
                    Work1Ctrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    Work2Ctrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    Work3Ctrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    Work4Ctrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    Work5Ctrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    Work6Ctrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    IntCtrl: ['']
                }),
                this._formBuilder.group({
                    isExpJob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    isExpOrg: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    isExpInt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    isExpRes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    isExpPre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                    isExpTar: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
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
                    desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
                }),
            ])
        });
    };
    SurveyQ1Component.prototype.start = function () {
        this.counter.start();
        this.startExam = true;
    };
    SurveyQ1Component.prototype.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    SurveyQ1Component.prototype.genN = function () {
        this.random1 = this.randomInt(1, 20);
        this.random2 = this.randomInt(20, 40);
        this.random3 = this.randomInt(40, 60);
        this.random4 = this.randomInt(60, 80);
        //console.log( this.random1 +' '+ this.random2+ ' '+this.random3+ ' '+this.random4);
    };
    SurveyQ1Component.prototype.submit = function () {
        var _this = this;
        console.log('read all data');
        console.log(this.ans1);
        this.ans1.keySp = this.count.toString();
        this.ans1.num1Shown = this.random1 + ' ' + this.random2 + ' ' + this.random3 + ' ' + this.random4;
        this.surveyService.addAns1(this.ans1).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeOut: 3000
                });
                _this.router.navigate(['/survey/submit']);
            }
            else {
                _this.flashMessage.show('Add Contact Failed', {
                    cssClass: 'alert-danger',
                    timeOut: 3000
                });
                _this.router.navigate(['/survey/list']);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('counter', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_4__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_4__["TimeQComponent"])
    ], SurveyQ1Component.prototype, "counter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('counter1', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_4__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_4__["TimeQComponent"])
    ], SurveyQ1Component.prototype, "counter1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('counter2', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_4__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_4__["TimeQComponent"])
    ], SurveyQ1Component.prototype, "counter2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('counter3', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_4__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_4__["TimeQComponent"])
    ], SurveyQ1Component.prototype, "counter3", void 0);
    SurveyQ1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-q1',
            template: __webpack_require__(/*! ./survey-q1.component.html */ "./src/app/survey/survey-q1/survey-q1.component.html"),
            styles: [__webpack_require__(/*! ./survey-q1.component.css */ "./src/app/survey/survey-q1/survey-q1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesService"],
            src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SurveyQ1Component);
    return SurveyQ1Component;
}());



/***/ }),

/***/ "./src/app/survey/survey-questions/survey-questions.component.css":
/*!************************************************************************!*\
  !*** ./src/app/survey/survey-questions/survey-questions.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".questions{\n\n  font-family: 'Nanum Gothic', sans-serif;\n}\n.btn{\n  width: 150px;\n  margin-right: 10px;\n  margin-top: 10px;\n}\n.cardp{\n  padding-bottom: 30px;\n  padding-top: 30px;\n\n}\n* {\n  font-family: Lato;\n}\n.counter-wrapper {\n  width: 200px;\n  height: 50px;\n  float: right;\n  background-color: #c2c2c2;\n  font-size: 2rem;\n  text-align: right;\n   align-items: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L3N1cnZleS1xdWVzdGlvbnMvc3VydmV5LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7O0FBRW5CO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0dBQ2hCLGtCQUFrQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9zdXJ2ZXktcXVlc3Rpb25zL3N1cnZleS1xdWVzdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWVzdGlvbnN7XG5cbiAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xufVxuLmJ0bntcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2FyZHB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcblxufVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbi5jb3VudGVyLXdyYXBwZXIge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJjMmMyO1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgYWxpZ24taXRlbXM6IHJpZ2h0O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/survey/survey-questions/survey-questions.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/survey/survey-questions/survey-questions.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n<\nBrief Description: Content of Questions for Survey Page-->\n\n<br />\n<div class=\"container questions\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1>{{ survey.surveyTitle }}  </h1>\n      <h4>   <div class=\"counter-wrapper\">\n          <app-time-q #counter></app-time-q>\n          <app-time-q #counter1 style=\"display: none\"></app-time-q>\n          <app-time-q #counter2 style=\"display: none\"></app-time-q>\n        </div><br>\n         </h4>\n\n      <br />\n\n      <form class=\"form\" (submit)=\"onSurveySubmit()\">\n\n          <!-- <ul class=\"nav nav-tabs\" *ngFor=\"let section of sections; let j = index\">\n              <li ><a href=\"tab{{section.sectionN}}\" data-toggle=\"tab\">{{section.sectionHeader}}</a></li>\n          </ul> -->\n        <div *ngFor=\"let question of questions; let i = index\" class=\"card border-primary lg-3\">\n          <div class=\"card-header\">{{ i + 1 }}) {{ question.question }}</div>\n          <div class=\"card-text\">\n              <ul class=\"list-group list-group-flush\">\n                  <li class=\"list-group-item\" *ngIf=\"question.questionType === 3\">\n                      <app-key-count (messageEvent)=\"receiveMessage($event)\"></app-key-count>\n                      <input\n                        name=\"mike{{ i }}\"\n                        type=\"text\" readonly=\"readonly\"\n                        style=\"width: 50%; margin-left: 30px;\"\n                        id=\"{{ answers[i] }}\"\n\n                        value=\"{{count}}\"\n                        [(ngModel)]=\"answers[i].answer\"\n                      />\n\n                     <br />\n\n                    </li>\n                    <li class=\"list-group-item\" *ngIf=\"question.questionType === 6\">\n                        <button type=\"button\" class=\"btn\" [hidden]=\"clicked1\"\n                        (click)=\"clicked1=!clicked1; img1=false; counter1.start();\">Show</button>\n                        <span [hidden]=\"!span1\">{{question.dynamicQ}}<br> </span>\n                        <img  src=\"{{question.image}}\" [hidden]=\"img1\" width=\"50%\" height=\"15%\"/>\n\n\n\n                        <br />\n\n                       </li>\n                       <li class=\"list-group-item\" *ngIf=\"question.questionType === 7\">\n                          <button type=\"button\" class=\"btn\" [hidden]=\"clicked2\"\n                          (click)=\"clicked2=!clicked2; img2=false; counter2.start();\">Show</button>\n                          <span [hidden]=\"!span2\">{{question.dynamicQ}}</span><br>\n                          <img id=\"img2\" src=\"{{question.image}}\" [hidden]=\"img2\" width=\"50%\" height=\"30%\"/>\n\n\n                          <br />\n\n                         </li>\n                  <li class=\"list-group-item\" *ngIf=\"question.option1\">\n              <input\n                name=\"mike{{ i }}\"\n                type=\"radio\"\n                id=\"{{ answers[i] }}\"\n                [(ngModel)]=\"answers[i].answer\"\n                value=\"1\"\n              />\n              {{ question.option1 }}<br />\n                  </li>\n                  <li class=\"list-group-item\" *ngIf=\"question.option2\">\n              <input\n                name=\"mike{{ i }}\"\n                type=\"radio\"\n                id=\"{{ answers[i] }}\"\n                [(ngModel)]=\"answers[i].answer\"\n                value=\"2\"\n              />\n              {{ question.option2 }}<br />\n                  </li>\n                  <li class=\"list-group-item\" *ngIf=\"question.option3\">\n\n              <input\n                name=\"mike{{ i }}\"\n                type=\"radio\"\n                id=\"{{ answers[i] }}\"\n                [(ngModel)]=\"answers[i].answer\"\n                value=\"3\"\n              />\n              {{ question.option3 }}<br />\n\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"question.option4\">\n\n              <input\n                name=\"mike{{ i }}\"\n                type=\"radio\"\n                id=\"{{ answers[i] }}\"\n                [(ngModel)]=\"answers[i].answer\"\n                value=\"4\"\n              />\n              {{ question.option4 }}<br />\n\n            </li>\n            <li class=\"list-group-item\" *ngIf=\"question.questionType === 2 || question.questionType === 7\">\n                <input\n                  name=\"mike{{ i }}\"\n                  type=\"text\"\n                  style=\"width: 50%; margin-left: 30px;\"\n                  id=\"{{ answers[i] }}\"\n                  [(ngModel)]=\"answers[i].answer\"\n                />\n               <br />\n\n              </li>\n              <li class=\"list-group-item\" *ngIf=\"question.questionType === 5\">\n                <select  id=\"{{ answers[i] }}\"  name=\"mike{{ i }}\"\n                style=\"width: 50%; margin-left: 30px;\"\n                [(ngModel)]=\"answers[i].answer\"\n                >\n                <option *ngFor=\"let item of question.list\" [value]=\"item\">{{ item }}</option>\n              </select>\n\n                 <br />\n\n                </li>\n\n          </ul>\n          </div>\n\n        </div>\n\n        <div class=\"container row\">\n          <button type=\"submit\" class=\"btn btn-primary\">\n            Submit Survey\n          </button>\n\n          <a routerLink=\"/survey/list\" class=\"btn btn-warning margin-left\">\n            Cancel</a\n          >\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/survey/survey-questions/survey-questions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/survey/survey-questions/survey-questions.component.ts ***!
  \***********************************************************************/
/*! exports provided: SurveyQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionsComponent", function() { return SurveyQuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/answer */ "./src/app/models/answer.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_models_survey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/survey */ "./src/app/models/survey.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_models_filled_survey__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/filled-survey */ "./src/app/models/filled-survey.ts");
/* harmony import */ var _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../time-q/time-q.component */ "./src/app/survey/time-q/time-q.component.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
// Brief Description: Functionality for storing questions filled by the user for new surveys.











var SurveyQuestionsComponent = /** @class */ (function () {
    function SurveyQuestionsComponent(activatedRoute, flashMessage, surveyService, authService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.surveyService = surveyService;
        this.authService = authService;
        this.router = router;
        this.clicked1 = false;
        this.clicked2 = false;
        this.img1 = true;
        this.img2 = true;
        this.span1 = false;
        this.span2 = false;
        this.counterState = 'counter is ticking';
        this.count = 0;
    }
    SurveyQuestionsComponent.prototype.receiveMessage = function ($event) {
        this.count = $event;
    };
    SurveyQuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filledSurvey = new src_app_models_filled_survey__WEBPACK_IMPORTED_MODULE_9__["FilledSurvey"]();
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
        this.questions = new Array();
        this.answers = new Array();
        this.title = this.activatedRoute.snapshot.data.title;
        this.survey = new src_app_models_survey__WEBPACK_IMPORTED_MODULE_7__["Survey"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.survey._id = params.id;
        });
        this.counter1.startAt = 7;
        this.counter1.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.img1 = true;
                _this.span1 = true;
            }
        });
        this.counter2.startAt = 7;
        this.counter2.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.img2 = true;
                _this.span2 = true;
            }
        });
        this.getSurvey(this.survey);
        this.counter.startAt = 180;
        this.counter.counterState.subscribe(function (msg) {
            if (msg === 'COMPLETE') {
                _this.counterState = 'counter has stopped';
                console.log('calling submit');
                // submit here
                _this.onSurveySubmit();
            }
        });
        this.counter.start();
    };
    /* onKeyPress(event: any); {
        console.log(event);
      } */
    SurveyQuestionsComponent.prototype.getSurvey = function (survey) {
        var _this = this;
        this.surveyService.getSurvey(survey).subscribe(function (data) {
            _this.survey = data.survey;
            _this.sections = data.survey.sections;
            _this.questions = _this.survey.questions;
            console.log('test' + _this.questions.length);
            for (var index = 0; index < _this.questions.length; index++) {
                var answer = new _models_answer__WEBPACK_IMPORTED_MODULE_1__["Answer"]();
                answer.question = _this.questions[index].question;
                _this.answers[index] = answer;
            }
        });
    };
    SurveyQuestionsComponent.prototype.onSurveySubmit = function () {
        var _this = this;
        console.log('inside submit');
        this.filledSurvey.userName = this.user.username;
        this.filledSurvey.answers = this.answers;
        this.filledSurvey.surveyId = this.survey._id;
        this.filledSurvey.surveyCompletionDate = new Date();
        this.surveyService.addFilledSurvey(this.filledSurvey).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-success',
                    timeOut: 3000
                });
                _this.router.navigate(['/survey/list']);
            }
            else {
                _this.flashMessage.show('Add Contact Failed', {
                    cssClass: 'alert-danger',
                    timeOut: 3000
                });
                _this.router.navigate(['/survey/list']);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('counter', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_10__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_10__["TimeQComponent"])
    ], SurveyQuestionsComponent.prototype, "counter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('counter1', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_10__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_10__["TimeQComponent"])
    ], SurveyQuestionsComponent.prototype, "counter1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('counter2', { read: _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_10__["TimeQComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _time_q_time_q_component__WEBPACK_IMPORTED_MODULE_10__["TimeQComponent"])
    ], SurveyQuestionsComponent.prototype, "counter2", void 0);
    SurveyQuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-survey-questions',
            template: __webpack_require__(/*! ./survey-questions.component.html */ "./src/app/survey/survey-questions/survey-questions.component.html"),
            styles: [__webpack_require__(/*! ./survey-questions.component.css */ "./src/app/survey/survey-questions/survey-questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SurveyQuestionsComponent);
    return SurveyQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-r1/survey-r1.component.css":
/*!**********************************************************!*\
  !*** ./src/app/survey/survey-r1/survey-r1.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9zdXJ2ZXktcjEvc3VydmV5LXIxLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/survey/survey-r1/survey-r1.component.html":
/*!***********************************************************!*\
  !*** ./src/app/survey/survey-r1/survey-r1.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Response of Users</h1>\n<a [routerLink]=\"\" (click)=\"download()\" >Download</a><br>\n<textarea style=\"width:60%\" rows=\"5\">{{ output }} </textarea>\n"

/***/ }),

/***/ "./src/app/survey/survey-r1/survey-r1.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/survey/survey-r1/survey-r1.component.ts ***!
  \*********************************************************/
/*! exports provided: SurveyR1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyR1Component", function() { return SurveyR1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var _node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







var SurveyR1Component = /** @class */ (function () {
    function SurveyR1Component(activatedRoute, flashMessage, surveyService, authService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.surveyService = surveyService;
        this.authService = authService;
        this.router = router;
    }
    SurveyR1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.ans1s = new Array();
        this.output = 'Results:\r\n';
        this.surveyService.getAnsList().subscribe(function (data) {
            if (data.success) {
                _this.ans1s = data.contactList;
                //prepare result
                var i_1 = 1;
                _this.ans1s.forEach(function (item) {
                    if (item.isWork === 'Yes') {
                        var sp = +item.keySp;
                        if ((item.Work4.startsWith('Cleaning')) &&
                            (item.Work2.endsWith('indoors')) &&
                            (item.Work6.endsWith('company')) &&
                            (item.Work3.endsWith('numbers')) &&
                            (item.Work5.startsWith('Office')) &&
                            sp > 21) {
                            _this.output += i_1 + '. Name:' + item.Name + ',' + item.Email + ', Administrative jobs;\r\n';
                            console.log(item.isWork + i_1++);
                        }
                        else if ((item.Work4.startsWith('Cleaning')) &&
                            (item.Work6.endsWith('company')) &&
                            (item.Work3.endsWith('ideas')) &&
                            (item.Work1.endsWith('people')) &&
                            sp > 51) {
                            _this.output += i_1 + '. Name:' + item.Name + ',' + item.Email + ', Digital Marketing;\r\n';
                            console.log(item.isWork + i_1++);
                        }
                    }
                });
            }
            else {
                _this.flashMessage.show('some error', { cssClass: 'alert-danger', timeOut: 3000 });
            }
        });
        console.log(this.output);
    };
    SurveyR1Component.prototype.download = function () {
        this.downloadFile(this.ans1s);
    };
    SurveyR1Component.prototype.downloadFile = function (data) {
        var replacer = function (key, value) { return (value === null ? "" : value); }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) {
            return header
                .map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); })
                .join(",");
        });
        csv.unshift(header.join(","));
        var csvArray = csv.join("\r\n");
        console.log(csvArray);
        var blob = new Blob([csvArray], { type: "text/csv" });
        Object(_node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, "myFile.csv");
    };
    SurveyR1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-r1',
            template: __webpack_require__(/*! ./survey-r1.component.html */ "./src/app/survey/survey-r1/survey-r1.component.html"),
            styles: [__webpack_require__(/*! ./survey-r1.component.css */ "./src/app/survey/survey-r1/survey-r1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SurveyR1Component);
    return SurveyR1Component;
}());



/***/ }),

/***/ "./src/app/survey/survey-result/survey-result.component.css":
/*!******************************************************************!*\
  !*** ./src/app/survey/survey-result/survey-result.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".result{\n    font-family: 'Nanum Gothic', sans-serif;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L3N1cnZleS1yZXN1bHQvc3VydmV5LXJlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQXVDOztBQUUzQyIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9zdXJ2ZXktcmVzdWx0L3N1cnZleS1yZXN1bHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZXN1bHR7XG4gICAgZm9udC1mYW1pbHk6ICdOYW51bSBHb3RoaWMnLCBzYW5zLXNlcmlmO1xuXG59Il19 */"

/***/ }),

/***/ "./src/app/survey/survey-result/survey-result.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/survey/survey-result/survey-result.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Developers:\n       Shila Das (ID# 300969886)\n       Michael Adaikalaraj (ID# 300958145)\n       Nikesh Patel (ID# 300970071)\n       Khushboo Sakervala (ID# 300984318)\n       Gurpreet Kaur (ID# 300989390)\n\n WebApp Name: Poll+\n\nBrief Description: Content of Results of Survey Page-->\n<br />\n<div class=\"container result\">\n  <h1>{{ survey.surveyTitle }}</h1>\n  <a [routerLink]=\"\" (click)=\"download()\" class=\"\">Download</a>\n\n  <hr />\n\n  <div class=\"d-none d-sm-block d-md-block\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <p class=\"font-weight-bold\">Question</p>\n      </div>\n      <div class=\"col-lg-2\">\n        <p class=\"font-weight-bold\">Option1</p>\n      </div>\n      <div class=\"col-lg-2\">\n        <p class=\"font-weight-bold\">Option2</p>\n      </div>\n      <div class=\"col-lg-2\">\n        <p class=\"font-weight-bold\">Option3</p>\n      </div>\n      <div class=\"col-lg-2\">\n        <p class=\"font-weight-bold\">Option4</p>\n      </div>\n    </div>\n  </div>\n\n  <hr />\n\n  <div *ngFor=\"let question of questions; let i = index\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <p class=\"font-weight-bold\">{{ i + 1 }}) {{ question.question }}</p>\n      </div>\n\n      <div class=\"col-lg-2\" *ngIf=\"question.questionType === 1\">\n        <p>({{ option1Count[i] }}) {{ question.option1 }}</p>\n      </div>\n      <div class=\"col-lg-2\" *ngIf=\"question.questionType === 1\">\n        <p>({{ option2Count[i] }}) {{ question.option2 }}</p>\n      </div>\n      <div class=\"col-lg-2\" *ngIf=\"question.questionType === 1\">\n        <p>({{ option3Count[i] }}) {{ question.option3 }}</p>\n      </div>\n      <div class=\"col-lg-2\" *ngIf=\"question.questionType === 1\">\n        <p>({{ option4Count[i] }}) {{ question.option4 }}</p>\n      </div>\n      <div class=\"col-lg-2\" *ngIf=\"question.questionType === 2\">\n          <p>({{ option1Count[i] }}) {{ answers[i].answer }}</p>\n        </div>\n\n    </div>\n    <hr />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/survey/survey-result/survey-result.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/survey/survey-result/survey-result.component.ts ***!
  \*****************************************************************/
/*! exports provided: SurveyResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyResultComponent", function() { return SurveyResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var _node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/survey.service */ "./src/app/services/survey.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_models_survey__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/survey */ "./src/app/models/survey.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
// Developers:
// Shila Das            (ID# 300969886)
// Michael Adaikalaraj  (ID# 300958145)
// Nikesh Patel         (ID# 300970071)
// Khushboo Sakervala   (ID# 300984318)
// Gurpreet Kaur        (ID# 300989390)

// WebApp Name: Poll+
//Brief Description: Functionality for displaying reports of survey








var SurveyResultComponent = /** @class */ (function () {
    function SurveyResultComponent(activatedRoute, flashMessage, surveyService, authService, router) {
        this.activatedRoute = activatedRoute;
        this.flashMessage = flashMessage;
        this.surveyService = surveyService;
        this.authService = authService;
        this.router = router;
    }
    SurveyResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.option1Count = new Array();
        this.option2Count = new Array();
        this.option3Count = new Array();
        this.option4Count = new Array();
        this.filledSurvey = new Array();
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_8__["User"]();
        this.questions = new Array();
        this.answers = new Array();
        this.title = this.activatedRoute.snapshot.data.title;
        this.survey = new src_app_models_survey__WEBPACK_IMPORTED_MODULE_7__["Survey"]();
        this.activatedRoute.params.subscribe(function (params) {
            _this.survey._id = params.id;
        });
        this.getSurvey(this.survey);
    };
    SurveyResultComponent.prototype.download = function () {
        this.downloadFile(this.filledSurvey);
    };
    SurveyResultComponent.prototype.downloadFile = function (data) {
        var replacer = function (key, value) { return (value === null ? "" : value); }; // specify how you want to handle null values here
        var header = Object.keys(data[0]);
        var csv = data.map(function (row) {
            return header
                .map(function (fieldName) { return JSON.stringify(row[fieldName], replacer); })
                .join(",");
        });
        csv.unshift(header.join(","));
        var csvArray = csv.join("\r\n");
        console.log(csvArray);
        var blob = new Blob([csvArray], { type: "text/csv" });
        Object(_node_modules_file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, "myFile.csv");
    };
    SurveyResultComponent.prototype.getSurvey = function (survey) {
        var _this = this;
        this.surveyService.getSurveyAnswers(survey).subscribe(function (data) {
            _this.survey = data.survey;
            _this.filledSurvey = data.answers;
            _this.questions = _this.survey.questions;
            _this.questions.forEach(function (element) {
                _this.option1Count.push(0);
                _this.option2Count.push(0);
                _this.option3Count.push(0);
                _this.option4Count.push(0);
            });
            _this.filledSurvey.forEach(function (element) {
                for (var index = 0; index < element.answers.length; index++) {
                    _this.answers.push(element.answers[index]);
                    switch (element.answers[index].answer) {
                        case "1":
                            _this.option1Count[index] = _this.option1Count[index] + 1;
                            break;
                        case "2":
                            _this.option2Count[index] = _this.option2Count[index] + 1;
                            break;
                        case "3":
                            _this.option3Count[index] = _this.option3Count[index] + 1;
                            break;
                        case "4":
                            _this.option4Count[index] = _this.option4Count[index] + 1;
                            break;
                        default:
                            break;
                    }
                }
            });
            console.log(_this.answers);
        });
    };
    SurveyResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-survey-result",
            template: __webpack_require__(/*! ./survey-result.component.html */ "./src/app/survey/survey-result/survey-result.component.html"),
            styles: [__webpack_require__(/*! ./survey-result.component.css */ "./src/app/survey/survey-result/survey-result.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            src_app_services_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SurveyResultComponent);
    return SurveyResultComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-submit/survey-submit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/survey/survey-submit/survey-submit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1cnZleS9zdXJ2ZXktc3VibWl0L3N1cnZleS1zdWJtaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/survey/survey-submit/survey-submit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/survey/survey-submit/survey-submit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br><br><br>\n<p>\n\n  Your answers submitted successfully\n</p>\n"

/***/ }),

/***/ "./src/app/survey/survey-submit/survey-submit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/survey/survey-submit/survey-submit.component.ts ***!
  \*****************************************************************/
/*! exports provided: SurveySubmitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveySubmitComponent", function() { return SurveySubmitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SurveySubmitComponent = /** @class */ (function () {
    function SurveySubmitComponent() {
    }
    SurveySubmitComponent.prototype.ngOnInit = function () {
    };
    SurveySubmitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-submit',
            template: __webpack_require__(/*! ./survey-submit.component.html */ "./src/app/survey/survey-submit/survey-submit.component.html"),
            styles: [__webpack_require__(/*! ./survey-submit.component.css */ "./src/app/survey/survey-submit/survey-submit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SurveySubmitComponent);
    return SurveySubmitComponent;
}());



/***/ }),

/***/ "./src/app/survey/time-q/time-q.component.css":
/*!****************************************************!*\
  !*** ./src/app/survey/time-q/time-q.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 { font-family: Lato; }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VydmV5L3RpbWUtcS90aW1lLXEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLGlCQUFpQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvc3VydmV5L3RpbWUtcS90aW1lLXEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHsgZm9udC1mYW1pbHk6IExhdG87IH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/survey/time-q/time-q.component.html":
/*!*****************************************************!*\
  !*** ./src/app/survey/time-q/time-q.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"counter-parent\">\n  <span *ngIf=\"currentValue\">Time:{{ currentValue }}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/survey/time-q/time-q.component.ts":
/*!***************************************************!*\
  !*** ./src/app/survey/time-q/time-q.component.ts ***!
  \***************************************************/
/*! exports provided: TimeQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeQComponent", function() { return TimeQComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");






var TimeQComponent = /** @class */ (function () {
    function TimeQComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.startAt = 1;
        this.showTimeRemaining = true;
        this.counterState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.currentValue = '';
    }
    TimeQComponent.prototype.ngOnInit = function () {
    };
    TimeQComponent.prototype.start = function () {
        var _this = this;
        this.currentValue = this.formatValue(this.startAt);
        this.changeDetector.detectChanges();
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000);
        this.currentSubscription = t.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(this.startAt)).map(function (v) { return _this.startAt - (v + 1); }).subscribe(function (v) {
            _this.currentValue = _this.formatValue(v);
            _this.changeDetector.detectChanges();
        }, function (err) {
            _this.counterState.error(err);
        }, function () {
            _this.currentSubscription.unsubscribe();
            _this.currentValue = '00:00';
            _this.counterState.emit('COMPLETE');
            _this.changeDetector.detectChanges();
        });
    };
    TimeQComponent.prototype.formatValue = function (v) {
        var minutes = Math.floor(v / 60);
        var formattedMinutes = '' + (minutes > 9 ? minutes : '0' + minutes);
        var seconds = v % 60;
        var formattedSeconds = '' + (seconds > 9 ? seconds : '0' + seconds);
        return formattedMinutes + ":" + formattedSeconds;
    };
    TimeQComponent.prototype.stop = function () {
        this.currentSubscription.unsubscribe();
        this.counterState.emit('ABORTED');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimeQComponent.prototype, "startAt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimeQComponent.prototype, "showTimeRemaining", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimeQComponent.prototype, "counterState", void 0);
    TimeQComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-time-q',
            template: __webpack_require__(/*! ./time-q.component.html */ "./src/app/survey/time-q/time-q.component.html"),
            styles: [__webpack_require__(/*! ./time-q.component.css */ "./src/app/survey/time-q/time-q.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], TimeQComponent);
    return TimeQComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\od\OneDrive - Centennial College\All Project\ETProject\project\pollplus\pollplus-Michael\pollplus-Michael\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map