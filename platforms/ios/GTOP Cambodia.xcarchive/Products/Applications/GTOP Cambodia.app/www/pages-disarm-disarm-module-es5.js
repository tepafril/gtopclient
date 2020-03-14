function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-disarm-disarm-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/disarm/disarm.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/disarm/disarm.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDisarmDisarmPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'DISARM_PAGE.arm_disarm' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\" routerLink=\"/deliveries\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ item_icon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"selectDevice()\">\n          {{ item_name }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-padding ion-top-padding1\">\n\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'DISARM_PAGE.arm_disarm_notification' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ 'DISARM_PAGE.notify_arm' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"arm_alert\" (click)=\"toggleArmAlert($event)\"></ion-toggle>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>{{ 'DISARM_PAGE.notify_disarm' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"disarm_alert\" (click)=\"toggleDisarmAlert($event)\"></ion-toggle>\n      </ion-item>\n      \n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/alarm-clock.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'DISARM_PAGE.arm_disarm_history' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-group *ngFor=\"let item of dataList\">\n        <ion-item-divider *ngIf=\"item.have_group != 0\">\n          <ion-label>{{ item.serverdate }}</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>{{ item.servertime }}</ion-label>\n          <ion-note class=\"{{ item.note_class }}\" slot=\"end\">{{ item.type }}</ion-note>\n        </ion-item>\n        \n      </ion-item-group>\n    </ion-list>\n \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-grid>\n\n\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/disarm/disarm-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/disarm/disarm-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DisarmPageRoutingModule */

  /***/
  function srcAppPagesDisarmDisarmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisarmPageRoutingModule", function () {
      return DisarmPageRoutingModule;
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


    var _disarm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./disarm.page */
    "./src/app/pages/disarm/disarm.page.ts");

    var routes = [{
      path: '',
      component: _disarm_page__WEBPACK_IMPORTED_MODULE_3__["DisarmPage"]
    }];

    var DisarmPageRoutingModule = function DisarmPageRoutingModule() {
      _classCallCheck(this, DisarmPageRoutingModule);
    };

    DisarmPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DisarmPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/disarm/disarm.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/disarm/disarm.module.ts ***!
    \***********************************************/

  /*! exports provided: DisarmPageModule */

  /***/
  function srcAppPagesDisarmDisarmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisarmPageModule", function () {
      return DisarmPageModule;
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


    var _disarm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./disarm-routing.module */
    "./src/app/pages/disarm/disarm-routing.module.ts");
    /* harmony import */


    var _disarm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./disarm.page */
    "./src/app/pages/disarm/disarm.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var DisarmPageModule = function DisarmPageModule() {
      _classCallCheck(this, DisarmPageModule);
    };

    DisarmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _disarm_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisarmPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_disarm_page__WEBPACK_IMPORTED_MODULE_6__["DisarmPage"]]
    })], DisarmPageModule);
    /***/
  },

  /***/
  "./src/app/pages/disarm/disarm.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/disarm/disarm.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDisarmDisarmPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ion-top-padding {\n  margin-top: 25px;\n}\n\n.ignitionOn {\n  color: var(--ion-color-success);\n}\n\n.ignitionOff {\n  color: var(--ion-color-danger);\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvZGlzYXJtL2Rpc2FybS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rpc2FybS9kaXNhcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rpc2FybS9kaXNhcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi10b3AtcGFkZGluZ3tcbiAgICBtYXJnaW4tdG9wOjI1cHg7XG59XG5cbi5pZ25pdGlvbk9ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5pZ25pdGlvbk9mZntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1hdmF0YXIgaW1ne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG4gICAgYm9yZGVyOjRweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xufSIsIi5pb24tdG9wLXBhZGRpbmcge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uaWduaXRpb25PbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5pZ25pdGlvbk9mZiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cblxuaW9uLWF2YXRhciBpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/disarm/disarm.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/disarm/disarm.page.ts ***!
    \*********************************************/

  /*! exports provided: DisarmPage */

  /***/
  function srcAppPagesDisarmDisarmPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisarmPage", function () {
      return DisarmPage;
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

    var DisarmPage =
    /*#__PURE__*/
    function () {
      function DisarmPage(http, authService, navCtrl, loadingController, traccarService, lang, platform, alertService, storageService, modalController) {
        _classCallCheck(this, DisarmPage);

        this.http = http;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.traccarService = traccarService;
        this.lang = lang;
        this.platform = platform;
        this.alertService = alertService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.dataList = [];
        this.dateTemp = 0;
        this.pagination = 1;
      }

      _createClass(DisarmPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.presentLoadingWithOptions();
          this.storageService.setItem().subscribe(function (res) {}, function (err) {
            console.log(err);
          }, function () {
            _this.current_item = _this.storageService.current_item;

            _this.initIgnitionQuery(_this.current_item.deviceid);
          });
        }
      }, {
        key: "initIgnitionQuery",
        value: function initIgnitionQuery(deviceid) {
          var _this2 = this;

          this.dataList = [];
          this.pagination = 1;
          this.dateTemp = '';
          this.traccarService.getIgnition(deviceid, this.pagination).subscribe(function (res) {
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

              _this2.httpResponse[i].serverdate = readableLocalDate;
              _this2.httpResponse[i].servertime = readableLocalTime;
              _this2.httpResponse[i].note_class = _this2.httpResponse[i].type;
              _this2.httpResponse[i].type = _this2.lang.instant('APP.' + _this2.httpResponse[i].type);

              _this2.dataList.push(_this2.httpResponse[i]);
            }

            _this2.pagination++;
            _this2.item_name = _this2.current_item.name;
            _this2.item_icon = _this2.current_item.icon_name;
            _this2.arm_alert = _this2.current_item.arm_notification;
            _this2.disarm_alert = _this2.current_item.disarm_notification;
            _this2.deviceid = _this2.current_item.deviceid;

            _this2.loading.dismiss();
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this3 = this;

          this.traccarService.getIgnition(this.deviceid, this.pagination).subscribe(function (res) {
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

              _this3.httpResponse[i].serverdate = readableLocalDate;
              _this3.httpResponse[i].servertime = readableLocalTime;
              _this3.httpResponse[i].note_class = _this3.httpResponse[i].type;
              _this3.httpResponse[i].type = _this3.lang.instant('APP.' + _this3.httpResponse[i].type);

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
        key: "selectDevice",
        value: function selectDevice() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

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
                        moduleName: "module_ignition"
                      }
                    });

                  case 2:
                    assignItemModal = _context.sent;
                    assignItemModal.onDidDismiss().then(function (res) {
                      _this4.selectedItems = res.data; // Present Preloading

                      _this4.presentLoadingWithOptions();

                      _this4.storageService.setItem().subscribe(function (res) {}, function (err) {
                        console.log(err);
                      }, function () {
                        _this4.current_item = _this4.selectedItems;

                        _this4.initIgnitionQuery(_this4.current_item.deviceid);
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
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ENDPOINT"].API_URL + 'event/ignition/notification/' + type + '/' + deviceid + '/' + bool, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "toggleArmAlert",
        value: function toggleArmAlert(ev) {
          var _this5 = this;

          this.presentLoadingWithOptions();
          setTimeout(function () {
            _this5.preparingRequest('arm_notification', _this5.deviceid, _this5.arm_alert).subscribe(function (data) {
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
        key: "toggleDisarmAlert",
        value: function toggleDisarmAlert(ev) {
          var _this6 = this;

          this.presentLoadingWithOptions();
          setTimeout(function () {
            _this6.preparingRequest('disarm_notification', _this6.deviceid, _this6.disarm_alert).subscribe(function (data) {
              _this6.loading.dismiss();
            }, function (error) {
              // alert(error.error.message);
              _this6.loading.dismiss();
            }, function () {
              _this6.loading.dismiss();
            });
          }, 50);
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

      return DisarmPage;
    }();

    DisarmPage.ctorParameters = function () {
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], DisarmPage.prototype, "infiniteScroll", void 0);
    DisarmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-disarm',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./disarm.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/disarm/disarm.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./disarm.page.scss */
      "./src/app/pages/disarm/disarm.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], DisarmPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-disarm-disarm-module-es5.js.map