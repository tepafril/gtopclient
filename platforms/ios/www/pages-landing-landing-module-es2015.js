(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content force-overscroll=\"false\" class=\"ion-full-screen\">\n  \n  <video class=\"background-video\" autoplay playsinline loop>\n    <source src=\"assets/videos/background-video.mp4\" type=\"video/mp4\">\n    <source src=\"movie.ogg\" type=\"video/ogg\">\n    Your browser does not support animated background.\n  </video>\n\n  <div class=\"page-centered-element\">\n\n    <div class=\"content ion-hide-md-up\">\n      <ion-row>\n        <ion-col>\n          <img style=\"width: 80%;\" src=\"assets/gtop-logo.png\">\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"success\" expand=\"full\" (click)=\"login()\">{{ 'APP.login' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"danger\" expand=\"full\" (click)=\"register()\">{{ 'APP.register' | translate }}</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"primary\" expand=\"full\" (click)=\"forgetpassword()\">{{ 'APP.forgot_password' | translate }}</ion-button>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row>\n        <ion-col>\n          <ion-button fill=\"clear\" color=\"light\" expand=\"full\" (click)=\"chooseLanguage($event)\">{{ 'APP.choose_language' | translate }} &nbsp;&nbsp;&nbsp; <img style=\"height: 18px;\"  src=\"{{ 'APP.flag' | translate }}\"></ion-button>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <div class=\"content ion-hide-sm-down\">\n      <ion-row>\n        <ion-col size=\"4\"></ion-col>\n        <ion-col size=\"4\">\n          <img style=\"width: 80%;\" src=\"assets/gtop-logo.png\">\n        </ion-col>\n        <ion-col size=\"4\"></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"6\">\n          <ion-button color=\"success\" expand=\"full\" (click)=\"login()\">{{ 'APP.login' | translate }}</ion-button>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"3\">\n          <ion-button color=\"danger\" expand=\"full\" (click)=\"register()\">{{ 'APP.register' | translate }}</ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button color=\"primary\" expand=\"full\" (click)=\"forgetpassword()\">{{ 'APP.forgot_password' | translate }}</ion-button>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"6\">\n          <ion-button fill=\"clear\" color=\"light\" expand=\"full\" (click)=\"chooseLanguage($event)\">{{ 'APP.choose_language' | translate }}  &nbsp;&nbsp;&nbsp; <img style=\"height: 18px;\" src=\"{{ 'APP.flag' | translate }}\"></ion-button>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n    </div>\n\n    \n  </div>\n\n  <div class=\"lower-content\">\n    <a class=\"gtop-link\" target=\"_blank\" href=\"https://gtopcambodia.com\">www.gtopcambodia.com</a>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/landing/landing.page.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../login/login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../register/register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var _forgetpassword_forgetpassword_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forgetpassword/forgetpassword.page */ "./src/app/pages/forgetpassword/forgetpassword.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");











const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]
    }
];
let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild()
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"], _login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"], _forgetpassword_forgetpassword_page__WEBPACK_IMPORTED_MODULE_9__["ForgetpasswordPage"]],
        entryComponents: [_login_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"], _register_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"], _forgetpassword_forgetpassword_page__WEBPACK_IMPORTED_MODULE_9__["ForgetpasswordPage"]],
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/pages/landing/landing.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-centered-element {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.content {\n  text-align: center;\n}\n\n.content .buttons-container {\n  margin-top: 30px;\n}\n\n.background-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.lower-content {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  left: 0;\n  right: 0;\n  margin-bottom: 25px;\n}\n\nion-button {\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURDSTtFQUNFLGdCQUFBO0FDQ047O0FER0E7RUFBa0Isa0JBQUE7RUFBa0IsTUFBQTtFQUFNLE9BQUE7RUFBTyxZQUFBO0VBQVksV0FBQTtFQUFXLG9CQUFBO0tBQUEsaUJBQUE7QUNNeEU7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FDT0o7O0FESkE7RUFDSSxvQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWNlbnRlcmVkLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuICBcbi5jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIFxuICAgIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbn1cblxuLmJhY2tncm91bmQtdmlkZW97cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7b2JqZWN0LWZpdDpjb3Zlcn1cblxuLmxvd2VyLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG5pb24tYnV0dG9ue1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufSIsIi5wYWdlLWNlbnRlcmVkLWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmJhY2tncm91bmQtdmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5sb3dlci1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbmlvbi1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/landing/landing.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _register_register_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/register.page */ "./src/app/pages/register/register.page.ts");
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _forgetpassword_forgetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../forgetpassword/forgetpassword.page */ "./src/app/pages/forgetpassword/forgetpassword.page.ts");
/* harmony import */ var _choose_language_choose_language_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../choose-language/choose-language.page */ "./src/app/pages/choose-language/choose-language.page.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");










// import * as firebase from 'firebase/app';
let LandingPage = class LandingPage {
    constructor(modalController, menu, authService, navCtrl, alertService, popoverController, loadingController, languageService) {
        this.modalController = modalController;
        this.menu = menu;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.popoverController = popoverController;
        this.loadingController = loadingController;
        this.languageService = languageService;
        // if (!firebase.apps.length) {
        //   firebase.initializeApp( ENV.FIREBASE );
        // }
    }
    ionViewWillEnter() {
        this.menu.enable(false, "mainMenu");
        this.authService.getToken().then(() => {
            if (this.authService.isLoggedIn) {
                this.presentLoading();
                this.authService.checkPassport().subscribe(res => {
                    this.httpResponse = res;
                }, err => {
                    this.authService.clearToken();
                    this.loading.dismiss();
                }, () => {
                    this.loading.dismiss();
                    this.navCtrl.navigateRoot('/dashboard');
                });
            }
        });
    }
    ngOnInit() {
    }
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const registerModal = yield this.modalController.create({
                component: _register_register_page__WEBPACK_IMPORTED_MODULE_4__["RegisterPage"]
            });
            return yield registerModal.present();
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loginModal = yield this.modalController.create({
                component: _login_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"],
            });
            return yield loginModal.present();
        });
    }
    forgetpassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const forgotPasswordModal = yield this.modalController.create({
                component: _forgetpassword_forgetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgetpasswordPage"],
            });
            return yield forgotPasswordModal.present();
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait',
                duration: 10000
            });
            yield this.loading.present();
        });
    }
    chooseLanguage(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _choose_language_choose_language_page__WEBPACK_IMPORTED_MODULE_7__["ChooseLanguagePage"],
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
};
LandingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"] }
];
LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/landing/landing.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map