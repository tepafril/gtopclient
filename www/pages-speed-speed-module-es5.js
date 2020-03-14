function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-speed-speed-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speed/speed.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speed/speed.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSpeedSpeedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'SPEED_PAGE.speed_limit' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\" routerLink=\"/deliveries\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ item_icon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"selectDevice()\">\n          {{ item_name }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-padding ion-top-padding1\">\n\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'SPEED_PAGE.overspeed_notification' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>{{ 'SPEED_PAGE.overspeed_notify' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"overspeed_alert\" (click)=\"toggleOverspeedAlert($event)\"></ion-toggle>\n      </ion-item>\n\n      <ion-item button (click)=\"showBasicPicker()\">\n        <ion-label>\n          <ion-row>\n\n            <ion-col>\n              <ion-text color=\"dark\">{{ 'SPEED_PAGE.limit_speed' | translate }}</ion-text>\n            </ion-col>\n            <ion-col class=\"ion-text-right\">\n              {{ speed_limit }} {{ 'SPEED_PAGE.kmh' | translate }}\n            </ion-col>\n\n          </ion-row>        \n        </ion-label>\n      </ion-item>\n      \n    </ion-list>\n\n\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/alarm-clock.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'SPEED_PAGE.speed_history' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-group *ngFor=\"let item of dataList\">\n        <ion-item-divider *ngIf=\"item.have_group != 0\">\n          <ion-label>{{ item.serverdate }}</ion-label>\n        </ion-item-divider>\n      \n        <ion-item *ngIf=\"item.have_group != 0\">\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"4\">\n                &nbsp;\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"dark\">{{ 'SPEED_PAGE.limit_speed' | translate }}</ion-text>\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"dark\">{{ 'SPEED_PAGE.overspeed' | translate }}</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"4\">\n                {{ item.servertime }}\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"primary\">{{ item.speedLimit }}</ion-text>\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"danger\">{{ item.speed }}</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-item>\n        \n      </ion-item-group>\n    </ion-list>\n \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-grid>\n\n\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/speed/speed-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/speed/speed-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: SpeedPageRoutingModule */

  /***/
  function srcAppPagesSpeedSpeedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeedPageRoutingModule", function () {
      return SpeedPageRoutingModule;
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


    var _speed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./speed.page */
    "./src/app/pages/speed/speed.page.ts");

    var routes = [{
      path: '',
      component: _speed_page__WEBPACK_IMPORTED_MODULE_3__["SpeedPage"]
    }];

    var SpeedPageRoutingModule = function SpeedPageRoutingModule() {
      _classCallCheck(this, SpeedPageRoutingModule);
    };

    SpeedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SpeedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/speed/speed.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/speed/speed.module.ts ***!
    \*********************************************/

  /*! exports provided: SpeedPageModule */

  /***/
  function srcAppPagesSpeedSpeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeedPageModule", function () {
      return SpeedPageModule;
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


    var _speed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./speed-routing.module */
    "./src/app/pages/speed/speed-routing.module.ts");
    /* harmony import */


    var _speed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./speed.page */
    "./src/app/pages/speed/speed.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var SpeedPageModule = function SpeedPageModule() {
      _classCallCheck(this, SpeedPageModule);
    };

    SpeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _speed_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeedPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_speed_page__WEBPACK_IMPORTED_MODULE_6__["SpeedPage"]]
    })], SpeedPageModule);
    /***/
  },

  /***/
  "./src/app/pages/speed/speed.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/speed/speed.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSpeedSpeedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ion-top-padding {\n  margin-top: 25px;\n}\n\n.ignitionOn {\n  color: var(--ion-color-success);\n}\n\n.ignitionOff {\n  color: var(--ion-color-danger);\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvc3BlZWQvc3BlZWQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zcGVlZC9zcGVlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3BlZWQvc3BlZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi10b3AtcGFkZGluZ3tcbiAgICBtYXJnaW4tdG9wOjI1cHg7XG59XG5cbi5pZ25pdGlvbk9ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5pZ25pdGlvbk9mZntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1hdmF0YXIgaW1ne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG4gICAgYm9yZGVyOjRweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xufSIsIi5pb24tdG9wLXBhZGRpbmcge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uaWduaXRpb25PbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5pZ25pdGlvbk9mZiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuaW9uLWF2YXRhciBpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/speed/speed.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/speed/speed.page.ts ***!
    \*******************************************/

  /*! exports provided: SpeedPage */

  /***/
  function srcAppPagesSpeedSpeedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeedPage", function () {
      return SpeedPage;
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
    /* harmony import */


    var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../select-device/select-device.page */
    "./src/app/pages/select-device/select-device.page.ts");

    var SpeedPage =
    /*#__PURE__*/
    function () {
      function SpeedPage(http, authService, navCtrl, loadingController, traccarService, lang, platform, alertService, storageService, pickerController, modalController) {
        _classCallCheck(this, SpeedPage);

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
        this.modalController = modalController;
        this.speed_limit = 1;
        this.dataList = [];
        this.dateTemp = 0;
        this.pagination = 1;
      }

      _createClass(SpeedPage, [{
        key: "selectDevice",
        value: function selectDevice() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var assignItemModal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_11__["SelectDevicePage"],
                      componentProps: {
                        // groupItems: this.groupItems,
                        // groupID: this.groupID
                        moduleName: "module_speed"
                      }
                    });

                  case 2:
                    assignItemModal = _context.sent;
                    assignItemModal.onDidDismiss().then(function (res) {
                      _this.selectedItems = res.data; // Present Preloading

                      _this.presentLoadingWithOptions();

                      _this.storageService.setItem().subscribe(function (res) {}, function (err) {
                        console.log(err);
                      }, function () {
                        _this.current_item = _this.selectedItems;

                        _this.initIgnitionQuery(_this.current_item.deviceid);
                      });
                    }).catch(function (err) {
                      console.log(err);
                    });
                    _context.next = 6;
                    return assignItemModal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.presentLoadingWithOptions();
          this.storageService.setItem().subscribe(function (res) {}, function (err) {
            console.log(err);
          }, function () {
            _this2.current_item = _this2.storageService.current_item;

            _this2.initIgnitionQuery(_this2.current_item.deviceid);
          });
        }
      }, {
        key: "initIgnitionQuery",
        value: function initIgnitionQuery(deviceid) {
          var _this3 = this;

          this.dataList = [];
          this.pagination = 1;
          this.dateTemp = '';
          this.traccarService.getOverspeed(deviceid, this.pagination).subscribe(function (res) {
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
              var attr = JSON.parse(_this3.httpResponse[i].attributes);

              var readableLocalDate = _this3.readableLocalDate(_this3.httpResponse[i].servertime);

              var readableLocalTime = _this3.readableLocalTime(_this3.httpResponse[i].servertime);

              var systemDate = _this3.systemDate(_this3.httpResponse[i].servertime);

              if (_this3.dateTemp == systemDate) {
                _this3.httpResponse[i].have_group = '0';
              } else {
                _this3.dateTemp = systemDate;
                _this3.httpResponse[i].have_group = readableLocalDate;
              }

              _this3.httpResponse[i].serverdate = readableLocalDate;
              _this3.httpResponse[i].servertime = readableLocalTime;
              _this3.httpResponse[i].note_class = _this3.httpResponse[i].type;
              _this3.httpResponse[i].speed = (attr.speed * 1.852).toFixed(2) + _this3.lang.instant('SPEED_PAGE.kmh');
              _this3.httpResponse[i].speedLimit = (attr.speedLimit * 1.852).toFixed(2) + _this3.lang.instant('SPEED_PAGE.kmh');

              _this3.dataList.push(_this3.httpResponse[i]);
            }

            _this3.pagination++;
            _this3.item_name = _this3.current_item.name;
            _this3.item_icon = _this3.current_item.icon_name;
            _this3.overspeed_alert = _this3.current_item.speed_limit_notification;
            _this3.speed_limit = Math.round(_this3.current_item.speed_limit * 1.852);
            _this3.deviceid = _this3.current_item.deviceid;

            _this3.loading.dismiss();
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this4 = this;

          this.traccarService.getOverspeed(this.deviceid, this.pagination).subscribe(function (res) {
            _this4.httpResponse = res;
            _this4.httpResponse = JSON.parse(_this4.httpResponse.events);
          }, function (err) {
            if (err.error.message) {
              _this4.alertService.presentToast(err.error.message, "danger");
            } else {
              _this4.alertService.presentToast(err.message, "danger");
            }

            _this4.loading.dismiss();
          }, function () {
            for (var i = 0; i < _this4.httpResponse.length; i++) {
              var attr = JSON.parse(_this4.httpResponse[i].attributes);

              var readableLocalDate = _this4.readableLocalDate(_this4.httpResponse[i].servertime);

              var readableLocalTime = _this4.readableLocalTime(_this4.httpResponse[i].servertime);

              var systemDate = _this4.systemDate(_this4.httpResponse[i].servertime);

              if (_this4.dateTemp == systemDate) {
                _this4.httpResponse[i].have_group = '0';
              } else {
                _this4.dateTemp = systemDate;
                _this4.httpResponse[i].have_group = readableLocalDate;
              }

              _this4.httpResponse[i].serverdate = readableLocalDate;
              _this4.httpResponse[i].servertime = readableLocalTime;
              _this4.httpResponse[i].note_class = _this4.httpResponse[i].type;
              _this4.httpResponse[i].speed = (attr.speed * 1.852).toFixed(2) + _this4.lang.instant('SPEED_PAGE.kmh');
              _this4.httpResponse[i].speedLimit = (attr.speedLimit * 1.852).toFixed(2) + _this4.lang.instant('SPEED_PAGE.kmh');
              _this4.httpResponse[i].type = _this4.lang.instant('APP.' + _this4.httpResponse[i].type);

              _this4.dataList.push(_this4.httpResponse[i]);
            }

            event.target.complete();

            if (_this4.httpResponse.length < 40) {
              event.target.disabled = true;
            }

            _this4.pagination++;
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
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      duration: 15000,
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    this.loading = _context2.sent;
                    _context2.next = 5;
                    return this.loading.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
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
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ENDPOINT"].API_URL + 'event/overspeed/notification/' + type + '/' + deviceid + '/' + bool, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "preparingSpeedLimitRequest",
        value: function preparingSpeedLimitRequest(deviceid, speed_limit) {
          this.authService.getToken();
          var token = this.authService.token;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ENDPOINT"].API_URL + 'event/overspeed/set-limit', {
            headers: headers,
            params: {
              deviceid: deviceid,
              speed_limit: speed_limit
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "toggleOverspeedAlert",
        value: function toggleOverspeedAlert(ev) {
          var _this5 = this;

          this.presentLoadingWithOptions();
          setTimeout(function () {
            _this5.preparingRequest('speed_limit_notification', _this5.deviceid, _this5.overspeed_alert).subscribe(function (data) {
              _this5.loading.dismiss();
            }, function (error) {
              // alert(error.error.message);
              _this5.loading.dismiss();
            }, function () {
              _this5.loading.dismiss();
            });
          }, 50);
        }
      }, {
        key: "onChange",
        value: function onChange($event) {
          var _this6 = this;

          this.presentLoadingWithOptions();
          var speed_limit = $event.target.value;
          this.preparingSpeedLimitRequest(this.deviceid, speed_limit).subscribe(function (data) {
            _this6.loading.dismiss();
          }, function (error) {
            alert(error.error.message);

            _this6.loading.dismiss();
          }, function () {
            _this6.loading.dismiss();
          });
        }
      }, {
        key: "showBasicPicker",
        value: function showBasicPicker() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this7 = this;

            var opts, picker;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    opts = {
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function handler(data) {
                          _this7.ionPickerHandler = 'cancel';
                        }
                      }, {
                        text: 'Done',
                        handler: function handler(data) {
                          _this7.ionPickerHandler = 'done';
                        }
                      }],
                      columns: [{
                        name: 'Speed Limit',
                        options: [{
                          text: '1' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 1
                        }, {
                          text: '2' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 2
                        }, {
                          text: '3' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 3
                        }, {
                          text: '4' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 4
                        }, {
                          text: '5' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 5
                        }, {
                          text: '6' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 6
                        }, {
                          text: '7' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 7
                        }, {
                          text: '8' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 8
                        }, {
                          text: '9' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 9
                        }, {
                          text: '10' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 10
                        }, {
                          text: '11' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 11
                        }, {
                          text: '12' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 12
                        }, {
                          text: '13' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 13
                        }, {
                          text: '14' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 14
                        }, {
                          text: '15' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 15
                        }, {
                          text: '16' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 16
                        }, {
                          text: '17' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 17
                        }, {
                          text: '18' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 18
                        }, {
                          text: '19' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 19
                        }, {
                          text: '20' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 20
                        }, {
                          text: '21' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 21
                        }, {
                          text: '22' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 22
                        }, {
                          text: '23' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 23
                        }, {
                          text: '24' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 24
                        }, {
                          text: '25' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 25
                        }, {
                          text: '26' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 26
                        }, {
                          text: '27' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 27
                        }, {
                          text: '28' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 28
                        }, {
                          text: '29' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 29
                        }, {
                          text: '30' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 30
                        }, {
                          text: '31' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 31
                        }, {
                          text: '32' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 32
                        }, {
                          text: '33' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 33
                        }, {
                          text: '34' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 34
                        }, {
                          text: '35' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 35
                        }, {
                          text: '36' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 36
                        }, {
                          text: '37' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 37
                        }, {
                          text: '38' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 38
                        }, {
                          text: '39' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 39
                        }, {
                          text: '40' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 40
                        }, {
                          text: '41' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 41
                        }, {
                          text: '42' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 42
                        }, {
                          text: '43' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 43
                        }, {
                          text: '44' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 44
                        }, {
                          text: '45' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 45
                        }, {
                          text: '46' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 46
                        }, {
                          text: '47' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 47
                        }, {
                          text: '48' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 48
                        }, {
                          text: '49' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 49
                        }, {
                          text: '50' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 50
                        }, {
                          text: '51' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 51
                        }, {
                          text: '52' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 52
                        }, {
                          text: '53' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 53
                        }, {
                          text: '54' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 54
                        }, {
                          text: '55' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 55
                        }, {
                          text: '56' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 56
                        }, {
                          text: '57' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 57
                        }, {
                          text: '58' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 58
                        }, {
                          text: '59' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 59
                        }, {
                          text: '60' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 60
                        }, {
                          text: '61' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 61
                        }, {
                          text: '62' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 62
                        }, {
                          text: '63' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 63
                        }, {
                          text: '64' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 64
                        }, {
                          text: '65' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 65
                        }, {
                          text: '66' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 66
                        }, {
                          text: '67' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 67
                        }, {
                          text: '68' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 68
                        }, {
                          text: '69' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 69
                        }, {
                          text: '70' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 70
                        }, {
                          text: '71' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 71
                        }, {
                          text: '72' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 72
                        }, {
                          text: '73' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 73
                        }, {
                          text: '74' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 74
                        }, {
                          text: '75' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 75
                        }, {
                          text: '76' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 76
                        }, {
                          text: '77' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 77
                        }, {
                          text: '78' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 78
                        }, {
                          text: '79' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 79
                        }, {
                          text: '80' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 80
                        }, {
                          text: '81' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 81
                        }, {
                          text: '82' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 82
                        }, {
                          text: '83' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 83
                        }, {
                          text: '84' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 84
                        }, {
                          text: '85' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 85
                        }, {
                          text: '86' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 86
                        }, {
                          text: '87' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 87
                        }, {
                          text: '88' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 88
                        }, {
                          text: '89' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 89
                        }, {
                          text: '90' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 90
                        }, {
                          text: '91' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 91
                        }, {
                          text: '92' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 92
                        }, {
                          text: '93' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 93
                        }, {
                          text: '94' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 94
                        }, {
                          text: '95' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 95
                        }, {
                          text: '96' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 96
                        }, {
                          text: '97' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 97
                        }, {
                          text: '98' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 98
                        }, {
                          text: '99' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 99
                        }, {
                          text: '100' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 100
                        }, {
                          text: '101' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 101
                        }, {
                          text: '102' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 102
                        }, {
                          text: '103' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 103
                        }, {
                          text: '104' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 104
                        }, {
                          text: '105' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 105
                        }, {
                          text: '106' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 106
                        }, {
                          text: '107' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 107
                        }, {
                          text: '108' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 108
                        }, {
                          text: '109' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 109
                        }, {
                          text: '110' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 110
                        }, {
                          text: '111' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 111
                        }, {
                          text: '112' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 112
                        }, {
                          text: '113' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 113
                        }, {
                          text: '114' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 114
                        }, {
                          text: '115' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 115
                        }, {
                          text: '116' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 116
                        }, {
                          text: '117' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 117
                        }, {
                          text: '118' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 118
                        }, {
                          text: '119' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 119
                        }, {
                          text: '120' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 120
                        }, {
                          text: '121' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 121
                        }, {
                          text: '122' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 122
                        }, {
                          text: '123' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 123
                        }, {
                          text: '124' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 124
                        }, {
                          text: '125' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 125
                        }, {
                          text: '126' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 126
                        }, {
                          text: '127' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 127
                        }, {
                          text: '128' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 128
                        }, {
                          text: '129' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 129
                        }, {
                          text: '130' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 130
                        }, {
                          text: '131' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 131
                        }, {
                          text: '132' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 132
                        }, {
                          text: '133' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 133
                        }, {
                          text: '134' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 134
                        }, {
                          text: '135' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 135
                        }, {
                          text: '136' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 136
                        }, {
                          text: '137' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 137
                        }, {
                          text: '138' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 138
                        }, {
                          text: '139' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 139
                        }, {
                          text: '140' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 140
                        }, {
                          text: '141' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 141
                        }, {
                          text: '142' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 142
                        }, {
                          text: '143' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 143
                        }, {
                          text: '144' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 144
                        }, {
                          text: '145' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 145
                        }, {
                          text: '146' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 146
                        }, {
                          text: '147' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 147
                        }, {
                          text: '148' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 148
                        }, {
                          text: '149' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 149
                        }, {
                          text: '150' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 150
                        }, {
                          text: '151' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 151
                        }, {
                          text: '152' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 152
                        }, {
                          text: '153' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 153
                        }, {
                          text: '154' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 154
                        }, {
                          text: '155' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 155
                        }, {
                          text: '156' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 156
                        }, {
                          text: '157' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 157
                        }, {
                          text: '158' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 158
                        }, {
                          text: '159' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 159
                        }, {
                          text: '160' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 160
                        }, {
                          text: '161' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 161
                        }, {
                          text: '162' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 162
                        }, {
                          text: '163' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 163
                        }, {
                          text: '164' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 164
                        }, {
                          text: '165' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 165
                        }, {
                          text: '166' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 166
                        }, {
                          text: '167' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 167
                        }, {
                          text: '168' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 168
                        }, {
                          text: '169' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 169
                        }, {
                          text: '170' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 170
                        }, {
                          text: '171' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 171
                        }, {
                          text: '172' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 172
                        }, {
                          text: '173' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 173
                        }, {
                          text: '174' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 174
                        }, {
                          text: '175' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 175
                        }, {
                          text: '176' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 176
                        }, {
                          text: '177' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 177
                        }, {
                          text: '178' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 178
                        }, {
                          text: '179' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 179
                        }, {
                          text: '180' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 180
                        }, {
                          text: '181' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 181
                        }, {
                          text: '182' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 182
                        }, {
                          text: '183' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 183
                        }, {
                          text: '184' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 184
                        }, {
                          text: '185' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 185
                        }, {
                          text: '186' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 186
                        }, {
                          text: '187' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 187
                        }, {
                          text: '188' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 188
                        }, {
                          text: '189' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 189
                        }, {
                          text: '190' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 190
                        }, {
                          text: '191' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 191
                        }, {
                          text: '192' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 192
                        }, {
                          text: '193' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 193
                        }, {
                          text: '194' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 194
                        }, {
                          text: '195' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 195
                        }, {
                          text: '196' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 196
                        }, {
                          text: '197' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 197
                        }, {
                          text: '198' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 198
                        }, {
                          text: '199' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 199
                        }, {
                          text: '200' + this.lang.instant('SPEED_PAGE.kmh'),
                          value: 200
                        }]
                      }]
                    };
                    _context4.next = 3;
                    return this.pickerController.create(opts);

                  case 3:
                    picker = _context4.sent;
                    picker.present();
                    picker.onDidDismiss().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this7, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        var _this8 = this;

                        var col;
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                if (!(this.ionPickerHandler == 'cancel')) {
                                  _context3.next = 2;
                                  break;
                                }

                                return _context3.abrupt("return");

                              case 2:
                                this.presentLoadingWithOptions();
                                _context3.next = 5;
                                return picker.getColumn('Speed Limit');

                              case 5:
                                col = _context3.sent;
                                this.speed_limit = col.options[col.selectedIndex].value;
                                this.preparingSpeedLimitRequest(this.deviceid, this.speed_limit).subscribe(function (data) {
                                  _this8.loading.dismiss();
                                }, function (error) {
                                  alert(error.error.message);

                                  _this8.loading.dismiss();
                                }, function () {
                                  _this8.loading.dismiss();
                                });

                              case 8:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 6:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
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
            s += '0' + d.getHours().toString();
          } else {
            s += d.getHours().toString();
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

      return SpeedPage;
    }();

    SpeedPage.ctorParameters = function () {
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
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], SpeedPage.prototype, "infiniteScroll", void 0);
    SpeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-speed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./speed.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speed/speed.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./speed.page.scss */
      "./src/app/pages/speed/speed.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], SpeedPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-speed-speed-module-es5.js.map