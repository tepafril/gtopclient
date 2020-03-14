(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'PROFILE.edit_profile' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"editProfile(form)\" method=\"post\" class=\"ion-padding\">\n    <ion-item>\n      <ion-text color=\"success\">\n        <h5 class=\"ion-text-center\">{{ 'PROFILE.edit_profile_description' | translate }}</h5>\n      </ion-text>\n      <ion-label position=\"floating\">{{ 'PROFILE.phone' | translate }}</ion-label>\n      <ion-input [ngModel]=\"phone\" type=\"text\" name=\"phone\" readonly></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'PROFILE.username' | translate }}</ion-label>\n      <ion-input [ngModel]=\"name\" type=\"text\" name=\"name\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'PROFILE.gender' | translate }}</ion-label>\n      <ion-input [ngModel]=\"gender\" type=\"text\" name=\"gender\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'PROFILE.dob' | translate }}</ion-label>\n      <ion-input [ngModel]=\"dob\" type=\"text\" name=\"dob\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'PROFILE.email' | translate }}</ion-label>\n      <ion-input [ngModel]=\"email\" type=\"email\" name=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"success\" type=\"submit\">{{ 'APP.submit' | translate }}</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function() { return EditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "./src/app/pages/edit-profile/edit-profile-routing.module.ts");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/alert.service */ "./src/app/services/alert.service.ts");





let EditProfilePage = class EditProfilePage {
    constructor(navCtrl, authService, alertService, loadingController) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingController = loadingController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.phone = this.authService.user.phone;
        this.name = this.authService.user.name;
        this.gender = this.authService.user.gender;
        this.dob = this.authService.user.dob;
        this.email = this.authService.user.email;
    }
    goBack() {
        this.navCtrl.navigateBack('dashboard/tabs/profile');
    }
    editProfile(form) {
        let name = form.value.name;
        let gender = form.value.gender;
        let dob = form.value.dob;
        let email = form.value.email;
        this.presentLoading();
        this.authService.editProfile(name, gender, dob, email).subscribe(data => {
            this.httpResponse = data;
        }, err => {
            if (err.error.message) {
                this.alertService.presentToast(err.error.message, "danger");
            }
            else {
                this.alertService.presentToast(err.message, "danger");
            }
            this.loading.dismiss();
        }, () => {
            this.alertService.presentToast(this.httpResponse.message, "success");
            this.name = this.authService.user.name;
            this.gender = this.authService.user.gender;
            this.dob = this.authService.user.dob;
            this.email = this.authService.user.email;
            this.loading.dismiss();
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
};
EditProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es2015.js.map