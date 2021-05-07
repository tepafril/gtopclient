function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-date-picker/history-date-picker.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-date-picker/history-date-picker.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistoryDatePickerHistoryDatePickerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list>\n\n  <ion-item button detail=\"false\" (click)=\"pickToday()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.today' | translate }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item button detail=\"false\" (click)=\"pickYesterday()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.yesterday' | translate }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item button detail=\"false\" (click)=\"pickLast3Days()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.last_3_days' | translate }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item button detail=\"false\" (click)=\"pickLast7Days()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.last_7_days' | translate }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item button detail=\"false\" (click)=\"pickLast30Days()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.last_30_days' | translate }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item button detail=\"false\" (click)=\"pickCustomDate()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.custom' | translate }}\n    </ion-label>\n    <!-- <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/check.svg\"></ion-icon> -->\n  </ion-item>\n\n</ion-list>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'HISTORY_PAGE.history' | translate }}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"changeDatePopOver($event)\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/calendar.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n  \n\n\n<ion-content>\n  <div id=\"map_canvas\">\n\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n\n      <ion-fab-button color=\"primary\" size=\"small\" class=\"marginBottom5\" (click)=\"controlNavigateDevice()\">\n        <ion-icon name=\"locate-outline\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"success\" size=\"small\" class=\"marginBottom5\" (click)=\"controlNavigateStartPoint()\">\n        <ion-label>Start</ion-label>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"danger\" size=\"small\" class=\"marginBottom5\" (click)=\"controlNavigateFinishPoint()\">\n        <ion-label>Stop</ion-label>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"primary\" size=\"small\" class=\"marginBottom5\" (click)=\"controlToggleShowParkSign()\" *ngIf=\"showParkSign\">\n        <ion-label><b>P</b></ion-label>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"primary\" size=\"small\" class=\"marginBottom5 camera-disabled\" (click)=\"controlToggleShowParkSign()\" *ngIf=\"!showParkSign\">\n        <ion-label><b>P</b></ion-label>\n      </ion-fab-button>\n\n    </ion-fab>\n\n\n    <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"medium\" size=\"small\" class=\"marginBottom5\" (click)=\"controlSatelliteLayer()\">\n        <ion-icon name=\"layers-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"medium\" size=\"small\" class=\"marginBottom5\" (click)=\"controlTrafficLayer()\">\n        <ion-icon name=\"trail-sign-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"\" size=\"small\" class=\"marginBottom5\" (click)=\"controlZoomIn()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"\" size=\"small\" class=\"marginBottom5\" (click)=\"controlZoomOut()\">\n        <ion-icon name=\"remove-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n  </div>\n\n  <div id=\"over_map\">\n    <ion-button size=\"small\" shape=\"round\" color=\"primary\" (click)=\"selectDevice()\">\n      {{ devicePlateNumber }}\n      <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color=\"light\">\n\n    <ion-row class=\"padding-top-10\">\n    \n      <ion-col size=\"12\" class=\"text-center\">\n        {{ from }} to {{ to }}\n      </ion-col>\n\n      <ion-col size=\"2\" class=\"player-speed\">\n        x{{ playerSpeed }}\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-range [(ngModel)]=\"rangeCurrent\" min=\"{{ rangeStart }}\" max=\"{{ rangeStop }}\" color=\"primary\" mode=\"ios\">\n          <ion-label slot=\"start\">{{ rangeCurrent }}</ion-label>\n          <ion-label slot=\"end\">{{ rangeStop }}</ion-label>\n        </ion-range>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"text-center\">\n        {{ currentFixtime }}\n      </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"text-center\">\n      \n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-button color=\"primary\" [disabled]=\"!isEnabledDecBtn\" (click)=\"decreasePlayerSpeed()\" size=\"small\">\n              <ion-icon src=\"assets/themify-icons/SVG/control-backward.svg\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"primary\" (click)=\"play()\">\n              <ion-icon *ngIf=\"!isPlayed && !isRepeat\" src=\"assets/themify-icons/SVG/control-play.svg\"></ion-icon>\n              <ion-icon *ngIf=\"isPlayed && !isRepeat\" src=\"assets/themify-icons/SVG/control-pause.svg\"></ion-icon>\n              <ion-icon *ngIf=\"isRepeat\" src=\"assets/themify-icons/SVG/reload.svg\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"primary\" [disabled]=\"!isEnabledIncBtn\" (click)=\"increasePlayerSpeed()\" size=\"small\">\n              <ion-icon src=\"assets/themify-icons/SVG/control-forward.svg\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/history-date-picker/history-date-picker.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/history-date-picker/history-date-picker.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistoryDatePickerHistoryDatePickerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-ios {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnktZGF0ZS1waWNrZXIvaGlzdG9yeS1kYXRlLXBpY2tlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnktZGF0ZS1waWNrZXIvaGlzdG9yeS1kYXRlLXBpY2tlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS1kYXRlLXBpY2tlci9oaXN0b3J5LWRhdGUtcGlja2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWlvc3tcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59IiwiLmxpc3QtaW9zIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/history-date-picker/history-date-picker.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/history-date-picker/history-date-picker.page.ts ***!
    \***********************************************************************/

  /*! exports provided: HistoryDatePickerPage */

  /***/
  function srcAppPagesHistoryDatePickerHistoryDatePickerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryDatePickerPage", function () {
      return HistoryDatePickerPage;
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


    var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/language.service */
    "./src/app/services/language.service.ts");
    /* harmony import */


    var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/helper.service */
    "./src/app/services/helper.service.ts");

    var HistoryDatePickerPage =
    /*#__PURE__*/
    function () {
      function HistoryDatePickerPage(popoverController, languageService, helper) {
        _classCallCheck(this, HistoryDatePickerPage);

        this.popoverController = popoverController;
        this.languageService = languageService;
        this.helper = helper;
      }

      _createClass(HistoryDatePickerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissPopover",
        value: function dismissPopover(param) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.dismiss(param);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "pickToday",
        value: function pickToday() {
          var today = new Date();
          var from_date_str = this.helper.phpDateGMT7(today);
          from_date_str += ' 00:00:00';
          var to_date_str = this.helper.phpDateGMT7(today);
          to_date_str += ' ' + this.helper.phpTimeGMT7(today);
          var yesterday_string = {
            from: from_date_str,
            to: to_date_str
          };
          this.dismissPopover({
            date_string: yesterday_string
          });
        }
      }, {
        key: "pickYesterday",
        value: function pickYesterday() {
          var yesterday = new Date();
          var to_date_str = this.helper.phpDateGMT7(yesterday);
          to_date_str += ' 23:59:59';
          yesterday.setDate(yesterday.getDate() - 1);
          var from_date_str = this.helper.phpDateGMT7(yesterday);
          from_date_str += ' 00:00:00';
          var today_string = {
            from: from_date_str,
            to: to_date_str
          };
          this.dismissPopover({
            date_string: today_string
          });
        }
      }, {
        key: "pickLast3Days",
        value: function pickLast3Days() {
          var yesterday = new Date();
          var to_date_str = this.helper.phpDateGMT7(yesterday);
          to_date_str += ' 23:59:59';
          yesterday.setDate(yesterday.getDate() - 3);
          var from_date_str = this.helper.phpDateGMT7(yesterday);
          from_date_str += ' 00:00:00';
          var today_string = {
            from: from_date_str,
            to: to_date_str
          };
          this.dismissPopover({
            date_string: today_string
          });
        }
      }, {
        key: "pickLast7Days",
        value: function pickLast7Days() {
          var yesterday = new Date();
          var to_date_str = this.helper.phpDateGMT7(yesterday);
          to_date_str += ' 23:59:59';
          yesterday.setDate(yesterday.getDate() - 7);
          var from_date_str = this.helper.phpDateGMT7(yesterday);
          from_date_str += ' 00:00:00';
          var today_string = {
            from: from_date_str,
            to: to_date_str
          };
          this.dismissPopover({
            date_string: today_string
          });
        }
      }, {
        key: "pickLast30Days",
        value: function pickLast30Days() {
          var yesterday = new Date();
          var to_date_str = this.helper.phpDateGMT7(yesterday);
          to_date_str += ' 23:59:59';
          yesterday.setDate(yesterday.getDate() - 30);
          var from_date_str = this.helper.phpDateGMT7(yesterday);
          from_date_str += ' 00:00:00';
          var today_string = {
            from: from_date_str,
            to: to_date_str
          };
          this.dismissPopover({
            date_string: today_string
          });
        }
      }, {
        key: "pickCustomDate",
        value: function pickCustomDate() {}
      }]);

      return HistoryDatePickerPage;
    }();

    HistoryDatePickerPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
      }, {
        type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]
      }];
    };

    HistoryDatePickerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history-date-picker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history-date-picker.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-date-picker/history-date-picker.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history-date-picker.page.scss */
      "./src/app/pages/history-date-picker/history-date-picker.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])], HistoryDatePickerPage);
    /***/
  },

  /***/
  "./src/app/pages/history/history-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/history/history-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: HistoryPageRoutingModule */

  /***/
  function srcAppPagesHistoryHistoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function () {
      return HistoryPageRoutingModule;
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


    var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/history/history.page.ts");

    var routes = [{
      path: '',
      component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }];

    var HistoryPageRoutingModule = function HistoryPageRoutingModule() {
      _classCallCheck(this, HistoryPageRoutingModule);
    };

    HistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HistoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/history/history.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/history/history.module.ts ***!
    \*************************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppPagesHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
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


    var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./history-routing.module */
    "./src/app/pages/history/history-routing.module.ts");
    /* harmony import */


    var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/pages/history/history.page.ts");
    /* harmony import */


    var _history_date_picker_history_date_picker_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../history-date-picker/history-date-picker.page */
    "./src/app/pages/history-date-picker/history-date-picker.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var HistoryPageModule = function HistoryPageModule() {
      _classCallCheck(this, HistoryPageModule);
    };

    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"], _history_date_picker_history_date_picker_page__WEBPACK_IMPORTED_MODULE_7__["HistoryDatePickerPage"]],
      entryComponents: [_history_date_picker_history_date_picker_page__WEBPACK_IMPORTED_MODULE_7__["HistoryDatePickerPage"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/history/history.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/history/history.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#wrapper {\n  position: relative;\n}\n\n#over_map {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  text-align: center;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\n#map_canvas {\n  width: 100%;\n  height: 100%;\n}\n\nion-button.rounded {\n  --border-radius: 100% !important;\n}\n\nion-range {\n  padding: 0px 10px;\n}\n\n.padding-top-10 {\n  padding-top: 10px;\n}\n\n.player-speed {\n  padding-top: 15px;\n  text-align: right;\n}\n\n#mapcan {\n  height: 100%;\n}\n\n#infobox {\n  border: 1px solid #e9e9e9;\n  margin-top: 8px;\n  background: #f7f7f7;\n  color: #5e5e5e;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  padding: 0.5em 1em;\n  border-radius: 2px;\n  box-shadow: 0 0 8px #525252;\n  z-index: 1000;\n}\n\n#namexpopup {\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n#addresspopup {\n  font-size: 11px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\n#callnowpopup {\n  text-align: center;\n  height: 20px;\n  background: green;\n  color: white;\n  padding-top: 5px;\n  margin-top: 5px;\n  margin-bottom: 4px;\n  cursor: pointer;\n  text-decoration: none;\n  width: 100%;\n}\n\n#callnowpopup:hover {\n  background: #026102;\n}\n\n.camera-disabled {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVyxrQkFBQTtBQ0VYOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksZ0NBQUE7QUNPSjs7QURKQTtFQUNJLGlCQUFBO0FDT0o7O0FESkE7RUFDSSxpQkFBQTtBQ09KOztBRExBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ1FKOztBREhBO0VBQ0ksWUFBQTtBQ01KOztBREhBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFHQSxrQkFBQTtFQUVBLDJCQUFBO0VBQ0EsYUFBQTtBQ01KOztBREhBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ09KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDT0o7O0FESkE7RUFDSSxtQkFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHsgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4jb3Zlcl9tYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDowO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG4jbWFwX2NhbnZhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWJ1dHRvbi5yb3VuZGVke1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pb24tcmFuZ2V7XG4gICAgcGFkZGluZzowcHggMTBweDtcbn1cblxuLnBhZGRpbmctdG9wLTEwe1xuICAgIHBhZGRpbmctdG9wOjEwcHg7XG59XG4ucGxheWVyLXNwZWVke1xuICAgIHBhZGRpbmctdG9wOjE1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cblxuXG4jbWFwY2Fue1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG4jaW5mb2JveCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzMywgMjMzLCAyMzMpO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCAyNDcsIDI0Nyk7XG4gICAgY29sb3I6IHJnYig5NCwgOTQsIDk0KTtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogLjVlbSAxZW07XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDhweCAjNTI1MjUyO1xuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggIzUyNTI1MjtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4jbmFtZXhwb3B1cHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbiNhZGRyZXNzcG9wdXB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuIH1cblxuI2NhbGxub3dwb3B1cHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2NhbGxub3dwb3B1cDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMiwgOTcsIDIpO1xufVxuLmNhbWVyYS1kaXNhYmxlZHtcbiAgICBvcGFjaXR5OiAwLjY7XG59IiwiI3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNvdmVyX21hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWJ1dHRvbi5yb3VuZGVkIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG4ucGFkZGluZy10b3AtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnBsYXllci1zcGVlZCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI21hcGNhbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2luZm9ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIGNvbG9yOiAjNWU1ZTVlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggIzUyNTI1MjtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAjNTI1MjUyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4jbmFtZXhwb3B1cCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4jYWRkcmVzc3BvcHVwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbiNjYWxsbm93cG9wdXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NhbGxub3dwb3B1cDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMjYxMDI7XG59XG5cbi5jYW1lcmEtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/history/history.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/history/history.page.ts ***!
    \***********************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppPagesHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _history_date_picker_history_date_picker_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../history-date-picker/history-date-picker.page */
    "./src/app/pages/history-date-picker/history-date-picker.page.ts");
    /* harmony import */


    var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/launch-navigator/ngx */
    "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
    /* harmony import */


    var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../select-device/select-device.page */
    "./src/app/pages/select-device/select-device.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");

    var HistoryPage =
    /*#__PURE__*/
    function () {
      function HistoryPage(launchNavigator, http, navCtrl, popoverController, authService, platform, loadingController, lang, storageService, modalController) {
        _classCallCheck(this, HistoryPage);

        this.launchNavigator = launchNavigator;
        this.http = http;
        this.navCtrl = navCtrl;
        this.popoverController = popoverController;
        this.authService = authService;
        this.platform = platform;
        this.loadingController = loadingController;
        this.lang = lang;
        this.storageService = storageService;
        this.modalController = modalController;
        this.map = null;
        this.markers = [];
        this.isTracking = false;
        this.user = null;
        this.rangeStart = 0;
        this.rangeStop = 0;
        this.rangeCurrent = 0;
        this.isPlayed = false;
        this.isRepeat = false;
        this.deltaConst = 50;
        this.numDeltas = 0;
        this.delay = 1000; //milliseconds

        this.inc = 0;
        this.position = [];
        this.playerSpeed = 1;
        this.currentFixtime = '';
        this.from = '';
        this.to = '';
        this.parkingJson = [];
        this.statusColor = {
          "deviceOnline": "#00a850",
          "deviceOffline": "#db3d2c",
          "deviceMoving": "#1877f2",
          "deviceStopped": "#db3d2c",
          "deviceUnknown": "#111111",
          "deviceOverspeed": "#db3d2c",
          "ignitionOn": "#00a850",
          "ignitionOff": "#db3d2c"
        };
        this.statusText = {
          "deviceOnline": "online",
          "deviceOffline": "offline",
          "deviceMoving": "moving",
          "deviceStopped": "stopped",
          "deviceUnknown": "unknown",
          "deviceOverspeed": "overspeed",
          "ignitionOn": "engine_on",
          "ignitionOff": "engine_off"
        };
        this.ignitionStatus = {
          "true": "on",
          "false": "off",
          "on": "on",
          "off": "off"
        };
        this.drivePath = null;
        this.parkingMarker = [];
        this.isEnabledIncBtn = true;
        this.isEnabledDecBtn = false;
        this.toggleTraffic = false;
        this.toggleSatellite = false;
        this.followCamera = false;
        this.showParkSign = false;
        this.numDeltas = this.deltaConst;
      }

      _createClass(HistoryPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.presentLoading();
                    _context2.next = 3;
                    return this.platform.ready();

                  case 3:
                    _context2.next = 5;
                    return this.loadMap();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "ionViewDidLeave",
        value: function ionViewDidLeave() {
          this.isPlayed = false;
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var _this = this;

          this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_12__["GoogleMaps"].create('map_canvas', {
            camera: {
              target: {
                lat: 11.5560777,
                lng: 104.8941368
              },
              zoom: 7
            },
            preferences: {
              zoom: {
                minZoom: 6,
                maxZoom: 18
              },
              building: true
            },
            controls: {
              compass: false
            },
            gestures: {
              rotate: false
            }
          });
          this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_12__["GoogleMapsEvent"].MAP_READY).then(function () {
            // Get Current Item from Storage
            _this.storageService.setItem().subscribe(function (res) {
              _this.current_item = _this.storageService.current_item;
              _this.deviceIcon = _this.current_item.icon_name;
              _this.deviceIconSize = _this.current_item.icon_size;
              _this.devicePlateNumber = _this.current_item.plate;
              console.log("current_item");
              console.log(_this.current_item);
            }, function (err) {
              console.log(err);
            }, function () {
              _this.init().subscribe(function (data) {
                var response = data;
                _this.historyJson = response.positions;
                _this.parkingJson = JSON.parse(response.parking);
                _this.rangeStop = _this.historyJson.length;
              }, function (error) {
                console.log(error);

                _this.loading.dismiss();
              }, function () {
                if (_this.rangeStop > 0) {
                  _this.getData();
                } else {
                  alert("No data");
                }

                _this.loading.dismiss();
              });
            });
          });
        }
      }, {
        key: "getData",
        value: function getData() {
          var driveCoordinates = [];
          var i = 0;
          this.historyJson.forEach(function (element) {
            driveCoordinates[i] = {
              "lat": element.latitude,
              "lng": element.longitude
            };
            i++;
          });
          this.map.setOptions({
            camera: {
              target: driveCoordinates
            }
          });

          if (this.drivePath != null) {
            // this.drivePath.setPoints(this.driveCoordinates);
            this.drivePath.remove();
            this.drivePath = null;
            this.marker.remove();
            this.marker = null;
          }

          if (this.parkingMarker.length > 0) {
            for (var _i = 0; _i < this.parkingMarker.length; _i++) {
              this.parkingMarker[_i].remove();
            }
          }

          if (this.startMarker != null) {
            this.startMarker.remove();
            this.startMarker = null;
          }

          if (this.finishMarker != null) {
            this.finishMarker.remove();
            this.finishMarker = null;
          }

          for (var _i2 = 0; _i2 < this.parkingJson.length; _i2++) {
            if (this.showParkSign) {
              var parkingIcon = {
                url: 'assets/google/marker/park-sign.png',
                size: {
                  width: 40,
                  height: 57
                }
              };
              var parking = this.map.addMarkerSync({
                icon: parkingIcon,
                position: {
                  lat: this.parkingJson[_i2].latitude,
                  lng: this.parkingJson[_i2].longitude
                }
              });
              this.parkingMarker.push(parking);
            }
          }

          this.drivePath = this.map.addPolylineSync({
            points: driveCoordinates,
            color: '#1877f2',
            width: 5,
            geodesic: true
          });
          var icon = {
            url: 'assets/google/marker/' + this.current_item.icon_name + '/0.png',
            size: {
              width: this.deviceIconSize,
              height: this.deviceIconSize
            }
          };
          this.marker = this.map.addMarkerSync({
            icon: icon,
            position: {
              lat: this.historyJson[0].latitude,
              lng: this.historyJson[0].longitude
            }
          });
          this.marker.setIconAnchor(this.deviceIconSize / 2, this.deviceIconSize / 2);

          if (!this.showParkSign) {
            var startIcon = {
              url: 'assets/google/marker/start-sign.png',
              size: {
                width: 40,
                height: 57
              }
            };
            this.startMarker = this.map.addMarkerSync({
              icon: startIcon,
              position: {
                lat: this.historyJson[0].latitude,
                lng: this.historyJson[0].longitude
              }
            });
          }

          if (!this.showParkSign) {
            var countHistoryJson = this.historyJson.length - 1;
            var finishIcon = {
              url: 'assets/google/marker/stop-sign.png',
              size: {
                width: 40,
                height: 57
              }
            };
            this.finishMarker = this.map.addMarkerSync({
              icon: finishIcon,
              position: {
                lat: this.historyJson[countHistoryJson].latitude,
                lng: this.historyJson[countHistoryJson].longitude
              }
            });
          }

          var traccar_attributes = JSON.parse(this.historyJson[this.rangeCurrent].attributes); // let traccar_event = this.httpResponse.event;

          var traccar_status = '';
          var traccar_status_color = '';
          var traccar_speed = Math.abs(this.historyJson[this.rangeCurrent].speed * 1.852).toFixed(2) + this.lang.instant('APP.kmh') + '&nbsp;';
          var traccar_battery = Math.abs(traccar_attributes["batteryLevel"]);
          var traccar_ignition = this.lang.instant('APP.' + this.ignitionStatus[traccar_attributes["ignition"]]);
          var traccar_trip = (traccar_attributes["totalDistance"] / 1000).toFixed(2) + this.lang.instant('APP.km');
          var traccar_hours = (traccar_attributes["hours"] / 3.6e+6).toFixed(2) + this.lang.instant('APP.h');
          var traccar_date = this.readableLocalDate2(this.historyJson[this.rangeCurrent].fixtime) + ' ' + this.readableLocalTime2(this.historyJson[this.rangeCurrent].fixtime);
          var battery_spite = this.checkMyBatterySprite(traccar_battery);
          this.distance = '0' + this.lang.instant('APP.km');
          this.currentFixtime = traccar_date;
          this.position = [this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude];
          this.rangeCurrent++;
        }
      }, {
        key: "init",
        value: function init() {
          var from = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

          if (from == '') {
            from = this.getTodayDateString().from;
          }

          if (to == '') {
            to = this.getTodayDateString().to;
          }

          this.from = from;
          this.to = to;
          this.authService.getToken();
          var token = this.authService.token;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
          });
          var deviceid = this.current_item.deviceid;
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ENDPOINT"].API_URL + 'item/route-history', {
            headers: headers,
            params: {
              from: from,
              to: to,
              deviceid: deviceid
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getTodayDateString",
        value: function getTodayDateString() {
          var today = new Date();
          var from_date_str = today.getFullYear();
          from_date_str += '-';

          if (today.getMonth() + 1 < 10) {
            from_date_str += '0' + (today.getMonth() + 1).toString();
          } else {
            from_date_str += (today.getMonth() + 1).toString();
          }

          from_date_str += '-';

          if (today.getDate() < 10) {
            from_date_str += '0' + today.getDate().toString();
          } else {
            from_date_str += today.getDate().toString();
          }

          from_date_str += ' 00:00:00';
          var to_date_str = today.getFullYear(); // + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

          to_date_str += '-';

          if (today.getMonth() + 1 < 10) {
            to_date_str += '0' + (today.getMonth() + 1).toString();
          } else {
            to_date_str += (today.getMonth() + 1).toString();
          }

          to_date_str += '-';

          if (today.getDate() < 10) {
            to_date_str += '0' + today.getDate().toString();
          } else {
            to_date_str += today.getDate().toString();
          }

          to_date_str += ' ';

          if (today.getHours() < 10) {
            to_date_str += '0' + today.getHours().toString();
          } else {
            to_date_str += today.getHours().toString();
          }

          to_date_str += ':';

          if (today.getMinutes() < 10) {
            to_date_str += '0' + today.getMinutes().toString();
          } else {
            to_date_str += today.getMinutes().toString();
          }

          to_date_str += ':';

          if (today.getSeconds() < 10) {
            to_date_str += '0' + today.getSeconds().toString();
          } else {
            to_date_str += today.getSeconds().toString();
          }

          var today_string = {
            from: from_date_str,
            to: to_date_str
          };
          return today_string;
        }
      }, {
        key: "play",
        value: function play() {
          this.isPlayed = !this.isPlayed;
          this.recursiveExec();

          if (this.rangeCurrent == this.rangeStop) {
            this.isRepeat = false;
            this.rangeCurrent = 0;
          }
        }
      }, {
        key: "recursiveExec",
        value: function recursiveExec() {
          if (this.rangeCurrent >= this.rangeStop) {
            this.isRepeat = true;
            this.isPlayed = !this.isPlayed;
            return;
          }

          var deg = this.getHeadingDegree(this.position[0], this.position[1], this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude);
          if (deg != 0 && deg != 360) this.marker.setRotation(deg);
          var traccar_attributes = JSON.parse(this.historyJson[this.rangeCurrent].attributes); // let traccar_event = this.httpResponse.event;

          var traccar_status = '';
          var traccar_status_color = '';
          var traccar_speed = Math.abs(this.historyJson[this.rangeCurrent].speed * 1.852).toFixed(2) + this.lang.instant('APP.kmh') + '&nbsp;';
          var traccar_battery = Math.abs(traccar_attributes["batteryLevel"]);
          var traccar_ignition = this.lang.instant('APP.' + this.ignitionStatus[traccar_attributes["ignition"]]);
          var traccar_trip = (traccar_attributes["totalDistance"] / 1000).toFixed(2) + this.lang.instant('APP.km');
          var traccar_hours = (traccar_attributes["hours"] / 3.6e+6).toFixed(2) + this.lang.instant('APP.h');
          var traccar_date = this.readableLocalDate2(this.historyJson[this.rangeCurrent].fixtime) + ' ' + this.readableLocalTime2(this.historyJson[this.rangeCurrent].fixtime);
          var battery_spite = this.checkMyBatterySprite(traccar_battery);
          this.distance = '0' + this.lang.instant('APP.km');
          var infoBoxContent = '<div style="font-size:1.25em;opacity:0.90;border:1px solid rgba(119,119,119,0.75);border-radius:15px;height:' + this.lang.instant('APP.GeolocationInfoBoxHeight') + ';background-color:#fff"><div style="float:left;padding:7px 0px 5px 7px;">' + traccar_date + '</div><div style="float:right;padding:4px 7px 5px 0px;"><div style="background-color:' + traccar_status_color + ';color:#fff;padding:2px 5px; border-radius: 5px;">' + this.lang.instant('APP.' + traccar_status) + '</div></div><div style="border-bottom:1px solid rgba(119,119,119,0.75);clear:both;"></div><div style="width:48%;float:left;padding: 7px 0px 0px 7px;"><div style="width:auto;float:left"><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.battery') + '</div><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.ignition') + ' </div><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.speed') + '</div></div><div style="float:right;width:auto;"> <div style="padding:1px 0px;color:#fff;"><div style="' + this.lang.instant('APP.GeolocationInfoBoxBatteryHeight') + 'width:48px;font-size:1em;background:url(assets/google/battery/' + battery_spite + ') no-repeat;text-align:center;color:#111;">' + traccar_battery + '%</div></div> <div style="padding:1px 0px;color:#333;">' + traccar_ignition + '</div> <div style="padding:1px 0px;color:#333;">' + traccar_speed + '</div> </div></div><div style="float:left;width:4%;">&nbsp;</div><div style="width:48%;float:left;padding:7px 7px 0px 0px;"><div style="float:left;"><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.distance') + '</div><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.hours') + '</div><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.trip') + '</div></div><div style="float:right;"><div style="padding:1px 0px;color:#333;">' + this.distance + '</div><div style="padding:1px 0px;color:#333;">' + traccar_hours + '</div><div style="padding:1px 0px;color:#333;">' + traccar_trip + '</div></div></div><div style="clear:both;"></div></div>' + '<div style="width: 0px; height: 0px; border-style: solid; margin: auto; border-width: 12px 7px 0 7px; border-color: #333 transparent transparent transparent; line-height: 0px;"></div>';
          this.marker.setPosition({
            lat: this.position[0],
            lng: this.position[1]
          });
          this.transition([this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude]);
        }
      }, {
        key: "readableLocalDate2",
        value: function readableLocalDate2(the_date) {
          var d;

          if (this.platform.is('ios')) {
            d = new Date(the_date.replace(' ', 'T'));
          } else {
            d = new Date(the_date + ' UTC');
          }

          var dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
          var monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
          var s = ' ' + this.lang.instant('APP.day');
          s = '';

          if (d.getDate() < 10) {
            s += '0' + d.getDate().toString();
          } else {
            s += d.getDate().toString();
          }

          s += '/' + this.lang.instant('APP.' + monthNames[d.getMonth()]);
          s += '/' + d.getFullYear();
          return s;
        }
      }, {
        key: "readableLocalTime2",
        value: function readableLocalTime2(the_date) {
          var d;

          if (this.platform.is('ios')) {
            d = new Date(the_date.replace(' ', 'T'));
          } else {
            d = new Date(the_date + ' UTC');
          }

          var s = '[';

          if (d.getHours() < 10) {
            s += '' + '0' + d.getHours().toString();
          } else {
            s += d.getHours().toString();
          }

          if (d.getMinutes() < 10) {
            s += ':0' + d.getMinutes().toString();
          } else {
            s += ':' + d.getMinutes().toString();
          }

          return s + ']';
        }
      }, {
        key: "checkMyBatterySprite",
        value: function checkMyBatterySprite(traccar_battery) {
          var battery_spite = '50.png';
          if (traccar_battery > 90) battery_spite = '100.png';else if (traccar_battery > 80) battery_spite = '90.png';else if (traccar_battery > 70) battery_spite = '80.png';else if (traccar_battery > 60) battery_spite = '70.png';else if (traccar_battery > 50) battery_spite = '60.png';else if (traccar_battery > 40) battery_spite = '50.png';else if (traccar_battery > 30) battery_spite = '40.png';else if (traccar_battery > 20) battery_spite = '30.png';else if (traccar_battery > 10) battery_spite = '20.png';else if (traccar_battery > 1) battery_spite = '10.png';else battery_spite = '0.png';
          return battery_spite;
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.navigateBack('dashboard/tabs/home');
        }
      }, {
        key: "transition",
        value: function transition(result) {
          this.inc = 0;
          this.deltaLat = (result[0] - this.position[0]) / this.numDeltas;
          this.deltaLng = (result[1] - this.position[1]) / this.numDeltas;
          this.moveMarker();
        }
      }, {
        key: "moveMarker",
        value: function moveMarker() {
          var _this2 = this;

          // if(this.isPlayed){
          // console.log("moveMarker is running");
          this.position[0] += this.deltaLat;
          this.position[1] += this.deltaLng;
          this.marker.setPosition({
            lat: this.position[0],
            lng: this.position[1]
          });

          if (this.inc < this.numDeltas && this.isPlayed) {
            this.inc++;
            setTimeout(function () {
              _this2.moveMarker(), _this2.delay;
            });
          } else {
            this.position = [this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude];
            this.rangeCurrent++;

            if (this.isPlayed) {
              this.recursiveExec();
            }

            var traccar_date = this.readableLocalDate2(this.historyJson[this.rangeCurrent].fixtime) + ' ' + this.readableLocalTime2(this.historyJson[this.rangeCurrent].fixtime);
            this.currentFixtime = traccar_date;
          } // }

        }
      }, {
        key: "getHeadingDegree",
        value: function getHeadingDegree(lat1, lon1, lat2, lon2) {
          // console.log("getHeadingDegree is running");
          lat1 = lat1 * Math.PI / 180;
          lat2 = lat2 * Math.PI / 180;
          var dLon = (lon2 - lon1) * Math.PI / 180;
          var y = Math.sin(dLon) * Math.cos(lat2);
          var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
          var brng = Math.atan2(y, x);
          return (brng * 180 / Math.PI + 360) % 360;
        }
      }, {
        key: "increasePlayerSpeed",
        value: function increasePlayerSpeed() {
          if (this.isEnabledIncBtn) {
            switch (this.playerSpeed) {
              case 1:
                this.playerSpeed = 2;
                break;

              case 2:
                this.playerSpeed = 4;
                break;

              case 4:
                this.playerSpeed = 8;
                break;

              case 8:
                this.playerSpeed = 16;
                break;

              default:
                this.playerSpeed = 1;
                break;
            }

            this.numDeltas = Math.abs(this.deltaConst / this.playerSpeed);
            this.checkEnabler();
          }
        }
      }, {
        key: "decreasePlayerSpeed",
        value: function decreasePlayerSpeed() {
          if (this.isEnabledDecBtn) {
            switch (this.playerSpeed) {
              case 16:
                this.playerSpeed = 8;
                break;

              case 8:
                this.playerSpeed = 4;
                break;

              case 4:
                this.playerSpeed = 2;
                break;

              case 2:
                this.playerSpeed = 1;
                break;

              default:
                this.playerSpeed = 1;
                break;
            }

            this.numDeltas = Math.abs(this.deltaConst / this.playerSpeed);
            this.checkEnabler();
          }
        }
      }, {
        key: "checkEnabler",
        value: function checkEnabler() {
          if (this.playerSpeed == 1) {
            this.isEnabledDecBtn = false;
            this.isEnabledIncBtn = true;
          } else if (this.playerSpeed == 16) {
            this.isEnabledDecBtn = true;
            this.isEnabledIncBtn = false;
          } else {
            this.isEnabledDecBtn = true;
            this.isEnabledIncBtn = true;
          }
        }
      }, {
        key: "isInfoWindowOpen",
        value: function isInfoWindowOpen() {
          var map = this.infoBox.getMap();
          return map !== null && typeof map !== "undefined";
        }
      }, {
        key: "readableLocalDate",
        value: function readableLocalDate() {
          // let dateString = "2015-12-31 00:00:00+000";
          // let td = new Date(dateString);
          // console.log(td.getDay());
          var d;

          if (this.platform.is('ios')) {
            d = new Date(this.historyJson[this.rangeCurrent].fixtime.replace(' ', 'T'));
          } else {
            d = new Date(this.historyJson[this.rangeCurrent].fixtime + ' UTC');
          }

          var dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
          var monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
          var s = 'ថ្ងៃ';
          s += dayNames[d.getDay()];

          if (d.getDate() < 10) {
            s += ' ទី0' + d.getDate().toString();
          } else {
            s += ' ទី' + d.getDate().toString();
          }

          s += ' ខែ' + monthNames[d.getMonth()];
          s += ' ឆ្នាំ' + d.getFullYear();

          if (d.getHours() < 10) {
            s += ' ម៉ោង0' + d.getHours().toString();
          } else {
            s += ' ម៉ោង' + d.getHours().toString();
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
      }, {
        key: "changeDatePopOver",
        value: function changeDatePopOver(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var popover;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.popoverController.create({
                      component: _history_date_picker_history_date_picker_page__WEBPACK_IMPORTED_MODULE_7__["HistoryDatePickerPage"],
                      event: ev,
                      translucent: true
                    });

                  case 2:
                    popover = _context3.sent;
                    popover.onDidDismiss().then(function (res) {
                      console.log(res);
                      if (res.data == null) return;

                      _this3.presentLoading();

                      var onDidDismissData = res;
                      _this3.from = onDidDismissData.data.date_string.from;
                      _this3.to = onDidDismissData.data.date_string.to;

                      _this3.init(onDidDismissData.data.date_string.from, onDidDismissData.data.date_string.to).subscribe(function (data) {
                        _this3.rangeStart = 0;
                        _this3.rangeStop = 0;
                        _this3.rangeCurrent = 0;
                        _this3.isPlayed = false;
                        _this3.isRepeat = false;

                        _this3.loadingController.dismiss();

                        var response = data;
                        _this3.historyJson = response.positions;
                        _this3.parkingJson = JSON.parse(response.parking);
                        _this3.rangeStop = _this3.historyJson.length;
                      }, function (error) {
                        console.log(error);

                        _this3.loadingController.dismiss();
                      }, function () {
                        if (_this3.rangeStop > 0) {
                          _this3.getData();
                        } else {
                          alert("No data");
                        }

                        _this3.loadingController.dismiss();
                      });
                    }).catch(function (err) {
                      console.log(err);
                    });
                    _context3.next = 6;
                    return popover.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait',
                      duration: 60000
                    });

                  case 2:
                    this.loading = _context4.sent;
                    _context4.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "selectDevice",
        value: function selectDevice() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this4 = this;

            var assignItemModal;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.modalController.create({
                      component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_10__["SelectDevicePage"],
                      componentProps: {
                        // groupItems: this.groupItems,
                        // groupID: this.groupID
                        moduleName: "module_history"
                      }
                    });

                  case 2:
                    assignItemModal = _context5.sent;
                    assignItemModal.onDidDismiss().then(function (res) {
                      _this4.selectedItems = res.data; // Present Preloading

                      _this4.presentLoading();

                      _this4.storageService.setItem().subscribe(function (res) {
                        _this4.current_item = _this4.selectedItems;
                        _this4.deviceIcon = _this4.current_item.icon_name;
                        _this4.deviceIconSize = _this4.current_item.icon_size;
                        _this4.devicePlateNumber = _this4.current_item.plate;
                      }, function (err) {
                        console.log(err);
                      }, function () {
                        _this4.init().subscribe(function (data) {
                          var response = data;
                          _this4.historyJson = response.positions;
                          _this4.parkingJson = JSON.parse(response.parking);
                          _this4.rangeStop = _this4.historyJson.length;
                        }, function (error) {
                          console.log(error);

                          _this4.loading.dismiss();
                        }, function () {
                          if (_this4.rangeStop > 0) {
                            _this4.getData();
                          } else {
                            alert("No data");
                          }

                          _this4.loading.dismiss();
                        });
                      });
                    }).catch(function (err) {
                      console.log(err);
                    });
                    _context5.next = 6;
                    return assignItemModal.present();

                  case 6:
                    return _context5.abrupt("return", _context5.sent);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "controlNavigateDevice",
        value: function controlNavigateDevice() {
          this.map.animateCamera({
            target: {
              lat: this.historyJson[this.rangeCurrent].latitude,
              lng: this.historyJson[this.rangeCurrent].longitude
            },
            duration: 750
          });
        }
      }, {
        key: "controlNavigateStartPoint",
        value: function controlNavigateStartPoint() {
          this.map.animateCamera({
            target: {
              lat: this.historyJson[0].latitude,
              lng: this.historyJson[0].longitude
            },
            duration: 750
          });
        }
      }, {
        key: "controlNavigateFinishPoint",
        value: function controlNavigateFinishPoint() {
          var countHistoryJson = this.historyJson.length - 1;
          this.map.animateCamera({
            target: {
              lat: this.historyJson[countHistoryJson].latitude,
              lng: this.historyJson[countHistoryJson].longitude
            },
            duration: 750
          });
        }
      }, {
        key: "controlTrafficLayer",
        value: function controlTrafficLayer() {
          this.toggleTraffic = !this.toggleTraffic;
          this.map.setTrafficEnabled(this.toggleTraffic);
        }
      }, {
        key: "controlSatelliteLayer",
        value: function controlSatelliteLayer() {
          this.toggleSatellite = !this.toggleSatellite;

          if (this.toggleSatellite == false) {
            this.map.setMapTypeId(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_12__["GoogleMapsMapTypeId"]["ROADMAP"]);
          } else {
            this.map.setMapTypeId(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_12__["GoogleMapsMapTypeId"]["HYBRID"]);
          }
        }
      }, {
        key: "controlZoomIn",
        value: function controlZoomIn() {
          this.map.animateCameraZoomIn().then(function () {});
        }
      }, {
        key: "controlZoomOut",
        value: function controlZoomOut() {
          this.map.animateCameraZoomOut().then(function () {});
        }
      }, {
        key: "controlToggleShowParkSign",
        value: function controlToggleShowParkSign() {
          this.showParkSign = !this.showParkSign;

          if (this.showParkSign) {
            for (var i = 0; i < this.parkingJson.length; i++) {
              var parkingIcon = {
                url: 'assets/google/marker/park-sign.png',
                size: {
                  width: 40,
                  height: 57
                }
              };
              var parking = this.map.addMarkerSync({
                icon: parkingIcon,
                position: {
                  lat: this.parkingJson[i].latitude,
                  lng: this.parkingJson[i].longitude
                }
              });
              this.parkingMarker.push(parking);
            }

            this.startMarker.remove();
            this.startMarker = null;
            this.finishMarker.remove();
            this.finishMarker = null;
          } else {
            for (var _i3 = 0; _i3 < this.parkingMarker.length; _i3++) {
              this.parkingMarker[_i3].remove();
            }

            var startIcon = {
              url: 'assets/google/marker/start-sign.png',
              size: {
                width: 40,
                height: 57
              }
            };
            this.startMarker = this.map.addMarkerSync({
              icon: startIcon,
              position: {
                lat: this.historyJson[0].latitude,
                lng: this.historyJson[0].longitude
              }
            });
            var countHistoryJson = this.historyJson.length - 1;
            var finishIcon = {
              url: 'assets/google/marker/stop-sign.png',
              size: {
                width: 40,
                height: 57
              }
            };
            this.finishMarker = this.map.addMarkerSync({
              icon: finishIcon,
              position: {
                lat: this.historyJson[countHistoryJson].latitude,
                lng: this.historyJson[countHistoryJson].longitude
              }
            });
          }
        }
      }, {
        key: "controlGoogleDirection",
        value: function controlGoogleDirection() {// let options: LaunchNavigatorOptions = {
          //   start: [this.userPosition.lat,this.userPosition.lng],
          //   app: this.launchNavigator.APP.GOOGLE_MAPS
          // };
          // this.launchNavigator.navigate([this.devicePosition.lat,this.devicePosition.lng],options)
          //   .then(success =>{
          //     console.log(success);
          //   },error=>{
          //     console.log(error);
          // });
        }
      }]);

      return HistoryPage;
    }();

    HistoryPage.ctorParameters = function () {
      return [{
        type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_9__["LaunchNavigator"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
      }, {
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('history_map', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], HistoryPage.prototype, "mapElement", void 0);
    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/pages/history/history.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_9__["LaunchNavigator"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], HistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-history-history-module-es5.js.map