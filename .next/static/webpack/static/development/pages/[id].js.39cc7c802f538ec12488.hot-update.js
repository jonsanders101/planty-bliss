webpackHotUpdate("static/development/pages/[id].js",{

/***/ "./lib/plantData.js":
/*!**************************!*\
  !*** ./lib/plantData.js ***!
  \**************************/
/*! exports provided: default, getPlant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlant", function() { return getPlant; });
var plantData = [{
  name: "Zebra plant",
  id: "zebra-plant",
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
}];
/* harmony default export */ __webpack_exports__["default"] = (plantData);
function getPlant(plantId) {
  return plantData.find(function (plant) {
    return plant.id === plantId;
  });
}

/***/ })

})
//# sourceMappingURL=[id].js.39cc7c802f538ec12488.hot-update.js.map