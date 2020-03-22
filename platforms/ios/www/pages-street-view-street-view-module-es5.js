function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-street-view-street-view-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/street-view/street-view.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/street-view/street-view.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesStreetViewStreetViewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>StreetView</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"pano_canvas\">\n    <div id=\"map_canvas\"></div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/street-view/street-view-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/street-view/street-view-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: StreetViewPageRoutingModule */

  /***/
  function srcAppPagesStreetViewStreetViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreetViewPageRoutingModule", function () {
      return StreetViewPageRoutingModule;
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


    var _street_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./street-view.page */
    "./src/app/pages/street-view/street-view.page.ts");

    var routes = [{
      path: '',
      component: _street_view_page__WEBPACK_IMPORTED_MODULE_3__["StreetViewPage"]
    }];

    var StreetViewPageRoutingModule = function StreetViewPageRoutingModule() {
      _classCallCheck(this, StreetViewPageRoutingModule);
    };

    StreetViewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StreetViewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/street-view/street-view.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/street-view/street-view.module.ts ***!
    \*********************************************************/

  /*! exports provided: StreetViewPageModule */

  /***/
  function srcAppPagesStreetViewStreetViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreetViewPageModule", function () {
      return StreetViewPageModule;
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


    var _street_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./street-view-routing.module */
    "./src/app/pages/street-view/street-view-routing.module.ts");
    /* harmony import */


    var _street_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./street-view.page */
    "./src/app/pages/street-view/street-view.page.ts");

    var StreetViewPageModule = function StreetViewPageModule() {
      _classCallCheck(this, StreetViewPageModule);
    };

    StreetViewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _street_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["StreetViewPageRoutingModule"]],
      declarations: [_street_view_page__WEBPACK_IMPORTED_MODULE_6__["StreetViewPage"]]
    })], StreetViewPageModule);
    /***/
  },

  /***/
  "./src/app/pages/street-view/street-view.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/street-view/street-view.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesStreetViewStreetViewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0cmVldC12aWV3L3N0cmVldC12aWV3LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/street-view/street-view.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/street-view/street-view.page.ts ***!
    \*******************************************************/

  /*! exports provided: StreetViewPage */

  /***/
  function srcAppPagesStreetViewStreetViewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StreetViewPage", function () {
      return StreetViewPage;
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


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");

    var StreetViewPage =
    /*#__PURE__*/
    function () {
      function StreetViewPage(platform) {
        _classCallCheck(this, StreetViewPage);

        this.platform = platform;
      }

      _createClass(StreetViewPage, [{
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

          var initialPos = {
            lat: 42.345573,
            lng: -71.098326
          };
          this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].create('map_canvas', {
            camera: {
              target: initialPos,
              zoom: 17
            }
          }); // Create a map after the view is loaded.

          this.panorama = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMaps"].createPanorama('pano_canvas', {
            camera: {
              target: initialPos
            }
          });
          this.marker = this.map.addMarkerSync({
            flat: true,
            position: initialPos
          }); // Move the marker position when the panorama camera has been moved.
          // (this.marker.position = this.panorama.position)

          this.panorama.bindTo('position', this.marker); // Move the map camera when the panorama camera has been moved.

          this.panorama.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].PANORAMA_LOCATION_CHANGE).subscribe(function (params) {
            var location = params[0];

            _this.map.animateCamera({
              target: location.latLng,
              duration: 1000
            });
          }); // Change the marker bearing when the panorama camera is panning.

          this.panorama.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_3__["GoogleMapsEvent"].PANORAMA_CAMERA_CHANGE).subscribe(function (params) {
            var camera = params[0];

            _this.marker.setRotation(camera.bearing - 180);
          });
        }
      }]);

      return StreetViewPage;
    }();

    StreetViewPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }];
    };

    StreetViewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-street-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./street-view.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/street-view/street-view.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./street-view.page.scss */
      "./src/app/pages/street-view/street-view.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])], StreetViewPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-street-view-street-view-module-es5.js.map