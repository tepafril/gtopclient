function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pending-pending-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending/pending.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending/pending.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPendingPendingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'APP.my_qr_code' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title class=\"ion-text-center\">\n        <ion-text color=\"success\">\n          {{ 'APP.please_scan_qr_code' | translate }}\n        </ion-text>\n      </ion-card-title>\n    </ion-card-header>\n\n    <ngx-qrcode qrc-class=\"qr-code ion-text-center\" qrc-version=\"6\" qrc-element-type=\"img\" [qrc-value] = \"qrcValue\"></ngx-qrcode>\n    <ion-card-content>\n      <ion-text color=\"danger\">\n        <h2 class=\"ion-text-center\">{{ 'APP.account' | translate }} {{ phone }}</h2>\n      </ion-text>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/pending/pending-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/pending/pending-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PendingPageRoutingModule */

  /***/
  function srcAppPagesPendingPendingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingPageRoutingModule", function () {
      return PendingPageRoutingModule;
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


    var _pending_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pending.page */
    "./src/app/pages/pending/pending.page.ts");

    var routes = [{
      path: '',
      component: _pending_page__WEBPACK_IMPORTED_MODULE_3__["PendingPage"]
    }];

    var PendingPageRoutingModule = function PendingPageRoutingModule() {
      _classCallCheck(this, PendingPageRoutingModule);
    };

    PendingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PendingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pending/pending.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/pending/pending.module.ts ***!
    \*************************************************/

  /*! exports provided: PendingPageModule */

  /***/
  function srcAppPagesPendingPendingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingPageModule", function () {
      return PendingPageModule;
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


    var _pending_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pending-routing.module */
    "./src/app/pages/pending/pending-routing.module.ts");
    /* harmony import */


    var _pending_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pending.page */
    "./src/app/pages/pending/pending.page.ts");
    /* harmony import */


    var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-qrcode2 */
    "./node_modules/ngx-qrcode2/index.js");
    /* harmony import */


    var _pending_help_pending_help_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../pending-help/pending-help.page */
    "./src/app/pages/pending-help/pending-help.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var PendingPageModule = function PendingPageModule() {
      _classCallCheck(this, PendingPageModule);
    };

    PendingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pending_routing_module__WEBPACK_IMPORTED_MODULE_5__["PendingPageRoutingModule"], ngx_qrcode2__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild()],
      declarations: [_pending_page__WEBPACK_IMPORTED_MODULE_6__["PendingPage"], _pending_help_pending_help_page__WEBPACK_IMPORTED_MODULE_8__["PendingHelpPage"]],
      entryComponents: [_pending_help_pending_help_page__WEBPACK_IMPORTED_MODULE_8__["PendingHelpPage"]]
    })], PendingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pending/pending.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/pending/pending.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPendingPendingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmcvcGVuZGluZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/pending/pending.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/pending/pending.page.ts ***!
    \***********************************************/

  /*! exports provided: PendingPage */

  /***/
  function srcAppPagesPendingPendingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingPage", function () {
      return PendingPage;
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
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var PendingPage =
    /*#__PURE__*/
    function () {
      function PendingPage(modalController, authService, navCtrl) {
        var _this = this;

        _classCallCheck(this, PendingPage);

        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.qrcElementType = 'url';
        this.qrcValue = 'Techiediaries';
        this.qrcWidth = '200';
        this.authService.getToken().then(function () {
          _this.qrcValue = "userid:" + _this.authService.user.id;
          _this.phone = _this.authService.user.phone;
        });
      }

      _createClass(PendingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.back();
        }
      }]);

      return PendingPage;
    }();

    PendingPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    PendingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pending',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pending.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending/pending.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pending.page.scss */
      "./src/app/pages/pending/pending.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PendingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pending-pending-module-es5.js.map