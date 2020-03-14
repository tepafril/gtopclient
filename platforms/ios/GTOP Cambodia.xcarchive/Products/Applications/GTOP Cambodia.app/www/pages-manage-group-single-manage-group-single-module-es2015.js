(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-group-single-manage-group-single-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-single/manage-group-single.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-single/manage-group-single.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ groupName }}\n    </ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"addUser()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/user.svg\"></ion-icon>\n      </ion-button>\n      <ion-button (click)=\"addItem()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/plus.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <!-- Date Segment Title -->\n  <ion-row class=\"ion-padding\">\n    <ion-col size=\"12\">\n      <ion-segment mode=\"ios\" color=\"primary\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"device\" checked>\n          <ion-label>\n            យានយន្ត\n          </ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"user\">\n          <ion-label>\n            អ្នកប្រើប្រាស់\n          </ion-label>\n        </ion-segment-button>\n      </ion-segment>  \n    </ion-col>\n  </ion-row>\n\n      \n  <ion-list class=\"margin-top-25\">\n    <!-- Speed History Header Title -->\n    <ion-item>\n      <ion-icon *ngIf=\"segmentVal == 'user'\" slot=\"start\" src=\"assets/themify-icons/SVG/user.svg\"></ion-icon>\n      <ion-icon *ngIf=\"segmentVal == 'device'\" slot=\"start\" src=\"assets/themify-icons/SVG/location-pin.svg\"></ion-icon>\n      <ion-label>\n        <ion-text color=\"dark\" *ngIf=\"segmentVal == 'user'\">\n          អ្នកប្រើប្រាស់\n        </ion-text>\n        <ion-text color=\"dark\" *ngIf=\"segmentVal == 'device'\">\n          យានយន្ត\n        </ion-text>\n      </ion-label>\n    </ion-item>\n\n    <!-- Data List -->\n    <ion-item-sliding *ngFor=\"let item of dataList let i = index\">\n\n      <ion-item-options side=\"end\" *ngIf=\"segmentVal == 'user'\">\n        <ion-item-option color=\"danger\" (click)=\"detachUser(item.id, item.name)\">Delete</ion-item-option>\n      </ion-item-options>\n\n      <ion-item-options side=\"end\" *ngIf=\"segmentVal == 'device'\">\n        <ion-item-option color=\"danger\" (click)=\"detachItem(item.id, item.name)\">Delete</ion-item-option>\n      </ion-item-options>\n\n      <ion-item>\n        <ion-label>\n          <ion-row>\n            <ion-col size=\"6\" class=\"ion-text-left\">\n              <ion-text color=\"dark\">\n                {{ item.name }}\n              </ion-text>\n            </ion-col>\n          </ion-row>\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n\n    <ion-item *ngIf=\"dataList?.length == 0\">\n      <ion-col size=\"12\" class=\"ion-text-center\">\n        {{ 'APP.no_data' | translate }}\n      </ion-col>\n    </ion-item>\n  </ion-list>\n \n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/manage-group-single/manage-group-single-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/manage-group-single/manage-group-single-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ManageGroupSinglePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageGroupSinglePageRoutingModule", function() { return ManageGroupSinglePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _manage_group_single_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-group-single.page */ "./src/app/pages/manage-group-single/manage-group-single.page.ts");




const routes = [
    {
        path: '',
        component: _manage_group_single_page__WEBPACK_IMPORTED_MODULE_3__["ManageGroupSinglePage"]
    }
];
let ManageGroupSinglePageRoutingModule = class ManageGroupSinglePageRoutingModule {
};
ManageGroupSinglePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManageGroupSinglePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/manage-group-single/manage-group-single.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/manage-group-single/manage-group-single.module.ts ***!
  \*************************************************************************/
/*! exports provided: ManageGroupSinglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageGroupSinglePageModule", function() { return ManageGroupSinglePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _manage_group_single_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-group-single-routing.module */ "./src/app/pages/manage-group-single/manage-group-single-routing.module.ts");
/* harmony import */ var _manage_group_single_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-group-single.page */ "./src/app/pages/manage-group-single/manage-group-single.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _manage_group_assign_item_manage_group_assign_item_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../manage-group-assign-item/manage-group-assign-item.page */ "./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.ts");









let ManageGroupSinglePageModule = class ManageGroupSinglePageModule {
};
ManageGroupSinglePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manage_group_single_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageGroupSinglePageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_manage_group_single_page__WEBPACK_IMPORTED_MODULE_6__["ManageGroupSinglePage"], _manage_group_assign_item_manage_group_assign_item_page__WEBPACK_IMPORTED_MODULE_8__["ManageGroupAssignItemPage"]],
        entryComponents: [_manage_group_assign_item_manage_group_assign_item_page__WEBPACK_IMPORTED_MODULE_8__["ManageGroupAssignItemPage"]]
    })
], ManageGroupSinglePageModule);



/***/ }),

/***/ "./src/app/pages/manage-group-single/manage-group-single.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/manage-group-single/manage-group-single.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1ncm91cC1zaW5nbGUvbWFuYWdlLWdyb3VwLXNpbmdsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/manage-group-single/manage-group-single.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/manage-group-single/manage-group-single.page.ts ***!
  \***********************************************************************/
/*! exports provided: ManageGroupSinglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageGroupSinglePage", function() { return ManageGroupSinglePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var _manage_group_assign_item_manage_group_assign_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../manage-group-assign-item/manage-group-assign-item.page */ "./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.ts");







let ManageGroupSinglePage = class ManageGroupSinglePage {
    constructor(navCtrl, alertController, activatedRoute, loadingController, alertService, requestService, modalController) {
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
    ngOnInit() {
        this.groupID = this.activatedRoute.snapshot.paramMap.get('id');
        this.groupName = this.activatedRoute.snapshot.paramMap.get('name');
    }
    ionViewWillEnter() {
        this.segmentVal = "device";
        this.dataList = [];
        this.groupItems = [];
        this.initGroupQuery();
    }
    goBack() {
        this.navCtrl.navigateBack('/manage-group');
    }
    addUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Enter user\'s phone number to let them view this group.',
                inputs: [
                    {
                        name: 'phoneNumber',
                        type: "text",
                        placeholder: 'User\'s Phone Number'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Add User',
                        handler: (data) => {
                            this.phoneNumber = data.phoneNumber;
                            this.requestService.attachUserToGroup(this.phoneNumber, this.groupID).subscribe(res => {
                                this.httpResponse = res;
                            }, err => {
                                if (err.error.message) {
                                    this.alertService.presentToast(err.error.message, "danger");
                                }
                                else {
                                    this.alertService.presentToast(err.message, "danger");
                                }
                                this.loading.dismiss();
                            }, () => {
                                this.initGroupQuery();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    detachUser(userID, userName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Do you want to delete ' + userName + '?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Delete',
                        handler: (data) => {
                            this.requestService.detachUserFromGroup(this.groupID, userID).subscribe(res => {
                                this.httpResponse = res;
                            }, err => {
                                if (err.error.message) {
                                    this.alertService.presentToast(err.error.message, "danger");
                                }
                                else {
                                    this.alertService.presentToast(err.message, "danger");
                                }
                                this.loading.dismiss();
                            }, () => {
                                this.initGroupQuery();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    detachItem(itemID, itemName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Do you want to delete ' + itemName + '?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                        }
                    }, {
                        text: 'Delete',
                        handler: (data) => {
                            this.requestService.detachItemFromGroup(this.groupID, itemID).subscribe(res => {
                                this.httpResponse = res;
                            }, err => {
                                if (err.error.message) {
                                    this.alertService.presentToast(err.error.message, "danger");
                                }
                                else {
                                    this.alertService.presentToast(err.message, "danger");
                                }
                                this.loading.dismiss();
                            }, () => {
                                this.initGroupQuery();
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    addItem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const assignItemModal = yield this.modalController.create({
                component: _manage_group_assign_item_manage_group_assign_item_page__WEBPACK_IMPORTED_MODULE_6__["ManageGroupAssignItemPage"],
                componentProps: {
                    groupItems: this.groupItems,
                    groupID: this.groupID
                }
            });
            assignItemModal.onDidDismiss().then(() => {
                this.initGroupQuery();
            }).catch(err => {
                console.log(err);
            });
            return yield assignItemModal.present();
        });
    }
    segmentChanged(ev) {
        this.segmentVal = ev.target.value;
        if (this.segmentVal == "user") {
            this.dataList = [];
            this.initGroupQuery();
        }
        else if (this.segmentVal == "device") {
            this.dataList = [];
            this.initGroupQuery();
        }
        else {
            this.dataList = [];
        }
    }
    initGroupQuery() {
        this.presentLoading();
        this.groupItems = [];
        this.dataList = [];
        this.pagination = 1;
        if (this.segmentVal == "user") {
            this.requestService.getGroupUsers(this.groupID, this.pagination).subscribe(res => {
                this.httpResponse = res;
            }, err => {
                if (err.error.message) {
                    this.alertService.presentToast(err.error.message, "danger");
                }
                else {
                    this.alertService.presentToast(err.message, "danger");
                }
                this.loading.dismiss();
            }, () => {
                for (let i = 0; i < this.httpResponse.groups.length; i++) {
                    this.httpResponse.groups[i].name = this.httpResponse.groups[i].name + " (" + this.httpResponse.groups[i].phone + ")";
                    this.dataList.push(this.httpResponse.groups[i]);
                }
                this.pagination++;
                this.loading.dismiss();
            });
        }
        else {
            this.requestService.getGroupDevices(this.groupID, this.pagination).subscribe(res => {
                this.httpResponse = res;
            }, err => {
                if (err.error.message) {
                    this.alertService.presentToast(err.error.message, "danger");
                }
                else {
                    this.alertService.presentToast(err.message, "danger");
                }
                this.loading.dismiss();
            }, () => {
                for (let i = 0; i < this.httpResponse.groups.length; i++) {
                    this.groupItems.push(this.httpResponse.groups[i].id);
                    this.httpResponse.groups[i].name = this.httpResponse.groups[i].name + " (" + this.httpResponse.groups[i].plate + ")";
                    this.dataList.push(this.httpResponse.groups[i]);
                }
                this.pagination++;
                this.loading.dismiss();
            });
        }
    }
    loadData(event) {
        if (this.segmentVal == "user") {
            this.requestService.getGroupUsers(this.groupID, this.pagination).subscribe(res => {
                this.httpResponse = res;
            }, err => {
                if (err.error.message) {
                    this.alertService.presentToast(err.error.message, "danger");
                }
                else {
                    this.alertService.presentToast(err.message, "danger");
                }
                this.loading.dismiss();
            }, () => {
                for (let i = 0; i < this.httpResponse.groups.length; i++) {
                    this.dataList.push(this.httpResponse.groups[i]);
                }
                event.target.complete();
                if (this.httpResponse.length < 40) {
                    event.target.disabled = true;
                }
                this.pagination++;
            });
        }
        else {
            this.requestService.getGroupDevices(this.groupID, this.pagination).subscribe(res => {
                this.httpResponse = res;
            }, err => {
                if (err.error.message) {
                    this.alertService.presentToast(err.error.message, "danger");
                }
                else {
                    this.alertService.presentToast(err.message, "danger");
                }
                this.loading.dismiss();
            }, () => {
                for (let i = 0; i < this.httpResponse.groups.length; i++) {
                    this.groupItems.push(this.httpResponse.groups[i].id);
                    this.dataList.push(this.httpResponse.groups[i]);
                }
                event.target.complete();
                if (this.httpResponse.length < 40) {
                    event.target.disabled = true;
                }
                this.pagination++;
            });
        }
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Please wait',
                duration: 10000
            });
            yield this.loading.present();
        });
    }
};
ManageGroupSinglePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ManageGroupSinglePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-group-single',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-group-single.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-single/manage-group-single.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-group-single.page.scss */ "./src/app/pages/manage-group-single/manage-group-single.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        src_app_services_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ManageGroupSinglePage);



/***/ })

}]);
//# sourceMappingURL=pages-manage-group-single-manage-group-single-module-es2015.js.map