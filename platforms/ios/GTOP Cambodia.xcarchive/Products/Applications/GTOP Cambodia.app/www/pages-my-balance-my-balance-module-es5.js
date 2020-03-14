function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-balance-my-balance-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-balance/my-balance.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-balance/my-balance.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMyBalanceMyBalancePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'PROFILE.my_balance' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">\n        <ion-text color=\"success\">\n          {{ 'PROFILE.your_profile_is_valid_until' | translate }}\n        </ion-text>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-text color=\"primary\">\n        <h1 class=\"ion-text-center\">365 {{ 'APP.day' | translate }}</h1>\n      </ion-text>\n      <p>&nbsp;</p>\n      <ion-text color=\"danger\">\n        <h2 class=\"ion-text-center\">{{ 'PROFILE.reg_date' | translate }} {{ reg_date }}</h2>\n      </ion-text>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-text color=\"dark\">\n        <h2 class=\"ion-text-center\">{{ 'PROFILE.contact_to_renew' | translate }} {{ reg_date }}</h2>\n      </ion-text>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/my-balance/my-balance-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/my-balance/my-balance-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: MyBalancePageRoutingModule */

  /***/
  function srcAppPagesMyBalanceMyBalanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyBalancePageRoutingModule", function () {
      return MyBalancePageRoutingModule;
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


    var _my_balance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-balance.page */
    "./src/app/pages/my-balance/my-balance.page.ts");

    var routes = [{
      path: '',
      component: _my_balance_page__WEBPACK_IMPORTED_MODULE_3__["MyBalancePage"]
    }];

    var MyBalancePageRoutingModule = function MyBalancePageRoutingModule() {
      _classCallCheck(this, MyBalancePageRoutingModule);
    };

    MyBalancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MyBalancePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/my-balance/my-balance.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/my-balance/my-balance.module.ts ***!
    \*******************************************************/

  /*! exports provided: MyBalancePageModule */

  /***/
  function srcAppPagesMyBalanceMyBalanceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyBalancePageModule", function () {
      return MyBalancePageModule;
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


    var _my_balance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-balance-routing.module */
    "./src/app/pages/my-balance/my-balance-routing.module.ts");
    /* harmony import */


    var _my_balance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./my-balance.page */
    "./src/app/pages/my-balance/my-balance.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var MyBalancePageModule = function MyBalancePageModule() {
      _classCallCheck(this, MyBalancePageModule);
    };

    MyBalancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _my_balance_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyBalancePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_my_balance_page__WEBPACK_IMPORTED_MODULE_6__["MyBalancePage"]]
    })], MyBalancePageModule);
    /***/
  },

  /***/
  "./src/app/pages/my-balance/my-balance.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/my-balance/my-balance.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMyBalanceMyBalancePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL215LWJhbGFuY2UvbXktYmFsYW5jZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/my-balance/my-balance.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/my-balance/my-balance.page.ts ***!
    \*****************************************************/

  /*! exports provided: MyBalancePage */

  /***/
  function srcAppPagesMyBalanceMyBalancePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyBalancePage", function () {
      return MyBalancePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var MyBalancePage =
    /*#__PURE__*/
    function () {
      function MyBalancePage(navCtrl) {
        _classCallCheck(this, MyBalancePage);

        this.navCtrl = navCtrl;
        this.reg_date = '01/Jan/2020';
      }

      _createClass(MyBalancePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.navigateBack('dashboard/tabs/profile');
        }
      }]);

      return MyBalancePage;
    }();

    MyBalancePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    MyBalancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-balance',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-balance.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-balance/my-balance.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-balance.page.scss */
      "./src/app/pages/my-balance/my-balance.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], MyBalancePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-my-balance-my-balance-module-es5.js.map