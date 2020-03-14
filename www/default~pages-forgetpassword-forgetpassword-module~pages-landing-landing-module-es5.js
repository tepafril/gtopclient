function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-forgetpassword-forgetpassword-module~pages-landing-landing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgetpassword/forgetpassword.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgetpassword/forgetpassword.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForgetpasswordForgetpasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <img src=\"/assets/header-logo-blue.jpg\" class=\"ion-hide-md-up\">\n\n  <ion-text color=\"dark\">\n    <h2 class=\"ion-text-center\">{{ 'APP.forgot_password' | translate }}</h2>\n  </ion-text>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"sendOTP(form)\" method=\"post\" class=\"ion-padding\" *ngIf=\"!isSent && !isPinVerified\">\n    <ion-item>\n      <ion-text color=\"primary\">\n        <h5 class=\"ion-text-center\">{{ 'FORGOT_PASSWORD_PAGE.enter_phone_to_reset_password' | translate }}</h5>\n      </ion-text>\n      <ion-label position=\"floating\">{{ 'APP.phone_number' | translate }}</ion-label>\n      <ion-input ngModel type=\"tel\" name=\"phone\" required></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"primary\" type=\"submit\">{{ 'APP.submit' | translate }}</ion-button>\n    <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" (click)=\"dismissForgetPassword()\"><ion-icon  src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon> &nbsp;&nbsp;&nbsp;&nbsp; {{ 'APP.back' | translate }}</ion-button>\n  </form>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"verifyOTP(form)\" method=\"post\" class=\"ion-padding\" *ngIf=\"isSent && !isPinVerified\">\n    <ion-item>\n      <ion-text color=\"primary\">\n        <h5 class=\"ion-text-center\">{{ 'APP.enter_otp' | translate }}</h5>\n      </ion-text>      \n      <ion-label position=\"floating\">{{ 'APP.otp_number' | translate }}</ion-label>\n      <ion-input ngModel type=\"tel\" name=\"otp\" required></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"primary\" type=\"submit\">{{ 'APP.submit' | translate }}</ion-button>\n    <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" (click)=\"backToSendingOTP()\" [disabled]=\"isBackable\"><ion-icon  src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon> &nbsp;&nbsp;&nbsp;&nbsp; {{ 'APP.back' | translate }} ({{ countDownTimer }})</ion-button>\n  </form>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"resetPassword(form)\" method=\"post\" class=\"ion-padding\" *ngIf=\"isPinVerified\">\n    <ion-item>\n      <ion-text color=\"primary\">\n        <h5 class=\"ion-text-center\">{{ 'FORGOT_PASSWORD_PAGE.enter_phone_new_password' | translate }}</h5>\n      </ion-text>\n      <ion-label position=\"floating\">{{ 'APP.password' | translate }}</ion-label>\n      <ion-input ngModel type=\"password\" name=\"password\" required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">{{ 'APP.confirm_password' | translate }}</ion-label>\n      <ion-input ngModel type=\"password\" name=\"confirmPassword\" required></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"primary\" type=\"submit\">{{ 'APP.submit' | translate }}</ion-button>\n    <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" (click)=\"backToSendingOTP()\"><ion-icon  src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon> &nbsp;&nbsp;&nbsp;&nbsp; {{ 'APP.back' | translate }}</ion-button>\n  </form>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/forgetpassword/forgetpassword.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/forgetpassword/forgetpassword.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForgetpasswordForgetpasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdldHBhc3N3b3JkL2ZvcmdldHBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/forgetpassword/forgetpassword.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/forgetpassword/forgetpassword.page.ts ***!
    \*************************************************************/

  /*! exports provided: ForgetpasswordPage */

  /***/
  function srcAppPagesForgetpasswordForgetpasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetpasswordPage", function () {
      return ForgetpasswordPage;
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


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/firebase-authentication/ngx */
    "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");

    var ForgetpasswordPage =
    /*#__PURE__*/
    function () {
      function ForgetpasswordPage(modalController, loadingController, alertService, authService, navCtrl, lang, firebaseAuthentication) {
        _classCallCheck(this, ForgetpasswordPage);

        this.modalController = modalController;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.lang = lang;
        this.firebaseAuthentication = firebaseAuthentication;
        this.isSent = false;
        this.isBackable = false;
        this.isPinVerified = false;
        this.countDownTimer = '0:59';
      }

      _createClass(ForgetpasswordPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissForgetPassword",
        value: function dismissForgetPassword() {
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
            this.alertService.presentToast(this.lang.instant('APP.internet_not_work'), "danger");
            return;
          }

          if (this.phoneNumber.length < 9) {
            this.alertService.presentToast(this.lang.instant('APP.please_validate_phone'), "danger");
            return;
          }

          this.presentLoading();
          this.authService.verifyPhone(this.phoneNumber).subscribe(function (data) {
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

          }, function (err) {
            if (err.error.message) {
              _this.alertService.presentToast(err.error.message, "danger");
            } else {
              _this.alertService.presentToast(err.message, "danger");
            }

            _this.loading.dismiss();
          });
        } // verifyOTP(form: NgForm){
        //   if( !navigator.onLine )
        //   {
        //     this.alertService.presentToast( this.lang.instant('APP.internet_not_work') ,"danger");
        //     return;
        //   }
        //   this.presentLoading();
        //   let credential = firebase.auth.PhoneAuthProvider.credential(this.firebaseVerificationId, form.value.otp);
        //   firebase.auth().signInWithCredential(credential).then(()=>{
        //     firebase.auth().currentUser.getIdToken(true).then(idToken=>{
        //       this.fireabaseTokenId = idToken;
        //       this.authService.verifyToken( this.fireabaseTokenId ).subscribe(
        //         data => {
        //           this.httpResponse = data;
        //         }, err => {
        //           if( err.error.message ){
        //             this.alertService.presentToast( err.error.message ,"danger");
        //           }
        //           else{
        //             this.alertService.presentToast( err.message ,"danger");
        //           }
        //           this.loading.dismiss();
        //         }, () => {
        //           this.isPinVerified = true;
        //           this.alertService.presentToast( this.httpResponse.message ,"success");
        //           this.loading.dismiss();
        //         }
        //       );
        //     }).catch(error => {
        //       this.loading.dismiss();
        //       this.alertService.presentToast( error ,"danger");
        //     });  
        //   }).catch((error)=>{
        //     this.loading.dismiss();
        //     this.alertService.presentToast( error ,"danger");
        //   });
        // }
        // resetPassword(form: NgForm){
        //   if( !navigator.onLine )
        //   {
        //     this.alertService.presentToast( this.lang.instant('APP.internet_not_work') ,"danger");
        //     return;
        //   }
        //   if( form.value.password.length < 6 ){
        //     this.alertService.presentToast( this.lang.instant('APP.password_must_be_greater_than_6') ,"danger");
        //     return;
        //   }
        //   if( form.value.password != form.value.confirmPassword ){
        //     this.alertService.presentToast( this.lang.instant('APP.password_does_not_match') ,"danger");
        //     return;
        //   }
        //   this.presentLoading();
        //   this.password = form.value.password;
        //   this.authService.resetPassword( this.fireabaseTokenId, form.value.password, form.value.confirmPassword ).subscribe(
        //     data => {
        //       this.httpResponse = data;
        //       this.authService.login(this.phoneNumber, this.password).subscribe( data => {
        //         this.alertService.presentToast( this.httpResponse.message ,"success");
        //         this.dismissForgetPassword();
        //         if(this.authService.isLoggedIn && this.authService.isVerified) {
        //           this.navCtrl.navigateRoot('/dashboard');
        //         }
        //         else if(this.authService.isLoggedIn && !this.authService.isVerified){
        //           this.navCtrl.navigateRoot('/pending');
        //         }
        //       }, err => {
        //         if( err.error.message )
        //           this.alertService.presentToast( err.error.message ,"danger");
        //         else
        //           this.alertService.presentToast( err.message ,"danger");
        //         this.loading.dismiss();
        //       });
        //     }, err => {
        //       if( err.error.message )
        //         this.alertService.presentToast( err.error.message ,"danger");
        //       else
        //         this.alertService.presentToast( err.message ,"danger");
        //       this.loading.dismiss();
        //     }, () => {
        //       this.loading.dismiss();
        //     }
        //   );
        // }

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
                      duration: 30000
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
          var _this2 = this;

          setTimeout(function () {
            startSec--;
            if (startSec > 10) _this2.countDownTimer = '0:' + startSec;else _this2.countDownTimer = '0:0' + startSec;

            if (startSec > 0) {
              _this2.startTimer(startSec);
            } else {
              _this2.isBackable = true;
            }
          }, 1000);
        }
      }]);

      return ForgetpasswordPage;
    }();

    ForgetpasswordPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"]
      }];
    };

    ForgetpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgetpassword',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgetpassword.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgetpassword/forgetpassword.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgetpassword.page.scss */
      "./src/app/pages/forgetpassword/forgetpassword.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"]])], ForgetpasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-forgetpassword-forgetpassword-module~pages-landing-landing-module-es5.js.map