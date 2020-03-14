(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-date-picker/history-date-picker.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-date-picker/history-date-picker.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-list>\n\n  <ion-item button detail=\"false\" (click)=\"pickToday()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.today' | translate }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item button detail=\"false\" (click)=\"pickYesterday()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.yesterday' | translate }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item button detail=\"false\" (click)=\"pickLast3Days()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.last_3_days' | translate }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item button detail=\"false\" (click)=\"pickLast7Days()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.last_7_days' | translate }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item button detail=\"false\" (click)=\"pickLast30Days()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.last_30_days' | translate }}\n    </ion-label>\n  </ion-item>\n\n  <ion-item button detail=\"false\" (click)=\"pickCustomDate()\">\n    <ion-label class=\"ion-text-wrap\">\n      {{ 'HISTORY_PAGE.custom' | translate }}\n    </ion-label>\n    <!-- <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/check.svg\"></ion-icon> -->\n  </ion-item>\n\n</ion-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'HISTORY_PAGE.history' | translate }}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"changeDatePopOver($event)\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/calendar.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n  \n\n\n<ion-content>\n  <div id=\"map_canvas\"></div>\n  <div id=\"over_map\">\n    <ion-button size=\"small\" shape=\"round\" color=\"primary\" (click)=\"selectDevice()\">\n      {{ devicePlateNumber }}\n      <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar color=\"light\">\n\n    <ion-row class=\"padding-top-10\">\n    \n      <ion-col size=\"12\" class=\"text-center\">\n        {{ from }} to {{ to }}\n      </ion-col>\n\n      <ion-col size=\"2\" class=\"player-speed\">\n        x{{ playerSpeed }}\n      </ion-col>\n      <ion-col size=\"10\">\n        <ion-range [(ngModel)]=\"rangeCurrent\" min=\"{{ rangeStart }}\" max=\"{{ rangeStop }}\" color=\"primary\" mode=\"ios\">\n          <ion-label slot=\"start\">{{ rangeCurrent }}</ion-label>\n          <ion-label slot=\"end\">{{ rangeStop }}</ion-label>\n        </ion-range>\n      </ion-col>\n\n      <ion-col size=\"12\" class=\"text-center\">\n        {{ currentFixtime }}\n      </ion-col>\n    </ion-row>\n\n    <ion-grid class=\"text-center\">\n      \n        <ion-row>\n          <ion-col class=\"ion-no-padding\">\n            <ion-button color=\"primary\" [disabled]=\"!isEnabledDecBtn\" (click)=\"decreasePlayerSpeed()\" size=\"small\">\n              <ion-icon src=\"assets/themify-icons/SVG/control-backward.svg\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"primary\" (click)=\"play()\">\n              <ion-icon *ngIf=\"!isPlayed && !isRepeat\" src=\"assets/themify-icons/SVG/control-play.svg\"></ion-icon>\n              <ion-icon *ngIf=\"isPlayed && !isRepeat\" src=\"assets/themify-icons/SVG/control-pause.svg\"></ion-icon>\n              <ion-icon *ngIf=\"isRepeat\" src=\"assets/themify-icons/SVG/reload.svg\"></ion-icon>\n            </ion-button>\n            <ion-button color=\"primary\" [disabled]=\"!isEnabledIncBtn\" (click)=\"increasePlayerSpeed()\" size=\"small\">\n              <ion-icon src=\"assets/themify-icons/SVG/control-forward.svg\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n  </ion-toolbar>\n\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/history-date-picker/history-date-picker.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/history-date-picker/history-date-picker.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-ios {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvaGlzdG9yeS1kYXRlLXBpY2tlci9oaXN0b3J5LWRhdGUtcGlja2VyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlzdG9yeS1kYXRlLXBpY2tlci9oaXN0b3J5LWRhdGUtcGlja2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5LWRhdGUtcGlja2VyL2hpc3RvcnktZGF0ZS1waWNrZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaW9ze1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn0iLCIubGlzdC1pb3Mge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/history-date-picker/history-date-picker.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/history-date-picker/history-date-picker.page.ts ***!
  \***********************************************************************/
/*! exports provided: HistoryDatePickerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDatePickerPage", function() { return HistoryDatePickerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/language.service */ "./src/app/services/language.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");





let HistoryDatePickerPage = class HistoryDatePickerPage {
    constructor(popoverController, languageService, helper) {
        this.popoverController = popoverController;
        this.languageService = languageService;
        this.helper = helper;
    }
    ngOnInit() {
    }
    dismissPopover(param) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.popoverController.dismiss(param);
        });
    }
    pickToday() {
        let today = new Date();
        let from_date_str = this.helper.phpDateGMT7(today);
        from_date_str += ' 00:00:00';
        let to_date_str = this.helper.phpDateGMT7(today);
        to_date_str += ' ' + this.helper.phpTimeGMT7(today);
        let yesterday_string = { from: from_date_str, to: to_date_str };
        this.dismissPopover({ date_string: yesterday_string });
    }
    pickYesterday() {
        let yesterday = new Date();
        let to_date_str = this.helper.phpDateGMT7(yesterday);
        to_date_str += ' 23:59:59';
        yesterday.setDate(yesterday.getDate() - 1);
        let from_date_str = this.helper.phpDateGMT7(yesterday);
        from_date_str += ' 00:00:00';
        let today_string = { from: from_date_str, to: to_date_str };
        this.dismissPopover({ date_string: today_string });
    }
    pickLast3Days() {
        let yesterday = new Date();
        let to_date_str = this.helper.phpDateGMT7(yesterday);
        to_date_str += ' 23:59:59';
        yesterday.setDate(yesterday.getDate() - 3);
        let from_date_str = this.helper.phpDateGMT7(yesterday);
        from_date_str += ' 00:00:00';
        let today_string = { from: from_date_str, to: to_date_str };
        this.dismissPopover({ date_string: today_string });
    }
    pickLast7Days() {
        let yesterday = new Date();
        let to_date_str = this.helper.phpDateGMT7(yesterday);
        to_date_str += ' 23:59:59';
        yesterday.setDate(yesterday.getDate() - 7);
        let from_date_str = this.helper.phpDateGMT7(yesterday);
        from_date_str += ' 00:00:00';
        let today_string = { from: from_date_str, to: to_date_str };
        this.dismissPopover({ date_string: today_string });
    }
    pickLast30Days() {
        let yesterday = new Date();
        let to_date_str = this.helper.phpDateGMT7(yesterday);
        to_date_str += ' 23:59:59';
        yesterday.setDate(yesterday.getDate() - 30);
        let from_date_str = this.helper.phpDateGMT7(yesterday);
        from_date_str += ' 00:00:00';
        let today_string = { from: from_date_str, to: to_date_str };
        this.dismissPopover({ date_string: today_string });
    }
    pickCustomDate() {
    }
};
HistoryDatePickerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"] }
];
HistoryDatePickerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history-date-picker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history-date-picker.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-date-picker/history-date-picker.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history-date-picker.page.scss */ "./src/app/pages/history-date-picker/history-date-picker.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"],
        src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperService"]])
], HistoryDatePickerPage);



/***/ }),

/***/ "./src/app/pages/history/history-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/history/history.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/pages/history/history-routing.module.ts");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");
/* harmony import */ var _history_date_picker_history_date_picker_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../history-date-picker/history-date-picker.page */ "./src/app/pages/history-date-picker/history-date-picker.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"], _history_date_picker_history_date_picker_page__WEBPACK_IMPORTED_MODULE_7__["HistoryDatePickerPage"]],
        entryComponents: [_history_date_picker_history_date_picker_page__WEBPACK_IMPORTED_MODULE_7__["HistoryDatePickerPage"]],
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#wrapper {\n  position: relative;\n}\n\n#over_map {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  text-align: center;\n}\n\nion-content {\n  --overflow: hidden;\n}\n\n#map_canvas {\n  width: 100%;\n  height: 100%;\n}\n\nion-button.rounded {\n  --border-radius: 100% !important;\n}\n\nion-range {\n  padding: 0px 10px;\n}\n\n.padding-top-10 {\n  padding-top: 10px;\n}\n\n.player-speed {\n  padding-top: 15px;\n  text-align: right;\n}\n\n#mapcan {\n  height: 100%;\n}\n\n#infobox {\n  border: 1px solid #e9e9e9;\n  margin-top: 8px;\n  background: #f7f7f7;\n  color: #5e5e5e;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  padding: 0.5em 1em;\n  border-radius: 2px;\n  box-shadow: 0 0 8px #525252;\n  z-index: 1000;\n}\n\n#namexpopup {\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n#addresspopup {\n  font-size: 11px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n\n#callnowpopup {\n  text-align: center;\n  height: 20px;\n  background: green;\n  color: white;\n  padding-top: 5px;\n  margin-top: 5px;\n  margin-bottom: 4px;\n  cursor: pointer;\n  text-decoration: none;\n  width: 100%;\n}\n\n#callnowpopup:hover {\n  background: #026102;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFXLGtCQUFBO0FDRVg7O0FEREE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkE7RUFDSSxnQ0FBQTtBQ09KOztBREpBO0VBQ0ksaUJBQUE7QUNPSjs7QURKQTtFQUNJLGlCQUFBO0FDT0o7O0FETEE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDUUo7O0FESEE7RUFDSSxZQUFBO0FDTUo7O0FESEE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUdBLGtCQUFBO0VBRUEsMkJBQUE7RUFDQSxhQUFBO0FDTUo7O0FESEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDT0o7O0FESkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7QUNPSjs7QURKQTtFQUNJLG1CQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIgeyBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiNvdmVyX21hcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OjA7XG4gICAgei1pbmRleDogOTk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQge1xuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5pb24tYnV0dG9uLnJvdW5kZWR7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yYW5nZXtcbiAgICBwYWRkaW5nOjBweCAxMHB4O1xufVxuXG4ucGFkZGluZy10b3AtMTB7XG4gICAgcGFkZGluZy10b3A6MTBweDtcbn1cbi5wbGF5ZXItc3BlZWR7XG4gICAgcGFkZGluZy10b3A6MTVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuXG5cbiNtYXBjYW57XG4gICAgaGVpZ2h0OjEwMCU7XG59XG5cbiNpbmZvYm94IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNDcsIDI0NywgMjQ3KTtcbiAgICBjb2xvcjogcmdiKDk0LCA5NCwgOTQpO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4ICM1MjUyNTI7XG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAjNTI1MjUyO1xuICAgIHotaW5kZXg6IDEwMDA7XG59XG5cbiNuYW1leHBvcHVwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuI2FkZHJlc3Nwb3B1cHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gfVxuXG4jY2FsbG5vd3BvcHVwe1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jY2FsbG5vd3BvcHVwOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHJnYigyLCA5NywgMik7XG59IiwiI3dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNvdmVyX21hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW9uLWJ1dHRvbi5yb3VuZGVkIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yYW5nZSB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xufVxuXG4ucGFkZGluZy10b3AtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnBsYXllci1zcGVlZCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI21hcGNhbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2luZm9ib3gge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG4gIGNvbG9yOiAjNWU1ZTVlO1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA4cHggIzUyNTI1MjtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAjNTI1MjUyO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4jbmFtZXhwb3B1cCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4jYWRkcmVzc3BvcHVwIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbiNjYWxsbm93cG9wdXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NhbGxub3dwb3B1cDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMjYxMDI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/history/history.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _history_date_picker_history_date_picker_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../history-date-picker/history-date-picker.page */ "./src/app/pages/history-date-picker/history-date-picker.page.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../select-device/select-device.page */ "./src/app/pages/select-device/select-device.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");












let HistoryPage = class HistoryPage {
    constructor(http, navCtrl, popoverController, authService, platform, loadingController, lang, storageService, modalController) {
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
        this.deltaConst = 100;
        this.numDeltas = 0;
        this.delay = 1000; //milliseconds
        this.inc = 0;
        this.position = [];
        this.playerSpeed = 1;
        this.currentFixtime = '';
        this.from = '';
        this.to = '';
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
        this.isEnabledIncBtn = true;
        this.isEnabledDecBtn = false;
        this.numDeltas = this.deltaConst;
    }
    ionViewWillEnter() {
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.presentLoading();
            yield this.platform.ready();
            yield this.loadMap();
        });
    }
    ionViewDidLeave() {
        this.isPlayed = false;
    }
    loadMap() {
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMaps"].create('map_canvas', {
            camera: {
                target: {
                    lat: 11.5560777,
                    lng: 104.8941368
                },
                zoom: 7,
            }
        });
        this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_11__["GoogleMapsEvent"].MAP_READY).then(() => {
            // Get Current Item from Storage
            this.storageService.setItem().subscribe(res => {
                this.current_item = this.storageService.current_item;
                this.deviceIcon = this.current_item.icon_name;
                this.deviceIconSize = this.current_item.icon_size;
                this.devicePlateNumber = this.current_item.plate;
                console.log("current_item");
                console.log(this.current_item);
            }, (err) => {
                console.log(err);
            }, () => {
                this.init().subscribe(data => {
                    let response = data;
                    this.historyJson = response.positions;
                    this.rangeStop = this.historyJson.length;
                }, error => {
                    console.log(error);
                    this.loading.dismiss();
                }, () => {
                    if (this.rangeStop > 0) {
                        this.getData();
                    }
                    else {
                        alert("No data");
                    }
                    this.loading.dismiss();
                });
            });
        });
    }
    getData() {
        let driveCoordinates = [];
        let i = 0;
        this.historyJson.forEach(element => {
            driveCoordinates[i] = { "lat": element.latitude, "lng": element.longitude };
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
        this.drivePath = this.map.addPolylineSync({
            points: driveCoordinates,
            color: '#FF0000',
            width: 2,
            geodesic: true,
        });
        let icon = {
            url: 'assets/google/marker/' + this.current_item.icon_name + '.png',
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
            },
        });
        this.marker.setIconAnchor(this.deviceIconSize / 2, this.deviceIconSize / 2);
        let traccar_attributes = JSON.parse(this.historyJson[this.rangeCurrent].attributes);
        // let traccar_event = this.httpResponse.event;
        let traccar_status = '';
        let traccar_status_color = '';
        let traccar_speed = (Math.abs(this.historyJson[this.rangeCurrent].speed * 1.852)).toFixed(2) + this.lang.instant('APP.kmh') + '&nbsp;';
        let traccar_battery = Math.abs(traccar_attributes["batteryLevel"]);
        let traccar_ignition = this.lang.instant('APP.' + this.ignitionStatus[traccar_attributes["ignition"]]);
        let traccar_trip = (traccar_attributes["totalDistance"] / 1000).toFixed(2) + this.lang.instant('APP.km');
        let traccar_hours = (traccar_attributes["hours"] / 3.6e+6).toFixed(2) + this.lang.instant('APP.h');
        let traccar_date = this.readableLocalDate2(this.historyJson[this.rangeCurrent].fixtime) + ' ' + this.readableLocalTime2(this.historyJson[this.rangeCurrent].fixtime);
        let battery_spite = this.checkMyBatterySprite(traccar_battery);
        this.distance = '0' + this.lang.instant('APP.km');
        this.currentFixtime = traccar_date;
        this.position = [this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude];
        this.rangeCurrent++;
    }
    init(from = "", to = "") {
        if (from == '') {
            from = this.getTodayDateString().from;
        }
        if (to == '') {
            to = this.getTodayDateString().to;
        }
        this.from = from;
        this.to = to;
        this.authService.getToken();
        let token = this.authService.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
        });
        let deviceid = this.current_item.deviceid;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ENDPOINT"].API_URL + 'item/route-history', { headers: headers, params: { from: from, to: to, deviceid } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(data => {
            return data;
        }));
    }
    getTodayDateString() {
        let today = new Date();
        let from_date_str = today.getFullYear();
        from_date_str += '-';
        if ((today.getMonth() + 1) < 10) {
            from_date_str += '0' + (today.getMonth() + 1).toString();
        }
        else {
            from_date_str += (today.getMonth() + 1).toString();
        }
        from_date_str += '-';
        if (today.getDate() < 10) {
            from_date_str += '0' + today.getDate().toString();
        }
        else {
            from_date_str += today.getDate().toString();
        }
        from_date_str += ' 00:00:00';
        let to_date_str = today.getFullYear(); // + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        to_date_str += '-';
        if ((today.getMonth() + 1) < 10) {
            to_date_str += '0' + (today.getMonth() + 1).toString();
        }
        else {
            to_date_str += (today.getMonth() + 1).toString();
        }
        to_date_str += '-';
        if (today.getDate() < 10) {
            to_date_str += '0' + today.getDate().toString();
        }
        else {
            to_date_str += today.getDate().toString();
        }
        to_date_str += ' ';
        if (today.getHours() < 10) {
            to_date_str += '0' + today.getHours().toString();
        }
        else {
            to_date_str += today.getHours().toString();
        }
        to_date_str += ':';
        if (today.getMinutes() < 10) {
            to_date_str += '0' + today.getMinutes().toString();
        }
        else {
            to_date_str += today.getMinutes().toString();
        }
        to_date_str += ':';
        if (today.getSeconds() < 10) {
            to_date_str += '0' + today.getSeconds().toString();
        }
        else {
            to_date_str += today.getSeconds().toString();
        }
        let today_string = { from: from_date_str, to: to_date_str };
        return today_string;
    }
    play() {
        this.isPlayed = !this.isPlayed;
        this.recursiveExec();
        if (this.rangeCurrent == this.rangeStop) {
            this.isRepeat = false;
            this.rangeCurrent = 0;
        }
    }
    recursiveExec() {
        if (this.rangeCurrent >= this.rangeStop) {
            this.isRepeat = true;
            this.isPlayed = !this.isPlayed;
            return;
        }
        let deg = this.getHeadingDegree(this.position[0], this.position[1], this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude);
        if (deg != 0 && deg != 360)
            this.marker.setRotation(deg);
        let traccar_attributes = JSON.parse(this.historyJson[this.rangeCurrent].attributes);
        // let traccar_event = this.httpResponse.event;
        let traccar_status = '';
        let traccar_status_color = '';
        let traccar_speed = (Math.abs(this.historyJson[this.rangeCurrent].speed * 1.852)).toFixed(2) + this.lang.instant('APP.kmh') + '&nbsp;';
        let traccar_battery = Math.abs(traccar_attributes["batteryLevel"]);
        let traccar_ignition = this.lang.instant('APP.' + this.ignitionStatus[traccar_attributes["ignition"]]);
        let traccar_trip = (traccar_attributes["totalDistance"] / 1000).toFixed(2) + this.lang.instant('APP.km');
        let traccar_hours = (traccar_attributes["hours"] / 3.6e+6).toFixed(2) + this.lang.instant('APP.h');
        let traccar_date = this.readableLocalDate2(this.historyJson[this.rangeCurrent].fixtime) + ' ' + this.readableLocalTime2(this.historyJson[this.rangeCurrent].fixtime);
        let battery_spite = this.checkMyBatterySprite(traccar_battery);
        this.distance = '0' + this.lang.instant('APP.km');
        let infoBoxContent = '<div style="font-size:1.25em;opacity:0.90;border:1px solid rgba(119,119,119,0.75);border-radius:15px;height:' + this.lang.instant('APP.GeolocationInfoBoxHeight') + ';background-color:#fff"><div style="float:left;padding:7px 0px 5px 7px;">' + traccar_date + '</div><div style="float:right;padding:4px 7px 5px 0px;"><div style="background-color:' + traccar_status_color + ';color:#fff;padding:2px 5px; border-radius: 5px;">' + this.lang.instant('APP.' + traccar_status) + '</div></div><div style="border-bottom:1px solid rgba(119,119,119,0.75);clear:both;"></div><div style="width:48%;float:left;padding: 7px 0px 0px 7px;"><div style="width:auto;float:left"><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.battery') + '</div><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.ignition') + ' </div><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.speed') + '</div></div><div style="float:right;width:auto;"> <div style="padding:1px 0px;color:#fff;"><div style="' + this.lang.instant('APP.GeolocationInfoBoxBatteryHeight') + 'width:48px;font-size:1em;background:url(assets/google/battery/' + battery_spite + ') no-repeat;text-align:center;color:#111;">' + traccar_battery + '%</div></div> <div style="padding:1px 0px;color:#333;">' + traccar_ignition + '</div> <div style="padding:1px 0px;color:#333;">' + traccar_speed + '</div> </div></div><div style="float:left;width:4%;">&nbsp;</div><div style="width:48%;float:left;padding:7px 7px 0px 0px;"><div style="float:left;"><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.distance') + '</div><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.hours') + '</div><div style="padding:1px 0px;color:#1877f2;">' + this.lang.instant('APP.trip') + '</div></div><div style="float:right;"><div style="padding:1px 0px;color:#333;">' + this.distance + '</div><div style="padding:1px 0px;color:#333;">' + traccar_hours + '</div><div style="padding:1px 0px;color:#333;">' + traccar_trip + '</div></div></div><div style="clear:both;"></div></div>'
            + '<div style="width: 0px; height: 0px; border-style: solid; margin: auto; border-width: 12px 7px 0 7px; border-color: #333 transparent transparent transparent; line-height: 0px;"></div>';
        this.marker.setPosition({ lat: this.position[0], lng: this.position[1] });
        this.transition([this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude]);
    }
    readableLocalDate2(the_date) {
        let d;
        if (this.platform.is('ios')) {
            d = new Date(the_date.replace(' ', 'T'));
        }
        else {
            d = new Date(the_date + ' UTC');
        }
        let dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        let s = ' ' + this.lang.instant('APP.day');
        s = '';
        if (d.getDate() < 10) {
            s += '0' + d.getDate().toString();
        }
        else {
            s += d.getDate().toString();
        }
        s += '/' + this.lang.instant('APP.' + monthNames[d.getMonth()]);
        s += '/' + d.getFullYear();
        return s;
    }
    readableLocalTime2(the_date) {
        let d;
        if (this.platform.is('ios')) {
            d = new Date(the_date.replace(' ', 'T'));
        }
        else {
            d = new Date(the_date + ' UTC');
        }
        let s = '[';
        if (d.getHours() < 10) {
            s += '' + '0' + d.getHours().toString();
        }
        else {
            s += d.getHours().toString();
        }
        if (d.getMinutes() < 10) {
            s += ':0' + d.getMinutes().toString();
        }
        else {
            s += ':' + d.getMinutes().toString();
        }
        return s + ']';
    }
    checkMyBatterySprite(traccar_battery) {
        let battery_spite = '50.png';
        if (traccar_battery > 90)
            battery_spite = '100.png';
        else if (traccar_battery > 80)
            battery_spite = '90.png';
        else if (traccar_battery > 70)
            battery_spite = '80.png';
        else if (traccar_battery > 60)
            battery_spite = '70.png';
        else if (traccar_battery > 50)
            battery_spite = '60.png';
        else if (traccar_battery > 40)
            battery_spite = '50.png';
        else if (traccar_battery > 30)
            battery_spite = '40.png';
        else if (traccar_battery > 20)
            battery_spite = '30.png';
        else if (traccar_battery > 10)
            battery_spite = '20.png';
        else if (traccar_battery > 1)
            battery_spite = '10.png';
        else
            battery_spite = '0.png';
        return battery_spite;
    }
    goBack() {
        this.navCtrl.navigateBack('dashboard/tabs/home');
    }
    transition(result) {
        this.inc = 0;
        this.deltaLat = (result[0] - this.position[0]) / this.numDeltas;
        this.deltaLng = (result[1] - this.position[1]) / this.numDeltas;
        this.moveMarker();
    }
    moveMarker() {
        // if(this.isPlayed){
        // console.log("moveMarker is running");
        this.position[0] += this.deltaLat;
        this.position[1] += this.deltaLng;
        this.marker.setPosition({ lat: this.position[0], lng: this.position[1] });
        if (this.inc < this.numDeltas && this.isPlayed) {
            this.inc++;
            setTimeout(() => { this.moveMarker(), this.delay; });
        }
        else {
            this.position = [this.historyJson[this.rangeCurrent].latitude, this.historyJson[this.rangeCurrent].longitude];
            this.rangeCurrent++;
            if (this.isPlayed) {
                this.recursiveExec();
            }
            // let traccar_date = this.readableLocalDate2(this.historyJson[this.rangeCurrent].fixtime) + ' ' + this.readableLocalTime2(this.historyJson[this.rangeCurrent].fixtime);
            // this.currentFixtime = traccar_date;
        }
        // }
    }
    getHeadingDegree(lat1, lon1, lat2, lon2) {
        // console.log("getHeadingDegree is running");
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;
        let dLon = (lon2 - lon1) * Math.PI / 180;
        let y = Math.sin(dLon) * Math.cos(lat2);
        let x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
        var brng = Math.atan2(y, x);
        return (((brng * 180 / Math.PI) + 360) % 360);
    }
    getImageByDegree(degree = 0) {
        // console.log("getImageByDegree: is running");
        if (degree > 0 && degree <= 97) {
            if (degree > 0 && degree <= 7)
                return '0.png';
            else if (degree > 7 && degree <= 22)
                return '15.png';
            else if (degree > 22 && degree <= 37)
                return '30.png';
            else if (degree > 37 && degree <= 52)
                return '45.png';
            else if (degree > 52 && degree <= 67)
                return '60.png';
            else if (degree > 67 && degree <= 82)
                return '75.png';
            else if (degree > 82 && degree <= 97)
                return '90.png';
        }
        else if (degree > 97 && degree <= 187) {
            if (degree > 97 && degree <= 112)
                return '105.png';
            else if (degree > 112 && degree <= 127)
                return '120.png';
            else if (degree > 127 && degree <= 142)
                return '135.png';
            else if (degree > 142 && degree <= 157)
                return '150.png';
            else if (degree > 157 && degree <= 172)
                return '165.png';
            else if (degree > 172 && degree <= 187)
                return '180.png';
        }
        else if (degree > 187 && degree <= 277) {
            if (degree > 187 && degree <= 202)
                return '195.png';
            else if (degree > 202 && degree <= 217)
                return '210.png';
            else if (degree > 217 && degree <= 232)
                return '225.png';
            else if (degree > 232 && degree <= 247)
                return '240.png';
            else if (degree > 247 && degree <= 262)
                return '255.png';
            else if (degree > 262 && degree <= 277)
                return '270.png';
        }
        else if (degree > 277 && degree <= 360) {
            if (degree > 277 && degree <= 292)
                return '285.png';
            else if (degree > 292 && degree <= 307)
                return '300.png';
            else if (degree > 307 && degree <= 322)
                return '315.png';
            else if (degree > 322 && degree <= 337)
                return '330.png';
            else if (degree > 337 && degree <= 352)
                return '345.png';
            else
                return '360.png';
        }
        else
            return '360.png';
    }
    increasePlayerSpeed() {
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
    decreasePlayerSpeed() {
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
    checkEnabler() {
        if (this.playerSpeed == 1) {
            this.isEnabledDecBtn = false;
            this.isEnabledIncBtn = true;
        }
        else if (this.playerSpeed == 16) {
            this.isEnabledDecBtn = true;
            this.isEnabledIncBtn = false;
        }
        else {
            this.isEnabledDecBtn = true;
            this.isEnabledIncBtn = true;
        }
    }
    isInfoWindowOpen() {
        let map = this.infoBox.getMap();
        return (map !== null && typeof map !== "undefined");
    }
    readableLocalDate() {
        // let dateString = "2015-12-31 00:00:00+000";
        // let td = new Date(dateString);
        // console.log(td.getDay());
        let d;
        if (this.platform.is('ios')) {
            d = new Date((this.historyJson[this.rangeCurrent].fixtime).replace(' ', 'T'));
        }
        else {
            d = new Date(this.historyJson[this.rangeCurrent].fixtime + ' UTC');
        }
        let dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        let s = 'ថ្ងៃ';
        s += dayNames[d.getDay()];
        if (d.getDate() < 10) {
            s += ' ទី0' + d.getDate().toString();
        }
        else {
            s += ' ទី' + d.getDate().toString();
        }
        s += ' ខែ' + monthNames[d.getMonth()];
        s += ' ឆ្នាំ' + d.getFullYear();
        if (d.getHours() < 10) {
            s += ' ម៉ោង0' + d.getHours().toString();
        }
        else {
            s += ' ម៉ោង' + d.getHours().toString();
        }
        if (d.getMinutes() < 10) {
            s += ':0' + d.getMinutes().toString();
        }
        else {
            s += ':' + d.getMinutes().toString();
        }
        if (d.getSeconds() < 10) {
            s += ':0' + d.getSeconds().toString();
        }
        else {
            s += ':' + d.getSeconds().toString();
        }
        return s;
    }
    changeDatePopOver(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _history_date_picker_history_date_picker_page__WEBPACK_IMPORTED_MODULE_7__["HistoryDatePickerPage"],
                event: ev,
                translucent: true
            });
            popover.onDidDismiss().then(res => {
                console.log(res);
                if (res.data == null)
                    return;
                this.presentLoading();
                let onDidDismissData = res;
                this.from = onDidDismissData.data.date_string.from;
                this.to = onDidDismissData.data.date_string.to;
                this.init(onDidDismissData.data.date_string.from, onDidDismissData.data.date_string.to).subscribe(data => {
                    this.rangeStart = 0;
                    this.rangeStop = 0;
                    this.rangeCurrent = 0;
                    this.isPlayed = false;
                    this.isRepeat = false;
                    this.loadingController.dismiss();
                    let response = data;
                    this.historyJson = response.positions;
                    this.rangeStop = this.historyJson.length;
                }, error => {
                    console.log(error);
                    this.loadingController.dismiss();
                }, () => {
                    if (this.rangeStop > 0) {
                        this.getData();
                    }
                    else {
                        alert("No data");
                    }
                    this.loadingController.dismiss();
                });
            }).catch(err => {
                console.log(err);
            });
            return yield popover.present();
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait',
                duration: 60000
            });
            yield this.loading.present();
        });
    }
    ZoomControl(controlDiv, map, infoBox) {
        // Creating divs & styles for custom zoom control
        controlDiv.style.padding = '5px';
        // Set CSS for the control wrapper
        var controlWrapper = document.createElement('div');
        controlWrapper.style.cursor = 'pointer';
        controlWrapper.style.textAlign = 'center';
        controlWrapper.style.width = '40px';
        controlWrapper.style.height = '48px';
        controlWrapper.style.marginBottom = '80px';
        controlDiv.appendChild(controlWrapper);
        // Set CSS for the viewDialog
        var viewButton = document.createElement('div');
        viewButton.style.width = '40px';
        viewButton.style.height = '40px';
        viewButton.style.marginBottom = '2px';
        /* Change this to be the .png image you want to use */
        viewButton.style.backgroundImage = 'url("assets/google/viewBtn.png")';
        controlWrapper.appendChild(viewButton);
        // Setup the click event listener - zoomOut
        google.maps.event.addDomListener(viewButton, 'click', () => {
            this.infoBox.setVisible(!this.infoBox.getVisible());
        });
    }
    selectDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const assignItemModal = yield this.modalController.create({
                component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_9__["SelectDevicePage"],
                componentProps: {
                    // groupItems: this.groupItems,
                    // groupID: this.groupID
                    moduleName: "module_history"
                }
            });
            assignItemModal.onDidDismiss().then((res) => {
                this.selectedItems = res.data;
                // Present Preloading
                this.presentLoading();
                this.storageService.setItem().subscribe(res => {
                    this.current_item = this.selectedItems;
                    this.deviceIcon = this.current_item.icon_name;
                    this.deviceIconSize = this.current_item.icon_size;
                    this.devicePlateNumber = this.current_item.plate;
                }, (err) => {
                    console.log(err);
                }, () => {
                    this.init().subscribe(data => {
                        let response = data;
                        this.historyJson = response.positions;
                        this.rangeStop = this.historyJson.length;
                    }, error => {
                        console.log(error);
                        this.loading.dismiss();
                    }, () => {
                        if (this.rangeStop > 0) {
                            this.getData();
                        }
                        else {
                            alert("No data");
                        }
                        this.loading.dismiss();
                    });
                });
            }).catch(err => {
                console.log(err);
            });
            return yield assignItemModal.present();
        });
    }
};
HistoryPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('history_map', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HistoryPage.prototype, "mapElement", void 0);
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-history-history-module-es2015.js.map