function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trip-trip-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trip/trip.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trip/trip.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTripTripPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>{{ 'TRIP_PAGE.trip_title' | translate }}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <!-- Vehicle Profile -->\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ item_icon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"selectDevice()\">\n          {{ item_name }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n  <!-- Speed Notification Title -->\n  <!-- <ion-grid>\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'TRIP_PAGE.parking_notification' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>{{ 'TRIP_PAGE.parking_notify' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"disarm_alert\" (click)=\"toggleDisarmAlert($event)\"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ 'TRIP_PAGE.parking_duration' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"arm_alert\" (click)=\"toggleArmAlert($event)\"></ion-toggle>\n      </ion-item>\n      \n    </ion-list>\n  </ion-grid> -->\n\n\n  <ion-grid class=\"ion-no-padding\">\n\n    <!-- Date Segment Title -->\n    <ion-row class=\"ion-padding\">\n      <ion-col size=\"12\">\n        <ion-segment mode=\"ios\" color=\"primary\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button value=\"today\" checked>\n            <ion-label>{{ 'TRIP_PAGE.today' | translate }}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"yesterday\">\n            <ion-label>{{ 'TRIP_PAGE.yesterday' | translate }}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"custom\">\n            <ion-label>{{ 'TRIP_PAGE.custom' | translate }}</ion-label>\n          </ion-segment-button>\n        </ion-segment>  \n      </ion-col>\n    </ion-row>\n\n    <ion-list class=\"margin-bottom-25\" *ngIf=\"segmentVal == 'custom'\">\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/calendar.svg\"></ion-icon>\n        <ion-label>{{ 'TRIP_PAGE.custom_date' | translate }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ 'TRIP_PAGE.start' | translate }}</ion-label>\n        <ion-datetime (ionChange)=\"onDateChanged()\" placeholder=\"{{ 'TRIP_PAGE.select_date_time' | translate }}\" displayFormat=\"DD/MMM/YYYY HH:mm\" [(ngModel)]=\"fromDate\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ 'TRIP_PAGE.end' | translate }}</ion-label>\n        <ion-datetime (ionChange)=\"onDateChanged()\" placeholder=\"{{ 'TRIP_PAGE.select_date_time' | translate }}\" displayFormat=\"DD/MMM/YYYY HH:mm\" [(ngModel)]=\"toDate\"></ion-datetime>\n      </ion-item>\n    </ion-list>\n      \n    <ion-list class=\"margin-top-25\">\n      <!-- Speed History Header Title -->\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/alarm-clock.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'TRIP_PAGE.trip_history' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <!-- Data List -->\n      <ion-item-group *ngFor=\"let item of dataList let i = index\">\n        <ion-item-divider *ngIf=\"item.have_group != 0\">\n          <ion-label>{{ item.have_group }}</ion-label>\n        </ion-item-divider>\n\n        <!-- Title -->\n        <ion-item *ngIf=\"item.have_group != 0\">\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"dark\">{{ 'TRIP_PAGE.start_time' | translate }}</ion-text>\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"dark\">{{ 'TRIP_PAGE.end_time' | translate }}</ion-text>\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"dark\">{{ 'TRIP_PAGE.duration' | translate }}</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-item>\n      \n        <!-- Content -->\n        <ion-item button (click)=\"tripDetail($event,i)\">\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                {{ item.startTimeStr }}\n              </ion-col>\n              \n              <ion-col size=\"4\" class=\"ion-text-center\">\n                {{ item.endTimeStr }}\n              </ion-col>\n              \n              <ion-col size=\"4\" class=\"ion-text-center\">\n                {{ item.durationStr }}\n              </ion-col>\n\n            </ion-row>\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item *ngIf=\"dataList?.length == 0\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          {{ 'APP.no_data' | translate }}\n        </ion-col>\n      </ion-item>\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/trip/trip-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/trip/trip-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TripPageRoutingModule */

  /***/
  function srcAppPagesTripTripRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripPageRoutingModule", function () {
      return TripPageRoutingModule;
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


    var _trip_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./trip.page */
    "./src/app/pages/trip/trip.page.ts");

    var routes = [{
      path: '',
      component: _trip_page__WEBPACK_IMPORTED_MODULE_3__["TripPage"]
    }];

    var TripPageRoutingModule = function TripPageRoutingModule() {
      _classCallCheck(this, TripPageRoutingModule);
    };

    TripPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TripPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/trip/trip.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/trip/trip.module.ts ***!
    \*******************************************/

  /*! exports provided: TripPageModule */

  /***/
  function srcAppPagesTripTripModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripPageModule", function () {
      return TripPageModule;
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


    var _trip_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./trip-routing.module */
    "./src/app/pages/trip/trip-routing.module.ts");
    /* harmony import */


    var _trip_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./trip.page */
    "./src/app/pages/trip/trip.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _trip_detail_trip_detail_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../trip-detail/trip-detail.page */
    "./src/app/pages/trip-detail/trip-detail.page.ts");

    var TripPageModule = function TripPageModule() {
      _classCallCheck(this, TripPageModule);
    };

    TripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _trip_routing_module__WEBPACK_IMPORTED_MODULE_5__["TripPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_trip_page__WEBPACK_IMPORTED_MODULE_6__["TripPage"], _trip_detail_trip_detail_page__WEBPACK_IMPORTED_MODULE_8__["TripDetailPage"]],
      entryComponents: [_trip_detail_trip_detail_page__WEBPACK_IMPORTED_MODULE_8__["TripDetailPage"]]
    })], TripPageModule);
    /***/
  },

  /***/
  "./src/app/pages/trip/trip.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/trip/trip.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTripTripPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-ios {\n  margin-bottom: 0px;\n}\n\n.ion-top-padding {\n  margin-top: 25px;\n}\n\n.ignitionOn {\n  color: var(--ion-color-success);\n}\n\n.ignitionOff {\n  color: var(--ion-color-danger);\n}\n\n.margin-bottom-25 {\n  margin-bottom: 20px;\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL3RyaXAvdHJpcC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3RyaXAvdHJpcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURDQTtFQUNJLCtCQUFBO0FDRUo7O0FEQ0E7RUFDSSw4QkFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7QUNHSjs7QUREQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmlwL3RyaXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaW9ze1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5pb24tdG9wLXBhZGRpbmd7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xufVxuXG4uaWduaXRpb25PbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmZ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuLm1hcmdpbi1ib3R0b20tMjV7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmlvbi1hdmF0YXIgaW1ne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG4gICAgYm9yZGVyOjRweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xufSIsIi5saXN0LWlvcyB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmlvbi10b3AtcGFkZGluZyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5pZ25pdGlvbk9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmlnbml0aW9uT2ZmIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4ubWFyZ2luLWJvdHRvbS0yNSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/trip/trip.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/trip/trip.page.ts ***!
    \*****************************************/

  /*! exports provided: TripPage */

  /***/
  function srcAppPagesTripTripPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripPage", function () {
      return TripPage;
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


    var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/helper.service */
    "./src/app/services/helper.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _trip_detail_trip_detail_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../trip-detail/trip-detail.page */
    "./src/app/pages/trip-detail/trip-detail.page.ts");
    /* harmony import */


    var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../select-device/select-device.page */
    "./src/app/pages/select-device/select-device.page.ts");

    var TripPage =
    /*#__PURE__*/
    function () {
      function TripPage(http, authService, navCtrl, loadingController, traccarService, lang, platform, alertService, storageService, helper, popoverController, modalController) {
        _classCallCheck(this, TripPage);

        this.http = http;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.traccarService = traccarService;
        this.lang = lang;
        this.platform = platform;
        this.alertService = alertService;
        this.storageService = storageService;
        this.helper = helper;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.dataList = [];
        this.dateTemp = 0;
        this.pagination = 1;
        this.segmentVal = 'today';
      }

      _createClass(TripPage, [{
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
                      component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_13__["SelectDevicePage"],
                      componentProps: {
                        // groupItems: this.groupItems,
                        // groupID: this.groupID
                        moduleName: "module_trip"
                      }
                    });

                  case 2:
                    assignItemModal = _context.sent;
                    assignItemModal.onDidDismiss().then(function (res) {
                      _this.selectedItems = res.data; // Present Preloading

                      _this.storageService.setItem().subscribe(function (res) {}, function (err) {
                        console.log(err);
                      }, function () {
                        _this.current_item = _this.selectedItems;
                        _this.deviceid = _this.current_item.deviceid;
                        var today = new Date();

                        var from_date_str = _this.helper.phpDateGMT7(today);

                        from_date_str += ' 00:00:00';

                        var to_date_str = _this.helper.phpDateGMT7(today);

                        to_date_str += ' ' + _this.helper.phpTimeGMT7(today);

                        _this.loadData(from_date_str, to_date_str);
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

          this.storageService.setItem().subscribe(function (res) {}, function (err) {
            console.log(err);
          }, function () {
            _this2.current_item = _this2.storageService.current_item;
            _this2.deviceid = _this2.current_item.deviceid;
            var today = new Date();

            var from_date_str = _this2.helper.phpDateGMT7(today);

            from_date_str += ' 00:00:00';

            var to_date_str = _this2.helper.phpDateGMT7(today);

            to_date_str += ' ' + _this2.helper.phpTimeGMT7(today);

            _this2.loadData(from_date_str, to_date_str);
          });
        }
      }, {
        key: "loadData",
        value: function loadData(from, to) {
          var _this3 = this;

          this.presentLoadingWithOptions();
          this.dataList = [];
          this.pagination = 1;
          this.dateTemp = '';
          this.traccarService.getTrip(this.deviceid, from, to).subscribe(function (res) {
            _this3.httpResponse = res;
          }, function (err) {
            if (err.error.message) {
              _this3.alertService.presentToast(err.error.message, "danger");
            } else {
              _this3.alertService.presentToast(err.message, "danger");
            }

            _this3.loading.dismiss();
          }, function () {
            _this3.loading.dismiss();

            _this3.httpResponse = JSON.parse(_this3.httpResponse.parking);
            _this3.dateTemp = '';

            for (var i = 0; i < _this3.httpResponse.length; i++) {
              var startReadableLocalDate = _this3.readableLocalDate(_this3.httpResponse[i].startTime);

              var startReadableLocalTime = _this3.readableLocalTime(_this3.httpResponse[i].startTime);

              var endReadableLocalDate = _this3.readableLocalDate(_this3.httpResponse[i].endTime);

              var endReadableLocalTime = _this3.readableLocalTime(_this3.httpResponse[i].endTime);

              var systemDate = _this3.systemDate(_this3.httpResponse[i].startTime);

              if (_this3.dateTemp == systemDate) {
                _this3.httpResponse[i].have_group = '0';
              } else {
                _this3.dateTemp = systemDate;
                _this3.httpResponse[i].have_group = startReadableLocalDate;
              }

              _this3.httpResponse[i].startTimeStr = startReadableLocalTime;
              _this3.httpResponse[i].endTimeStr = endReadableLocalTime;
              _this3.httpResponse[i].duration = _this3.httpResponse[i].duration / 60000;

              if (_this3.httpResponse[i].duration < 60) {
                _this3.httpResponse[i].durationStr = Math.round(_this3.httpResponse[i].duration) + _this3.lang.instant('APP.minute_s');
              } else if (_this3.httpResponse[i].duration < 60 * 60) {
                _this3.httpResponse[i].durationStr = Math.round(_this3.httpResponse[i].duration / 60) + _this3.lang.instant('APP.hour_s');
              } else if (_this3.httpResponse[i].duration < 60 * 60 * 24) {
                _this3.httpResponse[i].durationStr = Math.round(_this3.httpResponse[i].duration / 60 / 24) + _this3.lang.instant('APP.day_s');
              }

              _this3.dataList.push(_this3.httpResponse[i]);
            }

            _this3.item_name = _this3.current_item.name;
            _this3.item_icon = _this3.current_item.icon_name;
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
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["ENDPOINT"].API_URL + 'event/parking-alarm/notification/' + type + '/' + deviceid + '/' + bool, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "toggleArmAlert",
        value: function toggleArmAlert(ev) {
          var _this4 = this;

          this.presentLoadingWithOptions();
          setTimeout(function () {
            _this4.preparingRequest('arm_notification', _this4.deviceid, _this4.arm_alert).subscribe(function (data) {
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
        key: "toggleDisarmAlert",
        value: function toggleDisarmAlert(ev) {
          var _this5 = this;

          this.presentLoadingWithOptions();
          setTimeout(function () {
            _this5.preparingRequest('disarm_notification', _this5.deviceid, _this5.disarm_alert).subscribe(function (data) {
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
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          this.segmentVal = ev.target.value;

          if (this.segmentVal == "today") {
            var today = new Date();
            var from_date_str = this.helper.phpDateGMT7(today);
            from_date_str += ' 00:00:00';
            var to_date_str = this.helper.phpDateGMT7(today);
            to_date_str += ' ' + this.helper.phpTimeGMT7(today);
            this.dataList = [];
            this.loadData(from_date_str, to_date_str);
          } else if (this.segmentVal == "yesterday") {
            var yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            var _to_date_str = this.helper.phpDateGMT7(yesterday);

            _to_date_str += ' 23:59:59';

            var _from_date_str = this.helper.phpDateGMT7(yesterday);

            _from_date_str += ' 00:00:00';
            this.dataList = [];
            this.loadData(_from_date_str, _to_date_str);
          } else {
            console.log(this.fromDate);
            this.dataList = [];
            this.fromDate = '';
            this.toDate = '';
          }
        }
      }, {
        key: "onDateChanged",
        value: function onDateChanged() {
          if (this.fromDate && this.toDate) {
            var fromDate = new Date(this.fromDate);
            var fromDateStr = this.helper.phpDateGMT7(fromDate);
            fromDateStr += ' ' + this.helper.phpTimeGMT7(fromDate);
            var toDate = new Date(this.toDate);
            var toDateStr = this.helper.phpDateGMT7(toDate);
            toDateStr += ' ' + this.helper.phpTimeGMT7(toDate);
            this.dataList = [];
            this.loadData(fromDateStr, toDateStr);
          }
        }
      }, {
        key: "tripDetail",
        value: function tripDetail(ev, tripIndex) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var popover;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.create({
                      component: _trip_detail_trip_detail_page__WEBPACK_IMPORTED_MODULE_12__["TripDetailPage"],
                      event: ev,
                      translucent: true,
                      componentProps: {
                        distance: (this.httpResponse[tripIndex].distance / 1000).toFixed(2),
                        averageSpeed: (this.httpResponse[tripIndex].averageSpeed * 1.852).toFixed(2),
                        maxSpeed: (this.httpResponse[tripIndex].maxSpeed * 1.852).toFixed(2)
                      }
                    });

                  case 2:
                    popover = _context3.sent;
                    _context3.next = 5;
                    return popover.present();

                  case 5:
                    return _context3.abrupt("return", _context3.sent);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "systemDate",
        value: function systemDate(the_date) {
          var d;

          if (this.platform.is('ios')) {
            d = new Date(the_date.replace('.000+0000', ''));
          } else {
            d = new Date(the_date).toUTCString();
            d = new Date(d);
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
            d = new Date(the_date.replace('.000+0000', ''));
          } else {
            d = new Date(the_date).toUTCString();
            d = new Date(d);
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
            d = new Date(the_date.replace('.000+0000', ''));
          } else {
            d = new Date(the_date).toUTCString();
            d = new Date(d);
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

      return TripPage;
    }();

    TripPage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"]
      }, {
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])], TripPage.prototype, "infiniteScroll", void 0);
    TripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trip',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./trip.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trip/trip.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./trip.page.scss */
      "./src/app/pages/trip/trip.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], TripPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-trip-trip-module-es5.js.map