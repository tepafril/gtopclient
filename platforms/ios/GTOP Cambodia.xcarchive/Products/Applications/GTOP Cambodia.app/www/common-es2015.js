(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-8ac363fb.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-8ac363fb.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-80bde1aa.js */ "./node_modules/@ionic/core/dist/esm/core-80bde1aa.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-098458fb-js */ "ios-transition-098458fb-js").then(__webpack_require__.bind(null, /*! ./ios.transition-098458fb.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-098458fb.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-8e7e16e2-js */ "md-transition-8e7e16e2-js").then(__webpack_require__.bind(null, /*! ./md.transition-8e7e16e2.js */ "./node_modules/@ionic/core/dist/esm/md.transition-8e7e16e2.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    const trans = animationBuilder(opts.baseEl, opts);
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => resolve(currentStep === 1));
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
            return {
                r: 20,
                cx: 48,
                cy: 48,
                fill: 'none',
                viewBox: '24 24 48 48',
                transform: 'translate(0,0)',
                style: {}
            };
        }
    },
    'crescent': {
        dur: 750,
        circles: 1,
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <img src=\"/assets/header-logo-green.jpg\" class=\"ion-hide-md-up\">\n\n  <ion-text color=\"dark\">\n    <h2 class=\"ion-text-center\">{{ 'LOGIN_PAGE.login_into_app' | translate }}</h2>\n  </ion-text>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\" class=\"ion-padding\">\n    <ion-item>\n      <ion-text color=\"success\">\n        <h5 class=\"ion-text-center\">{{ 'LOGIN_PAGE.enter_phone_password' | translate }}</h5>\n      </ion-text>\n      <ion-label position=\"floating\">{{ 'APP.phone_number' | translate }}</ion-label>\n      <ion-input ngModel type=\"tel\" name=\"phone\" required></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'APP.password' | translate }}</ion-label>\n      <ion-input ngModel type=\"password\" name=\"password\" required></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"success\" type=\"submit\">{{ 'APP.login' | translate }}</ion-button>\n    <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" (click)=\"dismissLogin()\"><ion-icon  src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon> &nbsp;&nbsp;&nbsp;&nbsp; {{ 'APP.back' | translate }}</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-title>\n      Assign Item\n    </ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/close.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    \n    <ion-list>\n      <ion-item *ngIf=\"dataList?.length == 0\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          {{ 'APP.no_data' | translate }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item-group *ngFor=\"let item of dataList\">\n        <ion-item button (click)=\"attachItem(item.id)\" *ngIf=\"item.isAttached == false\">\n          <ion-label>\n            <h2>{{ item.name }} ({{ item.plate }})</h2>\n            <p>IMEI {{ item.imei }}</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"item.isAttached == true\" class=\"disabled\">\n          <ion-label>\n            <h2>{{ item.name }} ({{ item.plate }})</h2>\n            <p>IMEI {{ item.imei }}</p>\n          </ion-label>\n          <ion-icon slot=\"end\" class=\"bell-button\" src=\"assets/themify-icons/SVG/check-box.svg\"></ion-icon>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-help/pending-help.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-help/pending-help.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <div slot=\"start\">\n      <ion-img alt=\"logo\" style=\"height: 28px; width: 90px;\" src=\"assets/gps-logo.png\"></ion-img>\n    </div>\n\n      <ion-title>\n        ជំនួយ\n      </ion-title>\n    \n    \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/close.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trip-detail/trip-detail.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trip-detail/trip-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text color=\"dark\">{{ 'TRIP_PAGE.distance' | translate }}</ion-text>\n          </ion-col>\n          <ion-col class=\"ion-text-left\">\n            <ion-text color=\"success\">{{distance}} {{ 'TRIP_PAGE.km' | translate }}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text color=\"dark\">{{ 'TRIP_PAGE.avg_speed' | translate }}</ion-text>\n          </ion-col>\n          <ion-col class=\"ion-text-left\">\n            <ion-text color=\"success\">{{ averageSpeed }} {{ 'TRIP_PAGE.kmh' | translate }}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text color=\"dark\">{{ 'TRIP_PAGE.max_speed' | translate }}</ion-text>\n          </ion-col>\n          <ion-col class=\"ion-text-left\">\n            <ion-text color=\"success\">{{maxSpeed}} {{ 'TRIP_PAGE.kmh' | translate }}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lower-content {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  left: 0;\n  right: 0;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG93ZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59IiwiLmxvd2VyLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");







let LoginPage = class LoginPage {
    constructor(platform, modalController, authService, navCtrl, alertService, loadingController, oneSignal, firebaseAuthentication, toastController) {
        this.platform = platform;
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.loadingController = loadingController;
        this.oneSignal = oneSignal;
        this.firebaseAuthentication = firebaseAuthentication;
        this.toastController = toastController;
    }
    ngOnInit() {
    }
    // // Dismiss Login Modal
    dismissLogin() {
        this.modalController.dismiss();
    }
    login(form) {
        this.presentLoading();
        this.phoneNumber = form.value.phone;
        this.authService.verifyPhone(this.phoneNumber).subscribe(data => {
            this.httpResponse = data;
            this.phoneNumber = this.httpResponse.phone;
            this.authService.login(this.phoneNumber, form.value.password).subscribe(data => {
                this.httpResponse = data;
            }, err => {
                if (err.error.message) {
                    this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>", "danger");
                }
                else {
                    this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>", "danger");
                }
                this.loading.dismiss();
            }, () => {
                this.alertService.presentToast("<ion-text>" + this.httpResponse.message + "</ion-text>", "success");
                this.loading.dismiss();
                this.dismissLogin();
                // console.log("USERID: "+this.authService.user.id);
                if (this.platform.is('cordova')) {
                    this.oneSignal.setExternalUserId(this.authService.user.id);
                }
                if (this.authService.isLoggedIn) {
                    this.navCtrl.navigateRoot('/dashboard');
                }
            });
        }, err => {
            console.log(err);
            if (err.error.message) {
                this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>", "danger");
            }
            else {
                this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>", "danger");
            }
            this.loading.dismiss();
        });
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
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"] },
    { type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"],
        _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], LoginPage);



/***/ }),

/***/ "./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1ncm91cC1hc3NpZ24taXRlbS9tYW5hZ2UtZ3JvdXAtYXNzaWduLWl0ZW0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ManageGroupAssignItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageGroupAssignItemPage", function() { return ManageGroupAssignItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");






let ManageGroupAssignItemPage = class ManageGroupAssignItemPage {
    constructor(authService, modalController, requestService, alertService, navParams, loadingController) {
        this.authService = authService;
        this.modalController = modalController;
        this.requestService = requestService;
        this.alertService = alertService;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.dataList = [];
        this.pagination = 1;
    }
    ngOnInit() {
        this.presentLoading();
        this.groupItems = this.navParams.get('groupItems');
        this.groupID = this.navParams.get('groupID');
    }
    ionViewWillEnter() {
        this.userID = this.authService.user["id"];
        this.initGroupQuery();
    }
    dismiss() {
        this.modalController.dismiss();
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
    initGroupQuery() {
        this.dataList = [];
        this.pagination = 1;
        this.requestService.getUserItems(this.pagination).subscribe(res => {
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
            for (let i = 0; i < this.httpResponse.items.length; i++) {
                this.httpResponse.items[i].isAttached = false;
                for (let j = 0; j < this.groupItems.length; j++) {
                    if (this.httpResponse.items[i].id == this.groupItems[j]) {
                        this.httpResponse.items[i].isAttached = true;
                    }
                }
                this.dataList.push(this.httpResponse.items[i]);
            }
            this.pagination++;
            this.loading.dismiss();
        });
    }
    loadData(event) {
        this.requestService.getGroup(this.userID, this.pagination).subscribe(res => {
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
            for (let i = 0; i < this.httpResponse.items.length; i++) {
                this.httpResponse.items[i].isAttached = false;
                for (let j = 0; j < this.groupItems.length; j++) {
                    if (this.httpResponse.items[i].id == this.groupItems[j]) {
                        this.httpResponse.items[i].isAttached = true;
                    }
                }
                this.dataList.push(this.httpResponse.items[i]);
            }
            event.target.complete();
            if (this.httpResponse.length < 40) {
                event.target.disabled = true;
            }
            this.pagination++;
        });
    }
    attachItem(itemID) {
        this.requestService.attachItemToGroup(itemID, this.groupID).subscribe(res => {
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
            this.dismiss();
        });
    }
};
ManageGroupAssignItemPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ManageGroupAssignItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-group-assign-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-group-assign-item.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-group-assign-item.page.scss */ "./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], ManageGroupAssignItemPage);



/***/ }),

/***/ "./src/app/pages/pending-help/pending-help.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/pending-help/pending-help.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmctaGVscC9wZW5kaW5nLWhlbHAucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/pending-help/pending-help.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/pending-help/pending-help.page.ts ***!
  \*********************************************************/
/*! exports provided: PendingHelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingHelpPage", function() { return PendingHelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");




let PendingHelpPage = class PendingHelpPage {
    constructor(modalController, authService, navCtrl) {
        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.authService.getToken().then(() => {
            if (!this.authService.isLoggedIn) {
                this.navCtrl.navigateRoot('/landing');
            }
        });
    }
    ngOnInit() {
    }
    dismissModal() {
        this.modalController.dismiss();
    }
};
PendingHelpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PendingHelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pending-help',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pending-help.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-help/pending-help.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pending-help.page.scss */ "./src/app/pages/pending-help/pending-help.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], PendingHelpPage);



/***/ }),

/***/ "./src/app/pages/trip-detail/trip-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/trip-detail/trip-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-ios {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL3RyaXAtZGV0YWlsL3RyaXAtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHJpcC1kZXRhaWwvdHJpcC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyaXAtZGV0YWlsL3RyaXAtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWlvc3tcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59IiwiLmxpc3QtaW9zIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/trip-detail/trip-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/trip-detail/trip-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: TripDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TripDetailPage", function() { return TripDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let TripDetailPage = class TripDetailPage {
    constructor(navParams) {
        this.navParams = navParams;
        this.distance = this.navParams.get('distance');
        this.averageSpeed = this.navParams.get('averageSpeed');
        this.maxSpeed = this.navParams.get('maxSpeed');
    }
    ngOnInit() {
    }
};
TripDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
TripDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trip-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trip-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trip-detail/trip-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trip-detail.page.scss */ "./src/app/pages/trip-detail/trip-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], TripDetailPage);



/***/ }),

/***/ "./src/app/services/helper.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/helper.service.ts ***!
  \********************************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelperService = class HelperService {
    constructor() { }
    phpDateGMT7(theDate = new Date()) {
        let dateString = theDate.getFullYear();
        dateString += '-';
        if ((theDate.getMonth() + 1) < 10) {
            dateString += '0' + (theDate.getMonth() + 1).toString();
        }
        else {
            dateString += (theDate.getMonth() + 1).toString();
        }
        dateString += '-';
        if (theDate.getDate() < 10) {
            dateString += '0' + theDate.getDate().toString();
        }
        else {
            dateString += theDate.getDate().toString();
        }
        return dateString;
    }
    phpTimeGMT7(theDate = new Date()) {
        let dateString = '';
        if (theDate.getHours() < 10) {
            dateString += '0' + theDate.getHours().toString();
        }
        else {
            dateString += theDate.getHours().toString();
        }
        dateString += ':';
        if (theDate.getMinutes() < 10) {
            dateString += '0' + theDate.getMinutes().toString();
        }
        else {
            dateString += theDate.getMinutes().toString();
        }
        dateString += ':';
        if (theDate.getSeconds() < 10) {
            dateString += '0' + theDate.getSeconds().toString();
        }
        else {
            dateString += theDate.getSeconds().toString();
        }
        return dateString;
    }
};
HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HelperService);



/***/ }),

/***/ "./src/app/services/traccar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/traccar.service.ts ***!
  \*********************************************/
/*! exports provided: TraccarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraccarService", function() { return TraccarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");







let TraccarService = class TraccarService {
    constructor(http, storage, authService) {
        this.http = http;
        this.storage = storage;
        this.authService = authService;
        this.middleware = 'event/';
    }
    getTireMaintenance(deviceid, pagination) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'tire-maintenance', { headers: headers, params: { deviceid: deviceid, pagination: pagination } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(device => {
            return device;
        }));
    }
    getOilMaintenance(deviceid, pagination) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'oil-maintenance', { headers: headers, params: { deviceid: deviceid, pagination: pagination } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(device => {
            return device;
        }));
    }
    getIgnition(deviceid, pagination) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'ignition/' + deviceid + '/' + pagination, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(device => {
            return device;
        }));
    }
    getOverspeed(deviceid, pagination) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'overspeed/' + deviceid + '/' + pagination, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(device => {
            return device;
        }));
    }
    getParking(deviceid, from, to) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'parking-alarm', { headers: headers, params: { deviceid: deviceid, from: from, to: to } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(device => {
            return device;
        }));
    }
    getTrip(deviceid, from, to) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'trips', { headers: headers, params: { deviceid: deviceid, from: from, to: to } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(device => {
            return device;
        }));
    }
    getSummary(deviceid, from, to) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
        });
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'summary', { headers: headers, params: { deviceid: deviceid, from: from, to: to } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(device => {
            return device;
        }));
    }
    getMyDevices(q = '') {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
        });
        let options = { headers: headers };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'item/my-devices', null, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(devices => {
            return devices;
        }));
    }
};
TraccarService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
TraccarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], TraccarService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map