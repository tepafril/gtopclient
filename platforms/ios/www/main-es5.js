function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-language/choose-language.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-language/choose-language.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesChooseLanguageChooseLanguagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-list>\n    <ion-item button detail=\"false\" (click)=\"setLanguage('en')\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/flag-en.jpg\">\n      </ion-avatar>\n      <ion-label class=\"ion-text-wrap\">English</ion-label>\n    </ion-item>\n\n    <ion-item button detail=\"false\" (click)=\"setLanguage('kh')\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/flag-kh.jpg\">\n      </ion-avatar>\n      <ion-label class=\"ion-text-wrap\">Khmer</ion-label>\n    </ion-item>\n\n    <ion-item button detail=\"false\" (click)=\"setLanguage('zh')\">\n      <ion-avatar slot=\"start\">\n        <img src=\"assets/img/flag-zh.jpg\">\n      </ion-avatar>\n      <ion-label class=\"ion-text-wrap\">Chinese</ion-label>\n    </ion-item>\n\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-device/select-device.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-device/select-device.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSelectDeviceSelectDevicePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n    \n    <!-- <ion-buttons slot=\"start\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/close.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n\n    <ion-title>\n      Select Device\n    </ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\" color=\"light\">\n        Done\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group [(ngModel)]=\"selectItem\" value=\"{{selectItem}}\">\n      <ion-item *ngFor=\"let item of dataList\">\n        <ion-label>{{ item.name }} ({{ item.plate }})</ion-label>\n        <ion-radio mode=\"md\" slot=\"start\" disabled *ngIf=\"item.isDisabled\"></ion-radio>\n        <ion-radio mode=\"md\" (ionFocus)=\"ionSelect()\" slot=\"start\" value=\"{{ item.id }}\" *ngIf=\"!item.isDisabled\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./guard/auth.guard */
    "./src/app/guard/auth.guard.ts");

    var routes = [{
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full'
    }, {
      path: 'landing',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-landing-landing-module */
        [__webpack_require__.e("default~pages-landing-landing-module~pages-register-register-module"), __webpack_require__.e("default~pages-forgetpassword-forgetpassword-module~pages-landing-landing-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-landing-landing-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/landing/landing.module */
        "./src/app/pages/landing/landing.module.ts")).then(function (m) {
          return m.LandingPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-login-login-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'register',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-register-register-module */
        [__webpack_require__.e("default~pages-landing-landing-module~pages-register-register-module"), __webpack_require__.e("pages-register-register-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | tabs-tabs-module */
        "tabs-tabs-module").then(__webpack_require__.bind(null,
        /*! ./tabs/tabs.module */
        "./src/app/tabs/tabs.module.ts")).then(function (m) {
          return m.TabsPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'geolocation',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-geolocation-geolocation-module */
        [__webpack_require__.e("default~pages-geolocation-geolocation-module~pages-history-history-module"), __webpack_require__.e("pages-geolocation-geolocation-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/geolocation/geolocation.module */
        "./src/app/pages/geolocation/geolocation.module.ts")).then(function (m) {
          return m.GeolocationPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'history',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-history-history-module */
        [__webpack_require__.e("default~pages-geolocation-geolocation-module~pages-history-history-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-history-history-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/history/history.module */
        "./src/app/pages/history/history.module.ts")).then(function (m) {
          return m.HistoryPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'disarm',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-disarm-disarm-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-disarm-disarm-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/disarm/disarm.module */
        "./src/app/pages/disarm/disarm.module.ts")).then(function (m) {
          return m.DisarmPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'fuel',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-fuel-fuel-module */
        "pages-fuel-fuel-module").then(__webpack_require__.bind(null,
        /*! ./pages/fuel/fuel.module */
        "./src/app/pages/fuel/fuel.module.ts")).then(function (m) {
          return m.FuelPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'device',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-device-device-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-device-device-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/device/device.module */
        "./src/app/pages/device/device.module.ts")).then(function (m) {
          return m.DevicePageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'forgetpassword',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-forgetpassword-forgetpassword-module */
        [__webpack_require__.e("default~pages-forgetpassword-forgetpassword-module~pages-landing-landing-module"), __webpack_require__.e("pages-forgetpassword-forgetpassword-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/forgetpassword/forgetpassword.module */
        "./src/app/pages/forgetpassword/forgetpassword.module.ts")).then(function (m) {
          return m.ForgetpasswordPageModule;
        });
      }
    }, {
      path: 'pagenotfound',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pagenotfound-pagenotfound-module */
        "pages-pagenotfound-pagenotfound-module").then(__webpack_require__.bind(null,
        /*! ./pages/pagenotfound/pagenotfound.module */
        "./src/app/pages/pagenotfound/pagenotfound.module.ts")).then(function (m) {
          return m.PagenotfoundPageModule;
        });
      }
    }, {
      path: 'pending',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-pending-pending-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-pending-pending-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/pending/pending.module */
        "./src/app/pages/pending/pending.module.ts")).then(function (m) {
          return m.PendingPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'pending-help',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-pending-help-pending-help-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-pending-help-pending-help-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/pending-help/pending-help.module */
        "./src/app/pages/pending-help/pending-help.module.ts")).then(function (m) {
          return m.PendingHelpPageModule;
        });
      }
    }, {
      path: 'choose-language',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-choose-language-choose-language-module */
        "pages-choose-language-choose-language-module").then(__webpack_require__.bind(null,
        /*! ./pages/choose-language/choose-language.module */
        "./src/app/pages/choose-language/choose-language.module.ts")).then(function (m) {
          return m.ChooseLanguagePageModule;
        });
      }
    }, {
      path: 'engine',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-engine-engine-module */
        "pages-engine-engine-module").then(__webpack_require__.bind(null,
        /*! ./pages/engine/engine.module */
        "./src/app/pages/engine/engine.module.ts")).then(function (m) {
          return m.EnginePageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'edit-profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-edit-profile-edit-profile-module */
        "pages-edit-profile-edit-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/edit-profile/edit-profile.module */
        "./src/app/pages/edit-profile/edit-profile.module.ts")).then(function (m) {
          return m.EditProfilePageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'change-password',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-change-password-change-password-module */
        "pages-change-password-change-password-module").then(__webpack_require__.bind(null,
        /*! ./pages/change-password/change-password.module */
        "./src/app/pages/change-password/change-password.module.ts")).then(function (m) {
          return m.ChangePasswordPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'my-balance',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-my-balance-my-balance-module */
        "pages-my-balance-my-balance-module").then(__webpack_require__.bind(null,
        /*! ./pages/my-balance/my-balance.module */
        "./src/app/pages/my-balance/my-balance.module.ts")).then(function (m) {
          return m.MyBalancePageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'notification',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-notification-notification-module */
        "pages-notification-notification-module").then(__webpack_require__.bind(null,
        /*! ./pages/notification/notification.module */
        "./src/app/pages/notification/notification.module.ts")).then(function (m) {
          return m.NotificationPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'manage-group',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-manage-group-manage-group-module */
        "pages-manage-group-manage-group-module").then(__webpack_require__.bind(null,
        /*! ./pages/manage-group/manage-group.module */
        "./src/app/pages/manage-group/manage-group.module.ts")).then(function (m) {
          return m.ManageGroupPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'manage-icon',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-manage-icon-manage-icon-module */
        "pages-manage-icon-manage-icon-module").then(__webpack_require__.bind(null,
        /*! ./pages/manage-icon/manage-icon.module */
        "./src/app/pages/manage-icon/manage-icon.module.ts")).then(function (m) {
          return m.ManageIconPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'speed',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-speed-speed-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-speed-speed-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/speed/speed.module */
        "./src/app/pages/speed/speed.module.ts")).then(function (m) {
          return m.SpeedPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'oil-maintenance',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-oil-maintenance-oil-maintenance-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-oil-maintenance-oil-maintenance-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/oil-maintenance/oil-maintenance.module */
        "./src/app/pages/oil-maintenance/oil-maintenance.module.ts")).then(function (m) {
          return m.OilMaintenancePageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'parking-alarm',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-parking-alarm-parking-alarm-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-parking-alarm-parking-alarm-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/parking-alarm/parking-alarm.module */
        "./src/app/pages/parking-alarm/parking-alarm.module.ts")).then(function (m) {
          return m.ParkingAlarmPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'trip',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-trip-trip-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-trip-trip-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/trip/trip.module */
        "./src/app/pages/trip/trip.module.ts")).then(function (m) {
          return m.TripPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'trip-detail',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-trip-detail-trip-detail-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-trip-detail-trip-detail-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/trip-detail/trip-detail.module */
        "./src/app/pages/trip-detail/trip-detail.module.ts")).then(function (m) {
          return m.TripDetailPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'tire-maintenance',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-tire-maintenance-tire-maintenance-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-tire-maintenance-tire-maintenance-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/tire-maintenance/tire-maintenance.module */
        "./src/app/pages/tire-maintenance/tire-maintenance.module.ts")).then(function (m) {
          return m.TireMaintenancePageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'summary',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-summary-summary-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-summary-summary-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/summary/summary.module */
        "./src/app/pages/summary/summary.module.ts")).then(function (m) {
          return m.SummaryPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'select-device',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-select-device-select-device-module */
        "pages-select-device-select-device-module").then(__webpack_require__.bind(null,
        /*! ./pages/select-device/select-device.module */
        "./src/app/pages/select-device/select-device.module.ts")).then(function (m) {
          return m.SelectDevicePageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'manage-group-assign-item',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-manage-group-assign-item-manage-group-assign-item-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-manage-group-assign-item-manage-group-assign-item-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/manage-group-assign-item/manage-group-assign-item.module */
        "./src/app/pages/manage-group-assign-item/manage-group-assign-item.module.ts")).then(function (m) {
          return m.ManageGroupAssignItemPageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'manage-group-single/:id/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-manage-group-single-manage-group-single-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-manage-group-single-manage-group-single-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/manage-group-single/manage-group-single.module */
        "./src/app/pages/manage-group-single/manage-group-single.module.ts")).then(function (m) {
          return m.ManageGroupSinglePageModule;
        });
      },
      canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu {\n  --background: #ffffff;\n}\n\nion-icon {\n  font-size: 28px;\n  margin-right: 15px;\n  line-height: 30px;\n}\n\nion-item {\n  margin: 12px 0px;\n  padding-left: 25px;\n  padding-right: 25px;\n  line-height: 30px;\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n}\n\n.active-item, .active-item ion-icon {\n  color: var(--ion-color-success);\n  --color: var(--ion-color-success);\n}\n\nion-toolbar {\n  --min-height:70px;\n  border-bottom: 0px solid #DDDDDD;\n  --background:#ffffff;\n}\n\nion-title {\n  font-size: 18px;\n  text-align: center;\n  font-weight: 400;\n  line-height: 30px;\n  text-transform: uppercase;\n  color: #66615B;\n}\n\nion-list {\n  margin-bottom: 0px;\n}\n\n.padding-left-15 {\n  padding-left: 15px;\n}\n\nion-footer ion-title {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURBQTtFQUNJLCtCQUFBO0VBQ0EsaUNBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQ0dKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBREFBO0VBQ0ksa0JBQUE7QUNHSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEQ0k7RUFDSSxlQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudXtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5pb24taWNvbntcbiAgICBmb250LXNpemU6IDI4cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuaW9uLWl0ZW17XG4gICAgbWFyZ2luOiAxMnB4IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uYWN0aXZlLWl0ZW0sIC5hY3RpdmUtaXRlbSBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbmlvbi10b29sYmFye1xuICAgIC0tbWluLWhlaWdodDo3MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjREREREREO1xuICAgIC0tYmFja2dyb3VuZDojZmZmZmZmO1xufVxuXG5pb24tdGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICM2NjYxNUI7XG59XG5cbmlvbi1saXN0e1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnBhZGRpbmctbGVmdC0xNXtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi1mb290ZXJ7XG4gICAgaW9uLXRpdGxle1xuICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICB9XG59IiwiaW9uLW1lbnUge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbjogMTJweCAwcHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFjdGl2ZS1pdGVtLCAuYWN0aXZlLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1taW4taGVpZ2h0OjcwcHg7XG4gIGJvcmRlci1ib3R0b206IDBweCBzb2xpZCAjREREREREO1xuICAtLWJhY2tncm91bmQ6I2ZmZmZmZjtcbn1cblxuaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzY2NjE1Qjtcbn1cblxuaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5wYWRkaW5nLWxlZnQtMTUge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_language_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/language.service */
    "./src/app/services/language.service.ts");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(platform, splashScreen, statusBar, menuCtrl, authService, navCtrl, oneSignal, alertCtrl, alertService, languageService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.alertService = alertService;
        this.languageService = languageService;
        this.appPages = [{
          title: 'គណនីខ្ញុំ',
          url: '/profile',
          icon: 'user'
        }, {
          title: 'សុពលភាព',
          url: '/',
          icon: ''
        }, {
          title: 'ប្តូរភាសា',
          url: '/',
          icon: ''
        }, {
          title: 'ចាកចេញ',
          url: '/list',
          icon: ''
        }];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            if (_this.platform.is('cordova')) {
              _this.setupPush();

              _this.statusBar.styleDefault();

              _this.splashScreen.hide();

              _this.menuCtrl.enable(false); // this.menuCtrl.swipeEnable(false);


              _this.menuCtrl.swipeGesture(false);
            }

            _this.authService.getToken();

            _this.languageService.initAppLanguage();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setupPush",
        value: function setupPush() {
          // I recommend to put these into your environment.ts
          this.oneSignal.startInit(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["ENV"].ONESIGNAL.appId, _environments_environment__WEBPACK_IMPORTED_MODULE_9__["ENV"].ONESIGNAL.googleProjectNumber);
          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None); // Notifcation was received in general

          this.oneSignal.handleNotificationReceived().subscribe(function (data) {
            var msg = data.payload.body;
            var title = data.payload.title;
            var additionalData = data.payload.additionalData; // this.showAlert(title, msg, additionalData.task);
          }); // Notification was really clicked/opened

          this.oneSignal.handleNotificationOpened().subscribe(function (data) {
            // Just a note that the data is a different place here!
            var additionalData = data.notification.payload.additionalData; // this.showAlert('Notification opened', 'You already read this before', additionalData.task);
          }); // this.oneSignal.setExternalUserId("3");

          this.oneSignal.addSubscriptionObserver().subscribe(function (state) {
            // this.showAlert('Notification opened', 'Player ID ' + state.to.userId, state.to.userId);
            if (!state.from.subscribed && state.to.subscribed) {// this.showAlert('Notification opened', 'Player ID ' + state.to.userId, state.to.userId);
            }
          });
          this.oneSignal.endInit();
        }
      }, {
        key: "showAlert",
        value: function showAlert(title, msg, task) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: title,
                      subHeader: msg,
                      buttons: [{
                        text: "Action: ".concat(task),
                        handler: function handler() {// E.g: Navigate to a specific screen
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: _services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _services_language_service__WEBPACK_IMPORTED_MODULE_7__["LanguageService"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/badge/ngx */
    "./node_modules/@ionic-native/badge/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var ngx_qrcode2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-qrcode2 */
    "./node_modules/ngx-qrcode2/index.js");
    /* harmony import */


    var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic-native/safari-view-controller/ngx */
    "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
    /* harmony import */


    var _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ionic-native/launch-navigator/ngx */
    "./node_modules/@ionic-native/launch-navigator/ngx/index.js");
    /* harmony import */


    var _pages_select_device_select_device_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/select-device/select-device.page */
    "./src/app/pages/select-device/select-device.page.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pages_choose_language_choose_language_page__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/choose-language/choose-language.page */
    "./src/app/pages/choose-language/choose-language.page.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @ionic-native/firebase-authentication/ngx */
    "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_14__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _pages_choose_language_choose_language_page__WEBPACK_IMPORTED_MODULE_20__["ChooseLanguagePage"], _pages_select_device_select_device_page__WEBPACK_IMPORTED_MODULE_18__["SelectDevicePage"]],
      entryComponents: [_pages_choose_language_choose_language_page__WEBPACK_IMPORTED_MODULE_20__["ChooseLanguagePage"], _pages_select_device_select_device_page__WEBPACK_IMPORTED_MODULE_18__["SelectDevicePage"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_22__["ENV"].FIREBASE, 'test'), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(), ngx_qrcode2__WEBPACK_IMPORTED_MODULE_15__["NgxQRCodeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
        }
      })],
      providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_24__["Geolocation"], _ionic_native_launch_navigator_ngx__WEBPACK_IMPORTED_MODULE_17__["LaunchNavigator"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_16__["SafariViewController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_11__["Badge"], _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_23__["FirebaseAuthentication"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/guard/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/guard/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var currentUser = this.authService.isLoggedIn;

          if (currentUser) {
            // authorised so return true
            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/landing']);
          return false;
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          return true;
        }
      }, {
        key: "canLoad",
        value: function canLoad(route, segments) {
          return true;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/pages/choose-language/choose-language.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/choose-language/choose-language.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesChooseLanguageChooseLanguagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-ios {\n  margin-bottom: 0px;\n}\n\nion-list {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvY2hvb3NlLWxhbmd1YWdlL2Nob29zZS1sYW5ndWFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Nob29zZS1sYW5ndWFnZS9jaG9vc2UtbGFuZ3VhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Nob29zZS1sYW5ndWFnZS9jaG9vc2UtbGFuZ3VhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaW9ze1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbmlvbi1saXN0e1xuICAgIHBhZGRpbmctdG9wOjE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206MTVweDtcbn0iLCIubGlzdC1pb3Mge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/choose-language/choose-language.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/choose-language/choose-language.page.ts ***!
    \***************************************************************/

  /*! exports provided: ChooseLanguagePage */

  /***/
  function srcAppPagesChooseLanguageChooseLanguagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChooseLanguagePage", function () {
      return ChooseLanguagePage;
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


    var src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/language.service */
    "./src/app/services/language.service.ts");

    var ChooseLanguagePage =
    /*#__PURE__*/
    function () {
      function ChooseLanguagePage(popoverController, languageService) {
        _classCallCheck(this, ChooseLanguagePage);

        this.popoverController = popoverController;
        this.languageService = languageService;
      }

      _createClass(ChooseLanguagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissPopover",
        value: function dismissPopover() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.popoverController.dismiss();

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(lang) {
          this.languageService.setLanguage(lang);
          this.dismissPopover();
        }
      }]);

      return ChooseLanguagePage;
    }();

    ChooseLanguagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]
      }];
    };

    ChooseLanguagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-choose-language',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./choose-language.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-language/choose-language.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./choose-language.page.scss */
      "./src/app/pages/choose-language/choose-language.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_services_language_service__WEBPACK_IMPORTED_MODULE_3__["LanguageService"]])], ChooseLanguagePage);
    /***/
  },

  /***/
  "./src/app/pages/select-device/select-device.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/pages/select-device/select-device.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSelectDeviceSelectDevicePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGVjdC1kZXZpY2Uvc2VsZWN0LWRldmljZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/select-device/select-device.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/select-device/select-device.page.ts ***!
    \***********************************************************/

  /*! exports provided: SelectDevicePage */

  /***/
  function srcAppPagesSelectDeviceSelectDevicePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDevicePage", function () {
      return SelectDevicePage;
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


    var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/request.service */
    "./src/app/services/request.service.ts");
    /* harmony import */


    var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/storage.service */
    "./src/app/services/storage.service.ts");

    var SelectDevicePage =
    /*#__PURE__*/
    function () {
      function SelectDevicePage(authService, requestService, modalController, alertService, storageService, navParams, loadingController) {
        _classCallCheck(this, SelectDevicePage);

        this.authService = authService;
        this.requestService = requestService;
        this.modalController = modalController;
        this.alertService = alertService;
        this.storageService = storageService;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.dataList = [];
        this.pagination = 1;
        this.currentItems = [];
        this.selectedItems = [];
        this.selectItem = 0;
        this.currentItem = 0;
      }

      _createClass(SelectDevicePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.moduleName = this.navParams.get('moduleName');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          this.presentLoading(); // Get Current Item from Storage

          this.storageService.setItem().subscribe(function (res) {
            _this2.currentItems = [_this2.storageService.current_item.id];
            _this2.selectItem = _this2.storageService.current_item.id;
          }, function (err) {
            console.log(err);
          }, function () {
            _this2.userID = _this2.authService.user["id"];

            _this2.initGroupQuery();
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          var item;

          for (var i = 0; i < this.dataList.length; i++) {
            if (this.selectItem == this.dataList[i].id) {
              item = this.dataList[i];
            }
          }

          if (this.selectItem > 0) {
            this.dataList = [];
            this.pagination = 1;
            this.selectedItems = [];
            this.modalController.dismiss(item);
          } else {
            alert("Please select a device!");
          }
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait',
                      duration: 10000
                    });

                  case 2:
                    this.loading = _context3.sent;
                    _context3.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "initGroupQuery",
        value: function initGroupQuery() {
          var _this3 = this;

          this.dataList = [];
          this.pagination = 1;
          this.selectedItems = [];
          this.requestService.getUserItems(this.pagination).subscribe(function (res) {
            _this3.httpResponse = res;
          }, function (err) {
            if (err.error.message) {
              _this3.alertService.presentToast(err.error.message, "danger");
            } else {
              _this3.alertService.presentToast(err.message, "danger");
            }

            _this3.loading.dismiss();
          }, function () {
            for (var i = 0; i < _this3.httpResponse.items.length; i++) {
              switch (_this3.moduleName) {
                case "module_geolocation":
                  if (_this3.httpResponse.items[i].module_geolocation == 0) _this3.httpResponse.items[i].isDisabled = true;
                  break;

                case "module_history":
                  if (_this3.httpResponse.items[i].module_history == 0) _this3.httpResponse.items[i].isDisabled = true;
                  break;

                case "module_ignition":
                  if (_this3.httpResponse.items[i].module_ignition == 0) _this3.httpResponse.items[i].isDisabled = true;
                  break;

                case "module_parking":
                  if (_this3.httpResponse.items[i].module_parking == 0) _this3.httpResponse.items[i].isDisabled = true;
                  break;

                case "module_trip":
                  if (_this3.httpResponse.items[i].module_trip == 0) _this3.httpResponse.items[i].isDisabled = true;
                  break;

                case "module_oil":
                  if (_this3.httpResponse.items[i].module_oil == 0) _this3.httpResponse.items[i].isDisabled = true;
                  break;

                case "module_tire":
                  if (_this3.httpResponse.items[i].module_tire == 0) _this3.httpResponse.items[i].isDisabled = true;
                  break;

                case "module_speed":
                  if (_this3.httpResponse.items[i].module_speed == 0) _this3.httpResponse.items[i].isDisabled = true;
                  break;

                case "module_summary":
                  if (_this3.httpResponse.items[i].module_summary == 0) _this3.httpResponse.items[i].isDisabled = true;
                  break;

                case "module_icon":
                  if (_this3.httpResponse.items[i].module_icon == 0) _this3.httpResponse.items[i].isDisabled = true;
                  break;

                default:
                  _this3.httpResponse.items[i].isDisabled = false;
                  break;
              }

              _this3.httpResponse.items[i].isChecked = false;

              for (var j = 0; j < _this3.currentItems.length; j++) {
                if (_this3.httpResponse.items[i].id == _this3.currentItems[j]) {
                  _this3.selectedItems.push(_this3.httpResponse.items[i].id);

                  _this3.httpResponse.items[i].isChecked = true;
                }
              }

              _this3.dataList.push(_this3.httpResponse.items[i]);
            }

            _this3.pagination++;

            _this3.loading.dismiss();
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this4 = this;

          this.requestService.getGroup(this.userID, this.pagination).subscribe(function (res) {
            _this4.httpResponse = res;
          }, function (err) {
            if (err.error.message) {
              _this4.alertService.presentToast(err.error.message, "danger");
            } else {
              _this4.alertService.presentToast(err.message, "danger");
            }

            _this4.loading.dismiss();
          }, function () {
            for (var i = 0; i < _this4.httpResponse.items.length; i++) {
              _this4.httpResponse.items[i].isChecked = false;

              for (var j = 0; j < _this4.currentItems.length; j++) {
                if (_this4.httpResponse.items[i].id == _this4.currentItems[j]) {
                  _this4.selectedItems.push(_this4.httpResponse.items[i].id);

                  _this4.httpResponse.items[i].isChecked = true;
                }
              }

              _this4.dataList.push(_this4.httpResponse.items[i]);
            }

            event.target.complete();

            if (_this4.httpResponse.length < 40) {
              event.target.disabled = true;
            }

            _this4.pagination++;
          });
        }
      }, {
        key: "ionSelect",
        value: function ionSelect() {
          this.currentItem = this.selectItem;
        }
      }, {
        key: "onChange",
        value: function onChange(event, itemID) {
          // if(event.target.checked)
          // {
          //   let exist = false;
          //   for(let i=0; i<this.selectedItems.length; i++)
          //   {
          //     if( itemID == this.selectedItems[i] )
          //       exist = true;
          //   }
          //   if(!exist)
          //     this.selectedItems.push(itemID);
          // }
          // else{
          //   // remove itemID
          //   const index = this.selectedItems.indexOf(itemID);
          //   if (index > -1) {
          //     this.selectedItems.splice(index, 1);
          //   }
          // }
          for (var i = 0; i < this.dataList.length; i++) {
            if (itemID != this.dataList[i].id) this.dataList[i].isChecked = false;else this.dataList[i].isChecked = true;
          }

          console.log(this.selectedItems);
        }
      }]);

      return SelectDevicePage;
    }();

    SelectDevicePage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    SelectDevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-select-device',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./select-device.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/select-device/select-device.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./select-device.page.scss */
      "./src/app/pages/select-device/select-device.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], SelectDevicePage);
    /***/
  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
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

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService(toastController) {
        _classCallCheck(this, AlertService);

        this.toastController = toastController;
      }

      _createClass(AlertService, [{
        key: "presentToast",
        value: function presentToast(message) {
          var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'primary';
          var intervalDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var toast;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: intervalDuration,
                      position: 'top',
                      color: color
                    });

                  case 2:
                    toast = _context4.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentBottomToast",
        value: function presentBottomToast(message) {
          var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'primary';
          var intervalDuration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var toast;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.toastController.create({
                      message: message,
                      duration: intervalDuration,
                      position: 'bottom',
                      color: color
                    });

                  case 2:
                    toast = _context5.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], AlertService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http, storage) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.storage = storage;
        this.isLoggedIn = false;
        this.isVerified = 'false';
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(phone, password) {
          var _this5 = this;

          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/login', {
            phone: phone,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            var response = res;
            var token = {};
            token["access_token"] = response["access_token"];
            token["token_type"] = response["token_type"];
            token["expires_at"] = response["expires_at"];

            _this5.storage.set('token', token).then(function () {
              console.log('Token Stored');
            }, function (error) {
              return console.error('Error storing item', error);
            });

            _this5.storage.set('user', response["user"]).then(function () {
              console.log('User Stored');
            }, function (error) {
              return console.error('Error storing item', error);
            });

            _this5.user = response["user"];
            _this5.token = token;
            _this5.isLoggedIn = true;
            return token;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this6 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/logout', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this6.storage.remove('token').then(function () {
              console.log('Token Stored');
            }, function (error) {
              return console.error('Error storing item', error);
            });

            _this6.isLoggedIn = false;
            delete _this6.token;
            return data;
          }));
        }
      }, {
        key: "changePassword",
        value: function changePassword(password, newPassword, confirmPassword) {
          var _this7 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/change-password', {
            headers: headers,
            params: {
              old_password: password,
              password: newPassword,
              password_confirmation: confirmPassword
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this7.storage.remove('token').then(function () {
              console.log('Token Stored');
            }, function (error) {
              return console.error('Error storing item', error);
            });

            _this7.isLoggedIn = false;
            delete _this7.token;
            return data;
          }));
        }
      }, {
        key: "editProfile",
        value: function editProfile(name, gender, dob, email) {
          var _this8 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/edit-profile', {
            headers: headers,
            params: {
              name: name,
              gender: gender,
              dob: dob,
              email: email
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            var user = res;

            _this8.storage.set('user', user["user"]).then(function () {
              _this8.user = user["user"];
            }, function (error) {
              return console.error('Error storing item', error);
            });

            return res;
          }));
        } // user() {
        //   const headers = new HttpHeaders({
        //     'Authorization': this.token["token_type"]+" "+this.token["access_token"]
        //   });
        //   return this.http.get<User>(ENDPOINT.API_URL + 'auth/user', { headers: headers })
        //   .pipe(
        //     tap(user => {
        //       return user;
        //     })
        //   )
        // }

      }, {
        key: "getToken",
        value: function getToken() {
          var _this9 = this;

          return this.storage.get('token').then(function (data) {
            _this9.token = data;

            if (_this9.token != null) {
              _this9.isLoggedIn = true;
            } else {
              _this9.isLoggedIn = false;
            } // this.isVerified = this.token["is_verified"];

          }, function (error) {
            _this9.token = null;
            _this9.isLoggedIn = false;
          });
        }
      }, {
        key: "clearToken",
        value: function clearToken() {
          this.isLoggedIn = false;
          this.token["access_token"] = "";
          this.storage.set('token', this.token).then(function () {
            console.log('Token Stored');
          }, function (error) {
            return console.error('Error storing item', error);
          });
        }
      }, {
        key: "isUserVerified",
        value: function isUserVerified() {
          var _this10 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/is-user-verified', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (token) {
            var tempToken = token;

            _this10.storage.set('token', token).then(function () {
              // if( tempToken.is_verified != null )
              //   this.isVerified = tempToken.is_verified;
              // else
              //   this.isVerified = 'false';
              console.log('Token Stored ' + _this10.isVerified);
            }, function (error) {
              return console.error('Error storing item', error);
            });

            _this10.token = token;
            return token;
          }));
        }
      }, {
        key: "checkPassport",
        value: function checkPassport() {
          var _this11 = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.token["token_type"] + " " + this.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/check-passport', {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (res) {
            var user = res;

            _this11.storage.set('user', user["user"]).then(function () {
              _this11.user = user["user"];
            }, function (error) {
              return console.error('Error storing item', error);
            });

            return res;
          }));
        }
      }, {
        key: "register",
        value: function register(token, password, confirmPassword) {
          var appName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'gtopclient';
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/register', {
            token: token,
            password: password,
            password_confirmation: confirmPassword,
            app_name: appName
          });
        }
      }, {
        key: "verifyToken",
        value: function verifyToken(token) {
          var appName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'gtopclient';
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/verify-token', {
            token: token,
            app_name: appName
          });
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(token, password, confirmPassword) {
          var appName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'gtopclient';
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/reset-password', {
            token: token,
            password: password,
            password_confirmation: confirmPassword,
            app_name: appName
          });
        }
      }, {
        key: "verifyPhone",
        value: function verifyPhone(phone) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/verify-phone', {
            phone: phone
          });
        }
      }, {
        key: "isPhoneAvailable",
        value: function isPhoneAvailable(phone) {
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'auth/is-phone-available', {
            phone: phone
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]])], AuthService);
    /***/
  },

  /***/
  "./src/app/services/language.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/language.service.ts ***!
    \**********************************************/

  /*! exports provided: LanguageService */

  /***/
  function srcAppServicesLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return LanguageService;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var LANGUAGE_KEY = 'en';

    var LanguageService =
    /*#__PURE__*/
    function () {
      function LanguageService(translate, storage) {
        _classCallCheck(this, LanguageService);

        this.translate = translate;
        this.storage = storage;
        this.currentLocale = '';
      }

      _createClass(LanguageService, [{
        key: "initAppLanguage",
        value: function initAppLanguage() {
          var _this12 = this;

          var language = this.translate.getBrowserLang();
          this.translate.setDefaultLang('en');
          this.storage.get(LANGUAGE_KEY).then(function (val) {
            if (val) {
              _this12.setLanguage(val);

              _this12.currentLocale = val;
            }
          });
        }
      }, {
        key: "getLanguages",
        value: function getLanguages() {
          return [{
            text: 'English',
            value: 'en',
            img: ''
          }, {
            text: 'Khmer',
            value: 'kh',
            img: ''
          }, {
            text: 'Chinese',
            value: 'zh',
            img: ''
          }];
        }
      }, {
        key: "setLanguage",
        value: function setLanguage(language) {
          this.translate.use(language);
          this.currentLocale = language;
          this.storage.set(LANGUAGE_KEY, language);
        }
      }]);

      return LanguageService;
    }();

    LanguageService.ctorParameters = function () {
      return [{
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }];
    };

    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])], LanguageService);
    /***/
  },

  /***/
  "./src/app/services/request.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/request.service.ts ***!
    \*********************************************/

  /*! exports provided: RequestService */

  /***/
  function srcAppServicesRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestService", function () {
      return RequestService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");

    var RequestService =
    /*#__PURE__*/
    function () {
      function RequestService(http, storage, authService) {
        _classCallCheck(this, RequestService);

        this.http = http;
        this.storage = storage;
        this.authService = authService;
      }

      _createClass(RequestService, [{
        key: "setIcon",
        value: function setIcon(deviceID, iconName, iconSize) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          var data = {
            deviceid: deviceID,
            icon_name: iconName,
            icon_size: iconSize
          };
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'item/set-icon', data, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "getGroup",
        value: function getGroup(userid, pagination) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/get-groups/' + userid + '/' + pagination, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "createGroup",
        value: function createGroup() {
          var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          var options = {
            headers: headers,
            params: {
              "name": name
            }
          };
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/create-group', null, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (devices) {
            return devices;
          }));
        }
      }, {
        key: "updateGroup",
        value: function updateGroup(id) {
          var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          var options = {
            headers: headers,
            params: {
              "id": id,
              "name": name
            }
          };
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/update-group', null, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (devices) {
            return devices;
          }));
        }
      }, {
        key: "deleteGroup",
        value: function deleteGroup() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/delete-group/' + id, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (devices) {
            return devices;
          }));
        }
      }, {
        key: "getGroupDevices",
        value: function getGroupDevices(groupid, pagination) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/get-group-devices/' + groupid + '/' + pagination, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "getGroupUsers",
        value: function getGroupUsers(groupid, pagination) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/get-group-users/' + groupid + '/' + pagination, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "attachUserToGroup",
        value: function attachUserToGroup(phoneNumber, groupID) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          var options = {
            headers: headers,
            params: {
              "phone": phoneNumber,
              "group_id": groupID
            }
          };
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/attach-user-to-group', null, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (devices) {
            return devices;
          }));
        }
      }, {
        key: "attachItemToGroup",
        value: function attachItemToGroup(itemID, groupID) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          var options = {
            headers: headers,
            params: {
              "item_id": itemID,
              "group_id": groupID
            }
          };
          return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/attach-item-to-group', null, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (devices) {
            return devices;
          }));
        }
      }, {
        key: "detachUserFromGroup",
        value: function detachUserFromGroup(groupID, userID) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/detach-user-from-group/' + groupID + "/" + userID, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (devices) {
            return devices;
          }));
        }
      }, {
        key: "detachItemFromGroup",
        value: function detachItemFromGroup(groupID, itemID) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/detach-item-from-group/' + groupID + "/" + itemID, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (devices) {
            return devices;
          }));
        }
      }, {
        key: "getUserItems",
        value: function getUserItems(pagination) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'group/get-user-items/' + pagination, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }]);

      return RequestService;
    }();

    RequestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    RequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], RequestService);
    /***/
  },

  /***/
  "./src/app/services/storage.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/storage.service.ts ***!
    \*********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var StorageService =
    /*#__PURE__*/
    function () {
      function StorageService(http, storage, authService) {
        _classCallCheck(this, StorageService);

        this.http = http;
        this.storage = storage;
        this.authService = authService;
        this.current_item = null;
      }

      _createClass(StorageService, [{
        key: "getItem",
        value: function getItem() {
          var _this13 = this;

          return this.storage.get('item').then(function (data) {
            _this13.current_item = data;
          }, function (error) {
            _this13.current_item = null;
          });
        }
      }, {
        key: "setItem",
        value: function setItem() {
          var _this14 = this;

          var passItem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (passItem == null) {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
            });
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["ENDPOINT"].API_URL + 'item/default', {
              headers: headers
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (res) {
              _this14.storage.set('item', res).then(function () {
                console.log(res);
              }, function (error) {
                return console.error('Error storing item', error);
              });

              _this14.current_item = res;
              console.log(_this14.current_item);
              return res;
            }));
          } else {
            this.storage.set('item', passItem).then(function () {}, function (error) {
              return console.error('Error storing item', error);
            });
            this.current_item = passItem;
          }
        }
      }]);

      return StorageService;
    }();

    StorageService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], StorageService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: ENV, ENDPOINT */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENV", function () {
      return ENV;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ENDPOINT", function () {
      return ENDPOINT;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var ENV = {
      production: true,
      FIREBASE: {
        apiKey: "AIzaSyChzU1UM-QJzahJ-TFxWiUiRq2nrnKBwyI",
        authDomain: "gtop-cambodia.firebaseapp.com",
        databaseURL: "https://gtop-cambodia.firebaseio.com",
        projectId: "gtop-cambodia",
        storageBucket: "gtop-cambodia.appspot.com",
        messagingSenderId: "43903908373",
        appId: "1:43903908373:web:6804b4526137ae73ffec1c",
        measurementId: "G-T8ZHDE80N2"
      },
      ONESIGNAL: {
        appId: "b2b625be-f138-43b7-be48-d11570b30bf2",
        googleProjectNumber: "1:43903908373:android:89cdae3ea6c16566ffec1c"
      }
    };
    var ENDPOINT = {
      API_URL: 'https://admin.gtopcambodia.com/api/',
      IMAGE: {
        ORIGINAL: "https://admin.gtopcambodia.com/uploads/images/original/",
        W400: "https://admin.gtopcambodia.com/uploads/images/w400/",
        THUMBNAIL: "https://admin.gtopcambodia.com/uploads/images/thumbnail/"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["ENV"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/tepafril/Documents/googlemap/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map