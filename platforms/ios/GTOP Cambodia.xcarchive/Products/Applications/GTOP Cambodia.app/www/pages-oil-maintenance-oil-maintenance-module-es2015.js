(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-oil-maintenance-oil-maintenance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oil-maintenance/oil-maintenance.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oil-maintenance/oil-maintenance.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>{{ 'OIL_PAGE.oil_maintenance' | translate }}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\" routerLink=\"/deliveries\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ item_icon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\">\n          {{ item_name }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-padding ion-top-padding1\">\n\n    <ion-list>\n\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'OIL_PAGE.oil_notification' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>{{ 'OIL_PAGE.oil_notify' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"oil_maintenance_alert\" (click)=\"toggleOilMaintenanceAlert($event)\"></ion-toggle>\n      </ion-item>\n\n\n      <ion-item button (click)=\"showBasicPicker('oil-maintenance-start')\">\n        <ion-label>\n          <ion-row>\n\n            <ion-col>\n              <ion-text color=\"dark\">{{ 'OIL_PAGE.start' | translate }}</ion-text>\n            </ion-col>\n            <ion-col class=\"ion-text-right\">\n              {{ oil_maintenance_start }} {{ 'OIL_PAGE.km' | translate }}\n            </ion-col>\n\n          </ion-row>        \n        </ion-label>\n      </ion-item>\n\n      <ion-item button (click)=\"showBasicPicker('oil-maintenance-period')\">\n        <ion-label>\n          <ion-row>\n\n            <ion-col>\n              <ion-text color=\"dark\">{{ 'OIL_PAGE.period' | translate }}</ion-text>\n            </ion-col>\n            <ion-col class=\"ion-text-right\">\n              {{ oil_maintenance_period }} {{ 'OIL_PAGE.km' | translate }}\n            </ion-col>\n\n          </ion-row>        \n        </ion-label>\n      </ion-item>\n      \n    </ion-list>\n\n\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/alarm-clock.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'OIL_PAGE.oil_maintenance_history' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-group *ngFor=\"let item of dataList\">\n        <ion-item-divider *ngIf=\"item.have_group != 0\">\n          <ion-label>{{ item.serverdate }}</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>{{ item.servertime }}</ion-label>\n          <ion-note slot=\"end\">{{ item.totalDistance }} {{ 'OIL_PAGE.km' | translate }}</ion-note>\n        </ion-item>\n        \n      </ion-item-group>\n    </ion-list>\n \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-grid>\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/pages/oil-maintenance/oil-maintenance-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/oil-maintenance/oil-maintenance-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: OilMaintenancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilMaintenancePageRoutingModule", function() { return OilMaintenancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _oil_maintenance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./oil-maintenance.page */ "./src/app/pages/oil-maintenance/oil-maintenance.page.ts");




const routes = [
    {
        path: '',
        component: _oil_maintenance_page__WEBPACK_IMPORTED_MODULE_3__["OilMaintenancePage"]
    }
];
let OilMaintenancePageRoutingModule = class OilMaintenancePageRoutingModule {
};
OilMaintenancePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OilMaintenancePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/oil-maintenance/oil-maintenance.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/oil-maintenance/oil-maintenance.module.ts ***!
  \*****************************************************************/
/*! exports provided: OilMaintenancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilMaintenancePageModule", function() { return OilMaintenancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _oil_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./oil-maintenance-routing.module */ "./src/app/pages/oil-maintenance/oil-maintenance-routing.module.ts");
/* harmony import */ var _oil_maintenance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./oil-maintenance.page */ "./src/app/pages/oil-maintenance/oil-maintenance.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let OilMaintenancePageModule = class OilMaintenancePageModule {
};
OilMaintenancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _oil_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_5__["OilMaintenancePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_oil_maintenance_page__WEBPACK_IMPORTED_MODULE_6__["OilMaintenancePage"]]
    })
], OilMaintenancePageModule);



/***/ }),

/***/ "./src/app/pages/oil-maintenance/oil-maintenance.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/oil-maintenance/oil-maintenance.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-top-padding {\n  margin-top: 25px;\n}\n\n.margin-bottom-25 {\n  margin-bottom: 20px;\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL29pbC1tYWludGVuYW5jZS9vaWwtbWFpbnRlbmFuY2UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vaWwtbWFpbnRlbmFuY2Uvb2lsLW1haW50ZW5hbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxtQkFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29pbC1tYWludGVuYW5jZS9vaWwtbWFpbnRlbmFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi10b3AtcGFkZGluZ3tcbiAgICBtYXJnaW4tdG9wOjI1cHg7XG59XG4ubWFyZ2luLWJvdHRvbS0yNXtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuaW9uLWF2YXRhciBpbWd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgICBib3JkZXI6NHB4IHNvbGlkICNmZmY7XG4gICAgcGFkZGluZzo1cHg7XG59IiwiLmlvbi10b3AtcGFkZGluZyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5tYXJnaW4tYm90dG9tLTI1IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWF2YXRhciBpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICBib3JkZXI6IDRweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/oil-maintenance/oil-maintenance.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/oil-maintenance/oil-maintenance.page.ts ***!
  \***************************************************************/
/*! exports provided: OilMaintenancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OilMaintenancePage", function() { return OilMaintenancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/traccar.service */ "./src/app/services/traccar.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");













let OilMaintenancePage = class OilMaintenancePage {
    constructor(http, authService, navCtrl, loadingController, traccarService, lang, platform, alertService, storageService, pickerController) {
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
    ngOnInit() {
        this.presentLoadingWithOptions();
        this.storageService.setItem().subscribe(res => {
        }, (err) => {
            console.log(err);
        }, () => {
            this.initIgnitionQuery(this.storageService.current_item.deviceid);
            console.log(this.storageService.current_item);
        });
    }
    initIgnitionQuery(deviceid) {
        this.traccarService.getOilMaintenance(deviceid, this.pagination).subscribe(res => {
            this.httpResponse = res;
            this.httpResponse = JSON.parse(this.httpResponse.events);
        }, err => {
            if (err.error.message) {
                this.alertService.presentToast(err.error.message, "danger");
            }
            else {
                this.alertService.presentToast(err.message, "danger");
            }
            this.loading.dismiss();
        }, () => {
            for (let i = 0; i < this.httpResponse.length; i++) {
                let readableLocalDate = this.readableLocalDate(this.httpResponse[i].servertime);
                let readableLocalTime = this.readableLocalTime(this.httpResponse[i].servertime);
                let systemDate = this.systemDate(this.httpResponse[i].servertime);
                if (this.dateTemp == systemDate) {
                    this.httpResponse[i].have_group = '0';
                }
                else {
                    this.dateTemp = systemDate;
                    this.httpResponse[i].have_group = readableLocalDate;
                }
                let attributes = JSON.parse(this.httpResponse[i].attributes);
                this.httpResponse[i].totalDistance = Math.round(attributes.totalDistance / 1000);
                this.httpResponse[i].serverdate = readableLocalDate;
                this.httpResponse[i].servertime = readableLocalTime;
                this.dataList.push(this.httpResponse[i]);
            }
            this.pagination++;
            this.item_name = this.storageService.current_item.name;
            this.item_icon = this.storageService.current_item.icon_name;
            this.oil_maintenance_alert = this.storageService.current_item.oil_maintenance_notification;
            this.oil_maintenance_start = Math.round(this.storageService.current_item.oil_maintenance_start / 1000);
            this.oil_maintenance_period = Math.round(this.storageService.current_item.oil_maintenance_period / 1000);
            this.deviceid = this.storageService.current_item.deviceid;
            this.loading.dismiss();
        });
    }
    loadData(event) {
        this.traccarService.getOilMaintenance(this.deviceid, this.pagination).subscribe(res => {
            this.httpResponse = res;
            this.httpResponse = JSON.parse(this.httpResponse.events);
        }, err => {
            if (err.error.message) {
                this.alertService.presentToast(err.error.message, "danger");
            }
            else {
                this.alertService.presentToast(err.message, "danger");
            }
            this.loading.dismiss();
        }, () => {
            for (let i = 0; i < this.httpResponse.length; i++) {
                let readableLocalDate = this.readableLocalDate(this.httpResponse[i].servertime);
                let readableLocalTime = this.readableLocalTime(this.httpResponse[i].servertime);
                let systemDate = this.systemDate(this.httpResponse[i].servertime);
                if (this.dateTemp == systemDate) {
                    this.httpResponse[i].have_group = '0';
                }
                else {
                    this.dateTemp = systemDate;
                    this.httpResponse[i].have_group = readableLocalDate;
                }
                let attributes = JSON.parse(this.httpResponse[i].attributes);
                this.httpResponse[i].totalDistance = Math.round(attributes.totalDistance / 1000);
                this.httpResponse[i].serverdate = readableLocalDate;
                this.httpResponse[i].servertime = readableLocalTime;
                this.dataList.push(this.httpResponse[i]);
            }
            event.target.complete();
            if (this.httpResponse.length < 40) {
                event.target.disabled = true;
            }
            this.pagination++;
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
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ENDPOINT"].API_URL + 'event/oil-maintenance/notification/' + type + '/' + deviceid + '/' + bool, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => {
            return data;
        }));
    }
    toggleOilMaintenanceAlert(ev) {
        this.presentLoadingWithOptions();
        setTimeout(() => {
            this.preparingRequest('oil_maintenance_notification', this.deviceid, this.oil_maintenance_alert).subscribe(data => {
                this.loading.dismiss();
            }, error => {
                // alert(error.error.message);
                this.loading.dismiss();
            }, () => {
                this.loading.dismiss();
            });
        }, 50);
    }
    showBasicPicker(field) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let opts = {
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: (data) => {
                            this.ionPickerHandler = 'cancel';
                        }
                    },
                    {
                        text: 'Done',
                        handler: (data) => {
                            this.ionPickerHandler = 'done';
                        }
                    }
                ],
                columns: [
                    {
                        name: 'Distance',
                        options: [
                            { text: '1' + this.lang.instant('OIL_PAGE.km'), value: 1 },
                            { text: '100' + this.lang.instant('OIL_PAGE.km'), value: 100 },
                            { text: '250' + this.lang.instant('OIL_PAGE.km'), value: 250 },
                            { text: '500' + this.lang.instant('OIL_PAGE.km'), value: 500 },
                            { text: '750' + this.lang.instant('OIL_PAGE.km'), value: 750 },
                            { text: '1000' + this.lang.instant('OIL_PAGE.km'), value: 1000 },
                            { text: '1500' + this.lang.instant('OIL_PAGE.km'), value: 1500 },
                            { text: '2000' + this.lang.instant('OIL_PAGE.km'), value: 2000 },
                            { text: '2500' + this.lang.instant('OIL_PAGE.km'), value: 2500 },
                            { text: '3000' + this.lang.instant('OIL_PAGE.km'), value: 3000 },
                            { text: '3500' + this.lang.instant('OIL_PAGE.km'), value: 3500 },
                            { text: '4000' + this.lang.instant('OIL_PAGE.km'), value: 4000 },
                            { text: '4500' + this.lang.instant('OIL_PAGE.km'), value: 4500 },
                            { text: '5000' + this.lang.instant('OIL_PAGE.km'), value: 5000 },
                            { text: '5500' + this.lang.instant('OIL_PAGE.km'), value: 5500 },
                            { text: '6000' + this.lang.instant('OIL_PAGE.km'), value: 6000 },
                            { text: '6500' + this.lang.instant('OIL_PAGE.km'), value: 6500 },
                            { text: '7000' + this.lang.instant('OIL_PAGE.km'), value: 7000 },
                            { text: '7500' + this.lang.instant('OIL_PAGE.km'), value: 7500 },
                            { text: '8000' + this.lang.instant('OIL_PAGE.km'), value: 8000 },
                            { text: '8500' + this.lang.instant('OIL_PAGE.km'), value: 8500 },
                            { text: '9000' + this.lang.instant('OIL_PAGE.km'), value: 9000 },
                            { text: '9500' + this.lang.instant('OIL_PAGE.km'), value: 9500 },
                            { text: '10000' + this.lang.instant('OIL_PAGE.km'), value: 10000 },
                            { text: '10500' + this.lang.instant('OIL_PAGE.km'), value: 10500 },
                            { text: '11000' + this.lang.instant('OIL_PAGE.km'), value: 11000 },
                            { text: '11500' + this.lang.instant('OIL_PAGE.km'), value: 11500 },
                            { text: '12000' + this.lang.instant('OIL_PAGE.km'), value: 12000 },
                            { text: '12500' + this.lang.instant('OIL_PAGE.km'), value: 12500 },
                            { text: '13000' + this.lang.instant('OIL_PAGE.km'), value: 13000 },
                            { text: '13500' + this.lang.instant('OIL_PAGE.km'), value: 13500 },
                            { text: '14000' + this.lang.instant('OIL_PAGE.km'), value: 14000 },
                            { text: '14500' + this.lang.instant('OIL_PAGE.km'), value: 14500 },
                            { text: '15000' + this.lang.instant('OIL_PAGE.km'), value: 15000 },
                            { text: '15500' + this.lang.instant('OIL_PAGE.km'), value: 15500 },
                            { text: '16000' + this.lang.instant('OIL_PAGE.km'), value: 16000 },
                            { text: '16500' + this.lang.instant('OIL_PAGE.km'), value: 16500 },
                            { text: '17000' + this.lang.instant('OIL_PAGE.km'), value: 17000 },
                            { text: '17500' + this.lang.instant('OIL_PAGE.km'), value: 17500 },
                            { text: '18000' + this.lang.instant('OIL_PAGE.km'), value: 18000 },
                            { text: '18500' + this.lang.instant('OIL_PAGE.km'), value: 18500 },
                            { text: '19000' + this.lang.instant('OIL_PAGE.km'), value: 19000 },
                            { text: '19500' + this.lang.instant('OIL_PAGE.km'), value: 19500 },
                            { text: '20000' + this.lang.instant('OIL_PAGE.km'), value: 20000 },
                            { text: '20500' + this.lang.instant('OIL_PAGE.km'), value: 20500 },
                            { text: '21000' + this.lang.instant('OIL_PAGE.km'), value: 21000 },
                            { text: '21500' + this.lang.instant('OIL_PAGE.km'), value: 21500 },
                            { text: '22000' + this.lang.instant('OIL_PAGE.km'), value: 22000 },
                            { text: '22500' + this.lang.instant('OIL_PAGE.km'), value: 22500 },
                            { text: '23000' + this.lang.instant('OIL_PAGE.km'), value: 23000 },
                            { text: '23500' + this.lang.instant('OIL_PAGE.km'), value: 23500 },
                            { text: '24000' + this.lang.instant('OIL_PAGE.km'), value: 24000 },
                            { text: '24500' + this.lang.instant('OIL_PAGE.km'), value: 24500 },
                            { text: '25000' + this.lang.instant('OIL_PAGE.km'), value: 25000 },
                            { text: '25500' + this.lang.instant('OIL_PAGE.km'), value: 25500 },
                            { text: '26000' + this.lang.instant('OIL_PAGE.km'), value: 26000 },
                            { text: '26500' + this.lang.instant('OIL_PAGE.km'), value: 26500 },
                            { text: '27000' + this.lang.instant('OIL_PAGE.km'), value: 27000 },
                            { text: '27500' + this.lang.instant('OIL_PAGE.km'), value: 27500 },
                            { text: '28000' + this.lang.instant('OIL_PAGE.km'), value: 28000 },
                            { text: '28500' + this.lang.instant('OIL_PAGE.km'), value: 28500 },
                            { text: '29000' + this.lang.instant('OIL_PAGE.km'), value: 29000 },
                            { text: '29500' + this.lang.instant('OIL_PAGE.km'), value: 29500 },
                            { text: '30000' + this.lang.instant('OIL_PAGE.km'), value: 30000 },
                        ]
                    }
                ]
            };
            let picker = yield this.pickerController.create(opts);
            picker.present();
            picker.onDidDismiss().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (this.ionPickerHandler == 'cancel') {
                    return;
                }
                this.presentLoadingWithOptions();
                let col = yield picker.getColumn('Distance');
                if (field == 'oil-maintenance-start')
                    this.oil_maintenance_start = col.options[col.selectedIndex].value;
                else if (field == 'oil-maintenance-period')
                    this.oil_maintenance_period = col.options[col.selectedIndex].value;
                let distance = col.options[col.selectedIndex].value;
                this.preparingSpeedLimitRequest(this.deviceid, distance, field).subscribe(data => {
                    this.loading.dismiss();
                }, error => {
                    alert(error.error.message);
                    this.loading.dismiss();
                }, () => {
                    this.loading.dismiss();
                });
            }));
        });
    }
    preparingSpeedLimitRequest(deviceid, distance_limit, field) {
        this.authService.getToken();
        let token = this.authService.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ENDPOINT"].API_URL + 'event/oil-maintenance/' + field, { headers: headers, params: { deviceid: deviceid, distance_limit: distance_limit } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => {
            return data;
        }));
    }
    systemDate(the_date) {
        let d;
        if (this.platform.is('ios')) {
            d = new Date(the_date.replace(' ', 'T'));
        }
        else {
            d = new Date(the_date + ' UTC');
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
            d = new Date(the_date.replace(' ', 'T'));
        }
        else {
            d = new Date(the_date + ' UTC');
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
            d = new Date(the_date.replace(' ', 'T'));
        }
        else {
            d = new Date(the_date + ' UTC');
        }
        let s = '';
        if (d.getHours() < 10) {
            s += ' ' + this.lang.instant('APP.time') + '0' + d.getHours().toString();
        }
        else {
            s += ' ' + this.lang.instant('APP.time') + d.getHours().toString();
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
OilMaintenancePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], OilMaintenancePage.prototype, "infiniteScroll", void 0);
OilMaintenancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-oil-maintenance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./oil-maintenance.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/oil-maintenance/oil-maintenance.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./oil-maintenance.page.scss */ "./src/app/pages/oil-maintenance/oil-maintenance.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"]])
], OilMaintenancePage);



/***/ })

}]);
//# sourceMappingURL=pages-oil-maintenance-oil-maintenance-module-es2015.js.map