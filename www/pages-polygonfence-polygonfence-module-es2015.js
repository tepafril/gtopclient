(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-polygonfence-polygonfence-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/polygonfence/polygonfence.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/polygonfence/polygonfence.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'DISARM_PAGE.arm_disarm' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/polygonfence/polygonfence-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/polygonfence/polygonfence-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PolygonfencePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonfencePageRoutingModule", function() { return PolygonfencePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _polygonfence_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polygonfence.page */ "./src/app/pages/polygonfence/polygonfence.page.ts");




const routes = [
    {
        path: '',
        component: _polygonfence_page__WEBPACK_IMPORTED_MODULE_3__["PolygonfencePage"]
    }
];
let PolygonfencePageRoutingModule = class PolygonfencePageRoutingModule {
};
PolygonfencePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PolygonfencePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/polygonfence/polygonfence.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/polygonfence/polygonfence.module.ts ***!
  \***********************************************************/
/*! exports provided: PolygonfencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonfencePageModule", function() { return PolygonfencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _polygonfence_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./polygonfence-routing.module */ "./src/app/pages/polygonfence/polygonfence-routing.module.ts");
/* harmony import */ var _polygonfence_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./polygonfence.page */ "./src/app/pages/polygonfence/polygonfence.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let PolygonfencePageModule = class PolygonfencePageModule {
};
PolygonfencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _polygonfence_routing_module__WEBPACK_IMPORTED_MODULE_5__["PolygonfencePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_polygonfence_page__WEBPACK_IMPORTED_MODULE_6__["PolygonfencePage"]]
    })
], PolygonfencePageModule);



/***/ }),

/***/ "./src/app/pages/polygonfence/polygonfence.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/polygonfence/polygonfence.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvbHlnb25mZW5jZS9wb2x5Z29uZmVuY2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/polygonfence/polygonfence.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/polygonfence/polygonfence.page.ts ***!
  \*********************************************************/
/*! exports provided: PolygonfencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonfencePage", function() { return PolygonfencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let PolygonfencePage = class PolygonfencePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.navigateBack('dashboard/tabs/home');
    }
};
PolygonfencePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PolygonfencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-polygonfence',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./polygonfence.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/polygonfence/polygonfence.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./polygonfence.page.scss */ "./src/app/pages/polygonfence/polygonfence.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PolygonfencePage);



/***/ })

}]);
//# sourceMappingURL=pages-polygonfence-polygonfence-module-es2015.js.map