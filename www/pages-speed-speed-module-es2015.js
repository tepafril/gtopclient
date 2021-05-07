(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-speed-speed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speed/speed.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speed/speed.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'SPEED_PAGE.speed_limit' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\" routerLink=\"/deliveries\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ item_icon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"selectDevice()\">\n          {{ item_name }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-padding ion-top-padding1\">\n\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'SPEED_PAGE.overspeed_notification' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>{{ 'SPEED_PAGE.overspeed_notify' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"overspeed_alert\" (click)=\"toggleOverspeedAlert($event)\"></ion-toggle>\n      </ion-item>\n\n      <ion-item button (click)=\"showBasicPicker()\">\n        <ion-label>\n          <ion-row>\n\n            <ion-col>\n              <ion-text color=\"dark\">{{ 'SPEED_PAGE.limit_speed' | translate }}</ion-text>\n            </ion-col>\n            <ion-col class=\"ion-text-right\">\n              {{ speed_limit }} {{ 'SPEED_PAGE.kmh' | translate }}\n            </ion-col>\n\n          </ion-row>        \n        </ion-label>\n      </ion-item>\n      \n    </ion-list>\n\n\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/alarm-clock.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'SPEED_PAGE.speed_history' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-group *ngFor=\"let item of dataList\">\n        <ion-item-divider *ngIf=\"item.have_group != 0\">\n          <ion-label>{{ item.serverdate }}</ion-label>\n        </ion-item-divider>\n      \n        <ion-item *ngIf=\"item.have_group != 0\">\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"4\">\n                &nbsp;\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"dark\">{{ 'SPEED_PAGE.limit_speed' | translate }}</ion-text>\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"dark\">{{ 'SPEED_PAGE.overspeed' | translate }}</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>\n            <ion-row>\n              <ion-col size=\"4\">\n                {{ item.servertime }}\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"primary\">{{ item.speedLimit }}</ion-text>\n              </ion-col>\n\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-text color=\"danger\">{{ item.speed }}</ion-text>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-item>\n        \n      </ion-item-group>\n    </ion-list>\n \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-grid>\n\n\n\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/speed/speed-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/speed/speed-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SpeedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedPageRoutingModule", function() { return SpeedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _speed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./speed.page */ "./src/app/pages/speed/speed.page.ts");




const routes = [
    {
        path: '',
        component: _speed_page__WEBPACK_IMPORTED_MODULE_3__["SpeedPage"]
    }
];
let SpeedPageRoutingModule = class SpeedPageRoutingModule {
};
SpeedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SpeedPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/speed/speed.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/speed/speed.module.ts ***!
  \*********************************************/
/*! exports provided: SpeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedPageModule", function() { return SpeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _speed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./speed-routing.module */ "./src/app/pages/speed/speed-routing.module.ts");
/* harmony import */ var _speed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./speed.page */ "./src/app/pages/speed/speed.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let SpeedPageModule = class SpeedPageModule {
};
SpeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _speed_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpeedPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_speed_page__WEBPACK_IMPORTED_MODULE_6__["SpeedPage"]]
    })
], SpeedPageModule);



/***/ }),

/***/ "./src/app/pages/speed/speed.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/speed/speed.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-top-padding {\n  margin-top: 25px;\n}\n\n.ignitionOn {\n  color: var(--ion-color-success);\n}\n\n.ignitionOff {\n  color: var(--ion-color-danger);\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL3NwZWVkL3NwZWVkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3BlZWQvc3BlZWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NwZWVkL3NwZWVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tdG9wLXBhZGRpbmd7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xufVxuXG4uaWduaXRpb25PbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmZ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG5pb24tYXZhdGFyIGltZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICAgIGJvcmRlcjo0cHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbn0iLCIuaW9uLXRvcC1wYWRkaW5nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmlnbml0aW9uT24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmYge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/speed/speed.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/speed/speed.page.ts ***!
  \*******************************************/
/*! exports provided: SpeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedPage", function() { return SpeedPage; });
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
/* harmony import */ var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../select-device/select-device.page */ "./src/app/pages/select-device/select-device.page.ts");












let SpeedPage = class SpeedPage {
    constructor(http, authService, navCtrl, loadingController, traccarService, lang, platform, alertService, storageService, pickerController, modalController) {
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
    selectDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const assignItemModal = yield this.modalController.create({
                component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_11__["SelectDevicePage"],
                componentProps: {
                    // groupItems: this.groupItems,
                    // groupID: this.groupID
                    moduleName: "module_speed"
                }
            });
            assignItemModal.onDidDismiss().then((res) => {
                this.selectedItems = res.data;
                // Present Preloading
                this.presentLoadingWithOptions();
                this.storageService.setItem().subscribe(res => {
                }, (err) => {
                    console.log(err);
                }, () => {
                    this.current_item = this.selectedItems;
                    this.initIgnitionQuery(this.current_item.deviceid);
                });
            }).catch(err => {
                console.log(err);
            });
            return yield assignItemModal.present();
        });
    }
    ngOnInit() {
        this.presentLoadingWithOptions();
        this.storageService.setItem().subscribe(res => {
        }, (err) => {
            console.log(err);
        }, () => {
            this.current_item = this.storageService.current_item;
            this.initIgnitionQuery(this.current_item.deviceid);
        });
    }
    initIgnitionQuery(deviceid) {
        this.dataList = [];
        this.pagination = 1;
        this.dateTemp = '';
        this.traccarService.getOverspeed(deviceid, this.pagination).subscribe(res => {
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
                let attr = JSON.parse(this.httpResponse[i].attributes);
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
                this.httpResponse[i].serverdate = readableLocalDate;
                this.httpResponse[i].servertime = readableLocalTime;
                this.httpResponse[i].note_class = this.httpResponse[i].type;
                this.httpResponse[i].speed = (attr.speed * 1.852).toFixed(2) + this.lang.instant('SPEED_PAGE.kmh');
                this.httpResponse[i].speedLimit = (attr.speedLimit * 1.852).toFixed(2) + this.lang.instant('SPEED_PAGE.kmh');
                this.dataList.push(this.httpResponse[i]);
            }
            this.pagination++;
            this.item_name = this.current_item.name;
            this.item_icon = this.current_item.icon_name;
            this.overspeed_alert = this.current_item.speed_limit_notification;
            this.speed_limit = Math.round(this.current_item.speed_limit * 1.852);
            this.deviceid = this.current_item.deviceid;
            this.loading.dismiss();
        });
    }
    loadData(event) {
        this.traccarService.getOverspeed(this.deviceid, this.pagination).subscribe(res => {
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
                let attr = JSON.parse(this.httpResponse[i].attributes);
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
                this.httpResponse[i].serverdate = readableLocalDate;
                this.httpResponse[i].servertime = readableLocalTime;
                this.httpResponse[i].note_class = this.httpResponse[i].type;
                this.httpResponse[i].speed = (attr.speed * 1.852).toFixed(2) + this.lang.instant('SPEED_PAGE.kmh');
                this.httpResponse[i].speedLimit = (attr.speedLimit * 1.852).toFixed(2) + this.lang.instant('SPEED_PAGE.kmh');
                this.httpResponse[i].type = this.lang.instant('APP.' + this.httpResponse[i].type);
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
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ENDPOINT"].API_URL + 'event/overspeed/notification/' + type + '/' + deviceid + '/' + bool, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => {
            return data;
        }));
    }
    preparingSpeedLimitRequest(deviceid, speed_limit) {
        this.authService.getToken();
        let token = this.authService.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ENDPOINT"].API_URL + 'event/overspeed/set-limit', { headers: headers, params: { deviceid: deviceid, speed_limit: speed_limit } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => {
            return data;
        }));
    }
    toggleOverspeedAlert(ev) {
        this.presentLoadingWithOptions();
        setTimeout(() => {
            this.preparingRequest('speed_limit_notification', this.deviceid, this.overspeed_alert).subscribe(data => {
                this.loading.dismiss();
            }, error => {
                // alert(error.error.message);
                this.loading.dismiss();
            }, () => {
                this.loading.dismiss();
            });
        }, 50);
    }
    onChange($event) {
        this.presentLoadingWithOptions();
        let speed_limit = $event.target.value;
        this.preparingSpeedLimitRequest(this.deviceid, speed_limit).subscribe(data => {
            this.loading.dismiss();
        }, error => {
            alert(error.error.message);
            this.loading.dismiss();
        }, () => {
            this.loading.dismiss();
        });
    }
    showBasicPicker() {
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
                        name: 'Speed Limit',
                        options: [
                            { text: '1' + this.lang.instant('SPEED_PAGE.kmh'), value: 1 },
                            { text: '2' + this.lang.instant('SPEED_PAGE.kmh'), value: 2 },
                            { text: '3' + this.lang.instant('SPEED_PAGE.kmh'), value: 3 },
                            { text: '4' + this.lang.instant('SPEED_PAGE.kmh'), value: 4 },
                            { text: '5' + this.lang.instant('SPEED_PAGE.kmh'), value: 5 },
                            { text: '6' + this.lang.instant('SPEED_PAGE.kmh'), value: 6 },
                            { text: '7' + this.lang.instant('SPEED_PAGE.kmh'), value: 7 },
                            { text: '8' + this.lang.instant('SPEED_PAGE.kmh'), value: 8 },
                            { text: '9' + this.lang.instant('SPEED_PAGE.kmh'), value: 9 },
                            { text: '10' + this.lang.instant('SPEED_PAGE.kmh'), value: 10 },
                            { text: '11' + this.lang.instant('SPEED_PAGE.kmh'), value: 11 },
                            { text: '12' + this.lang.instant('SPEED_PAGE.kmh'), value: 12 },
                            { text: '13' + this.lang.instant('SPEED_PAGE.kmh'), value: 13 },
                            { text: '14' + this.lang.instant('SPEED_PAGE.kmh'), value: 14 },
                            { text: '15' + this.lang.instant('SPEED_PAGE.kmh'), value: 15 },
                            { text: '16' + this.lang.instant('SPEED_PAGE.kmh'), value: 16 },
                            { text: '17' + this.lang.instant('SPEED_PAGE.kmh'), value: 17 },
                            { text: '18' + this.lang.instant('SPEED_PAGE.kmh'), value: 18 },
                            { text: '19' + this.lang.instant('SPEED_PAGE.kmh'), value: 19 },
                            { text: '20' + this.lang.instant('SPEED_PAGE.kmh'), value: 20 },
                            { text: '21' + this.lang.instant('SPEED_PAGE.kmh'), value: 21 },
                            { text: '22' + this.lang.instant('SPEED_PAGE.kmh'), value: 22 },
                            { text: '23' + this.lang.instant('SPEED_PAGE.kmh'), value: 23 },
                            { text: '24' + this.lang.instant('SPEED_PAGE.kmh'), value: 24 },
                            { text: '25' + this.lang.instant('SPEED_PAGE.kmh'), value: 25 },
                            { text: '26' + this.lang.instant('SPEED_PAGE.kmh'), value: 26 },
                            { text: '27' + this.lang.instant('SPEED_PAGE.kmh'), value: 27 },
                            { text: '28' + this.lang.instant('SPEED_PAGE.kmh'), value: 28 },
                            { text: '29' + this.lang.instant('SPEED_PAGE.kmh'), value: 29 },
                            { text: '30' + this.lang.instant('SPEED_PAGE.kmh'), value: 30 },
                            { text: '31' + this.lang.instant('SPEED_PAGE.kmh'), value: 31 },
                            { text: '32' + this.lang.instant('SPEED_PAGE.kmh'), value: 32 },
                            { text: '33' + this.lang.instant('SPEED_PAGE.kmh'), value: 33 },
                            { text: '34' + this.lang.instant('SPEED_PAGE.kmh'), value: 34 },
                            { text: '35' + this.lang.instant('SPEED_PAGE.kmh'), value: 35 },
                            { text: '36' + this.lang.instant('SPEED_PAGE.kmh'), value: 36 },
                            { text: '37' + this.lang.instant('SPEED_PAGE.kmh'), value: 37 },
                            { text: '38' + this.lang.instant('SPEED_PAGE.kmh'), value: 38 },
                            { text: '39' + this.lang.instant('SPEED_PAGE.kmh'), value: 39 },
                            { text: '40' + this.lang.instant('SPEED_PAGE.kmh'), value: 40 },
                            { text: '41' + this.lang.instant('SPEED_PAGE.kmh'), value: 41 },
                            { text: '42' + this.lang.instant('SPEED_PAGE.kmh'), value: 42 },
                            { text: '43' + this.lang.instant('SPEED_PAGE.kmh'), value: 43 },
                            { text: '44' + this.lang.instant('SPEED_PAGE.kmh'), value: 44 },
                            { text: '45' + this.lang.instant('SPEED_PAGE.kmh'), value: 45 },
                            { text: '46' + this.lang.instant('SPEED_PAGE.kmh'), value: 46 },
                            { text: '47' + this.lang.instant('SPEED_PAGE.kmh'), value: 47 },
                            { text: '48' + this.lang.instant('SPEED_PAGE.kmh'), value: 48 },
                            { text: '49' + this.lang.instant('SPEED_PAGE.kmh'), value: 49 },
                            { text: '50' + this.lang.instant('SPEED_PAGE.kmh'), value: 50 },
                            { text: '51' + this.lang.instant('SPEED_PAGE.kmh'), value: 51 },
                            { text: '52' + this.lang.instant('SPEED_PAGE.kmh'), value: 52 },
                            { text: '53' + this.lang.instant('SPEED_PAGE.kmh'), value: 53 },
                            { text: '54' + this.lang.instant('SPEED_PAGE.kmh'), value: 54 },
                            { text: '55' + this.lang.instant('SPEED_PAGE.kmh'), value: 55 },
                            { text: '56' + this.lang.instant('SPEED_PAGE.kmh'), value: 56 },
                            { text: '57' + this.lang.instant('SPEED_PAGE.kmh'), value: 57 },
                            { text: '58' + this.lang.instant('SPEED_PAGE.kmh'), value: 58 },
                            { text: '59' + this.lang.instant('SPEED_PAGE.kmh'), value: 59 },
                            { text: '60' + this.lang.instant('SPEED_PAGE.kmh'), value: 60 },
                            { text: '61' + this.lang.instant('SPEED_PAGE.kmh'), value: 61 },
                            { text: '62' + this.lang.instant('SPEED_PAGE.kmh'), value: 62 },
                            { text: '63' + this.lang.instant('SPEED_PAGE.kmh'), value: 63 },
                            { text: '64' + this.lang.instant('SPEED_PAGE.kmh'), value: 64 },
                            { text: '65' + this.lang.instant('SPEED_PAGE.kmh'), value: 65 },
                            { text: '66' + this.lang.instant('SPEED_PAGE.kmh'), value: 66 },
                            { text: '67' + this.lang.instant('SPEED_PAGE.kmh'), value: 67 },
                            { text: '68' + this.lang.instant('SPEED_PAGE.kmh'), value: 68 },
                            { text: '69' + this.lang.instant('SPEED_PAGE.kmh'), value: 69 },
                            { text: '70' + this.lang.instant('SPEED_PAGE.kmh'), value: 70 },
                            { text: '71' + this.lang.instant('SPEED_PAGE.kmh'), value: 71 },
                            { text: '72' + this.lang.instant('SPEED_PAGE.kmh'), value: 72 },
                            { text: '73' + this.lang.instant('SPEED_PAGE.kmh'), value: 73 },
                            { text: '74' + this.lang.instant('SPEED_PAGE.kmh'), value: 74 },
                            { text: '75' + this.lang.instant('SPEED_PAGE.kmh'), value: 75 },
                            { text: '76' + this.lang.instant('SPEED_PAGE.kmh'), value: 76 },
                            { text: '77' + this.lang.instant('SPEED_PAGE.kmh'), value: 77 },
                            { text: '78' + this.lang.instant('SPEED_PAGE.kmh'), value: 78 },
                            { text: '79' + this.lang.instant('SPEED_PAGE.kmh'), value: 79 },
                            { text: '80' + this.lang.instant('SPEED_PAGE.kmh'), value: 80 },
                            { text: '81' + this.lang.instant('SPEED_PAGE.kmh'), value: 81 },
                            { text: '82' + this.lang.instant('SPEED_PAGE.kmh'), value: 82 },
                            { text: '83' + this.lang.instant('SPEED_PAGE.kmh'), value: 83 },
                            { text: '84' + this.lang.instant('SPEED_PAGE.kmh'), value: 84 },
                            { text: '85' + this.lang.instant('SPEED_PAGE.kmh'), value: 85 },
                            { text: '86' + this.lang.instant('SPEED_PAGE.kmh'), value: 86 },
                            { text: '87' + this.lang.instant('SPEED_PAGE.kmh'), value: 87 },
                            { text: '88' + this.lang.instant('SPEED_PAGE.kmh'), value: 88 },
                            { text: '89' + this.lang.instant('SPEED_PAGE.kmh'), value: 89 },
                            { text: '90' + this.lang.instant('SPEED_PAGE.kmh'), value: 90 },
                            { text: '91' + this.lang.instant('SPEED_PAGE.kmh'), value: 91 },
                            { text: '92' + this.lang.instant('SPEED_PAGE.kmh'), value: 92 },
                            { text: '93' + this.lang.instant('SPEED_PAGE.kmh'), value: 93 },
                            { text: '94' + this.lang.instant('SPEED_PAGE.kmh'), value: 94 },
                            { text: '95' + this.lang.instant('SPEED_PAGE.kmh'), value: 95 },
                            { text: '96' + this.lang.instant('SPEED_PAGE.kmh'), value: 96 },
                            { text: '97' + this.lang.instant('SPEED_PAGE.kmh'), value: 97 },
                            { text: '98' + this.lang.instant('SPEED_PAGE.kmh'), value: 98 },
                            { text: '99' + this.lang.instant('SPEED_PAGE.kmh'), value: 99 },
                            { text: '100' + this.lang.instant('SPEED_PAGE.kmh'), value: 100 },
                            { text: '101' + this.lang.instant('SPEED_PAGE.kmh'), value: 101 },
                            { text: '102' + this.lang.instant('SPEED_PAGE.kmh'), value: 102 },
                            { text: '103' + this.lang.instant('SPEED_PAGE.kmh'), value: 103 },
                            { text: '104' + this.lang.instant('SPEED_PAGE.kmh'), value: 104 },
                            { text: '105' + this.lang.instant('SPEED_PAGE.kmh'), value: 105 },
                            { text: '106' + this.lang.instant('SPEED_PAGE.kmh'), value: 106 },
                            { text: '107' + this.lang.instant('SPEED_PAGE.kmh'), value: 107 },
                            { text: '108' + this.lang.instant('SPEED_PAGE.kmh'), value: 108 },
                            { text: '109' + this.lang.instant('SPEED_PAGE.kmh'), value: 109 },
                            { text: '110' + this.lang.instant('SPEED_PAGE.kmh'), value: 110 },
                            { text: '111' + this.lang.instant('SPEED_PAGE.kmh'), value: 111 },
                            { text: '112' + this.lang.instant('SPEED_PAGE.kmh'), value: 112 },
                            { text: '113' + this.lang.instant('SPEED_PAGE.kmh'), value: 113 },
                            { text: '114' + this.lang.instant('SPEED_PAGE.kmh'), value: 114 },
                            { text: '115' + this.lang.instant('SPEED_PAGE.kmh'), value: 115 },
                            { text: '116' + this.lang.instant('SPEED_PAGE.kmh'), value: 116 },
                            { text: '117' + this.lang.instant('SPEED_PAGE.kmh'), value: 117 },
                            { text: '118' + this.lang.instant('SPEED_PAGE.kmh'), value: 118 },
                            { text: '119' + this.lang.instant('SPEED_PAGE.kmh'), value: 119 },
                            { text: '120' + this.lang.instant('SPEED_PAGE.kmh'), value: 120 },
                            { text: '121' + this.lang.instant('SPEED_PAGE.kmh'), value: 121 },
                            { text: '122' + this.lang.instant('SPEED_PAGE.kmh'), value: 122 },
                            { text: '123' + this.lang.instant('SPEED_PAGE.kmh'), value: 123 },
                            { text: '124' + this.lang.instant('SPEED_PAGE.kmh'), value: 124 },
                            { text: '125' + this.lang.instant('SPEED_PAGE.kmh'), value: 125 },
                            { text: '126' + this.lang.instant('SPEED_PAGE.kmh'), value: 126 },
                            { text: '127' + this.lang.instant('SPEED_PAGE.kmh'), value: 127 },
                            { text: '128' + this.lang.instant('SPEED_PAGE.kmh'), value: 128 },
                            { text: '129' + this.lang.instant('SPEED_PAGE.kmh'), value: 129 },
                            { text: '130' + this.lang.instant('SPEED_PAGE.kmh'), value: 130 },
                            { text: '131' + this.lang.instant('SPEED_PAGE.kmh'), value: 131 },
                            { text: '132' + this.lang.instant('SPEED_PAGE.kmh'), value: 132 },
                            { text: '133' + this.lang.instant('SPEED_PAGE.kmh'), value: 133 },
                            { text: '134' + this.lang.instant('SPEED_PAGE.kmh'), value: 134 },
                            { text: '135' + this.lang.instant('SPEED_PAGE.kmh'), value: 135 },
                            { text: '136' + this.lang.instant('SPEED_PAGE.kmh'), value: 136 },
                            { text: '137' + this.lang.instant('SPEED_PAGE.kmh'), value: 137 },
                            { text: '138' + this.lang.instant('SPEED_PAGE.kmh'), value: 138 },
                            { text: '139' + this.lang.instant('SPEED_PAGE.kmh'), value: 139 },
                            { text: '140' + this.lang.instant('SPEED_PAGE.kmh'), value: 140 },
                            { text: '141' + this.lang.instant('SPEED_PAGE.kmh'), value: 141 },
                            { text: '142' + this.lang.instant('SPEED_PAGE.kmh'), value: 142 },
                            { text: '143' + this.lang.instant('SPEED_PAGE.kmh'), value: 143 },
                            { text: '144' + this.lang.instant('SPEED_PAGE.kmh'), value: 144 },
                            { text: '145' + this.lang.instant('SPEED_PAGE.kmh'), value: 145 },
                            { text: '146' + this.lang.instant('SPEED_PAGE.kmh'), value: 146 },
                            { text: '147' + this.lang.instant('SPEED_PAGE.kmh'), value: 147 },
                            { text: '148' + this.lang.instant('SPEED_PAGE.kmh'), value: 148 },
                            { text: '149' + this.lang.instant('SPEED_PAGE.kmh'), value: 149 },
                            { text: '150' + this.lang.instant('SPEED_PAGE.kmh'), value: 150 },
                            { text: '151' + this.lang.instant('SPEED_PAGE.kmh'), value: 151 },
                            { text: '152' + this.lang.instant('SPEED_PAGE.kmh'), value: 152 },
                            { text: '153' + this.lang.instant('SPEED_PAGE.kmh'), value: 153 },
                            { text: '154' + this.lang.instant('SPEED_PAGE.kmh'), value: 154 },
                            { text: '155' + this.lang.instant('SPEED_PAGE.kmh'), value: 155 },
                            { text: '156' + this.lang.instant('SPEED_PAGE.kmh'), value: 156 },
                            { text: '157' + this.lang.instant('SPEED_PAGE.kmh'), value: 157 },
                            { text: '158' + this.lang.instant('SPEED_PAGE.kmh'), value: 158 },
                            { text: '159' + this.lang.instant('SPEED_PAGE.kmh'), value: 159 },
                            { text: '160' + this.lang.instant('SPEED_PAGE.kmh'), value: 160 },
                            { text: '161' + this.lang.instant('SPEED_PAGE.kmh'), value: 161 },
                            { text: '162' + this.lang.instant('SPEED_PAGE.kmh'), value: 162 },
                            { text: '163' + this.lang.instant('SPEED_PAGE.kmh'), value: 163 },
                            { text: '164' + this.lang.instant('SPEED_PAGE.kmh'), value: 164 },
                            { text: '165' + this.lang.instant('SPEED_PAGE.kmh'), value: 165 },
                            { text: '166' + this.lang.instant('SPEED_PAGE.kmh'), value: 166 },
                            { text: '167' + this.lang.instant('SPEED_PAGE.kmh'), value: 167 },
                            { text: '168' + this.lang.instant('SPEED_PAGE.kmh'), value: 168 },
                            { text: '169' + this.lang.instant('SPEED_PAGE.kmh'), value: 169 },
                            { text: '170' + this.lang.instant('SPEED_PAGE.kmh'), value: 170 },
                            { text: '171' + this.lang.instant('SPEED_PAGE.kmh'), value: 171 },
                            { text: '172' + this.lang.instant('SPEED_PAGE.kmh'), value: 172 },
                            { text: '173' + this.lang.instant('SPEED_PAGE.kmh'), value: 173 },
                            { text: '174' + this.lang.instant('SPEED_PAGE.kmh'), value: 174 },
                            { text: '175' + this.lang.instant('SPEED_PAGE.kmh'), value: 175 },
                            { text: '176' + this.lang.instant('SPEED_PAGE.kmh'), value: 176 },
                            { text: '177' + this.lang.instant('SPEED_PAGE.kmh'), value: 177 },
                            { text: '178' + this.lang.instant('SPEED_PAGE.kmh'), value: 178 },
                            { text: '179' + this.lang.instant('SPEED_PAGE.kmh'), value: 179 },
                            { text: '180' + this.lang.instant('SPEED_PAGE.kmh'), value: 180 },
                            { text: '181' + this.lang.instant('SPEED_PAGE.kmh'), value: 181 },
                            { text: '182' + this.lang.instant('SPEED_PAGE.kmh'), value: 182 },
                            { text: '183' + this.lang.instant('SPEED_PAGE.kmh'), value: 183 },
                            { text: '184' + this.lang.instant('SPEED_PAGE.kmh'), value: 184 },
                            { text: '185' + this.lang.instant('SPEED_PAGE.kmh'), value: 185 },
                            { text: '186' + this.lang.instant('SPEED_PAGE.kmh'), value: 186 },
                            { text: '187' + this.lang.instant('SPEED_PAGE.kmh'), value: 187 },
                            { text: '188' + this.lang.instant('SPEED_PAGE.kmh'), value: 188 },
                            { text: '189' + this.lang.instant('SPEED_PAGE.kmh'), value: 189 },
                            { text: '190' + this.lang.instant('SPEED_PAGE.kmh'), value: 190 },
                            { text: '191' + this.lang.instant('SPEED_PAGE.kmh'), value: 191 },
                            { text: '192' + this.lang.instant('SPEED_PAGE.kmh'), value: 192 },
                            { text: '193' + this.lang.instant('SPEED_PAGE.kmh'), value: 193 },
                            { text: '194' + this.lang.instant('SPEED_PAGE.kmh'), value: 194 },
                            { text: '195' + this.lang.instant('SPEED_PAGE.kmh'), value: 195 },
                            { text: '196' + this.lang.instant('SPEED_PAGE.kmh'), value: 196 },
                            { text: '197' + this.lang.instant('SPEED_PAGE.kmh'), value: 197 },
                            { text: '198' + this.lang.instant('SPEED_PAGE.kmh'), value: 198 },
                            { text: '199' + this.lang.instant('SPEED_PAGE.kmh'), value: 199 },
                            { text: '200' + this.lang.instant('SPEED_PAGE.kmh'), value: 200 },
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
                let col = yield picker.getColumn('Speed Limit');
                this.speed_limit = col.options[col.selectedIndex].value;
                this.preparingSpeedLimitRequest(this.deviceid, this.speed_limit).subscribe(data => {
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
SpeedPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], SpeedPage.prototype, "infiniteScroll", void 0);
SpeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-speed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./speed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/speed/speed.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./speed.page.scss */ "./src/app/pages/speed/speed.page.scss")).default]
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], SpeedPage);



/***/ })

}]);
//# sourceMappingURL=pages-speed-speed-module-es2015.js.map