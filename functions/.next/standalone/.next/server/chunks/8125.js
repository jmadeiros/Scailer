exports.id = 8125;
exports.ids = [8125];
exports.modules = {

/***/ 48496:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 17749:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16173, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9941))

/***/ }),

/***/ 53041:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 58438))

/***/ }),

/***/ 58438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function NotFound() {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Redirect to the home page
        router.push("/");
    }, [
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-scailer-dark text-white",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-4xl font-bold mb-4",
                    children: "Loading..."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-lg text-white/70",
                    children: "Redirecting to home page"
                })
            ]
        })
    });
}


/***/ }),

/***/ 40679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"],"display":"swap","weight":["100","200","300","400","500","600","700","800","900"],"variable":"--font-inter"}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter_ = __webpack_require__(45931);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(95182);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(12794);
;// CONCATENATED MODULE: ./src/lib/utils.ts


function cn(...inputs) {
    return (0,tw_merge/* twMerge */.m)((0,clsx/* clsx */.W)(inputs));
}

// EXTERNAL MODULE: ./node_modules/sonner/dist/index.mjs
var dist = __webpack_require__(68377);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(34862);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./src/app/layout.tsx






// Debug logging
const debug = (...args)=>console.log("[Font Debug]", ...args);
debug("Initializing font configuration...");
debug("Font configuration complete:", {
    variable: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter_default()).variable,
    className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter_default()).className
});
const metadata = {
    title: "Your New Tech Partner \uD83D\uDE80",
    description: "Automate and scale your business operations with AI-powered solutions."
};
function RootLayout({ children }) {
    debug("Rendering RootLayout");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        className: cn("antialiased", (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter_default()).variable),
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                        id: "mac-lanyard-adjustment",
                        children: `
            (function() {
              function adjustLanyardForMac() {
                try {
                  // Detect macOS
                  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0 || 
                               (navigator.userAgent.indexOf('Mac') > -1);
                  
                  if (isMac) {
                    // Add a special CSS class to the document for Mac-specific styling
                    document.documentElement.classList.add('mac-device');
                    
                    // Find and adjust lanyard elements
                    setTimeout(() => {
                      // Add custom CSS for lanyards
                      const style = document.createElement('style');
                      style.textContent = \`
                        /* Mac-only lanyard styles */
                        .mac-device .lanyard-container canvas {
                          transform: scale(0.85);
                          transform-origin: center center;
                        }
                      \`;
                      document.head.appendChild(style);
                      
                      // Apply the lanyard-container class to the lanyards
                      document.querySelectorAll('[id="operations-service"] canvas').forEach(el => {
                        const parentDiv = el.closest('div');
                        if (parentDiv) {
                          parentDiv.classList.add('lanyard-container');
                        }
                      });
                      
                      console.log("Mac detected, lanyards adjusted to 85% size");
                    }, 1000); // Give time for components to render
                  }
                } catch (e) {
                  console.error("Error in Mac lanyard adjustment script:", e);
                }
              }

              // Apply when DOM is ready
              if (document.readyState === 'complete' || document.readyState === 'interactive') {
                adjustLanyardForMac();
              } else {
                document.addEventListener('DOMContentLoaded', adjustLanyardForMac);
              }
              
              // Also try after window load to ensure Three.js canvas elements are rendered
              window.addEventListener('load', () => {
                setTimeout(adjustLanyardForMac, 2000);
              });
            })();
          `
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: cn((target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_display_swap_weight_100_200_300_400_500_600_700_800_900_variable_font_inter_variableName_inter_default()).className, "min-h-screen bg-[#2a2a2a] text-white", "flex flex-col antialiased", "selection:bg-scailer-green selection:text-white"),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* Toaster */.x7, {
                        position: "top-right",
                        toastOptions: {
                            style: {
                                background: "#3a3a3a",
                                color: "#ffffff",
                                border: "1px solid rgba(37, 211, 102, 0.1)"
                            },
                            className: "toast-custom"
                        }
                    }),
                    children
                ]
            })
        ]
    });
}


/***/ }),

/***/ 18275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\madei\mon\src\app\not-found.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;