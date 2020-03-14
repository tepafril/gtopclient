function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tire-maintenance-tire-maintenance-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tire-maintenance/tire-maintenance.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tire-maintenance/tire-maintenance.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTireMaintenanceTireMaintenancePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>{{ 'TIRE_PAGE.tire_maintenance' | translate }}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\" routerLink=\"/deliveries\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ item_icon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\">\n          {{ item_name }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-padding ion-top-padding1\">\n\n    <ion-list>\n\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'TIRE_PAGE.tire_notification' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>{{ 'TIRE_PAGE.tire_notify' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"tire_maintenance_alert\" (click)=\"toggleTireMaintenanceAlert($event)\"></ion-toggle>\n      </ion-item>\n\n\n      <ion-item button (click)=\"showBasicPicker('tire-maintenance-start')\">\n        <ion-label>\n          <ion-row>\n\n            <ion-col>\n              <ion-text color=\"dark\">{{ 'TIRE_PAGE.start' | translate }}</ion-text>\n            </ion-col>\n            <ion-col class=\"ion-text-right\">\n              {{ tire_maintenance_start }} {{ 'TIRE_PAGE.km' | translate }}\n            </ion-col>\n\n          </ion-row>        \n        </ion-label>\n      </ion-item>\n\n      <ion-item button (click)=\"showBasicPicker('tire-maintenance-period')\">\n        <ion-label>\n          <ion-row>\n\n            <ion-col>\n              <ion-text color=\"dark\">{{ 'TIRE_PAGE.period' | translate }}</ion-text>\n            </ion-col>\n            <ion-col class=\"ion-text-right\">\n              {{ tire_maintenance_period }} {{ 'TIRE_PAGE.km' | translate }}\n            </ion-col>\n\n          </ion-row>        \n        </ion-label>\n      </ion-item>\n      \n    </ion-list>\n\n\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/alarm-clock.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'TIRE_PAGE.tire_maintenance_history' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-group *ngFor=\"let item of dataList\">\n        <ion-item-divider *ngIf=\"item.have_group != 0\">\n          <ion-label>{{ item.serverdate }}</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>{{ item.servertime }}</ion-label>\n          <ion-note slot=\"end\">{{ item.totalDistance }} {{ 'TIRE_PAGE.km' | translate }}</ion-note>\n        </ion-item>\n        \n      </ion-item-group>\n    </ion-list>\n \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-grid>\n\n\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/tire-maintenance/tire-maintenance-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/tire-maintenance/tire-maintenance-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: TireMaintenancePageRoutingModule */

  /***/
  function srcAppPagesTireMaintenanceTireMaintenanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TireMaintenancePageRoutingModule", function () {
      return TireMaintenancePageRoutingModule;
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


    var _tire_maintenance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tire-maintenance.page */
    "./src/app/pages/tire-maintenance/tire-maintenance.page.ts");

    var routes = [{
      path: '',
      component: _tire_maintenance_page__WEBPACK_IMPORTED_MODULE_3__["TireMaintenancePage"]
    }];

    var TireMaintenancePageRoutingModule = function TireMaintenancePageRoutingModule() {
      _classCallCheck(this, TireMaintenancePageRoutingModule);
    };

    TireMaintenancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TireMaintenancePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/tire-maintenance/tire-maintenance.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/tire-maintenance/tire-maintenance.module.ts ***!
    \*******************************************************************/

  /*! exports provided: TireMaintenancePageModule */

  /***/
  function srcAppPagesTireMaintenanceTireMaintenanceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TireMaintenancePageModule", function () {
      return TireMaintenancePageModule;
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


    var _tire_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tire-maintenance-routing.module */
    "./src/app/pages/tire-maintenance/tire-maintenance-routing.module.ts");
    /* harmony import */


    var _tire_maintenance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tire-maintenance.page */
    "./src/app/pages/tire-maintenance/tire-maintenance.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var TireMaintenancePageModule = function TireMaintenancePageModule() {
      _classCallCheck(this, TireMaintenancePageModule);
    };

    TireMaintenancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tire_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__["TireMaintenancePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_tire_maintenance_page__WEBPACK_IMPORTED_MODULE_6__["TireMaintenancePage"]]
    })], TireMaintenancePageModule);
    /***/
  },

  /***/
  "./src/app/pages/tire-maintenance/tire-maintenance.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/tire-maintenance/tire-maintenance.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTireMaintenanceTireMaintenancePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ion-top-padding {\n  margin-top: 25px;\n}\n\n.margin-bottom-25 {\n  margin-bottom: 20px;\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvdGlyZS1tYWludGVuYW5jZS90aXJlLW1haW50ZW5hbmNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGlyZS1tYWludGVuYW5jZS90aXJlLW1haW50ZW5hbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RpcmUtbWFpbnRlbmFuY2UvdGlyZS1tYWludGVuYW5jZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLXRvcC1wYWRkaW5ne1xuICAgIG1hcmdpbi10b3A6MjVweDtcbn1cbi5tYXJnaW4tYm90dG9tLTI1e1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5pb24tYXZhdGFyIGltZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICAgIGJvcmRlcjo0cHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbn0iLCIuaW9uLXRvcC1wYWRkaW5nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm1hcmdpbi1ib3R0b20tMjUge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tYXZhdGFyIGltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/tire-maintenance/tire-maintenance.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/tire-maintenance/tire-maintenance.page.ts ***!
    \*****************************************************************/

  /*! exports provided: TireMaintenancePage */

  /***/
  function srcAppPagesTireMaintenanceTireMaintenancePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TireMaintenancePage", function () {
      return TireMaintenancePage;
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


    var src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/traccar.service */
    "./src/app/services/traccar.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");

    var TireMaintenancePage =
    /*#__PURE__*/
    function () {
      function TireMaintenancePage(http, authService, navCtrl, loadingController, traccarService, lang, platform, alertService, storageService, pickerController) {
        _classCallCheck(this, TireMaintenancePage);

        this.http = http;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.traccarService = traccarService;
        this.lang = lang;
        this.platform = platform;
        this.alertService = alertService;
        this.storageService = storageService;
        this.pickerController = pickerController;
        this.dataList = [];
        this.dateTemp = 0;
        this.pagination = 1;
      }

      _createClass(TireMaintenancePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.presentLoadingWithOptions();
          this.storageService.setItem().subscribe(function (res) {}, function (err) {
            console.log(err);
          }, function () {
            _this.initIgnitionQuery(_this.storageService.current_item.deviceid);

            console.log(_this.storageService.current_item);
          });
        }
      }, {
        key: "initIgnitionQuery",
        value: function initIgnitionQuery(deviceid) {
          var _this2 = this;

          this.traccarService.getTireMaintenance(deviceid, this.pagination).subscribe(function (res) {
            _this2.httpResponse = res;
            _this2.httpResponse = JSON.parse(_this2.httpResponse.events);
          }, function (err) {
            if (err.error.message) {
              _this2.alertService.presentToast(err.error.message, "danger");
            } else {
              _this2.alertService.presentToast(err.message, "danger");
            }

            _this2.loading.dismiss();
          }, function () {
            for (var i = 0; i < _this2.httpResponse.length; i++) {
              var readableLocalDate = _this2.readableLocalDate(_this2.httpResponse[i].servertime);

              var readableLocalTime = _this2.readableLocalTime(_this2.httpResponse[i].servertime);

              var systemDate = _this2.systemDate(_this2.httpResponse[i].servertime);

              if (_this2.dateTemp == systemDate) {
                _this2.httpResponse[i].have_group = '0';
              } else {
                _this2.dateTemp = systemDate;
                _this2.httpResponse[i].have_group = readableLocalDate;
              }

              var attributes = JSON.parse(_this2.httpResponse[i].attributes);
              _this2.httpResponse[i].totalDistance = Math.round(attributes.totalDistance / 1000);
              _this2.httpResponse[i].serverdate = readableLocalDate;
              _this2.httpResponse[i].servertime = readableLocalTime;

              _this2.dataList.push(_this2.httpResponse[i]);
            }

            _this2.pagination++;
            _this2.item_name = _this2.storageService.current_item.name;
            _this2.item_icon = _this2.storageService.current_item.icon_name;
            _this2.tire_maintenance_alert = _this2.storageService.current_item.tire_maintenance_notification;
            _this2.tire_maintenance_start = Math.round(_this2.storageService.current_item.tire_maintenance_start / 1000);
            _this2.tire_maintenance_period = Math.round(_this2.storageService.current_item.tire_maintenance_period / 1000);
            _this2.deviceid = _this2.storageService.current_item.deviceid;

            _this2.loading.dismiss();
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this3 = this;

          this.traccarService.getTireMaintenance(this.deviceid, this.pagination).subscribe(function (res) {
            _this3.httpResponse = res;
            _this3.httpResponse = JSON.parse(_this3.httpResponse.events);
          }, function (err) {
            if (err.error.message) {
              _this3.alertService.presentToast(err.error.message, "danger");
            } else {
              _this3.alertService.presentToast(err.message, "danger");
            }

            _this3.loading.dismiss();
          }, function () {
            for (var i = 0; i < _this3.httpResponse.length; i++) {
              var readableLocalDate = _this3.readableLocalDate(_this3.httpResponse[i].servertime);

              var readableLocalTime = _this3.readableLocalTime(_this3.httpResponse[i].servertime);

              var systemDate = _this3.systemDate(_this3.httpResponse[i].servertime);

              if (_this3.dateTemp == systemDate) {
                _this3.httpResponse[i].have_group = '0';
              } else {
                _this3.dateTemp = systemDate;
                _this3.httpResponse[i].have_group = readableLocalDate;
              }

              var attributes = JSON.parse(_this3.httpResponse[i].attributes);
              _this3.httpResponse[i].totalDistance = Math.round(attributes.totalDistance / 1000);
              _this3.httpResponse[i].serverdate = readableLocalDate;
              _this3.httpResponse[i].servertime = readableLocalTime;

              _this3.dataList.push(_this3.httpResponse[i]);
            }

            event.target.complete();

            if (_this3.httpResponse.length < 40) {
              event.target.disabled = true;
            }

            _this3.pagination++;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.navigateBack('dashboard/tabs/home');
        }
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      duration: 15000,
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    this.loading = _context.sent;
                    _context.next = 5;
                    return this.loading.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "preparingRequest",
        value: function preparingRequest(type, deviceid, bool) {
          this.authService.getToken();
          var token = this.authService.token;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ENDPOINT"].API_URL + 'event/tire-maintenance/notification/' + type + '/' + deviceid + '/' + bool, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "toggleTireMaintenanceAlert",
        value: function toggleTireMaintenanceAlert(ev) {
          var _this4 = this;

          this.presentLoadingWithOptions();
          setTimeout(function () {
            _this4.preparingRequest('tire_maintenance_notification', _this4.deviceid, _this4.tire_maintenance_alert).subscribe(function (data) {
              _this4.loading.dismiss();
            }, function (error) {
              // alert(error.error.message);
              _this4.loading.dismiss();
            }, function () {
              _this4.loading.dismiss();
            });
          }, 50);
        }
      }, {
        key: "showBasicPicker",
        value: function showBasicPicker(field) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var opts, picker;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    opts = {
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler(data) {
                          _this5.ionPickerHandler = 'cancel';
                        }
                      }, {
                        text: 'Done',
                        handler: function handler(data) {
                          _this5.ionPickerHandler = 'done';
                        }
                      }],
                      columns: [{
                        name: 'Distance',
                        options: [{
                          text: '1' + this.lang.instant('TIRE_PAGE.km'),
                          value: 1
                        }, {
                          text: '100' + this.lang.instant('TIRE_PAGE.km'),
                          value: 100
                        }, {
                          text: '250' + this.lang.instant('TIRE_PAGE.km'),
                          value: 250
                        }, {
                          text: '500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 500
                        }, {
                          text: '750' + this.lang.instant('TIRE_PAGE.km'),
                          value: 750
                        }, {
                          text: '1000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 1000
                        }, {
                          text: '1500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 1500
                        }, {
                          text: '2000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 2000
                        }, {
                          text: '2500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 2500
                        }, {
                          text: '3000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 3000
                        }, {
                          text: '3500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 3500
                        }, {
                          text: '4000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 4000
                        }, {
                          text: '4500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 4500
                        }, {
                          text: '5000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 5000
                        }, {
                          text: '5500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 5500
                        }, {
                          text: '6000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 6000
                        }, {
                          text: '6500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 6500
                        }, {
                          text: '7000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 7000
                        }, {
                          text: '7500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 7500
                        }, {
                          text: '8000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 8000
                        }, {
                          text: '8500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 8500
                        }, {
                          text: '9000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 9000
                        }, {
                          text: '9500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 9500
                        }, {
                          text: '10000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 10000
                        }, {
                          text: '10500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 10500
                        }, {
                          text: '11000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 11000
                        }, {
                          text: '11500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 11500
                        }, {
                          text: '12000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 12000
                        }, {
                          text: '12500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 12500
                        }, {
                          text: '13000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 13000
                        }, {
                          text: '13500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 13500
                        }, {
                          text: '14000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 14000
                        }, {
                          text: '14500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 14500
                        }, {
                          text: '15000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 15000
                        }, {
                          text: '15500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 15500
                        }, {
                          text: '16000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 16000
                        }, {
                          text: '16500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 16500
                        }, {
                          text: '17000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 17000
                        }, {
                          text: '17500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 17500
                        }, {
                          text: '18000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 18000
                        }, {
                          text: '18500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 18500
                        }, {
                          text: '19000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 19000
                        }, {
                          text: '19500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 19500
                        }, {
                          text: '20000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 20000
                        }, {
                          text: '20500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 20500
                        }, {
                          text: '21000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 21000
                        }, {
                          text: '21500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 21500
                        }, {
                          text: '22000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 22000
                        }, {
                          text: '22500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 22500
                        }, {
                          text: '23000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 23000
                        }, {
                          text: '23500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 23500
                        }, {
                          text: '24000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 24000
                        }, {
                          text: '24500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 24500
                        }, {
                          text: '25000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 25000
                        }, {
                          text: '25500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 25500
                        }, {
                          text: '26000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 26000
                        }, {
                          text: '26500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 26500
                        }, {
                          text: '27000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 27000
                        }, {
                          text: '27500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 27500
                        }, {
                          text: '28000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 28000
                        }, {
                          text: '28500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 28500
                        }, {
                          text: '29000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 29000
                        }, {
                          text: '29500' + this.lang.instant('TIRE_PAGE.km'),
                          value: 29500
                        }, {
                          text: '30000' + this.lang.instant('TIRE_PAGE.km'),
                          value: 30000
                        }]
                      }]
                    };
                    _context3.next = 3;
                    return this.pickerController.create(opts);

                  case 3:
                    picker = _context3.sent;
                    picker.present();
                    picker.onDidDismiss().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee2() {
                        var _this6 = this;

                        var col, distance;
                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                          while (1) {
                            switch (_context2.prev = _context2.next) {
                              case 0:
                                if (!(this.ionPickerHandler == 'cancel')) {
                                  _context2.next = 2;
                                  break;
                                }

                                return _context2.abrupt("return");

                              case 2:
                                this.presentLoadingWithOptions();
                                _context2.next = 5;
                                return picker.getColumn('Distance');

                              case 5:
                                col = _context2.sent;
                                if (field == 'tire-maintenance-start') this.tire_maintenance_start = col.options[col.selectedIndex].value;else if (field == 'tire-maintenance-period') this.tire_maintenance_period = col.options[col.selectedIndex].value;
                                distance = col.options[col.selectedIndex].value;
                                this.preparingSpeedLimitRequest(this.deviceid, distance, field).subscribe(function (data) {
                                  _this6.loading.dismiss();
                                }, function (error) {
                                  alert(error.error.message);

                                  _this6.loading.dismiss();
                                }, function () {
                                  _this6.loading.dismiss();
                                });

                              case 9:
                              case "end":
                                return _context2.stop();
                            }
                          }
                        }, _callee2, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "preparingSpeedLimitRequest",
        value: function preparingSpeedLimitRequest(deviceid, distance_limit, field) {
          this.authService.getToken();
          var token = this.authService.token;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ENDPOINT"].API_URL + 'event/tire-maintenance/' + field, {
            headers: headers,
            params: {
              deviceid: deviceid,
              distance_limit: distance_limit
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "systemDate",
        value: function systemDate(the_date) {
          var d;

          if (this.platform.is('ios')) {
            d = new Date(the_date.replace(' ', 'T'));
          } else {
            d = new Date(the_date + ' UTC');
          }

          var dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
          var monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
          var s = '';

          if (d.getDate() < 10) {
            s += '0' + d.getDate().toString();
          } else {
            s += d.getDate().toString();
          }

          s += '-' + monthNames[d.getMonth()];
          s += '-' + d.getFullYear();
          return s;
        }
      }, {
        key: "readableLocalDate",
        value: function readableLocalDate(the_date) {
          var d;

          if (this.platform.is('ios')) {
            d = new Date(the_date.replace(' ', 'T'));
          } else {
            d = new Date(the_date + ' UTC');
          }

          var dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
          var monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
          var s = ' ' + this.lang.instant('APP.day');
          s += this.lang.instant('APP.' + dayNames[d.getDay()]);

          if (d.getDate() < 10) {
            s += ' ' + this.lang.instant('APP.date') + '0' + d.getDate().toString();
          } else {
            s += ' ' + this.lang.instant('APP.date') + d.getDate().toString();
          }

          s += ' ' + this.lang.instant('APP.month') + this.lang.instant('APP.' + monthNames[d.getMonth()]);
          s += ' ' + this.lang.instant('APP.year') + d.getFullYear();
          return s;
        }
      }, {
        key: "readableLocalTime",
        value: function readableLocalTime(the_date) {
          var d;

          if (this.platform.is('ios')) {
            d = new Date(the_date.replace(' ', 'T'));
          } else {
            d = new Date(the_date + ' UTC');
          }

          var s = '';

          if (d.getHours() < 10) {
            s += ' ' + this.lang.instant('APP.time') + '0' + d.getHours().toString();
          } else {
            s += ' ' + this.lang.instant('APP.time') + d.getHours().toString();
          }

          if (d.getMinutes() < 10) {
            s += ':0' + d.getMinutes().toString();
          } else {
            s += ':' + d.getMinutes().toString();
          }

          if (d.getSeconds() < 10) {
            s += ':0' + d.getSeconds().toString();
          } else {
            s += ':' + d.getSeconds().toString();
          }

          return s;
        }
      }]);

      return TireMaintenancePage;
    }();

    TireMaintenancePage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
      }, {
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], TireMaintenancePage.prototype, "infiniteScroll", void 0);
    TireMaintenancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tire-maintenance',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tire-maintenance.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tire-maintenance/tire-maintenance.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tire-maintenance.page.scss */
      "./src/app/pages/tire-maintenance/tire-maintenance.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"]])], TireMaintenancePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-tire-maintenance-tire-maintenance-module-es5.js.map