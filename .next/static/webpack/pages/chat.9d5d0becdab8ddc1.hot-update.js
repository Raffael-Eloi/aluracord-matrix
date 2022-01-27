"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction ChatPage() {\n    var handleChange = function handleChange(event) {\n        setMessage(event.target.value);\n    };\n    var handleNewMessage = function handleNewMessage(newMessage) {\n        var messageComplete = {\n            id: messageList.length + 1,\n            from: 'Raffael-Eloi',\n            text: newMessage\n        };\n        setMessageList([\n            messageComplete\n        ].concat(_toConsumableArray(messageList)));\n        setMessage('');\n    };\n    var handleDeleteMessage = function handleDeleteMessage(messageForDelete) {\n        setMessageList(messageList.delete(messageForDelete.id));\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(''), message = ref[0], setMessage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), messageList = ref1[0], setMessageList = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            messages: messageList\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    value: message,\n                                    onChange: function(event) {\n                                        return handleChange(event);\n                                    },\n                                    onKeyPress: function(event) {\n                                        if (event.key == 'Enter') {\n                                            event.preventDefault();\n                                            handleNewMessage(message);\n                                        }\n                                    },\n                                    styleSheet: {\n                                        width: '80%',\n                                        border: '0',\n                                        resize: 'none',\n                                        borderRadius: '5px',\n                                        padding: '8px 8px',\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                        marginRight: '12px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    onClick: function(event) {\n                                        event.preventDefault();\n                                        handleNewMessage(message);\n                                    },\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"/CBmIaiZPH8FVbq8GBNpEEz7dh4=\");\n_c = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                    lineNumber: 130,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                    lineNumber: 131,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n            lineNumber: 121,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c1 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.messages.map(function(currentMessage) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: \"https://github.com/vanessametonini.png\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                                lineNumber: 174,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: currentMessage.from\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                                lineNumber: 184,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                                lineNumber: 185,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                        lineNumber: 169,\n                        columnNumber: 13\n                    }, _this),\n                    currentMessage.text,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"submit\",\n                        label: \"Excluir\",\n                        onClick: function(event) {\n                            console.log(event);\n                            event.preventDefault();\n                        // props.handleDeleteMessage(message)\n                        },\n                        buttonColors: {\n                            contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                            mainColor: 'red',\n                            mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                            mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                        lineNumber: 197,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, currentMessage.id, true, {\n                fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                lineNumber: 157,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n        lineNumber: 144,\n        columnNumber: 5\n    }, this));\n}\n_c2 = MessageList;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ChatPage\");\n$RefreshReg$(_c1, \"Header\");\n$RefreshReg$(_c2, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwRTtBQUMxQztBQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkIsUUFBUSxDQUFDTyxRQUFRLEdBQUcsQ0FBQztRQUl6QkMsWUFBWSxHQUFyQixRQUFRLENBQUNBLFlBQVksQ0FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDNUJDLFVBQVUsQ0FBQ0QsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEtBQUs7SUFDL0IsQ0FBQztRQUVRQyxnQkFBZ0IsR0FBekIsUUFBUSxDQUFDQSxnQkFBZ0IsQ0FBQ0MsVUFBVSxFQUFFLENBQUM7UUFDckMsR0FBSyxDQUFDQyxlQUFlLEdBQUcsQ0FBQztZQUN2QkMsRUFBRSxFQUFFQyxXQUFXLENBQUNDLE1BQU0sR0FBRyxDQUFDO1lBQzFCQyxJQUFJLEVBQUUsQ0FBYztZQUNwQkMsSUFBSSxFQUFFTixVQUFVO1FBQ2xCLENBQUM7UUFDRE8sY0FBYyxDQUFDLENBQUNOO1lBQUFBLGVBQWU7UUFBZ0IsQ0FBQyxDQUFqQyxNQUFpQyxvQkFBWkUsV0FBVztRQUMvQ1AsVUFBVSxDQUFDLENBQUU7SUFDZixDQUFDO1FBRVFZLG1CQUFtQixHQUE1QixRQUFRLENBQUNBLG1CQUFtQixDQUFDQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzlDRixjQUFjLENBQUNKLFdBQVcsQ0FBQ08sTUFBTSxDQUFDRCxnQkFBZ0IsQ0FBQ1AsRUFBRTtJQUN2RCxDQUFDOztJQW5CRCxHQUFLLENBQXlCWCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFsQ29CLE9BQU8sR0FBZ0JwQixHQUFZLEtBQTFCSyxVQUFVLEdBQUlMLEdBQVk7SUFDMUMsR0FBSyxDQUFpQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUExQ1ksV0FBVyxHQUFvQlosSUFBWSxLQUE5QmdCLGNBQWMsR0FBSWhCLElBQVk7SUFvQmxELE1BQU0sNkVBQ0hMLHFEQUFHO1FBQ0YwQixVQUFVLEVBQUUsQ0FBQztZQUNYQyxPQUFPLEVBQUUsQ0FBTTtZQUNmQyxVQUFVLEVBQUUsQ0FBUTtZQUNwQkMsY0FBYyxFQUFFLENBQVE7WUFDeEJDLGVBQWUsRUFBRXhCLG1FQUFtQztZQUNwRDRCLGVBQWUsRUFBRyxDQUEyRjtZQUM3R0MsZ0JBQWdCLEVBQUUsQ0FBVztZQUM3QkMsY0FBYyxFQUFFLENBQU87WUFDdkJDLG1CQUFtQixFQUFFLENBQVU7WUFDL0JDLEtBQUssRUFBRWhDLHNFQUFxQztRQUM5QyxDQUFDOzhGQUVBTixxREFBRztZQUNGMEIsVUFBVSxFQUFFLENBQUM7Z0JBQ1hDLE9BQU8sRUFBRSxDQUFNO2dCQUNmYSxhQUFhLEVBQUUsQ0FBUTtnQkFDdkJDLElBQUksRUFBRSxDQUFDO2dCQUNQQyxTQUFTLEVBQUUsQ0FBK0I7Z0JBQzFDQyxZQUFZLEVBQUUsQ0FBSztnQkFDbkJiLGVBQWUsRUFBRXhCLG9FQUFvQztnQkFDckRzQyxNQUFNLEVBQUUsQ0FBTTtnQkFDZEMsUUFBUSxFQUFFLENBQUs7Z0JBQ2ZDLFNBQVMsRUFBRSxDQUFNO2dCQUNqQkMsT0FBTyxFQUFFLENBQU07WUFDakIsQ0FBQzs7NEZBRUFDLE1BQU07Ozs7OzRGQUNOaEQscURBQUc7b0JBQ0YwQixVQUFVLEVBQUUsQ0FBQzt3QkFDWHVCLFFBQVEsRUFBRSxDQUFVO3dCQUNwQnRCLE9BQU8sRUFBRSxDQUFNO3dCQUNmYyxJQUFJLEVBQUUsQ0FBQzt3QkFDUEcsTUFBTSxFQUFFLENBQUs7d0JBQ2JkLGVBQWUsRUFBRXhCLG9FQUFvQzt3QkFDckRrQyxhQUFhLEVBQUUsQ0FBUTt3QkFDdkJHLFlBQVksRUFBRSxDQUFLO3dCQUNuQkksT0FBTyxFQUFFLENBQU07b0JBQ2pCLENBQUM7O29HQUVBRyxXQUFXOzRCQUFDQyxRQUFRLEVBQUVsQyxXQUFXOzs7Ozs7b0dBQ2pDakIscURBQUc7NEJBQ0ZvRCxFQUFFLEVBQUMsQ0FBTTs0QkFDVDFCLFVBQVUsRUFBRSxDQUFDO2dDQUNYQyxPQUFPLEVBQUUsQ0FBTTtnQ0FDZkMsVUFBVSxFQUFFLENBQVE7NEJBQ3RCLENBQUM7OzRHQUVBMUIsMkRBQVM7b0NBQ1JtRCxXQUFXLEVBQUMsQ0FBNkI7b0NBQ3pDekMsS0FBSyxFQUFFYSxPQUFPO29DQUNkNkIsUUFBUSxFQUFFN0MsUUFBUSxDQUFSQSxLQUFLO3dDQUFJRCxNQUFNLENBQU5BLFlBQVksQ0FBQ0MsS0FBSzs7b0NBQ3JDOEMsVUFBVSxFQUFFOUMsUUFBUSxDQUFSQSxLQUFLLEVBQUksQ0FBQzt3Q0FDcEIsRUFBRSxFQUFFQSxLQUFLLENBQUMrQyxHQUFHLElBQUksQ0FBTyxRQUFFLENBQUM7NENBQ3pCL0MsS0FBSyxDQUFDZ0QsY0FBYzs0Q0FDcEI1QyxnQkFBZ0IsQ0FBQ1ksT0FBTzt3Q0FDMUIsQ0FBQztvQ0FDSCxDQUFDO29DQUNEQyxVQUFVLEVBQUUsQ0FBQzt3Q0FDWGdDLEtBQUssRUFBRSxDQUFLO3dDQUNaQyxNQUFNLEVBQUUsQ0FBRzt3Q0FDWEMsTUFBTSxFQUFFLENBQU07d0NBQ2RqQixZQUFZLEVBQUUsQ0FBSzt3Q0FDbkJJLE9BQU8sRUFBRSxDQUFTO3dDQUNsQmpCLGVBQWUsRUFBRXhCLG9FQUFvQzt3Q0FDckR1RCxXQUFXLEVBQUUsQ0FBTTt3Q0FDbkJ2QixLQUFLLEVBQUVoQyxvRUFBb0M7b0NBQzdDLENBQUM7Ozs7Ozs0R0FFRkYsd0RBQU07b0NBQ0wwRCxJQUFJLEVBQUMsQ0FBUTtvQ0FDYkMsS0FBSyxFQUFDLENBQVE7b0NBQ2RDLE9BQU8sRUFBRXZELFFBQVEsQ0FBUkEsS0FBSyxFQUFJLENBQUM7d0NBQ2pCQSxLQUFLLENBQUNnRCxjQUFjO3dDQUNwQjVDLGdCQUFnQixDQUFDWSxPQUFPO29DQUMxQixDQUFDO29DQUNEd0MsWUFBWSxFQUFFLENBQUM7d0NBQ2JDLGFBQWEsRUFBRTVELHNFQUFxQzt3Q0FDcEQ2RCxTQUFTLEVBQUU3RCxtRUFBbUM7d0NBQzlDOEQsY0FBYyxFQUFFOUQsbUVBQW1DO3dDQUNuRCtELGVBQWUsRUFBRS9ELG1FQUFtQztvQ0FDdEQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZixDQUFDO0dBL0d1QkMsUUFBUTtLQUFSQSxRQUFRO1NBaUh2QnlDLE1BQU0sR0FBRyxDQUFDO0lBQ2pCLE1BQU07OEZBRURoRCxxREFBRztZQUNGMEIsVUFBVSxFQUFFLENBQUM7Z0JBQ1hnQyxLQUFLLEVBQUUsQ0FBTTtnQkFDYlksWUFBWSxFQUFFLENBQU07Z0JBQ3BCM0MsT0FBTyxFQUFFLENBQU07Z0JBQ2ZDLFVBQVUsRUFBRSxDQUFRO2dCQUNwQkMsY0FBYyxFQUFFLENBQWU7WUFDakMsQ0FBQzs7NEZBRUE1QixzREFBSTtvQkFBQ3NFLE9BQU8sRUFBQyxDQUFVOzhCQUFDLENBQUk7Ozs7Ozs0RkFDNUJuRSx3REFBTTtvQkFDTG1FLE9BQU8sRUFBQyxDQUFVO29CQUNsQkMsWUFBWSxFQUFDLENBQVM7b0JBQ3RCVCxLQUFLLEVBQUMsQ0FBUTtvQkFDZFUsSUFBSSxFQUFDLENBQUc7Ozs7Ozs7Ozs7Ozs7QUFLbEIsQ0FBQztNQXRCUXpCLE1BQU07U0F3Qk5FLFdBQVcsQ0FBQ3dCLEtBQUssRUFBRSxDQUFDOztJQUMzQixNQUFNLDZFQUNIMUUscURBQUc7UUFDRjJFLEdBQUcsRUFBQyxDQUFJO1FBQ1JqRCxVQUFVLEVBQUUsQ0FBQztZQUNYa0QsUUFBUSxFQUFFLENBQVE7WUFDbEJqRCxPQUFPLEVBQUUsQ0FBTTtZQUNmYSxhQUFhLEVBQUUsQ0FBZ0I7WUFDL0JDLElBQUksRUFBRSxDQUFDO1lBQ1BILEtBQUssRUFBRWhDLHNFQUFxQztZQUM1Q2dFLFlBQVksRUFBRSxDQUFNO1FBQ3RCLENBQUM7a0JBRUFJLEtBQUssQ0FBQ3ZCLFFBQVEsQ0FBQzBCLEdBQUcsQ0FBQ0MsUUFBUSxDQUFSQSxjQUFjLEVBQUksQ0FBQztZQUNyQyxNQUFNLDZFQUNIN0Usc0RBQUk7Z0JBRUgwRSxHQUFHLEVBQUMsQ0FBSTtnQkFDUmpELFVBQVUsRUFBRSxDQUFDO29CQUNYaUIsWUFBWSxFQUFFLENBQUs7b0JBQ25CSSxPQUFPLEVBQUUsQ0FBSztvQkFDZHVCLFlBQVksRUFBRSxDQUFNO29CQUNwQlMsS0FBSyxFQUFFLENBQUM7d0JBQ05qRCxlQUFlLEVBQUV4QixvRUFBb0M7b0JBQ3ZELENBQUM7Z0JBQ0gsQ0FBQzs7Z0dBRUFOLHFEQUFHO3dCQUNGMEIsVUFBVSxFQUFFLENBQUM7NEJBQ1g0QyxZQUFZLEVBQUUsQ0FBSzt3QkFDckIsQ0FBQzs7d0dBRUFuRSx1REFBSztnQ0FDSnVCLFVBQVUsRUFBRSxDQUFDO29DQUNYZ0MsS0FBSyxFQUFFLENBQU07b0NBQ2JkLE1BQU0sRUFBRSxDQUFNO29DQUNkRCxZQUFZLEVBQUUsQ0FBSztvQ0FDbkJoQixPQUFPLEVBQUUsQ0FBYztvQ0FDdkJrQyxXQUFXLEVBQUUsQ0FBSztnQ0FDcEIsQ0FBQztnQ0FDRG1CLEdBQUcsRUFBRyxDQUFzQzs7Ozs7O3dHQUU3Qy9FLHNEQUFJO2dDQUFDMEUsR0FBRyxFQUFDLENBQVE7MENBQUVHLGNBQWMsQ0FBQzNELElBQUk7Ozs7Ozt3R0FDdENsQixzREFBSTtnQ0FDSHlCLFVBQVUsRUFBRSxDQUFDO29DQUNYdUQsUUFBUSxFQUFFLENBQU07b0NBQ2hCQyxVQUFVLEVBQUUsQ0FBSztvQ0FDakI1QyxLQUFLLEVBQUVoQyxvRUFBb0M7Z0NBQzdDLENBQUM7Z0NBQ0RxRSxHQUFHLEVBQUMsQ0FBTTswQ0FFVCxHQUFHLENBQUNRLElBQUksR0FBR0Msa0JBQWtCOzs7Ozs7Ozs7Ozs7b0JBR2pDTixjQUFjLENBQUMxRCxJQUFJO2dHQUNuQmhCLHdEQUFNO3dCQUNMMEQsSUFBSSxFQUFDLENBQVE7d0JBQ2JDLEtBQUssRUFBQyxDQUFTO3dCQUNmQyxPQUFPLEVBQUV2RCxRQUFRLENBQVJBLEtBQUssRUFBSSxDQUFDOzRCQUNqQjRFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDN0UsS0FBSzs0QkFDakJBLEtBQUssQ0FBQ2dELGNBQWM7d0JBQ3BCLEVBQXFDO3dCQUN2QyxDQUFDO3dCQUNEUSxZQUFZLEVBQUUsQ0FBQzs0QkFDYkMsYUFBYSxFQUFFNUQsc0VBQXFDOzRCQUNwRDZELFNBQVMsRUFBRSxDQUFLOzRCQUNoQkMsY0FBYyxFQUFFOUQsbUVBQW1DOzRCQUNuRCtELGVBQWUsRUFBRS9ELG1FQUFtQzt3QkFDdEQsQ0FBQzs7Ozs7OztlQXBERXdFLGNBQWMsQ0FBQzlELEVBQUU7Ozs7O1FBd0Q1QixDQUFDOzs7Ozs7QUFHUCxDQUFDO01BM0VRa0MsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRQYWdlKCkge1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFttZXNzYWdlTGlzdCwgc2V0TWVzc2FnZUxpc3RdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgc2V0TWVzc2FnZShldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVOZXdNZXNzYWdlKG5ld01lc3NhZ2UpIHtcclxuICAgIGNvbnN0IG1lc3NhZ2VDb21wbGV0ZSA9IHtcclxuICAgICAgaWQ6IG1lc3NhZ2VMaXN0Lmxlbmd0aCArIDEsXHJcbiAgICAgIGZyb206ICdSYWZmYWVsLUVsb2knLFxyXG4gICAgICB0ZXh0OiBuZXdNZXNzYWdlXHJcbiAgICB9XHJcbiAgICBzZXRNZXNzYWdlTGlzdChbbWVzc2FnZUNvbXBsZXRlLCAuLi5tZXNzYWdlTGlzdF0pXHJcbiAgICBzZXRNZXNzYWdlKCcnKVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlTWVzc2FnZShtZXNzYWdlRm9yRGVsZXRlKSB7XHJcbiAgICBzZXRNZXNzYWdlTGlzdChtZXNzYWdlTGlzdC5kZWxldGUobWVzc2FnZUZvckRlbGV0ZS5pZCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylgLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXHJcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnOTUlJyxcclxuICAgICAgICAgIG1heEhlaWdodDogJzk1dmgnLFxyXG4gICAgICAgICAgcGFkZGluZzogJzMycHgnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzgwJScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZXNzYWdlcz17bWVzc2FnZUxpc3R9IC8+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50KX1cclxuICAgICAgICAgICAgICBvbktleVByZXNzPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVOZXdNZXNzYWdlKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHggOHB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbnRyYXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIGhhbmRsZU5ld01lc3NhZ2UobWVzc2FnZSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGJ1dHRvbkNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ10sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB2YXJpYW50PVwiaGVhZGluZzVcIj5DaGF0PC9UZXh0PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICBjb2xvclZhcmlhbnQ9XCJuZXV0cmFsXCJcclxuICAgICAgICAgIGxhYmVsPVwiTG9nb3V0XCJcclxuICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ10sXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCdcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLm1lc3NhZ2VzLm1hcChjdXJyZW50TWVzc2FnZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIGtleT17Y3VycmVudE1lc3NhZ2UuaWR9XHJcbiAgICAgICAgICAgIHRhZz1cImxpXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4J1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vdmFuZXNzYW1ldG9uaW5pLnBuZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJzdHJvbmdcIj57Y3VycmVudE1lc3NhZ2UuZnJvbX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7Y3VycmVudE1lc3NhZ2UudGV4dH1cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRXhjbHVpclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9wcy5oYW5kbGVEZWxldGVNZXNzYWdlKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvckxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIkJ1dHRvbiIsInVzZVN0YXRlIiwiYXBwQ29uZmlnIiwiQ2hhdFBhZ2UiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsInNldE1lc3NhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZU5ld01lc3NhZ2UiLCJuZXdNZXNzYWdlIiwibWVzc2FnZUNvbXBsZXRlIiwiaWQiLCJtZXNzYWdlTGlzdCIsImxlbmd0aCIsImZyb20iLCJ0ZXh0Iiwic2V0TWVzc2FnZUxpc3QiLCJoYW5kbGVEZWxldGVNZXNzYWdlIiwibWVzc2FnZUZvckRlbGV0ZSIsImRlbGV0ZSIsIm1lc3NhZ2UiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJjb2xvciIsIm5ldXRyYWxzIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInBhZGRpbmciLCJIZWFkZXIiLCJwb3NpdGlvbiIsIk1lc3NhZ2VMaXN0IiwibWVzc2FnZXMiLCJhcyIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJ3aWR0aCIsImJvcmRlciIsInJlc2l6ZSIsIm1hcmdpblJpZ2h0IiwidHlwZSIsImxhYmVsIiwib25DbGljayIsImJ1dHRvbkNvbG9ycyIsImNvbnRyYXN0Q29sb3IiLCJtYWluQ29sb3IiLCJtYWluQ29sb3JMaWdodCIsIm1haW5Db2xvclN0cm9uZyIsIm1hcmdpbkJvdHRvbSIsInZhcmlhbnQiLCJjb2xvclZhcmlhbnQiLCJocmVmIiwicHJvcHMiLCJ0YWciLCJvdmVyZmxvdyIsIm1hcCIsImN1cnJlbnRNZXNzYWdlIiwiaG92ZXIiLCJzcmMiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});