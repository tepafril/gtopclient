function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-traffic-traffic-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/traffic/traffic.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/traffic/traffic.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTrafficTrafficPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <div slot=\"start\">\n      <ion-img alt=\"logo\" style=\"height: 28px; width: 90px;\" src=\"assets/gps-logo.png\"></ion-img> \n    </div>\n\n      <ion-title>\n        {{ 'APP.live_traffic' | translate }}\n      </ion-title>\n\n      <ion-buttons slot=\"end\">\n        <ion-button routerLink=\"/notification\">\n          <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    \n    <ion-img src=\"assets/img/live-traffic.jpg\"></ion-img>\n\n    <ion-card-header>\n      <ion-card-subtitle><ion-badge color=\"danger\">{{ 'APP.live' | translate }}</ion-badge></ion-card-subtitle>\n      <ion-card-title>{{ 'APP.this_footage_requires_fast_internet' | translate }}</ion-card-title>\n    </ion-card-header>\n    \n    <ion-card-content>\n      {{ 'APP.this_is_from_ezecom' | translate }}\n    </ion-card-content>\n\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"openInAppBrowser()\">\n        {{ 'APP.visit' | translate }}\n      </ion-button>\n    \n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/traffic/traffic-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/traffic/traffic-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: TrafficPageRoutingModule */

  /***/
  function srcAppPagesTrafficTrafficRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrafficPageRoutingModule", function () {
      return TrafficPageRoutingModule;
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


    var _traffic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./traffic.page */
    "./src/app/pages/traffic/traffic.page.ts");

    var routes = [{
      path: '',
      component: _traffic_page__WEBPACK_IMPORTED_MODULE_3__["TrafficPage"]
    }];

    var TrafficPageRoutingModule = function TrafficPageRoutingModule() {
      _classCallCheck(this, TrafficPageRoutingModule);
    };

    TrafficPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TrafficPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/traffic/traffic.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/traffic/traffic.module.ts ***!
    \*************************************************/

  /*! exports provided: TrafficPageModule */

  /***/
  function srcAppPagesTrafficTrafficModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrafficPageModule", function () {
      return TrafficPageModule;
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


    var _traffic_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./traffic-routing.module */
    "./src/app/pages/traffic/traffic-routing.module.ts");
    /* harmony import */


    var _traffic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./traffic.page */
    "./src/app/pages/traffic/traffic.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var TrafficPageModule = function TrafficPageModule() {
      _classCallCheck(this, TrafficPageModule);
    };

    TrafficPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _traffic_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrafficPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_traffic_page__WEBPACK_IMPORTED_MODULE_6__["TrafficPage"]]
    })], TrafficPageModule);
    /***/
  },

  /***/
  "./src/app/pages/traffic/traffic.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/traffic/traffic.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTrafficTrafficPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card-header ion-card-subtitle {\n  color: var(--ion-color-danger) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvdHJhZmZpYy90cmFmZmljLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHJhZmZpYy90cmFmZmljLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHlDQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmFmZmljL3RyYWZmaWMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVye1xuICAgIGlvbi1jYXJkLXN1YnRpdGxle1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgICB9XG59IiwiaW9uLWNhcmQtaGVhZGVyIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/traffic/traffic.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/traffic/traffic.page.ts ***!
    \***********************************************/

  /*! exports provided: TrafficPage */

  /***/
  function srcAppPagesTrafficTrafficPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrafficPage", function () {
      return TrafficPage;
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


    var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/safari-view-controller/ngx */
    "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");

    var TrafficPage =
    /*#__PURE__*/
    function () {
      function TrafficPage(loadingController, navCtrl, safariViewController) {
        _classCallCheck(this, TrafficPage);

        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.safariViewController = safariViewController;
      } // options : InAppBrowserOptions = {
      //   location : 'no',//Or 'no' 
      //   hidden : 'no', //Or  'yes'
      //   closebuttoncaption : 'Close',
      //   presentationstyle: 'formsheet'
      // }


      _createClass(TrafficPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openInAppBrowser",
        value: function openInAppBrowser() {
          var _this = this;

          this.safariViewController.isAvailable().then(function (available) {
            if (available) {
              _this.safariViewController.show({
                url: 'https://www.ezecom.com.kh/media-center/live-traffic-camera',
                hidden: false,
                animated: true,
                transition: 'slide',
                enterReaderModeIfAvailable: true,
                tintColor: '#1877f2'
              }).subscribe(function (result) {
                if (result.event === 'opened') console.log('Opened');else if (result.event === 'loaded') console.log('Loaded');else if (result.event === 'closed') console.log('Closed');
              }, function (error) {
                return console.error(error);
              });
            } else {// use fallback browser, example InAppBrowser
            }
          });
        }
      }]);

      return TrafficPage;
    }();

    TrafficPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_3__["SafariViewController"]
      }];
    };

    TrafficPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-traffic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./traffic.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/traffic/traffic.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./traffic.page.scss */
      "./src/app/pages/traffic/traffic.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_3__["SafariViewController"]])], TrafficPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-traffic-traffic-module-es5.js.map