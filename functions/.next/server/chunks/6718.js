"use strict";
exports.id = 6718;
exports.ids = [6718];
exports.modules = {

/***/ 51910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ChevronLeft)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12125);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("chevron-left", __iconNode);


//# sourceMappingURL=chevron-left.js.map


/***/ }),

/***/ 70696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Target)
/* harmony export */ });
/* unused harmony export __iconNode */
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12125);
/**
 * @license lucide-react v0.484.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("target", __iconNode);


//# sourceMappingURL=target.js.map


/***/ }),

/***/ 69694:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* binding */ useInView)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/index.mjs + 42 modules
var es = __webpack_require__(57637);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs


const thresholds = {
    some: 0,
    all: 1,
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = (0,es/* resolveElements */.IG)(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries) => {
        entries.forEach((entry) => {
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */
            if (entry.isIntersecting === Boolean(onEnd))
                return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry.target, entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                }
                else {
                    observer.unobserve(entry.target);
                }
            }
            else if (typeof onEnd === "function") {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount],
    });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/utils/use-in-view.mjs



function useInView(ref, { root, margin, amount, once = false, initial = false, } = {}) {
    const [isInView, setInView] = (0,react_.useState)(initial);
    (0,react_.useEffect)(() => {
        if (!ref.current || (once && isInView))
            return;
        const onEnter = () => {
            setInView(true);
            return once ? undefined : () => setInView(false);
        };
        const options = {
            root: (root && root.current) || undefined,
            margin,
            amount,
        };
        return inView(ref.current, onEnter, options);
    }, [root, ref, margin, once, amount]);
    return isInView;
}




/***/ }),

/***/ 63927:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ useSpring)
/* harmony export */ });
/* harmony import */ var motion_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57637);
/* harmony import */ var motion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27668);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var _animation_animators_MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(95660);
/* harmony import */ var _context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95248);
/* harmony import */ var _utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34349);
/* harmony import */ var _utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60381);
/* harmony import */ var _use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42201);
/* harmony import */ var _utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55583);










function useSpring(source, config = {}) {
    const { isStatic } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_MotionConfigContext_mjs__WEBPACK_IMPORTED_MODULE_3__/* .MotionConfigContext */ ._);
    const activeSpringAnimation = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const initialValue = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useConstant */ .h)(() => (0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_5__/* .isMotionValue */ .i)(source) ? source.get() : source);
    const unit = (0,_utils_use_constant_mjs__WEBPACK_IMPORTED_MODULE_4__/* .useConstant */ .h)(() => typeof initialValue === "string"
        ? initialValue.replace(/[\d.-]/g, "")
        : undefined);
    const value = (0,_use_motion_value_mjs__WEBPACK_IMPORTED_MODULE_6__/* .useMotionValue */ .c)(initialValue);
    const latestValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(initialValue);
    const latestSetter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(motion_utils__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT);
    const startAnimation = () => {
        stopAnimation();
        activeSpringAnimation.current = (0,_animation_animators_MainThreadAnimation_mjs__WEBPACK_IMPORTED_MODULE_7__/* .animateValue */ .y)({
            keyframes: [asNumber(value.get()), asNumber(latestValue.current)],
            velocity: value.getVelocity(),
            type: "spring",
            restDelta: 0.001,
            restSpeed: 0.01,
            ...config,
            onUpdate: latestSetter.current,
        });
    };
    const stopAnimation = () => {
        if (activeSpringAnimation.current) {
            activeSpringAnimation.current.stop();
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useInsertionEffect)(() => {
        return value.attach((v, set) => {
            if (isStatic)
                return set(v);
            latestValue.current = v;
            latestSetter.current = (latest) => set(parseValue(latest, unit));
            motion_dom__WEBPACK_IMPORTED_MODULE_0__/* .frame */ .Wi.postRender(startAnimation);
            return value.get();
        }, stopAnimation);
    }, [JSON.stringify(config)]);
    (0,_utils_use_isomorphic_effect_mjs__WEBPACK_IMPORTED_MODULE_8__/* .useIsomorphicLayoutEffect */ .L)(() => {
        if ((0,_utils_is_motion_value_mjs__WEBPACK_IMPORTED_MODULE_5__/* .isMotionValue */ .i)(source)) {
            return source.on("change", (v) => value.set(parseValue(v, unit)));
        }
    }, [value, unit]);
    return value;
}
function parseValue(v, unit) {
    return unit ? v + unit : v;
}
function asNumber(v) {
    return typeof v === "number" ? v : parseFloat(v);
}




/***/ })

};
;