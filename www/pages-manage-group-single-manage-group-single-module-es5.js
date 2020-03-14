function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-group-single-manage-group-single-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-single/manage-group-single.page.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-single/manage-group-single.page.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesManageGroupSingleManageGroupSinglePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ groupName }}\n    </ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addUser()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/user.svg\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"addItem()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/plus.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- Date Segment Title -->\n  <ion-row class=\"ion-padding\">\n    <ion-col size=\"12\">\n      <ion-segment mode=\"ios\" color=\"primary\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"device\" checked>\n          <ion-label>\n            យានយន្ត\n          </ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"user\">\n          <ion-label>\n            អ្នកប្រើប្រាស់\n          </ion-label>\n        </ion-segment-button>\n      </ion-segment>  \n    </ion-col>\n  </ion-row>\n\n      \n  <ion-list class=\"margin-top-25\">\n    <!-- Speed History Header Title -->\n    <ion-item>\n      <ion-icon *ngIf=\"segmentVal == 'user'\" slot=\"start\" src=\"assets/themify-icons/SVG/user.svg\"></ion-icon>\n      <ion-icon *ngIf=\"segmentVal == 'device'\" slot=\"start\" src=\"assets/themify-icons/SVG/location-pin.svg\"></ion-icon>\n      <ion-label>\n        <ion-text color=\"dark\" *ngIf=\"segmentVal == 'user'\">\n          អ្នកប្រើប្រាស់\n        </ion-text>\n        <ion-text color=\"dark\" *ngIf=\"segmentVal == 'device'\">\n          យានយន្ត\n        </ion-text>\n      </ion-label>\n    </ion-item>\n\n    <!-- Data List -->\n    <ion-item-sliding *ngFor=\"let item of dataList let i = index\">\n\n      <ion-item-options side=\"end\" *ngIf=\"segmentVal == 'user'\">\n        <ion-item-option color=\"danger\" (click)=\"detachUser(item.id, item.name)\">Delete</ion-item-option>\n      </ion-item-options>\n\n      <ion-item-options side=\"end\" *ngIf=\"segmentVal == 'device'\">\n        <ion-item-option color=\"danger\" (click)=\"detachItem(item.id, item.name)\">Delete</ion-item-option>\n      </ion-item-options>\n\n      <ion-item>\n        <ion-label>\n          <ion-row>\n            <ion-col size=\"6\" class=\"ion-text-left\">\n              <ion-text color=\"dark\">\n                {{ item.name }}\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n\n    <ion-item *ngIf=\"dataList?.length == 0\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        {{ 'APP.no_data' | translate }}\n      </ion-col>\n    </ion-item>\n  </ion-list>\n \n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/manage-group-single/manage-group-single-routing.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/manage-group-single/manage-group-single-routing.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: ManageGroupSinglePageRoutingModule */

  /***/
  function srcAppPagesManageGroupSingleManageGroupSingleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageGroupSinglePageRoutingModule", function () {
      return ManageGroupSinglePageRoutingModule;
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


    var _manage_group_single_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./manage-group-single.page */
    "./src/app/pages/manage-group-single/manage-group-single.page.ts");

    var routes = [{
      path: '',
      component: _manage_group_single_page__WEBPACK_IMPORTED_MODULE_3__["ManageGroupSinglePage"]
    }];

    var ManageGroupSinglePageRoutingModule = function ManageGroupSinglePageRoutingModule() {
      _classCallCheck(this, ManageGroupSinglePageRoutingModule);
    };

    ManageGroupSinglePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ManageGroupSinglePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/manage-group-single/manage-group-single.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/manage-group-single/manage-group-single.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ManageGroupSinglePageModule */

  /***/
  function srcAppPagesManageGroupSingleManageGroupSingleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageGroupSinglePageModule", function () {
      return ManageGroupSinglePageModule;
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


    var _manage_group_single_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./manage-group-single-routing.module */
    "./src/app/pages/manage-group-single/manage-group-single-routing.module.ts");
    /* harmony import */


    var _manage_group_single_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./manage-group-single.page */
    "./src/app/pages/manage-group-single/manage-group-single.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _manage_group_assign_item_manage_group_assign_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../manage-group-assign-item/manage-group-assign-item.page */
    "./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.ts");

    var ManageGroupSinglePageModule = function ManageGroupSinglePageModule() {
      _classCallCheck(this, ManageGroupSinglePageModule);
    };

    ManageGroupSinglePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _manage_group_single_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageGroupSinglePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_manage_group_single_page__WEBPACK_IMPORTED_MODULE_6__["ManageGroupSinglePage"], _manage_group_assign_item_manage_group_assign_item_page__WEBPACK_IMPORTED_MODULE_8__["ManageGroupAssignItemPage"]],
      entryComponents: [_manage_group_assign_item_manage_group_assign_item_page__WEBPACK_IMPORTED_MODULE_8__["ManageGroupAssignItemPage"]]
    })], ManageGroupSinglePageModule);
    /***/
  },

  /***/
  "./src/app/pages/manage-group-single/manage-group-single.page.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/manage-group-single/manage-group-single.page.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesManageGroupSingleManageGroupSinglePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1ncm91cC1zaW5nbGUvbWFuYWdlLWdyb3VwLXNpbmdsZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/manage-group-single/manage-group-single.page.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/manage-group-single/manage-group-single.page.ts ***!
    \***********************************************************************/

  /*! exports provided: ManageGroupSinglePage */

  /***/
  function srcAppPagesManageGroupSingleManageGroupSinglePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageGroupSinglePage", function () {
      return ManageGroupSinglePage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var _manage_group_assign_item_manage_group_assign_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../manage-group-assign-item/manage-group-assign-item.page */
    "./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.ts");

    var ManageGroupSinglePage =
    /*#__PURE__*/
    function () {
      function ManageGroupSinglePage(navCtrl, alertController, activatedRoute, loadingController, alertService, requestService, modalController) {
        _classCallCheck(this, ManageGroupSinglePage);

        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.requestService = requestService;
        this.modalController = modalController;
        this.segmentVal = 'user';
        this.dataList = [];
        this.groupItems = [];
      }

      _createClass(ManageGroupSinglePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.groupID = this.activatedRoute.snapshot.paramMap.get('id');
          this.groupName = this.activatedRoute.snapshot.paramMap.get('name');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.segmentVal = "device";
          this.dataList = [];
          this.groupItems = [];
          this.initGroupQuery();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.navigateBack('/manage-group');
        }
      }, {
        key: "addUser",
        value: function addUser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Enter user\'s phone number to let them view this group.',
                      inputs: [{
                        name: 'phoneNumber',
                        type: "text",
                        placeholder: 'User\'s Phone Number'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: 'Add User',
                        handler: function handler(data) {
                          _this.phoneNumber = data.phoneNumber;

                          _this.requestService.attachUserToGroup(_this.phoneNumber, _this.groupID).subscribe(function (res) {
                            _this.httpResponse = res;
                          }, function (err) {
                            if (err.error.message) {
                              _this.alertService.presentToast(err.error.message, "danger");
                            } else {
                              _this.alertService.presentToast(err.message, "danger");
                            }

                            _this.loading.dismiss();
                          }, function () {
                            _this.initGroupQuery();
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "detachUser",
        value: function detachUser(userID, userName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Do you want to delete ' + userName + '?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: 'Delete',
                        handler: function handler(data) {
                          _this2.requestService.detachUserFromGroup(_this2.groupID, userID).subscribe(function (res) {
                            _this2.httpResponse = res;
                          }, function (err) {
                            if (err.error.message) {
                              _this2.alertService.presentToast(err.error.message, "danger");
                            } else {
                              _this2.alertService.presentToast(err.message, "danger");
                            }

                            _this2.loading.dismiss();
                          }, function () {
                            _this2.initGroupQuery();
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "detachItem",
        value: function detachItem(itemID, itemName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Do you want to delete ' + itemName + '?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: 'Delete',
                        handler: function handler(data) {
                          _this3.requestService.detachItemFromGroup(_this3.groupID, itemID).subscribe(function (res) {
                            _this3.httpResponse = res;
                          }, function (err) {
                            if (err.error.message) {
                              _this3.alertService.presentToast(err.error.message, "danger");
                            } else {
                              _this3.alertService.presentToast(err.message, "danger");
                            }

                            _this3.loading.dismiss();
                          }, function () {
                            _this3.initGroupQuery();
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "addItem",
        value: function addItem() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var assignItemModal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.modalController.create({
                      component: _manage_group_assign_item_manage_group_assign_item_page__WEBPACK_IMPORTED_MODULE_6__["ManageGroupAssignItemPage"],
                      componentProps: {
                        groupItems: this.groupItems,
                        groupID: this.groupID
                      }
                    });

                  case 2:
                    assignItemModal = _context4.sent;
                    assignItemModal.onDidDismiss().then(function () {
                      _this4.initGroupQuery();
                    }).catch(function (err) {
                      console.log(err);
                    });
                    _context4.next = 6;
                    return assignItemModal.present();

                  case 6:
                    return _context4.abrupt("return", _context4.sent);

                  case 7:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          this.segmentVal = ev.target.value;

          if (this.segmentVal == "user") {
            this.dataList = [];
            this.initGroupQuery();
          } else if (this.segmentVal == "device") {
            this.dataList = [];
            this.initGroupQuery();
          } else {
            this.dataList = [];
          }
        }
      }, {
        key: "initGroupQuery",
        value: function initGroupQuery() {
          var _this5 = this;

          this.presentLoading();
          this.groupItems = [];
          this.dataList = [];
          this.pagination = 1;

          if (this.segmentVal == "user") {
            this.requestService.getGroupUsers(this.groupID, this.pagination).subscribe(function (res) {
              _this5.httpResponse = res;
            }, function (err) {
              if (err.error.message) {
                _this5.alertService.presentToast(err.error.message, "danger");
              } else {
                _this5.alertService.presentToast(err.message, "danger");
              }

              _this5.loading.dismiss();
            }, function () {
              for (var i = 0; i < _this5.httpResponse.groups.length; i++) {
                _this5.httpResponse.groups[i].name = _this5.httpResponse.groups[i].name + " (" + _this5.httpResponse.groups[i].phone + ")";

                _this5.dataList.push(_this5.httpResponse.groups[i]);
              }

              _this5.pagination++;

              _this5.loading.dismiss();
            });
          } else {
            this.requestService.getGroupDevices(this.groupID, this.pagination).subscribe(function (res) {
              _this5.httpResponse = res;
            }, function (err) {
              if (err.error.message) {
                _this5.alertService.presentToast(err.error.message, "danger");
              } else {
                _this5.alertService.presentToast(err.message, "danger");
              }

              _this5.loading.dismiss();
            }, function () {
              for (var i = 0; i < _this5.httpResponse.groups.length; i++) {
                _this5.groupItems.push(_this5.httpResponse.groups[i].id);

                _this5.httpResponse.groups[i].name = _this5.httpResponse.groups[i].name + " (" + _this5.httpResponse.groups[i].plate + ")";

                _this5.dataList.push(_this5.httpResponse.groups[i]);
              }

              _this5.pagination++;

              _this5.loading.dismiss();
            });
          }
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this6 = this;

          if (this.segmentVal == "user") {
            this.requestService.getGroupUsers(this.groupID, this.pagination).subscribe(function (res) {
              _this6.httpResponse = res;
            }, function (err) {
              if (err.error.message) {
                _this6.alertService.presentToast(err.error.message, "danger");
              } else {
                _this6.alertService.presentToast(err.message, "danger");
              }

              _this6.loading.dismiss();
            }, function () {
              for (var i = 0; i < _this6.httpResponse.groups.length; i++) {
                _this6.dataList.push(_this6.httpResponse.groups[i]);
              }

              event.target.complete();

              if (_this6.httpResponse.length < 40) {
                event.target.disabled = true;
              }

              _this6.pagination++;
            });
          } else {
            this.requestService.getGroupDevices(this.groupID, this.pagination).subscribe(function (res) {
              _this6.httpResponse = res;
            }, function (err) {
              if (err.error.message) {
                _this6.alertService.presentToast(err.error.message, "danger");
              } else {
                _this6.alertService.presentToast(err.message, "danger");
              }

              _this6.loading.dismiss();
            }, function () {
              for (var i = 0; i < _this6.httpResponse.groups.length; i++) {
                _this6.groupItems.push(_this6.httpResponse.groups[i].id);

                _this6.dataList.push(_this6.httpResponse.groups[i]);
              }

              event.target.complete();

              if (_this6.httpResponse.length < 40) {
                event.target.disabled = true;
              }

              _this6.pagination++;
            });
          }
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait',
                      duration: 10000
                    });

                  case 2:
                    this.loading = _context5.sent;
                    _context5.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return ManageGroupSinglePage;
    }();

    ManageGroupSinglePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    ManageGroupSinglePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-group-single',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-group-single.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-single/manage-group-single.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-group-single.page.scss */
      "./src/app/pages/manage-group-single/manage-group-single.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], ManageGroupSinglePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-manage-group-single-manage-group-single-module-es5.js.map