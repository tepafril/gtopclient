(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-device-device-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device/device.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device/device.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'APP.my_devices' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-searchbar></ion-searchbar>\n    <ion-list *ngFor=\"let device of devices\">\n    \n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/google/marker/{{ device.icon_name }}.png\">\n        </ion-avatar>\n        <ion-label><ion-text color=\"primary\">{{ device.plate }}</ion-text></ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"3\"><ion-label><ion-text color=\"dark\">IMEI</ion-text></ion-label></ion-col>\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">{{ device.imei }}</ion-label></ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"3\"><ion-label><ion-text color=\"dark\">Name</ion-text></ion-label></ion-col>\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">{{ device.name }}</ion-label></ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"3\"><ion-label><ion-text color=\"dark\">Sim</ion-text></ion-label></ion-col>\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">{{ device.phone }}</ion-label></ion-col>\n      </ion-item>\n\n      <ion-item>\n        <ion-col size=\"3\"><ion-label><ion-text color=\"dark\">Since</ion-text></ion-label></ion-col>\n        <ion-col size=\"9\"><ion-label class=\"ion-text-wrap\">{{ readableLocalDate(device.created_at) }} {{ readableLocalTime(device.created_at) }}</ion-label></ion-col>\n      </ion-item>\n\n    </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/device/device-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/device/device-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DevicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePageRoutingModule", function() { return DevicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _device_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device.page */ "./src/app/pages/device/device.page.ts");




const routes = [
    {
        path: '',
        component: _device_page__WEBPACK_IMPORTED_MODULE_3__["DevicePage"]
    }
];
let DevicePageRoutingModule = class DevicePageRoutingModule {
};
DevicePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DevicePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/device/device.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/device/device.module.ts ***!
  \***********************************************/
/*! exports provided: DevicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePageModule", function() { return DevicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _device_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-routing.module */ "./src/app/pages/device/device-routing.module.ts");
/* harmony import */ var _device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device.page */ "./src/app/pages/device/device.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let DevicePageModule = class DevicePageModule {
};
DevicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _device_routing_module__WEBPACK_IMPORTED_MODULE_5__["DevicePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_device_page__WEBPACK_IMPORTED_MODULE_6__["DevicePage"]]
    })
], DevicePageModule);



/***/ }),

/***/ "./src/app/pages/device/device.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/device/device.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-avatar img {\n  background-color: #777;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvZGV2aWNlL2RldmljZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldmljZS9kZXZpY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmljZS9kZXZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciBpbWd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3Nztcbn0iLCJpb24tYXZhdGFyIGltZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzc7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/device/device.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/device/device.page.ts ***!
  \*********************************************/
/*! exports provided: DevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePage", function() { return DevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/traccar.service */ "./src/app/services/traccar.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let DevicePage = class DevicePage {
    constructor(http, authService, navCtrl, loadingController, alertController, alertService, traccarService, lang, platform) {
        this.http = http;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.alertService = alertService;
        this.traccarService = traccarService;
        this.lang = lang;
        this.platform = platform;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.presentLoadingWithOptions();
        this.prepareQuery();
    }
    prepareQuery() {
        this.traccarService.getMyDevices().subscribe(res => {
            this.httpResponse = res;
            this.devices = this.httpResponse.items;
        }, err => {
            if (err.error.message) {
                this.alertService.presentToast(err.error.message, "danger");
            }
            else {
                this.alertService.presentToast(err.message, "danger");
            }
            this.loading.dismiss();
        }, () => {
            console.log(this.httpResponse);
            this.loading.dismiss();
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
        return s;
    }
};
DevicePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_6__["TraccarService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
DevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./device.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/device/device.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./device.page.scss */ "./src/app/pages/device/device.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        src_app_services_traccar_service__WEBPACK_IMPORTED_MODULE_6__["TraccarService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], DevicePage);



/***/ })

}]);
//# sourceMappingURL=pages-device-device-module-es2015.js.map