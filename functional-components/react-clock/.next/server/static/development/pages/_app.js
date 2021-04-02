module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_DigitalClock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/DigitalClock */ \"./src/components/DigitalClock.js\");\nvar _jsxFileName = \"/home/simonmrog/simon/programming/github/react-js/functional-components/react-clock/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // CSS files\n// import \"../src/components/DigitalClock.css\";\n// components\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    return __jsx(_src_components_DigitalClock__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 7\n      }\n    });\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztDQUVBO0FBQ0E7QUFFQTs7QUFDQTs7QUFFQSxNQUFNQSxHQUFOLFNBQWtCQyw0Q0FBSyxDQUFDQyxTQUF4QixDQUFrQztBQUNoQ0MsUUFBTSxHQUFHO0FBQ1AsV0FDRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQUdEOztBQUwrQjs7QUFNakM7QUFFY0gsa0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBDU1MgZmlsZXNcbi8vIGltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL0RpZ2l0YWxDbG9jay5jc3NcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IERpZ2l0YWxDbG9jayBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvRGlnaXRhbENsb2NrXCI7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERpZ2l0YWxDbG9jayAvPlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/components/DigitalClock.js":
/*!****************************************!*\
  !*** ./src/components/DigitalClock.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/simonmrog/simon/programming/github/react-js/functional-components/react-clock/src/components/DigitalClock.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nclass Hello extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      time: new Date().toLocaleTimeString()\n    };\n  }\n\n  tick() {\n    this.setState(() => {\n      return {\n        time: new Date().toLocaleTimeString()\n      };\n    });\n  }\n\n  componentDidMount() {\n    this.interval = setInterval(() => this.tick(), 1000);\n  }\n\n  componentWillUnmount() {\n    clearInterval(this.interval);\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      class: \"digital-clock\",\n      className: \"jsx-3845795068\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }\n    }, __jsx(\"h1\", {\n      className: \"jsx-3845795068\" + \" \" + \"orange\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    }, this.state.time), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n      id: \"3845795068\",\n      __self: this\n    }, \".orange.jsx-3845795068{color:#f15b2a;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NpbW9ubXJvZy9zaW1vbi9wcm9ncmFtbWluZy9naXRodWIvcmVhY3QtanMvZnVuY3Rpb25hbC1jb21wb25lbnRzL3JlYWN0LWNsb2NrL3NyYy9jb21wb25lbnRzL0RpZ2l0YWxDbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ29CLEFBRzJCLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL3NpbW9ubXJvZy9zaW1vbi9wcm9ncmFtbWluZy9naXRodWIvcmVhY3QtanMvZnVuY3Rpb25hbC1jb21wb25lbnRzL3JlYWN0LWNsb2NrL3NyYy9jb21wb25lbnRzL0RpZ2l0YWxDbG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgSGVsbG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpXG4gICAgfVxuICB9XG5cbiAgdGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcbiAgICAgIHJldHVybiAoe1xuICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnRpY2soKSwgMTAwMCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImRpZ2l0YWwtY2xvY2tcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm9yYW5nZVwiPlxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS50aW1lIH1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAub3JhbmdlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjE1YjJhO1xuICAgICAgICAgIH1gXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvOyJdfQ== */\\n/*@ sourceURL=/home/simonmrog/simon/programming/github/react-js/functional-components/react-clock/src/components/DigitalClock.js */\"));\n  }\n\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hello);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EaWdpdGFsQ2xvY2suanM/Y2RiNCJdLCJuYW1lcyI6WyJIZWxsbyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwidGltZSIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJ0aWNrIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFDbENDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsVUFBSSxFQUFFLElBQUlDLElBQUosR0FBV0Msa0JBQVg7QUFESyxLQUFiO0FBR0Q7O0FBRURDLE1BQUksR0FBRztBQUNMLFNBQUtDLFFBQUwsQ0FBYyxNQUFNO0FBQ2xCLGFBQVE7QUFDTkosWUFBSSxFQUFFLElBQUlDLElBQUosR0FBV0Msa0JBQVg7QUFEQSxPQUFSO0FBR0QsS0FKRDtBQUtEOztBQUVERyxtQkFBaUIsR0FBRztBQUNsQixTQUFLQyxRQUFMLEdBQWdCQyxXQUFXLENBQUMsTUFBTSxLQUFLSixJQUFMLEVBQVAsRUFBb0IsSUFBcEIsQ0FBM0I7QUFDRDs7QUFFREssc0JBQW9CLEdBQUc7QUFDckJDLGlCQUFhLENBQUMsS0FBS0gsUUFBTixDQUFiO0FBQ0Q7O0FBQ0RJLFFBQU0sR0FBRztBQUNQLFdBQ0U7QUFBSyxXQUFLLEVBQUMsZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBLDBDQUFjLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLEtBQUtYLEtBQUwsQ0FBV0MsSUFEZixDQURGO0FBQUE7QUFBQTtBQUFBLCt1REFERjtBQWNEOztBQXZDaUM7O0FBd0NuQztBQUVjTixvRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0RpZ2l0YWxDbG9jay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgSGVsbG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpXG4gICAgfVxuICB9XG5cbiAgdGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKCgpID0+IHtcbiAgICAgIHJldHVybiAoe1xuICAgICAgICB0aW1lOiBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZygpXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLnRpY2soKSwgMTAwMCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzcz1cImRpZ2l0YWwtY2xvY2tcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm9yYW5nZVwiPlxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS50aW1lIH1cbiAgICAgICAgPC9oMT5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAub3JhbmdlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZjE1YjJhO1xuICAgICAgICAgIH1gXG4gICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbGxvOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DigitalClock.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });