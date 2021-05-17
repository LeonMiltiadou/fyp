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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/updateuser.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/auth/updateuser.js":
/*!**************************************!*\
  !*** ./pages/api/auth/updateuser.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateUser; });
let axios = __webpack_require__(/*! axios */ "axios").default;

let getTokenOptions = {
  method: 'POST',
  url: 'https://leonfyp.eu.auth0.com/oauth/token',
  headers: {
    'content-type': 'application/json'
  },
  data: {
    grant_type: 'client_credentials',
    client_id: "WgIbJRhcno7Xnp03Tq8EGZdBH0vKk5MO",
    client_secret: "fkLzsJ71HoAzkHesXEpUg-HC7KjCGtb_FWoclUO4NEWr3q-ixek8KxHAVk-fCQzI",
    audience: 'https://leonfyp.eu.auth0.com/api/v2/'
  }
};
async function updateUser(req, res) {
  if (req.method !== 'POST') {
    res.status(400).send({
      message: 'Only POST requests allowed'
    });
    return;
  }

  axios.request(getTokenOptions).then(function (response) {
    axios.request({
      method: 'PATCH',
      url: 'https://leonfyp.eu.auth0.com/api/v2/users/' + req.body.id,
      headers: {
        'content-type': "application/json",
        'Authorization': 'Bearer ' + response.data.access_token
      },
      data: {
        "name": "leon"
      }
    }).then(function (response) {
      console.log(response.data);
      res.send(response.data);
    }).catch(function (error) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    });
  }).catch(function (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  });
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2F1dGgvdXBkYXRldXNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImRlZmF1bHQiLCJnZXRUb2tlbk9wdGlvbnMiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiZGF0YSIsImdyYW50X3R5cGUiLCJjbGllbnRfaWQiLCJwcm9jZXNzIiwiY2xpZW50X3NlY3JldCIsImF1ZGllbmNlIiwidXBkYXRlVXNlciIsInJlcSIsInJlcyIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwicmVxdWVzdCIsInRoZW4iLCJyZXNwb25zZSIsImJvZHkiLCJpZCIsImFjY2Vzc190b2tlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZW5kIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQSxJQUFJQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUCxDQUFpQkMsT0FBN0I7O0FBRUEsSUFBSUMsZUFBZSxHQUFHO0FBQ3BCQyxRQUFNLEVBQUUsTUFEWTtBQUVwQkMsS0FBRyxFQUFFLDBDQUZlO0FBR3BCQyxTQUFPLEVBQUU7QUFBRSxvQkFBZ0I7QUFBbEIsR0FIVztBQUlwQkMsTUFBSSxFQUFFO0FBQ0pDLGNBQVUsRUFBRSxvQkFEUjtBQUVKQyxhQUFTLEVBQUVDLGtDQUZQO0FBR0pDLGlCQUFhLEVBQUVELGtFQUhYO0FBSUpFLFlBQVEsRUFBRTtBQUpOO0FBSmMsQ0FBdEI7QUFjZSxlQUFlQyxVQUFmLENBQTBCQyxHQUExQixFQUErQkMsR0FBL0IsRUFBb0M7QUFDakQsTUFBSUQsR0FBRyxDQUFDVixNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekJXLE9BQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0E7QUFDRDs7QUFDRGxCLE9BQUssQ0FBQ21CLE9BQU4sQ0FBY2hCLGVBQWQsRUFBK0JpQixJQUEvQixDQUFvQyxVQUFVQyxRQUFWLEVBQW9CO0FBRXREckIsU0FBSyxDQUFDbUIsT0FBTixDQUFjO0FBQ1pmLFlBQU0sRUFBRSxPQURJO0FBRVpDLFNBQUcsRUFBRSwrQ0FBK0NTLEdBQUcsQ0FBQ1EsSUFBSixDQUFTQyxFQUZqRDtBQUlaakIsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCLGtCQURUO0FBRVAseUJBQWlCLFlBQVllLFFBQVEsQ0FBQ2QsSUFBVCxDQUFjaUI7QUFGcEMsT0FKRztBQVFaakIsVUFBSSxFQUFFO0FBQUUsZ0JBQVE7QUFBVjtBQVJNLEtBQWQsRUFTR2EsSUFUSCxDQVNRLFVBQVVDLFFBQVYsRUFBb0I7QUFDMUJJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFRLENBQUNkLElBQXJCO0FBQ0FRLFNBQUcsQ0FBQ0UsSUFBSixDQUFTSSxRQUFRLENBQUNkLElBQWxCO0FBQ0QsS0FaRCxFQVlHb0IsS0FaSCxDQVlTLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEJILGFBQU8sQ0FBQ0csS0FBUixDQUFjQSxLQUFkO0FBQ0FiLFNBQUcsQ0FBQ0MsTUFBSixDQUFXWSxLQUFLLENBQUNaLE1BQU4sSUFBZ0IsR0FBM0IsRUFBZ0NhLEdBQWhDLENBQW9DRCxLQUFLLENBQUNWLE9BQTFDO0FBQ0QsS0FmRDtBQWdCRCxHQWxCRCxFQWtCR1MsS0FsQkgsQ0FrQlMsVUFBVUMsS0FBVixFQUFpQjtBQUN4QkgsV0FBTyxDQUFDRyxLQUFSLENBQWNBLEtBQWQ7QUFDQWIsT0FBRyxDQUFDQyxNQUFKLENBQVdZLEtBQUssQ0FBQ1osTUFBTixJQUFnQixHQUEzQixFQUFnQ2EsR0FBaEMsQ0FBb0NELEtBQUssQ0FBQ1YsT0FBMUM7QUFDRCxHQXJCRDtBQXVCRCxDOzs7Ozs7Ozs7OztBQzVDRCxrQyIsImZpbGUiOiJwYWdlcy9hcGkvYXV0aC91cGRhdGV1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvYXV0aC91cGRhdGV1c2VyLmpzXCIpO1xuIiwibGV0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpLmRlZmF1bHQ7XHJcblxyXG5sZXQgZ2V0VG9rZW5PcHRpb25zID0ge1xyXG4gIG1ldGhvZDogJ1BPU1QnLFxyXG4gIHVybDogJ2h0dHBzOi8vbGVvbmZ5cC5ldS5hdXRoMC5jb20vb2F1dGgvdG9rZW4nLFxyXG4gIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gIGRhdGE6IHtcclxuICAgIGdyYW50X3R5cGU6ICdjbGllbnRfY3JlZGVudGlhbHMnLFxyXG4gICAgY2xpZW50X2lkOiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfSUQsXHJcbiAgICBjbGllbnRfc2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVULFxyXG4gICAgYXVkaWVuY2U6ICdodHRwczovL2xlb25meXAuZXUuYXV0aDAuY29tL2FwaS92Mi8nXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xyXG4gICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiAnT25seSBQT1NUIHJlcXVlc3RzIGFsbG93ZWQnIH0pXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgYXhpb3MucmVxdWVzdChnZXRUb2tlbk9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgYXhpb3MucmVxdWVzdCh7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9sZW9uZnlwLmV1LmF1dGgwLmNvbS9hcGkvdjIvdXNlcnMvJyArIHJlcS5ib2R5LmlkXHJcbiAgICAgICxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHJlc3BvbnNlLmRhdGEuYWNjZXNzX3Rva2VuXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHsgXCJuYW1lXCI6IFwibGVvblwiIH1cclxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICByZXMuc2VuZChyZXNwb25zZS5kYXRhKTtcclxuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNTAwKS5lbmQoZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgcmVzLnN0YXR1cyhlcnJvci5zdGF0dXMgfHwgNTAwKS5lbmQoZXJyb3IubWVzc2FnZSk7XHJcbiAgfSk7XHJcblxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==