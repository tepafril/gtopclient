(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" class=\"ion-padding ion-hide-lg-up\">\n\n    <ion-tab-button tab=\"home\">\n      <ion-icon src=\"assets/themify-icons/SVG/home.svg\"></ion-icon>\n      <ion-label>{{ 'APP.home' | translate }}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"traffic\">\n        <ion-icon src=\"assets/themify-icons/SVG/video-camera.svg\"></ion-icon>\n        <ion-label>{{ 'APP.traffic' | translate }}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"support\">\n        <ion-icon src=\"assets/themify-icons/SVG/headphone-alt.svg\"></ion-icon>\n        <ion-label>{{ 'APP.support' | translate }}</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon src=\"assets/themify-icons/SVG/user.svg\"></ion-icon>\n      <ion-label>{{ 'APP.profile' | translate }}</ion-label>\n    </ion-tab-button>\n    \n  </ion-tab-bar>\n</ion-tabs>\n\n\n");

/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab {\n  bottom: 28px;\n  left: calc(50% - 8px);\n}\n\nion-fab-button {\n  --padding-bottom: 30px;\n  --padding-top: 30px;\n  --padding-end: 30px;\n  --padding-start: 30px;\n  --border-color: #427C89;\n  --border-width: 4px;\n  --border-style: solid;\n}\n\n.odad-cashier-button {\n  font-size: 12px;\n  padding-top: 38px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURDQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFie1xuICAgIGJvdHRvbTogMjhweDtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDhweCk7ICAgXG59XG5pb24tZmFiLWJ1dHRvbntcbiAgICAtLXBhZGRpbmctYm90dG9tOiAgIDMwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogICAgICAzMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6ICAgICAgMzBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6ICAgIDMwcHg7XG4gICAgLS1ib3JkZXItY29sb3JcdDogICAjNDI3Qzg5O1xuICAgIC0tYm9yZGVyLXdpZHRoXHQ6IDRweDtcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5vZGFkLWNhc2hpZXItYnV0dG9ue1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIHBhZGRpbmctdG9wOjM4cHg7XG59IiwiaW9uLWZhYiB7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogY2FsYyg1MCUgLSA4cHgpO1xufVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIC0tcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIC0tcGFkZGluZy10b3A6IDMwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDMwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMzBweDtcbiAgLS1ib3JkZXItY29sb3I6ICM0MjdDODk7XG4gIC0tYm9yZGVyLXdpZHRoOiA0cHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLm9kYWQtY2FzaGllci1idXR0b24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctdG9wOiAzOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TabsPage);



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./../pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts")).then(m => m.DashboardPageModule)
            },
            {
                path: 'support',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-support-support-module */ "pages-support-support-module").then(__webpack_require__.bind(null, /*! ./../pages/support/support.module */ "./src/app/pages/support/support.module.ts")).then(m => m.SupportPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-profile-profile-module */ "pages-profile-profile-module").then(__webpack_require__.bind(null, /*! ./../pages/profile/profile.module */ "./src/app/pages/profile/profile.module.ts")).then(m => m.ProfilePageModule)
            },
            {
                path: 'traffic',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-traffic-traffic-module */ "pages-traffic-traffic-module").then(__webpack_require__.bind(null, /*! ./../pages/traffic/traffic.module */ "./src/app/pages/traffic/traffic.module.ts")).then(m => m.TrafficPageModule)
            },
            {
                path: '',
                redirectTo: 'tabs/home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/home',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map