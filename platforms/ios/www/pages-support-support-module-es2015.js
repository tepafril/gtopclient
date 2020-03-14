(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-support-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <div slot=\"start\">\n    <ion-img alt=\"logo\" style=\"height: 28px; width: 90px;\" src=\"assets/gps-logo.png\"></ion-img> \n    </div>\n\n      <ion-title>\n        {{ 'APP.support' | translate }}\n      </ion-title>\n\n      <ion-buttons slot=\"end\">\n        <ion-button routerLink=\"/notification\">\n          <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n    \n  <ion-list class=\"ion-padding\">\n    <ion-item button (click)=\"undercontruction()\">\n    <ion-icon name=\"information-circle\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>\n          {{ 'APP.about_us' | translate }}\n        </h2>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item button (click)=\"undercontruction()\">\n      <ion-icon name=\"chatbox\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>\n          {{ 'APP.feedback' | translate }}\n        </h2>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/support/support-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/support/support-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SupportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function() { return SupportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./support.page */ "./src/app/pages/support/support.page.ts");




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/support/support.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.module.ts ***!
  \*************************************************/
/*! exports provided: SupportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPageModule", function() { return SupportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./support-routing.module */ "./src/app/pages/support/support-routing.module.ts");
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./support.page */ "./src/app/pages/support/support.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let SupportPageModule = class SupportPageModule {
};
SupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _support_routing_module__WEBPACK_IMPORTED_MODULE_5__["SupportPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
    })
], SupportPageModule);



/***/ }),

/***/ "./src/app/pages/support/support.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/support/support.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBvcnQvc3VwcG9ydC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/support/support.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/support/support.page.ts ***!
  \***********************************************/
/*! exports provided: SupportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPage", function() { return SupportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let SupportPage = class SupportPage {
    constructor(loadingController, navCtrl) {
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    undercontruction() {
        alert('Sorry the page is still undercontruction');
    }
};
SupportPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-support',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./support.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./support.page.scss */ "./src/app/pages/support/support.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], SupportPage);



/***/ })

}]);
//# sourceMappingURL=pages-support-support-module-es2015.js.map