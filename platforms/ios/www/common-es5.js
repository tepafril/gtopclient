function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateC2e2e1f4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
        var el;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!delegate) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

              case 2:
                if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                  _context.next = 4;
                  break;
                }

                throw new Error('framework delegate is missing');

              case 4:
                el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                if (cssClasses) {
                  cssClasses.forEach(function (c) {
                    return el.classList.add(c);
                  });
                }

                if (componentProps) {
                  Object.assign(el, componentProps);
                }

                container.appendChild(el);

                if (!el.componentOnReady) {
                  _context.next = 11;
                  break;
                }

                _context.next = 11;
                return el.componentOnReady();

              case 11:
                return _context.abrupt("return", el);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function attachComponent(_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticC8f1473eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex3476b023Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(el) {
      return el.children != null ? el.children : el.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-8ac363fb.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-8ac363fb.js ***!
    \*************************************************************/

  /*! exports provided: d, g, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmIndex8ac363fbJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getIonPageElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "l", function () {
      return lifecycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return setPageHidden;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "t", function () {
      return transition;
    });
    /* harmony import */


    var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-80bde1aa.js */
    "./node_modules/@ionic/core/dist/esm/core-80bde1aa.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");

    var iosTransitionAnimation = function iosTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | ios-transition-098458fb-js */
      "ios-transition-098458fb-js").then(__webpack_require__.bind(null,
      /*! ./ios.transition-098458fb.js */
      "./node_modules/@ionic/core/dist/esm/ios.transition-098458fb.js"));
    };

    var mdTransitionAnimation = function mdTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | md-transition-8e7e16e2-js */
      "md-transition-8e7e16e2-js").then(__webpack_require__.bind(null,
      /*! ./md.transition-8e7e16e2.js */
      "./node_modules/@ionic/core/dist/esm/md.transition-8e7e16e2.js"));
    };

    var transition = function transition(opts) {
      return new Promise(function (resolve, reject) {
        Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          beforeTransition(opts);
          runTransition(opts).then(function (result) {
            if (result.animation) {
              result.animation.destroy();
            }

            afterTransition(opts);
            resolve(result);
          }, function (error) {
            afterTransition(opts);
            reject(error);
          });
        });
      });
    };

    var beforeTransition = function beforeTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      setZIndex(enteringEl, leavingEl, opts.direction);

      if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
      } else {
        enteringEl.classList.remove('can-go-back');
      }

      setPageHidden(enteringEl, false);

      if (leavingEl) {
        setPageHidden(leavingEl, false);
      }
    };

    var runTransition =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(opts) {
        var animationBuilder, ani;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return getAnimationBuilder(opts);

              case 2:
                animationBuilder = _context2.sent;
                ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

                return _context2.abrupt("return", ani);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function runTransition(_x6) {
        return _ref2.apply(this, arguments);
      };
    }();

    var afterTransition = function afterTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    var getAnimationBuilder =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(opts) {
        var getAnimation;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", undefined);

              case 2:
                if (!opts.animationBuilder) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", opts.animationBuilder);

              case 4:
                if (!(opts.mode === 'ios')) {
                  _context3.next = 10;
                  break;
                }

                _context3.next = 7;
                return iosTransitionAnimation();

              case 7:
                _context3.t0 = _context3.sent.iosTransitionAnimation;
                _context3.next = 13;
                break;

              case 10:
                _context3.next = 12;
                return mdTransitionAnimation();

              case 12:
                _context3.t0 = _context3.sent.mdTransitionAnimation;

              case 13:
                getAnimation = _context3.t0;
                return _context3.abrupt("return", getAnimation);

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function getAnimationBuilder(_x7) {
        return _ref3.apply(this, arguments);
      };
    }();

    var animation =
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(animationBuilder, opts) {
        var trans, didComplete;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return waitForReady(opts, true);

              case 2:
                trans = animationBuilder(opts.baseEl, opts);
                fireWillEvents(opts.enteringEl, opts.leavingEl);
                _context4.next = 6;
                return playTransition(trans, opts);

              case 6:
                didComplete = _context4.sent;

                if (opts.progressCallback) {
                  opts.progressCallback(undefined);
                }

                if (didComplete) {
                  fireDidEvents(opts.enteringEl, opts.leavingEl);
                }

                return _context4.abrupt("return", {
                  hasCompleted: didComplete,
                  animation: trans
                });

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      return function animation(_x8, _x9) {
        return _ref4.apply(this, arguments);
      };
    }();

    var noAnimation =
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(opts) {
        var enteringEl, leavingEl;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                enteringEl = opts.enteringEl;
                leavingEl = opts.leavingEl;
                _context5.next = 4;
                return waitForReady(opts, false);

              case 4:
                fireWillEvents(enteringEl, leavingEl);
                fireDidEvents(enteringEl, leavingEl);
                return _context5.abrupt("return", {
                  hasCompleted: true
                });

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      return function noAnimation(_x10) {
        return _ref5.apply(this, arguments);
      };
    }();

    var waitForReady =
    /*#__PURE__*/
    function () {
      var _ref6 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(opts, defaultDeep) {
        var deep, promises;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
                promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
                _context6.next = 4;
                return Promise.all(promises);

              case 4:
                _context6.next = 6;
                return notifyViewReady(opts.viewIsReady, opts.enteringEl);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function waitForReady(_x11, _x12) {
        return _ref6.apply(this, arguments);
      };
    }();

    var notifyViewReady =
    /*#__PURE__*/
    function () {
      var _ref7 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(viewIsReady, enteringEl) {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!viewIsReady) {
                  _context7.next = 3;
                  break;
                }

                _context7.next = 3;
                return viewIsReady(enteringEl);

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      return function notifyViewReady(_x13, _x14) {
        return _ref7.apply(this, arguments);
      };
    }();

    var playTransition = function playTransition(trans, opts) {
      var progressCallback = opts.progressCallback;
      var promise = new Promise(function (resolve) {
        trans.onFinish(function (currentStep) {
          return resolve(currentStep === 1);
        });
      }); // cool, let's do this, start the transition

      if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
      } else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
      } // create a callback for when the animation is done


      return promise;
    };

    var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    };

    var lifecycle = function lifecycle(el, eventName) {
      if (el) {
        var ev = new CustomEvent(eventName, {
          bubbles: false,
          cancelable: false
        });
        el.dispatchEvent(ev);
      }
    };

    var shallowReady = function shallowReady(el) {
      if (el && el.componentOnReady) {
        return el.componentOnReady();
      }

      return Promise.resolve();
    };

    var deepReady =
    /*#__PURE__*/
    function () {
      var _ref8 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(el) {
        var element, stencilEl;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                element = el;

                if (!element) {
                  _context8.next = 10;
                  break;
                }

                if (!(element.componentOnReady != null)) {
                  _context8.next = 8;
                  break;
                }

                _context8.next = 5;
                return element.componentOnReady();

              case 5:
                stencilEl = _context8.sent;

                if (!(stencilEl != null)) {
                  _context8.next = 8;
                  break;
                }

                return _context8.abrupt("return");

              case 8:
                _context8.next = 10;
                return Promise.all(Array.from(element.children).map(deepReady));

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      return function deepReady(_x15) {
        return _ref8.apply(this, arguments);
      };
    }();

    var setPageHidden = function setPageHidden(el, hidden) {
      if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
      } else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
      }
    };

    var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
      if (enteringEl !== undefined) {
        enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
      }

      if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
      }
    };

    var getIonPageElement = function getIonPageElement(element) {
      if (element.classList.contains('ion-page')) {
        return element;
      }

      var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

      if (ionPage) {
        return ionPage;
      } // idk, return the original element so at least something animates and we don't have a null pointer


      return element;
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js ***!
    \***********************************************************************/

  /*! exports provided: S */

  /***/
  function node_modulesIonicCoreDistEsmSpinnerConfigs28520d80Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S", function () {
      return SPINNERS;
    });

    var spinners = {
      'bubbles': {
        dur: 1000,
        circles: 9,
        fn: function fn(dur, index, total) {
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          var angle = 2 * Math.PI * index / total;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circles': {
        dur: 1000,
        circles: 8,
        fn: function fn(dur, index, total) {
          var step = index / total;
          var animationDelay = "".concat(dur * step - dur, "ms");
          var angle = 2 * Math.PI * step;
          return {
            r: 5,
            style: {
              'top': "".concat(9 * Math.sin(angle), "px"),
              'left': "".concat(9 * Math.cos(angle), "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: function fn() {
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
        fn: function fn() {
          return {
            r: 26,
            style: {}
          };
        }
      },
      'dots': {
        dur: 750,
        circles: 3,
        fn: function fn(_, index) {
          var animationDelay = -(110 * index) + 'ms';
          return {
            r: 6,
            style: {
              'left': "".concat(9 - 9 * index, "px"),
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 17,
            y2: 29,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      },
      'lines-small': {
        dur: 1000,
        lines: 12,
        fn: function fn(dur, index, total) {
          var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
          var animationDelay = "".concat(dur * index / total - dur, "ms");
          return {
            y1: 12,
            y2: 20,
            style: {
              'transform': transform,
              'animation-delay': animationDelay
            }
          };
        }
      }
    };
    var SPINNERS = spinners;
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme18cbe2ccJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL =
    /*#__PURE__*/
    function () {
      var _ref10 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(url, ev, direction) {
        var router;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                  _context9.next = 5;
                  break;
                }

                router = document.querySelector('ion-router');

                if (!router) {
                  _context9.next = 5;
                  break;
                }

                if (ev != null) {
                  ev.preventDefault();
                }

                return _context9.abrupt("return", router.push(url, direction));

              case 5:
                return _context9.abrupt("return", false);

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      return function openURL(_x16, _x17, _x18) {
        return _ref10.apply(this, arguments);
      };
    }();
    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <img src=\"/assets/header-logo-green.jpg\" class=\"ion-hide-md-up\">\n\n  <ion-text color=\"dark\">\n    <h2 class=\"ion-text-center\">{{ 'LOGIN_PAGE.login_into_app' | translate }}</h2>\n  </ion-text>\n\n  <form #form=\"ngForm\" (ngSubmit)=\"login(form)\" method=\"post\" class=\"ion-padding\">\n    <ion-item>\n      <ion-text color=\"success\">\n        <h5 class=\"ion-text-center\">{{ 'LOGIN_PAGE.enter_phone_password' | translate }}</h5>\n      </ion-text>\n      <ion-label position=\"floating\">{{ 'APP.phone_number' | translate }}</ion-label>\n      <ion-input ngModel type=\"tel\" name=\"phone\" required></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label position=\"floating\">{{ 'APP.password' | translate }}</ion-label>\n      <ion-input ngModel type=\"password\" name=\"password\" required></ion-input>\n    </ion-item>\n\n    <ion-button expand=\"full\" color=\"success\" type=\"submit\">{{ 'APP.login' | translate }}</ion-button>\n    <ion-button fill=\"clear\" color=\"dark\" expand=\"full\" (click)=\"dismissLogin()\"><ion-icon  src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon> &nbsp;&nbsp;&nbsp;&nbsp; {{ 'APP.back' | translate }}</ion-button>\n  </form>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesManageGroupAssignItemManageGroupAssignItemPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-title>\n      Assign Item\n    </ion-title>\n    \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/close.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    \n    <ion-list>\n      <ion-item *ngIf=\"dataList?.length == 0\">\n        <ion-col size=\"12\" class=\"ion-text-center\">\n          {{ 'APP.no_data' | translate }}\n        </ion-col>\n      </ion-item>\n\n      <ion-item-group *ngFor=\"let item of dataList\">\n        <ion-item button (click)=\"attachItem(item.id)\" *ngIf=\"item.isAttached == false\">\n          <ion-label>\n            <h2>{{ item.name }} ({{ item.plate }})</h2>\n            <p>IMEI {{ item.imei }}</p>\n          </ion-label>\n        </ion-item>\n\n        <ion-item *ngIf=\"item.isAttached == true\" class=\"disabled\">\n          <ion-label>\n            <h2>{{ item.name }} ({{ item.plate }})</h2>\n            <p>IMEI {{ item.imei }}</p>\n          </ion-label>\n          <ion-icon slot=\"end\" class=\"bell-button\" src=\"assets/themify-icons/SVG/check-box.svg\"></ion-icon>\n        </ion-item>\n      </ion-item-group>\n    </ion-list>\n \n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"{{ 'APP.load_more_data' | translate }}\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-help/pending-help.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-help/pending-help.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPendingHelpPendingHelpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <div slot=\"start\">\n      <ion-img alt=\"logo\" style=\"height: 28px; width: 90px;\" src=\"assets/gps-logo.png\"></ion-img>\n    </div>\n\n      <ion-title>\n        ជំនួយ\n      </ion-title>\n    \n    \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/close.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trip-detail/trip-detail.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trip-detail/trip-detail.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTripDetailTripDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text color=\"dark\">{{ 'TRIP_PAGE.distance' | translate }}</ion-text>\n          </ion-col>\n          <ion-col class=\"ion-text-left\">\n            <ion-text color=\"success\">{{distance}} {{ 'TRIP_PAGE.km' | translate }}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text color=\"dark\">{{ 'TRIP_PAGE.avg_speed' | translate }}</ion-text>\n          </ion-col>\n          <ion-col class=\"ion-text-left\">\n            <ion-text color=\"success\">{{ averageSpeed }} {{ 'TRIP_PAGE.kmh' | translate }}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-text color=\"dark\">{{ 'TRIP_PAGE.max_speed' | translate }}</ion-text>\n          </ion-col>\n          <ion-col class=\"ion-text-left\">\n            <ion-text color=\"success\">{{maxSpeed}} {{ 'TRIP_PAGE.kmh' | translate }}</ion-text>\n          </ion-col>\n        </ion-row>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".lower-content {\n  position: absolute;\n  bottom: 0;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  left: 0;\n  right: 0;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG93ZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBjb2xvcjojZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59IiwiLmxvd2VyLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/firebase-authentication/ngx */
    "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(platform, modalController, authService, navCtrl, alertService, loadingController, oneSignal, firebaseAuthentication, toastController) {
        _classCallCheck(this, LoginPage);

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

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // // Dismiss Login Modal

      }, {
        key: "dismissLogin",
        value: function dismissLogin() {
          this.modalController.dismiss();
        }
      }, {
        key: "login",
        value: function login(form) {
          var _this = this;

          this.presentLoading();
          this.phoneNumber = form.value.phone;
          this.authService.verifyPhone(this.phoneNumber).subscribe(function (data) {
            _this.httpResponse = data;
            _this.phoneNumber = _this.httpResponse.phone;

            _this.authService.login(_this.phoneNumber, form.value.password).subscribe(function (data) {
              _this.httpResponse = data;
            }, function (err) {
              if (err.error.message) {
                _this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>", "danger");
              } else {
                _this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>", "danger");
              }

              _this.loading.dismiss();
            }, function () {
              _this.alertService.presentToast("<ion-text>" + _this.httpResponse.message + "</ion-text>", "success");

              _this.loading.dismiss();

              _this.dismissLogin(); // console.log("USERID: "+this.authService.user.id);


              if (_this.platform.is('cordova')) {
                _this.oneSignal.setExternalUserId(_this.authService.user.id);
              }

              if (_this.authService.isLoggedIn) {
                _this.navCtrl.navigateRoot('/dashboard');
              }
            });
          }, function (err) {
            console.log(err);

            if (err.error.message) {
              _this.alertService.presentToast("<ion-text>" + err.error.message + "</ion-text>", "danger");
            } else {
              _this.alertService.presentToast("<ion-text>" + err.message + "</ion-text>", "danger");
            }

            _this.loading.dismiss();
          });
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait',
                      duration: 10000
                    });

                  case 2:
                    this.loading = _context10.sent;
                    _context10.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"]
      }, {
        type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_5__["OneSignal"], _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_6__["FirebaseAuthentication"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], LoginPage);
    /***/
  },

  /***/
  "./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesManageGroupAssignItemManageGroupAssignItemPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1ncm91cC1hc3NpZ24taXRlbS9tYW5hZ2UtZ3JvdXAtYXNzaWduLWl0ZW0ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: ManageGroupAssignItemPage */

  /***/
  function srcAppPagesManageGroupAssignItemManageGroupAssignItemPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageGroupAssignItemPage", function () {
      return ManageGroupAssignItemPage;
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

    var ManageGroupAssignItemPage =
    /*#__PURE__*/
    function () {
      function ManageGroupAssignItemPage(authService, modalController, requestService, alertService, navParams, loadingController) {
        _classCallCheck(this, ManageGroupAssignItemPage);

        this.authService = authService;
        this.modalController = modalController;
        this.requestService = requestService;
        this.alertService = alertService;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.dataList = [];
        this.pagination = 1;
      }

      _createClass(ManageGroupAssignItemPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.presentLoading();
          this.groupItems = this.navParams.get('groupItems');
          this.groupID = this.navParams.get('groupID');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.userID = this.authService.user["id"];
          this.initGroupQuery();
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalController.dismiss();
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.loadingController.create({
                      message: 'Please wait',
                      duration: 10000
                    });

                  case 2:
                    this.loading = _context11.sent;
                    _context11.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "initGroupQuery",
        value: function initGroupQuery() {
          var _this2 = this;

          this.dataList = [];
          this.pagination = 1;
          this.requestService.getUserItems(this.pagination).subscribe(function (res) {
            _this2.httpResponse = res;
          }, function (err) {
            if (err.error.message) {
              _this2.alertService.presentToast(err.error.message, "danger");
            } else {
              _this2.alertService.presentToast(err.message, "danger");
            }

            _this2.loading.dismiss();
          }, function () {
            for (var i = 0; i < _this2.httpResponse.items.length; i++) {
              _this2.httpResponse.items[i].isAttached = false;

              for (var j = 0; j < _this2.groupItems.length; j++) {
                if (_this2.httpResponse.items[i].id == _this2.groupItems[j]) {
                  _this2.httpResponse.items[i].isAttached = true;
                }
              }

              _this2.dataList.push(_this2.httpResponse.items[i]);
            }

            _this2.pagination++;

            _this2.loading.dismiss();
          });
        }
      }, {
        key: "loadData",
        value: function loadData(event) {
          var _this3 = this;

          this.requestService.getGroup(this.userID, this.pagination).subscribe(function (res) {
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
              _this3.httpResponse.items[i].isAttached = false;

              for (var j = 0; j < _this3.groupItems.length; j++) {
                if (_this3.httpResponse.items[i].id == _this3.groupItems[j]) {
                  _this3.httpResponse.items[i].isAttached = true;
                }
              }

              _this3.dataList.push(_this3.httpResponse.items[i]);
            }

            event.target.complete();

            if (_this3.httpResponse.length < 40) {
              event.target.disabled = true;
            }

            _this3.pagination++;
          });
        }
      }, {
        key: "attachItem",
        value: function attachItem(itemID) {
          var _this4 = this;

          this.requestService.attachItemToGroup(itemID, this.groupID).subscribe(function (res) {
            _this4.httpResponse = res;
          }, function (err) {
            if (err.error.message) {
              _this4.alertService.presentToast(err.error.message, "danger");
            } else {
              _this4.alertService.presentToast(err.message, "danger");
            }

            _this4.loading.dismiss();
          }, function () {
            _this4.dismiss();
          });
        }
      }]);

      return ManageGroupAssignItemPage;
    }();

    ManageGroupAssignItemPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    ManageGroupAssignItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-manage-group-assign-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-group-assign-item.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-group-assign-item.page.scss */
      "./src/app/pages/manage-group-assign-item/manage-group-assign-item.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"], src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], ManageGroupAssignItemPage);
    /***/
  },

  /***/
  "./src/app/pages/pending-help/pending-help.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/pending-help/pending-help.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPendingHelpPendingHelpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmctaGVscC9wZW5kaW5nLWhlbHAucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/pending-help/pending-help.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/pending-help/pending-help.page.ts ***!
    \*********************************************************/

  /*! exports provided: PendingHelpPage */

  /***/
  function srcAppPagesPendingHelpPendingHelpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingHelpPage", function () {
      return PendingHelpPage;
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

    var PendingHelpPage =
    /*#__PURE__*/
    function () {
      function PendingHelpPage(modalController, authService, navCtrl) {
        var _this5 = this;

        _classCallCheck(this, PendingHelpPage);

        this.modalController = modalController;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.authService.getToken().then(function () {
          if (!_this5.authService.isLoggedIn) {
            _this5.navCtrl.navigateRoot('/landing');
          }
        });
      }

      _createClass(PendingHelpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.modalController.dismiss();
        }
      }]);

      return PendingHelpPage;
    }();

    PendingHelpPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    PendingHelpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pending-help',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pending-help.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pending-help/pending-help.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pending-help.page.scss */
      "./src/app/pages/pending-help/pending-help.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PendingHelpPage);
    /***/
  },

  /***/
  "./src/app/pages/trip-detail/trip-detail.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/trip-detail/trip-detail.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTripDetailTripDetailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-ios {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ3RvcGNsaWVudC9zcmMvYXBwL3BhZ2VzL3RyaXAtZGV0YWlsL3RyaXAtZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdHJpcC1kZXRhaWwvdHJpcC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyaXAtZGV0YWlsL3RyaXAtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWlvc3tcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59IiwiLmxpc3QtaW9zIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/trip-detail/trip-detail.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/trip-detail/trip-detail.page.ts ***!
    \*******************************************************/

  /*! exports provided: TripDetailPage */

  /***/
  function srcAppPagesTripDetailTripDetailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TripDetailPage", function () {
      return TripDetailPage;
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

    var TripDetailPage =
    /*#__PURE__*/
    function () {
      function TripDetailPage(navParams) {
        _classCallCheck(this, TripDetailPage);

        this.navParams = navParams;
        this.distance = this.navParams.get('distance');
        this.averageSpeed = this.navParams.get('averageSpeed');
        this.maxSpeed = this.navParams.get('maxSpeed');
      }

      _createClass(TripDetailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TripDetailPage;
    }();

    TripDetailPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }];
    };

    TripDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-trip-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./trip-detail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trip-detail/trip-detail.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./trip-detail.page.scss */
      "./src/app/pages/trip-detail/trip-detail.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])], TripDetailPage);
    /***/
  },

  /***/
  "./src/app/services/helper.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/helper.service.ts ***!
    \********************************************/

  /*! exports provided: HelperService */

  /***/
  function srcAppServicesHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperService", function () {
      return HelperService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HelperService =
    /*#__PURE__*/
    function () {
      function HelperService() {
        _classCallCheck(this, HelperService);
      }

      _createClass(HelperService, [{
        key: "phpDateGMT7",
        value: function phpDateGMT7() {
          var theDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
          var dateString = theDate.getFullYear();
          dateString += '-';

          if (theDate.getMonth() + 1 < 10) {
            dateString += '0' + (theDate.getMonth() + 1).toString();
          } else {
            dateString += (theDate.getMonth() + 1).toString();
          }

          dateString += '-';

          if (theDate.getDate() < 10) {
            dateString += '0' + theDate.getDate().toString();
          } else {
            dateString += theDate.getDate().toString();
          }

          return dateString;
        }
      }, {
        key: "phpTimeGMT7",
        value: function phpTimeGMT7() {
          var theDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
          var dateString = '';

          if (theDate.getHours() < 10) {
            dateString += '0' + theDate.getHours().toString();
          } else {
            dateString += theDate.getHours().toString();
          }

          dateString += ':';

          if (theDate.getMinutes() < 10) {
            dateString += '0' + theDate.getMinutes().toString();
          } else {
            dateString += theDate.getMinutes().toString();
          }

          dateString += ':';

          if (theDate.getSeconds() < 10) {
            dateString += '0' + theDate.getSeconds().toString();
          } else {
            dateString += theDate.getSeconds().toString();
          }

          return dateString;
        }
      }]);

      return HelperService;
    }();

    HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HelperService);
    /***/
  },

  /***/
  "./src/app/services/traccar.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/traccar.service.ts ***!
    \*********************************************/

  /*! exports provided: TraccarService */

  /***/
  function srcAppServicesTraccarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TraccarService", function () {
      return TraccarService;
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

    var TraccarService =
    /*#__PURE__*/
    function () {
      function TraccarService(http, storage, authService) {
        _classCallCheck(this, TraccarService);

        this.http = http;
        this.storage = storage;
        this.authService = authService;
        this.middleware = 'event/';
      }

      _createClass(TraccarService, [{
        key: "getTireMaintenance",
        value: function getTireMaintenance(deviceid, pagination) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'tire-maintenance', {
            headers: headers,
            params: {
              deviceid: deviceid,
              pagination: pagination
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "getOilMaintenance",
        value: function getOilMaintenance(deviceid, pagination) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'oil-maintenance', {
            headers: headers,
            params: {
              deviceid: deviceid,
              pagination: pagination
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "getIgnition",
        value: function getIgnition(deviceid, pagination) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'ignition/' + deviceid + '/' + pagination, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "getOverspeed",
        value: function getOverspeed(deviceid, pagination) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'overspeed/' + deviceid + '/' + pagination, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "getParking",
        value: function getParking(deviceid, from, to) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'parking-alarm', {
            headers: headers,
            params: {
              deviceid: deviceid,
              from: from,
              to: to
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "getTrip",
        value: function getTrip(deviceid, from, to) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'trips', {
            headers: headers,
            params: {
              deviceid: deviceid,
              from: from,
              to: to
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "getSummary",
        value: function getSummary(deviceid, from, to) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + this.middleware + 'summary', {
            headers: headers,
            params: {
              deviceid: deviceid,
              from: from,
              to: to
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (device) {
            return device;
          }));
        }
      }, {
        key: "getMyDevices",
        value: function getMyDevices() {
          var q = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"]
          });
          var options = {
            headers: headers
          };
          return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["ENDPOINT"].API_URL + 'item/my-devices', null, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (devices) {
            return devices;
          }));
        }
      }]);

      return TraccarService;
    }();

    TraccarService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    TraccarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], TraccarService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map