/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/skeleton.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/skeleton.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/jam_background.jpg */ \"./src/images/jam_background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n* Skeleton V2.0.4\\n* Copyright 2014, Dave Gamache\\n* www.getskeleton.com\\n* Free to use under the MIT license.\\n* http://www.opensource.org/licenses/mit-license.php\\n* 12/29/2014\\n*/\\n\\n\\n/* Table of contents\\n––––––––––––––––––––––––––––––––––––––––––––––––––\\n- Grid\\n- Base Styles\\n- Typography\\n- Links\\n- Buttons\\n- Forms\\n- Lists\\n- Code\\n- Tables\\n- Spacing\\n- Utilities\\n- Clearing\\n- Media Queries\\n*/\\n\\n\\n/* Grid\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\n.container {\\n  display: grid;\\n  position: relative;\\n  width: 100%;\\n  max-width: 960px;\\n  margin: 0 auto;\\n  padding: 0 20px;\\n  box-sizing: border-box; }\\n.column,\\n.columns {\\n  width: 100%;\\n  float: left;\\n  box-sizing: border-box; }\\n\\n/* For devices larger than 400px */\\n@media (min-width: 400px) {\\n  .container {\\n    width: 85%;\\n    padding: 0; }\\n}\\n\\n/* For devices larger than 550px */\\n@media (min-width: 550px) {\\n  .container {\\n    width: 80%; }\\n  .column,\\n  .columns {\\n    margin-left: 4%; }\\n  .column:first-child,\\n  .columns:first-child {\\n    margin-left: 0; }\\n\\n  .one.column,\\n  .one.columns                    { width: 4.66666666667%; }\\n  .two.columns                    { width: 13.3333333333%; }\\n  .three.columns                  { width: 22%;            }\\n  .four.columns                   { width: 30.6666666667%; }\\n  .five.columns                   { width: 39.3333333333%; }\\n  .six.columns                    { width: 48%;            }\\n  .seven.columns                  { width: 56.6666666667%; }\\n  .eight.columns                  { width: 65.3333333333%; }\\n  .nine.columns                   { width: 74.0%;          }\\n  .ten.columns                    { width: 82.6666666667%; }\\n  .eleven.columns                 { width: 91.3333333333%; }\\n  .twelve.columns                 { width: 100%; margin-left: 0; }\\n\\n  .one-third.column               { width: 30.6666666667%; }\\n  .two-thirds.column              { width: 65.3333333333%; }\\n\\n  .one-half.column                { width: 48%; }\\n\\n  /* Offsets */\\n  .offset-by-one.column,\\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\\n  .offset-by-two.column,\\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\\n  .offset-by-three.column,\\n  .offset-by-three.columns        { margin-left: 26%;            }\\n  .offset-by-four.column,\\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\\n  .offset-by-five.column,\\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\\n  .offset-by-six.column,\\n  .offset-by-six.columns          { margin-left: 52%;            }\\n  .offset-by-seven.column,\\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\\n  .offset-by-eight.column,\\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\\n  .offset-by-nine.column,\\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\\n  .offset-by-ten.column,\\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\\n  .offset-by-eleven.column,\\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\\n\\n  .offset-by-one-third.column,\\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\\n  .offset-by-two-thirds.column,\\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\\n\\n  .offset-by-one-half.column,\\n  .offset-by-one-half.columns     { margin-left: 52%; }\\n\\n}\\n\\n\\n/* Base Styles\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\n/* NOTE\\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\\nare based on 10px sizing. So basically 1.5rem = 15px :) */\\nhtml {\\n  font-size: 62.5%; \\n  margin: 0;\\n}\\nbody {\\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\\n  line-height: 1.6;\\n  font-weight: 400;\\n  font-family: \\\"Raleway\\\", \\\"HelveticaNeue\\\", \\\"Helvetica Neue\\\", Helvetica, Arial, sans-serif;\\n  color: #222; \\n\\n  margin: 0;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n\\n/* Typography\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\nh1, h2, h3, h4, h5, h6 {\\n  margin-top: 0;\\n  margin-bottom: 2rem;\\n  font-weight: 300; }\\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\\n\\n/* Larger than phablet */\\n@media (min-width: 550px) {\\n  h1 { font-size: 5.0rem; }\\n  h2 { font-size: 4.2rem; }\\n  h3 { font-size: 3.6rem; }\\n  h4 { font-size: 3.0rem; }\\n  h5 { font-size: 2.4rem; }\\n  h6 { font-size: 1.5rem; }\\n}\\n\\np {\\n  margin-top: 0; }\\n\\n\\n/* Links\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\na {\\n  color: #1EAEDB; }\\na:hover {\\n  color: #0FA0CE; }\\n\\n\\n/* Buttons\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\n.button,\\nbutton,\\ninput[type=\\\"submit\\\"],\\ninput[type=\\\"reset\\\"],\\ninput[type=\\\"button\\\"] {\\n  display: inline-block;\\n  height: 38px;\\n  padding: 0 30px;\\n  color: #555;\\n  text-align: center;\\n  font-size: 11px;\\n  font-weight: 600;\\n  line-height: 38px;\\n  letter-spacing: .1rem;\\n  text-transform: uppercase;\\n  text-decoration: none;\\n  white-space: nowrap;\\n  background-color: transparent;\\n  border-radius: 4px;\\n  border: 1px solid #bbb;\\n  cursor: pointer;\\n  box-sizing: border-box; }\\n.button:hover,\\nbutton:hover,\\ninput[type=\\\"submit\\\"]:hover,\\ninput[type=\\\"reset\\\"]:hover,\\ninput[type=\\\"button\\\"]:hover,\\n.button:focus,\\nbutton:focus,\\ninput[type=\\\"submit\\\"]:focus,\\ninput[type=\\\"reset\\\"]:focus,\\ninput[type=\\\"button\\\"]:focus {\\n  color: #333;\\n  border-color: #888;\\n  outline: 0; }\\n.button.button-primary,\\nbutton.button-primary,\\ninput[type=\\\"submit\\\"].button-primary,\\ninput[type=\\\"reset\\\"].button-primary,\\ninput[type=\\\"button\\\"].button-primary {\\n  color: #FFF;\\n  background-color: #33C3F0;\\n  border-color: #33C3F0; }\\n.button.button-primary:hover,\\nbutton.button-primary:hover,\\ninput[type=\\\"submit\\\"].button-primary:hover,\\ninput[type=\\\"reset\\\"].button-primary:hover,\\ninput[type=\\\"button\\\"].button-primary:hover,\\n.button.button-primary:focus,\\nbutton.button-primary:focus,\\ninput[type=\\\"submit\\\"].button-primary:focus,\\ninput[type=\\\"reset\\\"].button-primary:focus,\\ninput[type=\\\"button\\\"].button-primary:focus {\\n  color: #FFF;\\n  background-color: #1EAEDB;\\n  border-color: #1EAEDB; }\\n\\n\\n/* Forms\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\ninput[type=\\\"email\\\"],\\ninput[type=\\\"number\\\"],\\ninput[type=\\\"search\\\"],\\ninput[type=\\\"text\\\"],\\ninput[type=\\\"tel\\\"],\\ninput[type=\\\"url\\\"],\\ninput[type=\\\"password\\\"],\\ntextarea,\\nselect {\\n  height: 38px;\\n  padding: 6px 10px; /* The 6px vertically centers text on FF, ignored by Webkit */\\n  background-color: #fff;\\n  border: 1px solid #D1D1D1;\\n  border-radius: 4px;\\n  box-shadow: none;\\n  box-sizing: border-box; }\\n/* Removes awkward default styles on some inputs for iOS */\\ninput[type=\\\"email\\\"],\\ninput[type=\\\"number\\\"],\\ninput[type=\\\"search\\\"],\\ninput[type=\\\"text\\\"],\\ninput[type=\\\"tel\\\"],\\ninput[type=\\\"url\\\"],\\ninput[type=\\\"password\\\"],\\ntextarea {\\n  -webkit-appearance: none;\\n     -moz-appearance: none;\\n          appearance: none; }\\ntextarea {\\n  min-height: 65px;\\n  padding-top: 6px;\\n  padding-bottom: 6px; }\\ninput[type=\\\"email\\\"]:focus,\\ninput[type=\\\"number\\\"]:focus,\\ninput[type=\\\"search\\\"]:focus,\\ninput[type=\\\"text\\\"]:focus,\\ninput[type=\\\"tel\\\"]:focus,\\ninput[type=\\\"url\\\"]:focus,\\ninput[type=\\\"password\\\"]:focus,\\ntextarea:focus,\\nselect:focus {\\n  border: 1px solid #33C3F0;\\n  outline: 0; }\\nlabel,\\nlegend {\\n  display: block;\\n  margin-bottom: .5rem;\\n  font-weight: 600; }\\nfieldset {\\n  padding: 0;\\n  border-width: 0; }\\ninput[type=\\\"checkbox\\\"],\\ninput[type=\\\"radio\\\"] {\\n  display: inline; }\\nlabel > .label-body {\\n  display: inline-block;\\n  margin-left: .5rem;\\n  font-weight: normal; }\\n\\n\\n/* Lists\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\nul {\\n  list-style: circle inside; }\\nol {\\n  list-style: decimal inside; }\\nol, ul {\\n  padding-left: 0;\\n  margin-top: 0; }\\nul ul,\\nul ol,\\nol ol,\\nol ul {\\n  margin: 1.5rem 0 1.5rem 3rem;\\n  font-size: 90%; }\\nli {\\n  margin-bottom: 1rem; }\\n\\n\\n/* Code\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\ncode {\\n  padding: .2rem .5rem;\\n  margin: 0 .2rem;\\n  font-size: 90%;\\n  white-space: nowrap;\\n  background: #F1F1F1;\\n  border: 1px solid #E1E1E1;\\n  border-radius: 4px; }\\npre > code {\\n  display: block;\\n  padding: 1rem 1.5rem;\\n  white-space: pre; }\\n\\n\\n/* Tables\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\nth,\\ntd {\\n  padding: 12px 15px;\\n  text-align: left;\\n  border-bottom: 1px solid #E1E1E1; }\\nth:first-child,\\ntd:first-child {\\n  padding-left: 0; }\\nth:last-child,\\ntd:last-child {\\n  padding-right: 0; }\\n\\n\\n/* Spacing\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\nbutton,\\n.button {\\n  margin-bottom: 1rem; }\\ninput,\\ntextarea,\\nselect,\\nfieldset {\\n  margin-bottom: 1.5rem; }\\npre,\\nblockquote,\\ndl,\\nfigure,\\ntable,\\np,\\nul,\\nol,\\nform {\\n  margin-bottom: 2.5rem; }\\n\\n\\n/* Utilities\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\n.u-full-width {\\n  width: 100%;\\n  box-sizing: border-box; }\\n.u-max-full-width {\\n  max-width: 100%;\\n  box-sizing: border-box; }\\n.u-pull-right {\\n  float: right; }\\n.u-pull-left {\\n  float: left; }\\n\\n\\n/* Misc\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\nhr {\\n  margin-top: 3rem;\\n  margin-bottom: 3.5rem;\\n  border-width: 0;\\n  border-top: 1px solid #E1E1E1; }\\n\\n\\n/* Clearing\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\n\\n/* Self Clearing Goodness */\\n.container:after,\\n.row:after,\\n.u-cf {\\n  content: \\\"\\\";\\n  display: table;\\n  clear: both; }\\n\\n\\n/* Media Queries\\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\\n/*\\nNote: The best way to structure the use of media queries is to create the queries\\nnear the relevant code. For example, if you wanted to change the styles for buttons\\non small devices, paste the mobile query code up in the buttons section and style it\\nthere.\\n*/\\n\\n\\n/* Larger than mobile */\\n@media (min-width: 400px) {}\\n\\n/* Larger than phablet (also point when grid becomes active) */\\n@media (min-width: 550px) {}\\n\\n/* Larger than tablet */\\n@media (min-width: 750px) {}\\n\\n/* Larger than desktop */\\n@media (min-width: 1000px) {}\\n\\n/* Larger than Desktop HD */\\n@media (min-width: 1200px) {}\\n\\n/* -------- Adjustments --------- */\\nbody{\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  gap: 1em; \\n}\\n\\n#header{\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  background-color: rgb(141, 37, 37);\\n}\\n\\n\\n#header>img{\\n  width: 5em;\\n  height: auto;\\n  margin: 0.5em;\\n  margin-left: 2em;\\n}\\n\\n#header>.btns{\\n  display: flex;\\n  gap: 3em;\\n  margin: 1em;\\n}\\n\\nbutton{\\n  color: white;\\n}\\n\\n#content{\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1em;\\n}\\n\\n.container{\\n  justify-items: start;\\n  row-gap: 1em;\\n  padding: 2em;\\n  background-color: rgba(128, 128, 128, 0.3);\\n}\\n\\n.title{\\n  margin: 0;\\n}\\n\\n.locationGrid{\\n  display: grid;\\n  width: 100%;\\n  grid-template-rows: 1fr;\\n  grid-template-columns: repeat(3, 1fr);\\n  column-gap: 1em;\\n  row-gap: 1em;\\n  justify-items: center;\\n  overflow: hidden;\\n}\\n\\n.locationGrid>div{\\n  display: grid;\\n  row-gap: 1em  ;\\n  text-align: center;\\n}\\n\\n/* #footer{\\n} */\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top_restaurant/./src/styles/skeleton.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top_restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://top_restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top_restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/jam_logo.png":
/*!*********************************!*\
  !*** ./src/images/jam_logo.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"jam_logo.png\");\n\n//# sourceURL=webpack://top_restaurant/./src/images/jam_logo.png?");

/***/ }),

/***/ "./src/styles/skeleton.css":
/*!*********************************!*\
  !*** ./src/styles/skeleton.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./skeleton.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/skeleton.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_skeleton_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top_restaurant/./src/styles/skeleton.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top_restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top_restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top_restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top_restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top_restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top_restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_skeleton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/skeleton.css */ \"./src/styles/skeleton.css\");\n/* harmony import */ var _pages_contactPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contactPage */ \"./src/pages/contactPage.js\");\n/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/homePage */ \"./src/pages/homePage.js\");\n/* harmony import */ var _pages_menuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menuPage */ \"./src/pages/menuPage.js\");\n/* harmony import */ var _images_jam_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/jam_logo.png */ \"./src/images/jam_logo.png\");\n\n\n\n\n\n// -- Navigation bar --\n\n\nfunction createNavbtn(item, textContent, insertLoc) {\n    // variable to store which nav button user clicked\n    let navSelect;\n\n    item.textContent = textContent;\n    item.addEventListener(\"click\", () => {\n        if (item.textContent == \"Home\") {\n            (0,_pages_homePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        }\n        else if (item.textContent == \"Menu\") {\n            (0,_pages_menuPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n        }\n        else {\n            (0,_pages_contactPage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        }\n    });\n    insertLoc.appendChild(item);\n};\n\n// ----- generate navigation bar ------\n\nfunction generateNavbar() {\n    const headerLoc = document.getElementById(\"header\");\n\n    // logo for restaurant\n    const headerImg = document.createElement(\"img\");\n    headerImg.src = _images_jam_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n    headerLoc.appendChild(headerImg);\n\n    const buttonLoc = document.createElement(\"div\");\n    buttonLoc.classList.add(\"btns\");\n    headerLoc.appendChild(buttonLoc);\n\n    // navigation bar buttons to display different pages\n    const homePage = document.createElement(\"button\");\n    createNavbtn(homePage, \"Home\", buttonLoc);\n\n    const menuPage = document.createElement(\"button\");\n    createNavbtn(menuPage, \"Menu\", buttonLoc);\n\n    const contactPage = document.createElement(\"button\");\n    createNavbtn(contactPage, \"Contact\", buttonLoc);\n}\n\ngenerateNavbar();\n\n\n\n//# sourceURL=webpack://top_restaurant/./src/index.js?");

/***/ }),

/***/ "./src/pages/contactPage.js":
/*!**********************************!*\
  !*** ./src/pages/contactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateContactpage() {\n    console.log(\"contact page\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateContactpage);\n\n//# sourceURL=webpack://top_restaurant/./src/pages/contactPage.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateHomepage() {\n    console.log(\"homepage\");\n\n    document.body.classList.add(\"background\");\n\n    const contentLoc = document.getElementById(\"content\");\n\n    // Info Section ---------------------------\n    const info = document.createElement(\"div\");\n    info.classList.add(\"container\");\n\n    // where name of restaurant will be placed\n    const infoName = document.createElement(\"h5\");\n    infoName.textContent = \"About Us\";\n    infoName.classList.add(\"title\");\n    info.appendChild(infoName);\n\n    const aboutInfo = [\n        \"Welcome to Jam Café!\",\n        \"We are an all-day breakfast and lunch cafe located in Victoria and Vancouver.  The original Jam opened on Herald St. in Victoria in the spring of 2012 and was immediately embraced by the City and it’s dining community.  As the popularity of Jam grew, we knew that we needed to expand our operations and in early 2016 we opened our second venue in downtown Vancouver on Beatty.  This was followed by our 3rd and newest addition, Jam Café Kitsilano, in the fall of 2018.\",\n        \"Inspired by recipes from the south, like our house made cornbread, buttermilk biscuits and fried chicken we wanted to create a menu of comfort fare in a rustic-city atmosphere.  Our menu also includes a collection of family home style recipes that have been shared and passed down over generations and we’ve been very proud to be able to add these to Jam’s unique and eclectic menu. Needless to say Jam Café has options that can satisfy the most discerning of appetites.\",\n        \"Our ever changing rustic and vintage decor adds to the warmth and welcoming atmosphere in our family-owned eatery.\",\n        \"Our goal is always to exceed your expectations and we sincerely hope you enjoy your experience at any and all of our locations as much as we enjoyed putting it all together.\",\n        \"We appreciate your patronage and look forward to seeing you soon!\",\n        \"Jam Cafe\"\n    ];\n\n    for (let content of aboutInfo) {\n        const item = document.createElement(\"div\");\n        item.textContent = content;\n        info.appendChild(item);\n    }\n    contentLoc.appendChild(info);\n\n    // Hours Section ---------------------------\n    const hours = document.createElement(\"div\");\n    hours.classList.add(\"container\");\n\n    // where name of restaurant will be placed\n    const hoursName = document.createElement(\"h5\");\n    hoursName.textContent = \"Hours\";\n    hoursName.classList.add(\"title\");\n    hours.appendChild(hoursName);\n\n    const hoursInfo = [\n        \"All Jam Cafe Locations are open for indoor dining and take out service!\",\n        \"-\",\n        \"VICTORIA  Hours of Operation: Open 7 days a week\",\n        \"WEEKDAYS: 8:00 - 14:30 \",\n        \"WEEKENDS: 8:00 - 15:00\",\n        \"-\",\n        \"VANCOUVER Hours of Operation: Open 7 days a week\",\n        \"WEEKDAYS: 8:00 - 14:30 \",\n        \"WEEKENDS: 8:00 - 15:00\",\n        \"-\",\n        \"Including Most Holidays\",\n        \"We appreciate your support and look forward to serving you!\",\n\n    ];\n\n    for (let content of hoursInfo) {\n        const item = document.createElement(\"div\");\n        item.textContent = content;\n        hours.appendChild(item);\n    }\n    contentLoc.appendChild(hours);\n\n    // Location Section ---------------------------\n    const loc = document.createElement(\"div\");\n    loc.classList.add(\"container\");\n\n    // where name of restaurant will be placed\n    const locName = document.createElement(\"h5\");\n    locName.textContent = \"Location\";\n    locName.classList.add(\"title\");\n    loc.appendChild(locName);\n\n    const locGrid = document.createElement(\"div\");\n    locGrid.classList.add(\"locationGrid\");\n    loc.appendChild(locGrid);\n\n    // Location as objects\n    function location(location, address, phoneNum, email) {\n        this.location = location;\n        this.address = address;\n        this.phoneNum = phoneNum;\n        this.email = email;\n    };\n\n    const cafeVic = new location(\"Victoria\", \"542 Herald Street, Victoria, BC V8W 1S6\", \" 778-440-4489\", \"jamcafe@shaw.ca\");\n    const cafeBeatty = new location(\"Vancouver – Beatty\", \"556 Beatty Street, Vancouver, BC V6B 2L3\", \"778-379-1992\", \"jamcafeonbeatty@shaw.ca\");\n    const cafeKits = new location(\"Vancouver - Kitslano\", \"2153 West 4th Avenue,Vancouver, BC V6K 1N7\", \"604-423-3350\", \"jamcafekitsilano@shaw.ca\");\n\n    const locList = [\n        cafeVic, cafeBeatty, cafeKits\n    ];\n\n    for (let loc of locList) {\n        const newLoc = document.createElement(\"div\");\n\n        for (let info of Object.values(loc)) {\n            let item = document.createElement(\"div\");\n            item.textContent = info;\n            newLoc.appendChild(item);\n        }\n\n        locGrid.appendChild(newLoc);\n    }\n\n    contentLoc.appendChild(loc);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateHomepage);\n\n//# sourceURL=webpack://top_restaurant/./src/pages/homePage.js?");

/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction generateMenupage() {\n    console.log(\"menupage\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateMenupage);\n\n//# sourceURL=webpack://top_restaurant/./src/pages/menuPage.js?");

/***/ }),

/***/ "./src/images/jam_background.jpg":
/*!***************************************!*\
  !*** ./src/images/jam_background.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e45018ac363b640f2a4f.jpg\";\n\n//# sourceURL=webpack://top_restaurant/./src/images/jam_background.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;