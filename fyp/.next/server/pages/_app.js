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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartItem */ "./components/CartItem.js");
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\Cart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Cart extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleEmptyCart = this.handleEmptyCart.bind(this);
  }

  handleEmptyCart() {
    this.context.handleEmptyCart();
  }

  renderEmptyCart() {
    const {
      cart
    } = this.context;

    if (cart.total_unique_items > 0) {
      return;
    }

    return __jsx("p", {
      className: "cart__none",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, "You have no items in your shopping cart, start adding some!");
  }

  renderCart() {
    const {
      cart
    } = this.context;

    if (cart.total_unique_items === 0) {
      return;
    }

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, cart.line_items.map(lineItem => __jsx(_CartItem__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      item: lineItem,
      key: lineItem.id
    }, this.props, {
      className: "cart__inner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }))), __jsx("div", {
      className: "cart__total",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, __jsx("p", {
      className: "cart__total-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, "Subtotal:"), __jsx("p", {
      className: "cart__total-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, cart.subtotal.formatted_with_symbol)), __jsx("div", {
      className: "cart__footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx("button", {
      className: "cart__btn-empty",
      onClick: this.handleEmptyCart,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, "Empty cart"), __jsx("button", {
      onClick: () => next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
        pathname: '/Checkout'
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "cart__btn-checkout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, "Checkout"))));
  }

  render() {
    return __jsx("div", {
      className: "cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, __jsx("h4", {
      className: "cart__heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, "Your Shopping Cart"), this.renderEmptyCart(), this.renderCart());
  }

}

_defineProperty(Cart, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Cart);
Cart.propTypes = {
  cart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onUpdateCartQty: () => {},
  onRemoveFromCart: () => {},
  onEmptyCart: () => {},
  handleUpdateCartQty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./components/CartItem.js":
/*!********************************!*\
  !*** ./components/CartItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/state */ "./context/state.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\CartItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class CartItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleUpdateCartQty(lineItemId, quantity) {
    this.context.handleUpdateCartQty(lineItemId, quantity);
  }

  handleRemoveFromCart(lineItemId) {
    this.context.handleRemoveFromCart(lineItemId);
  }

  render() {
    const {
      item
    } = this.props;
    return __jsx("div", {
      className: "cart-item",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx("img", {
      className: "cart-item__image",
      src: item.media.source,
      alt: item.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "cart-item__details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 11
      }
    }, __jsx("h4", {
      className: "cart-item__details-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, item.name), __jsx("div", {
      className: "cart-item__details-qty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "button",
      onClick: () => item.quantity > 1 ? this.handleUpdateCartQty(item.id, item.quantity - 1) : this.handleRemoveFromCart(item.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }, "-"), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }, item.quantity), __jsx("button", {
      type: "button",
      onClick: () => this.handleUpdateCartQty(item.id, item.quantity + 1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, "+")), __jsx("div", {
      className: "cart-item__details-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }
    }, item.line_total.formatted_with_symbol)), __jsx("button", {
      type: "button",
      className: "cart-item__remove",
      onClick: () => this.handleRemoveFromCart(item.id),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, "Remove"));
  }

}

_defineProperty(CartItem, "contextType", _context_state__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (CartItem);
CartItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  handleUpdateCartQty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onUpdateCartQty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onRemoveFromCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/state */ "./context/state.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/user */ "./lib/user.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\NavBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_4__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faShoppingBag"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"]);

class NavBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.context.fetchCart();
  }

  renderCartNav() {
    const {
      cart,
      isCartVisible
    } = this.context;
    return __jsx("div", {
      className: "nav__cart",
      onClick: this.context.toggleCart,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, !isCartVisible ? __jsx("button", {
      className: "nav__cart-open",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      size: "2x",
      icon: "shopping-bag",
      color: "#292B83",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }), cart !== null ? __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 42
      }
    }, cart.total_items) : '') : __jsx("button", {
      className: "nav__cart-close",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      size: "1x",
      icon: "times",
      color: "white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 29
      }
    })));
  }

  render() {
    const {
      loading,
      user
    } = this.props.useFetchUser;
    return __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default.a, {
      bg: "light",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "mr-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6___default.a.Brand, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, "FYP Coffee Shop")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a, {
      className: "ml-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Link, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }
    }, "Home"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Link, {
      href: "/Tracking",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, "Where are we?"), !loading && (user ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Link, {
      href: "/profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }, "Client-rendered profile"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Link, {
      href: "/advanced/ssr-profile",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, "Server rendered profile (advanced)"), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Link, {
      href: "/api/logout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }, "Logout")) : __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Link, {
      href: "/api/login",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 24
      }
    }, "Login")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, this.renderCartNav(), this.context.isCartVisible && __jsx(_Cart__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }
    }))));
  }

}

_defineProperty(NavBar, "contextType", _context_state__WEBPACK_IMPORTED_MODULE_2__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_user__WEBPACK_IMPORTED_MODULE_8__["withUseFetchUser"])(NavBar));

/***/ }),

/***/ "./context/state.js":
/*!**************************!*\
  !*** ./context/state.js ***!
  \**************************/
/*! exports provided: AppContext, AppWrapper, useAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWrapper", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\context\\state.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const cartAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "https://cartms.eu.ngrok.io/cart",
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});
const productAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "https://productsms.eu.ngrok.io/product",
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});
const ordermanagementAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: {}.ORDERMANAGEMENTMSURL,
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

class AppWrapper extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      cartID: "",
      order: {},
      cart: {},
      isCartVisible: false,
      products: [],
      checkoutToken: {},
      loadOrderFromLocalStorage: this.loadOrderFromLocalStorage.bind(this),
      toggleCart: this.toggleCart.bind(this),
      handleAddToCart: this.handleAddToCart.bind(this),
      handleUpdateCartQty: this.handleUpdateCartQty.bind(this),
      handleRemoveFromCart: this.handleRemoveFromCart.bind(this),
      handleEmptyCart: this.handleEmptyCart.bind(this),
      fetchCart: this.fetchCart.bind(this),
      refreshCart: this.refreshCart.bind(this),
      handleCaptureCheckout: this.handleCaptureCheckout.bind(this),
      fetchProducts: this.fetchProducts.bind(this),
      generateToken: this.generateToken.bind(this)
    };
  }
  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */


  async fetchProducts() {
    productAPI.get("/get").then(products => {
      this.setState({
        products: products.data.data
      });
    }).catch(error => {
      console.log('There was an error fetching the products', error);
    });
  }

  async fetchCart() {
    const cartID = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('cartID');

    if (await this.retrieveCart(cartID)) {
      console.log("Cart Retrieved!");
    } else if (await this.createCart()) {
      console.log("Cart Created!");
    } else {
      console.error("An error occured while fetching the cart.");
    }
  } //Actions

  /**
   * Fetch a saved order receipt from local storage so we can show the confirmation page
   * again between page refreshes.
   */


  loadOrderFromLocalStorage() {
    if (window.localStorage.getItem('order_receipt')) {
      this.setState({
        order: JSON.parse(window.localStorage.getItem('order_receipt'))
      });
    }
  }
  /**
   * Show hide cart in nav
   */


  toggleCart() {
    const {
      isCartVisible
    } = this.state;
    this.setState({
      isCartVisible: !isCartVisible
    });
  } //-> start of cart functions

  /**
   * Adds a product to the current cart in session
   * https://commercejs.com/docs/sdk/cart/#add-to-cart
   *
   * @param {string} productId The ID of the product being added
   * @param {number} quantity The quantity of the product being added
   */


  async handleAddToCart(productId, quantity) {
    await cartAPI.post("/addto", {
      cartID: this.state.cartID,
      productId: productId,
      quantity: quantity
    }).then(item => {
      this.setState({
        cart: item.data.cart
      });
    }).catch(error => {
      console.log('There was an adding a cart item', error);
    });
  }
  /**
   * Updates line_items in cart
   * https://commercejs.com/docs/sdk/cart/#update-cart
   *
   * @param {string} lineItemId ID of the cart line item being updated
   * @param {number} quantity New line item quantity to update
   */


  handleUpdateCartQty(lineItemId, quantity) {
    cartAPI.put("/updateqty", {
      cartID: this.state.cartID,
      lineItemId: lineItemId,
      quantity: quantity
    }).then(resp => {
      this.setState({
        cart: resp.data.cart
      });
    }).catch(error => {
      console.log('There was an error updating the cart items', error);
    });
  }
  /**
   * Removes line item from cart
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   *
   * @param {string} lineItemId ID of the line item being removed
   */


  handleRemoveFromCart(lineItemId) {
    cartAPI.delete("/removefrom/" + this.state.cartID + "/" + lineItemId).then(resp => {
      this.setState({
        cart: resp.data.cart
      });
    }).catch(error => {
      console.error('There was an error removing the item from the cart', error);
    });
  }
  /**
   * Empties cart contents
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   */


  async handleEmptyCart() {
    await cartAPI.delete("/empty/" + this.state.cartID).then(resp => {
      this.setState({
        cart: resp.data.cart
      });
    }).catch(error => {
      console.error('There was an error emptying the cart', error);
    });
  }
  /**
  * Creates a cart
  * https://commercejs.com/docs/sdk/cart
  */


  async createCart() {
    return await cartAPI.get("/create").then(cart => {
      this.setState({
        cart: cart.data,
        cartID: cart.data.id
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('cartID', cart.data.id);
      return true;
    }).catch(error => {
      console.error(error);
      return false;
    });
  }

  async retrieveCart(cartID) {
    return await cartAPI.get("/fetch/" + cartID).then(cart => {
      this.setState({
        cart: cart.data,
        cartID: cart.data.id
      });
      return true;
    }).catch(error => {
      console.error(error);
      return false;
    });
  }
  /**
   * Refreshes to a new cart
   * https://commercejs.com/docs/sdk/cart#refresh-cart
   */


  refreshCart() {
    this.createCart();
  } //=> end fo cart functions

  /**
   * Captures the checkout
   * https://commercejs.com/docs/sdk/checkout#capture-order
   *
   * @param {string} checkoutTokenId The ID of the checkout token
   * @param {object} newOrder The new order object data
   */


  handleCaptureCheckout(checkoutTokenId, newOrder) {
    ordermanagementAPI.post("/checkout/create");
    commerce.checkout.capture(checkoutTokenId, newOrder).then(order => {
      this.setState({
        order: order
      }); // Store the order in session storage so we can show it again
      // if the user refreshes the page!

      window.localStorage.setItem('order_receipt', JSON.stringify(order)); // Clears the cart

      this.refreshCart(); // Send the user to the receipt

      this.props.history.push('/confirmation');
    }).catch(error => {
      console.log('There was an error confirming your order', error);
    });
  }
  /**
     *  Generates a checkout token
     *  https://commercejs.com/docs/sdk/checkout#generate-token
     */


  generateCheckoutToken() {
    const {
      cart
    } = this.context;

    if (cart.line_items.length) {
      ordermanagementAPI.get("/checkout/generate/token", {
        cartID: cart.id
      }).then(token => {
        this.setState({
          checkoutToken: token
        });
      }).catch(error => {
        console.log('There was an error in generating a token', error);
      });
    }

    if (cart.line_items.length) {
      return commerce.checkout.generateToken(cart.id, {
        type: 'cart'
      }).then(token => this.setState({
        checkoutToken: token
      })).then(() => this.fetchShippingCountries(this.state.checkoutToken.id)).catch(error => {
        console.log('There was an error in generating a token', error);
      });
    }
  }

  render() {
    return __jsx(AppContext.Provider, {
      value: this.state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 7
      }
    }, this.props.children);
  }

}


function useAppContext() {
  return useContext(AppContext);
}

/***/ }),

/***/ "./lib/user.js":
/*!*********************!*\
  !*** ./lib/user.js ***!
  \*********************/
/*! exports provided: fetchUser, useFetchUser, withUseFetchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetchUser", function() { return useFetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withUseFetchUser", function() { return withUseFetchUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\lib\\user.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


async function fetchUser(cookie = '') {
  if (false) {}

  const res = await fetch('/api/me', cookie ? {
    headers: {
      cookie
    }
  } : {});

  if (!res.ok) {
    delete window.__user;
    return null;
  }

  const json = await res.json();

  if (false) {}

  return json;
}
function useFetchUser({
  required
} = {}) {
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => !( false && false));
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(() => {
    if (true) {
      return null;
    }

    return window.__user || null;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!loading && user) {
      return;
    }

    setLoading(true);
    let isMounted = true;
    fetchUser().then(user => {
      // Only set the user if the component is still mounted
      if (isMounted) {
        // When the user is not logged in but login is required
        if (required && !user) {
          window.location.href = '/api/login';
          return;
        }

        setUser(user);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, // eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  return {
    user,
    loading
  };
}
function withUseFetchUser(Component) {
  return function WrappedComponent(props) {
    const myHookValue = useFetchUser();
    return __jsx(Component, _extends({}, props, {
      useFetchUser: myHookValue,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 12
      }
    }));
  };
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/scss/styles.scss */ "./styles/scss/styles.scss");
/* harmony import */ var _styles_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ "./components/NavBar.js");
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_context_state_js__WEBPACK_IMPORTED_MODULE_4__["AppWrapper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }
  }, __jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 22
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 32
    }
  })));
}

/***/ }),

/***/ "./styles/scss/styles.scss":
/*!*********************************!*\
  !*** ./styles/scss/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap/Nav":
/*!**************************************!*\
  !*** external "react-bootstrap/Nav" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "react-bootstrap/Navbar":
/*!*****************************************!*\
  !*** external "react-bootstrap/Navbar" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2FydEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZCYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiIl0sIm5hbWVzIjpbIkNhcnQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaGFuZGxlRW1wdHlDYXJ0IiwiYmluZCIsImNvbnRleHQiLCJyZW5kZXJFbXB0eUNhcnQiLCJjYXJ0IiwidG90YWxfdW5pcXVlX2l0ZW1zIiwicmVuZGVyQ2FydCIsImxpbmVfaXRlbXMiLCJtYXAiLCJsaW5lSXRlbSIsImlkIiwic3VidG90YWwiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJyZW5kZXIiLCJBcHBDb250ZXh0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwib25VcGRhdGVDYXJ0UXR5Iiwib25SZW1vdmVGcm9tQ2FydCIsIm9uRW1wdHlDYXJ0IiwiaGFuZGxlVXBkYXRlQ2FydFF0eSIsImZ1bmMiLCJoaXN0b3J5IiwiQ2FydEl0ZW0iLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsImxpbmVJdGVtSWQiLCJxdWFudGl0eSIsIml0ZW0iLCJtZWRpYSIsInNvdXJjZSIsIm5hbWUiLCJsaW5lX3RvdGFsIiwibGlicmFyeSIsImFkZCIsImZhU2hvcHBpbmdCYWciLCJmYVRpbWVzIiwiTmF2QmFyIiwiY29tcG9uZW50RGlkTW91bnQiLCJmZXRjaENhcnQiLCJyZW5kZXJDYXJ0TmF2IiwiaXNDYXJ0VmlzaWJsZSIsInRvZ2dsZUNhcnQiLCJ0b3RhbF9pdGVtcyIsImxvYWRpbmciLCJ1c2VyIiwidXNlRmV0Y2hVc2VyIiwid2l0aFVzZUZldGNoVXNlciIsImNyZWF0ZUNvbnRleHQiLCJjYXJ0QVBJIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsInRpbWVvdXQiLCJoZWFkZXJzIiwicHJvZHVjdEFQSSIsIm9yZGVybWFuYWdlbWVudEFQSSIsIk9SREVSTUFOQUdFTUVOVE1TVVJMIiwiQXBwV3JhcHBlciIsInN0YXRlIiwiY2FydElEIiwib3JkZXIiLCJwcm9kdWN0cyIsImNoZWNrb3V0VG9rZW4iLCJsb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlIiwiaGFuZGxlQWRkVG9DYXJ0IiwicmVmcmVzaENhcnQiLCJoYW5kbGVDYXB0dXJlQ2hlY2tvdXQiLCJmZXRjaFByb2R1Y3RzIiwiZ2VuZXJhdGVUb2tlbiIsImdldCIsInRoZW4iLCJzZXRTdGF0ZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkNvb2tpZXMiLCJyZXRyaWV2ZUNhcnQiLCJjcmVhdGVDYXJ0Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInByb2R1Y3RJZCIsInBvc3QiLCJwdXQiLCJyZXNwIiwiZGVsZXRlIiwic2V0IiwiY2hlY2tvdXRUb2tlbklkIiwibmV3T3JkZXIiLCJjb21tZXJjZSIsImNoZWNrb3V0IiwiY2FwdHVyZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJnZW5lcmF0ZUNoZWNrb3V0VG9rZW4iLCJsZW5ndGgiLCJ0b2tlbiIsInR5cGUiLCJmZXRjaFNoaXBwaW5nQ291bnRyaWVzIiwiY2hpbGRyZW4iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCIsImZldGNoVXNlciIsImNvb2tpZSIsInJlcyIsImZldGNoIiwib2siLCJfX3VzZXIiLCJqc29uIiwicmVxdWlyZWQiLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJzZXRVc2VyIiwidXNlRWZmZWN0IiwiaXNNb3VudGVkIiwibG9jYXRpb24iLCJocmVmIiwiV3JhcHBlZENvbXBvbmVudCIsIm15SG9va1ZhbHVlIiwiTXlBcHAiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7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QSxrQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IENhcnRJdGVtIGZyb20gJy4vQ2FydEl0ZW0nO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zdGF0ZS5qcydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuXHJcbmNsYXNzIENhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5oYW5kbGVFbXB0eUNhcnQgPSB0aGlzLmhhbmRsZUVtcHR5Q2FydC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcclxuXHJcblxyXG4gIGhhbmRsZUVtcHR5Q2FydCgpIHtcclxuICAgIHRoaXMuY29udGV4dC5oYW5kbGVFbXB0eUNhcnQoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckVtcHR5Q2FydCgpIHtcclxuICAgIGNvbnN0IHsgY2FydCB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgaWYgKGNhcnQudG90YWxfdW5pcXVlX2l0ZW1zID4gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHAgY2xhc3NOYW1lPVwiY2FydF9fbm9uZVwiPlxyXG4gICAgICAgIFlvdSBoYXZlIG5vIGl0ZW1zIGluIHlvdXIgc2hvcHBpbmcgY2FydCwgc3RhcnQgYWRkaW5nIHNvbWUhXHJcbiAgICAgIDwvcD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDYXJ0KCkge1xyXG4gICAgY29uc3QgeyBjYXJ0IH0gPSB0aGlzLmNvbnRleHQ7XHJcbiAgICBpZiAoY2FydC50b3RhbF91bmlxdWVfaXRlbXMgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAge2NhcnQubGluZV9pdGVtcy5tYXAobGluZUl0ZW0gPT4gKFxyXG4gICAgICAgICAgPENhcnRJdGVtXHJcbiAgICAgICAgICAgIGl0ZW09e2xpbmVJdGVtfVxyXG4gICAgICAgICAgICBrZXk9e2xpbmVJdGVtLmlkfVxyXG4gICAgICAgICAgICB7Li4udGhpcy5wcm9wc31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FydF9faW5uZXJcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfX3RvdGFsXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJ0X190b3RhbC10aXRsZVwiPlN1YnRvdGFsOjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcnRfX3RvdGFsLXByaWNlXCI+e2NhcnQuc3VidG90YWwuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnRfX2Zvb3RlclwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJ0X19idG4tZW1wdHlcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUVtcHR5Q2FydH0+RW1wdHkgY2FydDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvQ2hlY2tvdXQnXHJcbiAgICAgICAgICAgIH0pfSAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJ0X19idG4tY2hlY2tvdXRcIj5cclxuICAgICAgICAgICAgICBDaGVja291dFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydFwiPlxyXG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJ0X19oZWFkaW5nXCI+WW91ciBTaG9wcGluZyBDYXJ0PC9oND5cclxuICAgICAgICB7IHRoaXMucmVuZGVyRW1wdHlDYXJ0KCl9XHJcbiAgICAgICAgeyB0aGlzLnJlbmRlckNhcnQoKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0O1xyXG5cclxuQ2FydC5wcm9wVHlwZXMgPSB7XHJcbiAgY2FydDogUHJvcFR5cGVzLm9iamVjdCxcclxuICBvblVwZGF0ZUNhcnRRdHk6ICgpID0+IHsgfSxcclxuICBvblJlbW92ZUZyb21DYXJ0OiAoKSA9PiB7IH0sXHJcbiAgb25FbXB0eUNhcnQ6ICgpID0+IHsgfSxcclxuICBoYW5kbGVVcGRhdGVDYXJ0UXR5OiBQcm9wVHlwZXMuZnVuYyxcclxuICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9zdGF0ZSdcclxuXHJcbmNsYXNzIENhcnRJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlVXBkYXRlQ2FydFF0eSA9IHRoaXMuaGFuZGxlVXBkYXRlQ2FydFF0eS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVSZW1vdmVGcm9tQ2FydCA9IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFwcENvbnRleHQ7XHJcblxyXG4gIGhhbmRsZVVwZGF0ZUNhcnRRdHkobGluZUl0ZW1JZCwgcXVhbnRpdHkpIHtcclxuICAgIHRoaXMuY29udGV4dC5oYW5kbGVVcGRhdGVDYXJ0UXR5KGxpbmVJdGVtSWQsIHF1YW50aXR5KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlbW92ZUZyb21DYXJ0KGxpbmVJdGVtSWQpIHtcclxuICAgIHRoaXMuY29udGV4dC5oYW5kbGVSZW1vdmVGcm9tQ2FydChsaW5lSXRlbUlkKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaXRlbSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbVwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FydC1pdGVtX19pbWFnZVwiIHNyYz17aXRlbS5tZWRpYS5zb3VyY2V9IGFsdD17aXRlbS5uYW1lfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1fX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNhcnQtaXRlbV9fZGV0YWlscy1uYW1lXCI+e2l0ZW0ubmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtaXRlbV9fZGV0YWlscy1xdHlcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBpdGVtLnF1YW50aXR5ID4gMSA/IHRoaXMuaGFuZGxlVXBkYXRlQ2FydFF0eShpdGVtLmlkLCBpdGVtLnF1YW50aXR5IC0gMSkgOiB0aGlzLmhhbmRsZVJlbW92ZUZyb21DYXJ0KGl0ZW0uaWQpfT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPHA+e2l0ZW0ucXVhbnRpdHl9PC9wPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVXBkYXRlQ2FydFF0eShpdGVtLmlkLCBpdGVtLnF1YW50aXR5ICsgMSl9Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1pdGVtX19kZXRhaWxzLXByaWNlXCI+e2l0ZW0ubGluZV90b3RhbC5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjYXJ0LWl0ZW1fX3JlbW92ZVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQoaXRlbS5pZCl9PlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRJdGVtO1xyXG5cclxuQ2FydEl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gICAgaXRlbTogUHJvcFR5cGVzLm9iamVjdCxcclxuICAgIGhhbmRsZVVwZGF0ZUNhcnRRdHk6IFByb3BUeXBlcy5mdW5jLFxyXG4gICAgb25VcGRhdGVDYXJ0UXR5OiBQcm9wVHlwZXMuZnVuYyxcclxuICAgIG9uUmVtb3ZlRnJvbUNhcnQ6IFByb3BUeXBlcy5mdW5jXHJcbiB9O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FydCBmcm9tICcuL0NhcnQnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zdGF0ZSdcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xyXG5pbXBvcnQgeyBmYVNob3BwaW5nQmFnLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInXHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdidcclxuaW1wb3J0IHsgd2l0aFVzZUZldGNoVXNlciB9IGZyb20gJy4uL2xpYi91c2VyJ1xyXG5cclxubGlicmFyeS5hZGQoZmFTaG9wcGluZ0JhZywgZmFUaW1lcylcclxuXHJcblxyXG5jbGFzcyBOYXZCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZldGNoQ2FydCgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyQ2FydE5hdigpIHtcclxuICAgICAgICBjb25zdCB7IGNhcnQsIGlzQ2FydFZpc2libGUgfSA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfX2NhcnRcIiBvbkNsaWNrPXt0aGlzLmNvbnRleHQudG9nZ2xlQ2FydH0+XHJcbiAgICAgICAgICAgICAgICB7IWlzQ2FydFZpc2libGUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZfX2NhcnQtb3BlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCIyeFwiIGljb249XCJzaG9wcGluZy1iYWdcIiBjb2xvcj1cIiMyOTJCODNcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2FydCAhPT0gbnVsbCA/IDxzcGFuPntjYXJ0LnRvdGFsX2l0ZW1zfTwvc3Bhbj4gOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2X19jYXJ0LWNsb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHNpemU9XCIxeFwiIGljb249XCJ0aW1lc1wiIGNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbG9hZGluZywgdXNlciB9ID0gdGhpcy5wcm9wcy51c2VGZXRjaFVzZXI7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5GWVAgQ29mZmVlIFNob3A8L05hdmJhci5CcmFuZD5cclxuICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1hdXRvXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1wiPkhvbWU8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL1RyYWNraW5nXCI+V2hlcmUgYXJlIHdlPzwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKHVzZXIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvcHJvZmlsZVwiPkNsaWVudC1yZW5kZXJlZCBwcm9maWxlPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvYWR2YW5jZWQvc3NyLXByb2ZpbGVcIj5TZXJ2ZXIgcmVuZGVyZWQgcHJvZmlsZSAoYWR2YW5jZWQpPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvYXBpL2xvZ291dFwiPkxvZ291dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9hcGkvbG9naW5cIj5Mb2dpbjwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJ0TmF2KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLmNvbnRleHQuaXNDYXJ0VmlzaWJsZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcnQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFVzZUZldGNoVXNlcihOYXZCYXIpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgY2FydEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQ0FSVE1TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgcHJvZHVjdEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuUFJPRFVDVFNNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG9yZGVybWFuYWdlbWVudEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuT1JERVJNQU5BR0VNRU5UTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jbGFzcyBBcHBXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhcnRJRDogXCJcIixcclxuICAgICAgb3JkZXI6IHt9LFxyXG4gICAgICBjYXJ0OiB7fSxcclxuICAgICAgaXNDYXJ0VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgY2hlY2tvdXRUb2tlbjoge30sXHJcbiAgICAgIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2U6IHRoaXMubG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZS5iaW5kKHRoaXMpLFxyXG4gICAgICB0b2dnbGVDYXJ0OiB0aGlzLnRvZ2dsZUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlQWRkVG9DYXJ0OiB0aGlzLmhhbmRsZUFkZFRvQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVVcGRhdGVDYXJ0UXR5OiB0aGlzLmhhbmRsZVVwZGF0ZUNhcnRRdHkuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQ6IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlRW1wdHlDYXJ0OiB0aGlzLmhhbmRsZUVtcHR5Q2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBmZXRjaENhcnQ6IHRoaXMuZmV0Y2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIHJlZnJlc2hDYXJ0OiB0aGlzLnJlZnJlc2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUNhcHR1cmVDaGVja291dDogdGhpcy5oYW5kbGVDYXB0dXJlQ2hlY2tvdXQuYmluZCh0aGlzKSxcclxuICAgICAgZmV0Y2hQcm9kdWN0czogdGhpcy5mZXRjaFByb2R1Y3RzLmJpbmQodGhpcyksXHJcbiAgICAgIGdlbmVyYXRlVG9rZW46IHRoaXMuZ2VuZXJhdGVUb2tlbi5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcHJvZHVjdHMgZGF0YSBmcm9tIENoZWMgYW5kIHN0b3JlcyBpbiB0aGUgcHJvZHVjdHMgZGF0YSBvYmplY3QuXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9wcm9kdWN0c1xyXG4gICAqL1xyXG4gIGFzeW5jIGZldGNoUHJvZHVjdHMoKSB7XHJcbiAgICBwcm9kdWN0QVBJLmdldChcIi9nZXRcIikudGhlbigocHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzOiBwcm9kdWN0cy5kYXRhLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgcHJvZHVjdHMnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQ2FydCgpIHtcclxuICAgIGNvbnN0IGNhcnRJRCA9IENvb2tpZXMuZ2V0KCdjYXJ0SUQnKTtcclxuXHJcbiAgICBpZiAoYXdhaXQgdGhpcy5yZXRyaWV2ZUNhcnQoY2FydElEKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcnQgUmV0cmlldmVkIVwiKTtcclxuICAgIH0gZWxzZSBpZiAoYXdhaXQgdGhpcy5jcmVhdGVDYXJ0KCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJ0IENyZWF0ZWQhXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBmZXRjaGluZyB0aGUgY2FydC5cIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQWN0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhIHNhdmVkIG9yZGVyIHJlY2VpcHQgZnJvbSBsb2NhbCBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IHRoZSBjb25maXJtYXRpb24gcGFnZVxyXG4gICAqIGFnYWluIGJldHdlZW4gcGFnZSByZWZyZXNoZXMuXHJcbiAgICovXHJcbiAgbG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyX3JlY2VpcHQnKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXI6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcl9yZWNlaXB0JykpIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGhpZGUgY2FydCBpbiBuYXZcclxuICAgKi9cclxuICB0b2dnbGVDYXJ0KCkge1xyXG4gICAgY29uc3QgeyBpc0NhcnRWaXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzQ2FydFZpc2libGU6ICFpc0NhcnRWaXNpYmxlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLy0+IHN0YXJ0IG9mIGNhcnQgZnVuY3Rpb25zXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHByb2R1Y3QgdG8gdGhlIGN1cnJlbnQgY2FydCBpbiBzZXNzaW9uXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNhZGQtdG8tY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2R1Y3RJZCBUaGUgSUQgb2YgdGhlIHByb2R1Y3QgYmVpbmcgYWRkZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHkgVGhlIHF1YW50aXR5IG9mIHRoZSBwcm9kdWN0IGJlaW5nIGFkZGVkXHJcbiAgICovXHJcbiAgYXN5bmMgaGFuZGxlQWRkVG9DYXJ0KHByb2R1Y3RJZCwgcXVhbnRpdHkpIHtcclxuXHJcbiAgICBhd2FpdCBjYXJ0QVBJLnBvc3QoXCIvYWRkdG9cIiwgeyBjYXJ0SUQ6IHRoaXMuc3RhdGUuY2FydElELCBwcm9kdWN0SWQ6IHByb2R1Y3RJZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGl0ZW0uZGF0YS5jYXJ0IH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gYWRkaW5nIGEgY2FydCBpdGVtJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGxpbmVfaXRlbXMgaW4gY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jdXBkYXRlLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lSXRlbUlkIElEIG9mIHRoZSBjYXJ0IGxpbmUgaXRlbSBiZWluZyB1cGRhdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1YW50aXR5IE5ldyBsaW5lIGl0ZW0gcXVhbnRpdHkgdG8gdXBkYXRlXHJcbiAgICovXHJcbiAgaGFuZGxlVXBkYXRlQ2FydFF0eShsaW5lSXRlbUlkLCBxdWFudGl0eSkge1xyXG4gICAgY2FydEFQSS5wdXQoXCIvdXBkYXRlcXR5XCIsIHsgY2FydElEOiB0aGlzLnN0YXRlLmNhcnRJRCwgbGluZUl0ZW1JZDogbGluZUl0ZW1JZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyB0aGUgY2FydCBpdGVtcycsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBsaW5lIGl0ZW0gZnJvbSBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNyZW1vdmUtZnJvbS1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZUl0ZW1JZCBJRCBvZiB0aGUgbGluZSBpdGVtIGJlaW5nIHJlbW92ZWRcclxuICAgKi9cclxuICBoYW5kbGVSZW1vdmVGcm9tQ2FydChsaW5lSXRlbUlkKSB7XHJcbiAgICBjYXJ0QVBJLmRlbGV0ZShcIi9yZW1vdmVmcm9tL1wiICsgdGhpcy5zdGF0ZS5jYXJ0SUQgKyBcIi9cIiArIGxpbmVJdGVtSWQpLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHJlbW92aW5nIHRoZSBpdGVtIGZyb20gdGhlIGNhcnQnLCBlcnJvcik7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbXB0aWVzIGNhcnQgY29udGVudHNcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3JlbW92ZS1mcm9tLWNhcnRcclxuICAgKi9cclxuICBhc3luYyBoYW5kbGVFbXB0eUNhcnQoKSB7XHJcbiAgICBhd2FpdCBjYXJ0QVBJLmRlbGV0ZShcIi9lbXB0eS9cIiArIHRoaXMuc3RhdGUuY2FydElEKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBlbXB0eWluZyB0aGUgY2FydCcsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDcmVhdGVzIGEgY2FydFxyXG4gICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0XHJcbiAgKi9cclxuICBhc3luYyBjcmVhdGVDYXJ0KCkge1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9jcmVhdGVcIikudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoJ2NhcnRJRCcsIGNhcnQuZGF0YS5pZCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJldHJpZXZlQ2FydChjYXJ0SUQpIHtcclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9mZXRjaC9cIiArIGNhcnRJRCkudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZnJlc2hlcyB0byBhIG5ldyBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0I3JlZnJlc2gtY2FydFxyXG4gICAqL1xyXG4gIHJlZnJlc2hDYXJ0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVDYXJ0KCk7XHJcbiAgfVxyXG4gIC8vPT4gZW5kIGZvIGNhcnQgZnVuY3Rpb25zXHJcblxyXG4gIC8qKlxyXG4gICAqIENhcHR1cmVzIHRoZSBjaGVja291dFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjY2FwdHVyZS1vcmRlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoZWNrb3V0VG9rZW5JZCBUaGUgSUQgb2YgdGhlIGNoZWNrb3V0IHRva2VuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG5ld09yZGVyIFRoZSBuZXcgb3JkZXIgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBoYW5kbGVDYXB0dXJlQ2hlY2tvdXQoY2hlY2tvdXRUb2tlbklkLCBuZXdPcmRlcikge1xyXG5cclxuICAgIG9yZGVybWFuYWdlbWVudEFQSS5wb3N0KFwiL2NoZWNrb3V0L2NyZWF0ZVwiLClcclxuICAgIGNvbW1lcmNlLmNoZWNrb3V0LmNhcHR1cmUoY2hlY2tvdXRUb2tlbklkLCBuZXdPcmRlcikudGhlbigob3JkZXIpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG9yZGVyOiBvcmRlcixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBTdG9yZSB0aGUgb3JkZXIgaW4gc2Vzc2lvbiBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IGl0IGFnYWluXHJcbiAgICAgIC8vIGlmIHRoZSB1c2VyIHJlZnJlc2hlcyB0aGUgcGFnZSFcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlcl9yZWNlaXB0JywgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcclxuICAgICAgLy8gQ2xlYXJzIHRoZSBjYXJ0XHJcbiAgICAgIHRoaXMucmVmcmVzaENhcnQoKTtcclxuICAgICAgLy8gU2VuZCB0aGUgdXNlciB0byB0aGUgcmVjZWlwdFxyXG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NvbmZpcm1hdGlvbicpO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgY29uZmlybWluZyB5b3VyIG9yZGVyJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICAqICBHZW5lcmF0ZXMgYSBjaGVja291dCB0b2tlblxyXG4gICAgICogIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjZ2VuZXJhdGUtdG9rZW5cclxuICAgICAqL1xyXG4gIGdlbmVyYXRlQ2hlY2tvdXRUb2tlbigpIHtcclxuXHJcbiAgICBjb25zdCB7IGNhcnQgfSA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICBpZiAoY2FydC5saW5lX2l0ZW1zLmxlbmd0aCkge1xyXG5cclxuICAgICAgb3JkZXJtYW5hZ2VtZW50QVBJLmdldChcIi9jaGVja291dC9nZW5lcmF0ZS90b2tlblwiLCB7IGNhcnRJRDogY2FydC5pZCB9KS50aGVuKHRva2VuID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb2tlbjogdG9rZW4gfSk7XHJcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGluIGdlbmVyYXRpbmcgYSB0b2tlbicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhcnQubGluZV9pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGNvbW1lcmNlLmNoZWNrb3V0LmdlbmVyYXRlVG9rZW4oY2FydC5pZCwgeyB0eXBlOiAnY2FydCcgfSlcclxuICAgICAgICAudGhlbigodG9rZW4pID0+IHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRva2VuOiB0b2tlbiB9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmZldGNoU2hpcHBpbmdDb3VudHJpZXModGhpcy5zdGF0ZS5jaGVja291dFRva2VuLmlkKSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGluIGdlbmVyYXRpbmcgYSB0b2tlbicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBXcmFwcGVyIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyKGNvb2tpZSA9ICcnKSB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5fX3VzZXIpIHtcclxuICAgIHJldHVybiB3aW5kb3cuX191c2VyXHJcbiAgfVxyXG5cclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICcvYXBpL21lJyxcclxuICAgIGNvb2tpZVxyXG4gICAgICA/IHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBjb29raWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgICA6IHt9XHJcbiAgKVxyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgZGVsZXRlIHdpbmRvdy5fX3VzZXJcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93Ll9fdXNlciA9IGpzb25cclxuICB9XHJcbiAgcmV0dXJuIGpzb25cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZldGNoVXNlcih7IHJlcXVpcmVkIH0gPSB7fSkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgKCkgPT4gISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX191c2VyKVxyXG4gIClcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2luZG93Ll9fdXNlciB8fCBudWxsXHJcbiAgfSlcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBpZiAoIWxvYWRpbmcgJiYgdXNlcikge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgbGV0IGlzTW91bnRlZCA9IHRydWVcclxuXHJcbiAgICAgIGZldGNoVXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgICAvLyBPbmx5IHNldCB0aGUgdXNlciBpZiB0aGUgY29tcG9uZW50IGlzIHN0aWxsIG1vdW50ZWRcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gYnV0IGxvZ2luIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICBpZiAocmVxdWlyZWQgJiYgIXVzZXIpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FwaS9sb2dpbidcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgaXNNb3VudGVkID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICByZXR1cm4geyB1c2VyLCBsb2FkaW5nIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhVc2VGZXRjaFVzZXIoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIFdyYXBwZWRDb21wb25lbnQocHJvcHMpIHtcclxuICAgIGNvbnN0IG15SG9va1ZhbHVlID0gdXNlRmV0Y2hVc2VyKCk7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHVzZUZldGNoVXNlcj17bXlIb29rVmFsdWV9IC8+O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL3Njc3Mvc3R5bGVzLnNjc3MnXHJcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xyXG5cclxuaW1wb3J0IHsgQXBwV3JhcHBlciB9IGZyb20gJy4uL2NvbnRleHQvc3RhdGUuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiA8QXBwV3JhcHBlcj48TmF2QmFyIC8+PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjwvQXBwV3JhcHBlcj5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvTmF2XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZiYXJcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==