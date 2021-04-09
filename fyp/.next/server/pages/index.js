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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\Hero.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Hero = ({
  merchant
}) => {
  return __jsx("div", {
    className: "hero",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "img/logo.svg",
    alt: "Logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);
Hero.propTypes = {
  merchant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./components/ProductItem.js":
/*!***********************************!*\
  !*** ./components/ProductItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! string-strip-html */ "string-strip-html");
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(string_strip_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\ProductItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ProductItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    this.context.handleAddToCart(this.props.product.id, 1);
  }

  render() {
    const {
      product
    } = this.props;
    const {
      result
    } = string_strip_html__WEBPACK_IMPORTED_MODULE_2___default()(product.description);
    return __jsx("div", {
      className: "product__card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, __jsx("img", {
      className: "product__image",
      src: product.media.source,
      alt: product.name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }
    }), __jsx("div", {
      className: "product__info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx("h4", {
      className: "product__name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }
    }, product.name), __jsx("p", {
      className: "product__description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, result), __jsx("div", {
      className: "product__details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "product__price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }, product.price.formatted_with_symbol), __jsx("button", {
      name: "Add to cart",
      className: "product__btn",
      onClick: this.handleAddToCart,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, "Quick add"))));
  }

}

_defineProperty(ProductItem, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);
ProductItem.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onAddToCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleAddToCart: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./components/ProductsList.js":
/*!************************************!*\
  !*** ./components/ProductsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductItem */ "./components/ProductItem.js");
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\ProductsList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ProductsList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    this.context.fetchProducts();
  }

  render() {
    const {
      products
    } = this.context;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "products",
      id: "products",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, products.map(product => __jsx(_ProductItem__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({
      key: product.id,
      product: product
    }, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    })))));
  }

}

_defineProperty(ProductsList, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductsList);
ProductsList.propTypes = {
  products: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

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

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ "@chec/commerce.js");
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);

const commerceAPIKEY = "pk_22347505ba2c8380513eec66e47c69506d20e41143779";

if (!commerceAPIKEY) {
  throw Error('Your public API key must be provided as an environment variable');
}

/* harmony default export */ __webpack_exports__["default"] = (new _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default.a(commerceAPIKEY, true));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_ProductsList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ProductsList */ "./components/ProductsList.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      merchant: {}
    };
  }

  componentDidMount() {
    this.fetchMerchantDetails();
    this.context.loadOrderFromLocalStorage();
  }
  /**
   * Fetch merchant details
   * https://commercejs.com/docs/sdk/full-sdk-reference#merchants
   */


  fetchMerchantDetails() {
    _lib_commerce__WEBPACK_IMPORTED_MODULE_1__["default"].merchants.about().then(merchant => {
      this.setState({
        merchant: merchant
      });
    }).catch(error => {
      console.log('There was an error fetch the merchant details', error);
    });
  }

  render() {
    const {
      merchant
    } = this.state;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
      merchant: merchant,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }), __jsx(_components_ProductsList__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    })))));
  }

}

_defineProperty(App, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (App);
App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chec/commerce.js");

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

/***/ "string-strip-html":
/*!************************************!*\
  !*** external "string-strip-html" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("string-strip-html");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZXJvLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZHVjdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tbWVyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoZWMvY29tbWVyY2UuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0cmluZy1zdHJpcC1odG1sXCIiXSwibmFtZXMiOlsiSGVybyIsIm1lcmNoYW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiUHJvZHVjdEl0ZW0iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaGFuZGxlQWRkVG9DYXJ0IiwiYmluZCIsImNvbnRleHQiLCJwcm9kdWN0IiwiaWQiLCJyZW5kZXIiLCJyZXN1bHQiLCJzdHJpcEh0bWwiLCJkZXNjcmlwdGlvbiIsIm1lZGlhIiwic291cmNlIiwibmFtZSIsInByaWNlIiwiZm9ybWF0dGVkX3dpdGhfc3ltYm9sIiwiQXBwQ29udGV4dCIsIm9uQWRkVG9DYXJ0IiwiZnVuYyIsIlByb2R1Y3RzTGlzdCIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hQcm9kdWN0cyIsInByb2R1Y3RzIiwibWFwIiwiYXJyYXkiLCJjcmVhdGVDb250ZXh0IiwiY2FydEFQSSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJ0aW1lb3V0IiwiaGVhZGVycyIsInByb2R1Y3RBUEkiLCJvcmRlcm1hbmFnZW1lbnRBUEkiLCJPUkRFUk1BTkFHRU1FTlRNU1VSTCIsIkFwcFdyYXBwZXIiLCJzdGF0ZSIsImNhcnRJRCIsIm9yZGVyIiwiY2FydCIsImlzQ2FydFZpc2libGUiLCJjaGVja291dFRva2VuIiwibG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSIsInRvZ2dsZUNhcnQiLCJoYW5kbGVVcGRhdGVDYXJ0UXR5IiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJoYW5kbGVFbXB0eUNhcnQiLCJmZXRjaENhcnQiLCJyZWZyZXNoQ2FydCIsImhhbmRsZUNhcHR1cmVDaGVja291dCIsImdlbmVyYXRlVG9rZW4iLCJnZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwicmV0cmlldmVDYXJ0IiwiY3JlYXRlQ2FydCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0SWQiLCJxdWFudGl0eSIsInBvc3QiLCJpdGVtIiwibGluZUl0ZW1JZCIsInB1dCIsInJlc3AiLCJkZWxldGUiLCJzZXQiLCJjaGVja291dFRva2VuSWQiLCJuZXdPcmRlciIsImNvbW1lcmNlIiwiY2hlY2tvdXQiLCJjYXB0dXJlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhpc3RvcnkiLCJwdXNoIiwiZ2VuZXJhdGVDaGVja291dFRva2VuIiwibGluZV9pdGVtcyIsImxlbmd0aCIsInRva2VuIiwidHlwZSIsImZldGNoU2hpcHBpbmdDb3VudHJpZXMiLCJjaGlsZHJlbiIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiY29tbWVyY2VBUElLRVkiLCJFcnJvciIsIkNvbW1lcmNlIiwiQXBwIiwiZmV0Y2hNZXJjaGFudERldGFpbHMiLCJtZXJjaGFudHMiLCJhYm91dCJdLCJtYXBwaW5ncyI6Ijs7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RixLQUE3RDtBQUNELEtBSkQ7QUFLRDs7QUFFRGxELFFBQU0sR0FBRztBQUNQLFVBQU07QUFDSmI7QUFESSxRQUVGLEtBQUsyQyxLQUZUO0FBSUEsV0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0EsbUVBQ0ksTUFBQyx3REFBRDtBQUNFLGNBQVEsRUFBRTNDLFFBRFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBS0ksTUFBQyxnRUFBRCxlQUNNLEtBQUtPLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUxKLENBREEsQ0FEQSxDQURGO0FBZUQ7O0FBakR5Qjs7Z0JBQXRCaUcsRyxpQkFVaUJsRiw0RDs7QUF3Q3RCO0FBRWNrRixrRUFBZjtBQUVBQSxHQUFHLENBQUN2RyxTQUFKLEdBQWdCO0FBQ2R5RixTQUFPLEVBQUV4RixpREFBUyxDQUFDQztBQURMLENBQWhCLEM7Ozs7Ozs7Ozs7O0FDL0RBLDhDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBIZXJvID0gKHsgbWVyY2hhbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuXHJcblxyXG5IZXJvLnByb3BUeXBlcyA9IHtcclxuICAgIG1lcmNoYW50OiBQcm9wVHlwZXMub2JqZWN0LFxyXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0cmlwSHRtbCBmcm9tICdzdHJpbmctc3RyaXAtaHRtbCc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3N0YXRlLmpzJ1xyXG5cclxuXHJcbmNsYXNzIFByb2R1Y3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUFkZFRvQ2FydCA9IHRoaXMuaGFuZGxlQWRkVG9DYXJ0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcclxuXHJcbiAgICBoYW5kbGVBZGRUb0NhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmhhbmRsZUFkZFRvQ2FydCh0aGlzLnByb3BzLnByb2R1Y3QuaWQsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IHJlc3VsdCB9ID0gc3RyaXBIdG1sKHByb2R1Y3QuZGVzY3JpcHRpb24pO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19jYXJkXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdF9faW1hZ2VcIiBzcmM9e3Byb2R1Y3QubWVkaWEuc291cmNlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJvZHVjdF9fbmFtZVwiPntwcm9kdWN0Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3RfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHByb2R1Y3QgZGVzY3JpcHRpb24gc3RyaXBwZWQgb2YgaHRtbCB0YWdzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0X19wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcmljZS5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkFkZCB0byBjYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdF9fYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRUb0NhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdWljayBhZGRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTtcclxuXHJcblByb2R1Y3RJdGVtLnByb3BUeXBlcyA9IHtcclxuICAgIHByb2R1Y3Q6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBvbkFkZFRvQ2FydDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBoYW5kbGVBZGRUb0NhcnQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gfTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnLi9Qcm9kdWN0SXRlbSc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3N0YXRlLmpzJ1xyXG5cclxuY2xhc3MgUHJvZHVjdHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBBcHBDb250ZXh0O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mZXRjaFByb2R1Y3RzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiIGlkPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNMaXN0O1xyXG5cclxuUHJvZHVjdHNMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIHByb2R1Y3RzOiBQcm9wVHlwZXMuYXJyYXlcclxufTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgY2FydEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQ0FSVE1TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgcHJvZHVjdEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuUFJPRFVDVFNNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG9yZGVybWFuYWdlbWVudEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuT1JERVJNQU5BR0VNRU5UTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jbGFzcyBBcHBXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhcnRJRDogXCJcIixcclxuICAgICAgb3JkZXI6IHt9LFxyXG4gICAgICBjYXJ0OiB7fSxcclxuICAgICAgaXNDYXJ0VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgY2hlY2tvdXRUb2tlbjoge30sXHJcbiAgICAgIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2U6IHRoaXMubG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZS5iaW5kKHRoaXMpLFxyXG4gICAgICB0b2dnbGVDYXJ0OiB0aGlzLnRvZ2dsZUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlQWRkVG9DYXJ0OiB0aGlzLmhhbmRsZUFkZFRvQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVVcGRhdGVDYXJ0UXR5OiB0aGlzLmhhbmRsZVVwZGF0ZUNhcnRRdHkuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQ6IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlRW1wdHlDYXJ0OiB0aGlzLmhhbmRsZUVtcHR5Q2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBmZXRjaENhcnQ6IHRoaXMuZmV0Y2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIHJlZnJlc2hDYXJ0OiB0aGlzLnJlZnJlc2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUNhcHR1cmVDaGVja291dDogdGhpcy5oYW5kbGVDYXB0dXJlQ2hlY2tvdXQuYmluZCh0aGlzKSxcclxuICAgICAgZmV0Y2hQcm9kdWN0czogdGhpcy5mZXRjaFByb2R1Y3RzLmJpbmQodGhpcyksXHJcbiAgICAgIGdlbmVyYXRlVG9rZW46IHRoaXMuZ2VuZXJhdGVUb2tlbi5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcHJvZHVjdHMgZGF0YSBmcm9tIENoZWMgYW5kIHN0b3JlcyBpbiB0aGUgcHJvZHVjdHMgZGF0YSBvYmplY3QuXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9wcm9kdWN0c1xyXG4gICAqL1xyXG4gIGFzeW5jIGZldGNoUHJvZHVjdHMoKSB7XHJcbiAgICBwcm9kdWN0QVBJLmdldChcIi9nZXRcIikudGhlbigocHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzOiBwcm9kdWN0cy5kYXRhLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgcHJvZHVjdHMnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQ2FydCgpIHtcclxuICAgIGNvbnN0IGNhcnRJRCA9IENvb2tpZXMuZ2V0KCdjYXJ0SUQnKTtcclxuXHJcbiAgICBpZiAoYXdhaXQgdGhpcy5yZXRyaWV2ZUNhcnQoY2FydElEKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcnQgUmV0cmlldmVkIVwiKTtcclxuICAgIH0gZWxzZSBpZiAoYXdhaXQgdGhpcy5jcmVhdGVDYXJ0KCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJ0IENyZWF0ZWQhXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBmZXRjaGluZyB0aGUgY2FydC5cIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQWN0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhIHNhdmVkIG9yZGVyIHJlY2VpcHQgZnJvbSBsb2NhbCBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IHRoZSBjb25maXJtYXRpb24gcGFnZVxyXG4gICAqIGFnYWluIGJldHdlZW4gcGFnZSByZWZyZXNoZXMuXHJcbiAgICovXHJcbiAgbG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyX3JlY2VpcHQnKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXI6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcl9yZWNlaXB0JykpIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGhpZGUgY2FydCBpbiBuYXZcclxuICAgKi9cclxuICB0b2dnbGVDYXJ0KCkge1xyXG4gICAgY29uc3QgeyBpc0NhcnRWaXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzQ2FydFZpc2libGU6ICFpc0NhcnRWaXNpYmxlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLy0+IHN0YXJ0IG9mIGNhcnQgZnVuY3Rpb25zXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHByb2R1Y3QgdG8gdGhlIGN1cnJlbnQgY2FydCBpbiBzZXNzaW9uXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNhZGQtdG8tY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2R1Y3RJZCBUaGUgSUQgb2YgdGhlIHByb2R1Y3QgYmVpbmcgYWRkZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHkgVGhlIHF1YW50aXR5IG9mIHRoZSBwcm9kdWN0IGJlaW5nIGFkZGVkXHJcbiAgICovXHJcbiAgYXN5bmMgaGFuZGxlQWRkVG9DYXJ0KHByb2R1Y3RJZCwgcXVhbnRpdHkpIHtcclxuXHJcbiAgICBhd2FpdCBjYXJ0QVBJLnBvc3QoXCIvYWRkdG9cIiwgeyBjYXJ0SUQ6IHRoaXMuc3RhdGUuY2FydElELCBwcm9kdWN0SWQ6IHByb2R1Y3RJZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGl0ZW0uZGF0YS5jYXJ0IH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gYWRkaW5nIGEgY2FydCBpdGVtJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGxpbmVfaXRlbXMgaW4gY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jdXBkYXRlLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lSXRlbUlkIElEIG9mIHRoZSBjYXJ0IGxpbmUgaXRlbSBiZWluZyB1cGRhdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1YW50aXR5IE5ldyBsaW5lIGl0ZW0gcXVhbnRpdHkgdG8gdXBkYXRlXHJcbiAgICovXHJcbiAgaGFuZGxlVXBkYXRlQ2FydFF0eShsaW5lSXRlbUlkLCBxdWFudGl0eSkge1xyXG4gICAgY2FydEFQSS5wdXQoXCIvdXBkYXRlcXR5XCIsIHsgY2FydElEOiB0aGlzLnN0YXRlLmNhcnRJRCwgbGluZUl0ZW1JZDogbGluZUl0ZW1JZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyB0aGUgY2FydCBpdGVtcycsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBsaW5lIGl0ZW0gZnJvbSBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNyZW1vdmUtZnJvbS1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZUl0ZW1JZCBJRCBvZiB0aGUgbGluZSBpdGVtIGJlaW5nIHJlbW92ZWRcclxuICAgKi9cclxuICBoYW5kbGVSZW1vdmVGcm9tQ2FydChsaW5lSXRlbUlkKSB7XHJcbiAgICBjYXJ0QVBJLmRlbGV0ZShcIi9yZW1vdmVmcm9tL1wiICsgdGhpcy5zdGF0ZS5jYXJ0SUQgKyBcIi9cIiArIGxpbmVJdGVtSWQpLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHJlbW92aW5nIHRoZSBpdGVtIGZyb20gdGhlIGNhcnQnLCBlcnJvcik7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbXB0aWVzIGNhcnQgY29udGVudHNcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3JlbW92ZS1mcm9tLWNhcnRcclxuICAgKi9cclxuICBhc3luYyBoYW5kbGVFbXB0eUNhcnQoKSB7XHJcbiAgICBhd2FpdCBjYXJ0QVBJLmRlbGV0ZShcIi9lbXB0eS9cIiArIHRoaXMuc3RhdGUuY2FydElEKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBlbXB0eWluZyB0aGUgY2FydCcsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDcmVhdGVzIGEgY2FydFxyXG4gICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0XHJcbiAgKi9cclxuICBhc3luYyBjcmVhdGVDYXJ0KCkge1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9jcmVhdGVcIikudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoJ2NhcnRJRCcsIGNhcnQuZGF0YS5pZCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJldHJpZXZlQ2FydChjYXJ0SUQpIHtcclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9mZXRjaC9cIiArIGNhcnRJRCkudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZnJlc2hlcyB0byBhIG5ldyBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0I3JlZnJlc2gtY2FydFxyXG4gICAqL1xyXG4gIHJlZnJlc2hDYXJ0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVDYXJ0KCk7XHJcbiAgfVxyXG4gIC8vPT4gZW5kIGZvIGNhcnQgZnVuY3Rpb25zXHJcblxyXG4gIC8qKlxyXG4gICAqIENhcHR1cmVzIHRoZSBjaGVja291dFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjY2FwdHVyZS1vcmRlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoZWNrb3V0VG9rZW5JZCBUaGUgSUQgb2YgdGhlIGNoZWNrb3V0IHRva2VuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG5ld09yZGVyIFRoZSBuZXcgb3JkZXIgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBoYW5kbGVDYXB0dXJlQ2hlY2tvdXQoY2hlY2tvdXRUb2tlbklkLCBuZXdPcmRlcikge1xyXG5cclxuICAgIG9yZGVybWFuYWdlbWVudEFQSS5wb3N0KFwiL2NoZWNrb3V0L2NyZWF0ZVwiLClcclxuICAgIGNvbW1lcmNlLmNoZWNrb3V0LmNhcHR1cmUoY2hlY2tvdXRUb2tlbklkLCBuZXdPcmRlcikudGhlbigob3JkZXIpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG9yZGVyOiBvcmRlcixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBTdG9yZSB0aGUgb3JkZXIgaW4gc2Vzc2lvbiBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IGl0IGFnYWluXHJcbiAgICAgIC8vIGlmIHRoZSB1c2VyIHJlZnJlc2hlcyB0aGUgcGFnZSFcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlcl9yZWNlaXB0JywgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcclxuICAgICAgLy8gQ2xlYXJzIHRoZSBjYXJ0XHJcbiAgICAgIHRoaXMucmVmcmVzaENhcnQoKTtcclxuICAgICAgLy8gU2VuZCB0aGUgdXNlciB0byB0aGUgcmVjZWlwdFxyXG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NvbmZpcm1hdGlvbicpO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgY29uZmlybWluZyB5b3VyIG9yZGVyJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICAqICBHZW5lcmF0ZXMgYSBjaGVja291dCB0b2tlblxyXG4gICAgICogIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjZ2VuZXJhdGUtdG9rZW5cclxuICAgICAqL1xyXG4gIGdlbmVyYXRlQ2hlY2tvdXRUb2tlbigpIHtcclxuXHJcbiAgICBjb25zdCB7IGNhcnQgfSA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICBpZiAoY2FydC5saW5lX2l0ZW1zLmxlbmd0aCkge1xyXG5cclxuICAgICAgb3JkZXJtYW5hZ2VtZW50QVBJLmdldChcIi9jaGVja291dC9nZW5lcmF0ZS90b2tlblwiLCB7IGNhcnRJRDogY2FydC5pZCB9KS50aGVuKHRva2VuID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb2tlbjogdG9rZW4gfSk7XHJcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGluIGdlbmVyYXRpbmcgYSB0b2tlbicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhcnQubGluZV9pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGNvbW1lcmNlLmNoZWNrb3V0LmdlbmVyYXRlVG9rZW4oY2FydC5pZCwgeyB0eXBlOiAnY2FydCcgfSlcclxuICAgICAgICAudGhlbigodG9rZW4pID0+IHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRva2VuOiB0b2tlbiB9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmZldGNoU2hpcHBpbmdDb3VudHJpZXModGhpcy5zdGF0ZS5jaGVja291dFRva2VuLmlkKSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGluIGdlbmVyYXRpbmcgYSB0b2tlbicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBXcmFwcGVyIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iLCJpbXBvcnQgQ29tbWVyY2UgZnJvbSBcIkBjaGVjL2NvbW1lcmNlLmpzXCI7XHJcblxyXG5jb25zdCBjb21tZXJjZUFQSUtFWSA9IHByb2Nlc3MuZW52LkNPTU1FUkNFUFVCTElDS0VZO1xyXG5cclxuaWYgKCFjb21tZXJjZUFQSUtFWSkge1xyXG4gICAgdGhyb3cgRXJyb3IoJ1lvdXIgcHVibGljIEFQSSBrZXkgbXVzdCBiZSBwcm92aWRlZCBhcyBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZScpO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb21tZXJjZShjb21tZXJjZUFQSUtFWSwgdHJ1ZSk7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvbW1lcmNlIGZyb20gJy4uL2xpYi9jb21tZXJjZSc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3N0YXRlLmpzJ1xyXG5cclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJztcclxuaW1wb3J0IFByb2R1Y3RzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RzTGlzdCc7XHJcblxyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZXJjaGFudDoge30sXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBcHBDb250ZXh0O1xyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZmV0Y2hNZXJjaGFudERldGFpbHMoKTtcclxuICAgIHRoaXMuY29udGV4dC5sb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBtZXJjaGFudCBkZXRhaWxzXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9mdWxsLXNkay1yZWZlcmVuY2UjbWVyY2hhbnRzXHJcbiAgICovXHJcbiAgZmV0Y2hNZXJjaGFudERldGFpbHMoKSB7XHJcbiAgICBjb21tZXJjZS5tZXJjaGFudHMuYWJvdXQoKS50aGVuKChtZXJjaGFudCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgbWVyY2hhbnQ6IG1lcmNoYW50IH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2ggdGhlIG1lcmNoYW50IGRldGFpbHMnLCBlcnJvcilcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBtZXJjaGFudCxcclxuICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgICA8SGVyb1xyXG4gICAgICAgICAgICBtZXJjaGFudD17bWVyY2hhbnR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8UHJvZHVjdHNMaXN0XHJcbiAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxyXG5BcHAucHJvcFR5cGVzID0ge1xyXG4gIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGVjL2NvbW1lcmNlLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0cmluZy1zdHJpcC1odG1sXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=