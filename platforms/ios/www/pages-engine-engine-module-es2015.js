(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-engine-engine-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/engine/engine.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/engine/engine.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'ENGINE_PAGE.engine_on_off' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background-gray\">\n\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ deviceIcon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"selectDevice()\">\n          {{ devicePlateNumber }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n\n  <ion-grid class=\"ion-padding\">\n\n\n    <ion-row class=\"button-3\">\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col class=\"\" size=\"5\" (click)=\"presentPasswordPrompt('engineStop')\">\n        <img src=\"{{ 'ASSET.engine_off' | translate }}\">\n      </ion-col>\n\n      <ion-col class=\"\" size=\"5\" (click)=\"presentPasswordPrompt('engineResume')\">\n        <img src=\"{{ 'ASSET.engine_on' | translate }}\">\n      </ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/engine/engine-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/engine/engine-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: EnginePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnginePageRoutingModule", function() { return EnginePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _engine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine.page */ "./src/app/pages/engine/engine.page.ts");




const routes = [
    {
        path: '',
        component: _engine_page__WEBPACK_IMPORTED_MODULE_3__["EnginePage"]
    }
];
let EnginePageRoutingModule = class EnginePageRoutingModule {
};
EnginePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EnginePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/engine/engine.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/engine/engine.module.ts ***!
  \***********************************************/
/*! exports provided: EnginePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnginePageModule", function() { return EnginePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _engine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./engine-routing.module */ "./src/app/pages/engine/engine-routing.module.ts");
/* harmony import */ var _engine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine.page */ "./src/app/pages/engine/engine.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let EnginePageModule = class EnginePageModule {
};
EnginePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _engine_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnginePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_engine_page__WEBPACK_IMPORTED_MODULE_6__["EnginePage"]]
    })
], EnginePageModule);



/***/ }),

/***/ "./src/app/pages/engine/engine.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/engine/engine.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-top-padding {\n  margin-top: 25px;\n}\n\n.ignitionOn {\n  color: var(--ion-color-success);\n}\n\n.ignitionOff {\n  color: var(--ion-color-danger);\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2VuZ2luZS9lbmdpbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lbmdpbmUvZW5naW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbmdpbmUvZW5naW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tdG9wLXBhZGRpbmd7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xufVxuXG4uaWduaXRpb25PbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmZ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG5pb24tYXZhdGFyIGltZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICAgIGJvcmRlcjo0cHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbn0iLCIuaW9uLXRvcC1wYWRkaW5nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmlnbml0aW9uT24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmYge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/engine/engine.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/engine/engine.page.ts ***!
  \*********************************************/
/*! exports provided: EnginePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnginePage", function() { return EnginePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../select-device/select-device.page */ "./src/app/pages/select-device/select-device.page.ts");











let EnginePage = class EnginePage {
    constructor(http, authService, navCtrl, loadingController, alertController, alertService, storageService, modalController) {
        this.http = http;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.alertService = alertService;
        this.storageService = storageService;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.storageService.setItem().subscribe(res => {
            this.current_item = this.storageService.current_item;
            this.deviceIcon = this.current_item.icon_name;
            this.deviceIconSize = this.current_item.icon_size;
            this.devicePlateNumber = this.current_item.plate;
        }, (err) => {
            console.log(err);
        }, () => {
        });
    }
    goBack() {
        this.navCtrl.navigateBack('dashboard/tabs/home');
    }
    sendCommandEngineOnOff(status, password, deviceid) {
        this.presentLoadingWithOptions();
        this.preparingCommand(status, password, deviceid).subscribe(data => {
            this.httpResponse = data;
            this.loading.dismiss();
        }, err => {
            if (err.error.message)
                this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>", "danger");
            else
                this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>", "danger");
            this.loading.dismiss();
        }, () => {
            this.alertService.presentToast("<ion-text>" + this.httpResponse.message + "</ion-text>", "success");
            this.loading.dismiss();
        });
    }
    presentPasswordPrompt(status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.status = status;
            const passwordPrompt = yield this.alertController.create({
                header: 'Please enter your password',
                inputs: [
                    {
                        name: 'password',
                        type: 'password'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (alertData) => {
                            let password = alertData.password;
                            if (password.length < 6) {
                                alert("Password should be greater than 6 digits.");
                            }
                            else {
                                this.sendCommandEngineOnOff(this.status, password, this.current_item.deviceid);
                            }
                        }
                    }
                ]
            });
            yield passwordPrompt.present();
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
    preparingCommand(command, password, deviceid) {
        this.authService.getToken();
        let token = this.authService.token;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["ENDPOINT"].API_URL + 'command/send/traccar/' + command + '/' + password + "/" + this.current_item.deviceid, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(data => {
            return data;
        }));
    }
    selectDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const assignItemModal = yield this.modalController.create({
                component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_9__["SelectDevicePage"],
                componentProps: {
                    // groupItems: this.groupItems,
                    // groupID: this.groupID
                    moduleName: "module_geolocation"
                }
            });
            assignItemModal.onDidDismiss().then((res) => {
                this.selectedItems = res.data;
                // Get Current Item from Storage
                this.current_item = this.selectedItems;
                this.deviceIcon = this.current_item.icon_name;
                this.deviceIconSize = this.current_item.icon_size;
                this.devicePlateNumber = this.current_item.plate;
            }).catch(err => {
                console.log(err);
            });
            return yield assignItemModal.present();
        });
    }
};
EnginePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
EnginePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-engine',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./engine.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/engine/engine.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./engine.page.scss */ "./src/app/pages/engine/engine.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], EnginePage);



/***/ })

}]);
//# sourceMappingURL=pages-engine-engine-module-es2015.js.map