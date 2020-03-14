(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <div slot=\"start\">\n      <ion-img alt=\"logo\" style=\"height: 28px; width: 90px;\" src=\"assets/gps-logo.png\"></ion-img>\n    </div>\n\n      <ion-title>\n        {{ 'APP.home' | translate }}\n      </ion-title>\n\n      <ion-buttons slot=\"end\">\n        <ion-button routerLink=\"/notification\">\n          <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-no-padding background-gray\">\n\n\n    <ion-grid class=\"ion-no-padding header-container\">\n      <ion-row>\n        <ion-col>\n          <h5 class=\"text-center\">\n            {{ 'APP.welcome_for_visiting_gtop' | translate }}\n          </h5>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row class=\"button-1\">\n        <ion-col class=\"\" size=\"3\" routerLink=\"/geolocation\">\n          <img src=\"{{ 'ASSET.geolocation' | translate }}\">\n        </ion-col>\n\n        <ion-col class=\"\" size=\"3\" routerLink=\"/history\">\n          <img src=\"{{ 'ASSET.history' | translate }}\">\n        </ion-col>\n\n        <ion-col class=\"\" size=\"3\" routerLink=\"/engine\">\n          <img src=\"{{ 'ASSET.engine' | translate }}\">\n        </ion-col>\n\n        <ion-col class=\"\" size=\"3\" routerLink=\"/device\">\n          <img src=\"{{ 'ASSET.device' | translate }}\">\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid class=\"ion-no-padding padding-5\">\n        <ion-row class=\"button-2 ion-hide-lg-up\">\n\n          <ion-col button class=\"\" size=\"3\" routerLink=\"/disarm\">\n            <img src=\"{{ 'ASSET.disarm' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/parking-alarm\">\n            <img src=\"{{ 'ASSET.parking_alarm' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/trip\">\n            <img src=\"{{ 'ASSET.trip' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/oil-maintenance\">\n            <img src=\"{{ 'ASSET.oil' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/tire-maintenance\">\n            <img src=\"{{ 'ASSET.tire' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/speed\">\n            <img src=\"{{ 'ASSET.speed' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/summary\">\n            <img src=\"{{ 'ASSET.report' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/manage-icon\">\n            <img src=\"{{ 'ASSET.icon' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"3\">\n            <img src=\"{{ 'ASSET.geofence' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"3\">\n            <img src=\"{{ 'ASSET.polygonfence' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"3\" routerLink=\"/manage-group\">\n            <img src=\"{{ 'ASSET.group' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"3\">\n            <img src=\"{{ 'ASSET.fuel' | translate }}\">\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"button-2 ion-hide-md-down\">\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/disarm\">\n            <img src=\"{{ 'ASSET.disarm' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/parking-alarm\">\n            <img src=\"{{ 'ASSET.parking_alarm' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/trip\">\n            <img src=\"{{ 'ASSET.trip' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/oil-maintenance\">\n            <img src=\"{{ 'ASSET.oil' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/tire-maintenance\">\n            <img src=\"{{ 'ASSET.tire' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/speed\">\n            <img src=\"{{ 'ASSET.speed' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/summary\">\n            <img src=\"{{ 'ASSET.report' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/manage-icon\">\n            <img src=\"{{ 'ASSET.icon' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"2\">\n            <img src=\"{{ 'ASSET.geofence' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"2\">\n            <img src=\"{{ 'ASSET.polygonfence' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"\" size=\"2\" routerLink=\"/manage-group\">\n            <img src=\"{{ 'ASSET.group' | translate }}\">\n          </ion-col>\n\n          <ion-col class=\"disabled\" size=\"2\">\n            <img src=\"{{ 'ASSET.fuel' | translate }}\">\n          </ion-col>\n        </ion-row>\n    </ion-grid>\n\n\n\n     \n    <ion-slides [options]=\"sliderConfig\" >\n      <ion-slide>\n          <ion-card class=\"ion-no-padding\">  \n            <ion-card-content class=\"ion-no-padding\">\n              <img src=\"assets/img/ads-1.jpg\">\n            </ion-card-content>\n          </ion-card>\n      </ion-slide>\n\n      <ion-slide>\n          <ion-card>\n            <ion-card-content class=\"ion-no-padding\">\n              <img src=\"assets/img/ads-2.jpg\">\n            </ion-card-content>\n          </ion-card>\n      </ion-slide>\n\n    </ion-slides>\n \n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/pages/dashboard/dashboard.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]
    }
];
let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_7__["DashboardPage"]]
    })
], DashboardPageModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-padding-end {\n  -webkit-padding-after: 0px;\n          padding-block-end: 0px;\n}\n\n.odad-col-button {\n  padding: 16px;\n}\n\n.sc-ion-card-md-h, .sc-ion-card-ios-h {\n  margin: 18px 5px;\n}\n\n.padding-5 {\n  padding: 5px;\n}\n\nion-content.background-gray {\n  --background: #f4f3ef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksMEJBQUE7VUFBQSxzQkFBQTtBQ1RKOztBRFdBO0VBSUksYUFBQTtBQ1hKOztBRGtCQTtFQUNJLGdCQUFBO0FDZko7O0FEa0JBO0VBQ0ksWUFBQTtBQ2ZKOztBRGtCQTtFQUVJLHFCQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgLy8gYm9yZGVyOjFweCBzb2xpZCAjY2ZjZmNhO1xufVxuXG5cblxuaW9uLWNhcmQtY29udGVudHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjY2ZjZmNhO1xufVxuLmlvbi1wYWRkaW5nLWVuZHtcbiAgICBwYWRkaW5nLWJsb2NrLWVuZDogMHB4O1xufVxuLm9kYWQtY29sLWJ1dHRvbntcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIC8vIGJvcmRlcjoxcHggc29saWQgI2NmY2ZjYTtcbiAgICAvLyBib3JkZXItbGVmdC13aWR0aDowcHg7XG4gICAgcGFkZGluZzogMTZweDtcbn1cblxuLm9kYWQtY29sLWJ1dHRvbiBpb24taW1ne1xuICAgIC8vIG1hcmdpbi1yaWdodDo1cHg7XG59XG5cbi5zYy1pb24tY2FyZC1tZC1oLCAuc2MtaW9uLWNhcmQtaW9zLWgge1xuICAgIG1hcmdpbjogMThweCA1cHg7XG59XG5cbi5wYWRkaW5nLTV7XG4gICAgcGFkZGluZzo1cHg7XG59XG5cbmlvbi1jb250ZW50LmJhY2tncm91bmQtZ3JheVxue1xuICAgIC0tYmFja2dyb3VuZDogI2Y0ZjNlZjtcbn0iLCIuaW9uLXBhZGRpbmctZW5kIHtcbiAgcGFkZGluZy1ibG9jay1lbmQ6IDBweDtcbn1cblxuLm9kYWQtY29sLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5zYy1pb24tY2FyZC1tZC1oLCAuc2MtaW9uLWNhcmQtaW9zLWgge1xuICBtYXJnaW46IDE4cHggNXB4O1xufVxuXG4ucGFkZGluZy01IHtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5pb24tY29udGVudC5iYWNrZ3JvdW5kLWdyYXkge1xuICAtLWJhY2tncm91bmQ6ICNmNGYzZWY7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");






let DashboardPage = class DashboardPage {
    constructor(menu, authService, navCtrl, alertService, loadingController, storageService) {
        this.menu = menu;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.storageService = storageService;
        this.sliderConfig = {
            slidesPerView: 1,
            centeredSlides: true
        };
        this.menu.enable(true);
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.presentLoading();
        this.authService.getToken().then(() => {
            if (this.authService.isLoggedIn) {
                this.authService.checkPassport().subscribe(res => {
                    this.httpResponse = res;
                }, err => {
                    this.authService.clearToken();
                    if (err.error.message) {
                        this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>", "danger");
                    }
                    else {
                        this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>", "danger");
                    }
                    this.loading.dismiss();
                    this.navCtrl.navigateRoot('/landing');
                }, () => {
                    this.loading.dismiss();
                });
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait',
                duration: 10000
            });
            yield this.loading.present();
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
];
DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/pages/dashboard/dashboard.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])
], DashboardPage);



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module-es2015.js.map