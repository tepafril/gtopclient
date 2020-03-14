function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-change-password-change-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChangePasswordChangePasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'PROFILE.change_password' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"changePassword(form)\" method=\"post\" class=\"ion-padding\">\n    <ion-item>\n      <ion-text color=\"success\">\n        <h5 class=\"ion-text-center\">{{ 'PROFILE.change_password_description' | translate }}</h5>\n      </ion-text>\n      <ion-label position=\"floating\">{{ 'APP.password' | translate }}</ion-label>\n      <ion-input ngModel type=\"password\" name=\"password\" required></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'APP.new_password' | translate }}</ion-label>\n      <ion-input ngModel type=\"password\" name=\"newPassword\" required></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'APP.confirm_new_password' | translate }}</ion-label>\n      <ion-input ngModel type=\"password\" name=\"confirmPassword\" required></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"success\" type=\"submit\">{{ 'APP.submit' | translate }}</ion-button>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/change-password/change-password-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ChangePasswordPageRoutingModule */

  /***/
  function srcAppPagesChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function () {
      return ChangePasswordPageRoutingModule;
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


    var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./change-password.page */
    "./src/app/pages/change-password/change-password.page.ts");

    var routes = [{
      path: '',
      component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }];

    var ChangePasswordPageRoutingModule = function ChangePasswordPageRoutingModule() {
      _classCallCheck(this, ChangePasswordPageRoutingModule);
    };

    ChangePasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ChangePasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/change-password/change-password.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ChangePasswordPageModule */

  /***/
  function srcAppPagesChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function () {
      return ChangePasswordPageModule;
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


    var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./change-password-routing.module */
    "./src/app/pages/change-password/change-password-routing.module.ts");
    /* harmony import */


    var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./change-password.page */
    "./src/app/pages/change-password/change-password.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ChangePasswordPageModule = function ChangePasswordPageModule() {
      _classCallCheck(this, ChangePasswordPageModule);
    };

    ChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })], ChangePasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/change-password/change-password.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChangePasswordChangePasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/change-password/change-password.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/change-password/change-password.page.ts ***!
    \***************************************************************/

  /*! exports provided: ChangePasswordPage */

  /***/
  function srcAppPagesChangePasswordChangePasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function () {
      return ChangePasswordPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/alert.service */
    "./src/app/services/alert.service.ts");

    var ChangePasswordPage =
    /*#__PURE__*/
    function () {
      function ChangePasswordPage(navCtrl, authService, alertService, loadingController) {
        _classCallCheck(this, ChangePasswordPage);

        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingController = loadingController;
      }

      _createClass(ChangePasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.navigateBack('dashboard/tabs/profile');
        }
      }, {
        key: "changePassword",
        value: function changePassword(form) {
          var _this = this;

          var password = form.value.password;
          var newPassword = form.value.newPassword;
          var confirmPassword = form.value.confirmPassword;

          if (password.length < 6) {
            this.alertService.presentToast("Password must be greater than 6 digits", "danger");
            return;
          }

          if (newPassword.length < 6) {
            this.alertService.presentToast("New password must be greater than 6 digits", "danger");
            return;
          }

          if (newPassword != confirmPassword) {
            this.alertService.presentToast("Confirmation password does not match.", "danger");
            return;
          }

          this.presentLoading();
          this.authService.changePassword(password, newPassword, confirmPassword).subscribe(function (data) {
            _this.httpResponse = data;
          }, function (err) {
            if (err.error.message) {
              _this.alertService.presentToast(err.error.message, "danger");
            } else {
              _this.alertService.presentToast(err.message, "danger");
            }

            _this.loading.dismiss();
          }, function () {
            _this.alertService.presentToast(_this.httpResponse.message, "success");

            _this.navCtrl.navigateRoot('/landing');

            _this.loading.dismiss();
          });
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait',
                      duration: 10000
                    });

                  case 2:
                    this.loading = _context.sent;
                    _context.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return ChangePasswordPage;
    }();

    ChangePasswordPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    ChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/change-password/change-password.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.page.scss */
      "./src/app/pages/change-password/change-password.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], ChangePasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-change-password-change-password-module-es5.js.map