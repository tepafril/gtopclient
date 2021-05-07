function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n      <ion-title>\n        {{ 'APP.home' | translate }}\n      </ion-title>\n\n      <ion-buttons slot=\"end\">\n        <ion-button routerLink=\"/notification\">\n          <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding\">\n\n\n    <ion-grid class=\"ion-no-padding header-container\">\n      <ion-row>\n        <ion-col>\n          <h5 class=\"text-center\">\n            {{ 'APP.welcome_for_visiting_gtop' | translate }}\n          </h5>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row class=\"button-1 ion-hide-lg-up\">\n        <ion-col class=\"\" size=\"3\" routerLink=\"{{routerLinkGeolocation}}\">\n          <img src=\"{{ 'ASSET.geolocation' | translate }}\">\n        </ion-col>\n\n        <ion-col class=\"\" size=\"3\" routerLink=\"/history\">\n          <img src=\"{{ 'ASSET.history' | translate }}\">\n        </ion-col>\n\n        <ion-col class=\"\" size=\"3\" routerLink=\"/engine\">\n          <img src=\"{{ 'ASSET.engine' | translate }}\">\n        </ion-col>\n\n        <ion-col class=\"\" size=\"3\" routerLink=\"/device\">\n          <img src=\"{{ 'ASSET.device' | translate }}\">\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row class=\"button-1 ion-hide-md-down\">\n        <ion-col class=\"\" size=\"2\"></ion-col>\n\n        <ion-col class=\"\" size=\"2\" routerLink=\"{{routerLinkGeolocation}}\">\n          <img src=\"{{ 'ASSET.geolocation' | translate }}\">\n        </ion-col>\n\n        <ion-col class=\"\" size=\"2\" routerLink=\"/history\">\n          <img src=\"{{ 'ASSET.history' | translate }}\">\n        </ion-col>\n\n        <ion-col class=\"\" size=\"2\" routerLink=\"/engine\">\n          <img src=\"{{ 'ASSET.engine' | translate }}\">\n        </ion-col>\n\n        <ion-col class=\"\" size=\"2\" routerLink=\"/device\">\n          <img src=\"{{ 'ASSET.device' | translate }}\">\n        </ion-col>\n\n        <ion-col class=\"\" size=\"2\"></ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid class=\"ion-no-padding padding-top-5\">\n        <ion-row class=\"button-2 ion-hide-lg-up\">\n\n          <ion-col button class=\"\" size=\"3\" routerLink=\"/disarm\">\n            <img src=\"{{ 'ASSET.disarm' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/parking-alarm\">\n            <img src=\"{{ 'ASSET.parking_alarm' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/trip\">\n            <img src=\"{{ 'ASSET.trip' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/oil-maintenance\">\n            <img src=\"{{ 'ASSET.oil' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/tire-maintenance\">\n            <img src=\"{{ 'ASSET.tire' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/speed\">\n            <img src=\"{{ 'ASSET.speed' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/summary\">\n            <img src=\"{{ 'ASSET.report' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/manage-icon\">\n            <img src=\"{{ 'ASSET.icon' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"3\">\n            <img src=\"{{ 'ASSET.geofence' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"3\">\n            <img src=\"{{ 'ASSET.polygonfence' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/manage-group\">\n            <img src=\"{{ 'ASSET.group' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"3\">\n            <img src=\"{{ 'ASSET.fuel' | translate }}\">\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"button-2 ion-hide-md-down\">\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/disarm\">\n            <img src=\"{{ 'ASSET.disarm' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/parking-alarm\">\n            <img src=\"{{ 'ASSET.parking_alarm' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/trip\">\n            <img src=\"{{ 'ASSET.trip' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/oil-maintenance\">\n            <img src=\"{{ 'ASSET.oil' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/tire-maintenance\">\n            <img src=\"{{ 'ASSET.tire' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/speed\">\n            <img src=\"{{ 'ASSET.speed' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/summary\">\n            <img src=\"{{ 'ASSET.report' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/manage-icon\">\n            <img src=\"{{ 'ASSET.icon' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"2\">\n            <img src=\"{{ 'ASSET.geofence' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"2\">\n            <img src=\"{{ 'ASSET.polygonfence' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/manage-group\">\n            <img src=\"{{ 'ASSET.group' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"2\">\n            <img src=\"{{ 'ASSET.fuel' | translate }}\">\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n     \n    <!-- <ion-slides [options]=\"sliderConfig\" >\n      <ion-slide>\n          <ion-card class=\"ion-no-padding\">  \n            <ion-card-content class=\"ion-no-padding\">\n              <img src=\"assets/img/ads-1.jpg\">\n            </ion-card-content>\n          </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n          <ion-card>\n            <ion-card-content class=\"ion-no-padding\">\n              <img src=\"assets/img/ads-2.jpg\">\n            </ion-card-content>\n          </ion-card>\n      </ion-slide>\n\n    </ion-slides> -->\n \n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/pages/dashboard/dashboard.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]
    }];

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ion-padding-end {\n  -webkit-padding-after: 0px;\n          padding-block-end: 0px;\n}\n\n.odad-col-button {\n  padding: 16px;\n}\n\n.sc-ion-card-md-h, .sc-ion-card-ios-h {\n  margin: 18px 5px;\n}\n\n.padding-5 {\n  padding: 5px;\n}\n\nion-content.background-gray {\n  --background: #f4f3ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNJLDBCQUFBO1VBQUEsc0JBQUE7QUNUSjs7QURXQTtFQUlJLGFBQUE7QUNYSjs7QURrQkE7RUFDSSxnQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLFlBQUE7QUNmSjs7QURrQkE7RUFFSSxxQkFBQTtBQ2hCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWR7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgIC8vIGJvcmRlcjoxcHggc29saWQgI2NmY2ZjYTtcbn1cblxuXG5cbmlvbi1jYXJkLWNvbnRlbnR7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2NmY2ZjYTtcbn1cbi5pb24tcGFkZGluZy1lbmR7XG4gICAgcGFkZGluZy1ibG9jay1lbmQ6IDBweDtcbn1cbi5vZGFkLWNvbC1idXR0b257XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAvLyBib3JkZXI6MXB4IHNvbGlkICNjZmNmY2E7XG4gICAgLy8gYm9yZGVyLWxlZnQtd2lkdGg6MHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5vZGFkLWNvbC1idXR0b24gaW9uLWltZ3tcbiAgICAvLyBtYXJnaW4tcmlnaHQ6NXB4O1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCwgLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgICBtYXJnaW46IDE4cHggNXB4O1xufVxuXG4ucGFkZGluZy01e1xuICAgIHBhZGRpbmc6NXB4O1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kLWdyYXlcbntcbiAgICAtLWJhY2tncm91bmQ6ICNmNGYzZWY7XG59IiwiLmlvbi1wYWRkaW5nLWVuZCB7XG4gIHBhZGRpbmctYmxvY2stZW5kOiAwcHg7XG59XG5cbi5vZGFkLWNvbC1idXR0b24ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uc2MtaW9uLWNhcmQtbWQtaCwgLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgbWFyZ2luOiAxOHB4IDVweDtcbn1cblxuLnBhZGRpbmctNSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuaW9uLWNvbnRlbnQuYmFja2dyb3VuZC1ncmF5IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjRmM2VmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
    \***************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppPagesDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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
    /* harmony import */


    var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var DashboardPage =
    /*#__PURE__*/
    function () {
      function DashboardPage(platform, menu, authService, navCtrl, alertService, loadingController, storageService) {
        _classCallCheck(this, DashboardPage);

        this.platform = platform;
        this.menu = menu;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.sliderConfig = {
          slidesPerView: 1,
          centeredSlides: true
        };
        this.routerLinkGeolocation = '/geolocation-web';
        this.menu.enable(true);
        this.initializeApp();
      }

      _createClass(DashboardPage, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
              _this.routerLinkGeolocation = '/geolocation';
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.presentLoading();
          this.authService.getToken().then(function () {
            if (_this2.authService.isLoggedIn) {
              _this2.authService.checkPassport().subscribe(function (res) {
                _this2.httpResponse = res;
              }, function (err) {
                _this2.authService.clearToken();

                if (err.error.message) {
                  _this2.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>", "danger");
                } else {
                  _this2.alertService.presentToast("<ion-text>" + err.message + "</ion-text>", "danger");
                }

                _this2.loading.dismiss();

                _this2.navCtrl.navigateRoot('/landing');
              }, function () {
                _this2.loading.dismiss();
              });
            }
          });
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait',
                      duration: 10000
                    });

                  case 2:
                    this.loading = _context.sent;
                    _context.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/pages/dashboard/dashboard.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es5.js.map