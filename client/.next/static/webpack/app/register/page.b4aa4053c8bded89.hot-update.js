"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/register/page",{

/***/ "(app-pages-browser)/./components/RegistrationForm.tsx":
/*!*****************************************!*\
  !*** ./components/RegistrationForm.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegistrationForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* harmony import */ var _barrel_optimize_names_Loader2_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js\");\n/* harmony import */ var _barrel_optimize_names_Loader2_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js\");\n/* harmony import */ var _ui_use_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/use-toast */ \"(app-pages-browser)/./components/ui/use-toast.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction RegistrationForm() {\n    _s();\n    const [fullName, setFullName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [documentId, setDocumentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [profilePicture, setProfilePicture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { toast } = (0,_ui_use_toast__WEBPACK_IMPORTED_MODULE_6__.useToast)();\n    // get the wallet address again so it can be sent to the server via the API request with the form data within the data\n    const getWalletAddress = async ()=>{\n        try {\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            console.log(\"wallet address: \" + accounts[0]);\n            return accounts[0];\n        } catch (error) {\n            return error;\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsSubmitting(true);\n        const walletAddressResult = await getWalletAddress();\n        print(wallet);\n        console.log(\"Submitting:\", {\n            fullName,\n            documentId,\n            profilePicture\n        });\n        try {\n            // api call\n            const apiResult = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:8080/register-user\");\n            console.log(\"hello world\");\n            console.log(apiResult);\n        } catch (error) {\n            console.error(\"Error:\", error);\n            toast({\n                title: \"Registration Failed\",\n                description: \"There was an error registering your identity. Please try again.\",\n                variant: \"destructive\"\n            });\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"bg-gray-800/50 backdrop-blur-md border-gray-700 max-w-md mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                    className: \"text-gray-100\",\n                    children: \"Register Your Identity\"\n                }, void 0, false, {\n                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                    htmlFor: \"fullName\",\n                                    className: \"text-gray-300\",\n                                    children: \"Full Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: \"fullName\",\n                                    value: fullName,\n                                    onChange: (e)=>setFullName(e.target.value),\n                                    className: \"bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400\",\n                                    placeholder: \"Enter your full name\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                    htmlFor: \"documentId\",\n                                    className: \"text-gray-300\",\n                                    children: \"Document ID\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: \"documentId\",\n                                    value: documentId,\n                                    onChange: (e)=>setDocumentId(e.target.value),\n                                    className: \"bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400\",\n                                    placeholder: \"Enter your document ID\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                    htmlFor: \"profilePicture\",\n                                    className: \"text-gray-300\",\n                                    children: \"Profile Picture\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                            id: \"profilePicture\",\n                                            type: \"file\",\n                                            accept: \"image/*\",\n                                            onChange: (e)=>{\n                                                var _e_target_files;\n                                                return setProfilePicture(((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null);\n                                            },\n                                            className: \"hidden\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                            lineNumber: 86,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            type: \"button\",\n                                            variant: \"secondary\",\n                                            onClick: ()=>{\n                                                var _document_getElementById;\n                                                return (_document_getElementById = document.getElementById(\"profilePicture\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.click();\n                                            },\n                                            className: \"w-full bg-gray-700 hover:bg-gray-600 text-gray-100 border-gray-600\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                    className: \"mr-2 h-4 w-4\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                                    lineNumber: 99,\n                                                    columnNumber: 17\n                                                }, this),\n                                                \" Upload Picture\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 15\n                                        }, this),\n                                        profilePicture && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-100 text-sm truncate\",\n                                            children: profilePicture.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-600 hover:bg-indigo-700 text-gray-100\",\n                            disabled: isSubmitting,\n                            children: isSubmitting ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        className: \"mr-2 h-4 w-4 animate-spin\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 17\n                                    }, this),\n                                    \"Registering...\"\n                                ]\n                            }, void 0, true) : \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(RegistrationForm, \"U7AKAcIBEqLiXlGyxfHdwH5th8M=\", false, function() {\n    return [\n        _ui_use_toast__WEBPACK_IMPORTED_MODULE_6__.useToast\n    ];\n});\n_c = RegistrationForm;\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDb0M7QUFDbEM7QUFDRTtBQUNGO0FBQ1k7QUFDTDtBQUNmO0FBRVgsU0FBU1k7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNlLFlBQVlDLGNBQWMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2lCLGdCQUFnQkMsa0JBQWtCLEdBQUdsQiwrQ0FBUUEsQ0FBYztJQUNsRSxNQUFNLENBQUNtQixlQUFlQyxpQkFBaUIsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ3FCLGNBQWNDLGdCQUFnQixHQUFHdEIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxFQUFFdUIsS0FBSyxFQUFFLEdBQUdiLHVEQUFRQTtJQUUxQixzSEFBc0g7SUFDdEgsTUFBTWMsbUJBQW1CO1FBQ3ZCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE9BQU9DLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDO2dCQUFFQyxRQUFRO1lBQWU7WUFDeEVDLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJOLFFBQVEsQ0FBQyxFQUFFO1lBQzVDLE9BQU9BLFFBQVEsQ0FBQyxFQUFFO1FBQ3BCLEVBQUUsT0FBT08sT0FBTztZQUNkLE9BQU9BO1FBQ1Q7SUFDRjtJQUNBLE1BQU1DLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEJiLGdCQUFnQjtRQUNoQixNQUFNYyxzQkFBc0IsTUFBTVo7UUFFbENhLE1BQU1DO1FBQ05SLFFBQVFDLEdBQUcsQ0FBQyxlQUFlO1lBQUVsQjtZQUFVRTtZQUFZRTtRQUFlO1FBQ2xFLElBQUk7WUFDRixXQUFXO1lBQ1gsTUFBTXNCLFlBQVksTUFBTTVCLDZDQUFLQSxDQUFDNkIsSUFBSSxDQUFDO1lBQ25DVixRQUFRQyxHQUFHLENBQUM7WUFDWkQsUUFBUUMsR0FBRyxDQUFDUTtRQUNkLEVBQUUsT0FBT1AsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsVUFBVUE7WUFDeEJULE1BQU07Z0JBQ0prQixPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxTQUFTO1lBQ1g7UUFDRixTQUFVO1lBQ1JyQixnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDckIsMENBQUlBO1FBQUMyQyxXQUFVOzswQkFDZCw4REFBQ3pDLGdEQUFVQTswQkFDVCw0RUFBQ0MsK0NBQVNBO29CQUFDd0MsV0FBVTs4QkFBZ0I7Ozs7Ozs7Ozs7OzBCQUV2Qyw4REFBQzFDLGlEQUFXQTswQkFDViw0RUFBQzJDO29CQUFLQyxVQUFVYjtvQkFBY1csV0FBVTs7c0NBQ3RDLDhEQUFDRzs0QkFBSUgsV0FBVTs7OENBQ2IsOERBQUNyQyw0Q0FBS0E7b0NBQUN5QyxTQUFRO29DQUFXSixXQUFVOzhDQUFnQjs7Ozs7OzhDQUNwRCw4REFBQ3ZDLDRDQUFLQTtvQ0FDSjRDLElBQUc7b0NBQ0hDLE9BQU9yQztvQ0FDUHNDLFVBQVUsQ0FBQ2pCLElBQU1wQixZQUFZb0IsRUFBRWtCLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDM0NOLFdBQVU7b0NBQ1ZTLGFBQVk7b0NBQ1pDLFFBQVE7Ozs7Ozs7Ozs7OztzQ0FHWiw4REFBQ1A7NEJBQUlILFdBQVU7OzhDQUNiLDhEQUFDckMsNENBQUtBO29DQUFDeUMsU0FBUTtvQ0FBYUosV0FBVTs4Q0FBZ0I7Ozs7Ozs4Q0FDdEQsOERBQUN2Qyw0Q0FBS0E7b0NBQ0o0QyxJQUFHO29DQUNIQyxPQUFPbkM7b0NBQ1BvQyxVQUFVLENBQUNqQixJQUFNbEIsY0FBY2tCLEVBQUVrQixNQUFNLENBQUNGLEtBQUs7b0NBQzdDTixXQUFVO29DQUNWUyxhQUFZO29DQUNaQyxRQUFROzs7Ozs7Ozs7Ozs7c0NBR1osOERBQUNQOzRCQUFJSCxXQUFVOzs4Q0FDYiw4REFBQ3JDLDRDQUFLQTtvQ0FBQ3lDLFNBQVE7b0NBQWlCSixXQUFVOzhDQUFnQjs7Ozs7OzhDQUMxRCw4REFBQ0c7b0NBQUlILFdBQVU7O3NEQUNiLDhEQUFDdkMsNENBQUtBOzRDQUNKNEMsSUFBRzs0Q0FDSE0sTUFBSzs0Q0FDTEMsUUFBTzs0Q0FDUEwsVUFBVSxDQUFDakI7b0RBQXdCQTt1REFBbEJoQixrQkFBa0JnQixFQUFBQSxrQkFBQUEsRUFBRWtCLE1BQU0sQ0FBQ0ssS0FBSyxjQUFkdkIsc0NBQUFBLGVBQWdCLENBQUMsRUFBRSxLQUFJOzs0Q0FDMURVLFdBQVU7Ozs7OztzREFFWiw4REFBQ3RDLDhDQUFNQTs0Q0FDTGlELE1BQUs7NENBQ0xaLFNBQVE7NENBQ1JlLFNBQVM7b0RBQU1DO3dEQUFBQSwyQkFBQUEsU0FBU0MsY0FBYyxDQUFDLCtCQUF4QkQsK0NBQUFBLHlCQUEyQ0UsS0FBSzs7NENBQy9EakIsV0FBVTs7OERBRVYsOERBQUNwQywwRkFBTUE7b0RBQUNvQyxXQUFVOzs7Ozs7Z0RBQWlCOzs7Ozs7O3dDQUVwQzNCLGdDQUNDLDhEQUFDNkM7NENBQUtsQixXQUFVO3NEQUFrQzNCLGVBQWU4QyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTNFLDhEQUFDekQsOENBQU1BOzRCQUNMaUQsTUFBSzs0QkFDTFgsV0FBVTs0QkFDVm9CLFVBQVUzQztzQ0FFVEEsNkJBQ0M7O2tEQUNFLDhEQUFDWiwwRkFBT0E7d0NBQUNtQyxXQUFVOzs7Ozs7b0NBQThCOzsrQ0FJbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2Q7R0FoSHdCaEM7O1FBTUpGLG1EQUFRQTs7O0tBTkpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uRm9ybS50c3g/M2M3NSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIENhcmRDb250ZW50LCBDYXJkSGVhZGVyLCBDYXJkVGl0bGUgfSBmcm9tICcuL3VpL2NhcmQnXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4vdWkvaW5wdXQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3VpL2J1dHRvbidcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi91aS9sYWJlbCdcbmltcG9ydCB7IFVwbG9hZCwgTG9hZGVyMiB9IGZyb20gJ2x1Y2lkZS1yZWFjdCdcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIi4vdWkvdXNlLXRvYXN0XCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0cmF0aW9uRm9ybSgpIHtcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2RvY3VtZW50SWQsIHNldERvY3VtZW50SWRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtwcm9maWxlUGljdHVyZSwgc2V0UHJvZmlsZVBpY3R1cmVdID0gdXNlU3RhdGU8RmlsZSB8IG51bGw+KG51bGwpXG4gIGNvbnN0IFt3YWxsZXRBZGRyZXNzLCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpXG5cbiAgLy8gZ2V0IHRoZSB3YWxsZXQgYWRkcmVzcyBhZ2FpbiBzbyBpdCBjYW4gYmUgc2VudCB0byB0aGUgc2VydmVyIHZpYSB0aGUgQVBJIHJlcXVlc3Qgd2l0aCB0aGUgZm9ybSBkYXRhIHdpdGhpbiB0aGUgZGF0YVxuICBjb25zdCBnZXRXYWxsZXRBZGRyZXNzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX2FjY291bnRzJyB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwid2FsbGV0IGFkZHJlc3M6IFwiICsgYWNjb3VudHNbMF0pXG4gICAgICByZXR1cm4gYWNjb3VudHNbMF07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gIH1cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgY29uc3Qgd2FsbGV0QWRkcmVzc1Jlc3VsdCA9IGF3YWl0IGdldFdhbGxldEFkZHJlc3MoKTtcbiAgICBcbiAgICBwcmludCh3YWxsZXQpXG4gICAgY29uc29sZS5sb2coJ1N1Ym1pdHRpbmc6JywgeyBmdWxsTmFtZSwgZG9jdW1lbnRJZCwgcHJvZmlsZVBpY3R1cmUgfSlcbiAgICB0cnkge1xuICAgICAgLy8gYXBpIGNhbGxcbiAgICAgIGNvbnN0IGFwaVJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVnaXN0ZXItdXNlclwiKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG8gd29ybGRcIik7XG4gICAgICBjb25zb2xlLmxvZyhhcGlSZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcilcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiUmVnaXN0cmF0aW9uIEZhaWxlZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGVyZSB3YXMgYW4gZXJyb3IgcmVnaXN0ZXJpbmcgeW91ciBpZGVudGl0eS4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiLFxuICAgICAgfSlcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENhcmQgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAvNTAgYmFja2Ryb3AtYmx1ci1tZCBib3JkZXItZ3JheS03MDAgbWF4LXctbWQgbXgtYXV0b1wiPlxuICAgICAgPENhcmRIZWFkZXI+XG4gICAgICAgIDxDYXJkVGl0bGUgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTEwMFwiPlJlZ2lzdGVyIFlvdXIgSWRlbnRpdHk8L0NhcmRUaXRsZT5cbiAgICAgIDwvQ2FyZEhlYWRlcj5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZnVsbE5hbWVcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+RnVsbCBOYW1lPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cImZ1bGxOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2Z1bGxOYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZ1bGxOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS03MDAgYm9yZGVyLWdyYXktNjAwIHRleHQtZ3JheS0xMDAgcGxhY2Vob2xkZXItZ3JheS00MDBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZnVsbCBuYW1lXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwiZG9jdW1lbnRJZFwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIj5Eb2N1bWVudCBJRDwvTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgaWQ9XCJkb2N1bWVudElkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2RvY3VtZW50SWR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RG9jdW1lbnRJZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNzAwIGJvcmRlci1ncmF5LTYwMCB0ZXh0LWdyYXktMTAwIHBsYWNlaG9sZGVyLWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGRvY3VtZW50IElEXCJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgIDxMYWJlbCBodG1sRm9yPVwicHJvZmlsZVBpY3R1cmVcIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwXCI+UHJvZmlsZSBQaWN0dXJlPC9MYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwicHJvZmlsZVBpY3R1cmVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByb2ZpbGVQaWN0dXJlKGUudGFyZ2V0LmZpbGVzPy5bMF0gfHwgbnVsbCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlUGljdHVyZScpPy5jbGljaygpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1ncmF5LTcwMCBob3ZlcjpiZy1ncmF5LTYwMCB0ZXh0LWdyYXktMTAwIGJvcmRlci1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8VXBsb2FkIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiIC8+IFVwbG9hZCBQaWN0dXJlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICB7cHJvZmlsZVBpY3R1cmUgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS0xMDAgdGV4dC1zbSB0cnVuY2F0ZVwiPntwcm9maWxlUGljdHVyZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHRleHQtZ3JheS0xMDBcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzU3VibWl0dGluZ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNTdWJtaXR0aW5nID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxMb2FkZXIyIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNCBhbmltYXRlLXNwaW5cIiAvPlxuICAgICAgICAgICAgICAgIFJlZ2lzdGVyaW5nLi4uXG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgJ1JlZ2lzdGVyJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9DYXJkQ29udGVudD5cbiAgICA8L0NhcmQ+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2FyZCIsIkNhcmRDb250ZW50IiwiQ2FyZEhlYWRlciIsIkNhcmRUaXRsZSIsIklucHV0IiwiQnV0dG9uIiwiTGFiZWwiLCJVcGxvYWQiLCJMb2FkZXIyIiwidXNlVG9hc3QiLCJheGlvcyIsIlJlZ2lzdHJhdGlvbkZvcm0iLCJmdWxsTmFtZSIsInNldEZ1bGxOYW1lIiwiZG9jdW1lbnRJZCIsInNldERvY3VtZW50SWQiLCJwcm9maWxlUGljdHVyZSIsInNldFByb2ZpbGVQaWN0dXJlIiwid2FsbGV0QWRkcmVzcyIsInNldFdhbGxldEFkZHJlc3MiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJ0b2FzdCIsImdldFdhbGxldEFkZHJlc3MiLCJhY2NvdW50cyIsIndpbmRvdyIsImV0aGVyZXVtIiwicmVxdWVzdCIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIndhbGxldEFkZHJlc3NSZXN1bHQiLCJwcmludCIsIndhbGxldCIsImFwaVJlc3VsdCIsInBvc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImh0bWxGb3IiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwidHlwZSIsImFjY2VwdCIsImZpbGVzIiwib25DbGljayIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjbGljayIsInNwYW4iLCJuYW1lIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegistrationForm.tsx\n"));

/***/ })

});