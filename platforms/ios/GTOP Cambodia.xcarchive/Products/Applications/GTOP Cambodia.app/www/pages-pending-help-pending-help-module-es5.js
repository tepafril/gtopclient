function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pending-help-pending-help-module"], {
  /***/
  "./src/app/pages/pending-help/pending-help-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/pending-help/pending-help-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PendingHelpPageRoutingModule */

  /***/
  function srcAppPagesPendingHelpPendingHelpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingHelpPageRoutingModule", function () {
      return PendingHelpPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pending_help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pending-help.page */
    "./src/app/pages/pending-help/pending-help.page.ts");

    var routes = [{
      path: '',
      component: _pending_help_page__WEBPACK_IMPORTED_MODULE_3__["PendingHelpPage"]
    }];

    var PendingHelpPageRoutingModule = function PendingHelpPageRoutingModule() {
      _classCallCheck(this, PendingHelpPageRoutingModule);
    };

    PendingHelpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PendingHelpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pending-help/pending-help.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/pending-help/pending-help.module.ts ***!
    \***********************************************************/

  /*! exports provided: PendingHelpPageModule */

  /***/
  function srcAppPagesPendingHelpPendingHelpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingHelpPageModule", function () {
      return PendingHelpPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pending_help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pending-help-routing.module */
    "./src/app/pages/pending-help/pending-help-routing.module.ts");

    var PendingHelpPageModule = function PendingHelpPageModule() {
      _classCallCheck(this, PendingHelpPageModule);
    };

    PendingHelpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pending_help_routing_module__WEBPACK_IMPORTED_MODULE_5__["PendingHelpPageRoutingModule"]],
      declarations: []
    })], PendingHelpPageModule);
    /***/
  }
}]);
//# sourceMappingURL=pages-pending-help-pending-help-module-es5.js.map