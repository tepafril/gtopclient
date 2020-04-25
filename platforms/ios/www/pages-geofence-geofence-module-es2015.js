(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-geofence-geofence-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geofence/geofence.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geofence/geofence.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'DISARM_PAGE.arm_disarm' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div id=\"map_canvas\">\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n\n      <ion-fab-button color=\"success\" size=\"small\" class=\"marginBottom5\" (click)=\"enableResizableMarker()\" *ngIf=\"isResizable\">\n        <ion-icon name=\"move-outline\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"success\" size=\"small\" class=\"marginBottom5 disabled\" *ngIf=\"!isResizable\">\n        <ion-icon name=\"move-outline\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"primary\" size=\"small\" class=\"marginBottom5\" (click)=\"enableResizableMarker()\" *ngIf=\"!isResizable\">\n        <ion-icon name=\"resize-outline\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"primary\" size=\"small\" class=\"marginBottom5 disabled\" *ngIf=\"isResizable\">\n        <ion-icon name=\"resize-outline\"></ion-icon>\n      </ion-fab-button>\n\n    </ion-fab>\n  </div>\n</ion-content>\n\n\n<ion-footer>\n\n  <ion-toolbar color=\"light\">\n    <ion-grid class=\"text-center\">\n      <ion-row>\n        <ion-col>\n          <ion-label>\n            <h1>\n              {{ distanceSize }} meter\n            </h1>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/geofence/geofence-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/geofence/geofence-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: GeofencePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeofencePageRoutingModule", function() { return GeofencePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _geofence_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./geofence.page */ "./src/app/pages/geofence/geofence.page.ts");




const routes = [
    {
        path: '',
        component: _geofence_page__WEBPACK_IMPORTED_MODULE_3__["GeofencePage"]
    }
];
let GeofencePageRoutingModule = class GeofencePageRoutingModule {
};
GeofencePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GeofencePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/geofence/geofence.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/geofence/geofence.module.ts ***!
  \***************************************************/
/*! exports provided: GeofencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeofencePageModule", function() { return GeofencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _geofence_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geofence-routing.module */ "./src/app/pages/geofence/geofence-routing.module.ts");
/* harmony import */ var _geofence_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geofence.page */ "./src/app/pages/geofence/geofence.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let GeofencePageModule = class GeofencePageModule {
};
GeofencePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _geofence_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeofencePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_geofence_page__WEBPACK_IMPORTED_MODULE_6__["GeofencePage"]]
    })
], GeofencePageModule);



/***/ }),

/***/ "./src/app/pages/geofence/geofence.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/geofence/geofence.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas {\n  width: 100%;\n  height: 100%;\n}\n\n.disabled {\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2dlb2ZlbmNlL2dlb2ZlbmNlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2VvZmVuY2UvZ2VvZmVuY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlb2ZlbmNlL2dlb2ZlbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kaXNhYmxlZHtcbiAgICBvcGFjaXR5OiAwLjU7XG59IiwiI21hcF9jYW52YXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/geofence/geofence.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/geofence/geofence.page.ts ***!
  \*************************************************/
/*! exports provided: GeofencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeofencePage", function() { return GeofencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");






let GeofencePage = class GeofencePage {
    constructor(platform, navCtrl, _ngZone, geolocation, loadingController) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this._ngZone = _ngZone;
        this.geolocation = geolocation;
        this.loadingController = loadingController;
        this.userPosition = { "lat": 0, "lng": 0 };
        this.watchUserPositionInc = 0;
        this.distanceSize = 500;
        this.isResizable = false;
    }
    goBack() {
        this.navCtrl.navigateBack('dashboard/tabs/home');
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.platform.ready();
            yield this.loadMap();
        });
    }
    loadMap() {
        // Present Preloading
        this.presentLoading();
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMaps"].create('map_canvas', {
            'camera': {
                'padding': 100
            },
            'gestures': {
                'scroll': true,
                'tilt': true,
                'rotate': true,
                'zoom': true
            }
        });
        this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsEvent"].MAP_READY).then(() => {
            // Start Http Request
            this.locateUser();
            // Set Interval every 7.5 Second to get http request
            const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(7500);
            this.subscription = source.subscribe(val => {
                this.locateUser();
            });
        });
    }
    locateUser() {
        this.geolocation.getCurrentPosition().then(position => {
            if (position) {
                this.userPosition.lat = position.coords.latitude;
                this.userPosition.lng = position.coords.longitude;
                this.drawUserMarker();
                this.watchUserPositionInc++;
            }
        }).catch(error => {
            console.log(error);
        });
    }
    drawUserMarker() {
        if (this.watchUserPositionInc > 0) {
            this.userMarker.setPosition(new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["LatLng"](this.userPosition.lat, this.userPosition.lng));
            return;
        }
        let icon = {
            url: "assets/google/marker/current-location.png",
            size: {
                width: 24,
                height: 24
            }
        };
        this.userMarker = this.map.addMarkerSync({
            icon: icon,
            position: {
                lat: this.userPosition.lat,
                lng: this.userPosition.lng
            },
            anchor: [12, 12]
        });
        this.userMarker.setIconAnchor(12, 12);
        this.userMarker.setIcon(icon);
        this.drawCircle();
    }
    drawCircle() {
        this.loading.dismiss();
        let center = { "lat": this.userPosition.lat, "lng": this.userPosition.lng };
        let positions = [0, 90, 180, 270].map((degree) => {
            return _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["Spherical"].computeOffset(center, this.distanceSize, degree);
        });
        this.map.setOptions({
            camera: {
                target: positions,
                padding: 100
            }
        });
        this.circle = this.map.addCircleSync({
            'clickable': true,
            'center': center,
            'radius': this.distanceSize,
            'strokeColor': '#00a850',
            'strokeWidth': 4,
            'fillColor': '#00a85040'
        });
        let moveIcon = {
            url: 'assets/google/marker/movableMarker.png',
            size: {
                width: 40,
                height: 40
            }
        };
        this.movableMarker = this.map.addMarkerSync({
            icon: moveIcon,
            position: this.circle.getCenter(),
            draggable: true
        });
        this.movableMarker.setIconAnchor(20, 20);
        this.movableMarker.bindTo("position", this.circle, "center");
    }
    enableResizableMarker() {
        this.isResizable = !this.isResizable;
        if (this.isResizable) {
            this.movableMarker.remove();
            this.movableMarker = null;
            let center = { "lat": this.userPosition.lat, "lng": this.userPosition.lng };
            let positions = [0, 90, 180, 270].map((degree) => {
                return _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["Spherical"].computeOffset(center, this.distanceSize, degree);
            });
            let resizeIcon = {
                url: 'assets/google/marker/resizableMarker.png',
                size: {
                    width: 40,
                    height: 40
                }
            };
            this.resizableMarker = this.map.addMarkerSync({
                icon: resizeIcon,
                position: positions[0],
                draggable: true,
                title: ' Drag here'
            });
            this.resizableMarker.trigger(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["GoogleMapsEvent"].MARKER_CLICK);
            this.resizableMarker.setIconAnchor(20, 20);
            this.resizableMarker.on('position_changed').subscribe((params) => {
                this._ngZone.run(() => {
                    let newValue = params[1];
                    this.distanceSize = Math.round(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["Spherical"].computeDistanceBetween(center, newValue));
                    this.circle.setRadius(this.distanceSize);
                });
            });
        }
        else {
            this.resizableMarker.remove();
            this.resizableMarker = null;
            let moveIcon = {
                url: 'assets/google/marker/movableMarker.png',
                size: {
                    width: 40,
                    height: 40
                }
            };
            this.movableMarker = this.map.addMarkerSync({
                icon: moveIcon,
                position: this.circle.getCenter(),
                draggable: true
            });
            this.movableMarker.setIconAnchor(20, 20);
            this.movableMarker.bindTo("position", this.circle, "center");
            this.movableMarker.on('position_changed').subscribe((params) => {
                let newValue = params[1];
                let positions = [0, 90, 180, 270].map((degree) => {
                    return _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_5__["Spherical"].computeOffset(newValue, this.distanceSize, degree);
                });
                this.resizableMarker.setPosition(positions[0]);
            });
        }
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
};
GeofencePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
GeofencePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geofence',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./geofence.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geofence/geofence.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./geofence.page.scss */ "./src/app/pages/geofence/geofence.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], GeofencePage);



/***/ })

}]);
//# sourceMappingURL=pages-geofence-geofence-module-es2015.js.map