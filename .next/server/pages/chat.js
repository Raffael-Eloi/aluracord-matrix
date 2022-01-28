"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/chat";
exports.ids = ["pages/chat"];
exports.modules = {

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChatPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"@skynexui/components\");\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n\n\n\n\nfunction ChatPage() {\n    const { 0: message , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');\n    const { 0: messageList , 1: setMessageList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    function handleChange(event) {\n        setMessage(event.target.value);\n    }\n    function handleNewMessage(newMessage) {\n        const messageComplete = {\n            id: messageList.length + 1,\n            from: 'Raffael-Eloi',\n            text: newMessage\n        };\n        setMessageList([\n            messageComplete,\n            ...messageList\n        ]);\n        setMessage('');\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center',\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,\n            backgroundRepeat: 'no-repeat',\n            backgroundSize: 'cover',\n            backgroundBlendMode: 'multiply',\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: 'flex',\n                flexDirection: 'column',\n                flex: 1,\n                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                borderRadius: '5px',\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: '100%',\n                maxWidth: '95%',\n                maxHeight: '95vh',\n                padding: '32px'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: 'relative',\n                        display: 'flex',\n                        flex: 1,\n                        height: '80%',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: 'column',\n                        borderRadius: '5px',\n                        padding: '16px'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            messages: messageList\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: 'flex',\n                                alignItems: 'center'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                    placeholder: \"Insira sua mensagem aqui...\",\n                                    value: message,\n                                    onChange: (event)=>handleChange(event)\n                                    ,\n                                    onKeyPress: (event)=>{\n                                        if (event.key == 'Enter') {\n                                            event.preventDefault();\n                                            handleNewMessage(message);\n                                        }\n                                    },\n                                    styleSheet: {\n                                        width: '80%',\n                                        border: '0',\n                                        resize: 'none',\n                                        borderRadius: '5px',\n                                        padding: '8px 8px',\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                        marginRight: '12px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    onClick: (event)=>{\n                                        event.preventDefault();\n                                        handleNewMessage(message);\n                                    },\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this));\n};\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: '100%',\n                marginBottom: '16px',\n                display: 'flex',\n                alignItems: 'center',\n                justifyContent: 'space-between'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\nfunction MessageList(props) {\n    function handleDeleteMessage(messageForDelete) {\n    // props.setMessageList(messageList.splice(messageForDelete - 1, 1))\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: 'scroll',\n            display: 'flex',\n            flexDirection: 'column-reverse',\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: '16px'\n        },\n        children: props.messages.map((currentMessage)=>{\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: '5px',\n                    padding: '6px',\n                    marginBottom: '12px',\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: '8px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: '20px',\n                                    height: '20px',\n                                    borderRadius: '50%',\n                                    display: 'inline-block',\n                                    marginRight: '8px'\n                                },\n                                src: `https://github.com/vanessametonini.png`\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                                lineNumber: 174,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: currentMessage.from\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                                lineNumber: 184,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: '10px',\n                                    marginLeft: '8px',\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                                lineNumber: 185,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                        lineNumber: 169,\n                        columnNumber: 13\n                    }, this),\n                    currentMessage.text,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                        type: \"submit\",\n                        label: \"Excluir\",\n                        onClick: (event)=>{\n                            event.preventDefault();\n                            console.log({\n                                currentMessage\n                            });\n                            console.log(props.messageList);\n                            handleDeleteMessage(currentMessage);\n                        },\n                        buttonColors: {\n                            contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                            mainColor: 'red',\n                            mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[400],\n                            mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[600]\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                        lineNumber: 197,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, currentMessage.id, true, {\n                fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n                lineNumber: 157,\n                columnNumber: 11\n            }, this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\raffa\\\\Documents\\\\ImersaoReact2022\\\\pages\\\\chat.js\",\n        lineNumber: 144,\n        columnNumber: 5\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FFN0M5RSxzREFBSTtnQ0FBQ3lFLEdBQUcsRUFBQyxDQUFROzBDQUFFRyxjQUFjLENBQUN4RCxJQUFJOzs7Ozs7d0dBQ3RDcEIsc0RBQUk7Z0NBQ0hzQixVQUFVLEVBQUUsQ0FBQztvQ0FDWHlELFFBQVEsRUFBRSxDQUFNO29DQUNoQkMsVUFBVSxFQUFFLENBQUs7b0NBQ2pCOUMsS0FBSyxFQUFFN0Isb0VBQW9DO2dDQUM3QyxDQUFDO2dDQUNEb0UsR0FBRyxFQUFDLENBQU07MENBRVQsR0FBRyxDQUFDUSxJQUFJLEdBQUdDLGtCQUFrQjs7Ozs7Ozs7Ozs7O29CQUdqQ04sY0FBYyxDQUFDdkQsSUFBSTtnR0FDbkJsQix3REFBTTt3QkFDTHVELElBQUksRUFBQyxDQUFRO3dCQUNiQyxLQUFLLEVBQUMsQ0FBUzt3QkFDZkMsT0FBTyxHQUFFaEQsS0FBSyxHQUFJLENBQUM7NEJBQ2pCQSxLQUFLLENBQUN5QyxjQUFjOzRCQUNwQjhCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7Z0NBQUNSLGNBQWM7NEJBQUMsQ0FBQzs0QkFDOUJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZCxLQUFLLENBQUM3RCxXQUFXOzRCQUM3QjhELG1CQUFtQixDQUFDSyxjQUFjO3dCQUNwQyxDQUFDO3dCQUNEZixZQUFZLEVBQUUsQ0FBQzs0QkFDYkMsYUFBYSxFQUFFekQsc0VBQXFDOzRCQUNwRDBELFNBQVMsRUFBRSxDQUFLOzRCQUNoQkMsY0FBYyxFQUFFM0QsbUVBQW1DOzRCQUNuRDRELGVBQWUsRUFBRTVELG1FQUFtQzt3QkFDdEQsQ0FBQzs7Ozs7OztlQXJERXVFLGNBQWMsQ0FBQzFELEVBQUU7Ozs7O1FBeUQ1QixDQUFDOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1lcnNhb3JlYWN0MjAyMi8uL3BhZ2VzL2NoYXQuanM/NGNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UsIEJ1dHRvbiB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gJy4uL2NvbmZpZy5qc29uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW21lc3NhZ2VMaXN0LCBzZXRNZXNzYWdlTGlzdF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICBzZXRNZXNzYWdlKGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld01lc3NhZ2UobmV3TWVzc2FnZSkge1xyXG4gICAgY29uc3QgbWVzc2FnZUNvbXBsZXRlID0ge1xyXG4gICAgICBpZDogbWVzc2FnZUxpc3QubGVuZ3RoICsgMSxcclxuICAgICAgZnJvbTogJ1JhZmZhZWwtRWxvaScsXHJcbiAgICAgIHRleHQ6IG5ld01lc3NhZ2VcclxuICAgIH1cclxuICAgIHNldE1lc3NhZ2VMaXN0KFttZXNzYWdlQ29tcGxldGUsIC4uLm1lc3NhZ2VMaXN0XSlcclxuICAgIHNldE1lc3NhZ2UoJycpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChodHRwczovL3ZpcnR1YWxiYWNrZ3JvdW5kcy5zaXRlL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3RoZS1tYXRyaXgtZGlnaXRhbC1yYWluLmpwZylgLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgIGJhY2tncm91bmRCbGVuZE1vZGU6ICdtdWx0aXBseScsXHJcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbJzAwMCddXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICBib3hTaGFkb3c6ICcwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKScsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnOTUlJyxcclxuICAgICAgICAgIG1heEhlaWdodDogJzk1dmgnLFxyXG4gICAgICAgICAgcGFkZGluZzogJzMycHgnXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzgwJScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxNZXNzYWdlTGlzdCBtZXNzYWdlcz17bWVzc2FnZUxpc3R9IC8+XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50KX1cclxuICAgICAgICAgICAgICBvbktleVByZXNzPXtldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09ICdFbnRlcicpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVOZXdNZXNzYWdlKG1lc3NhZ2UpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcwJyxcclxuICAgICAgICAgICAgICAgIHJlc2l6ZTogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHggOHB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbnRyYXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgIGhhbmRsZU5ld01lc3NhZ2UobWVzc2FnZSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGJ1dHRvbkNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ10sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNjAwXVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxNnB4JyxcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8VGV4dCB2YXJpYW50PVwiaGVhZGluZzVcIj5DaGF0PC9UZXh0PlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXJ0aWFyeVwiXHJcbiAgICAgICAgICBjb2xvclZhcmlhbnQ9XCJuZXV0cmFsXCJcclxuICAgICAgICAgIGxhYmVsPVwiTG9nb3V0XCJcclxuICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICBmdW5jdGlvbiBoYW5kbGVEZWxldGVNZXNzYWdlKG1lc3NhZ2VGb3JEZWxldGUpIHtcclxuICAgIC8vIHByb3BzLnNldE1lc3NhZ2VMaXN0KG1lc3NhZ2VMaXN0LnNwbGljZShtZXNzYWdlRm9yRGVsZXRlIC0gMSwgMSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXHJcbiAgICAgICAgZmxleDogMSxcclxuICAgICAgICBjb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1snMDAwJ10sXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCdcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLm1lc3NhZ2VzLm1hcChjdXJyZW50TWVzc2FnZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIGtleT17Y3VycmVudE1lc3NhZ2UuaWR9XHJcbiAgICAgICAgICAgIHRhZz1cImxpXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzZweCcsXHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTJweCcsXHJcbiAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4J1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogJzhweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vdmFuZXNzYW1ldG9uaW5pLnBuZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJzdHJvbmdcIj57Y3VycmVudE1lc3NhZ2UuZnJvbX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMHB4JyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7Y3VycmVudE1lc3NhZ2UudGV4dH1cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiRXhjbHVpclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeyBjdXJyZW50TWVzc2FnZSB9KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMubWVzc2FnZUxpc3QpXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVNZXNzYWdlKGN1cnJlbnRNZXNzYWdlKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYnV0dG9uQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwMDAnXSxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzQwMF0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJ1c2VTdGF0ZSIsImFwcENvbmZpZyIsIkNoYXRQYWdlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJtZXNzYWdlTGlzdCIsInNldE1lc3NhZ2VMaXN0IiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZU5ld01lc3NhZ2UiLCJuZXdNZXNzYWdlIiwibWVzc2FnZUNvbXBsZXRlIiwiaWQiLCJsZW5ndGgiLCJmcm9tIiwidGV4dCIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwidGhlbWUiLCJjb2xvcnMiLCJwcmltYXJ5IiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImNvbG9yIiwibmV1dHJhbHMiLCJmbGV4RGlyZWN0aW9uIiwiZmxleCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicGFkZGluZyIsIkhlYWRlciIsInBvc2l0aW9uIiwiTWVzc2FnZUxpc3QiLCJtZXNzYWdlcyIsImFzIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJ0eXBlIiwibGFiZWwiLCJvbkNsaWNrIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yVmFyaWFudCIsImhyZWYiLCJwcm9wcyIsImhhbmRsZURlbGV0ZU1lc3NhZ2UiLCJtZXNzYWdlRm9yRGVsZXRlIiwidGFnIiwib3ZlcmZsb3ciLCJtYXAiLCJjdXJyZW50TWVzc2FnZSIsImhvdmVyIiwic3JjIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ }),

/***/ "@skynexui/components":
/*!***************************************!*\
  !*** external "@skynexui/components" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@skynexui/components");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Aluracord - Matrix","theme":{"colors":{"primary":{"100":"#C1EAC5","200":"#A3D9A5","300":"#7BC47F","400":"#57AE5B","500":"#3F9142","600":"#2F8132","700":"#207227","800":"#0E5814","900":"#05400A","050":"#E3F9E5"},"neutrals":{"100":"#E4E7EB","200":"#CBD2D9","300":"#9AA5B1","400":"#52667A","500":"#313D49","600":"#29333D","700":"#212931","800":"#181F25","900":"#101418","999":"#080A0C","000":"#FFFFFF","050":"#F5F7FA"}}},"stickers":["https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_1.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_2.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_3.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_4.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_5.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_6.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_7.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_8.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_9.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_10.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_11.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_12.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_13.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_14.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_15.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_16.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_17.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_18.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_19.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_20.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_21.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_22.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_23.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_24.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_25.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_26.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_27.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_28.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_29.png","https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png","http://2.bp.blogspot.com/-d21tffsTIQo/U_H9QjC69gI/AAAAAAAAKqM/wnvOyUr6a_I/s1600/Pikachu%2B2.gif","https://media1.giphy.com/media/BdghqxNFV4efm/200.gif","https://c.tenor.com/TKpmh4WFEsAAAAAC/alura-gaveta-filmes.gif","https://i.pinimg.com/originals/0b/1c/23/0b1c2307c83e1ebdeed72e41b9a058ad.gif","https://c.tenor.com/VylWt5lyjBoAAAAC/omg-yes.gif","https://i.pinimg.com/originals/96/34/c5/9634c520c9a3cd4e7f23190bb2c96500.gif"]}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/chat.js"));
module.exports = __webpack_exports__;

})();