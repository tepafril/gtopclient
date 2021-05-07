function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-geolocation-geolocation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation/geolocation.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation/geolocation.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGeolocationGeolocationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'APP.geolocation' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n  \n\n\n<ion-content>\n  <div id=\"map_canvas\" >\n\n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">\n      <ion-fab-button color=\"success\" size=\"small\" class=\"marginBottom5\" (click)=\"controlNavigateUser()\">\n        <ion-icon name=\"navigate-circle-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"primary\" size=\"small\" class=\"marginBottom5\" (click)=\"controlNavigateDevice()\">\n        <ion-icon name=\"locate-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"warning\" size=\"small\" class=\"marginBottom5\" (click)=\"controlGoogleDirection()\">\n        <ion-icon name=\"map-outline\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"tertiary\" size=\"small\" class=\"marginBottom5\" (click)=\"controlFollowCamera()\" *ngIf=\"!followCamera\">\n        <ion-icon name=\"eye-off-outline\"></ion-icon>\n      </ion-fab-button>\n\n      <ion-fab-button color=\"tertiary\" size=\"small\" class=\"marginBottom5\" (click)=\"controlFollowCamera()\" *ngIf=\"followCamera\">\n        <ion-icon name=\"eye-outline\"></ion-icon>\n      </ion-fab-button>\n      \n    </ion-fab>\n\n\n    <ion-fab vertical=\"center\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"medium\" size=\"small\" class=\"marginBottom5\" (click)=\"controlToggleInfoBox()\">\n        <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"medium\" size=\"small\" class=\"marginBottom5\" (click)=\"controlSatelliteLayer()\">\n        <ion-icon name=\"layers-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"medium\" size=\"small\" class=\"marginBottom5\" (click)=\"controlTrafficLayer()\">\n        <ion-icon name=\"trail-sign-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" style=\"margin-bottom:50px\">\n      <ion-fab-button color=\"\" size=\"small\" class=\"marginBottom5\" (click)=\"controlZoomIn()\">\n        <ion-icon name=\"add-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-button color=\"\" size=\"small\" class=\"marginBottom5\" (click)=\"controlZoomOut()\">\n        <ion-icon name=\"remove-outline\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n    \n  </div>\n  <div id=\"over_map\">\n    <ion-button size=\"small\" shape=\"round\" color=\"primary\" (click)=\"selectDevice()\">\n      {{ devicePlateNumber }}\n      <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/geolocation/geolocation-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/geolocation/geolocation-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: GeolocationPageRoutingModule */

  /***/
  function srcAppPagesGeolocationGeolocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPageRoutingModule", function () {
      return GeolocationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _geolocation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./geolocation.page */
    "./src/app/pages/geolocation/geolocation.page.ts");

    var routes = [{
      path: '',
      component: _geolocation_page__WEBPACK_IMPORTED_MODULE_3__["GeolocationPage"]
    }];

    var GeolocationPageRoutingModule = function GeolocationPageRoutingModule() {
      _classCallCheck(this, GeolocationPageRoutingModule);
    };

    GeolocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GeolocationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/geolocation/geolocation.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/geolocation/geolocation.module.ts ***!
    \*********************************************************/

  /*! exports provided: GeolocationPageModule */

  /***/
  function srcAppPagesGeolocationGeolocationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPageModule", function () {
      return GeolocationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./geolocation-routing.module */
    "./src/app/pages/geolocation/geolocation-routing.module.ts");
    /* harmony import */


    var _geolocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./geolocation.page */
    "./src/app/pages/geolocation/geolocation.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var GeolocationPageModule = function GeolocationPageModule() {
      _classCallCheck(this, GeolocationPageModule);
    };

    GeolocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeolocationPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]]
    })], GeolocationPageModule);
    /***/
  },

  /***/
  "./src/app/pages/geolocation/geolocation.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/geolocation/geolocation.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGeolocationGeolocationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --overflow: hidden;\n}\n\n.battery:after {\n  background-color: #fff;\n  border: 2px solid #000;\n  content: \"\";\n  display: block;\n  height: 16px;\n  position: absolute;\n  right: -6px;\n  top: 6px;\n  width: 6px;\n}\n\n.battery {\n  background-color: #fff;\n  border: 2px solid #000;\n  height: 32px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  width: 100px;\n}\n\n.battery .battery-level {\n  background-color: #666;\n  height: 100%;\n}\n\n#map_canvas {\n  width: 100%;\n  height: 100%;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n#over_map {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  text-align: center;\n}\n\n.camera-disabled {\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2dlb2xvY2F0aW9uL2dlb2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2VvbG9jYXRpb24vZ2VvbG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0VKOztBREFBO0VBQ0ksc0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDS0o7O0FESEE7RUFDSSxrQkFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlb2xvY2F0aW9uL2dlb2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG4uYmF0dGVyeTphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogLTZweDtcbiAgICB0b3A6IDZweDtcbiAgICB3aWR0aDogNnB4O1xufVxuLmJhdHRlcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwcHg7XG59XG4uYmF0dGVyeSAuYmF0dGVyeS1sZXZlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4jbWFwX2NhbnZhcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmhpZGRlbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4jb3Zlcl9tYXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDowO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYW1lcmEtZGlzYWJsZWR7XG4gICAgb3BhY2l0eTogMC42O1xufVxuLy8gLm1hcmdpbkJvdHRvbTV7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuLy8gfVxuLy8gLnpvb21Db250cm9sczkwe1xuLy8gICAgIC0tcGFkZGluZy1ib3R0b206IDkwcHg7XG4vLyB9IiwiaW9uLWNvbnRlbnQge1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5iYXR0ZXJ5OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTZweDtcbiAgdG9wOiA2cHg7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5iYXR0ZXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmJhdHRlcnkgLmJhdHRlcnktbGV2ZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbiNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuI292ZXJfbWFwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiA5OTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2FtZXJhLWRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/geolocation/geolocation.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/geolocation/geolocation.page.ts ***!
    \*******************************************************/

  /*! exports provided: GeolocationPage */

  /***/
  function srcAppPagesGeolocationGeolocationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPage", function () {
      return GeolocationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/launch-navigator/ngx */
    "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../select-device/select-device.page */
    "./src/app/pages/select-device/select-device.page.ts");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");

    var GeolocationPage =
    /*#__PURE__*/
    function () {
      function GeolocationPage(launchNavigator, http, authService, storageService, navCtrl, loadingController, lang, platform, geolocation, modalController) {
        _classCallCheck(this, GeolocationPage);

        this.launchNavigator = launchNavigator;
        this.http = http;
        this.authService = authService;
        this.storageService = storageService;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.lang = lang;
        this.platform = platform;
        this.geolocation = geolocation;
        this.modalController = modalController;
        this.markers = [];
        this.user = null;
        this.statusColor = {
          "deviceOnline": "#00a850",
          "deviceOffline": "#db3d2c",
          "deviceMoving": "#1877f2",
          "deviceStopped": "#db3d2c",
          "deviceUnknown": "#111111",
          "deviceOverspeed": "#db3d2c",
          "ignitionOn": "#00a850",
          "ignitionOff": "#db3d2c"
        };
        this.statusText = {
          "deviceOnline": "online",
          "deviceOffline": "offline",
          "deviceMoving": "moving",
          "deviceStopped": "stopped",
          "deviceUnknown": "unknown",
          "deviceOverspeed": "overspeed",
          "ignitionOn": "engine_on",
          "ignitionOff": "engine_off"
        };
        this.ignitionStatus = {
          "true": "on",
          "false": "off",
          "on": "on",
          "off": "off"
        };
        this.userPosition = {
          "lat": 0,
          "lng": 0
        };
        this.devicePosition = {
          "lat": 0,
          "lng": 0
        };
        this.watchDevicePositionInc = 0;
        this.watchUserPositionInc = 0;
        this.devicePath = null;
        this.infoBox = null;
        this.isMapHidden = true;
        this.toggleTraffic = false;
        this.toggleSatellite = false;
        this.followCamera = false;
        this.spriteNameArr = ["0", "15", "30", "45", "60", "75", "90", "105", "120", "135", "150", "165", "180", "195", "210", "225", "240", "255", "270", "285", "300", "315", "330", "345", "360"];
        this.toggleInfoBox = true;
      }

      _createClass(GeolocationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.platform.ready();

                  case 2:
                    _context.next = 4;
                    return this.loadMap();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          var _this = this;

          // Present Preloading
          this.presentLoading();
          this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMaps"].create('map_canvas', {
            camera: {
              target: {
                lat: 11.5560777,
                lng: 104.8941368
              },
              zoom: 7,
              tilt: 30
            },
            preferences: {
              zoom: {
                minZoom: 6,
                maxZoom: 18
              },
              building: true
            }
          });
          this.map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMapsEvent"].MAP_READY).then(function () {
            // Get Current Item from Storage
            _this.storageService.setItem().subscribe(function (res) {
              _this.current_item = _this.storageService.current_item;
              _this.deviceIcon = _this.current_item.icon_name;
              _this.deviceIconSize = _this.current_item.icon_size;
              _this.devicePlateNumber = _this.current_item.plate;
            }, function (err) {
              console.log(err);
            }, function () {
              // Start Http Request
              _this.locateDevice(); // Set Interval every 7.5 Second to get http request


              var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(7500);
              _this.subscription = source.subscribe(function (val) {
                _this.locateDevice();
              });
            });
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.navigateBack('dashboard/tabs/home');
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "locateDevice",
        value: function locateDevice() {
          var _this2 = this;

          this.preparingRequest(this.current_item.deviceid).subscribe(function (res) {
            _this2.httpResponse = res;
          }, function (err) {
            _this2.loading.dismiss();
          }, function () {
            // Start Locating User
            _this2.locateUser();

            _this2.devicePosition.lat = _this2.httpResponse.position.latitude;
            _this2.devicePosition.lng = _this2.httpResponse.position.longitude;

            _this2.drawDeviceMarker();

            _this2.drawDevicePath();

            _this2.drawInfoBox();

            _this2.watchDevicePositionInc++;

            _this2.loading.dismiss();
          });
        }
      }, {
        key: "locateUser",
        value: function locateUser() {
          var _this3 = this;

          this.geolocation.getCurrentPosition().then(function (position) {
            console.log(position);

            if (position) {
              _this3.userPosition.lat = position.coords.latitude;
              _this3.userPosition.lng = position.coords.longitude;

              _this3.drawUserMarker();

              _this3.drawDevicePath();

              _this3.watchUserPositionInc++;
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "drawDevicePath",
        value: function drawDevicePath() {
          var flightPlanCoordinates = [{
            lat: this.userPosition.lat,
            lng: this.userPosition.lng
          }, {
            lat: this.devicePosition.lat,
            lng: this.devicePosition.lng
          }];

          if (this.userPosition.lat == 0 || this.userPosition.lng == 0 || this.devicePosition.lat == 0 || this.devicePosition.lng == 0) {
            return;
          }

          if (this.devicePath == null) {
            this.devicePath = this.map.addPolylineSync({
              points: flightPlanCoordinates,
              color: '#FF0000',
              width: 2,
              geodesic: true
            });
            return;
          }

          this.devicePath.setPoints(flightPlanCoordinates);
        }
      }, {
        key: "drawDeviceMarker",
        value: function drawDeviceMarker() {
          var randomSprite = Math.floor(Math.random() * 24);
          var icon = {
            url: 'assets/google/marker/' + this.deviceIcon + '/0.png',
            size: {
              width: this.deviceIconSize,
              height: this.deviceIconSize
            }
          };

          if (this.watchDevicePositionInc > 0) {
            this.deviceMarker.setPosition(new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__["LatLng"](this.devicePosition.lat, this.devicePosition.lng));
          } else {
            this.deviceMarker = this.map.addMarkerSync({
              icon: icon,
              position: {
                lat: this.devicePosition.lat,
                lng: this.devicePosition.lng
              },
              anchor: [this.deviceIconSize / 2, this.deviceIconSize / 2]
            });
            this.map.setOptions({
              camera: {
                target: [{
                  lat: this.devicePosition.lat,
                  lng: this.devicePosition.lng
                }]
              }
            });
          }

          this.deviceMarker.setIconAnchor(this.deviceIconSize / 2, this.deviceIconSize / 2);

          if (this.followCamera) {
            this.map.setOptions({
              camera: {
                target: [{
                  lat: this.devicePosition.lat,
                  lng: this.devicePosition.lng
                }]
              }
            });
          }

          this.deviceMarker.setIcon(icon);
        }
      }, {
        key: "drawUserMarker",
        value: function drawUserMarker() {
          if (this.watchUserPositionInc > 0) {
            this.userMarker.setPosition(new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__["LatLng"](this.userPosition.lat, this.userPosition.lng));
            return;
          }

          this.drawInfoBox();
          var icon = {
            url: "./assets/google/marker/current-location.png",
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
          this.userMarker.setIcon(icon); // this.map.setOptions({
          //   camera: {
          //     target: {
          //       lat: this.userPosition.lat,
          //       lng: this.userPosition.lng
          //     },
          //     zoom: 18
          //   }
          // });
        }
      }, {
        key: "drawInfoBox",
        value: function drawInfoBox() {
          var traccar_attributes = JSON.parse(this.httpResponse.position.attributes);
          var traccar_event = this.httpResponse.event;
          var traccar_status = traccar_event.type;
          var traccar_status_color = this.statusColor[traccar_event.type];
          var traccar_speed = Math.abs(this.httpResponse.position.speed * 1.852).toFixed(2) + this.lang.instant('APP.kmh') + '&nbsp;';
          var traccar_battery = Math.abs(traccar_attributes["batteryLevel"]);
          var traccar_ignition = this.lang.instant('APP.' + this.ignitionStatus[traccar_attributes["ignition"]]);
          var traccar_trip = (traccar_attributes["totalDistance"] / 1000).toFixed(0) + this.lang.instant('APP.km');
          var traccar_hours = (traccar_attributes["hours"] / 3.6e+6).toFixed(2) + this.lang.instant('APP.h');
          var traccar_date = this.readableLocalDate(this.httpResponse.position.fixtime) + ' ' + this.readableLocalTime(this.httpResponse.position.fixtime);
          var battery_spite = this.checkMyBatterySprite(traccar_battery);
          this.distance = this.calculateDistance([this.userPosition.lat, this.userPosition.lng], [this.devicePosition.lat, this.devicePosition.lng], false).toFixed(2) + this.lang.instant('APP.km');
          var frame = document.createElement('div');
          var cssOptions = {
            width: "320px",
            opacity: "0.9",
            padding: "7px"
          };
          frame.innerHTML = "\n      <div style=\"font-size:1em;\">\n        <div style=\"float:left;padding:7px 0px 5px 7px;\">" + traccar_date + "</div>\n        <div style=\"float:right;padding:4px 7px 5px 0px;\">\n          <div style=\"background-color:" + traccar_status_color + ";color:#fff;padding:2px 5px; border-radius: 5px;\">" + this.lang.instant('APP.' + traccar_status) + "</div>\n        </div>\n        <div style=\"border-bottom:1px solid rgba(119,119,119,0.75);clear:both;\"></div>\n\n\n        <div style=\"width:49%;float:left;padding: 7px 0px 0px 7px;\">\n\n          <div>\n            <div style=\"width:auto;float:left\">\n              <div style=\"padding:1px 0px;color:#1877f2;\">" + this.lang.instant('APP.battery') + "</div>\n            </div>\n            <div style=\"width:auto;float:right\">\n              <div style=\"padding:1px 0px;color:#fff;\">\n                <div style=\"width:48px;font-size:0.75em;background:url(assets/google/battery/" + battery_spite + ") no-repeat;text-align:center;color:#111;\">" + traccar_battery + "%</div>\n              </div>\n            </div>\n            <div style=\"clear:both;\"></div>\n          </div>\n\n          <div>\n            <div style=\"width:auto;float:left\">\n              <div style=\"padding:1px 0px;color:#1877f2;\">" + this.lang.instant('APP.ignition') + " </div>\n            </div>\n            <div style=\"width:auto;float:right\">\n              <div style=\"padding:1px 0px;color:#333;\">" + traccar_ignition + "</div>\n            </div>\n            <div style=\"clear:both;\"></div>\n          </div>\n\n          <div>\n            <div style=\"width:auto;float:left\">\n              <div style=\"padding:1px 0px;color:#1877f2;\">" + this.lang.instant('APP.speed') + "</div>\n            </div>\n            <div style=\"width:auto;float:right\">\n              <div style=\"padding:1px 0px;color:#333;\">" + traccar_speed + "</div>\n            </div>\n            <div style=\"clear:both;\"></div>\n          </div>\n          \n        </div>\n        \n\n        <div style=\"float:left;width:2%;\">&nbsp;</div>\n\n\n        <div style=\"width:49%;float:left;padding:7px 7px 0px 0px;\">\n\n          <div>\n            <div style=\"width:auto;float:left\">\n              <div style=\"padding:1px 0px;color:#1877f2;\">" + this.lang.instant('APP.distance') + "</div>\n            </div>\n            <div style=\"width:auto;float:right\">\n              <div style=\"padding:1px 0px;color:#333;\">" + this.distance + "</div>\n            </div>\n            <div style=\"clear:both;\"></div>\n          </div>\n\n          <div>\n            <div style=\"width:auto;float:left\">\n              <div style=\"padding:1px 0px;color:#1877f2;\">" + this.lang.instant('APP.hours') + "</div>\n            </div>\n            <div style=\"width:auto;float:right\">\n              <div style=\"padding:1px 0px;color:#333;\">" + traccar_hours + "</div>\n            </div>\n            <div style=\"clear:both;\"></div>\n          </div>\n\n          <div>\n            <div style=\"width:auto;float:left\">\n              <div style=\"padding:1px 0px;color:#1877f2;\">" + this.lang.instant('APP.trip') + "</div>\n            </div>\n            <div style=\"width:auto;float:right\">\n              <div style=\"padding:1px 0px;color:#333;\">" + traccar_trip + "</div>\n            </div>\n            <div style=\"clear:both;\"></div>\n          </div>\n\n        </div>\n      </div>\n    ";

          if (this.watchDevicePositionInc > 0) {
            this.infoBox.setContent(frame, cssOptions);
            return;
          }

          this.loading.dismiss();
          this.infoBox = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__["HtmlInfoWindow"]();
          this.infoBox.setContent(frame, cssOptions);
          this.infoBox.open(this.deviceMarker); // Prevent closing when Clicking on map
          // this.infoBox.on(GoogleMapsEvent.INFO_CLOSE).subscribe(()=>{
          //   setTimeout(()=>{
          //     this.infoBox.open(this.deviceMarker);
          //   }, 50);
          // });
        }
      }, {
        key: "instantiateGoogleMap",
        value: function instantiateGoogleMap() {
          if (this.watchDevicePositionInc > 0) {
            return;
          }

          var mapOptions = {
            camera: {
              target: {
                lat: this.userPosition.lat,
                lng: this.userPosition.lng
              },
              zoom: 14
            }
          };
          this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMaps"].create('map_canvas', mapOptions);
        }
      }, {
        key: "controlZoomIn",
        value: function controlZoomIn() {
          this.map.animateCameraZoomIn().then(function () {});
        }
      }, {
        key: "controlZoomOut",
        value: function controlZoomOut() {
          this.map.animateCameraZoomOut().then(function () {});
        }
      }, {
        key: "controlGoogleDirection",
        value: function controlGoogleDirection() {
          var options = {
            start: [this.userPosition.lat, this.userPosition.lng],
            app: this.launchNavigator.APP.GOOGLE_MAPS
          };
          this.launchNavigator.navigate([this.devicePosition.lat, this.devicePosition.lng], options).then(function (success) {
            console.log(success);
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "controlFollowCamera",
        value: function controlFollowCamera() {
          this.followCamera = !this.followCamera;

          if (this.followCamera) {
            this.map.setOptions({
              camera: {
                target: [{
                  lat: this.devicePosition.lat,
                  lng: this.devicePosition.lng
                }]
              }
            });
          }
        }
      }, {
        key: "controlToggleInfoBox",
        value: function controlToggleInfoBox() {
          this.toggleInfoBox = !this.toggleInfoBox;
          if (this.toggleInfoBox) this.infoBox.open(this.deviceMarker);else this.infoBox.close();
        }
      }, {
        key: "controlNavigateDevice",
        value: function controlNavigateDevice() {
          this.map.animateCamera({
            target: {
              lat: this.devicePosition.lat,
              lng: this.devicePosition.lng
            },
            duration: 750
          });
        }
      }, {
        key: "controlNavigateUser",
        value: function controlNavigateUser() {
          this.map.animateCamera({
            target: {
              lat: this.userPosition.lat,
              lng: this.userPosition.lng
            },
            duration: 750
          });
        }
      }, {
        key: "controlTrafficLayer",
        value: function controlTrafficLayer() {
          this.toggleTraffic = !this.toggleTraffic;
          this.map.setTrafficEnabled(this.toggleTraffic);
        }
      }, {
        key: "controlSatelliteLayer",
        value: function controlSatelliteLayer() {
          this.toggleSatellite = !this.toggleSatellite;

          if (this.toggleSatellite == false) {
            this.map.setMapTypeId(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMapsMapTypeId"]["ROADMAP"]);
          } else {
            this.map.setMapTypeId(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_13__["GoogleMapsMapTypeId"]["HYBRID"]);
          }
        }
      }, {
        key: "checkMyBatterySprite",
        value: function checkMyBatterySprite(traccar_battery) {
          var battery_spite = '50.png';
          if (traccar_battery > 90) battery_spite = '100.png';else if (traccar_battery > 80) battery_spite = '90.png';else if (traccar_battery > 70) battery_spite = '80.png';else if (traccar_battery > 60) battery_spite = '70.png';else if (traccar_battery > 50) battery_spite = '60.png';else if (traccar_battery > 40) battery_spite = '50.png';else if (traccar_battery > 30) battery_spite = '40.png';else if (traccar_battery > 20) battery_spite = '30.png';else if (traccar_battery > 10) battery_spite = '20.png';else if (traccar_battery > 1) battery_spite = '10.png';else battery_spite = '0.png';
          return battery_spite;
        }
      }, {
        key: "preparingRequest",
        value: function preparingRequest(deviceid) {
          this.authService.getToken();
          var token = this.authService.token;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["ENDPOINT"].API_URL + 'traccar/devices/' + deviceid, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait',
                      duration: 60000
                    });

                  case 2:
                    this.loading = _context2.sent;
                    _context2.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "calculateDistance",
        value: function calculateDistance(latlngA, latlngB, isMiles) {
          var squared = function squared(x) {
            return x * x;
          };

          var toRad = function toRad(x) {
            return x * Math.PI / 180;
          };

          var R = 6371; // Earth’s mean radius in km

          var dLat = toRad(latlngB[0] - latlngA[0]);
          var dLon = toRad(latlngB[1] - latlngA[1]);
          var dLatSin = squared(Math.sin(dLat / 2));
          var dLonSin = squared(Math.sin(dLon / 2));
          var a = dLatSin + Math.cos(toRad(latlngA[0])) * Math.cos(toRad(latlngB[0])) * dLonSin;
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var distance = R * c;
          if (isMiles) distance /= 1.609344;
          return distance;
        }
      }, {
        key: "readableLocalDate",
        value: function readableLocalDate(the_date) {
          var d;

          if (this.platform.is('ios')) {
            d = new Date(the_date.replace(' ', 'T'));
          } else {
            d = new Date(the_date + ' UTC');
          }

          var dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
          var monthNames = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
          var s = ' ' + this.lang.instant('APP.day');
          s = '';

          if (d.getDate() < 10) {
            s += '0' + d.getDate().toString();
          } else {
            s += d.getDate().toString();
          }

          s += '/' + this.lang.instant('APP.' + monthNames[d.getMonth()]);
          s += '/' + d.getFullYear();
          return s;
        }
      }, {
        key: "readableLocalTime",
        value: function readableLocalTime(the_date) {
          var d;

          if (this.platform.is('ios')) {
            d = new Date(the_date.replace(' ', 'T'));
          } else {
            d = new Date(the_date + ' UTC');
          }

          var s = '[';

          if (d.getHours() < 10) {
            s += '' + '0' + d.getHours().toString();
          } else {
            s += d.getHours().toString();
          }

          if (d.getMinutes() < 10) {
            s += ':0' + d.getMinutes().toString();
          } else {
            s += ':' + d.getMinutes().toString();
          }

          return s + ']';
        }
      }, {
        key: "selectDevice",
        value: function selectDevice() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this4 = this;

            var assignItemModal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.modalController.create({
                      component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_12__["SelectDevicePage"],
                      componentProps: {
                        // groupItems: this.groupItems,
                        // groupID: this.groupID
                        moduleName: "module_geolocation"
                      }
                    });

                  case 2:
                    assignItemModal = _context3.sent;
                    assignItemModal.onDidDismiss().then(function (res) {
                      _this4.selectedItems = res.data; // Present Preloading

                      _this4.presentLoading(); // Get Current Item from Storage


                      _this4.storageService.setItem().subscribe(function (res) {
                        _this4.current_item = _this4.selectedItems;
                        _this4.deviceIcon = _this4.current_item.icon_name;
                        _this4.deviceIconSize = _this4.current_item.icon_size;
                        _this4.devicePlateNumber = _this4.current_item.plate;
                      }, function (err) {
                        console.log(err);
                      }, function () {
                        // Start Http Request
                        _this4.locateDevice();
                      });
                    }).catch(function (err) {
                      console.log(err);
                    });
                    _context3.next = 6;
                    return assignItemModal.present();

                  case 6:
                    return _context3.abrupt("return", _context3.sent);

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return GeolocationPage;
    }();

    GeolocationPage.ctorParameters = function () {
      return [{
        type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_10__["LaunchNavigator"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], GeolocationPage.prototype, "mapElement", void 0);
    GeolocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-geolocation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./geolocation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation/geolocation.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./geolocation.page.scss */
      "./src/app/pages/geolocation/geolocation.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_10__["LaunchNavigator"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], GeolocationPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-geolocation-geolocation-module-es5.js.map