function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notification-notification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesNotificationNotificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'APP.notification' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-text class=\"ion-text-center\">\n      <h6 class=\"ion-text-center\">Recently has no notification!</h6>\n    </ion-text>\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/notification/notification-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/notification/notification-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: NotificationPageRoutingModule */

  /***/
  function srcAppPagesNotificationNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function () {
      return NotificationPageRoutingModule;
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


    var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/pages/notification/notification.page.ts");

    var routes = [{
      path: '',
      component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
    }];

    var NotificationPageRoutingModule = function NotificationPageRoutingModule() {
      _classCallCheck(this, NotificationPageRoutingModule);
    };

    NotificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/notification/notification.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/notification/notification.module.ts ***!
    \***********************************************************/

  /*! exports provided: NotificationPageModule */

  /***/
  function srcAppPagesNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function () {
      return NotificationPageModule;
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


    var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notification-routing.module */
    "./src/app/pages/notification/notification-routing.module.ts");
    /* harmony import */


    var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notification.page */
    "./src/app/pages/notification/notification.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var NotificationPageModule = function NotificationPageModule() {
      _classCallCheck(this, NotificationPageModule);
    };

    NotificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
    })], NotificationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/notification/notification.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/notification/notification.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesNotificationNotificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/notification/notification.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/notification/notification.page.ts ***!
    \*********************************************************/

  /*! exports provided: NotificationPage */

  /***/
  function srcAppPagesNotificationNotificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationPage", function () {
      return NotificationPage;
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

    var NotificationPage =
    /*#__PURE__*/
    function () {
      function NotificationPage(navCtrl) {
        _classCallCheck(this, NotificationPage);

        this.navCtrl = navCtrl;
      }

      _createClass(NotificationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          // this.navCtrl.navigateBack('dashboard/tabs/home');
          this.navCtrl.back();
        }
      }]);

      return NotificationPage;
    }();

    NotificationPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    NotificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/notification/notification.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notification.page.scss */
      "./src/app/pages/notification/notification.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], NotificationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-notification-notification-module-es5.js.map