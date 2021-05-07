function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-engine-engine-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/engine/engine.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/engine/engine.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEngineEnginePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'ENGINE_PAGE.engine_on_off' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background-gray\">\n\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\">\n        <ion-avatar>\n          <img src=\"assets/google/marker/{{ deviceIcon }}.png\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"selectDevice()\">\n          {{ devicePlateNumber }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n\n  <ion-grid class=\"ion-padding\">\n\n\n    <ion-row class=\"button-3\">\n      <ion-col size=\"1\"></ion-col>\n\n      <ion-col class=\"\" size=\"5\" (click)=\"presentPasswordPrompt('engineStop')\">\n        <img src=\"{{ 'ASSET.engine_off' | translate }}\">\n      </ion-col>\n\n      <ion-col class=\"\" size=\"5\" (click)=\"presentPasswordPrompt('engineResume')\">\n        <img src=\"{{ 'ASSET.engine_on' | translate }}\">\n      </ion-col>\n\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/engine/engine-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/engine/engine-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: EnginePageRoutingModule */

  /***/
  function srcAppPagesEngineEngineRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnginePageRoutingModule", function () {
      return EnginePageRoutingModule;
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


    var _engine_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./engine.page */
    "./src/app/pages/engine/engine.page.ts");

    var routes = [{
      path: '',
      component: _engine_page__WEBPACK_IMPORTED_MODULE_3__["EnginePage"]
    }];

    var EnginePageRoutingModule = function EnginePageRoutingModule() {
      _classCallCheck(this, EnginePageRoutingModule);
    };

    EnginePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EnginePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/engine/engine.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/engine/engine.module.ts ***!
    \***********************************************/

  /*! exports provided: EnginePageModule */

  /***/
  function srcAppPagesEngineEngineModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnginePageModule", function () {
      return EnginePageModule;
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


    var _engine_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./engine-routing.module */
    "./src/app/pages/engine/engine-routing.module.ts");
    /* harmony import */


    var _engine_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./engine.page */
    "./src/app/pages/engine/engine.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var EnginePageModule = function EnginePageModule() {
      _classCallCheck(this, EnginePageModule);
    };

    EnginePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _engine_routing_module__WEBPACK_IMPORTED_MODULE_5__["EnginePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_engine_page__WEBPACK_IMPORTED_MODULE_6__["EnginePage"]]
    })], EnginePageModule);
    /***/
  },

  /***/
  "./src/app/pages/engine/engine.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/engine/engine.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEngineEnginePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ion-top-padding {\n  margin-top: 25px;\n}\n\n.ignitionOn {\n  color: var(--ion-color-success);\n}\n\n.ignitionOff {\n  color: var(--ion-color-danger);\n}\n\nion-avatar img {\n  background-color: #777;\n  border: 4px solid #fff;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2VuZ2luZS9lbmdpbmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lbmdpbmUvZW5naW5lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbmdpbmUvZW5naW5lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tdG9wLXBhZGRpbmd7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xufVxuXG4uaWduaXRpb25PbntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmZ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG5pb24tYXZhdGFyIGltZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3O1xuICAgIGJvcmRlcjo0cHggc29saWQgI2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbn0iLCIuaW9uLXRvcC1wYWRkaW5nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLmlnbml0aW9uT24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uaWduaXRpb25PZmYge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbmlvbi1hdmF0YXIgaW1nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3NztcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/engine/engine.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/engine/engine.page.ts ***!
    \*********************************************/

  /*! exports provided: EnginePage */

  /***/
  function srcAppPagesEngineEnginePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnginePage", function () {
      return EnginePage;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../select-device/select-device.page */
    "./src/app/pages/select-device/select-device.page.ts");

    var EnginePage =
    /*#__PURE__*/
    function () {
      function EnginePage(http, authService, navCtrl, loadingController, alertController, alertService, storageService, modalController) {
        _classCallCheck(this, EnginePage);

        this.http = http;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.alertService = alertService;
        this.storageService = storageService;
        this.modalController = modalController;
      }

      _createClass(EnginePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.storageService.setItem().subscribe(function (res) {
            _this.current_item = _this.storageService.current_item;
            _this.deviceIcon = _this.current_item.icon_name;
            _this.deviceIconSize = _this.current_item.icon_size;
            _this.devicePlateNumber = _this.current_item.plate;
          }, function (err) {
            console.log(err);
          }, function () {});
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.navigateBack('dashboard/tabs/home');
        }
      }, {
        key: "sendCommandEngineOnOff",
        value: function sendCommandEngineOnOff(status, password, deviceid) {
          var _this2 = this;

          this.presentLoadingWithOptions();
          this.preparingCommand(status, password, deviceid).subscribe(function (data) {
            _this2.httpResponse = data;

            _this2.loading.dismiss();
          }, function (err) {
            if (err.error.message) _this2.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>", "danger");else _this2.alertService.presentToast("<ion-text>" + err.message + "</ion-text>", "danger");

            _this2.loading.dismiss();
          }, function () {
            _this2.alertService.presentToast("<ion-text>" + _this2.httpResponse.message + "</ion-text>", "success");

            _this2.loading.dismiss();
          });
        }
      }, {
        key: "presentPasswordPrompt",
        value: function presentPasswordPrompt(status) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var passwordPrompt;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.status = status;
                    _context.next = 3;
                    return this.alertController.create({
                      header: 'Please enter your password',
                      inputs: [{
                        name: 'password',
                        type: 'password'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Ok',
                        handler: function handler(alertData) {
                          var password = alertData.password;

                          if (password.length < 6) {
                            alert("Password should be greater than 6 digits.");
                          } else {
                            _this3.sendCommandEngineOnOff(_this3.status, password, _this3.current_item.deviceid);
                          }
                        }
                      }]
                    });

                  case 3:
                    passwordPrompt = _context.sent;
                    _context.next = 6;
                    return passwordPrompt.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentLoadingWithOptions",
        value: function presentLoadingWithOptions() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      duration: 15000,
                      message: 'Please wait...',
                      translucent: true,
                      cssClass: 'custom-class custom-loading'
                    });

                  case 2:
                    this.loading = _context2.sent;
                    _context2.next = 5;
                    return this.loading.present();

                  case 5:
                    return _context2.abrupt("return", _context2.sent);

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "preparingCommand",
        value: function preparingCommand(command, password, deviceid) {
          this.authService.getToken();
          var token = this.authService.token;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Authorization': token["token_type"] + " " + token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["ENDPOINT"].API_URL + 'command/send/traccar/' + command + '/' + password + "/" + this.current_item.deviceid, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (data) {
            return data;
          }));
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
                      component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_9__["SelectDevicePage"],
                      componentProps: {
                        // groupItems: this.groupItems,
                        // groupID: this.groupID
                        moduleName: "module_geolocation"
                      }
                    });

                  case 2:
                    assignItemModal = _context3.sent;
                    assignItemModal.onDidDismiss().then(function (res) {
                      _this4.selectedItems = res.data; // Get Current Item from Storage

                      _this4.current_item = _this4.selectedItems;
                      _this4.deviceIcon = _this4.current_item.icon_name;
                      _this4.deviceIconSize = _this4.current_item.icon_size;
                      _this4.devicePlateNumber = _this4.current_item.plate;
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

      return EnginePage;
    }();

    EnginePage.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"]
      }, {
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    EnginePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-engine',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./engine.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/engine/engine.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./engine.page.scss */
      "./src/app/pages/engine/engine.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], EnginePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-engine-engine-module-es5.js.map