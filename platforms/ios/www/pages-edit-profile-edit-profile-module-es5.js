function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditProfileEditProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'PROFILE.edit_profile' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form #form=\"ngForm\" (ngSubmit)=\"editProfile(form)\" method=\"post\" class=\"ion-padding\">\n    <ion-item>\n      <ion-text color=\"success\">\n        <h5 class=\"ion-text-center\">{{ 'PROFILE.edit_profile_description' | translate }}</h5>\n      </ion-text>\n      <ion-label position=\"floating\">{{ 'PROFILE.phone' | translate }}</ion-label>\n      <ion-input [ngModel]=\"phone\" type=\"text\" name=\"phone\" readonly></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'PROFILE.username' | translate }}</ion-label>\n      <ion-input [ngModel]=\"name\" type=\"text\" name=\"name\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'PROFILE.gender' | translate }}</ion-label>\n      <ion-input [ngModel]=\"gender\" type=\"text\" name=\"gender\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'PROFILE.dob' | translate }}</ion-label>\n      <ion-input [ngModel]=\"dob\" type=\"text\" name=\"dob\"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'PROFILE.email' | translate }}</ion-label>\n      <ion-input [ngModel]=\"email\" type=\"email\" name=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"success\" type=\"submit\">{{ 'APP.submit' | translate }}</ion-button>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/edit-profile/edit-profile-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/edit-profile/edit-profile-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: EditProfilePageRoutingModule */

  /***/
  function srcAppPagesEditProfileEditProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function () {
      return EditProfilePageRoutingModule;
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


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/pages/edit-profile/edit-profile.page.ts");

    var routes = [{
      path: '',
      component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }];

    var EditProfilePageRoutingModule = function EditProfilePageRoutingModule() {
      _classCallCheck(this, EditProfilePageRoutingModule);
    };

    EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/edit-profile/edit-profile.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
    \***********************************************************/

  /*! exports provided: EditProfilePageModule */

  /***/
  function srcAppPagesEditProfileEditProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function () {
      return EditProfilePageModule;
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


    var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-profile-routing.module */
    "./src/app/pages/edit-profile/edit-profile-routing.module.ts");
    /* harmony import */


    var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-profile.page */
    "./src/app/pages/edit-profile/edit-profile.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var EditProfilePageModule = function EditProfilePageModule() {
      _classCallCheck(this, EditProfilePageModule);
    };

    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })], EditProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/edit-profile/edit-profile.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEditProfileEditProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/edit-profile/edit-profile.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
    \*********************************************************/

  /*! exports provided: EditProfilePage */

  /***/
  function srcAppPagesEditProfileEditProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditProfilePage", function () {
      return EditProfilePage;
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

    var EditProfilePage =
    /*#__PURE__*/
    function () {
      function EditProfilePage(navCtrl, authService, alertService, loadingController) {
        _classCallCheck(this, EditProfilePage);

        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertService = alertService;
        this.loadingController = loadingController;
      }

      _createClass(EditProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.phone = this.authService.user.phone;
          this.name = this.authService.user.name;
          this.gender = this.authService.user.gender;
          this.dob = this.authService.user.dob;
          this.email = this.authService.user.email;
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.navigateBack('dashboard/tabs/profile');
        }
      }, {
        key: "editProfile",
        value: function editProfile(form) {
          var _this = this;

          var name = form.value.name;
          var gender = form.value.gender;
          var dob = form.value.dob;
          var email = form.value.email;
          this.presentLoading();
          this.authService.editProfile(name, gender, dob, email).subscribe(function (data) {
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

            _this.name = _this.authService.user.name;
            _this.gender = _this.authService.user.gender;
            _this.dob = _this.authService.user.dob;
            _this.email = _this.authService.user.email;

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

      return EditProfilePage;
    }();

    EditProfilePage.ctorParameters = function () {
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

    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-profile.page.scss */
      "./src/app/pages/edit-profile/edit-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], EditProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es5.js.map