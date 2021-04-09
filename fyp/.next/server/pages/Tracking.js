module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Tracking.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/Tracking.js":
/*!***************************!*\
  !*** ./pages/Tracking.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "google-maps-react");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\pages\\Tracking.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NGROKURL = "https://l.eu.ngrok.io";

class Tracking extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      "latitude": 20,
      "longitude": 20,
      "accuracy": "1"
    };
    this.getUpdates = this.getUpdates.bind(this);
  }

  componentDidMount() {
    this.getUpdates();
  }

  getUpdates() {
    var pusher = new pusher_js__WEBPACK_IMPORTED_MODULE_2___default.a('4b368d79d76620bdd3a5', {
      authEndpoint: `${NGROKURL}/pusher/auth`,
      cluster: 'eu'
    });
    var channel = pusher.subscribe('private-test');
    channel.bind('client-driver-location', data => {
      this.setState(data);
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`${NGROKURL}/api/new`, {
        latitude: data.latitude,
        longitude: data.longitude,
        accuracy: data.accuracy
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    });
  }

  renderMap() {
    const {
      latitude,
      longitude
    } = this.state;

    if (latitude == 20 && longitude == 20) {
      return __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 20
        }
      }, "Tracking currently not available");
    } else {
      return __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
        google: this.props.google,
        zoom: 18,
        center: {
          lat: latitude,
          lng: longitude
        },
        initialCenter: {
          lat: 1,
          lng: 1
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 20
        }
      }, __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
        title: 'The marker`s title will appear as a tooltip.',
        name: 'SOMA',
        position: {
          lat: latitude,
          lng: longitude
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }
      }), __jsx(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["InfoWindow"], {
        onClose: this.onInfoWindowClose,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 17
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 25
        }
      }, "\"this.state.selectedPlace.name\""))));
    }
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, this.renderMap());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: "AIzaSyAte3ue0Gmd1jZekyrExQbRc0_JuzWKXrI"
})(Tracking));

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "google-maps-react":
/*!************************************!*\
  !*** external "google-maps-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvVHJhY2tpbmcuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtbWFwcy1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1c2hlci1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiTkdST0tVUkwiLCJwcm9jZXNzIiwiVHJhY2tpbmciLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJnZXRVcGRhdGVzIiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwicHVzaGVyIiwiUHVzaGVyIiwiYXV0aEVuZHBvaW50IiwiY2x1c3RlciIsImNoYW5uZWwiLCJzdWJzY3JpYmUiLCJkYXRhIiwic2V0U3RhdGUiLCJheGlvcyIsInBvc3QiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImFjY3VyYWN5IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJyZW5kZXJNYXAiLCJnb29nbGUiLCJsYXQiLCJsbmciLCJvbkluZm9XaW5kb3dDbG9zZSIsInJlbmRlciIsIkdvb2dsZUFwaVdyYXBwZXIiLCJhcGlLZXkiLCJHTUFQU0tFWSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFB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QTtBQUFBO0FBQUEsUUFQRyxFQVdILE1BQUMsNERBQUQ7QUFBWSxlQUFPLEVBQUUsS0FBS1ksaUJBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FESixDQURKLENBWEcsQ0FBUDtBQWlCSDtBQUNKOztBQUNEQyxRQUFNLEdBQUc7QUFDTCxXQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSyxLQUFLTCxTQUFMLEVBREwsQ0FESjtBQUtIOztBQXJFNEI7O0FBd0VsQk0seUlBQWdCLENBQUM7QUFDNUJDLFFBQU0sRUFBR25DLHlDQUFvQm9DO0FBREQsQ0FBRCxDQUFoQixDQUVabkMsUUFGWSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDL0VBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL1RyYWNraW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9UcmFja2luZy5qc1wiKTtcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTWFwLCBJbmZvV2luZG93LCBNYXJrZXIsIEdvb2dsZUFwaVdyYXBwZXIgfSBmcm9tICdnb29nbGUtbWFwcy1yZWFjdCc7XHJcbmltcG9ydCBQdXNoZXIgZnJvbSAncHVzaGVyLWpzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IE5HUk9LVVJMID0gcHJvY2Vzcy5lbnYuTkdST0tVUkw7XHJcblxyXG5jbGFzcyBUcmFja2luZyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IFwibGF0aXR1ZGVcIjogMjAsIFwibG9uZ2l0dWRlXCI6IDIwLCBcImFjY3VyYWN5XCI6IFwiMVwiIH07XHJcbiAgICAgICAgdGhpcy5nZXRVcGRhdGVzID0gdGhpcy5nZXRVcGRhdGVzLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRVcGRhdGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXBkYXRlcygpIHtcclxuICAgICAgICB2YXIgcHVzaGVyID0gbmV3IFB1c2hlcignNGIzNjhkNzlkNzY2MjBiZGQzYTUnLCB7XHJcbiAgICAgICAgICAgIGF1dGhFbmRwb2ludDogYCR7TkdST0tVUkx9L3B1c2hlci9hdXRoYCxcclxuICAgICAgICAgICAgY2x1c3RlcjogJ2V1J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgY2hhbm5lbCA9IHB1c2hlci5zdWJzY3JpYmUoJ3ByaXZhdGUtdGVzdCcpO1xyXG5cclxuICAgICAgICBjaGFubmVsLmJpbmQoJ2NsaWVudC1kcml2ZXItbG9jYXRpb24nLCAoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShkYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGF4aW9zLnBvc3QoYCR7TkdST0tVUkx9L2FwaS9uZXdgLCB7XHJcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTogZGF0YS5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogZGF0YS5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgICBhY2N1cmFjeTogZGF0YS5hY2N1cmFjeVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyTWFwKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKGxhdGl0dWRlID09IDIwICYmIGxvbmdpdHVkZSA9PSAyMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gPGgxPlRyYWNraW5nIGN1cnJlbnRseSBub3QgYXZhaWxhYmxlPC9oMT5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gPE1hcCBnb29nbGU9e3RoaXMucHJvcHMuZ29vZ2xlfSB6b29tPXsxOH0gY2VudGVyPXt7XHJcbiAgICAgICAgICAgICAgICBsYXQ6IGxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgbG5nOiBsb25naXR1ZGVcclxuICAgICAgICAgICAgfX0gaW5pdGlhbENlbnRlcj17e1xyXG4gICAgICAgICAgICAgICAgbGF0OiAxLFxyXG4gICAgICAgICAgICAgICAgbG5nOiAxXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPE1hcmtlclxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnVGhlIG1hcmtlcmBzIHRpdGxlIHdpbGwgYXBwZWFyIGFzIGEgdG9vbHRpcC4nfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9eydTT01BJ31cclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj17eyBsYXQ6IGxhdGl0dWRlLCBsbmc6IGxvbmdpdHVkZSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPEluZm9XaW5kb3cgb25DbG9zZT17dGhpcy5vbkluZm9XaW5kb3dDbG9zZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlwidGhpcy5zdGF0ZS5zZWxlY3RlZFBsYWNlLm5hbWVcIjwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0luZm9XaW5kb3c+XHJcbiAgICAgICAgICAgIDwvTWFwPjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlck1hcCgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb29nbGVBcGlXcmFwcGVyKHtcclxuICAgIGFwaUtleTogKHByb2Nlc3MuZW52LkdNQVBTS0VZKVxyXG59KShUcmFja2luZyk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlLW1hcHMtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHVzaGVyLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=