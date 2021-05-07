(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-summary-summary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>{{ 'SUMMARY_PAGE.summary_title' | translate }}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Vehicle Profile -->\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ item_icon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"selectDevice()\">\n          {{ item_name }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-padding\">\n\n    <!-- Date Segment Title -->\n    <ion-row class=\"ion-padding\">\n      <ion-col size=\"12\">\n        <ion-segment mode=\"ios\" color=\"primary\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button value=\"today\" checked>\n            <ion-label>{{ 'SUMMARY_PAGE.today' | translate }}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"yesterday\">\n            <ion-label>{{ 'SUMMARY_PAGE.yesterday' | translate }}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"custom\">\n            <ion-label>{{ 'SUMMARY_PAGE.custom' | translate }}</ion-label>\n          </ion-segment-button>\n        </ion-segment>  \n      </ion-col>\n    </ion-row>\n\n    <ion-list class=\"margin-bottom-25\" *ngIf=\"segmentVal == 'custom'\">\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/calendar.svg\"></ion-icon>\n        <ion-label>{{ 'SUMMARY_PAGE.custom_date' | translate }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ 'SUMMARY_PAGE.start' | translate }}</ion-label>\n        <ion-datetime (ionChange)=\"onDateChanged()\" placeholder=\"{{ 'SUMMARY_PAGE.select_date_time' | translate }}\" displayFormat=\"DD/MMM/YYYY HH:mm\" [(ngModel)]=\"fromDate\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ 'SUMMARY_PAGE.end' | translate }}</ion-label>\n        <ion-datetime (ionChange)=\"onDateChanged()\" placeholder=\"{{ 'SUMMARY_PAGE.select_date_time' | translate }}\" displayFormat=\"DD/MMM/YYYY HH:mm\" [(ngModel)]=\"toDate\"></ion-datetime>\n      </ion-item>\n    </ion-list>\n      \n    <ion-list class=\"margin-top-25\">\n      <!-- Speed History Header Title -->\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/alarm-clock.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'SUMMARY_PAGE.driving_summary' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <!-- Data List -->\n      <ion-item-group *ngFor=\"let item of dataList let i = index\">\n        <ion-item-divider>\n          <ion-label>{{ fromDateStr }} - {{ toDateStr }}</ion-label>\n        </ion-item-divider>\n      \n        <!-- Content -->\n        <ion-item>\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"6\" class=\"ion-text-left\">\n                <ion-text color=\"dark\">\n                  {{ 'SUMMARY_PAGE.distance' | translate }}\n                </ion-text>\n              </ion-col>\n              \n              <ion-col size=\"6\" class=\"ion-text-right\">\n                <ion-text color=\"success\">\n                  {{ item.distance }}\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"6\" class=\"ion-text-left\">\n                <ion-text color=\"dark\">\n                  {{ 'SUMMARY_PAGE.avg_speed' | translate }}\n                </ion-text>\n              </ion-col>\n              <ion-col size=\"6\" class=\"ion-text-right\">\n                <ion-text color=\"success\">\n                  {{ item.averageSpeed }}\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"6\" class=\"ion-text-left\">\n                <ion-text color=\"dark\">\n                  {{ 'SUMMARY_PAGE.max_speed' | translate }}\n                </ion-text>\n              </ion-col>\n              \n              <ion-col size=\"6\" class=\"ion-text-right\">\n                <ion-text color=\"success\">\n                  {{ item.maxSpeed }}\n                </ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item *ngIf=\"dataList?.length == 0\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          {{ 'APP.no_data' | translate }}\n        </ion-col>\n      </ion-item>\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/summary/summary-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/summary/summary-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SummaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageRoutingModule", function() { return SummaryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary.page */ "./src/app/pages/summary/summary.page.ts");




const routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_3__["SummaryPage"]
    }
];
let SummaryPageRoutingModule = class SummaryPageRoutingModule {
};
SummaryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SummaryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/summary/summary.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/summary/summary.module.ts ***!
  \*************************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-routing.module */ "./src/app/pages/summary/summary-routing.module.ts");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.page */ "./src/app/pages/summary/summary.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let SummaryPageModule = class SummaryPageModule {
};
SummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]]
    })
], SummaryPageModule);



/***/ }),

/***/ "./src/app/pages/summary/summary.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/summary/summary.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-ios {\n  margin-bottom: 0px;\n}\n\n.ion-top-padding {\n  margin-top: 25px;\n}\n\n.ignitionOn {\n  color: var(--ion-color-success);\n}\n\n.ignitionOff {\n  color: var(--ion-color-danger);\n}\n\n.margin-bottom-25 {\n  margin-bottom: 20px;\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL3N1bW1hcnkvc3VtbWFyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3N1bW1hcnkvc3VtbWFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURDQTtFQUNJLCtCQUFBO0FDRUo7O0FEQ0E7RUFDSSw4QkFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7QUNHSjs7QUREQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdW1tYXJ5L3N1bW1hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaW9ze1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5pb24tdG9wLXBhZGRpbmd7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xufVxuXG4uaWduaXRpb25PbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmZ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuLm1hcmdpbi1ib3R0b20tMjV7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbmlvbi1hdmF0YXIgaW1ne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG4gICAgYm9yZGVyOjRweCBzb2xpZCAjZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xufSIsIi5saXN0LWlvcyB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmlvbi10b3AtcGFkZGluZyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5pZ25pdGlvbk9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbn1cblxuLmlnbml0aW9uT2ZmIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4ubWFyZ2luLWJvdHRvbS0yNSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/summary/summary.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/summary/summary.page.ts ***!
  \***********************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/traccar.service */ "./src/app/services/traccar.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../select-device/select-device.page */ "./src/app/pages/select-device/select-device.page.ts");













let SummaryPage = class SummaryPage {
    constructor(http, authService, navCtrl, loadingController, traccarService, lang, platform, alertService, storageService, helper, popoverController, modalController) {
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
    selectDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const assignItemModal = yield this.modalController.create({
                component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_10__["SelectDevicePage"],
                componentProps: {
                    // groupItems: this.groupItems,
                    // groupID: this.groupID
                    moduleName: "module_summary"
                }
            });
            assignItemModal.onDidDismiss().then((res) => {
                this.selectedItems = res.data;
                // Present Preloading
                this.storageService.setItem().subscribe(res => {
                }, (err) => {
                    console.log(err);
                }, () => {
                    this.current_item = this.selectedItems;
                    this.deviceid = this.current_item.deviceid;
                    let today = new Date();
                    this.fromDateStr = this.readableLocalDate(today) + '[00:00]';
                    this.toDateStr = this.readableLocalDate(today) + '[23:59]';
                    let from_date_str = this.helper.phpDateGMT7(today);
                    from_date_str += ' 00:00:00';
                    let to_date_str = this.helper.phpDateGMT7(today);
                    to_date_str += ' ' + this.helper.phpTimeGMT7(today);
                    this.loadData(from_date_str, to_date_str);
                });
            }).catch(err => {
                console.log(err);
            });
            return yield assignItemModal.present();
        });
    }
    ngOnInit() {
        this.storageService.setItem().subscribe(res => {
        }, (err) => {
            console.log(err);
        }, () => {
            this.current_item = this.storageService.current_item;
            this.deviceid = this.current_item.deviceid;
            let today = new Date();
            this.fromDateStr = this.readableLocalDate(today) + '[00:00]';
            this.toDateStr = this.readableLocalDate(today) + '[23:59]';
            let from_date_str = this.helper.phpDateGMT7(today);
            from_date_str += ' 00:00:00';
            let to_date_str = this.helper.phpDateGMT7(today);
            to_date_str += ' ' + this.helper.phpTimeGMT7(today);
            this.loadData(from_date_str, to_date_str);
        });
    }
    loadData(from, to) {
        this.presentLoadingWithOptions();
        this.dataList = [];
        this.pagination = 1;
        this.dateTemp = '';
        this.traccarService.getSummary(this.deviceid, from, to).subscribe(res => {
            this.httpResponse = res;
        }, err => {
            if (err.error.message) {
                this.alertService.presentToast(err.error.message, "danger");
            }
            else {
                this.alertService.presentToast(err.message, "danger");
            }
            this.loading.dismiss();
        }, () => {
            this.loading.dismiss();
            this.httpResponse = JSON.parse(this.httpResponse.summary);
            this.dateTemp = '';
            for (let i = 0; i < this.httpResponse.length; i++) {
                this.httpResponse[i].distance = (this.httpResponse[i].distance / 1000).toFixed(2) + ' ' + this.lang.instant('SUMMARY_PAGE.km');
                this.httpResponse[i].averageSpeed = (this.httpResponse[i].averageSpeed * 1.852).toFixed(2) + ' ' + this.lang.instant('SUMMARY_PAGE.kmh');
                this.httpResponse[i].maxSpeed = (this.httpResponse[i].maxSpeed * 1.852).toFixed(2) + ' ' + this.lang.instant('SUMMARY_PAGE.kmh');
                this.httpResponse[i].duration = this.httpResponse[i].duration / 60000;
                if (this.httpResponse[i].duration < 60) {
                    this.httpResponse[i].durationStr = Math.round(this.httpResponse[i].duration) + this.lang.instant('APP.minute_s');
                }
                else if (this.httpResponse[i].duration < (60 * 60)) {
                    this.httpResponse[i].durationStr = Math.round(this.httpResponse[i].duration / 60) + this.lang.instant('APP.hour_s');
                }
                else if (this.httpResponse[i].duration < (60 * 60 * 24)) {
                    this.httpResponse[i].durationStr = Math.round(this.httpResponse[i].duration / 60 / 24) + this.lang.instant('APP.day_s');
                }
                this.dataList.push(this.httpResponse[i]);
            }
            this.item_name = this.current_item.name;
            this.item_icon = this.current_item.icon_name;
        });
    }
    goBack() {
        this.navCtrl.navigateBack('dashboard/tabs/home');
    }
    presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                duration: 15000,
                message: 'Please wait...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield this.loading.present();
        });
    }
    segmentChanged(ev) {
        this.segmentVal = ev.target.value;
        if (this.segmentVal == "today") {
            let today = new Date();
            this.fromDateStr = this.readableLocalDate(today) + ' [00:00]';
            this.toDateStr = this.readableLocalDate(today) + ' [23:59]';
            let from_date_str = this.helper.phpDateGMT7(today);
            from_date_str += ' 00:00:00';
            let to_date_str = this.helper.phpDateGMT7(today);
            to_date_str += ' ' + this.helper.phpTimeGMT7(today);
            this.dataList = [];
            this.loadData(from_date_str, to_date_str);
        }
        else if (this.segmentVal == "yesterday") {
            let yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            this.fromDateStr = this.readableLocalDate(yesterday) + ' [00:00]';
            this.toDateStr = this.readableLocalDate(yesterday) + ' [23:59]';
            let to_date_str = this.helper.phpDateGMT7(yesterday);
            to_date_str += ' 23:59:59';
            let from_date_str = this.helper.phpDateGMT7(yesterday);
            from_date_str += ' 00:00:00';
            this.dataList = [];
            this.loadData(from_date_str, to_date_str);
        }
        else {
            this.dataList = [];
            this.fromDate = '';
            this.toDate = '';
        }
    }
    onDateChanged() {
        if (this.fromDate && this.toDate) {
            this.fromDateStr = this.readableLocalDate(this.fromDate) + ' [' + this.readableLocalTime(this.fromDate) + ']';
            this.toDateStr = this.readableLocalDate(this.toDate) + ' [' + this.readableLocalTime(this.toDate) + ']';
            let fromDate = new Date(this.fromDate);
            let fromDateStr = this.helper.phpDateGMT7(fromDate);
            fromDateStr += ' ' + this.helper.phpTimeGMT7(fromDate);
            let toDate = new Date(this.toDate);
            let toDateStr = this.helper.phpDateGMT7(toDate);
            toDateStr += ' ' + this.helper.phpTimeGMT7(toDate);
            this.dataList = [];
            this.loadData(fromDateStr, toDateStr);
        }
    }
    readableLocalDate(the_date) {
        let d;
        if (this.platform.is('ios')) {
            d = new Date(the_date);
        }
        else {
            d = new Date(the_date).toUTCString();
            d = new Date(d);
        }
        let dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        let s = '';
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
    readableLocalTime(the_date) {
        let d;
        if (this.platform.is('ios')) {
            d = new Date(the_date);
        }
        else {
            d = new Date(the_date).toUTCString();
            d = new Date(d);
        }
        // d = new Date();
        let s = '';
        if (d.getHours() < 10) {
            s += '0' + d.getHours().toString();
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
        return s;
    }
};
SummaryPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], SummaryPage.prototype, "infiniteScroll", void 0);
SummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./summary.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./summary.page.scss */ "./src/app/pages/summary/summary.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], SummaryPage);



/***/ })

}]);
//# sourceMappingURL=pages-summary-summary-module-es2015.js.map