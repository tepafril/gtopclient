(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-fuel-fuel-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fuel/fuel.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fuel/fuel.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>fuel</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/fuel/fuel-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/fuel/fuel-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FuelPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPageRoutingModule", function() { return FuelPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fuel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fuel.page */ "./src/app/pages/fuel/fuel.page.ts");




const routes = [
    {
        path: '',
        component: _fuel_page__WEBPACK_IMPORTED_MODULE_3__["FuelPage"]
    }
];
let FuelPageRoutingModule = class FuelPageRoutingModule {
};
FuelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FuelPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/fuel/fuel.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/fuel/fuel.module.ts ***!
  \*******************************************/
/*! exports provided: FuelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPageModule", function() { return FuelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _fuel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fuel-routing.module */ "./src/app/pages/fuel/fuel-routing.module.ts");
/* harmony import */ var _fuel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fuel.page */ "./src/app/pages/fuel/fuel.page.ts");







let FuelPageModule = class FuelPageModule {
};
FuelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fuel_routing_module__WEBPACK_IMPORTED_MODULE_5__["FuelPageRoutingModule"]
        ],
        declarations: [_fuel_page__WEBPACK_IMPORTED_MODULE_6__["FuelPage"]]
    })
], FuelPageModule);



/***/ }),

/***/ "./src/app/pages/fuel/fuel.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/fuel/fuel.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1ZWwvZnVlbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/fuel/fuel.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/fuel/fuel.page.ts ***!
  \*****************************************/
/*! exports provided: FuelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelPage", function() { return FuelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FuelPage = class FuelPage {
    constructor() { }
    ngOnInit() {
    }
};
FuelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fuel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fuel.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/fuel/fuel.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./fuel.page.scss */ "./src/app/pages/fuel/fuel.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FuelPage);



/***/ })

}]);
//# sourceMappingURL=pages-fuel-fuel-module-es2015.js.map