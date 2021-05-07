function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-geolocation-web-geolocation-web-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation-web/geolocation-web.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation-web/geolocation-web.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGeolocationWebGeolocationWebPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'APP.geolocation' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n  \n\n\n<ion-content>\n  <div #map id=\"map\"></div>\n  <div id=\"over_map\">\n    <ion-button size=\"small\" shape=\"round\" color=\"primary\" (click)=\"prevDevice()\" disabled={{disable_next_prev}}>\n      <ion-icon src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n    </ion-button>\n    <ion-button size=\"small\" shape=\"round\" color=\"primary\" (click)=\"selectDevice()\">\n      {{ devicePlateNumber }}\n      <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n    </ion-button>\n    <ion-button size=\"small\" shape=\"round\" color=\"primary\" (click)=\"nextDevice()\" disabled={{disable_next_prev}}>\n      <ion-icon src=\"assets/themify-icons/SVG/arrow-right.svg\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/geolocation-web/geolocation-web-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/geolocation-web/geolocation-web-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: GeolocationWebPageRoutingModule */

  /***/
  function srcAppPagesGeolocationWebGeolocationWebRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationWebPageRoutingModule", function () {
      return GeolocationWebPageRoutingModule;
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


    var _geolocation_web_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./geolocation-web.page */
    "./src/app/pages/geolocation-web/geolocation-web.page.ts");

    var routes = [{
      path: '',
      component: _geolocation_web_page__WEBPACK_IMPORTED_MODULE_3__["GeolocationWebPage"]
    }];

    var GeolocationWebPageRoutingModule = function GeolocationWebPageRoutingModule() {
      _classCallCheck(this, GeolocationWebPageRoutingModule);
    };

    GeolocationWebPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GeolocationWebPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/geolocation-web/geolocation-web.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/geolocation-web/geolocation-web.module.ts ***!
    \*****************************************************************/

  /*! exports provided: GeolocationWebPageModule */

  /***/
  function srcAppPagesGeolocationWebGeolocationWebModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationWebPageModule", function () {
      return GeolocationWebPageModule;
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


    var _geolocation_web_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./geolocation-web-routing.module */
    "./src/app/pages/geolocation-web/geolocation-web-routing.module.ts");
    /* harmony import */


    var _geolocation_web_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./geolocation-web.page */
    "./src/app/pages/geolocation-web/geolocation-web.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var GeolocationWebPageModule = function GeolocationWebPageModule() {
      _classCallCheck(this, GeolocationWebPageModule);
    };

    GeolocationWebPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _geolocation_web_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeolocationWebPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_geolocation_web_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationWebPage"]],
      entryComponents: []
    })], GeolocationWebPageModule);
    /***/
  },

  /***/
  "./src/app/pages/geolocation-web/geolocation-web.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/geolocation-web/geolocation-web.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGeolocationWebGeolocationWebPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#over_map {\n  position: absolute;\n  top: 10px;\n  left: 0;\n  right: 0;\n  z-index: 99;\n  text-align: center;\n}\n\n.battery:after {\n  background-color: #fff;\n  border: 2px solid #000;\n  content: \"\";\n  display: block;\n  height: 16px;\n  position: absolute;\n  right: -6px;\n  top: 6px;\n  width: 6px;\n}\n\n.battery {\n  background-color: #fff;\n  border: 2px solid #000;\n  height: 32px;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  width: 100px;\n}\n\n.battery .battery-level {\n  background-color: #666;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2dlb2xvY2F0aW9uLXdlYi9nZW9sb2NhdGlvbi13ZWIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9nZW9sb2NhdGlvbi13ZWIvZ2VvbG9jYXRpb24td2ViLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNFSjs7QURBQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZW9sb2NhdGlvbi13ZWIvZ2VvbG9jYXRpb24td2ViLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNvdmVyX21hcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OjA7XG4gICAgei1pbmRleDogOTk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJhdHRlcnk6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC02cHg7XG4gICAgdG9wOiA2cHg7XG4gICAgd2lkdGg6IDZweDtcbn1cbi5iYXR0ZXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuLmJhdHRlcnkgLmJhdHRlcnktbGV2ZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gICAgaGVpZ2h0OiAxMDAlO1xufSIsIiNvdmVyX21hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhdHRlcnk6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNnB4O1xuICB0b3A6IDZweDtcbiAgd2lkdGg6IDZweDtcbn1cblxuLmJhdHRlcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uYmF0dGVyeSAuYmF0dGVyeS1sZXZlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NjY7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/geolocation-web/geolocation-web.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/geolocation-web/geolocation-web.page.ts ***!
    \***************************************************************/

  /*! exports provided: GeolocationWebPage */

  /***/
  function srcAppPagesGeolocationWebGeolocationWebPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationWebPage", function () {
      return GeolocationWebPage;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/launch-navigator/ngx */
    "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
    /* harmony import */


    var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../select-device/select-device.page */
    "./src/app/pages/select-device/select-device.page.ts"); // import { Plugins, CallbackID } from '@capacitor/core';


    var GeolocationWebPage =
    /*#__PURE__*/
    function () {
      function GeolocationWebPage(launchNavigator, http, authService, storageService, navCtrl, loadingController, lang, platform, geolocation, modalController) {
        _classCallCheck(this, GeolocationWebPage);

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
        this.current_location_marker = 'assets/google/marker/current-location.png';
        this.user = null;
        this.isCordova = false;
        this.selectedItems = [];
        this.disable_next_prev = true;
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
        this.setMapCenter = 0;
        this.instantiateMap = 0;
        this.userPosition = {
          "lat": 0,
          "lng": 0
        };
        this.devicePosition = {
          "lat": 0,
          "lng": 0
        };
        this.watchDevicePositionInc = [];
        this.watchUserPositionInc = 0;
        this.deviceMarker = [];
        this.spriteNameArr = ["0", "15", "30", "45", "60", "75", "90", "105", "120", "135", "150", "165", "180", "195", "210", "225", "240", "255", "270", "285", "300", "315", "330", "345", "360"];
      }

      _createClass(GeolocationWebPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.platform.is('cordova')) {
            this.isCordova = true;
          }
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
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          // Present Preloading
          this.presentLoading(); // Get Current Item from Storage

          this.storageService.setItem().subscribe(function (res) {
            if (_this.current_item == null) {
              _this.current_item = _this.storageService.current_item;
              console.log("if( this.current_item == null)");
            }

            _this.deviceIcon = _this.current_item.icon_name;
            _this.deviceIconSize = _this.current_item.icon_size;
            _this.devicePlateNumber = _this.current_item.plate;
          }, function (err) {
            console.log(err);
          }, function () {
            // Start Http Request
            _this.locateDevice(); // Set Interval every 7.5 Second to get http request


            var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["interval"])(7500);
            _this.subscription = source.subscribe(function (val) {
              _this.locateDevice();
            });
          });
        }
      }, {
        key: "prevDevice",
        value: function prevDevice() {
          // Remove infobox, before changing current item 
          if (this.infoBox) {
            this.infoBox.close();
            this.infoBox = null;
          }

          console.log("Curren Item: " + this.current_item.device.id);
          var current_item_id = this.current_item.device.id;
          var devices = this.httpResponse;
          var device_index_array = [];

          for (var device in devices) {
            device_index_array.push(device);
          }

          for (var i = 0; i < device_index_array.length; i++) {
            if (device_index_array[i] == current_item_id) {
              if (i - 1 < 0) this.current_item = devices[device_index_array[device_index_array.length - 1]];else this.current_item = devices[device_index_array[i - 1]];
            }
          }

          this.devicePlateNumber = this.current_item.item.plate;
          this.devicePosition.lat = this.current_item.position.latitude;
          this.devicePosition.lng = this.current_item.position.longitude;
          this.drawDevicePath();
          this.drawInfoBox();
        }
      }, {
        key: "nextDevice",
        value: function nextDevice() {
          // Remove infobox, before changing current item 
          if (this.infoBox) {
            this.infoBox.close();
            this.infoBox = null;
          }

          console.log("Before Curren Item: " + this.current_item.device.id);
          var current_item_id = this.current_item.device.id;
          var devices = this.httpResponse;
          var device_index_array = [];

          for (var device in devices) {
            device_index_array.push(device);
          }

          for (var i = 0; i < device_index_array.length; i++) {
            if (device_index_array[i] == current_item_id) {
              if (i + 1 >= device_index_array.length) this.current_item = devices[device_index_array[0]];else this.current_item = devices[device_index_array[i + 1]];
            }
          }

          console.log("After Curren Item: " + this.current_item.device.id);
          this.devicePlateNumber = this.current_item.item.plate;
          this.devicePosition.lat = this.current_item.position.latitude;
          this.devicePosition.lng = this.current_item.position.longitude;
          this.drawDevicePath();
          this.drawInfoBox();
        }
      }, {
        key: "selectDevice",
        value: function selectDevice() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var assignItemModal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_12__["SelectDevicePage"],
                      componentProps: {
                        // groupItems: this.groupItems,
                        // groupID: this.groupID
                        moduleName: "module_geolocation"
                      }
                    });

                  case 2:
                    assignItemModal = _context.sent;
                    assignItemModal.onDidDismiss().then(function (res) {
                      _this2.selectedItems = res.data; // Present Preloading

                      _this2.presentLoading(); // Get Current Item from Storage


                      _this2.storageService.setItem().subscribe(function (res) {
                        _this2.current_item = _this2.selectedItems[0];
                      }, function (err) {
                        console.log(err);
                      }, function () {
                        // Remove all markers, before adding marker.
                        _this2.watchDevicePositionInc = [];

                        for (var marker in _this2.deviceMarker) {
                          _this2.deviceMarker[marker].setMap(null);
                        } // Remove infobox, before changing current item 


                        if (_this2.infoBox) {
                          _this2.infoBox.close();

                          _this2.infoBox = null;
                        } // Start Http Request


                        _this2.locateDevice();
                      });

                      _this2.setMapCenter = 0;
                    }).catch(function (err) {
                      console.log(err);
                    });
                    _context.next = 6;
                    return assignItemModal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "locateDevice",
        value: function locateDevice() {
          var _this3 = this;

          var selectedItemIds = [];

          for (var i = 0; i < this.selectedItems.length; i++) {
            if (this.selectedItems[i].deviceid) selectedItemIds.push(this.selectedItems[i].deviceid);else selectedItemIds.push(this.selectedItems[i].device.id);
          }

          if (selectedItemIds.length <= 0) {
            if (this.current_item.deviceid) {
              selectedItemIds.push(this.current_item.deviceid);
              console.log("this.current_item.deviceid");
            } else {
              selectedItemIds.push(this.current_item.device.id);
              console.log("this.current_item.device.id");
            }
          }

          this.preparingRequest(selectedItemIds).subscribe(function (res) {
            _this3.httpResponse = res;
          }, function (err) {
            _this3.loading.dismiss();
          }, function () {
            // Start Locating User
            _this3.locateUser();

            var devices = _this3.httpResponse;
            var devices_length = Object.keys(devices).length;

            if (devices_length > 1) {
              _this3.disable_next_prev = false;
            } else {
              _this3.disable_next_prev = true;
            }

            _this3.instantiateGoogleMap(); // Run only once using watchPositionInc


            var firstDevice = 0;
            var latlngbounds = new google.maps.LatLngBounds();
            var device_index_array = [];
            var current_item_id = 0;

            for (var device in devices) {
              device_index_array.push(device);

              if (devices[device].position) {
                if (Object.keys(_this3.watchDevicePositionInc).length < devices_length) {
                  _this3.watchDevicePositionInc[device] = 0;
                } else {
                  _this3.watchDevicePositionInc[device] = _this3.watchDevicePositionInc[device] + 1;
                }

                _this3.drawDeviceMarker(devices[device]); // if( firstDevice == 0 )
                // {
                //   this.devicePosition.lat = devices[device].position.latitude;
                //   this.devicePosition.lng = devices[device].position.longitude;
                // if(this.current_item.deviceid)
                //   this.current_item = devices[device];
                // }


                firstDevice++;
                _this3.instantiateMap++;

                if (_this3.setMapCenter == 0) {
                  var loc = new google.maps.LatLng(devices[device].position.latitude, devices[device].position.longitude);
                  latlngbounds.extend(loc);
                }
              }
            }

            if (_this3.current_item.deviceid) current_item_id = _this3.current_item.deviceid;else current_item_id = _this3.current_item.device.id;

            for (var i = 0; i < device_index_array.length; i++) {
              if (device_index_array[i] == current_item_id) {
                _this3.current_item = devices[device_index_array[i]];
                _this3.devicePosition.lat = devices[device_index_array[i]].position.latitude;
                _this3.devicePosition.lng = devices[device_index_array[i]].position.longitude;
              }
            }

            if (_this3.setMapCenter == 0) {
              _this3.map.fitBounds(latlngbounds);
            }

            _this3.setMapCenter++;

            _this3.drawDevicePath();

            _this3.drawInfoBox(); // this.loading.dismiss();

          });
        }
      }, {
        key: "locateUser",
        value: function locateUser() {
          var _this4 = this;

          if (this.watchDevicePositionInc.length > 0) {
            return;
          } // this.watchId = Geolocation.watchPosition({enableHighAccuracy:false}, (position, err) => {


          this.geolocation.getCurrentPosition().then(function (position) {
            if (position) {
              _this4.userPosition.lat = position.coords.latitude;
              _this4.userPosition.lng = position.coords.longitude;

              _this4.drawDevicePath();

              _this4.drawUserMarker();

              _this4.watchUserPositionInc++;
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "drawDevicePath",
        value: function drawDevicePath() {
          if (this.userPosition.lat == 0 || this.userPosition.lng == 0 || this.devicePosition.lat == 0 || this.devicePosition.lng == 0) {
            return;
          }

          if (this.devicePath) {
            this.devicePath.setMap(null);
          }

          var flightPlanCoordinates = [{
            lat: this.userPosition.lat,
            lng: this.userPosition.lng
          }, {
            lat: this.devicePosition.lat,
            lng: this.devicePosition.lng
          }];
          this.devicePath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
          });
          this.devicePath.setMap(this.map);
        }
      }, {
        key: "drawDeviceMarker",
        value: function drawDeviceMarker(device) {
          var latLng = new google.maps.LatLng(device.position.latitude, device.position.longitude);

          if (this.watchDevicePositionInc[device.device.id] == 0) {
            this.deviceMarker[device.device.id] = new google.maps.Marker({
              map: this.map,
              position: latLng
            });
          } else {
            this.deviceMarker[device.device.id].setPosition(latLng);
          }

          var randomSprite = Math.floor(Math.random() * 24);
          var iconImage = {
            url: 'assets/google/marker/' + device.item.icon_name + '/' + this.spriteNameArr[randomSprite] + '.png',
            anchor: new google.maps.Point(device.item.icon_size / 2, device.item.icon_size / 2)
          };
          this.deviceMarker[device.device.id].setIcon(iconImage);
        }
      }, {
        key: "drawUserMarker",
        value: function drawUserMarker() {
          var latLng = new google.maps.LatLng(this.userPosition.lat, this.userPosition.lng);

          if (this.watchUserPositionInc > 0) {
            this.userMarker.setPosition(latLng);
          } else {
            this.drawInfoBox();
            this.userMarker = new google.maps.Marker({
              map: this.map,
              position: latLng
            });
            var iconImage = {
              url: 'assets/google/marker/current-location.png',
              anchor: new google.maps.Point(12, 12)
            };
            this.userMarker.setIcon(iconImage);
          }
        }
      }, {
        key: "drawInfoBox",
        value: function drawInfoBox() {
          var _this5 = this;

          this.preparingRequestGetEvent(this.current_item.device.id).subscribe(function (res) {
            _this5.current_item.event = res;
          }, function (err) {
            _this5.loading.dismiss();
          }, function () {
            _this5.current_item.event = _this5.current_item.event.event;
            var traccar_attributes = JSON.parse(_this5.current_item.position.attributes);
            var traccar_event = _this5.current_item.event;
            var currentItem = _this5.current_item;
            var traccar_status = traccar_event.type;
            var traccar_status_color = _this5.statusColor[traccar_event.type]; // let traccar_status = 'Working';
            // let traccar_status_color = this.statusColor["deviceOnline"];

            var traccar_speed = Math.abs(currentItem.position.speed * 1.852).toFixed(2) + _this5.lang.instant('APP.kmh') + '&nbsp;';
            var traccar_battery = Math.abs(traccar_attributes["batteryLevel"]);

            var traccar_ignition = _this5.lang.instant('APP.' + _this5.ignitionStatus[traccar_attributes["ignition"]]);

            var traccar_trip = (traccar_attributes["totalDistance"] / 1000).toFixed(2) + _this5.lang.instant('APP.km');

            var traccar_hours = (traccar_attributes["hours"] / 3.6e+6).toFixed(2) + _this5.lang.instant('APP.h');

            var traccar_date = _this5.readableLocalDate(currentItem.position.fixtime) + ' ' + _this5.readableLocalTime(currentItem.position.fixtime);

            var battery_spite = _this5.checkMyBatterySprite(traccar_battery);

            _this5.distance = _this5.calculateDistance([_this5.userPosition.lat, _this5.userPosition.lng], [_this5.devicePosition.lat, _this5.devicePosition.lng], false).toFixed(2) + _this5.lang.instant('APP.km');
            var infoBoxContent = '<div style="font-size:1.25em;opacity:0.90;border:1px solid rgba(119,119,119,0.75);border-radius:15px;height:' + _this5.lang.instant('APP.GeolocationInfoBoxHeight') + ';background-color:#fff"><div style="float:left;padding:7px 0px 5px 7px;">' + traccar_date + '</div><div style="float:right;padding:4px 7px 5px 0px;"><div style="background-color:' + traccar_status_color + ';color:#fff;padding:2px 5px; border-radius: 5px;">' + _this5.lang.instant('APP.' + traccar_status) + '</div></div><div style="border-bottom:1px solid rgba(119,119,119,0.75);clear:both;"></div><div style="width:48%;float:left;padding: 7px 0px 0px 7px;"><div style="width:auto;float:left"><div style="padding:1px 0px;color:#1877f2;">' + _this5.lang.instant('APP.battery') + '</div><div style="padding:1px 0px;color:#1877f2;">' + _this5.lang.instant('APP.ignition') + ' </div><div style="padding:1px 0px;color:#1877f2;">' + _this5.lang.instant('APP.speed') + '</div></div><div style="float:right;width:auto;"> <div style="padding:1px 0px;color:#fff;"><div style="' + _this5.lang.instant('APP.GeolocationInfoBoxBatteryHeight') + 'width:48px;font-size:1em;background:url(assets/google/battery/' + battery_spite + ') no-repeat;text-align:center;color:#111;">' + traccar_battery + '%</div></div> <div style="padding:1px 0px;color:#333;">' + traccar_ignition + '</div> <div style="padding:1px 0px;color:#333;">' + traccar_speed + '</div> </div></div><div style="float:left;width:4%;">&nbsp;</div><div style="width:48%;float:left;padding:7px 7px 0px 0px;"><div style="float:left;"><div style="padding:1px 0px;color:#1877f2;">' + _this5.lang.instant('APP.distance') + '</div><div style="padding:1px 0px;color:#1877f2;">' + _this5.lang.instant('APP.hours') + '</div><div style="padding:1px 0px;color:#1877f2;">' + _this5.lang.instant('APP.trip') + '</div></div><div style="float:right;"><div style="padding:1px 0px;color:#333;">' + _this5.distance + '</div><div style="padding:1px 0px;color:#333;">' + traccar_hours + '</div><div style="padding:1px 0px;color:#333;">' + traccar_trip + '</div></div></div><div style="clear:both;"></div></div>' + '<div style="width: 0px; height: 0px; border-style: solid; margin: auto; border-width: 12px 7px 0 7px; border-color: #333 transparent transparent transparent; line-height: 0px;"></div>';

            if (_this5.infoBox) {
              _this5.loading.dismiss();

              _this5.infoBox.setContent(infoBoxContent);

              return;
            }

            _this5.infoBox = new InfoBox({
              content: infoBoxContent,
              disableAutoPan: false,
              maxWidth: 0,
              pixelOffset: new google.maps.Size(-160, -Math.abs(_this5.lang.instant('APP.GeolocationInfoBoxPixelOffset'))),
              zIndex: null,
              boxStyle: {
                width: "320px",
                height: _this5.lang.instant('APP.GeolocationInfoBoxHeight')
              },
              closeBoxMargin: "10px 2px 2px 2px",
              closeBoxURL: "",
              infoBoxClearance: new google.maps.Size(1, 1),
              // isHidden: false,
              pane: "floatPane",
              enableEventPropagation: false
            });

            _this5.infoBox.open(_this5.map, _this5.deviceMarker[_this5.current_item.device.id]);
          });
        }
      }, {
        key: "instantiateGoogleMap",
        value: function instantiateGoogleMap() {
          if (this.instantiateMap > 0) {
            return;
          }

          var latLng = new google.maps.LatLng(this.devicePosition.lat, this.devicePosition.lng);
          var mapOptions = {
            center: latLng,
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            minZoom: 6,
            maxZoom: 18,
            disableDefaultUI: true
          };
          this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          var zoomControlDiv = document.createElement('div');
          var zoomControl = this.ZoomControl(zoomControlDiv, this.map, this.infoBox);
          this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(zoomControlDiv);
          var navigateControlDiv = document.createElement('div');
          var navigateControl = this.NavigateControl(navigateControlDiv, this.map);
          this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(navigateControlDiv);
        }
      }, {
        key: "googleDirection",
        value: function googleDirection() {
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
        key: "checkMyBatterySprite",
        value: function checkMyBatterySprite(traccar_battery) {
          var battery_spite = '50.png';
          if (traccar_battery > 90) battery_spite = '100.png';else if (traccar_battery > 80) battery_spite = '90.png';else if (traccar_battery > 70) battery_spite = '80.png';else if (traccar_battery > 60) battery_spite = '70.png';else if (traccar_battery > 50) battery_spite = '60.png';else if (traccar_battery > 40) battery_spite = '50.png';else if (traccar_battery > 30) battery_spite = '40.png';else if (traccar_battery > 20) battery_spite = '30.png';else if (traccar_battery > 10) battery_spite = '20.png';else if (traccar_battery > 1) battery_spite = '10.png';else battery_spite = '0.png';
          return battery_spite;
        }
      }, {
        key: "ZoomControl",
        value: function ZoomControl(controlDiv, map, infoBox) {
          var _this6 = this;

          // Creating divs & styles for custom zoom control
          controlDiv.style.padding = '5px'; // Set CSS for the control wrapper

          var controlWrapper = document.createElement('div');
          controlWrapper.style.cursor = 'pointer';
          controlWrapper.style.textAlign = 'center';
          controlWrapper.style.width = '40px';
          controlWrapper.style.height = '128px';
          controlWrapper.style.marginBottom = '80px';
          controlDiv.appendChild(controlWrapper); // Set CSS for the viewDialog

          var viewButton = document.createElement('div');
          viewButton.style.width = '40px';
          viewButton.style.height = '40px';
          viewButton.style.marginBottom = '2px';
          /* Change this to be the .png image you want to use */

          viewButton.style.backgroundImage = 'url("assets/google/viewBtn.png")';
          controlWrapper.appendChild(viewButton); // Set CSS for the zoomIn

          var zoomInButton = document.createElement('div');
          zoomInButton.style.width = '40px';
          zoomInButton.style.height = '40px';
          zoomInButton.style.marginBottom = '2px';
          /* Change this to be the .png image you want to use */

          zoomInButton.style.backgroundImage = 'url("assets/google/plusBtn.png")';
          controlWrapper.appendChild(zoomInButton); // Set CSS for the zoomOut

          var zoomOutButton = document.createElement('div');
          zoomOutButton.style.width = '40px';
          zoomOutButton.style.height = '40px';
          /* Change this to be the .png image you want to use */

          zoomOutButton.style.backgroundImage = 'url("assets/google/minusBtn.png")';
          controlWrapper.appendChild(zoomOutButton); // Setup the click event listener - zoomOut

          google.maps.event.addDomListener(viewButton, 'click', function () {
            _this6.infoBox.setVisible(!_this6.infoBox.getVisible());
          }); // Setup the click event listener - zoomIn

          google.maps.event.addDomListener(zoomInButton, 'click', function () {
            map.setZoom(map.getZoom() + 1);
          }); // Setup the click event listener - zoomOut

          google.maps.event.addDomListener(zoomOutButton, 'click', function () {
            map.setZoom(map.getZoom() - 1);
          });
        }
      }, {
        key: "NavigateControl",
        value: function NavigateControl(controlDiv, map) {
          var _this7 = this;

          // Creating divs & styles for custom zoom control
          controlDiv.style.padding = '5px'; // Set CSS for the control wrapper

          var controlWrapper = document.createElement('div');
          controlWrapper.style.cursor = 'pointer';
          controlWrapper.style.textAlign = 'center';
          controlWrapper.style.width = '40px';
          controlWrapper.style.height = '144px';
          controlWrapper.style.marginTop = '40px';
          controlDiv.appendChild(controlWrapper); // Set CSS for the zoomIn

          var locateUserButton = document.createElement('div');
          locateUserButton.style.width = '40px';
          locateUserButton.style.height = '40px';
          locateUserButton.style.marginBottom = '2px';
          /* Change this to be the .png image you want to use */

          locateUserButton.style.backgroundImage = 'url("assets/google/newLocateUserBtn.png")';
          controlWrapper.appendChild(locateUserButton); // Set CSS for the zoomOut

          var locateDeviceButton = document.createElement('div');
          locateDeviceButton.style.width = '40px';
          locateDeviceButton.style.height = '40px';
          locateDeviceButton.style.marginBottom = '40px';
          /* Change this to be the .png image you want to use */

          locateDeviceButton.style.backgroundImage = 'url("assets/google/newLocateDeviceBtn.png")';
          controlWrapper.appendChild(locateDeviceButton);

          if (this.isCordova) {
            // Set CSS for the zoomOut
            var directionButton = document.createElement('div');
            directionButton.style.width = '40px';
            directionButton.style.height = '40px';
            directionButton.style.marginBottom = '40px';
            /* Change this to be the .png image you want to use */

            directionButton.style.backgroundImage = 'url("assets/google/directionBtn.png")';
            controlWrapper.appendChild(directionButton);
          } // Setup the click event listener - zoomIn


          google.maps.event.addDomListener(locateUserButton, 'click', function () {
            map.setCenter(new google.maps.LatLng(_this7.userPosition.lat, _this7.userPosition.lng));
          }); // Setup the click event listener - zoomOut

          google.maps.event.addDomListener(locateDeviceButton, 'click', function () {
            map.setCenter(new google.maps.LatLng(_this7.devicePosition.lat, _this7.devicePosition.lng));
          });

          if (this.isCordova) {
            // Setup the click event listener - zoomIn
            google.maps.event.addDomListener(directionButton, 'click', function () {
              _this7.googleDirection();
            });
          }
        }
      }, {
        key: "preparingRequest",
        value: function preparingRequest(deviceids) {
          this.authService.getToken();
          var token = this.authService.token;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
          });
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["ENDPOINT"].API_URL + 'traccar/devices', {
            deviceids: deviceids
          }, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "preparingRequestGetEvent",
        value: function preparingRequestGetEvent(deviceid) {
          this.authService.getToken();
          var token = this.authService.token;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
          });
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["ENDPOINT"].API_URL + 'traccar/device/event', {
            deviceid: deviceid
          }, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(function (device) {
            return device;
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
      }]);

      return GeolocationWebPage;
    }();

    GeolocationWebPage.ctorParameters = function () {
      return [{
        type: _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_11__["LaunchNavigator"]
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
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], GeolocationWebPage.prototype, "mapElement", void 0);
    GeolocationWebPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-geolocation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./geolocation-web.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/geolocation-web/geolocation-web.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./geolocation-web.page.scss */
      "./src/app/pages/geolocation-web/geolocation-web.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_11__["LaunchNavigator"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], GeolocationWebPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-geolocation-web-geolocation-web-module-es5.js.map