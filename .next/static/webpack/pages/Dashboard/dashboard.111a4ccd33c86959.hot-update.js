"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Dashboard/dashboard",{

/***/ "./src/pages/Dashboard/dashboard.js":
/*!******************************************!*\
  !*** ./src/pages/Dashboard/dashboard.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dashboard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts */ \"./src/layouts/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\nfunction Dashboard() {\n    var _session_user, _session_user1;\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const title = \"JPC-TAP • Dashboard\";\n    const totalProductSales = 50;\n    const totalCategories = 8;\n    const totalUserData = 500;\n    const cardBalance = 10000;\n    const totalLoggedinAccounts = 13;\n    const dailySales = 200;\n    const weeklySales = 1500;\n    const monthlySales = 6000;\n    const formatCurrency = (amount)=>{\n        return amount.toLocaleString(\"en-US\", {\n            style: \"currency\",\n            currency: \"PHP\",\n            minimumFractionDigits: 2\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layouts__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-slate-900 font-medium flex flex-col md:flex-row justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                            className: \"text-4xl font-semibold mb-8\",\n                            children: \"Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                            lineNumber: 31,\n                            columnNumber: 6\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-1 min-w-fit min-h-min items-center bg-blue-700 p-2 text-white rounded-md\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.image,\n                                alt: \"admin.img\",\n                                className: \"w-8 rounded-md\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                lineNumber: 34,\n                                columnNumber: 6\n                            }, this),\n                            session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.name,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                    children: \"(Admin)\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 7\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                lineNumber: 40,\n                                columnNumber: 6\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                        lineNumber: 33,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-blue-50  mt-4 w-full min-w-fit h-auto rounded-md p-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 min-w-fit min-h-min rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Total Products\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: totalProductSales\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                            lineNumber: 47,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 min-w-fit min-h-min rounded-lg  shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Total Categories\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: totalCategories\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                            lineNumber: 51,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 min-w-fit min-h-min rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Total Users\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: totalUserData\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                            lineNumber: 55,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 min-w-fit min-h-min rounded-lg  shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Total Logged-in Accounts\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: totalLoggedinAccounts\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                            lineNumber: 59,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 min-w-fit min-h-min rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Card Balance\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: formatCurrency(cardBalance)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                            lineNumber: 65,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 min-w-fit min-h-min rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Daily Sales\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: formatCurrency(dailySales)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                            lineNumber: 70,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 min-w-fit min-h-min rounded-lg shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Weekly Sales\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: formatCurrency(weeklySales)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                            lineNumber: 75,\n                            columnNumber: 6\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white p-4 min-w-fit min-h-min rounded-lg  shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-semibold mb-4\",\n                                    children: \"Monthly Sales\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 7\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: formatCurrency(monthlySales)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 7\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                            lineNumber: 80,\n                            columnNumber: 6\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                    lineNumber: 46,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n                lineNumber: 45,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\grian\\\\Desktop\\\\jpc-tap\\\\src\\\\pages\\\\Dashboard\\\\dashboard.js\",\n        lineNumber: 27,\n        columnNumber: 3\n    }, this);\n}\n_s(Dashboard, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Dashboard;\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvRGFzaGJvYXJkL2Rhc2hib2FyZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw0Q0FBNEM7O0FBQ2Y7QUFDZ0I7QUFFOUIsU0FBU0U7UUE4QmJDLGVBSUxBOztJQWpDTCxNQUFNLEVBQUVDLE1BQU1ELE9BQU8sRUFBRSxHQUFHRiwyREFBVUE7SUFDcEMsTUFBTUksUUFBUTtJQUVkLE1BQU1DLG9CQUFvQjtJQUMxQixNQUFNQyxrQkFBa0I7SUFDeEIsTUFBTUMsZ0JBQWdCO0lBQ3RCLE1BQU1DLGNBQWM7SUFDcEIsTUFBTUMsd0JBQXdCO0lBRTlCLE1BQU1DLGFBQWE7SUFDbkIsTUFBTUMsY0FBYztJQUNwQixNQUFNQyxlQUFlO0lBRXJCLE1BQU1DLGlCQUFpQixDQUFDQztRQUN2QixPQUFPQSxPQUFPQyxjQUFjLENBQUMsU0FBUztZQUNyQ0MsT0FBTztZQUNQQyxVQUFVO1lBQ1ZDLHVCQUF1QjtRQUN4QjtJQUNEO0lBQ0EscUJBQ0MsOERBQUNuQixnREFBSUE7OzBCQUNKLDhEQUFDSzswQkFBT0E7Ozs7OzswQkFDUiw4REFBQ2U7Z0JBQUlDLFdBQVU7O2tDQUNkLDhEQUFDQztrQ0FDQSw0RUFBQ0M7NEJBQUVGLFdBQVU7c0NBQThCOzs7Ozs7Ozs7OztrQ0FFNUMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDZCw4REFBQ0c7Z0NBQ0FDLEdBQUcsRUFBRXRCLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVN1QixJQUFJLGNBQWJ2QixvQ0FBQUEsY0FBZXdCLEtBQUs7Z0NBQ3pCQyxLQUFJO2dDQUNKUCxXQUFVOzs7Ozs7NEJBRVZsQixvQkFBQUEsK0JBQUFBLGlCQUFBQSxRQUFTdUIsSUFBSSxjQUFidkIscUNBQUFBLGVBQWUwQixJQUFJOzBDQUNwQiw4REFBQ0M7MENBQ0EsNEVBQUNQOzhDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJTiw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ2QsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDZCw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNkLDhEQUFDUztvQ0FBR1QsV0FBVTs4Q0FBNkI7Ozs7Ozs4Q0FDM0MsOERBQUNVO29DQUFFVixXQUFVOzhDQUFzQmY7Ozs7Ozs7Ozs7OztzQ0FFcEMsOERBQUNjOzRCQUFJQyxXQUFVOzs4Q0FDZCw4REFBQ1M7b0NBQUdULFdBQVU7OENBQTZCOzs7Ozs7OENBQzNDLDhEQUFDVTtvQ0FBRVYsV0FBVTs4Q0FBc0JkOzs7Ozs7Ozs7Ozs7c0NBRXBDLDhEQUFDYTs0QkFBSUMsV0FBVTs7OENBQ2QsOERBQUNTO29DQUFHVCxXQUFVOzhDQUE2Qjs7Ozs7OzhDQUMzQyw4REFBQ1U7b0NBQUVWLFdBQVU7OENBQXNCYjs7Ozs7Ozs7Ozs7O3NDQUVwQyw4REFBQ1k7NEJBQUlDLFdBQVU7OzhDQUNkLDhEQUFDUztvQ0FBR1QsV0FBVTs4Q0FBNkI7Ozs7Ozs4Q0FHM0MsOERBQUNVO29DQUFFVixXQUFVOzhDQUFzQlg7Ozs7Ozs7Ozs7OztzQ0FFcEMsOERBQUNVOzRCQUFJQyxXQUFVOzs4Q0FDZCw4REFBQ1M7b0NBQUdULFdBQVU7OENBQTZCOzs7Ozs7OENBQzNDLDhEQUFDVTtvQ0FBRVYsV0FBVTs4Q0FBc0JQLGVBQWVMOzs7Ozs7Ozs7Ozs7c0NBR25ELDhEQUFDVzs0QkFBSUMsV0FBVTs7OENBQ2QsOERBQUNTO29DQUFHVCxXQUFVOzhDQUE2Qjs7Ozs7OzhDQUMzQyw4REFBQ1U7b0NBQUVWLFdBQVU7OENBQXNCUCxlQUFlSDs7Ozs7Ozs7Ozs7O3NDQUduRCw4REFBQ1M7NEJBQUlDLFdBQVU7OzhDQUNkLDhEQUFDUztvQ0FBR1QsV0FBVTs4Q0FBNkI7Ozs7Ozs4Q0FDM0MsOERBQUNVO29DQUFFVixXQUFVOzhDQUFzQlAsZUFBZUY7Ozs7Ozs7Ozs7OztzQ0FHbkQsOERBQUNROzRCQUFJQyxXQUFVOzs4Q0FDZCw4REFBQ1M7b0NBQUdULFdBQVU7OENBQTZCOzs7Ozs7OENBQzNDLDhEQUFDVTtvQ0FBRVYsV0FBVTs4Q0FBc0JQLGVBQWVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RDtHQW5Gd0JYOztRQUNHRCx1REFBVUE7OztLQURiQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvRGFzaGJvYXJkL2Rhc2hib2FyZC5qcz8yZDFmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IE1haW4gZnJvbSBcIkAvbGF5b3V0c1wiO1xyXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xyXG5cdGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG5cdGNvbnN0IHRpdGxlID0gXCJKUEMtVEFQIOKAoiBEYXNoYm9hcmRcIjtcclxuXHJcblx0Y29uc3QgdG90YWxQcm9kdWN0U2FsZXMgPSA1MDtcclxuXHRjb25zdCB0b3RhbENhdGVnb3JpZXMgPSA4O1xyXG5cdGNvbnN0IHRvdGFsVXNlckRhdGEgPSA1MDA7XHJcblx0Y29uc3QgY2FyZEJhbGFuY2UgPSAxMDAwMDtcclxuXHRjb25zdCB0b3RhbExvZ2dlZGluQWNjb3VudHMgPSAxMztcclxuXHJcblx0Y29uc3QgZGFpbHlTYWxlcyA9IDIwMDtcclxuXHRjb25zdCB3ZWVrbHlTYWxlcyA9IDE1MDA7XHJcblx0Y29uc3QgbW9udGhseVNhbGVzID0gNjAwMDtcclxuXHJcblx0Y29uc3QgZm9ybWF0Q3VycmVuY3kgPSAoYW1vdW50KSA9PiB7XHJcblx0XHRyZXR1cm4gYW1vdW50LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xyXG5cdFx0XHRzdHlsZTogXCJjdXJyZW5jeVwiLFxyXG5cdFx0XHRjdXJyZW5jeTogXCJQSFBcIixcclxuXHRcdFx0bWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1haW4+XHJcblx0XHRcdDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTkwMCBmb250LW1lZGl1bSBmbGV4IGZsZXgtY29sIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlblwiPlxyXG5cdFx0XHRcdDxoMT5cclxuXHRcdFx0XHRcdDxiIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgbWItOFwiPkRhc2hib2FyZDwvYj5cclxuXHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMSBtaW4tdy1maXQgbWluLWgtbWluIGl0ZW1zLWNlbnRlciBiZy1ibHVlLTcwMCBwLTIgdGV4dC13aGl0ZSByb3VuZGVkLW1kXCI+XHJcblx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdHNyYz17c2Vzc2lvbj8udXNlcj8uaW1hZ2V9XHJcblx0XHRcdFx0XHRcdGFsdD1cImFkbWluLmltZ1wiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInctOCByb3VuZGVkLW1kXCJcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHR7c2Vzc2lvbj8udXNlcj8ubmFtZX1cclxuXHRcdFx0XHRcdDxoMj5cclxuXHRcdFx0XHRcdFx0PGI+KEFkbWluKTwvYj5cclxuXHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLWJsdWUtNTAgIG10LTQgdy1mdWxsIG1pbi13LWZpdCBoLWF1dG8gcm91bmRlZC1tZCBwLThcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgZ2FwLTEwXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBtaW4tdy1maXQgbWluLWgtbWluIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPlRvdGFsIFByb2R1Y3RzPC9oMj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RvdGFsUHJvZHVjdFNhbGVzfTwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTQgbWluLXctZml0IG1pbi1oLW1pbiByb3VuZGVkLWxnICBzaGFkb3ctbWRcIj5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+VG90YWwgQ2F0ZWdvcmllczwvaDI+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt0b3RhbENhdGVnb3JpZXN9PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBtaW4tdy1maXQgbWluLWgtbWluIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPlRvdGFsIFVzZXJzPC9oMj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RvdGFsVXNlckRhdGF9PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBtaW4tdy1maXQgbWluLWgtbWluIHJvdW5kZWQtbGcgIHNoYWRvdy1tZFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTRcIj5cclxuXHRcdFx0XHRcdFx0XHRUb3RhbCBMb2dnZWQtaW4gQWNjb3VudHNcclxuXHRcdFx0XHRcdFx0PC9oMj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3RvdGFsTG9nZ2VkaW5BY2NvdW50c308L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IG1pbi13LWZpdCBtaW4taC1taW4gcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+Q2FyZCBCYWxhbmNlPC9oMj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e2Zvcm1hdEN1cnJlbmN5KGNhcmRCYWxhbmNlKX08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBtaW4tdy1maXQgbWluLWgtbWluIHJvdW5kZWQtbGcgc2hhZG93LW1kXCI+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPkRhaWx5IFNhbGVzPC9oMj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e2Zvcm1hdEN1cnJlbmN5KGRhaWx5U2FsZXMpfTwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IG1pbi13LWZpdCBtaW4taC1taW4gcm91bmRlZC1sZyBzaGFkb3ctbWRcIj5cclxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+V2Vla2x5IFNhbGVzPC9oMj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e2Zvcm1hdEN1cnJlbmN5KHdlZWtseVNhbGVzKX08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtNCBtaW4tdy1maXQgbWluLWgtbWluIHJvdW5kZWQtbGcgIHNoYWRvdy1tZFwiPlxyXG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTRcIj5Nb250aGx5IFNhbGVzPC9oMj5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e2Zvcm1hdEN1cnJlbmN5KG1vbnRobHlTYWxlcyl9PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9NYWluPlxyXG5cdCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1haW4iLCJ1c2VTZXNzaW9uIiwiRGFzaGJvYXJkIiwic2Vzc2lvbiIsImRhdGEiLCJ0aXRsZSIsInRvdGFsUHJvZHVjdFNhbGVzIiwidG90YWxDYXRlZ29yaWVzIiwidG90YWxVc2VyRGF0YSIsImNhcmRCYWxhbmNlIiwidG90YWxMb2dnZWRpbkFjY291bnRzIiwiZGFpbHlTYWxlcyIsIndlZWtseVNhbGVzIiwibW9udGhseVNhbGVzIiwiZm9ybWF0Q3VycmVuY3kiLCJhbW91bnQiLCJ0b0xvY2FsZVN0cmluZyIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImIiLCJpbWciLCJzcmMiLCJ1c2VyIiwiaW1hZ2UiLCJhbHQiLCJuYW1lIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Dashboard/dashboard.js\n"));

/***/ })

});