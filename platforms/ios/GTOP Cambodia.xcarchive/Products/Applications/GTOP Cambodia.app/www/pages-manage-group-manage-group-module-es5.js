function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-group-manage-group-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group/manage-group.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group/manage-group.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesManageGroupManageGroupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'MANAGE_GROUP.manage_group' | translate }}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addGroup()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/plus.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    \n    <ion-list>\n      \n      <ion-item *ngIf=\"dataList?.length == 0\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          {{ 'APP.no_data' | translate }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item-sliding *ngFor=\"let item of dataList\">\n        <ion-item-options side=\"end\">\n          <ion-item-option color=\"primary\" (click)=\"editGroup(item.id, item.name)\">Edit</ion-item-option>\n          <ion-item-option color=\"danger\" (click)=\"deleteGroup(item.id, item.name)\">Delete</ion-item-option>\n        </ion-item-options>\n        <ion-item detail routerLink=\"/manage-group-single/{{ item.id }}/{{ item.name }}\">\n          <ion-label>{{ item.name }} ({{ item.item_count }})</ion-label>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-list>\n \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/manage-group/manage-group-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/manage-group/manage-group-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ManageGroupPageRoutingModule */

  /***/
  function srcAppPagesManageGroupManageGroupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageGroupPageRoutingModule", function () {
      return ManageGroupPageRoutingModule;
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


    var _manage_group_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./manage-group.page */
    "./src/app/pages/manage-group/manage-group.page.ts");

    var routes = [{
      path: '',
      component: _manage_group_page__WEBPACK_IMPORTED_MODULE_3__["ManageGroupPage"]
    }];

    var ManageGroupPageRoutingModule = function ManageGroupPageRoutingModule() {
      _classCallCheck(this, ManageGroupPageRoutingModule);
    };

    ManageGroupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ManageGroupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/manage-group/manage-group.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/manage-group/manage-group.module.ts ***!
    \***********************************************************/

  /*! exports provided: ManageGroupPageModule */

  /***/
  function srcAppPagesManageGroupManageGroupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageGroupPageModule", function () {
      return ManageGroupPageModule;
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


    var _manage_group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./manage-group-routing.module */
    "./src/app/pages/manage-group/manage-group-routing.module.ts");
    /* harmony import */


    var _manage_group_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./manage-group.page */
    "./src/app/pages/manage-group/manage-group.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var ManageGroupPageModule = function ManageGroupPageModule() {
      _classCallCheck(this, ManageGroupPageModule);
    };

    ManageGroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _manage_group_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageGroupPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
      declarations: [_manage_group_page__WEBPACK_IMPORTED_MODULE_6__["ManageGroupPage"]]
    })], ManageGroupPageModule);
    /***/
  },

  /***/
  "./src/app/pages/manage-group/manage-group.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/manage-group/manage-group.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesManageGroupManageGroupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1ncm91cC9tYW5hZ2UtZ3JvdXAucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/manage-group/manage-group.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/manage-group/manage-group.page.ts ***!
    \*********************************************************/

  /*! exports provided: ManageGroupPage */

  /***/
  function srcAppPagesManageGroupManageGroupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageGroupPage", function () {
      return ManageGroupPage;
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


    var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");

    var ManageGroupPage =
    /*#__PURE__*/
    function () {
      function ManageGroupPage(authService, navCtrl, alertController, loadingController, alertService, storageService, requestService) {
        _classCallCheck(this, ManageGroupPage);

        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.alertService = alertService;
        this.storageService = storageService;
        this.requestService = requestService;
        this.groupName = '';
        this.dataList = [];
        this.pagination = 1;
      }

      _createClass(ManageGroupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.userID = this.authService.user["id"];
          this.initGroupQuery();
        }
      }, {
        key: "initGroupQuery",
        value: function initGroupQuery() {
          var _this = this;

          this.presentLoading();
          this.dataList = [];
          this.pagination = 1;
          this.requestService.getGroup(this.userID, this.pagination).subscribe(function (res) {
            _this.httpResponse = res;
          }, function (err) {
            if (err.error.message) {
              _this.alertService.presentToast(err.error.message, "danger");
            } else {
              _this.alertService.presentToast(err.message, "danger");
            }

            _this.loading.dismiss();
          }, function () {
            for (var i = 0; i < _this.httpResponse.groups.length; i++) {
              _this.dataList.push(_this.httpResponse.groups[i]);
            }

            console.log(_this.dataList);
            _this.pagination++;

            _this.loading.dismiss();
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this2 = this;

          this.requestService.getGroup(this.userID, this.pagination).subscribe(function (res) {
            _this2.httpResponse = res;
          }, function (err) {
            if (err.error.message) {
              _this2.alertService.presentToast(err.error.message, "danger");
            } else {
              _this2.alertService.presentToast(err.message, "danger");
            }

            _this2.loading.dismiss();
          }, function () {
            for (var i = 0; i < _this2.httpResponse.groups.length; i++) {
              _this2.dataList.push(_this2.httpResponse.groups[i]);
            }

            event.target.complete();

            if (_this2.httpResponse.length < 40) {
              event.target.disabled = true;
            }

            _this2.pagination++;
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.navigateBack('dashboard/tabs/home');
        }
      }, {
        key: "addGroup",
        value: function addGroup() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Enter group name!',
                      inputs: [{
                        name: 'groupName',
                        type: "text",
                        placeholder: 'Group Name'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Create',
                        handler: function handler(data) {
                          _this3.groupName = data.groupName;

                          _this3.requestService.createGroup(_this3.groupName).subscribe(function (res) {
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
        key: "deleteGroup",
        value: function deleteGroup(groupID, groupName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Do you want to delete ' + groupName + '?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Delete',
                        handler: function handler(data) {
                          _this4.requestService.deleteGroup(groupID).subscribe(function (res) {
                            _this4.httpResponse = res;
                          }, function (err) {
                            if (err.error.message) {
                              _this4.alertService.presentToast(err.error.message, "danger");
                            } else {
                              _this4.alertService.presentToast(err.message, "danger");
                            }

                            _this4.loading.dismiss();
                          }, function () {
                            _this4.initGroupQuery();
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
        key: "editGroup",
        value: function editGroup(groupID, groupName) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this5 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Enter group name!',
                      inputs: [{
                        name: 'groupName',
                        type: "text",
                        placeholder: 'Group Name',
                        value: groupName
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Update',
                        handler: function handler(data) {
                          _this5.groupName = data.groupName;

                          _this5.requestService.updateGroup(groupID, _this5.groupName).subscribe(function (res) {
                            _this5.httpResponse = res;
                          }, function (err) {
                            if (err.error.message) {
                              _this5.alertService.presentToast(err.error.message, "danger");
                            } else {
                              _this5.alertService.presentToast(err.message, "danger");
                            }

                            _this5.loading.dismiss();
                          }, function () {
                            _this5.initGroupQuery();
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
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait',
                      duration: 10000
                    });

                  case 2:
                    this.loading = _context4.sent;
                    _context4.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return ManageGroupPage;
    }();

    ManageGroupPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
      }];
    };

    ManageGroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-group.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group/manage-group.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-group.page.scss */
      "./src/app/pages/manage-group/manage-group.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]])], ManageGroupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-manage-group-manage-group-module-es5.js.map