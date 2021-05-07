function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <div slot=\"start\">\n    <ion-img alt=\"logo\" style=\"height: 28px; width: 90px;\" src=\"assets/gps-logo.png\"></ion-img> \n    </div>\n\n      <ion-title>\n        {{ 'APP.my_profile' | translate }}\n      </ion-title>\n\n      <ion-buttons slot=\"end\">\n        <ion-button routerLink=\"/notification\">\n          <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/bell.svg\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n      <ion-col>\n        <h5 class=\"text-center\">\n          {{ 'APP.thank_you_our_beloved_customer' | translate }}\n        </h5>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col class=\"\" size=\"4\">\n        \n      </ion-col>\n\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\" routerLink=\"/deliveries\">\n        <ion-avatar>\n          <img src=\"assets/img/avatar.jpg\">\n        </ion-avatar>\n      </ion-col>\n\n      <ion-col class=\"\" size=\"4\">\n      </ion-col>\n\n      <ion-col size=\"12\">\n        <h5 class=\"text-center user-name\">{{ name }}</h5>\n      </ion-col>\n    </ion-row>\n\n\n\n  </ion-grid>\n\n  \n\n\n\n  <ion-grid class=\"ion-no-padding\">\n\n\n\n    <ion-row class=\"button-3\">\n      <ion-col class=\"\" size=\"4\" routerLink=\"/edit-profile\">\n        <ion-img src=\"{{ 'ASSET.edit_profile' | translate }}\"></ion-img>\n      </ion-col>\n\n      <ion-col class=\"\" size=\"4\" routerLink=\"/my-balance\">\n        <ion-img src=\"{{ 'ASSET.balance' | translate }}\"></ion-img>\n      </ion-col>\n\n      <ion-col class=\"\" size=\"4\" routerLink=\"/change-password\">\n        <ion-img src=\"{{ 'ASSET.change_password' | translate }}\"></ion-img>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n    \n  <ion-list class=\"ion-padding\">\n    <!-- <ion-item >\n      <ion-avatar slot=\"start\">\n        <ion-img src=\"assets/img/avatar.jpg\"></ion-img>\n      </ion-avatar>\n      <ion-label>\n        <h2>ប្តូរភាសា</h2>\n      </ion-label>\n      <ion-icon style=\"padding-right:5px;\" src=\"assets/themify-icons/SVG/forward.svg\"></ion-icon>\n    </ion-item> -->\n\n    <ion-item button routerLink=\"/pending\">\n      <ion-icon name=\"barcode\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>\n          {{ 'APP.my_qr_code' | translate }}\n        </h2>\n      </ion-label>\n    </ion-item>\n    \n    <ion-item button (click)=\"chooseLanguage($event)\">\n      <ion-icon name=\"globe\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>\n          {{ 'APP.choose_language' | translate }}\n        </h2>\n      </ion-label>\n    </ion-item>\n\n    <ion-item button (click)=\"logout()\">\n      <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n      <ion-label>\n        <h2>\n          {{ 'APP.logout' | translate }}\n        </h2>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/profile/profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
      entryComponents: []
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/language.service */
    "./src/app/services/language.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _choose_language_choose_language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../choose-language/choose-language.page */
    "./src/app/pages/choose-language/choose-language.page.ts");

    var ProfilePage =
    /*#__PURE__*/
    function () {
      function ProfilePage(navCtrl, authService, alertService, languageService, popoverController) {
        _classCallCheck(this, ProfilePage);

        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertService = alertService;
        this.languageService = languageService;
        this.popoverController = popoverController;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.name = this.authService.user["name"];
          this.profile_picture = this.authService.user["profile_picture"];
          this.phone = this.authService.user["phone"];
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this = this;

          this.authService.logout().subscribe(function (data) {
            _this.httpResponse = data;
          }, function (err) {
            if (err.error.message) {
              _this.alertService.presentToast(err.error.message, "danger");
            } else {
              _this.alertService.presentToast(err.message, "danger");
            }
          }, function () {
            _this.alertService.presentToast(_this.httpResponse.message, "danger");

            _this.navCtrl.navigateRoot('/landing');
          });
        }
      }, {
        key: "chooseLanguage",
        value: function chooseLanguage(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var popover;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.popoverController.create({
                      component: _choose_language_choose_language_page__WEBPACK_IMPORTED_MODULE_6__["ChooseLanguagePage"],
                      event: ev,
                      translucent: true
                    });

                  case 2:
                    popover = _context.sent;
                    _context.next = 5;
                    return popover.present();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }, {
        type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]
      }];
    };

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_4__["LanguageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map