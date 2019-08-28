webpackHotUpdate("static/development/pages/[id].js",{

/***/ "./lib/plantData.js":
/*!**************************!*\
  !*** ./lib/plantData.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  name: "Zebra plant",
  location: "By the balcony door, in one of the two gold planter"
}, {
  name: "Devil's ivy",
  location: "On the right side of the TV unit in the teal plantpot"
}, {
  name: "Ivy",
  location: "On the right side of the TV unit in the white plantpot with the black rim"
}, {
  name: "Lavender",
  location: "Hanging from the balcony in the silver basket"
}]);

/***/ }),

/***/ "./pages/[id].js":
/*!***********************!*\
  !*** ./pages/[id].js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Plant; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_plantData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/plantData */ "./lib/plantData.js");
var _jsxFileName = "/Users/jon/Documents/planty-bliss/pages/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Plant() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Plant name: ", router.query.id);
}

/***/ })

})
//# sourceMappingURL=[id].js.3b3e34a0ea46c6cdabde.hot-update.js.map