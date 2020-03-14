function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-landing-landing-module~pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <img src=\"/assets/header-logo-red.jpg\" class=\"ion-hide-md-up\">\n\n  <ion-text color=\"dark\">\n    <h2 class=\"ion-text-center\">{{ 'REGISTER_PAGE.register_new_phone' | translate }}</h2>\n  </ion-text>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"sendOTP(form)\" method=\"post\" class=\"ion-padding\" *ngIf=\"!isSent && !isPinVerified\">\n    <ion-item>\n      <ion-text color=\"danger\">\n        <h5 class=\"ion-text-center\">{{ 'REGISTER_PAGE.enter_phone' | translate }}</h5>\n      </ion-text>\n      <ion-label position=\"floating\">{{ 'APP.phone_number' | translate }}</ion-label>\n      <ion-input ngModel type=\"tel\" name=\"phone\" required></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"danger\" type=\"submit\">{{ 'APP.submit' | translate }}</ion-button>\n    <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" (click)=\"dismissRegister()\"><ion-icon  src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon> &nbsp;&nbsp;&nbsp;&nbsp; {{ 'APP.back' | translate }}</ion-button>\n  </form>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"verifyOTP(form)\" method=\"post\" class=\"ion-padding\" *ngIf=\"isSent && !isPinVerified\">\n    <ion-item>\n      <ion-text color=\"danger\">\n        <h5 class=\"ion-text-center\">លោកអ្នកនឹងទទួលបានសារ(SMS) មួយដែលមានលេខ 6ខ្ទង់។ សូមបញ្ចូលលេខនោះក្នុងប្រអប់ខាងក្រោម</h5>\n      </ion-text>      \n      <ion-label position=\"floating\">{{ 'APP.password' | translate }}</ion-label>\n      <ion-input ngModel type=\"tel\" name=\"otp\" required></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"danger\" type=\"submit\">{{ 'APP.submit' | translate }}</ion-button>\n    <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" (click)=\"backToSendingOTP()\" [disabled]=\"isBackable\"><ion-icon  src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon> &nbsp;&nbsp;&nbsp;&nbsp; {{ 'APP.back' | translate }} ({{ countDownTimer }})</ion-button>\n  </form>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"register(form)\" method=\"post\" class=\"ion-padding\" *ngIf=\"isPinVerified\">\n    <ion-item>\n      <ion-text color=\"danger\">\n        <h5 class=\"ion-text-center\">សូមវាយបញ្ចូលពាក្យសំងាត់ថ្មីរបស់លោកអ្នក</h5>\n      </ion-text>\n      <ion-label position=\"floating\">{{ 'APP.password' | translate }}</ion-label>\n      <ion-input ngModel type=\"password\" name=\"password\" required></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">{{ 'APP.confirm_password' | translate }}</ion-label>\n      <ion-input ngModel type=\"password\" name=\"confirmPassword\" required></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"danger\" type=\"submit\">{{ 'APP.submit' | translate }}</ion-button>\n    <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" (click)=\"backToSendingOTP()\"><ion-icon  src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon> &nbsp;&nbsp;&nbsp;&nbsp; {{ 'APP.back' | translate }}</ion-button>\n  </form>\n\n  <div id=\"recaptcha-container\"></div>\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
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


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/firebase-authentication/ngx */
    "./node_modules/@ionic-native/firebase-authentication/ngx/index.js"); // import { cfaSignIn, cfaSignInPhoneOnCodeSent } from 'capacitor-firebase-auth';


    var RegisterPage =
    /*#__PURE__*/
    function () {
      function RegisterPage(modalController, authService, navCtrl, alertService, platform, loadingController, lang, firebaseAuthentication) {
        _classCallCheck(this, RegisterPage);

        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.platform = platform;
        this.loadingController = loadingController;
        this.lang = lang;
        this.firebaseAuthentication = firebaseAuthentication;
        this.busy = false;
        this.isSent = false;
        this.isBackable = false;
        this.isPinVerified = false;
        this.countDownTimer = '0:59';
      }

      _createClass(RegisterPage, [{
        key: "signInWithCode",
        value: function signInWithCode() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissRegister",
        value: function dismissRegister() {
          this.modalController.dismiss();
        }
      }, {
        key: "backToSendingOTP",
        value: function backToSendingOTP() {
          this.isSent = false;
          this.isPinVerified = false;
          this.countDownTimer = '0:59';
        }
      }, {
        key: "sendOTP",
        value: function sendOTP(form) {
          var _this = this;

          this.phoneNumber = form.value.phone;

          if (!navigator.onLine) {
            this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + this.lang.instant('APP.internet_not_work') + "</ion-text>", "danger");
            return;
          }

          if (this.phoneNumber.length < 9) {
            this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + this.lang.instant('APP.please_validate_phone') + "</ion-text>", "danger");
            return;
          }

          this.presentLoading();
          this.authService.isPhoneAvailable(this.phoneNumber).subscribe(function (data) {
            _this.httpResponse = data;
            _this.phoneNumber = _this.httpResponse.phone; // *******************************
            // Firebase Start Sending OTP
            // *******************************

            _this.firebaseAuthentication.verifyPhoneNumber(_this.phoneNumber, 30000).then(function (verificationID) {
              _this.isSent = true;

              _this.startTimer(60);

              _this.loading.dismiss();

              _this.firebaseVerificationId = verificationID;
            }).catch(function (error) {
              _this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + error + "</ion-text>", "danger");
            }); // *******************************
            // END Firebase Start Sending OTP
            // *******************************


            _this.loading.dismiss();
          }, function (err) {
            if (err.error.message) {
              _this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + err.error.message + "</ion-text>", "danger");
            } else {
              _this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + err.message + "</ion-text>", "danger");
            }

            _this.loading.dismiss();
          });
        }
      }, {
        key: "verifyOTP",
        value: function verifyOTP(form) {
          var _this2 = this;

          if (!navigator.onLine) {
            this.alertService.presentToast("<ion-text class=\"ion-text-center\">" + this.lang.instant('APP.internet_not_work') + "</ion-text>", "danger");
            return;
          }

          this.presentLoading(); // let credential = firebase.auth.PhoneAuthProvider.credential(this.firebaseVerificationId, form.value.otp);

          this.firebaseAuthentication.signInWithVerificationId(this.firebaseVerificationId, form.value.otp).then(function (user) {
            // console.log(user);
            _this2.firebaseAuthentication.getIdToken(true).then(function (idToken) {
              _this2.fireabaseTokenId = idToken;
              console.log("this.fireabaseTokenId");
              console.log(_this2.fireabaseTokenId);
              console.log("end this.fireabaseTokenId");

              _this2.authService.verifyToken(_this2.fireabaseTokenId, "gpstopone").subscribe(function (data) {
                _this2.httpResponse = data;
              }, function (err) {
                if (err.error.message) {
                  _this2.alertService.presentToast("<ion-text class=\"ion-text-center\">" + err.error.message + "</ion-text>", "danger");
                } else {
                  _this2.alertService.presentToast("<ion-text class=\"ion-text-center\">" + err.message + "</ion-text>", "danger");
                }

                _this2.loading.dismiss();
              }, function () {
                _this2.isPinVerified = true;

                _this2.alertService.presentToast("<ion-text class=\"ion-text-center\">" + _this2.httpResponse.message + "</ion-text>", "success");

                _this2.loading.dismiss();
              });
            }).catch(function (error) {
              _this2.loading.dismiss();

              _this2.alertService.presentToast("<ion-text class=\"ion-text-center\">" + error + "</ion-text>", "danger");
            });
          }).catch(function (error) {
            console.log(error);

            _this2.loading.dismiss();

            _this2.alertService.presentToast("<ion-text class=\"ion-text-center\">" + error + "</ion-text>", "danger");
          });
        }
      }, {
        key: "register",
        value: function register(form) {
          var _this3 = this;

          if (!navigator.onLine) {
            this.alertService.presentToast("<ion-text>អ៉ីនធើណែតទូរស័ព្ទលោកអ្នកមិនដំណើរការនោះទេ! សូមរកកន្លែងមានសេវាឬភ្ជាប់ WiFi ដែលនៅជិតលោកអ្នក។</ion-text>", "danger");
            return;
          }

          if (form.value.password.length < 6) {
            this.alertService.presentToast("<ion-text>ពាក្យសំងាត់ត្រូវមានចំនួន6ខ្ទង់ឡើងទៅ</ion-text>", "danger");
            return;
          }

          if (form.value.password != form.value.confirmPassword) {
            this.alertService.presentToast("<ion-text>ពាក្យសំងាត់សម្រាប់ផ្ទៀងផ្ទាត់មិនដូចគ្នាទេ</ion-text>", "danger");
            return;
          }

          this.presentLoading();
          this.password = form.value.password;
          this.authService.register(this.fireabaseTokenId, form.value.password, form.value.confirmPassword, 'gpstopone').subscribe(function (data) {
            _this3.httpResponse = data;

            _this3.authService.login(_this3.phoneNumber, _this3.password).subscribe(function (data) {
              _this3.alertService.presentToast("<ion-text>" + _this3.httpResponse.message + "</ion-text>", "success");

              _this3.dismissRegister();

              _this3.navCtrl.navigateForward('/pending');
            }, function (err) {
              if (err.error.message) _this3.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>", "danger");else _this3.alertService.presentToast("<ion-text>" + err.message + "</ion-text>", "danger");

              _this3.loading.dismiss();
            });
          }, function (err) {
            if (err.error.message) _this3.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>", "danger");else _this3.alertService.presentToast("<ion-text>" + err.message + "</ion-text>", "danger");

            _this3.loading.dismiss();
          }, function () {
            _this3.loading.dismiss();
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
      }, {
        key: "startTimer",
        value: function startTimer(startSec) {
          var _this4 = this;

          setTimeout(function () {
            startSec--;
            if (startSec > 10) _this4.countDownTimer = '0:' + startSec;else _this4.countDownTimer = '0:0' + startSec;

            if (startSec > 0) {
              _this4.startTimer(startSec);
            } else {
              _this4.isBackable = true;
            }
          }, 1000);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(formData) {
          if (this.platform.is('cordova')) {// cfaSignIn('phone', {"phone": "+85516827282"}).subscribe(
            //   user => console.log(user.phoneNumber)
            // );
          } else {// const appVerifier = this.recaptchaVerifier;
              // firebase.auth().signInWithPhoneNumber(formData.phone_number, appVerifier)
              // .then((confirmationResult) => {
              //   this.sent = true;
              //   const verification = prompt('Enter verification code');
              //   if (verification != null) {
              //     console.log(verification);
              //     confirmationResult.confirm(verification)
              //       .then((good) => {
              //         // all checks out
              //       })
              //       .catch((bad) => {
              //         // code verification was bad.
              //       });
              //   } else {
              //     console.log('No verification code entered');
              //   }
              // })
              // .catch((err) => {
              //   console.log('sms not sent', err);
              // });
            }
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"]
      }];
    };

    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"]])], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-landing-landing-module~pages-register-register-module-es5.js.map