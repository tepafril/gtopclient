(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trip-detail-trip-detail-module"],{

/***/ "./src/app/pages/trip-detail/trip-detail-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/trip-detail/trip-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TripDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailPageRoutingModule", function() { return TripDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trip_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip-detail.page */ "./src/app/pages/trip-detail/trip-detail.page.ts");




const routes = [
    {
        path: '',
        component: _trip_detail_page__WEBPACK_IMPORTED_MODULE_3__["TripDetailPage"]
    }
];
let TripDetailPageRoutingModule = class TripDetailPageRoutingModule {
};
TripDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TripDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/trip-detail/trip-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/trip-detail/trip-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: TripDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailPageModule", function() { return TripDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _trip_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trip-detail-routing.module */ "./src/app/pages/trip-detail/trip-detail-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");







let TripDetailPageModule = class TripDetailPageModule {
};
TripDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trip_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TripDetailPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forChild()
        ],
        declarations: []
    })
], TripDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-trip-detail-trip-detail-module-es2015.js.map