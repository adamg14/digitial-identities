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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RegistrationForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/card */ \"(app-pages-browser)/./components/ui/card.tsx\");\n/* harmony import */ var _ui_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/input */ \"(app-pages-browser)/./components/ui/input.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _ui_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/label */ \"(app-pages-browser)/./components/ui/label.tsx\");\n/* harmony import */ var _barrel_optimize_names_Loader2_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/upload.js\");\n/* harmony import */ var _barrel_optimize_names_Loader2_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Loader2,Upload!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/loader-circle.js\");\n/* harmony import */ var _ui_use_toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/use-toast */ \"(app-pages-browser)/./components/ui/use-toast.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction RegistrationForm() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const [fullName, setFullName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [documentId, setDocumentId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [profilePicture, setProfilePicture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { toast } = (0,_ui_use_toast__WEBPACK_IMPORTED_MODULE_6__.useToast)();\n    // get the wallet address again so it can be sent to the server via the API request with the form data within the data\n    const getWalletAddress = async ()=>{\n        try {\n            const accounts = await window.ethereum.request({\n                method: \"eth_accounts\"\n            });\n            console.log(\"wallet address: \" + accounts[0]);\n            return accounts[0];\n        } catch (error) {\n            return error;\n        }\n    };\n    const handleSubmit = async (e)=>{\n        _s1();\n        e.preventDefault();\n        setIsSubmitting(true);\n        const [isSuccess1, setIsSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n        try {\n            const walletAddressResult = await getWalletAddress();\n            console.log(\"this is \" + walletAddressResult);\n            console.log(\"Submitting:\", {\n                fullName,\n                documentId,\n                profilePicture\n            });\n            // api call\n            const apiResult = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"http://localhost:8080/register-user\");\n            console.log(\"hello world\");\n            console.log(apiResult);\n        } catch (error) {\n            console.error(\"Error:\", error);\n            toast({\n                title: \"Registration Failed\",\n                description: \"There was an error registering your identity. Please try again.\",\n                variant: \"destructive\"\n            });\n        } finally{\n            setIsSubmitting(false);\n        }\n    };\n    _s1(handleSubmit, \"ViCTP4HHFAibUCy+MpSMNlNhics=\");\n    if (isSuccess) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto px-4 py-8\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Alert, {\n                    className: \"bg-green-900 border-green-700 text-green-100 max-w-md mx-auto\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckCircle2, {\n                            className: \"h-4 w-4\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AlertTitle, {\n                            children: \"Registration Successful!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AlertDescription, {\n                            children: \"Your identity has been successfully registered on the blockchain.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    onClick: resetForm,\n                    className: \"mt-4 bg-indigo-600 hover:bg-indigo-700 text-white mx-auto block\",\n                    children: \"Register Another Identity\"\n                }, void 0, false, {\n                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        className: \"bg-gray-800/50 backdrop-blur-md border-gray-700 max-w-md mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardHeader, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardTitle, {\n                    className: \"text-gray-100\",\n                    children: \"Register Your Identity\"\n                }, void 0, false, {\n                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_card__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"space-y-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                    htmlFor: \"fullName\",\n                                    className: \"text-gray-300\",\n                                    children: \"Full Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: \"fullName\",\n                                    value: fullName,\n                                    onChange: (e)=>setFullName(e.target.value),\n                                    className: \"bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400\",\n                                    placeholder: \"Enter your full name\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                    htmlFor: \"documentId\",\n                                    className: \"text-gray-300\",\n                                    children: \"Document ID\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: \"documentId\",\n                                    value: documentId,\n                                    onChange: (e)=>setDocumentId(e.target.value),\n                                    className: \"bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400\",\n                                    placeholder: \"Enter your document ID\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_label__WEBPACK_IMPORTED_MODULE_5__.Label, {\n                                    htmlFor: \"profilePicture\",\n                                    className: \"text-gray-300\",\n                                    children: \"Profile Picture\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center space-x-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_input__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                            id: \"profilePicture\",\n                                            type: \"file\",\n                                            accept: \"image/*\",\n                                            onChange: (e)=>{\n                                                var _e_target_files;\n                                                return setProfilePicture(((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) || null);\n                                            },\n                                            className: \"hidden\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                            type: \"button\",\n                                            variant: \"secondary\",\n                                            onClick: ()=>{\n                                                var _document_getElementById;\n                                                return (_document_getElementById = document.getElementById(\"profilePicture\")) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.click();\n                                            },\n                                            className: \"w-full bg-gray-700 hover:bg-gray-600 text-gray-100 border-gray-600\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                    className: \"mr-2 h-4 w-4\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                                    lineNumber: 120,\n                                                    columnNumber: 17\n                                                }, this),\n                                                \" Upload Picture\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 15\n                                        }, this),\n                                        profilePicture && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-gray-100 text-sm truncate\",\n                                            children: profilePicture.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                            lineNumber: 123,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            type: \"submit\",\n                            className: \"w-full bg-indigo-600 hover:bg-indigo-700 text-gray-100\",\n                            disabled: isSubmitting,\n                            children: isSubmitting ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Loader2_Upload_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                        className: \"mr-2 h-4 w-4 animate-spin\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 17\n                                    }, this),\n                                    \"Registering...\"\n                                ]\n                            }, void 0, true) : \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adam/Documents/encode-2024/coinbase-projects/digitial-identities/client/components/RegistrationForm.tsx\",\n        lineNumber: 76,\n        columnNumber: 5\n    }, this);\n}\n_s(RegistrationForm, \"U7AKAcIBEqLiXlGyxfHdwH5th8M=\", false, function() {\n    return [\n        _ui_use_toast__WEBPACK_IMPORTED_MODULE_6__.useToast\n    ];\n});\n_c = RegistrationForm;\nvar _c;\n$RefreshReg$(_c, \"RegistrationForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZ0M7QUFDb0M7QUFDbEM7QUFDRTtBQUNGO0FBQ1k7QUFDTDtBQUNmO0FBRVgsU0FBU1k7OztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDZSxZQUFZQyxjQUFjLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNpQixnQkFBZ0JDLGtCQUFrQixHQUFHbEIsK0NBQVFBLENBQWM7SUFDbEUsTUFBTSxDQUFDbUIsZUFBZUMsaUJBQWlCLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUNuRCxNQUFNLENBQUNxQixjQUFjQyxnQkFBZ0IsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sRUFBRXVCLEtBQUssRUFBRSxHQUFHYix1REFBUUE7SUFFMUIsc0hBQXNIO0lBQ3RILE1BQU1jLG1CQUFtQjtRQUN2QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxPQUFPQyxRQUFRLENBQUNDLE9BQU8sQ0FBQztnQkFBRUMsUUFBUTtZQUFlO1lBQ3hFQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCTixRQUFRLENBQUMsRUFBRTtZQUM1QyxPQUFPQSxRQUFRLENBQUMsRUFBRTtRQUNwQixFQUFFLE9BQU9PLE9BQU87WUFDZCxPQUFPQTtRQUNUO0lBQ0Y7SUFDQSxNQUFNQyxlQUFlLE9BQU9DOztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQmIsZ0JBQWdCO1FBQ2hCLE1BQU0sQ0FBQ2MsWUFBV0MsYUFBYSxHQUFHckMsK0NBQVFBLENBQUM7UUFDM0MsSUFBSTtZQUNGLE1BQU1zQyxzQkFBc0IsTUFBTWQ7WUFFbENNLFFBQVFDLEdBQUcsQ0FBQyxhQUFhTztZQUN6QlIsUUFBUUMsR0FBRyxDQUFDLGVBQWU7Z0JBQUVsQjtnQkFBVUU7Z0JBQVlFO1lBQWU7WUFDbEUs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LFdBQVU7Ozs7OztvQ0FBOEI7OytDQUluRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZDtHQXJJd0JqQzs7UUFNSkYsbURBQVFBOzs7S0FOSkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3RyYXRpb25Gb3JtLnRzeD8zYzc1Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZENvbnRlbnQsIENhcmRIZWFkZXIsIENhcmRUaXRsZSB9IGZyb20gJy4vdWkvY2FyZCdcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi91aS9pbnB1dCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vdWkvYnV0dG9uJ1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuL3VpL2xhYmVsJ1xuaW1wb3J0IHsgVXBsb2FkLCBMb2FkZXIyIH0gZnJvbSAnbHVjaWRlLXJlYWN0J1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiLi91aS91c2UtdG9hc3RcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RyYXRpb25Gb3JtKCkge1xuICBjb25zdCBbZnVsbE5hbWUsIHNldEZ1bGxOYW1lXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbZG9jdW1lbnRJZCwgc2V0RG9jdW1lbnRJZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3Byb2ZpbGVQaWN0dXJlLCBzZXRQcm9maWxlUGljdHVyZV0gPSB1c2VTdGF0ZTxGaWxlIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3dhbGxldEFkZHJlc3MsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KClcblxuICAvLyBnZXQgdGhlIHdhbGxldCBhZGRyZXNzIGFnYWluIHNvIGl0IGNhbiBiZSBzZW50IHRvIHRoZSBzZXJ2ZXIgdmlhIHRoZSBBUEkgcmVxdWVzdCB3aXRoIHRoZSBmb3JtIGRhdGEgd2l0aGluIHRoZSBkYXRhXG4gIGNvbnN0IGdldFdhbGxldEFkZHJlc3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LmV0aGVyZXVtLnJlcXVlc3QoeyBtZXRob2Q6ICdldGhfYWNjb3VudHMnIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJ3YWxsZXQgYWRkcmVzczogXCIgKyBhY2NvdW50c1swXSlcbiAgICAgIHJldHVybiBhY2NvdW50c1swXTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgfVxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICBjb25zdCBbaXNTdWNjZXNzLCBzZXRJc1N1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdhbGxldEFkZHJlc3NSZXN1bHQgPSBhd2FpdCBnZXRXYWxsZXRBZGRyZXNzKCk7XG4gICAgXG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgXCIgKyB3YWxsZXRBZGRyZXNzUmVzdWx0KTtcbiAgICAgIGNvbnNvbGUubG9nKCdTdWJtaXR0aW5nOicsIHsgZnVsbE5hbWUsIGRvY3VtZW50SWQsIHByb2ZpbGVQaWN0dXJlIH0pXG4gICAgICAvLyBhcGkgY2FsbFxuICAgICAgY29uc3QgYXBpUmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9yZWdpc3Rlci11c2VyXCIpO1xuICAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGFwaVJlc3VsdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKVxuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJSZWdpc3RyYXRpb24gRmFpbGVkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZXJlIHdhcyBhbiBlcnJvciByZWdpc3RlcmluZyB5b3VyIGlkZW50aXR5LiBQbGVhc2UgdHJ5IGFnYWluLlwiLFxuICAgICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgICB9KVxuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzU3VjY2Vzcykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktOFwiPlxuICAgICAgICA8QWxlcnQgY2xhc3NOYW1lPVwiYmctZ3JlZW4tOTAwIGJvcmRlci1ncmVlbi03MDAgdGV4dC1ncmVlbi0xMDAgbWF4LXctbWQgbXgtYXV0b1wiPlxuICAgICAgICAgIDxDaGVja0NpcmNsZTIgY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XG4gICAgICAgICAgPEFsZXJ0VGl0bGU+UmVnaXN0cmF0aW9uIFN1Y2Nlc3NmdWwhPC9BbGVydFRpdGxlPlxuICAgICAgICAgIDxBbGVydERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgWW91ciBpZGVudGl0eSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgcmVnaXN0ZXJlZCBvbiB0aGUgYmxvY2tjaGFpbi5cbiAgICAgICAgICA8L0FsZXJ0RGVzY3JpcHRpb24+XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgb25DbGljaz17cmVzZXRGb3JtfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTQgYmctaW5kaWdvLTYwMCBob3ZlcjpiZy1pbmRpZ28tNzAwIHRleHQtd2hpdGUgbXgtYXV0byBibG9ja1wiXG4gICAgICAgID5cbiAgICAgICAgICBSZWdpc3RlciBBbm90aGVyIElkZW50aXR5XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZCBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMC81MCBiYWNrZHJvcC1ibHVyLW1kIGJvcmRlci1ncmF5LTcwMCBtYXgtdy1tZCBteC1hdXRvXCI+XG4gICAgICA8Q2FyZEhlYWRlcj5cbiAgICAgICAgPENhcmRUaXRsZSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwXCI+UmVnaXN0ZXIgWW91ciBJZGVudGl0eTwvQ2FyZFRpdGxlPlxuICAgICAgPC9DYXJkSGVhZGVyPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJmdWxsTmFtZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIj5GdWxsIE5hbWU8L0xhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPVwiZnVsbE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZnVsbE5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RnVsbE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTcwMCBib3JkZXItZ3JheS02MDAgdGV4dC1ncmF5LTEwMCBwbGFjZWhvbGRlci1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmdWxsIG5hbWVcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJkb2N1bWVudElkXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMFwiPkRvY3VtZW50IElEPC9MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cImRvY3VtZW50SWRcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZG9jdW1lbnRJZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREb2N1bWVudElkKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS03MDAgYm9yZGVyLWdyYXktNjAwIHRleHQtZ3JheS0xMDAgcGxhY2Vob2xkZXItZ3JheS00MDBcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZG9jdW1lbnQgSURcIlxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMlwiPlxuICAgICAgICAgICAgPExhYmVsIGh0bWxGb3I9XCJwcm9maWxlUGljdHVyZVwiIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDBcIj5Qcm9maWxlIFBpY3R1cmU8L0xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJwcm9maWxlUGljdHVyZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZmlsZVBpY3R1cmUoZS50YXJnZXQuZmlsZXM/LlswXSB8fCBudWxsKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGVQaWN0dXJlJyk/LmNsaWNrKCl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLWdyYXktNzAwIGhvdmVyOmJnLWdyYXktNjAwIHRleHQtZ3JheS0xMDAgYm9yZGVyLWdyYXktNjAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxVcGxvYWQgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz4gVXBsb2FkIFBpY3R1cmVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIHtwcm9maWxlUGljdHVyZSAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTEwMCB0ZXh0LXNtIHRydW5jYXRlXCI+e3Byb2ZpbGVQaWN0dXJlLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1pbmRpZ28tNjAwIGhvdmVyOmJnLWluZGlnby03MDAgdGV4dC1ncmF5LTEwMFwiXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0aW5nfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc1N1Ym1pdHRpbmcgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPExvYWRlcjIgY2xhc3NOYW1lPVwibXItMiBoLTQgdy00IGFuaW1hdGUtc3BpblwiIC8+XG4gICAgICAgICAgICAgICAgUmVnaXN0ZXJpbmcuLi5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAnUmVnaXN0ZXInXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJDYXJkSGVhZGVyIiwiQ2FyZFRpdGxlIiwiSW5wdXQiLCJCdXR0b24iLCJMYWJlbCIsIlVwbG9hZCIsIkxvYWRlcjIiLCJ1c2VUb2FzdCIsImF4aW9zIiwiUmVnaXN0cmF0aW9uRm9ybSIsImZ1bGxOYW1lIiwic2V0RnVsbE5hbWUiLCJkb2N1bWVudElkIiwic2V0RG9jdW1lbnRJZCIsInByb2ZpbGVQaWN0dXJlIiwic2V0UHJvZmlsZVBpY3R1cmUiLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsInRvYXN0IiwiZ2V0V2FsbGV0QWRkcmVzcyIsImFjY291bnRzIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaXNTdWNjZXNzIiwic2V0SXNTdWNjZXNzIiwid2FsbGV0QWRkcmVzc1Jlc3VsdCIsImFwaVJlc3VsdCIsInBvc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsImRpdiIsImNsYXNzTmFtZSIsIkFsZXJ0IiwiQ2hlY2tDaXJjbGUyIiwiQWxlcnRUaXRsZSIsIkFsZXJ0RGVzY3JpcHRpb24iLCJvbkNsaWNrIiwicmVzZXRGb3JtIiwiZm9ybSIsIm9uU3VibWl0IiwiaHRtbEZvciIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ0eXBlIiwiYWNjZXB0IiwiZmlsZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJzcGFuIiwibmFtZSIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/RegistrationForm.tsx\n"));

/***/ })

});