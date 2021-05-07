(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-disarm-disarm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/disarm/disarm.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/disarm/disarm.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'DISARM_PAGE.arm_disarm' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\" routerLink=\"/deliveries\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ item_icon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"selectDevice()\">\n          {{ item_name }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  <ion-grid class=\"ion-no-padding ion-top-padding1\">\n\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'DISARM_PAGE.arm_disarm_notification' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>{{ 'DISARM_PAGE.notify_arm' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"arm_alert\" (click)=\"toggleArmAlert($event)\"></ion-toggle>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label>{{ 'DISARM_PAGE.notify_disarm' | translate }}</ion-label>\n        <ion-toggle [(ngModel)]=\"disarm_alert\" (click)=\"toggleDisarmAlert($event)\"></ion-toggle>\n      </ion-item>\n      \n    </ion-list>\n\n    <ion-list>\n      <ion-item>\n        <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/alarm-clock.svg\"></ion-icon>\n        <ion-label>\n          <ion-text color=\"dark\">{{ 'DISARM_PAGE.arm_disarm_history' | translate }}</ion-text>\n        </ion-label>\n      </ion-item>\n\n      <ion-item-group *ngFor=\"let item of dataList\">\n        <ion-item-divider *ngIf=\"item.have_group != 0\">\n          <ion-label>{{ item.serverdate }}</ion-label>\n        </ion-item-divider>\n      \n        <ion-item>\n          <ion-label>{{ item.servertime }}</ion-label>\n          <ion-note class=\"{{ item.note_class }}\" slot=\"end\">{{ item.type }}</ion-note>\n        </ion-item>\n        \n      </ion-item-group>\n    </ion-list>\n \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-grid>\n\n\n\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/disarm/disarm-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/disarm/disarm-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DisarmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisarmPageRoutingModule", function() { return DisarmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _disarm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./disarm.page */ "./src/app/pages/disarm/disarm.page.ts");




const routes = [
    {
        path: '',
        component: _disarm_page__WEBPACK_IMPORTED_MODULE_3__["DisarmPage"]
    }
];
let DisarmPageRoutingModule = class DisarmPageRoutingModule {
};
DisarmPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DisarmPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/disarm/disarm.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/disarm/disarm.module.ts ***!
  \***********************************************/
/*! exports provided: DisarmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisarmPageModule", function() { return DisarmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _disarm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./disarm-routing.module */ "./src/app/pages/disarm/disarm-routing.module.ts");
/* harmony import */ var _disarm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./disarm.page */ "./src/app/pages/disarm/disarm.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let DisarmPageModule = class DisarmPageModule {
};
DisarmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _disarm_routing_module__WEBPACK_IMPORTED_MODULE_5__["DisarmPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_disarm_page__WEBPACK_IMPORTED_MODULE_6__["DisarmPage"]]
    })
], DisarmPageModule);



/***/ }),

/***/ "./src/app/pages/disarm/disarm.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/disarm/disarm.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-top-padding {\n  margin-top: 25px;\n}\n\n.ignitionOn {\n  color: var(--ion-color-success);\n}\n\n.ignitionOff {\n  color: var(--ion-color-danger);\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2Rpc2FybS9kaXNhcm0ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kaXNhcm0vZGlzYXJtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kaXNhcm0vZGlzYXJtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tdG9wLXBhZGRpbmd7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xufVxuXG4uaWduaXRpb25PbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmZ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG5pb24tYXZhdGFyIGltZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICAgIGJvcmRlcjo0cHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbn0iLCIuaW9uLXRvcC1wYWRkaW5nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmlnbml0aW9uT24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmYge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/disarm/disarm.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/disarm/disarm.page.ts ***!
  \*********************************************/
/*! exports provided: DisarmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisarmPage", function() { return DisarmPage; });
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














let DisarmPage = class DisarmPage {
    constructor(http, authService, navCtrl, loadingController, traccarService, lang, platform, alertService, storageService, modalController) {
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
        this.traccarService.getIgnition(deviceid, this.pagination).subscribe(res => {
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
                this.httpResponse[i].serverdate = readableLocalDate;
                this.httpResponse[i].servertime = readableLocalTime;
                this.httpResponse[i].note_class = this.httpResponse[i].type;
                this.httpResponse[i].type = this.lang.instant('APP.' + this.httpResponse[i].type);
                this.dataList.push(this.httpResponse[i]);
            }
            this.pagination++;
            this.item_name = this.current_item.name;
            this.item_icon = this.current_item.icon_name;
            this.arm_alert = this.current_item.arm_notification;
            this.disarm_alert = this.current_item.disarm_notification;
            this.deviceid = this.current_item.deviceid;
            this.loading.dismiss();
        });
    }
    loadData(event) {
        this.traccarService.getIgnition(this.deviceid, this.pagination).subscribe(res => {
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
                this.httpResponse[i].serverdate = readableLocalDate;
                this.httpResponse[i].servertime = readableLocalTime;
                this.httpResponse[i].note_class = this.httpResponse[i].type;
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
    selectDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const assignItemModal = yield this.modalController.create({
                component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_11__["SelectDevicePage"],
                componentProps: {
                    // groupItems: this.groupItems,
                    // groupID: this.groupID
                    moduleName: "module_ignition"
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
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["ENDPOINT"].API_URL + 'event/ignition/notification/' + type + '/' + deviceid + '/' + bool, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(data => {
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
DisarmPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_5__["TraccarService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInfiniteScroll"])
], DisarmPage.prototype, "infiniteScroll", void 0);
DisarmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-disarm',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./disarm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/disarm/disarm.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./disarm.page.scss */ "./src/app/pages/disarm/disarm.page.scss")).default]
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
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], DisarmPage);



/***/ })

}]);
//# sourceMappingURL=pages-disarm-disarm-module-es2015.js.map