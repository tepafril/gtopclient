(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parking-alarm-parking-alarm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parking-alarm/parking-alarm.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parking-alarm/parking-alarm.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>{{ 'PARKING_PAGE.parking_alarm' | translate }}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <!-- Vehicle Profile -->\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ item_icon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"selectDevice()\">\n          {{ item_name }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n  <!-- Speed Notification Title -->\n  <!-- <ion-grid>\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'PARKING_PAGE.parking_notification' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>{{ 'PARKING_PAGE.parking_notify' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"disarm_alert\" (click)=\"toggleDisarmAlert($event)\"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ 'PARKING_PAGE.parking_duration' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"arm_alert\" (click)=\"toggleArmAlert($event)\"></ion-toggle>\n      </ion-item>\n      \n    </ion-list>\n  </ion-grid> -->\n\n\n  <ion-grid class=\"ion-no-padding\">\n\n    <!-- Date Segment Title -->\n    <ion-row class=\"ion-padding\">\n      <ion-col size=\"12\">\n        <ion-segment  mode=\"ios\" color=\"primary\" (ionChange)=\"segmentChanged($event)\">\n          <ion-segment-button value=\"today\" checked>\n            <ion-label>{{ 'PARKING_PAGE.today' | translate }}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"yesterday\">\n            <ion-label>{{ 'PARKING_PAGE.yesterday' | translate }}</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"custom\">\n            <ion-label>{{ 'PARKING_PAGE.custom' | translate }}</ion-label>\n          </ion-segment-button>\n        </ion-segment>  \n      </ion-col>\n    </ion-row>\n\n    <ion-list class=\"margin-bottom-25\" *ngIf=\"segmentVal == 'custom'\">\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/calendar.svg\"></ion-icon>\n        <ion-label>{{ 'PARKING_PAGE.custom_date' | translate }}</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ 'PARKING_PAGE.start' | translate }}</ion-label>\n        <ion-datetime (ionChange)=\"onDateChanged()\" placeholder=\"{{ 'PARKING_PAGE.select_date_time' | translate }}\" displayFormat=\"DD/MMM/YYYY HH:mm\" [(ngModel)]=\"fromDate\"></ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ 'PARKING_PAGE.end' | translate }}</ion-label>\n        <ion-datetime (ionChange)=\"onDateChanged()\" placeholder=\"{{ 'PARKING_PAGE.select_date_time' | translate }}\" displayFormat=\"DD/MMM/YYYY HH:mm\" [(ngModel)]=\"toDate\"></ion-datetime>\n      </ion-item>\n    </ion-list>\n      \n    <ion-list class=\"margin-top-25\">\n      <!-- Speed History Header Title -->\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/alarm-clock.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'PARKING_PAGE.parking_history' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <!-- Data List -->\n      <ion-item-group *ngFor=\"let item of dataList\">\n        <ion-item-divider *ngIf=\"item.have_group != 0\">\n          <ion-label>{{ item.have_group }}</ion-label>\n        </ion-item-divider>\n\n        <!-- Title -->\n        <ion-item *ngIf=\"item.have_group != 0\">\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"dark\">{{ 'PARKING_PAGE.start_time' | translate }}</ion-text>\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"dark\">{{ 'PARKING_PAGE.end_time' | translate }}</ion-text>\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"dark\">{{ 'PARKING_PAGE.duration' | translate }}</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-item>\n      \n        <!-- Content -->\n        <ion-item>\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                {{ item.startTimeStr }}\n              </ion-col>\n              \n              <ion-col size=\"4\" class=\"ion-text-center\">\n                {{ item.endTimeStr }}\n              </ion-col>\n              \n              <ion-col size=\"4\" class=\"ion-text-center\">\n                {{ item.durationStr }}\n              </ion-col>\n\n            </ion-row>\n          </ion-label>\n        </ion-item>\n      </ion-item-group>\n\n      <ion-item *ngIf=\"dataList?.length == 0\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          {{ 'APP.no_data' | translate }}\n        </ion-col>\n      </ion-item>\n    </ion-list>\n\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/parking-alarm/parking-alarm-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/parking-alarm/parking-alarm-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ParkingAlarmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAlarmPageRoutingModule", function() { return ParkingAlarmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _parking_alarm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-alarm.page */ "./src/app/pages/parking-alarm/parking-alarm.page.ts");




const routes = [
    {
        path: '',
        component: _parking_alarm_page__WEBPACK_IMPORTED_MODULE_3__["ParkingAlarmPage"]
    }
];
let ParkingAlarmPageRoutingModule = class ParkingAlarmPageRoutingModule {
};
ParkingAlarmPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ParkingAlarmPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/parking-alarm/parking-alarm.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/parking-alarm/parking-alarm.module.ts ***!
  \*************************************************************/
/*! exports provided: ParkingAlarmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAlarmPageModule", function() { return ParkingAlarmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _parking_alarm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parking-alarm-routing.module */ "./src/app/pages/parking-alarm/parking-alarm-routing.module.ts");
/* harmony import */ var _parking_alarm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parking-alarm.page */ "./src/app/pages/parking-alarm/parking-alarm.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let ParkingAlarmPageModule = class ParkingAlarmPageModule {
};
ParkingAlarmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _parking_alarm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ParkingAlarmPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_parking_alarm_page__WEBPACK_IMPORTED_MODULE_6__["ParkingAlarmPage"]]
    })
], ParkingAlarmPageModule);



/***/ }),

/***/ "./src/app/pages/parking-alarm/parking-alarm.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/parking-alarm/parking-alarm.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-ios {\n  margin-bottom: 0px;\n}\n\n.ion-top-padding {\n  margin-top: 25px;\n}\n\n.ignitionOn {\n  color: var(--ion-color-success);\n}\n\n.ignitionOff {\n  color: var(--ion-color-danger);\n}\n\n.margin-bottom-25 {\n  margin-bottom: 20px;\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvcGFya2luZy1hbGFybS9wYXJraW5nLWFsYXJtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFya2luZy1hbGFybS9wYXJraW5nLWFsYXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQkFBQTtBQ0VKOztBRENBO0VBQ0ksK0JBQUE7QUNFSjs7QURDQTtFQUNJLDhCQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcmtpbmctYWxhcm0vcGFya2luZy1hbGFybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pb3N7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmlvbi10b3AtcGFkZGluZ3tcbiAgICBtYXJnaW4tdG9wOjI1cHg7XG59XG5cbi5pZ25pdGlvbk9ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5pZ25pdGlvbk9mZntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG4ubWFyZ2luLWJvdHRvbS0yNXtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWF2YXRhciBpbWd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgICBib3JkZXI6NHB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzo1cHg7XG59IiwiLmxpc3QtaW9zIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaW9uLXRvcC1wYWRkaW5nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmlnbml0aW9uT24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmYge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi5tYXJnaW4tYm90dG9tLTI1IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWF2YXRhciBpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/parking-alarm/parking-alarm.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/parking-alarm/parking-alarm.page.ts ***!
  \***********************************************************/
/*! exports provided: ParkingAlarmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAlarmPage", function() { return ParkingAlarmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/traccar.service */ "./src/app/services/traccar.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../select-device/select-device.page */ "./src/app/pages/select-device/select-device.page.ts");















let ParkingAlarmPage = class ParkingAlarmPage {
    constructor(http, authService, navCtrl, loadingController, traccarService, lang, platform, alertService, storageService, helper, modalController) {
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
        this.modalController = modalController;
        this.dataList = [];
        this.dateTemp = 0;
        this.pagination = 1;
        this.segmentVal = 'today';
    }
    selectDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const assignItemModal = yield this.modalController.create({
                component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_12__["SelectDevicePage"],
                componentProps: {
                    // groupItems: this.groupItems,
                    // groupID: this.groupID
                    moduleName: "module_parking"
                }
            });
            assignItemModal.onDidDismiss().then((res) => {
                this.selectedItems = res.data;
                // Present Preloading
                this.storageService.setItem().subscribe(res => {
                }, (err) => {
                    console.log(err);
                }, () => {
                    this.storageService.setItem().subscribe(res => {
                    }, (err) => {
                        console.log(err);
                    }, () => {
                        this.current_item = this.selectedItems;
                        this.deviceid = this.current_item.deviceid;
                        let today = new Date();
                        let from_date_str = this.helper.phpDateGMT7(today);
                        from_date_str += ' 00:00:00';
                        let to_date_str = this.helper.phpDateGMT7(today);
                        to_date_str += ' ' + this.helper.phpTimeGMT7(today);
                        this.loadData(from_date_str, to_date_str);
                    });
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
            let from_date_str = this.helper.phpDateGMT7(today);
            from_date_str += ' 00:00:00';
            let to_date_str = this.helper.phpDateGMT7(today);
            to_date_str += ' ' + this.helper.phpTimeGMT7(today);
            this.loadData(from_date_str, to_date_str);
        });
    }
    loadData(from, to) {
        this.dataList = [];
        this.pagination = 1;
        this.dateTemp = '';
        this.presentLoadingWithOptions();
        this.traccarService.getParking(this.deviceid, from, to).subscribe(res => {
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
            this.httpResponse = JSON.parse(this.httpResponse.parking);
            this.dateTemp = '';
            for (let i = 0; i < this.httpResponse.length; i++) {
                let startReadableLocalDate = this.readableLocalDate(this.httpResponse[i].startTime);
                let startReadableLocalTime = this.readableLocalTime(this.httpResponse[i].startTime);
                let endReadableLocalDate = this.readableLocalDate(this.httpResponse[i].endTime);
                let endReadableLocalTime = this.readableLocalTime(this.httpResponse[i].endTime);
                let systemDate = this.systemDate(this.httpResponse[i].startTime);
                if (this.dateTemp == systemDate) {
                    this.httpResponse[i].have_group = '0';
                }
                else {
                    this.dateTemp = systemDate;
                    this.httpResponse[i].have_group = startReadableLocalDate;
                }
                this.httpResponse[i].startTimeStr = startReadableLocalTime;
                this.httpResponse[i].endTimeStr = endReadableLocalTime;
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
    preparingRequest(type, deviceid, bool) {
        this.authService.getToken();
        let token = this.authService.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["ENDPOINT"].API_URL + 'event/parking-alarm/notification/' + type + '/' + deviceid + '/' + bool, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(data => {
            return data;
        }));
    }
    toggleArmAlert(ev) {
        this.presentLoadingWithOptions();
        setTimeout(() => {
            this.preparingRequest('arm_notification', this.deviceid, this.arm_alert).subscribe(data => {
                this.loading.dismiss();
            }, error => {
                // alert(error.error.message);
                this.loading.dismiss();
            }, () => {
                this.loading.dismiss();
            });
        }, 50);
    }
    toggleDisarmAlert(ev) {
        this.presentLoadingWithOptions();
        setTimeout(() => {
            this.preparingRequest('disarm_notification', this.deviceid, this.disarm_alert).subscribe(data => {
                this.loading.dismiss();
            }, error => {
                // alert(error.error.message);
                this.loading.dismiss();
            }, () => {
                this.loading.dismiss();
            });
        }, 50);
    }
    segmentChanged(ev) {
        this.segmentVal = ev.target.value;
        if (this.segmentVal == "today") {
            let today = new Date();
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
            let to_date_str = this.helper.phpDateGMT7(yesterday);
            to_date_str += ' 23:59:59';
            let from_date_str = this.helper.phpDateGMT7(yesterday);
            from_date_str += ' 00:00:00';
            this.dataList = [];
            this.loadData(from_date_str, to_date_str);
        }
        else {
            console.log(this.fromDate);
            this.dataList = [];
            this.fromDate = '';
            this.toDate = '';
        }
    }
    onDateChanged() {
        if (this.fromDate && this.toDate) {
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
    systemDate(the_date) {
        let d;
        if (this.platform.is('ios')) {
            d = new Date(the_date.replace('.000+0000', ''));
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
        s += '-' + monthNames[d.getMonth()];
        s += '-' + d.getFullYear();
        return s;
    }
    readableLocalDate(the_date) {
        let d;
        if (this.platform.is('ios')) {
            d = new Date(the_date.replace('.000+0000', ''));
        }
        else {
            d = new Date(the_date).toUTCString();
            d = new Date(d);
        }
        let dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        let s = ' ' + this.lang.instant('APP.day');
        s += this.lang.instant('APP.' + dayNames[d.getDay()]);
        if (d.getDate() < 10) {
            s += ' ' + this.lang.instant('APP.date') + '0' + d.getDate().toString();
        }
        else {
            s += ' ' + this.lang.instant('APP.date') + d.getDate().toString();
        }
        s += ' ' + this.lang.instant('APP.month') + this.lang.instant('APP.' + monthNames[d.getMonth()]);
        s += ' ' + this.lang.instant('APP.year') + d.getFullYear();
        return s;
    }
    readableLocalTime(the_date) {
        let d;
        if (this.platform.is('ios')) {
            d = new Date(the_date.replace('.000+0000', ''));
        }
        else {
            d = new Date(the_date).toUTCString();
            d = new Date(d);
        }
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
        if (d.getSeconds() < 10) {
            s += ':0' + d.getSeconds().toString();
        }
        else {
            s += ':' + d.getSeconds().toString();
        }
        return s;
    }
};
ParkingAlarmPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], ParkingAlarmPage.prototype, "infiniteScroll", void 0);
ParkingAlarmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-alarm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./parking-alarm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/parking-alarm/parking-alarm.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./parking-alarm.page.scss */ "./src/app/pages/parking-alarm/parking-alarm.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_11__["AlertService"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ParkingAlarmPage);



/***/ })

}]);
//# sourceMappingURL=pages-parking-alarm-parking-alarm-module-es2015.js.map