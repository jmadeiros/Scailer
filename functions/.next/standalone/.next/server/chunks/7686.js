"use strict";
exports.id = 7686;
exports.ids = [7686];
exports.modules = {

/***/ 37686:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  M: () => (/* binding */ AnimatePresence)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var LayoutGroupContext = __webpack_require__(78549);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(34349);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(60381);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var PresenceContext = __webpack_require__(19386);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__(95248);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
"use client";





/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */
class PopChildMeasure extends react_.Component {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const parent = element.offsetParent;
            const parentWidth = parent instanceof HTMLElement ? parent.offsetWidth || 0 : 0;
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
            size.right = parentWidth - size.width - size.left;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() { }
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent, anchorX }) {
    const id = (0,react_.useId)();
    const ref = (0,react_.useRef)(null);
    const size = (0,react_.useRef)({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
    });
    const { nonce } = (0,react_.useContext)(MotionConfigContext/* MotionConfigContext */._);
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */
    (0,react_.useInsertionEffect)(() => {
        const { width, height, top, left, right } = size.current;
        if (isPresent || !ref.current || !width || !height)
            return;
        const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
        ref.current.dataset.motionPopId = id;
        const style = document.createElement("style");
        if (nonce)
            style.nonce = nonce;
        document.head.appendChild(style);
        if (style.sheet) {
            style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            top: ${top}px !important;
          }
        `);
        }
        return () => {
            document.head.removeChild(style);
        };
    }, [isPresent]);
    return ((0,jsx_runtime_.jsx)(PopChildMeasure, { isPresent: isPresent, childRef: ref, sizeRef: size, children: react_.cloneElement(children, { ref }) }));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
"use client";







const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, }) => {
    const presenceChildren = (0,use_constant/* useConstant */.h)(newChildrenMap);
    const id = (0,react_.useId)();
    const memoizedOnExitComplete = (0,react_.useCallback)((childId) => {
        presenceChildren.set(childId, true);
        for (const isComplete of presenceChildren.values()) {
            if (!isComplete)
                return; // can stop searching when any is incomplete
        }
        onExitComplete && onExitComplete();
    }, [presenceChildren, onExitComplete]);
    const context = (0,react_.useMemo)(() => ({
        id,
        initial,
        isPresent,
        custom,
        onExitComplete: memoizedOnExitComplete,
        register: (childId) => {
            presenceChildren.set(childId, false);
            return () => presenceChildren.delete(childId);
        },
    }), 
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    presenceAffectsLayout
        ? [Math.random(), memoizedOnExitComplete]
        : [isPresent, memoizedOnExitComplete]);
    (0,react_.useMemo)(() => {
        presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */
    react_.useEffect(() => {
        !isPresent &&
            !presenceChildren.size &&
            onExitComplete &&
            onExitComplete();
    }, [isPresent]);
    if (mode === "popLayout") {
        children = ((0,jsx_runtime_.jsx)(PopChild, { isPresent: isPresent, anchorX: anchorX, children: children }));
    }
    return ((0,jsx_runtime_.jsx)(PresenceContext/* PresenceContext */.O.Provider, { value: context, children: children }));
};
function newChildrenMap() {
    return new Map();
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var use_presence = __webpack_require__(61886);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs


const getChildKey = (child) => child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    react_.Children.forEach(children, (child) => {
        if ((0,react_.isValidElement)(child))
            filtered.push(child);
    });
    return filtered;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
"use client";









/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */
const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", }) => {
    const [isParentPresent, safeToRemove] = (0,use_presence/* usePresence */.oO)(propagate);
    /**
     * Filter any children that aren't ReactElements. We can only track components
     * between renders with a props.key.
     */
    const presentChildren = (0,react_.useMemo)(() => onlyElements(children), [children]);
    /**
     * Track the keys of the currently rendered children. This is used to
     * determine which children are exiting.
     */
    const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
    /**
     * If `initial={false}` we only want to pass this to components in the first render.
     */
    const isInitialRender = (0,react_.useRef)(true);
    /**
     * A ref containing the currently present children. When all exit animations
     * are complete, we use this to re-render the component with the latest children
     * *committed* rather than the latest children *rendered*.
     */
    const pendingPresentChildren = (0,react_.useRef)(presentChildren);
    /**
     * Track which exiting children have finished animating out.
     */
    const exitComplete = (0,use_constant/* useConstant */.h)(() => new Map());
    /**
     * Save children to render as React state. To ensure this component is concurrent-safe,
     * we check for exiting children via an effect.
     */
    const [diffedChildren, setDiffedChildren] = (0,react_.useState)(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0,react_.useState)(presentChildren);
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        isInitialRender.current = false;
        pendingPresentChildren.current = presentChildren;
        /**
         * Update complete status of exiting children.
         */
        for (let i = 0; i < renderedChildren.length; i++) {
            const key = getChildKey(renderedChildren[i]);
            if (!presentKeys.includes(key)) {
                if (exitComplete.get(key) !== true) {
                    exitComplete.set(key, false);
                }
            }
            else {
                exitComplete.delete(key);
            }
        }
    }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
        let nextChildren = [...presentChildren];
        /**
         * Loop through all the currently rendered components and decide which
         * are exiting.
         */
        for (let i = 0; i < renderedChildren.length; i++) {
            const child = renderedChildren[i];
            const key = getChildKey(child);
            if (!presentKeys.includes(key)) {
                nextChildren.splice(i, 0, child);
                exitingChildren.push(child);
            }
        }
        /**
         * If we're in "wait" mode, and we have exiting children, we want to
         * only render these until they've all exited.
         */
        if (mode === "wait" && exitingChildren.length) {
            nextChildren = exitingChildren;
        }
        setRenderedChildren(onlyElements(nextChildren));
        setDiffedChildren(presentChildren);
        /**
         * Early return to ensure once we've set state with the latest diffed
         * children, we can immediately re-render.
         */
        return null;
    }
    if (false) {}
    /**
     * If we've been provided a forceRender function by the LayoutGroupContext,
     * we can use it to force a re-render amongst all surrounding components once
     * all components have finished animating out.
     */
    const { forceRender } = (0,react_.useContext)(LayoutGroupContext/* LayoutGroupContext */.p);
    return ((0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, { children: renderedChildren.map((child) => {
            const key = getChildKey(child);
            const isPresent = propagate && !isParentPresent
                ? false
                : presentChildren === renderedChildren ||
                    presentKeys.includes(key);
            const onExit = () => {
                if (exitComplete.has(key)) {
                    exitComplete.set(key, true);
                }
                else {
                    return;
                }
                let isEveryExitComplete = true;
                exitComplete.forEach((isExitComplete) => {
                    if (!isExitComplete)
                        isEveryExitComplete = false;
                });
                if (isEveryExitComplete) {
                    forceRender === null || forceRender === void 0 ? void 0 : forceRender();
                    setRenderedChildren(pendingPresentChildren.current);
                    propagate && (safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove());
                    onExitComplete && onExitComplete();
                }
            };
            return ((0,jsx_runtime_.jsx)(PresenceChild, { isPresent: isPresent, initial: !isInitialRender.current || initial
                    ? undefined
                    : false, custom: custom, presenceAffectsLayout: presenceAffectsLayout, mode: mode, onExitComplete: isPresent ? undefined : onExit, anchorX: anchorX, children: child }, key));
        }) }));
};




/***/ })

};
;