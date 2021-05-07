(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-street-view-street-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/street-view/street-view.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/street-view/street-view.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>StreetView</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"pano_canvas\"></div>\n  <div id=\"map_canvas\"></div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/street-view/street-view-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/street-view/street-view-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: StreetViewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPageRoutingModule", function() { return StreetViewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _street_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./street-view.page */ "./src/app/pages/street-view/street-view.page.ts");




const routes = [
    {
        path: '',
        component: _street_view_page__WEBPACK_IMPORTED_MODULE_3__["StreetViewPage"]
    }
];
let StreetViewPageRoutingModule = class StreetViewPageRoutingModule {
};
StreetViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], StreetViewPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/street-view/street-view.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/street-view/street-view.module.ts ***!
  \*********************************************************/
/*! exports provided: StreetViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPageModule", function() { return StreetViewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _street_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./street-view-routing.module */ "./src/app/pages/street-view/street-view-routing.module.ts");
/* harmony import */ var _street_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./street-view.page */ "./src/app/pages/street-view/street-view.page.ts");







let StreetViewPageModule = class StreetViewPageModule {
};
StreetViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _street_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["StreetViewPageRoutingModule"]
        ],
        declarations: [_street_view_page__WEBPACK_IMPORTED_MODULE_6__["StreetViewPage"]]
    })
], StreetViewPageModule);



/***/ }),

/***/ "./src/app/pages/street-view/street-view.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/street-view/street-view.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#pano_canvas {\n  top: 0;\n  left: 0;\n  height: 50%;\n  width: 100%;\n  position: absolute !important;\n}\n\n#map_canvas {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  position: absolute !important;\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL3N0cmVldC12aWV3L3N0cmVldC12aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RyZWV0LXZpZXcvc3RyZWV0LXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdHJlZXQtdmlldy9zdHJlZXQtdmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFub19jYW52YXMge1xuICAgIHRvcDowO1xuICAgIGxlZnQ6MDtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbn1cblxuI21hcF9jYW52YXMge1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHotaW5kZXg6IDI7XG59IiwiI3Bhbm9fY2FudmFzIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgei1pbmRleDogMjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/street-view/street-view.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/street-view/street-view.page.ts ***!
  \*******************************************************/
/*! exports provided: StreetViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreetViewPage", function() { return StreetViewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");




let StreetViewPage = class StreetViewPage {
    constructor(platform) {
        this.platform = platform;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Since ngOnInit() is executed before `deviceready` event,
            // you have to wait the event.
            yield this.platform.ready();
            yield this.loadMap();
        });
    }
    loadMap() {
        let initialPos = { lat: 42.345573, lng: -71.098326 };
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create('map_canvas', {
            camera: {
                target: initialPos,
                zoom: 17
            }
        });
        // Create a map after the view is loaded.
        this.panorama = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].createPanorama('pano_canvas', {
            camera: {
                target: initialPos
            }
        });
        this.marker = this.map.addMarkerSync({
            flat: true,
            position: initialPos
        });
        // Move the marker position when the panorama camera has been moved.
        // (this.marker.position = this.panorama.position)
        this.panorama.bindTo('position', this.marker);
        // Move the map camera when the panorama camera has been moved.
        this.panorama.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].PANORAMA_LOCATION_CHANGE).subscribe((params) => {
            // let location: StreetViewLocation = params[0];
            // this.map.animateCamera({
            //   target: location.latLng,
            //   duration: 1000
            // });
        });
        // Change the marker bearing when the panorama camera is panning.
        this.panorama.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].PANORAMA_CAMERA_CHANGE).subscribe((params) => {
            let camera = params[0];
            this.marker.setRotation(camera.bearing - 180);
        });
    }
};
StreetViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
StreetViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-street-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./street-view.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/street-view/street-view.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./street-view.page.scss */ "./src/app/pages/street-view/street-view.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], StreetViewPage);



/***/ })

}]);
//# sourceMappingURL=pages-street-view-street-view-module-es2015.js.map