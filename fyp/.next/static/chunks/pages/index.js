_N_E =
(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["pages/index"],{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
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

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);
Hero.propTypes = {
  merchant: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ProductItem.js":
/*!***********************************!*\
  !*** ./components/ProductItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! string-strip-html */ "./node_modules/string-strip-html/dist/string-strip-html.umd.js");
/* harmony import */ var string_strip_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(string_strip_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");

var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\ProductItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class ProductItem extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
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
    } = string_strip_html__WEBPACK_IMPORTED_MODULE_3___default()(product.description);
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

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(ProductItem, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_4__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);
ProductItem.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  onAddToCart: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  handleAddToCart: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/ProductsList.js":
/*!************************************!*\
  !*** ./components/ProductsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductItem */ "./components/ProductItem.js");
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");


var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\components\\ProductsList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





class ProductsList extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  componentDidMount() {
    this.context.fetchProducts();
  }

  render() {
    const {
      products
    } = this.context;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
      className: "products",
      id: "products",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, products.map(product => __jsx(_ProductItem__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductsList, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_5__["AppContext"]);

/* harmony default export */ __webpack_exports__["default"] = (ProductsList);
ProductsList.propTypes = {
  products: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./context/state.js":
/*!**************************!*\
  !*** ./context/state.js ***!
  \**************************/
/*! exports provided: AppContext, AppWrapper, useAppContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContext", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWrapper", function() { return AppWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAppContext", function() { return useAppContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\context\\state.js",
    _s = $RefreshSig$();

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
  _s();

  return useContext(AppContext);
}

_s(useAppContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ "./node_modules/@chec/commerce.js/lib/index.js");
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);

const commerceAPIKEY = "pk_22347505ba2c8380513eec66e47c69506d20e41143779";

if (!commerceAPIKEY) {
  throw Error('Your public API key must be provided as an environment variable');
}

/* harmony default export */ __webpack_exports__["default"] = (new _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default.a(commerceAPIKEY, true));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! @babel/runtime/helpers/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty/_index.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty/_index.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defineProperty_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defineProperty/_index.mjs */ "./node_modules/@babel/runtime/helpers/defineProperty/_index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty_index_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extends_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extends/_index.mjs */ "./node_modules/@babel/runtime/helpers/extends/_index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends_index_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends/_index.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends/_index.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose/index.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! @babel/runtime/helpers/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles/index.js");

var iterableToArray = __webpack_require__(/*! @babel/runtime/helpers/iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray/index.js");

var unsupportedIterableToArray = __webpack_require__(/*! @babel/runtime/helpers/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js");

var nonIterableSpread = __webpack_require__(/*! @babel/runtime/helpers/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread/index.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! @babel/runtime/helpers/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray/index.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@chec/commerce.js/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@chec/commerce.js/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _objectWithoutProperties=__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties/index.js"),_toConsumableArray=__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray/index.js"),_typeof=__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof/index.js"),_defineProperty=__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty/index.js"),_classCallCheck=__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck/index.js"),_createClass=__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass/index.js"),_regeneratorRuntime=__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"),_asyncToGenerator=__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator/index.js"),axios=__webpack_require__(/*! axios */ "./node_modules/axios/index.js");function _interopDefaultLegacy(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var _objectWithoutProperties__default=_interopDefaultLegacy(_objectWithoutProperties),_toConsumableArray__default=_interopDefaultLegacy(_toConsumableArray),_typeof__default=_interopDefaultLegacy(_typeof),_defineProperty__default=_interopDefaultLegacy(_defineProperty),_classCallCheck__default=_interopDefaultLegacy(_classCallCheck),_createClass__default=_interopDefaultLegacy(_createClass),_regeneratorRuntime__default=_interopDefaultLegacy(_regeneratorRuntime),_asyncToGenerator__default=_interopDefaultLegacy(_asyncToGenerator),axios__default=_interopDefaultLegacy(axios),Storage=function(){function e(t){_classCallCheck__default.default(this,e),this.commerce=t}return _createClass__default.default(e,[{key:"set",value:function(e,t,r){if(!document)return null;var n,o="";if(n=this.commerce.options.config&&void 0!==this.commerce.options.config.cookie_path?this.commerce.options.config.cookie_path:"/",r){var c=new Date;c.setTime(c.getTime()+24*r*60*60*1e3),o="; expires="+c.toGMTString()}return document.cookie=e+"="+t+o+"; path="+n}},{key:"get",value:function(e){if(!document)return null;e+="=";for(var t=0,r=Array.from(document.cookie.split(";"));t<r.length;t++){for(var n=r[t];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(e))return n.substring(e.length,n.length)}return null}},{key:"remove",value:function(e){return this.set(e,"",-1)}}]),e}(),Cart=function(){function e(t){_classCallCheck__default.default(this,e),this.commerce=t,this.cartId=null}var t;return _createClass__default.default(e,[{key:"refresh",value:function(){var e=this;return this.commerce.request("carts").then((function(t){var r=t.id;return e.commerce.storage.set("commercejs_cart_id",r,30),e.cartId=r,t}))}},{key:"id",value:function(){if(null!==this.cartId)return this.cartId;var e=this.commerce.storage.get("commercejs_cart_id");return"string"==typeof e&&e.length?e:null}},{key:"request",value:(t=_asyncToGenerator__default.default(_regeneratorRuntime__default.default.mark((function e(){var t,r,n,o,c,a=this,s=arguments;return _regeneratorRuntime__default.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=s.length>0&&void 0!==s[0]?s[0]:"",r=s.length>1&&void 0!==s[1]?s[1]:"get",n=s.length>2&&void 0!==s[2]?s[2]:null,o=s.length>3&&void 0!==s[3]&&s[3],c="string"==typeof t&&t.length?"/".concat(t):"",this.id()){e.next=8;break}return e.next=8,this.refresh();case 8:return e.abrupt("return",this.commerce.request("carts/".concat(this.id()).concat(c),r,n,o).catch((function(e){if(e.statusCode&&404===e.statusCode)return a.refresh().then((function(){return a.commerce.request("carts/".concat(a.id()).concat(c),r,n,o)}));throw e})));case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n={id:"object"===_typeof__default.default(e)?e.id:e,quantity:t,variant:r};return this.request("","post",n)}},{key:"retrieve",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t&&(this.cartId=t),this.request().then((function(t){return e.cartId=t&&t.id||null,t}))}},{key:"checkQuantity",value:function(e,t){return this.commerce.request("products/".concat(e)).then((function(e){return t<=e.quantity}))}},{key:"remove",value:function(e){return this.request("items/".concat(e),"delete")}},{key:"delete",value:function(){return this.request("","delete")}},{key:"update",value:function(e,t){return this.request("items/".concat(e),"put",t)}},{key:"contents",value:function(){return this.request("items")}},{key:"empty",value:function(){return this.request("items","delete")}}]),e}(),Categories=function(){function e(t){_classCallCheck__default.default(this,e),this.commerce=t}return _createClass__default.default(e,[{key:"list",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return"function"==typeof e?this.commerce.request("categories"):this.commerce.request("categories","get",e)}},{key:"retrieve",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.commerce.request("categories/".concat(e),"get",t)}}]),e}(),Checkout=function(){function Checkout(e){_classCallCheck__default.default(this,Checkout),this.commerce=e}return _createClass__default.default(Checkout,[{key:"protect",value:function protect(token){return this.commerce.request("checkouts/".concat(token,"/protect")).then((function(data){return eval(data.sift_js)}))}},{key:"generateToken",value:function(e,t){return this.commerce.request("checkouts/".concat(e),"get",t)}},{key:"generateTokenFrom",value:function(e,t){if(!["product_id","cart","permalink"].includes(e))throw new Error('Cannot generate a token with unknown "'.concat(e,'" type'));return this.generateToken(t,{type:e})}},{key:"capture",value:function(e,t){var r=this;return this.commerce.request("checkouts/".concat(e),"post",t).then((function(e){return r.commerce.cart.refresh(),e}))}},{key:"receipt",value:function(e){return this.commerce.request("checkouts/".concat(e,"/receipt"))}},{key:"checkPayWhatYouWant",value:function(e,t){return this.commerce.request("checkouts/".concat(e,"/check/pay_what_you_want"),"get",t)}},{key:"fields",value:function(e){return this.commerce.request("checkouts/".concat(e,"/fields"))}},{key:"setTaxZone",value:function(e,t){return this.commerce.request("checkouts/".concat(e,"/helper/set_tax_zone"),"get",t)}},{key:"getLocationFromIP",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=t&&t.length?"?ip_address=".concat(t):"";return this.commerce.request("checkouts/".concat(e,"/helper/location_from_ip").concat(r))}},{key:"isFree",value:function(e){return this.commerce.request("checkouts/".concat(e,"/check/is_free"))}},{key:"checkVariant",value:function(e,t,r){return this.commerce.request("checkouts/".concat(e,"/check/").concat(t,"/variant"),"get",r)}},{key:"checkDiscount",value:function(e,t){return this.commerce.request("checkouts/".concat(e,"/check/discount"),"get",t)}},{key:"checkShippingOption",value:function(e,t){return this.commerce.request("checkouts/".concat(e,"/check/shipping"),"get",t)}},{key:"getShippingOptions",value:function(e,t){return this.commerce.request("checkouts/".concat(e,"/helper/shipping_options"),"get",t)}},{key:"checkQuantity",value:function(e,t,r){return this.commerce.request("checkouts/".concat(e,"/check/").concat(t,"/quantity"),"get",r)}},{key:"helperValidation",value:function(e){return this.commerce.request("checkouts/".concat(e,"/helper/validation"))}},{key:"getLive",value:function(e){return this.commerce.request("checkouts/".concat(e,"/live"))}},{key:"getToken",value:function(e){return this.commerce.request("checkouts/tokens/".concat(e))}},{key:"checkGiftcard",value:function(e,t){return this.commerce.request("checkouts/".concat(e,"/check/giftcard"),"get",t)}}]),Checkout}();function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(r,!0).forEach((function(t){_defineProperty__default.default(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Customer=function(){function e(t){_classCallCheck__default.default(this,e),this.commerce=t,this.data={}}return _createClass__default.default(e,[{key:"login",value:function(e,t){return this.commerce.request("customers/email-token","post",{email:e,base_url:t})}},{key:"getToken",value:function(e){var t=this,r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.commerce.request("customers/exchange-token","post",{token:e}).then((function(e){return r&&(e.customer_id||e.jwt)&&(t.data={id:e.customer_id||null,token:e.jwt||null},window.localStorage.setItem("commercejs_customer_id",t.data.id),window.localStorage.setItem("commercejs_customer_token",t.data.token)),e}))}},{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this._assertArgsProvided(t,r),this._request("customers/".concat(t||this.id()),"PUT",e,{},r)}},{key:"getOrders",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this._assertArgsProvided(e,t);var n=_objectSpread({sortBy:"created",sortDirection:"desc"},r);return this._request("customers/".concat(e||this.id(),"/orders"),"get",n,{},t)}},{key:"getOrder",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return this._assertArgsProvided(t,r),this._request("customers/".concat(t||this.id(),"/orders/").concat(e),"get",{},{},r)}},{key:"about",value:function(){return this._request("customers/".concat(this.id()))}},{key:"id",value:function(){return this._fromStorage("id")}},{key:"token",value:function(){return this._fromStorage("token")}},{key:"isLoggedIn",value:function(){return null!==this.id()&&null!==this.token()}},{key:"logout",value:function(){this.data={},window.localStorage.removeItem("commercejs_customer_id"),window.localStorage.removeItem("commercejs_customer_token")}},{key:"_fromStorage",value:function(e){if(this.data[e]&&this.data[e].length)return this.data[e];var t=window.localStorage.getItem("commercejs_customer_".concat(e));return"string"==typeof t&&t.length?t:null}},{key:"_request",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,c=o||this.token();return this.commerce.request(e,t,r,_objectSpread({"X-Authorization":void 0,Authorization:"Bearer ".concat(c)},n),c)}},{key:"_assertArgsProvided",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===e&&!this.id())throw new Error("A customer ID must be provided when customer is not logged in");if(null===t&&!this.token())throw new Error("A customer access token must be provided when customer is not logged in")}}]),e}(),Merchants=function(){function e(t){_classCallCheck__default.default(this,e),this.commerce=t}return _createClass__default.default(e,[{key:"about",value:function(){return this.commerce.request("merchants")}}]),e}(),Products=function(){function e(t){_classCallCheck__default.default(this,e),this.commerce=t}return _createClass__default.default(e,[{key:"list",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.commerce.request("products","get",e)}},{key:"retrieve",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.commerce.request("products/".concat(e),"get",t)}}]),e}(),Services=function(){function e(t){_classCallCheck__default.default(this,e),this.commerce=t}return _createClass__default.default(e,[{key:"localeListCountries",value:function(){return this.commerce.request("services/locale/countries")}},{key:"localeListShippingCountries",value:function(e){return this.commerce.request("services/locale/".concat(e,"/countries"))}},{key:"localeListShippingSubdivisions",value:function(e,t){return this.commerce.request("services/locale/".concat(e,"/countries/").concat(t,"/subdivisions"))}},{key:"localeListSubdivisions",value:function(e){return this.commerce.request("services/locale/".concat(e,"/subdivisions"))}}]),e}(),Features={Cart:Cart,Categories:Categories,Checkout:Checkout,Customer:Customer,Merchants:Merchants,Products:Products,Services:Services},consoleHelper=function(){var e,t,r,n,o,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"black",a=arguments.length>1?arguments[1]:void 0,s=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,u=!1;switch(c){case"success":c="#488f5a",e="✅   ";break;case"info":c="DodgerBlue",e="";break;case"error":c="rgba(244, 67, 54, 1)","validation"===i.error.type?(e="🚫 Validation/missing fields",a=""):e="❌ HTTP ERROR ",u=!0;break;case"warning":c="rgba(208, 154, 35, 1)",e="⚠️  "}if(!0===u){if(console.log("%c"+e+a,"color:"+c+";display:block; width: 100%;padding:2px 2px 2px 0px;font-family: Open Sans, Helvetica, Sans-serif;font-weight:bold;background-color:rgba(244, 67, 54, 0.15);"),"object"===_typeof__default.default(i.error.message)){for(t=0,r=(n=i.error.message).length,o=[];t<r;)console.log("%c"+n[t].field+" %c"+n[t].error,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:800;","color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;"),o.push(t++);return o}return console.log("%c"+i.error.message,"color:#515D6D;font-family: Open Sans, Helvetica, Sans-serif;font-weight:400;")}if("object"===_typeof__default.default(c))return console.log("%c"+a,"color: PowderBlue;font-weight:bold;font-family: Open Sans, Helvetica, Sans-serif; background-color: RoyalBlue;"),void console.log(c);console.log("%c"+e+a,"color:"+c+";display:block;font-family: Open Sans, Helvetica, Sans-serif;line-height:28px; width: 100%;padding:2px 2px 2px 0px;font-weight:bold;"),s&&console.log("%c"+s,"color:#515D6D;line-height:22px;font-weight:400; font-family: Open Sans, Helvetica, Sans-serif;")},debuggerOnNotice=function(){console.log("%c\r\n \r\n                           Che         EcC\r\n                         c....c2    2c....:C\r\n                       c........c2   2c.....:C\r\n                     c............c2   2c.....:C\r\n                   c................c2   2c.....:C\r\n                 c....................c2   2c.....:C\r\n               c........................c2   2c.....:C\r\n             c............................c2   2c.....:C\r\n           c.......:E2  2c..................c2   2c.....:C\r\n         c........h  $$   2c..................c2   2c.....:C\r\n       c.........:C  $cc$  E....................c2   2c.....:C\r\n     c............h    $$  c......................c2   2c.....:C\r\n   c...............:E    E:.........................c2   2c.....:C\r\n   E............................:C c..................h2   2c...:C\r\n     E........................:C     c..................h2   2hC\r\n       E....................:C         c..................h2\r\n         E................:C             c................:C\r\n           E............:C                 c............:C\r\n             E........:C                     c........:C\r\n               E....:C                         c....:C\r\n                 EcC                             EcC\r\n \r\n \r\n \r\n","font-family: Courier New, Courier, monospace; color: #788ba4; font-weight:bold; font-size: 11px;"),console.log("%cCommerce.js console debugger is on!  🎉","text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #488f5a; line-height:28px; font-size: 14px"),console.log("%c💬   Need some help? Join our Slack channel - http://slack.commercejs.com \r\n","text-align:center; display:block; font-family: Open Sans, Helvetica, Sans-serif; color: #515D6D; line-height:20px; font-size: 12px")};function ownKeys$1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread$1(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys$1(r,!0).forEach((function(t){_defineProperty__default.default(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys$1(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var defaultEventCallback=function(e){var t=new CustomEvent("Commercejs.".concat(e),{bubbles:!1,cancelable:!1});return window.dispatchEvent(t)},Commerce=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(_classCallCheck__default.default(this,e),this.options=_objectSpread$1(_objectSpread$1({version:"v1",url:"https://api.chec.io/",eventCallback:defaultEventCallback},n),{},{publicKey:t,debug:r}),"string"!=typeof t||0===t.length)throw new Error("⚠️ Invalid public key given to Commerce.js client");if("sk_"===t.toLowerCase().substring(0,3))throw new Error("Secret key provided. You must use a public key with Commerce.js!");this.storage=new Storage(this),this.cart=new Features.Cart(this),this.checkout=new Features.Checkout(this),this.customer=new Features.Customer(this),this.products=new Features.Products(this),this.services=new Features.Services(this),this.categories=new Features.Categories(this),this.merchants=new Features.Merchants(this),r&&(this.consoleHelper=consoleHelper,debuggerOnNotice())}return _createClass__default.default(e,[{key:"error",value:function(e){if(this.consoleHelper&&this.options.debug){var t=e.response,r="[".concat(t.status,"] Type: ").concat(t.statusText),n="string"==typeof t.data?t.data:t.statusText;return this.consoleHelper("error",r,n,t.data)}}},{key:"request",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a={"X-Authorization":this.options.publicKey,"X-Chec-Agent":"commerce.js/v2","Content-Type":"application/json"},s="get"===r?n:null,i="get"===r?null:n,u=this.options.timeoutMs||6e4,l=this.options.axiosConfig||{},h=this.options.url;"/"!==h.substring(h.length-1)&&(h+="/");var f=axios__default.default(_objectSpread$1(_objectSpread$1({url:e,method:r,baseURL:"".concat(h).concat(this.options.version,"/"),params:s,data:i,timeout:u},l),{},{headers:_objectSpread$1(_objectSpread$1(_objectSpread$1({},a),l.headers),o)}));if(c)return f;var d=this.options.eventCallback;return f.then((function(e){if(t.consoleHelper&&t.options.debug&&"object"===_typeof__default.default(e.data._console)&&t.consoleHelper.apply(t,_toConsumableArray__default.default(e.data._console)),"object"!==_typeof__default.default(e.data)||Array.isArray(e.data))return e.data;var r=e.data,n=r._event,o=_objectWithoutProperties__default.default(r,["_event"]);return"string"==typeof n&&"function"==typeof d&&d(n),o})).catch((function(e){throw t.error(e),{message:"Unsuccessful response (".concat(e.response.status,": ").concat(e.response.statusText,") received"),statusCode:e.response.status,statusText:e.response.statusText,data:e.response.data,originalError:e}}))}}]),e}();module.exports=Commerce;


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);module.exports=assign;module.exports.default=module.exports;
//# sourceMappingURL=object-assign.js.map

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CKGM%5COneDrive%5CDocuments%5CGitHub%5Cchec%5Cfyp%5Cpages%5Cindex.js!./":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CKGM%5COneDrive%5CDocuments%5CGitHub%5Cchec%5Cfyp%5Cpages%5Cindex.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var checkPropTypes = __webpack_require__(/*! prop-types/checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ "./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/string-strip-html/dist/string-strip-html.umd.js":
/*!**********************************************************************!*\
  !*** ./node_modules/string-strip-html/dist/string-strip-html.umd.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * string-strip-html
 * Strips HTML tags from strings. No parser, accepts mixed sources.
 * Version: 6.3.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-strip-html/
 */

!function(r,e){ true?module.exports=e():undefined}(this,(function(){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(e)}function e(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function t(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function n(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function a(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){t(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function o(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,s=r[Symbol.iterator]();!(n=(i=s.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(r){a=!0,o=r}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return t}(r,e)||s(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(r){return function(r){if(Array.isArray(r))return c(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||s(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(r,e){if(r){if("string"==typeof r)return c(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(r,e):void 0}}function c(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function l(r,e){if(!Array.isArray(r)||!r.length)return r;var t,n,o=a(a({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null}),e);if(o.strictlyTwoElementsInRangeArrays&&!r.filter((function(r){return r})).every((function(r,e){return 2===r.length||(t=e,n=r.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(r[t],null,4),") has not two but ").concat(n," elements!"));if(!r.filter((function(r){return r})).every((function(r,e){return!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(t=e,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ".concat(t,"th range (").concat(JSON.stringify(r[t],null,4),") does not consist of only natural numbers!"));var i=Math.pow(r.filter((function(r){return r})).length,2),s=0;return Array.from(r).filter((function(r){return r})).sort((function(r,e){return o.progressFn&&(s+=1,o.progressFn(Math.floor(100*s/i))),r[0]===e[0]?r[1]<e[1]?-1:r[1]>e[1]?1:0:r[0]<e[0]?-1:1}))}function u(e,t){function n(r){return"string"==typeof r}function o(e){return e&&"object"===r(e)&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;var s,c={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(t){if(!o(t))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(t,null,4)," (type ").concat(r(t),")"));if((s=a(a({},c),t)).progressFn&&o(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(r(s.progressFn),'", equal to ').concat(JSON.stringify(s.progressFn,null,4)));if(s.mergeType&&1!==s.mergeType&&2!==s.mergeType)if(n(s.mergeType)&&"1"===s.mergeType.trim())s.mergeType=1;else{if(!n(s.mergeType)||"2"!==s.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(r(s.mergeType),'", equal to ').concat(JSON.stringify(s.mergeType,null,4)));s.mergeType=2}if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(r(s.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(s.joinRangesThatTouchEdges,null,4)))}else s=a({},c);for(var u,p,g,f=e.filter((function(r){return r})).map((function(r){return i(r)})).filter((function(r){return void 0!==r[2]||r[0]!==r[1]})),d=(u=s.progressFn?l(f,{progressFn:function(r){(g=Math.floor(r/5))!==p&&(p=g,s.progressFn(g))}}):l(f)).length-1,h=d;h>0;h--)s.progressFn&&(g=Math.floor(78*(1-h/d))+21)!==p&&g>p&&(p=g,s.progressFn(g)),(u[h][0]<=u[h-1][0]||!s.joinRangesThatTouchEdges&&u[h][0]<u[h-1][1]||s.joinRangesThatTouchEdges&&u[h][0]<=u[h-1][1])&&(u[h-1][0]=Math.min(u[h][0],u[h-1][0]),u[h-1][1]=Math.max(u[h][1],u[h-1][1]),void 0!==u[h][2]&&(u[h-1][0]>=u[h][0]||u[h-1][1]<=u[h][1])&&null!==u[h-1][2]&&(null===u[h][2]&&null!==u[h-1][2]?u[h-1][2]=null:void 0!==u[h-1][2]?2===s.mergeType&&u[h-1][0]===u[h][0]?u[h-1][2]=u[h][2]:u[h-1][2]+=u[h][2]:u[h-1][2]=u[h][2]),u.splice(h,1),h=u.length);return u.length?u:null}function p(r){return null!=r}function g(r){return"string"==typeof r}function f(e,t,n){var a,o=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!g(e))throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ".concat(r(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(t&&!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ".concat(r(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(n&&"function"!=typeof n)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ".concat(r(n),", equal to: ").concat(JSON.stringify(n,null,4)));if(!t||!t.filter((function(r){return r})).length)return e;var s=(a=Array.isArray(t)&&(Number.isInteger(t[0])&&t[0]>=0||/^\d*$/.test(t[0]))&&(Number.isInteger(t[1])&&t[1]>=0||/^\d*$/.test(t[1]))?[Array.from(t)]:Array.from(t)).length,c=0;a.filter((function(r){return r})).forEach((function(e,t){if(n&&(o=Math.floor(c/s*10))!==i&&(i=o,n(o)),!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has ".concat(t,"th element not an array: ").concat(JSON.stringify(e,null,4),", which is ").concat(r(e)));if(!Number.isInteger(e[0])||e[0]<0){if(!/^\d*$/.test(e[0]))throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has ".concat(t,"th element, array [").concat(e[0],",").concat(e[1],"]. That array has first element not an integer, but ").concat(r(e[0]),", equal to: ").concat(JSON.stringify(e[0],null,4),". Computer doesn't like this."));a[t][0]=Number.parseInt(a[t][0],10)}if(!Number.isInteger(e[1])){if(!/^\d*$/.test(e[1]))throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has ".concat(t,"th element, array [").concat(e[0],",").concat(e[1],"]. That array has second element not an integer, but ").concat(r(e[1]),", equal to: ").concat(JSON.stringify(e[1],null,4),". Computer doesn't like this."));a[t][1]=Number.parseInt(a[t][1],10)}c+=1}));var l=u(a,{progressFn:function(r){n&&(o=10+Math.floor(r/10))!==i&&(i=o,n(o))}});if(!l)return e;var f=l.length;if(f>0){var d=e.slice(l[f-1][1]);e=l.reduce((function(r,t,a,s){n&&(o=20+Math.floor(a/f*80))!==i&&(i=o,n(o));var c=0===a?0:s[a-1][1],l=s[a][0];return r+e.slice(c,l)+(p(s[a][2])?s[a][2]:"")}),""),e+=d}return e}var d=" ";function h(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;function t(r){return Array.from(r).reverse().join("")}function n(r,e,t){var n=t?"\n":"\r",a=t?"\r":"\n";if(!r)return r;for(var o=0,i="",s=0,c=r.length;s<c;s++)(r[s]===n||r[s]===a&&r[s-1]!==n)&&o++,"\r\n".includes(r[s])||r[s]===d?r[s]===d?i+=r[s]:r[s]===n?o<=e&&(i+=r[s],r[s+1]===a&&(i+=r[s+1],s++)):r[s]===a&&(!r[s-1]||r[s-1]!==n)&&o<=e&&(i+=r[s]):r[s+1]||o||(i+=" ");return i}if("string"==typeof r&&r.length){var a=1;"number"==typeof+e&&Number.isInteger(+e)&&+e>=0&&(a=+e);var o="",i="";if(r.trim()){if(!r[0].trim())for(var s=0,c=r.length;s<c;s++)if(r[s].trim()){o=r.slice(0,s);break}}else o=r;if(r.trim()&&(""===r.slice(-1).trim()||r.slice(-1)===d))for(var l=r.length;l--;)if(r[l].trim()){i=r.slice(l+1);break}return"".concat(n(o,a,!1)).concat(r.trim()).concat(t(n(t(i),a,!0)))}return r}function m(r){return null!=r}function b(r){return Number.isInteger(r)&&r>=0}function y(r){return"string"==typeof r}function v(r){return/^\d*$/.test(r)?parseInt(r,10):r}var w=function(){function t(e){!function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=a(a({},{limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1}),e);if(n.mergeType&&1!==n.mergeType&&2!==n.mergeType)if(y(n.mergeType)&&"1"===n.mergeType.trim())n.mergeType=1;else{if(!y(n.mergeType)||"2"!==n.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(r(n.mergeType),'", equal to ').concat(JSON.stringify(n.mergeType,null,4)));n.mergeType=2}this.opts=n}var n,o,s;return n=t,(o=[{key:"add",value:function(e,t,n){for(var a=this,o=arguments.length,s=new Array(o>3?o-3:0),c=3;c<o;c++)s[c-3]=arguments[c];if(s.length>0)throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_03] Please don't overload the add() method. From the 4th input argument onwards we see these redundant arguments: ".concat(JSON.stringify(s,null,4)));if(m(e)||m(t)){if(m(e)&&!m(t)){if(Array.isArray(e)){if(e.length){if(e.some((function(r){return Array.isArray(r)})))return void e.forEach((function(r){Array.isArray(r)&&a.add.apply(a,i(r))}));e.length>1&&b(v(e[0]))&&b(v(e[1]))&&this.add.apply(this,i(e))}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('.concat(JSON.stringify(e,null,0),') but second-one, "to" is not (').concat(JSON.stringify(t,null,0),")"))}if(!m(e)&&m(t))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('.concat(JSON.stringify(t,null,0),') but first-one, "from" is not (').concat(JSON.stringify(e,null,0),")"));var l=/^\d*$/.test(e)?parseInt(e,10):e,u=/^\d*$/.test(t)?parseInt(t,10):t;if(b(n)&&(n=String(n)),!b(l)||!b(u))throw b(l)&&l>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(r(u),'" equal to: ').concat(JSON.stringify(u,null,4))):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'.concat(r(l),'" equal to: ').concat(JSON.stringify(l,null,4)));if(m(n)&&!y(n)&&!b(n))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but ".concat(r(n),", equal to:\n").concat(JSON.stringify(n,null,4)));if(m(this.ranges)&&Array.isArray(this.last())&&l===this.last()[1]){if(this.last()[1]=u,this.last()[2],null!==this.last()[2]&&m(n)){var p=!(m(this.last()[2])&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?n:this.last()[2]+n;this.opts.limitToBeAddedWhitespace&&(p=h(p,this.opts.limitLinebreaksCount)),y(p)&&!p.length||(this.last()[2]=p)}}else{this.ranges||(this.ranges=[]);var g=void 0===n||y(n)&&!n.length?[l,u]:[l,u,this.opts.limitToBeAddedWhitespace?h(n,this.opts.limitLinebreaksCount):n];this.ranges.push(g)}}}},{key:"push",value:function(r,e,t){for(var n=arguments.length,a=new Array(n>3?n-3:0),o=3;o<n;o++)a[o-3]=arguments[o];this.add.apply(this,[r,e,t].concat(a))}},{key:"current",value:function(){var r=this;return null!=this.ranges?(this.ranges=u(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(e){return m(e[2])?[e[0],e[1],h(e[2],r.opts.limitLinebreaksCount)]:e})):this.ranges):null}},{key:"wipe",value:function(){this.ranges=void 0}},{key:"replace",value:function(r){if(Array.isArray(r)&&r.length){if(!Array.isArray(r[0])||!b(r[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, ".concat(JSON.stringify(r[0],null,4)," should be an array and its first element should be an integer, a string index."));this.ranges=Array.from(r)}else this.ranges=void 0}},{key:"last",value:function(){return void 0!==this.ranges&&Array.isArray(this.ranges)?this.ranges[this.ranges.length-1]:null}}])&&e(n.prototype,o),s&&e(n,s),t}();var q,T,A=Function.prototype,k=Object.prototype,O=A.toString,S=k.hasOwnProperty,E=O.call(Object),_=k.toString,x=(q=Object.getPrototypeOf,T=Object,function(r){return q(T(r))});var D=function(e){if(!function(e){return!!e&&"object"==r(e)}(e)||"[object Object]"!=_.call(e)||function(r){var e=!1;if(null!=r&&"function"!=typeof r.toString)try{e=!!(r+"")}catch(r){}return e}(e))return!1;var t=x(e);if(null===t)return!0;var n=S.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&O.call(n)==E},L="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function R(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var N="[object Symbol]",j=/^\s+|\s+$/g,C="\\u0300-\\u036f\\ufe20-\\ufe23",B="[\\ud800-\\udfff]",I="["+C+"\\u20d0-\\u20f0]",H="\\ud83c[\\udffb-\\udfff]",U="[^\\ud800-\\udfff]",V="(?:\\ud83c[\\udde6-\\uddff]){2}",P="[\\ud800-\\udbff][\\udc00-\\udfff]",W="(?:"+I+"|"+H+")"+"?",F="[\\ufe0e\\ufe0f]?",G=F+W+("(?:\\u200d(?:"+[U,V,P].join("|")+")"+F+W+")*"),z="(?:"+[U+I+"?",I,V,P,B].join("|")+")",J=RegExp(H+"(?="+H+")|"+z+G,"g"),M=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),$="object"==r(L)&&L&&L.Object===Object&&L,Z="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,Y=$||Z||Function("return this")();function K(r,e,t){if(e!=e)return function(r,e,t,n){for(var a=r.length,o=t+(n?1:-1);n?o--:++o<a;)if(e(r[o],o,r))return o;return-1}(r,Q,t);for(var n=t-1,a=r.length;++n<a;)if(r[n]===e)return n;return-1}function Q(r){return r!=r}function X(r){return function(r){return M.test(r)}(r)?function(r){return r.match(J)||[]}(r):function(r){return r.split("")}(r)}var rr=Object.prototype.toString,er=Y.Symbol,tr=er?er.prototype:void 0,nr=tr?tr.toString:void 0;function ar(e){if("string"==typeof e)return e;if(function(e){return"symbol"==r(e)||function(e){return!!e&&"object"==r(e)}(e)&&rr.call(e)==N}(e))return nr?nr.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function or(r,e,t){var n=r.length;return t=void 0===t?n:t,!e&&t>=n?r:function(r,e,t){var n=-1,a=r.length;e<0&&(e=-e>a?0:a+e),(t=t>a?a:t)<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(a);++n<a;)o[n]=r[n+e];return o}(r,e,t)}var ir=function(r,e,t){var n;if((r=null==(n=r)?"":ar(n))&&(t||void 0===e))return r.replace(j,"");if(!r||!(e=ar(e)))return r;var a=X(r),o=X(e);return or(a,function(r,e){for(var t=-1,n=r.length;++t<n&&K(e,r[t],0)>-1;);return t}(a,o),function(r,e){for(var t=r.length;t--&&K(e,r[t],0)>-1;);return t}(a,o)+1).join("")},sr="__lodash_hash_undefined__",cr=9007199254740991,lr=/^\[object .+?Constructor\]$/,ur="object"==r(L)&&L&&L.Object===Object&&L,pr="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,gr=ur||pr||Function("return this")();function fr(r,e,t){switch(t.length){case 0:return r.call(e);case 1:return r.call(e,t[0]);case 2:return r.call(e,t[0],t[1]);case 3:return r.call(e,t[0],t[1],t[2])}return r.apply(e,t)}function dr(r,e){return!!(r?r.length:0)&&function(r,e,t){if(e!=e)return function(r,e,t,n){var a=r.length,o=t+(n?1:-1);for(;n?o--:++o<a;)if(e(r[o],o,r))return o;return-1}(r,mr,t);var n=t-1,a=r.length;for(;++n<a;)if(r[n]===e)return n;return-1}(r,e,0)>-1}function hr(r,e,t){for(var n=-1,a=r?r.length:0;++n<a;)if(t(e,r[n]))return!0;return!1}function mr(r){return r!=r}function br(r,e){return r.has(e)}var yr,vr=Array.prototype,wr=Function.prototype,qr=Object.prototype,Tr=gr["__core-js_shared__"],Ar=(yr=/[^.]+$/.exec(Tr&&Tr.keys&&Tr.keys.IE_PROTO||""))?"Symbol(src)_1."+yr:"",kr=wr.toString,Or=qr.hasOwnProperty,Sr=qr.toString,Er=RegExp("^"+kr.call(Or).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_r=vr.splice,xr=Math.max,Dr=Vr(gr,"Map"),Lr=Vr(Object,"create");function Rr(r){var e=-1,t=r?r.length:0;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}function Nr(r){var e=-1,t=r?r.length:0;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}function jr(r){var e=-1,t=r?r.length:0;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}function Cr(r){var e=-1,t=r?r.length:0;for(this.__data__=new jr;++e<t;)this.add(r[e])}function Br(r,e){for(var t,n,a=r.length;a--;)if((t=r[a][0])===(n=e)||t!=t&&n!=n)return a;return-1}function Ir(r,e,t,n){var a=-1,o=dr,i=!0,s=r.length,c=[],l=e.length;if(!s)return c;t&&(e=function(r,e){for(var t=-1,n=r?r.length:0,a=Array(n);++t<n;)a[t]=e(r[t],t,r);return a}(e,function(r){return function(e){return r(e)}}(t))),n?(o=hr,i=!1):e.length>=200&&(o=br,i=!1,e=new Cr(e));r:for(;++a<s;){var u=r[a],p=t?t(u):u;if(u=n||0!==u?u:0,i&&p==p){for(var g=l;g--;)if(e[g]===p)continue r;c.push(u)}else o(e,p,n)||c.push(u)}return c}function Hr(r){return!(!Wr(r)||function(r){return!!Ar&&Ar in r}(r))&&(Pr(r)||function(r){var e=!1;if(null!=r&&"function"!=typeof r.toString)try{e=!!(r+"")}catch(r){}return e}(r)?Er:lr).test(function(r){if(null!=r){try{return kr.call(r)}catch(r){}try{return r+""}catch(r){}}return""}(r))}function Ur(e,t){var n,a,o=e.__data__;return("string"==(a=r(n=t))||"number"==a||"symbol"==a||"boolean"==a?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function Vr(r,e){var t=function(r,e){return null==r?void 0:r[e]}(r,e);return Hr(t)?t:void 0}function Pr(r){var e=Wr(r)?Sr.call(r):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function Wr(e){var t=r(e);return!!e&&("object"==t||"function"==t)}Rr.prototype.clear=function(){this.__data__=Lr?Lr(null):{}},Rr.prototype.delete=function(r){return this.has(r)&&delete this.__data__[r]},Rr.prototype.get=function(r){var e=this.__data__;if(Lr){var t=e[r];return t===sr?void 0:t}return Or.call(e,r)?e[r]:void 0},Rr.prototype.has=function(r){var e=this.__data__;return Lr?void 0!==e[r]:Or.call(e,r)},Rr.prototype.set=function(r,e){return this.__data__[r]=Lr&&void 0===e?sr:e,this},Nr.prototype.clear=function(){this.__data__=[]},Nr.prototype.delete=function(r){var e=this.__data__,t=Br(e,r);return!(t<0)&&(t==e.length-1?e.pop():_r.call(e,t,1),!0)},Nr.prototype.get=function(r){var e=this.__data__,t=Br(e,r);return t<0?void 0:e[t][1]},Nr.prototype.has=function(r){return Br(this.__data__,r)>-1},Nr.prototype.set=function(r,e){var t=this.__data__,n=Br(t,r);return n<0?t.push([r,e]):t[n][1]=e,this},jr.prototype.clear=function(){this.__data__={hash:new Rr,map:new(Dr||Nr),string:new Rr}},jr.prototype.delete=function(r){return Ur(this,r).delete(r)},jr.prototype.get=function(r){return Ur(this,r).get(r)},jr.prototype.has=function(r){return Ur(this,r).has(r)},jr.prototype.set=function(r,e){return Ur(this,r).set(r,e),this},Cr.prototype.add=Cr.prototype.push=function(r){return this.__data__.set(r,sr),this},Cr.prototype.has=function(r){return this.__data__.has(r)};var Fr=function(r,e){return e=xr(void 0===e?r.length-1:e,0),function(){for(var t=arguments,n=-1,a=xr(t.length-e,0),o=Array(a);++n<a;)o[n]=t[e+n];n=-1;for(var i=Array(e+1);++n<e;)i[n]=t[n];return i[e]=o,fr(r,this,i)}}((function(e,t){return function(e){return!!e&&"object"==r(e)}(n=e)&&function(r){return null!=r&&function(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=cr}(r.length)&&!Pr(r)}(n)?Ir(e,t):[];var n})),Gr=2147483647,zr=36,Jr=/^xn--/,Mr=/[^\x20-\x7E]/,$r=/[\x2E\u3002\uFF0E\uFF61]/g,Zr={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},Yr=Math.floor,Kr=String.fromCharCode;
/*! https://mths.be/punycode v1.4.1 by @mathias */function Qr(r){throw new RangeError(Zr[r])}function Xr(r,e){for(var t=r.length,n=[];t--;)n[t]=e(r[t]);return n}function re(r,e){var t=r.split("@"),n="";return t.length>1&&(n=t[0]+"@",r=t[1]),n+Xr((r=r.replace($r,".")).split("."),e).join(".")}function ee(r){for(var e,t,n=[],a=0,o=r.length;a<o;)(e=r.charCodeAt(a++))>=55296&&e<=56319&&a<o?56320==(64512&(t=r.charCodeAt(a++)))?n.push(((1023&e)<<10)+(1023&t)+65536):(n.push(e),a--):n.push(e);return n}function te(r){return Xr(r,(function(r){var e="";return r>65535&&(e+=Kr((r-=65536)>>>10&1023|55296),r=56320|1023&r),e+=Kr(r)})).join("")}function ne(r,e){return r+22+75*(r<26)-((0!=e)<<5)}function ae(r,e,t){var n=0;for(r=t?Yr(r/700):r>>1,r+=Yr(r/e);r>455;n+=zr)r=Yr(r/35);return Yr(n+36*r/(r+38))}function oe(r){var e,t,n,a,o,i,s,c,l,u,p,g=[],f=r.length,d=0,h=128,m=72;for((t=r.lastIndexOf("-"))<0&&(t=0),n=0;n<t;++n)r.charCodeAt(n)>=128&&Qr("not-basic"),g.push(r.charCodeAt(n));for(a=t>0?t+1:0;a<f;){for(o=d,i=1,s=zr;a>=f&&Qr("invalid-input"),((c=(p=r.charCodeAt(a++))-48<10?p-22:p-65<26?p-65:p-97<26?p-97:zr)>=zr||c>Yr((Gr-d)/i))&&Qr("overflow"),d+=c*i,!(c<(l=s<=m?1:s>=m+26?26:s-m));s+=zr)i>Yr(Gr/(u=zr-l))&&Qr("overflow"),i*=u;m=ae(d-o,e=g.length+1,0==o),Yr(d/e)>Gr-h&&Qr("overflow"),h+=Yr(d/e),d%=e,g.splice(d++,0,h)}return te(g)}function ie(r){var e,t,n,a,o,i,s,c,l,u,p,g,f,d,h,m=[];for(g=(r=ee(r)).length,e=128,t=0,o=72,i=0;i<g;++i)(p=r[i])<128&&m.push(Kr(p));for(n=a=m.length,a&&m.push("-");n<g;){for(s=Gr,i=0;i<g;++i)(p=r[i])>=e&&p<s&&(s=p);for(s-e>Yr((Gr-t)/(f=n+1))&&Qr("overflow"),t+=(s-e)*f,e=s,i=0;i<g;++i)if((p=r[i])<e&&++t>Gr&&Qr("overflow"),p==e){for(c=t,l=zr;!(c<(u=l<=o?1:l>=o+26?26:l-o));l+=zr)h=c-u,d=zr-u,m.push(Kr(ne(u+h%d,0))),c=Yr(h/d);m.push(Kr(ne(c,0))),o=ae(t,f,n==a),t=0,++n}++t,++e}return m.join("")}function se(r){return re(r,(function(r){return Jr.test(r)?oe(r.slice(4).toLowerCase()):r}))}function ce(r){return re(r,(function(r){return Mr.test(r)?"xn--"+ie(r):r}))}var le="1.4.1",ue={decode:ee,encode:te},pe={version:le,ucs2:ue,toASCII:ce,toUnicode:se,encode:ie,decode:oe},ge={9:"Tab;",10:"NewLine;",33:"excl;",34:"quot;",35:"num;",36:"dollar;",37:"percnt;",38:"amp;",39:"apos;",40:"lpar;",41:"rpar;",42:"midast;",43:"plus;",44:"comma;",46:"period;",47:"sol;",58:"colon;",59:"semi;",60:"lt;",61:"equals;",62:"gt;",63:"quest;",64:"commat;",91:"lsqb;",92:"bsol;",93:"rsqb;",94:"Hat;",95:"UnderBar;",96:"grave;",123:"lcub;",124:"VerticalLine;",125:"rcub;",160:"NonBreakingSpace;",161:"iexcl;",162:"cent;",163:"pound;",164:"curren;",165:"yen;",166:"brvbar;",167:"sect;",168:"uml;",169:"copy;",170:"ordf;",171:"laquo;",172:"not;",173:"shy;",174:"reg;",175:"strns;",176:"deg;",177:"pm;",178:"sup2;",179:"sup3;",180:"DiacriticalAcute;",181:"micro;",182:"para;",183:"middot;",184:"Cedilla;",185:"sup1;",186:"ordm;",187:"raquo;",188:"frac14;",189:"half;",190:"frac34;",191:"iquest;",192:"Agrave;",193:"Aacute;",194:"Acirc;",195:"Atilde;",196:"Auml;",197:"Aring;",198:"AElig;",199:"Ccedil;",200:"Egrave;",201:"Eacute;",202:"Ecirc;",203:"Euml;",204:"Igrave;",205:"Iacute;",206:"Icirc;",207:"Iuml;",208:"ETH;",209:"Ntilde;",210:"Ograve;",211:"Oacute;",212:"Ocirc;",213:"Otilde;",214:"Ouml;",215:"times;",216:"Oslash;",217:"Ugrave;",218:"Uacute;",219:"Ucirc;",220:"Uuml;",221:"Yacute;",222:"THORN;",223:"szlig;",224:"agrave;",225:"aacute;",226:"acirc;",227:"atilde;",228:"auml;",229:"aring;",230:"aelig;",231:"ccedil;",232:"egrave;",233:"eacute;",234:"ecirc;",235:"euml;",236:"igrave;",237:"iacute;",238:"icirc;",239:"iuml;",240:"eth;",241:"ntilde;",242:"ograve;",243:"oacute;",244:"ocirc;",245:"otilde;",246:"ouml;",247:"divide;",248:"oslash;",249:"ugrave;",250:"uacute;",251:"ucirc;",252:"uuml;",253:"yacute;",254:"thorn;",255:"yuml;",256:"Amacr;",257:"amacr;",258:"Abreve;",259:"abreve;",260:"Aogon;",261:"aogon;",262:"Cacute;",263:"cacute;",264:"Ccirc;",265:"ccirc;",266:"Cdot;",267:"cdot;",268:"Ccaron;",269:"ccaron;",270:"Dcaron;",271:"dcaron;",272:"Dstrok;",273:"dstrok;",274:"Emacr;",275:"emacr;",278:"Edot;",279:"edot;",280:"Eogon;",281:"eogon;",282:"Ecaron;",283:"ecaron;",284:"Gcirc;",285:"gcirc;",286:"Gbreve;",287:"gbreve;",288:"Gdot;",289:"gdot;",290:"Gcedil;",292:"Hcirc;",293:"hcirc;",294:"Hstrok;",295:"hstrok;",296:"Itilde;",297:"itilde;",298:"Imacr;",299:"imacr;",302:"Iogon;",303:"iogon;",304:"Idot;",305:"inodot;",306:"IJlig;",307:"ijlig;",308:"Jcirc;",309:"jcirc;",310:"Kcedil;",311:"kcedil;",312:"kgreen;",313:"Lacute;",314:"lacute;",315:"Lcedil;",316:"lcedil;",317:"Lcaron;",318:"lcaron;",319:"Lmidot;",320:"lmidot;",321:"Lstrok;",322:"lstrok;",323:"Nacute;",324:"nacute;",325:"Ncedil;",326:"ncedil;",327:"Ncaron;",328:"ncaron;",329:"napos;",330:"ENG;",331:"eng;",332:"Omacr;",333:"omacr;",336:"Odblac;",337:"odblac;",338:"OElig;",339:"oelig;",340:"Racute;",341:"racute;",342:"Rcedil;",343:"rcedil;",344:"Rcaron;",345:"rcaron;",346:"Sacute;",347:"sacute;",348:"Scirc;",349:"scirc;",350:"Scedil;",351:"scedil;",352:"Scaron;",353:"scaron;",354:"Tcedil;",355:"tcedil;",356:"Tcaron;",357:"tcaron;",358:"Tstrok;",359:"tstrok;",360:"Utilde;",361:"utilde;",362:"Umacr;",363:"umacr;",364:"Ubreve;",365:"ubreve;",366:"Uring;",367:"uring;",368:"Udblac;",369:"udblac;",370:"Uogon;",371:"uogon;",372:"Wcirc;",373:"wcirc;",374:"Ycirc;",375:"ycirc;",376:"Yuml;",377:"Zacute;",378:"zacute;",379:"Zdot;",380:"zdot;",381:"Zcaron;",382:"zcaron;",402:"fnof;",437:"imped;",501:"gacute;",567:"jmath;",710:"circ;",711:"Hacek;",728:"breve;",729:"dot;",730:"ring;",731:"ogon;",732:"tilde;",733:"DiacriticalDoubleAcute;",785:"DownBreve;",913:"Alpha;",914:"Beta;",915:"Gamma;",916:"Delta;",917:"Epsilon;",918:"Zeta;",919:"Eta;",920:"Theta;",921:"Iota;",922:"Kappa;",923:"Lambda;",924:"Mu;",925:"Nu;",926:"Xi;",927:"Omicron;",928:"Pi;",929:"Rho;",931:"Sigma;",932:"Tau;",933:"Upsilon;",934:"Phi;",935:"Chi;",936:"Psi;",937:"Omega;",945:"alpha;",946:"beta;",947:"gamma;",948:"delta;",949:"epsilon;",950:"zeta;",951:"eta;",952:"theta;",953:"iota;",954:"kappa;",955:"lambda;",956:"mu;",957:"nu;",958:"xi;",959:"omicron;",960:"pi;",961:"rho;",962:"varsigma;",963:"sigma;",964:"tau;",965:"upsilon;",966:"phi;",967:"chi;",968:"psi;",969:"omega;",977:"vartheta;",978:"upsih;",981:"varphi;",982:"varpi;",988:"Gammad;",989:"gammad;",1008:"varkappa;",1009:"varrho;",1013:"varepsilon;",1014:"bepsi;",1025:"IOcy;",1026:"DJcy;",1027:"GJcy;",1028:"Jukcy;",1029:"DScy;",1030:"Iukcy;",1031:"YIcy;",1032:"Jsercy;",1033:"LJcy;",1034:"NJcy;",1035:"TSHcy;",1036:"KJcy;",1038:"Ubrcy;",1039:"DZcy;",1040:"Acy;",1041:"Bcy;",1042:"Vcy;",1043:"Gcy;",1044:"Dcy;",1045:"IEcy;",1046:"ZHcy;",1047:"Zcy;",1048:"Icy;",1049:"Jcy;",1050:"Kcy;",1051:"Lcy;",1052:"Mcy;",1053:"Ncy;",1054:"Ocy;",1055:"Pcy;",1056:"Rcy;",1057:"Scy;",1058:"Tcy;",1059:"Ucy;",1060:"Fcy;",1061:"KHcy;",1062:"TScy;",1063:"CHcy;",1064:"SHcy;",1065:"SHCHcy;",1066:"HARDcy;",1067:"Ycy;",1068:"SOFTcy;",1069:"Ecy;",1070:"YUcy;",1071:"YAcy;",1072:"acy;",1073:"bcy;",1074:"vcy;",1075:"gcy;",1076:"dcy;",1077:"iecy;",1078:"zhcy;",1079:"zcy;",1080:"icy;",1081:"jcy;",1082:"kcy;",1083:"lcy;",1084:"mcy;",1085:"ncy;",1086:"ocy;",1087:"pcy;",1088:"rcy;",1089:"scy;",1090:"tcy;",1091:"ucy;",1092:"fcy;",1093:"khcy;",1094:"tscy;",1095:"chcy;",1096:"shcy;",1097:"shchcy;",1098:"hardcy;",1099:"ycy;",1100:"softcy;",1101:"ecy;",1102:"yucy;",1103:"yacy;",1105:"iocy;",1106:"djcy;",1107:"gjcy;",1108:"jukcy;",1109:"dscy;",1110:"iukcy;",1111:"yicy;",1112:"jsercy;",1113:"ljcy;",1114:"njcy;",1115:"tshcy;",1116:"kjcy;",1118:"ubrcy;",1119:"dzcy;",8194:"ensp;",8195:"emsp;",8196:"emsp13;",8197:"emsp14;",8199:"numsp;",8200:"puncsp;",8201:"ThinSpace;",8202:"VeryThinSpace;",8203:"ZeroWidthSpace;",8204:"zwnj;",8205:"zwj;",8206:"lrm;",8207:"rlm;",8208:"hyphen;",8211:"ndash;",8212:"mdash;",8213:"horbar;",8214:"Vert;",8216:"OpenCurlyQuote;",8217:"rsquor;",8218:"sbquo;",8220:"OpenCurlyDoubleQuote;",8221:"rdquor;",8222:"ldquor;",8224:"dagger;",8225:"ddagger;",8226:"bullet;",8229:"nldr;",8230:"mldr;",8240:"permil;",8241:"pertenk;",8242:"prime;",8243:"Prime;",8244:"tprime;",8245:"bprime;",8249:"lsaquo;",8250:"rsaquo;",8254:"OverBar;",8257:"caret;",8259:"hybull;",8260:"frasl;",8271:"bsemi;",8279:"qprime;",8287:"MediumSpace;",8288:"NoBreak;",8289:"ApplyFunction;",8290:"it;",8291:"InvisibleComma;",8364:"euro;",8411:"TripleDot;",8412:"DotDot;",8450:"Copf;",8453:"incare;",8458:"gscr;",8459:"Hscr;",8460:"Poincareplane;",8461:"quaternions;",8462:"planckh;",8463:"plankv;",8464:"Iscr;",8465:"imagpart;",8466:"Lscr;",8467:"ell;",8469:"Nopf;",8470:"numero;",8471:"copysr;",8472:"wp;",8473:"primes;",8474:"rationals;",8475:"Rscr;",8476:"Rfr;",8477:"Ropf;",8478:"rx;",8482:"trade;",8484:"Zopf;",8487:"mho;",8488:"Zfr;",8489:"iiota;",8492:"Bscr;",8493:"Cfr;",8495:"escr;",8496:"expectation;",8497:"Fscr;",8499:"phmmat;",8500:"oscr;",8501:"aleph;",8502:"beth;",8503:"gimel;",8504:"daleth;",8517:"DD;",8518:"DifferentialD;",8519:"exponentiale;",8520:"ImaginaryI;",8531:"frac13;",8532:"frac23;",8533:"frac15;",8534:"frac25;",8535:"frac35;",8536:"frac45;",8537:"frac16;",8538:"frac56;",8539:"frac18;",8540:"frac38;",8541:"frac58;",8542:"frac78;",8592:"slarr;",8593:"uparrow;",8594:"srarr;",8595:"ShortDownArrow;",8596:"leftrightarrow;",8597:"varr;",8598:"UpperLeftArrow;",8599:"UpperRightArrow;",8600:"searrow;",8601:"swarrow;",8602:"nleftarrow;",8603:"nrightarrow;",8605:"rightsquigarrow;",8606:"twoheadleftarrow;",8607:"Uarr;",8608:"twoheadrightarrow;",8609:"Darr;",8610:"leftarrowtail;",8611:"rightarrowtail;",8612:"mapstoleft;",8613:"UpTeeArrow;",8614:"RightTeeArrow;",8615:"mapstodown;",8617:"larrhk;",8618:"rarrhk;",8619:"looparrowleft;",8620:"rarrlp;",8621:"leftrightsquigarrow;",8622:"nleftrightarrow;",8624:"lsh;",8625:"rsh;",8626:"ldsh;",8627:"rdsh;",8629:"crarr;",8630:"curvearrowleft;",8631:"curvearrowright;",8634:"olarr;",8635:"orarr;",8636:"lharu;",8637:"lhard;",8638:"upharpoonright;",8639:"upharpoonleft;",8640:"RightVector;",8641:"rightharpoondown;",8642:"RightDownVector;",8643:"LeftDownVector;",8644:"rlarr;",8645:"UpArrowDownArrow;",8646:"lrarr;",8647:"llarr;",8648:"uuarr;",8649:"rrarr;",8650:"downdownarrows;",8651:"ReverseEquilibrium;",8652:"rlhar;",8653:"nLeftarrow;",8654:"nLeftrightarrow;",8655:"nRightarrow;",8656:"Leftarrow;",8657:"Uparrow;",8658:"Rightarrow;",8659:"Downarrow;",8660:"Leftrightarrow;",8661:"vArr;",8662:"nwArr;",8663:"neArr;",8664:"seArr;",8665:"swArr;",8666:"Lleftarrow;",8667:"Rrightarrow;",8669:"zigrarr;",8676:"LeftArrowBar;",8677:"RightArrowBar;",8693:"duarr;",8701:"loarr;",8702:"roarr;",8703:"hoarr;",8704:"forall;",8705:"complement;",8706:"PartialD;",8707:"Exists;",8708:"NotExists;",8709:"varnothing;",8711:"nabla;",8712:"isinv;",8713:"notinva;",8715:"SuchThat;",8716:"NotReverseElement;",8719:"Product;",8720:"Coproduct;",8721:"sum;",8722:"minus;",8723:"mp;",8724:"plusdo;",8726:"ssetmn;",8727:"lowast;",8728:"SmallCircle;",8730:"Sqrt;",8733:"vprop;",8734:"infin;",8735:"angrt;",8736:"angle;",8737:"measuredangle;",8738:"angsph;",8739:"VerticalBar;",8740:"nsmid;",8741:"spar;",8742:"nspar;",8743:"wedge;",8744:"vee;",8745:"cap;",8746:"cup;",8747:"Integral;",8748:"Int;",8749:"tint;",8750:"oint;",8751:"DoubleContourIntegral;",8752:"Cconint;",8753:"cwint;",8754:"cwconint;",8755:"CounterClockwiseContourIntegral;",8756:"therefore;",8757:"because;",8758:"ratio;",8759:"Proportion;",8760:"minusd;",8762:"mDDot;",8763:"homtht;",8764:"Tilde;",8765:"bsim;",8766:"mstpos;",8767:"acd;",8768:"wreath;",8769:"nsim;",8770:"esim;",8771:"TildeEqual;",8772:"nsimeq;",8773:"TildeFullEqual;",8774:"simne;",8775:"NotTildeFullEqual;",8776:"TildeTilde;",8777:"NotTildeTilde;",8778:"approxeq;",8779:"apid;",8780:"bcong;",8781:"CupCap;",8782:"HumpDownHump;",8783:"HumpEqual;",8784:"esdot;",8785:"eDot;",8786:"fallingdotseq;",8787:"risingdotseq;",8788:"coloneq;",8789:"eqcolon;",8790:"eqcirc;",8791:"cire;",8793:"wedgeq;",8794:"veeeq;",8796:"trie;",8799:"questeq;",8800:"NotEqual;",8801:"equiv;",8802:"NotCongruent;",8804:"leq;",8805:"GreaterEqual;",8806:"LessFullEqual;",8807:"GreaterFullEqual;",8808:"lneqq;",8809:"gneqq;",8810:"NestedLessLess;",8811:"NestedGreaterGreater;",8812:"twixt;",8813:"NotCupCap;",8814:"NotLess;",8815:"NotGreater;",8816:"NotLessEqual;",8817:"NotGreaterEqual;",8818:"lsim;",8819:"gtrsim;",8820:"NotLessTilde;",8821:"NotGreaterTilde;",8822:"lg;",8823:"gtrless;",8824:"ntlg;",8825:"ntgl;",8826:"Precedes;",8827:"Succeeds;",8828:"PrecedesSlantEqual;",8829:"SucceedsSlantEqual;",8830:"prsim;",8831:"succsim;",8832:"nprec;",8833:"nsucc;",8834:"subset;",8835:"supset;",8836:"nsub;",8837:"nsup;",8838:"SubsetEqual;",8839:"supseteq;",8840:"nsubseteq;",8841:"nsupseteq;",8842:"subsetneq;",8843:"supsetneq;",8845:"cupdot;",8846:"uplus;",8847:"SquareSubset;",8848:"SquareSuperset;",8849:"SquareSubsetEqual;",8850:"SquareSupersetEqual;",8851:"SquareIntersection;",8852:"SquareUnion;",8853:"oplus;",8854:"ominus;",8855:"otimes;",8856:"osol;",8857:"odot;",8858:"ocir;",8859:"oast;",8861:"odash;",8862:"plusb;",8863:"minusb;",8864:"timesb;",8865:"sdotb;",8866:"vdash;",8867:"LeftTee;",8868:"top;",8869:"UpTee;",8871:"models;",8872:"vDash;",8873:"Vdash;",8874:"Vvdash;",8875:"VDash;",8876:"nvdash;",8877:"nvDash;",8878:"nVdash;",8879:"nVDash;",8880:"prurel;",8882:"vltri;",8883:"vrtri;",8884:"trianglelefteq;",8885:"trianglerighteq;",8886:"origof;",8887:"imof;",8888:"mumap;",8889:"hercon;",8890:"intercal;",8891:"veebar;",8893:"barvee;",8894:"angrtvb;",8895:"lrtri;",8896:"xwedge;",8897:"xvee;",8898:"xcap;",8899:"xcup;",8900:"diamond;",8901:"sdot;",8902:"Star;",8903:"divonx;",8904:"bowtie;",8905:"ltimes;",8906:"rtimes;",8907:"lthree;",8908:"rthree;",8909:"bsime;",8910:"cuvee;",8911:"cuwed;",8912:"Subset;",8913:"Supset;",8914:"Cap;",8915:"Cup;",8916:"pitchfork;",8917:"epar;",8918:"ltdot;",8919:"gtrdot;",8920:"Ll;",8921:"ggg;",8922:"LessEqualGreater;",8923:"gtreqless;",8926:"curlyeqprec;",8927:"curlyeqsucc;",8928:"nprcue;",8929:"nsccue;",8930:"nsqsube;",8931:"nsqsupe;",8934:"lnsim;",8935:"gnsim;",8936:"prnsim;",8937:"succnsim;",8938:"ntriangleleft;",8939:"ntriangleright;",8940:"ntrianglelefteq;",8941:"ntrianglerighteq;",8942:"vellip;",8943:"ctdot;",8944:"utdot;",8945:"dtdot;",8946:"disin;",8947:"isinsv;",8948:"isins;",8949:"isindot;",8950:"notinvc;",8951:"notinvb;",8953:"isinE;",8954:"nisd;",8955:"xnis;",8956:"nis;",8957:"notnivc;",8958:"notnivb;",8965:"barwedge;",8966:"doublebarwedge;",8968:"LeftCeiling;",8969:"RightCeiling;",8970:"lfloor;",8971:"RightFloor;",8972:"drcrop;",8973:"dlcrop;",8974:"urcrop;",8975:"ulcrop;",8976:"bnot;",8978:"profline;",8979:"profsurf;",8981:"telrec;",8982:"target;",8988:"ulcorner;",8989:"urcorner;",8990:"llcorner;",8991:"lrcorner;",8994:"sfrown;",8995:"ssmile;",9005:"cylcty;",9006:"profalar;",9014:"topbot;",9021:"ovbar;",9023:"solbar;",9084:"angzarr;",9136:"lmoustache;",9137:"rmoustache;",9140:"tbrk;",9141:"UnderBracket;",9142:"bbrktbrk;",9180:"OverParenthesis;",9181:"UnderParenthesis;",9182:"OverBrace;",9183:"UnderBrace;",9186:"trpezium;",9191:"elinters;",9251:"blank;",9416:"oS;",9472:"HorizontalLine;",9474:"boxv;",9484:"boxdr;",9488:"boxdl;",9492:"boxur;",9496:"boxul;",9500:"boxvr;",9508:"boxvl;",9516:"boxhd;",9524:"boxhu;",9532:"boxvh;",9552:"boxH;",9553:"boxV;",9554:"boxdR;",9555:"boxDr;",9556:"boxDR;",9557:"boxdL;",9558:"boxDl;",9559:"boxDL;",9560:"boxuR;",9561:"boxUr;",9562:"boxUR;",9563:"boxuL;",9564:"boxUl;",9565:"boxUL;",9566:"boxvR;",9567:"boxVr;",9568:"boxVR;",9569:"boxvL;",9570:"boxVl;",9571:"boxVL;",9572:"boxHd;",9573:"boxhD;",9574:"boxHD;",9575:"boxHu;",9576:"boxhU;",9577:"boxHU;",9578:"boxvH;",9579:"boxVh;",9580:"boxVH;",9600:"uhblk;",9604:"lhblk;",9608:"block;",9617:"blk14;",9618:"blk12;",9619:"blk34;",9633:"square;",9642:"squf;",9643:"EmptyVerySmallSquare;",9645:"rect;",9646:"marker;",9649:"fltns;",9651:"xutri;",9652:"utrif;",9653:"utri;",9656:"rtrif;",9657:"triangleright;",9661:"xdtri;",9662:"dtrif;",9663:"triangledown;",9666:"ltrif;",9667:"triangleleft;",9674:"lozenge;",9675:"cir;",9708:"tridot;",9711:"xcirc;",9720:"ultri;",9721:"urtri;",9722:"lltri;",9723:"EmptySmallSquare;",9724:"FilledSmallSquare;",9733:"starf;",9734:"star;",9742:"phone;",9792:"female;",9794:"male;",9824:"spadesuit;",9827:"clubsuit;",9829:"heartsuit;",9830:"diams;",9834:"sung;",9837:"flat;",9838:"natural;",9839:"sharp;",10003:"checkmark;",10007:"cross;",10016:"maltese;",10038:"sext;",10072:"VerticalSeparator;",10098:"lbbrk;",10099:"rbbrk;",10184:"bsolhsub;",10185:"suphsol;",10214:"lobrk;",10215:"robrk;",10216:"LeftAngleBracket;",10217:"RightAngleBracket;",10218:"Lang;",10219:"Rang;",10220:"loang;",10221:"roang;",10229:"xlarr;",10230:"xrarr;",10231:"xharr;",10232:"xlArr;",10233:"xrArr;",10234:"xhArr;",10236:"xmap;",10239:"dzigrarr;",10498:"nvlArr;",10499:"nvrArr;",10500:"nvHarr;",10501:"Map;",10508:"lbarr;",10509:"rbarr;",10510:"lBarr;",10511:"rBarr;",10512:"RBarr;",10513:"DDotrahd;",10514:"UpArrowBar;",10515:"DownArrowBar;",10518:"Rarrtl;",10521:"latail;",10522:"ratail;",10523:"lAtail;",10524:"rAtail;",10525:"larrfs;",10526:"rarrfs;",10527:"larrbfs;",10528:"rarrbfs;",10531:"nwarhk;",10532:"nearhk;",10533:"searhk;",10534:"swarhk;",10535:"nwnear;",10536:"toea;",10537:"tosa;",10538:"swnwar;",10547:"rarrc;",10549:"cudarrr;",10550:"ldca;",10551:"rdca;",10552:"cudarrl;",10553:"larrpl;",10556:"curarrm;",10557:"cularrp;",10565:"rarrpl;",10568:"harrcir;",10569:"Uarrocir;",10570:"lurdshar;",10571:"ldrushar;",10574:"LeftRightVector;",10575:"RightUpDownVector;",10576:"DownLeftRightVector;",10577:"LeftUpDownVector;",10578:"LeftVectorBar;",10579:"RightVectorBar;",10580:"RightUpVectorBar;",10581:"RightDownVectorBar;",10582:"DownLeftVectorBar;",10583:"DownRightVectorBar;",10584:"LeftUpVectorBar;",10585:"LeftDownVectorBar;",10586:"LeftTeeVector;",10587:"RightTeeVector;",10588:"RightUpTeeVector;",10589:"RightDownTeeVector;",10590:"DownLeftTeeVector;",10591:"DownRightTeeVector;",10592:"LeftUpTeeVector;",10593:"LeftDownTeeVector;",10594:"lHar;",10595:"uHar;",10596:"rHar;",10597:"dHar;",10598:"luruhar;",10599:"ldrdhar;",10600:"ruluhar;",10601:"rdldhar;",10602:"lharul;",10603:"llhard;",10604:"rharul;",10605:"lrhard;",10606:"UpEquilibrium;",10607:"ReverseUpEquilibrium;",10608:"RoundImplies;",10609:"erarr;",10610:"simrarr;",10611:"larrsim;",10612:"rarrsim;",10613:"rarrap;",10614:"ltlarr;",10616:"gtrarr;",10617:"subrarr;",10619:"suplarr;",10620:"lfisht;",10621:"rfisht;",10622:"ufisht;",10623:"dfisht;",10629:"lopar;",10630:"ropar;",10635:"lbrke;",10636:"rbrke;",10637:"lbrkslu;",10638:"rbrksld;",10639:"lbrksld;",10640:"rbrkslu;",10641:"langd;",10642:"rangd;",10643:"lparlt;",10644:"rpargt;",10645:"gtlPar;",10646:"ltrPar;",10650:"vzigzag;",10652:"vangrt;",10653:"angrtvbd;",10660:"ange;",10661:"range;",10662:"dwangle;",10663:"uwangle;",10664:"angmsdaa;",10665:"angmsdab;",10666:"angmsdac;",10667:"angmsdad;",10668:"angmsdae;",10669:"angmsdaf;",10670:"angmsdag;",10671:"angmsdah;",10672:"bemptyv;",10673:"demptyv;",10674:"cemptyv;",10675:"raemptyv;",10676:"laemptyv;",10677:"ohbar;",10678:"omid;",10679:"opar;",10681:"operp;",10683:"olcross;",10684:"odsold;",10686:"olcir;",10687:"ofcir;",10688:"olt;",10689:"ogt;",10690:"cirscir;",10691:"cirE;",10692:"solb;",10693:"bsolb;",10697:"boxbox;",10701:"trisb;",10702:"rtriltri;",10703:"LeftTriangleBar;",10704:"RightTriangleBar;",10716:"iinfin;",10717:"infintie;",10718:"nvinfin;",10723:"eparsl;",10724:"smeparsl;",10725:"eqvparsl;",10731:"lozf;",10740:"RuleDelayed;",10742:"dsol;",10752:"xodot;",10753:"xoplus;",10754:"xotime;",10756:"xuplus;",10758:"xsqcup;",10764:"qint;",10765:"fpartint;",10768:"cirfnint;",10769:"awint;",10770:"rppolint;",10771:"scpolint;",10772:"npolint;",10773:"pointint;",10774:"quatint;",10775:"intlarhk;",10786:"pluscir;",10787:"plusacir;",10788:"simplus;",10789:"plusdu;",10790:"plussim;",10791:"plustwo;",10793:"mcomma;",10794:"minusdu;",10797:"loplus;",10798:"roplus;",10799:"Cross;",10800:"timesd;",10801:"timesbar;",10803:"smashp;",10804:"lotimes;",10805:"rotimes;",10806:"otimesas;",10807:"Otimes;",10808:"odiv;",10809:"triplus;",10810:"triminus;",10811:"tritime;",10812:"iprod;",10815:"amalg;",10816:"capdot;",10818:"ncup;",10819:"ncap;",10820:"capand;",10821:"cupor;",10822:"cupcap;",10823:"capcup;",10824:"cupbrcap;",10825:"capbrcup;",10826:"cupcup;",10827:"capcap;",10828:"ccups;",10829:"ccaps;",10832:"ccupssm;",10835:"And;",10836:"Or;",10837:"andand;",10838:"oror;",10839:"orslope;",10840:"andslope;",10842:"andv;",10843:"orv;",10844:"andd;",10845:"ord;",10847:"wedbar;",10854:"sdote;",10858:"simdot;",10861:"congdot;",10862:"easter;",10863:"apacir;",10864:"apE;",10865:"eplus;",10866:"pluse;",10867:"Esim;",10868:"Colone;",10869:"Equal;",10871:"eDDot;",10872:"equivDD;",10873:"ltcir;",10874:"gtcir;",10875:"ltquest;",10876:"gtquest;",10877:"LessSlantEqual;",10878:"GreaterSlantEqual;",10879:"lesdot;",10880:"gesdot;",10881:"lesdoto;",10882:"gesdoto;",10883:"lesdotor;",10884:"gesdotol;",10885:"lessapprox;",10886:"gtrapprox;",10887:"lneq;",10888:"gneq;",10889:"lnapprox;",10890:"gnapprox;",10891:"lesseqqgtr;",10892:"gtreqqless;",10893:"lsime;",10894:"gsime;",10895:"lsimg;",10896:"gsiml;",10897:"lgE;",10898:"glE;",10899:"lesges;",10900:"gesles;",10901:"eqslantless;",10902:"eqslantgtr;",10903:"elsdot;",10904:"egsdot;",10905:"el;",10906:"eg;",10909:"siml;",10910:"simg;",10911:"simlE;",10912:"simgE;",10913:"LessLess;",10914:"GreaterGreater;",10916:"glj;",10917:"gla;",10918:"ltcc;",10919:"gtcc;",10920:"lescc;",10921:"gescc;",10922:"smt;",10923:"lat;",10924:"smte;",10925:"late;",10926:"bumpE;",10927:"preceq;",10928:"succeq;",10931:"prE;",10932:"scE;",10933:"prnE;",10934:"succneqq;",10935:"precapprox;",10936:"succapprox;",10937:"prnap;",10938:"succnapprox;",10939:"Pr;",10940:"Sc;",10941:"subdot;",10942:"supdot;",10943:"subplus;",10944:"supplus;",10945:"submult;",10946:"supmult;",10947:"subedot;",10948:"supedot;",10949:"subseteqq;",10950:"supseteqq;",10951:"subsim;",10952:"supsim;",10955:"subsetneqq;",10956:"supsetneqq;",10959:"csub;",10960:"csup;",10961:"csube;",10962:"csupe;",10963:"subsup;",10964:"supsub;",10965:"subsub;",10966:"supsup;",10967:"suphsub;",10968:"supdsub;",10969:"forkv;",10970:"topfork;",10971:"mlcp;",10980:"DoubleLeftTee;",10982:"Vdashl;",10983:"Barv;",10984:"vBar;",10985:"vBarv;",10987:"Vbar;",10988:"Not;",10989:"bNot;",10990:"rnmid;",10991:"cirmid;",10992:"midcir;",10993:"topcir;",10994:"nhpar;",10995:"parsim;",11005:"parsl;",64256:"fflig;",64257:"filig;",64258:"fllig;",64259:"ffilig;",64260:"ffllig;"},fe=R(Object.freeze({__proto__:null,decode:oe,encode:ie,toUnicode:se,toASCII:ce,version:le,ucs2:ue,default:pe}));var de={"Aacute;":"Á",Aacute:"Á","aacute;":"á",aacute:"á","Abreve;":"Ă","abreve;":"ă","ac;":"∾","acd;":"∿","acE;":"∾̳","Acirc;":"Â",Acirc:"Â","acirc;":"â",acirc:"â","acute;":"´",acute:"´","Acy;":"А","acy;":"а","AElig;":"Æ",AElig:"Æ","aelig;":"æ",aelig:"æ","af;":"⁡","Afr;":"𝔄","afr;":"𝔞","Agrave;":"À",Agrave:"À","agrave;":"à",agrave:"à","alefsym;":"ℵ","aleph;":"ℵ","Alpha;":"Α","alpha;":"α","Amacr;":"Ā","amacr;":"ā","amalg;":"⨿","AMP;":"&",AMP:"&","amp;":"&",amp:"&","And;":"⩓","and;":"∧","andand;":"⩕","andd;":"⩜","andslope;":"⩘","andv;":"⩚","ang;":"∠","ange;":"⦤","angle;":"∠","angmsd;":"∡","angmsdaa;":"⦨","angmsdab;":"⦩","angmsdac;":"⦪","angmsdad;":"⦫","angmsdae;":"⦬","angmsdaf;":"⦭","angmsdag;":"⦮","angmsdah;":"⦯","angrt;":"∟","angrtvb;":"⊾","angrtvbd;":"⦝","angsph;":"∢","angst;":"Å","angzarr;":"⍼","Aogon;":"Ą","aogon;":"ą","Aopf;":"𝔸","aopf;":"𝕒","ap;":"≈","apacir;":"⩯","apE;":"⩰","ape;":"≊","apid;":"≋","apos;":"'","ApplyFunction;":"⁡","approx;":"≈","approxeq;":"≊","Aring;":"Å",Aring:"Å","aring;":"å",aring:"å","Ascr;":"𝒜","ascr;":"𝒶","Assign;":"≔","ast;":"*","asymp;":"≈","asympeq;":"≍","Atilde;":"Ã",Atilde:"Ã","atilde;":"ã",atilde:"ã","Auml;":"Ä",Auml:"Ä","auml;":"ä",auml:"ä","awconint;":"∳","awint;":"⨑","backcong;":"≌","backepsilon;":"϶","backprime;":"‵","backsim;":"∽","backsimeq;":"⋍","Backslash;":"∖","Barv;":"⫧","barvee;":"⊽","Barwed;":"⌆","barwed;":"⌅","barwedge;":"⌅","bbrk;":"⎵","bbrktbrk;":"⎶","bcong;":"≌","Bcy;":"Б","bcy;":"б","bdquo;":"„","becaus;":"∵","Because;":"∵","because;":"∵","bemptyv;":"⦰","bepsi;":"϶","bernou;":"ℬ","Bernoullis;":"ℬ","Beta;":"Β","beta;":"β","beth;":"ℶ","between;":"≬","Bfr;":"𝔅","bfr;":"𝔟","bigcap;":"⋂","bigcirc;":"◯","bigcup;":"⋃","bigodot;":"⨀","bigoplus;":"⨁","bigotimes;":"⨂","bigsqcup;":"⨆","bigstar;":"★","bigtriangledown;":"▽","bigtriangleup;":"△","biguplus;":"⨄","bigvee;":"⋁","bigwedge;":"⋀","bkarow;":"⤍","blacklozenge;":"⧫","blacksquare;":"▪","blacktriangle;":"▴","blacktriangledown;":"▾","blacktriangleleft;":"◂","blacktriangleright;":"▸","blank;":"␣","blk12;":"▒","blk14;":"░","blk34;":"▓","block;":"█","bne;":"=⃥","bnequiv;":"≡⃥","bNot;":"⫭","bnot;":"⌐","Bopf;":"𝔹","bopf;":"𝕓","bot;":"⊥","bottom;":"⊥","bowtie;":"⋈","boxbox;":"⧉","boxDL;":"╗","boxDl;":"╖","boxdL;":"╕","boxdl;":"┐","boxDR;":"╔","boxDr;":"╓","boxdR;":"╒","boxdr;":"┌","boxH;":"═","boxh;":"─","boxHD;":"╦","boxHd;":"╤","boxhD;":"╥","boxhd;":"┬","boxHU;":"╩","boxHu;":"╧","boxhU;":"╨","boxhu;":"┴","boxminus;":"⊟","boxplus;":"⊞","boxtimes;":"⊠","boxUL;":"╝","boxUl;":"╜","boxuL;":"╛","boxul;":"┘","boxUR;":"╚","boxUr;":"╙","boxuR;":"╘","boxur;":"└","boxV;":"║","boxv;":"│","boxVH;":"╬","boxVh;":"╫","boxvH;":"╪","boxvh;":"┼","boxVL;":"╣","boxVl;":"╢","boxvL;":"╡","boxvl;":"┤","boxVR;":"╠","boxVr;":"╟","boxvR;":"╞","boxvr;":"├","bprime;":"‵","Breve;":"˘","breve;":"˘","brvbar;":"¦",brvbar:"¦","Bscr;":"ℬ","bscr;":"𝒷","bsemi;":"⁏","bsim;":"∽","bsime;":"⋍","bsol;":"\\","bsolb;":"⧅","bsolhsub;":"⟈","bull;":"•","bullet;":"•","bump;":"≎","bumpE;":"⪮","bumpe;":"≏","Bumpeq;":"≎","bumpeq;":"≏","Cacute;":"Ć","cacute;":"ć","Cap;":"⋒","cap;":"∩","capand;":"⩄","capbrcup;":"⩉","capcap;":"⩋","capcup;":"⩇","capdot;":"⩀","CapitalDifferentialD;":"ⅅ","caps;":"∩︀","caret;":"⁁","caron;":"ˇ","Cayleys;":"ℭ","ccaps;":"⩍","Ccaron;":"Č","ccaron;":"č","Ccedil;":"Ç",Ccedil:"Ç","ccedil;":"ç",ccedil:"ç","Ccirc;":"Ĉ","ccirc;":"ĉ","Cconint;":"∰","ccups;":"⩌","ccupssm;":"⩐","Cdot;":"Ċ","cdot;":"ċ","cedil;":"¸",cedil:"¸","Cedilla;":"¸","cemptyv;":"⦲","cent;":"¢",cent:"¢","CenterDot;":"·","centerdot;":"·","Cfr;":"ℭ","cfr;":"𝔠","CHcy;":"Ч","chcy;":"ч","check;":"✓","checkmark;":"✓","Chi;":"Χ","chi;":"χ","cir;":"○","circ;":"ˆ","circeq;":"≗","circlearrowleft;":"↺","circlearrowright;":"↻","circledast;":"⊛","circledcirc;":"⊚","circleddash;":"⊝","CircleDot;":"⊙","circledR;":"®","circledS;":"Ⓢ","CircleMinus;":"⊖","CirclePlus;":"⊕","CircleTimes;":"⊗","cirE;":"⧃","cire;":"≗","cirfnint;":"⨐","cirmid;":"⫯","cirscir;":"⧂","ClockwiseContourIntegral;":"∲","CloseCurlyDoubleQuote;":"”","CloseCurlyQuote;":"’","clubs;":"♣","clubsuit;":"♣","Colon;":"∷","colon;":":","Colone;":"⩴","colone;":"≔","coloneq;":"≔","comma;":",","commat;":"@","comp;":"∁","compfn;":"∘","complement;":"∁","complexes;":"ℂ","cong;":"≅","congdot;":"⩭","Congruent;":"≡","Conint;":"∯","conint;":"∮","ContourIntegral;":"∮","Copf;":"ℂ","copf;":"𝕔","coprod;":"∐","Coproduct;":"∐","COPY;":"©",COPY:"©","copy;":"©",copy:"©","copysr;":"℗","CounterClockwiseContourIntegral;":"∳","crarr;":"↵","Cross;":"⨯","cross;":"✗","Cscr;":"𝒞","cscr;":"𝒸","csub;":"⫏","csube;":"⫑","csup;":"⫐","csupe;":"⫒","ctdot;":"⋯","cudarrl;":"⤸","cudarrr;":"⤵","cuepr;":"⋞","cuesc;":"⋟","cularr;":"↶","cularrp;":"⤽","Cup;":"⋓","cup;":"∪","cupbrcap;":"⩈","CupCap;":"≍","cupcap;":"⩆","cupcup;":"⩊","cupdot;":"⊍","cupor;":"⩅","cups;":"∪︀","curarr;":"↷","curarrm;":"⤼","curlyeqprec;":"⋞","curlyeqsucc;":"⋟","curlyvee;":"⋎","curlywedge;":"⋏","curren;":"¤",curren:"¤","curvearrowleft;":"↶","curvearrowright;":"↷","cuvee;":"⋎","cuwed;":"⋏","cwconint;":"∲","cwint;":"∱","cylcty;":"⌭","Dagger;":"‡","dagger;":"†","daleth;":"ℸ","Darr;":"↡","dArr;":"⇓","darr;":"↓","dash;":"‐","Dashv;":"⫤","dashv;":"⊣","dbkarow;":"⤏","dblac;":"˝","Dcaron;":"Ď","dcaron;":"ď","Dcy;":"Д","dcy;":"д","DD;":"ⅅ","dd;":"ⅆ","ddagger;":"‡","ddarr;":"⇊","DDotrahd;":"⤑","ddotseq;":"⩷","deg;":"°",deg:"°","Del;":"∇","Delta;":"Δ","delta;":"δ","demptyv;":"⦱","dfisht;":"⥿","Dfr;":"𝔇","dfr;":"𝔡","dHar;":"⥥","dharl;":"⇃","dharr;":"⇂","DiacriticalAcute;":"´","DiacriticalDot;":"˙","DiacriticalDoubleAcute;":"˝","DiacriticalGrave;":"`","DiacriticalTilde;":"˜","diam;":"⋄","Diamond;":"⋄","diamond;":"⋄","diamondsuit;":"♦","diams;":"♦","die;":"¨","DifferentialD;":"ⅆ","digamma;":"ϝ","disin;":"⋲","div;":"÷","divide;":"÷",divide:"÷","divideontimes;":"⋇","divonx;":"⋇","DJcy;":"Ђ","djcy;":"ђ","dlcorn;":"⌞","dlcrop;":"⌍","dollar;":"$","Dopf;":"𝔻","dopf;":"𝕕","Dot;":"¨","dot;":"˙","DotDot;":"⃜","doteq;":"≐","doteqdot;":"≑","DotEqual;":"≐","dotminus;":"∸","dotplus;":"∔","dotsquare;":"⊡","doublebarwedge;":"⌆","DoubleContourIntegral;":"∯","DoubleDot;":"¨","DoubleDownArrow;":"⇓","DoubleLeftArrow;":"⇐","DoubleLeftRightArrow;":"⇔","DoubleLeftTee;":"⫤","DoubleLongLeftArrow;":"⟸","DoubleLongLeftRightArrow;":"⟺","DoubleLongRightArrow;":"⟹","DoubleRightArrow;":"⇒","DoubleRightTee;":"⊨","DoubleUpArrow;":"⇑","DoubleUpDownArrow;":"⇕","DoubleVerticalBar;":"∥","DownArrow;":"↓","Downarrow;":"⇓","downarrow;":"↓","DownArrowBar;":"⤓","DownArrowUpArrow;":"⇵","DownBreve;":"̑","downdownarrows;":"⇊","downharpoonleft;":"⇃","downharpoonright;":"⇂","DownLeftRightVector;":"⥐","DownLeftTeeVector;":"⥞","DownLeftVector;":"↽","DownLeftVectorBar;":"⥖","DownRightTeeVector;":"⥟","DownRightVector;":"⇁","DownRightVectorBar;":"⥗","DownTee;":"⊤","DownTeeArrow;":"↧","drbkarow;":"⤐","drcorn;":"⌟","drcrop;":"⌌","Dscr;":"𝒟","dscr;":"𝒹","DScy;":"Ѕ","dscy;":"ѕ","dsol;":"⧶","Dstrok;":"Đ","dstrok;":"đ","dtdot;":"⋱","dtri;":"▿","dtrif;":"▾","duarr;":"⇵","duhar;":"⥯","dwangle;":"⦦","DZcy;":"Џ","dzcy;":"џ","dzigrarr;":"⟿","Eacute;":"É",Eacute:"É","eacute;":"é",eacute:"é","easter;":"⩮","Ecaron;":"Ě","ecaron;":"ě","ecir;":"≖","Ecirc;":"Ê",Ecirc:"Ê","ecirc;":"ê",ecirc:"ê","ecolon;":"≕","Ecy;":"Э","ecy;":"э","eDDot;":"⩷","Edot;":"Ė","eDot;":"≑","edot;":"ė","ee;":"ⅇ","efDot;":"≒","Efr;":"𝔈","efr;":"𝔢","eg;":"⪚","Egrave;":"È",Egrave:"È","egrave;":"è",egrave:"è","egs;":"⪖","egsdot;":"⪘","el;":"⪙","Element;":"∈","elinters;":"⏧","ell;":"ℓ","els;":"⪕","elsdot;":"⪗","Emacr;":"Ē","emacr;":"ē","empty;":"∅","emptyset;":"∅","EmptySmallSquare;":"◻","emptyv;":"∅","EmptyVerySmallSquare;":"▫","emsp;":" ","emsp13;":" ","emsp14;":" ","ENG;":"Ŋ","eng;":"ŋ","ensp;":" ","Eogon;":"Ę","eogon;":"ę","Eopf;":"𝔼","eopf;":"𝕖","epar;":"⋕","eparsl;":"⧣","eplus;":"⩱","epsi;":"ε","Epsilon;":"Ε","epsilon;":"ε","epsiv;":"ϵ","eqcirc;":"≖","eqcolon;":"≕","eqsim;":"≂","eqslantgtr;":"⪖","eqslantless;":"⪕","Equal;":"⩵","equals;":"=","EqualTilde;":"≂","equest;":"≟","Equilibrium;":"⇌","equiv;":"≡","equivDD;":"⩸","eqvparsl;":"⧥","erarr;":"⥱","erDot;":"≓","Escr;":"ℰ","escr;":"ℯ","esdot;":"≐","Esim;":"⩳","esim;":"≂","Eta;":"Η","eta;":"η","ETH;":"Ð",ETH:"Ð","eth;":"ð",eth:"ð","Euml;":"Ë",Euml:"Ë","euml;":"ë",euml:"ë","euro;":"€","excl;":"!","exist;":"∃","Exists;":"∃","expectation;":"ℰ","ExponentialE;":"ⅇ","exponentiale;":"ⅇ","fallingdotseq;":"≒","Fcy;":"Ф","fcy;":"ф","female;":"♀","ffilig;":"ﬃ","fflig;":"ﬀ","ffllig;":"ﬄ","Ffr;":"𝔉","ffr;":"𝔣","filig;":"ﬁ","FilledSmallSquare;":"◼","FilledVerySmallSquare;":"▪","fjlig;":"fj","flat;":"♭","fllig;":"ﬂ","fltns;":"▱","fnof;":"ƒ","Fopf;":"𝔽","fopf;":"𝕗","ForAll;":"∀","forall;":"∀","fork;":"⋔","forkv;":"⫙","Fouriertrf;":"ℱ","fpartint;":"⨍","frac12;":"½",frac12:"½","frac13;":"⅓","frac14;":"¼",frac14:"¼","frac15;":"⅕","frac16;":"⅙","frac18;":"⅛","frac23;":"⅔","frac25;":"⅖","frac34;":"¾",frac34:"¾","frac35;":"⅗","frac38;":"⅜","frac45;":"⅘","frac56;":"⅚","frac58;":"⅝","frac78;":"⅞","frasl;":"⁄","frown;":"⌢","Fscr;":"ℱ","fscr;":"𝒻","gacute;":"ǵ","Gamma;":"Γ","gamma;":"γ","Gammad;":"Ϝ","gammad;":"ϝ","gap;":"⪆","Gbreve;":"Ğ","gbreve;":"ğ","Gcedil;":"Ģ","Gcirc;":"Ĝ","gcirc;":"ĝ","Gcy;":"Г","gcy;":"г","Gdot;":"Ġ","gdot;":"ġ","gE;":"≧","ge;":"≥","gEl;":"⪌","gel;":"⋛","geq;":"≥","geqq;":"≧","geqslant;":"⩾","ges;":"⩾","gescc;":"⪩","gesdot;":"⪀","gesdoto;":"⪂","gesdotol;":"⪄","gesl;":"⋛︀","gesles;":"⪔","Gfr;":"𝔊","gfr;":"𝔤","Gg;":"⋙","gg;":"≫","ggg;":"⋙","gimel;":"ℷ","GJcy;":"Ѓ","gjcy;":"ѓ","gl;":"≷","gla;":"⪥","glE;":"⪒","glj;":"⪤","gnap;":"⪊","gnapprox;":"⪊","gnE;":"≩","gne;":"⪈","gneq;":"⪈","gneqq;":"≩","gnsim;":"⋧","Gopf;":"𝔾","gopf;":"𝕘","grave;":"`","GreaterEqual;":"≥","GreaterEqualLess;":"⋛","GreaterFullEqual;":"≧","GreaterGreater;":"⪢","GreaterLess;":"≷","GreaterSlantEqual;":"⩾","GreaterTilde;":"≳","Gscr;":"𝒢","gscr;":"ℊ","gsim;":"≳","gsime;":"⪎","gsiml;":"⪐","GT;":">",GT:">","Gt;":"≫","gt;":">",gt:">","gtcc;":"⪧","gtcir;":"⩺","gtdot;":"⋗","gtlPar;":"⦕","gtquest;":"⩼","gtrapprox;":"⪆","gtrarr;":"⥸","gtrdot;":"⋗","gtreqless;":"⋛","gtreqqless;":"⪌","gtrless;":"≷","gtrsim;":"≳","gvertneqq;":"≩︀","gvnE;":"≩︀","Hacek;":"ˇ","hairsp;":" ","half;":"½","hamilt;":"ℋ","HARDcy;":"Ъ","hardcy;":"ъ","hArr;":"⇔","harr;":"↔","harrcir;":"⥈","harrw;":"↭","Hat;":"^","hbar;":"ℏ","Hcirc;":"Ĥ","hcirc;":"ĥ","hearts;":"♥","heartsuit;":"♥","hellip;":"…","hercon;":"⊹","Hfr;":"ℌ","hfr;":"𝔥","HilbertSpace;":"ℋ","hksearow;":"⤥","hkswarow;":"⤦","hoarr;":"⇿","homtht;":"∻","hookleftarrow;":"↩","hookrightarrow;":"↪","Hopf;":"ℍ","hopf;":"𝕙","horbar;":"―","HorizontalLine;":"─","Hscr;":"ℋ","hscr;":"𝒽","hslash;":"ℏ","Hstrok;":"Ħ","hstrok;":"ħ","HumpDownHump;":"≎","HumpEqual;":"≏","hybull;":"⁃","hyphen;":"‐","Iacute;":"Í",Iacute:"Í","iacute;":"í",iacute:"í","ic;":"⁣","Icirc;":"Î",Icirc:"Î","icirc;":"î",icirc:"î","Icy;":"И","icy;":"и","Idot;":"İ","IEcy;":"Е","iecy;":"е","iexcl;":"¡",iexcl:"¡","iff;":"⇔","Ifr;":"ℑ","ifr;":"𝔦","Igrave;":"Ì",Igrave:"Ì","igrave;":"ì",igrave:"ì","ii;":"ⅈ","iiiint;":"⨌","iiint;":"∭","iinfin;":"⧜","iiota;":"℩","IJlig;":"Ĳ","ijlig;":"ĳ","Im;":"ℑ","Imacr;":"Ī","imacr;":"ī","image;":"ℑ","ImaginaryI;":"ⅈ","imagline;":"ℐ","imagpart;":"ℑ","imath;":"ı","imof;":"⊷","imped;":"Ƶ","Implies;":"⇒","in;":"∈","incare;":"℅","infin;":"∞","infintie;":"⧝","inodot;":"ı","Int;":"∬","int;":"∫","intcal;":"⊺","integers;":"ℤ","Integral;":"∫","intercal;":"⊺","Intersection;":"⋂","intlarhk;":"⨗","intprod;":"⨼","InvisibleComma;":"⁣","InvisibleTimes;":"⁢","IOcy;":"Ё","iocy;":"ё","Iogon;":"Į","iogon;":"į","Iopf;":"𝕀","iopf;":"𝕚","Iota;":"Ι","iota;":"ι","iprod;":"⨼","iquest;":"¿",iquest:"¿","Iscr;":"ℐ","iscr;":"𝒾","isin;":"∈","isindot;":"⋵","isinE;":"⋹","isins;":"⋴","isinsv;":"⋳","isinv;":"∈","it;":"⁢","Itilde;":"Ĩ","itilde;":"ĩ","Iukcy;":"І","iukcy;":"і","Iuml;":"Ï",Iuml:"Ï","iuml;":"ï",iuml:"ï","Jcirc;":"Ĵ","jcirc;":"ĵ","Jcy;":"Й","jcy;":"й","Jfr;":"𝔍","jfr;":"𝔧","jmath;":"ȷ","Jopf;":"𝕁","jopf;":"𝕛","Jscr;":"𝒥","jscr;":"𝒿","Jsercy;":"Ј","jsercy;":"ј","Jukcy;":"Є","jukcy;":"є","Kappa;":"Κ","kappa;":"κ","kappav;":"ϰ","Kcedil;":"Ķ","kcedil;":"ķ","Kcy;":"К","kcy;":"к","Kfr;":"𝔎","kfr;":"𝔨","kgreen;":"ĸ","KHcy;":"Х","khcy;":"х","KJcy;":"Ќ","kjcy;":"ќ","Kopf;":"𝕂","kopf;":"𝕜","Kscr;":"𝒦","kscr;":"𝓀","lAarr;":"⇚","Lacute;":"Ĺ","lacute;":"ĺ","laemptyv;":"⦴","lagran;":"ℒ","Lambda;":"Λ","lambda;":"λ","Lang;":"⟪","lang;":"⟨","langd;":"⦑","langle;":"⟨","lap;":"⪅","Laplacetrf;":"ℒ","laquo;":"«",laquo:"«","Larr;":"↞","lArr;":"⇐","larr;":"←","larrb;":"⇤","larrbfs;":"⤟","larrfs;":"⤝","larrhk;":"↩","larrlp;":"↫","larrpl;":"⤹","larrsim;":"⥳","larrtl;":"↢","lat;":"⪫","lAtail;":"⤛","latail;":"⤙","late;":"⪭","lates;":"⪭︀","lBarr;":"⤎","lbarr;":"⤌","lbbrk;":"❲","lbrace;":"{","lbrack;":"[","lbrke;":"⦋","lbrksld;":"⦏","lbrkslu;":"⦍","Lcaron;":"Ľ","lcaron;":"ľ","Lcedil;":"Ļ","lcedil;":"ļ","lceil;":"⌈","lcub;":"{","Lcy;":"Л","lcy;":"л","ldca;":"⤶","ldquo;":"“","ldquor;":"„","ldrdhar;":"⥧","ldrushar;":"⥋","ldsh;":"↲","lE;":"≦","le;":"≤","LeftAngleBracket;":"⟨","LeftArrow;":"←","Leftarrow;":"⇐","leftarrow;":"←","LeftArrowBar;":"⇤","LeftArrowRightArrow;":"⇆","leftarrowtail;":"↢","LeftCeiling;":"⌈","LeftDoubleBracket;":"⟦","LeftDownTeeVector;":"⥡","LeftDownVector;":"⇃","LeftDownVectorBar;":"⥙","LeftFloor;":"⌊","leftharpoondown;":"↽","leftharpoonup;":"↼","leftleftarrows;":"⇇","LeftRightArrow;":"↔","Leftrightarrow;":"⇔","leftrightarrow;":"↔","leftrightarrows;":"⇆","leftrightharpoons;":"⇋","leftrightsquigarrow;":"↭","LeftRightVector;":"⥎","LeftTee;":"⊣","LeftTeeArrow;":"↤","LeftTeeVector;":"⥚","leftthreetimes;":"⋋","LeftTriangle;":"⊲","LeftTriangleBar;":"⧏","LeftTriangleEqual;":"⊴","LeftUpDownVector;":"⥑","LeftUpTeeVector;":"⥠","LeftUpVector;":"↿","LeftUpVectorBar;":"⥘","LeftVector;":"↼","LeftVectorBar;":"⥒","lEg;":"⪋","leg;":"⋚","leq;":"≤","leqq;":"≦","leqslant;":"⩽","les;":"⩽","lescc;":"⪨","lesdot;":"⩿","lesdoto;":"⪁","lesdotor;":"⪃","lesg;":"⋚︀","lesges;":"⪓","lessapprox;":"⪅","lessdot;":"⋖","lesseqgtr;":"⋚","lesseqqgtr;":"⪋","LessEqualGreater;":"⋚","LessFullEqual;":"≦","LessGreater;":"≶","lessgtr;":"≶","LessLess;":"⪡","lesssim;":"≲","LessSlantEqual;":"⩽","LessTilde;":"≲","lfisht;":"⥼","lfloor;":"⌊","Lfr;":"𝔏","lfr;":"𝔩","lg;":"≶","lgE;":"⪑","lHar;":"⥢","lhard;":"↽","lharu;":"↼","lharul;":"⥪","lhblk;":"▄","LJcy;":"Љ","ljcy;":"љ","Ll;":"⋘","ll;":"≪","llarr;":"⇇","llcorner;":"⌞","Lleftarrow;":"⇚","llhard;":"⥫","lltri;":"◺","Lmidot;":"Ŀ","lmidot;":"ŀ","lmoust;":"⎰","lmoustache;":"⎰","lnap;":"⪉","lnapprox;":"⪉","lnE;":"≨","lne;":"⪇","lneq;":"⪇","lneqq;":"≨","lnsim;":"⋦","loang;":"⟬","loarr;":"⇽","lobrk;":"⟦","LongLeftArrow;":"⟵","Longleftarrow;":"⟸","longleftarrow;":"⟵","LongLeftRightArrow;":"⟷","Longleftrightarrow;":"⟺","longleftrightarrow;":"⟷","longmapsto;":"⟼","LongRightArrow;":"⟶","Longrightarrow;":"⟹","longrightarrow;":"⟶","looparrowleft;":"↫","looparrowright;":"↬","lopar;":"⦅","Lopf;":"𝕃","lopf;":"𝕝","loplus;":"⨭","lotimes;":"⨴","lowast;":"∗","lowbar;":"_","LowerLeftArrow;":"↙","LowerRightArrow;":"↘","loz;":"◊","lozenge;":"◊","lozf;":"⧫","lpar;":"(","lparlt;":"⦓","lrarr;":"⇆","lrcorner;":"⌟","lrhar;":"⇋","lrhard;":"⥭","lrm;":"‎","lrtri;":"⊿","lsaquo;":"‹","Lscr;":"ℒ","lscr;":"𝓁","Lsh;":"↰","lsh;":"↰","lsim;":"≲","lsime;":"⪍","lsimg;":"⪏","lsqb;":"[","lsquo;":"‘","lsquor;":"‚","Lstrok;":"Ł","lstrok;":"ł","LT;":"<",LT:"<","Lt;":"≪","lt;":"<",lt:"<","ltcc;":"⪦","ltcir;":"⩹","ltdot;":"⋖","lthree;":"⋋","ltimes;":"⋉","ltlarr;":"⥶","ltquest;":"⩻","ltri;":"◃","ltrie;":"⊴","ltrif;":"◂","ltrPar;":"⦖","lurdshar;":"⥊","luruhar;":"⥦","lvertneqq;":"≨︀","lvnE;":"≨︀","macr;":"¯",macr:"¯","male;":"♂","malt;":"✠","maltese;":"✠","Map;":"⤅","map;":"↦","mapsto;":"↦","mapstodown;":"↧","mapstoleft;":"↤","mapstoup;":"↥","marker;":"▮","mcomma;":"⨩","Mcy;":"М","mcy;":"м","mdash;":"—","mDDot;":"∺","measuredangle;":"∡","MediumSpace;":" ","Mellintrf;":"ℳ","Mfr;":"𝔐","mfr;":"𝔪","mho;":"℧","micro;":"µ",micro:"µ","mid;":"∣","midast;":"*","midcir;":"⫰","middot;":"·",middot:"·","minus;":"−","minusb;":"⊟","minusd;":"∸","minusdu;":"⨪","MinusPlus;":"∓","mlcp;":"⫛","mldr;":"…","mnplus;":"∓","models;":"⊧","Mopf;":"𝕄","mopf;":"𝕞","mp;":"∓","Mscr;":"ℳ","mscr;":"𝓂","mstpos;":"∾","Mu;":"Μ","mu;":"μ","multimap;":"⊸","mumap;":"⊸","nabla;":"∇","Nacute;":"Ń","nacute;":"ń","nang;":"∠⃒","nap;":"≉","napE;":"⩰̸","napid;":"≋̸","napos;":"ŉ","napprox;":"≉","natur;":"♮","natural;":"♮","naturals;":"ℕ","nbsp;":" ",nbsp:" ","nbump;":"≎̸","nbumpe;":"≏̸","ncap;":"⩃","Ncaron;":"Ň","ncaron;":"ň","Ncedil;":"Ņ","ncedil;":"ņ","ncong;":"≇","ncongdot;":"⩭̸","ncup;":"⩂","Ncy;":"Н","ncy;":"н","ndash;":"–","ne;":"≠","nearhk;":"⤤","neArr;":"⇗","nearr;":"↗","nearrow;":"↗","nedot;":"≐̸","NegativeMediumSpace;":"​","NegativeThickSpace;":"​","NegativeThinSpace;":"​","NegativeVeryThinSpace;":"​","nequiv;":"≢","nesear;":"⤨","nesim;":"≂̸","NestedGreaterGreater;":"≫","NestedLessLess;":"≪","NewLine;":"\n","nexist;":"∄","nexists;":"∄","Nfr;":"𝔑","nfr;":"𝔫","ngE;":"≧̸","nge;":"≱","ngeq;":"≱","ngeqq;":"≧̸","ngeqslant;":"⩾̸","nges;":"⩾̸","nGg;":"⋙̸","ngsim;":"≵","nGt;":"≫⃒","ngt;":"≯","ngtr;":"≯","nGtv;":"≫̸","nhArr;":"⇎","nharr;":"↮","nhpar;":"⫲","ni;":"∋","nis;":"⋼","nisd;":"⋺","niv;":"∋","NJcy;":"Њ","njcy;":"њ","nlArr;":"⇍","nlarr;":"↚","nldr;":"‥","nlE;":"≦̸","nle;":"≰","nLeftarrow;":"⇍","nleftarrow;":"↚","nLeftrightarrow;":"⇎","nleftrightarrow;":"↮","nleq;":"≰","nleqq;":"≦̸","nleqslant;":"⩽̸","nles;":"⩽̸","nless;":"≮","nLl;":"⋘̸","nlsim;":"≴","nLt;":"≪⃒","nlt;":"≮","nltri;":"⋪","nltrie;":"⋬","nLtv;":"≪̸","nmid;":"∤","NoBreak;":"⁠","NonBreakingSpace;":" ","Nopf;":"ℕ","nopf;":"𝕟","Not;":"⫬","not;":"¬",not:"¬","NotCongruent;":"≢","NotCupCap;":"≭","NotDoubleVerticalBar;":"∦","NotElement;":"∉","NotEqual;":"≠","NotEqualTilde;":"≂̸","NotExists;":"∄","NotGreater;":"≯","NotGreaterEqual;":"≱","NotGreaterFullEqual;":"≧̸","NotGreaterGreater;":"≫̸","NotGreaterLess;":"≹","NotGreaterSlantEqual;":"⩾̸","NotGreaterTilde;":"≵","NotHumpDownHump;":"≎̸","NotHumpEqual;":"≏̸","notin;":"∉","notindot;":"⋵̸","notinE;":"⋹̸","notinva;":"∉","notinvb;":"⋷","notinvc;":"⋶","NotLeftTriangle;":"⋪","NotLeftTriangleBar;":"⧏̸","NotLeftTriangleEqual;":"⋬","NotLess;":"≮","NotLessEqual;":"≰","NotLessGreater;":"≸","NotLessLess;":"≪̸","NotLessSlantEqual;":"⩽̸","NotLessTilde;":"≴","NotNestedGreaterGreater;":"⪢̸","NotNestedLessLess;":"⪡̸","notni;":"∌","notniva;":"∌","notnivb;":"⋾","notnivc;":"⋽","NotPrecedes;":"⊀","NotPrecedesEqual;":"⪯̸","NotPrecedesSlantEqual;":"⋠","NotReverseElement;":"∌","NotRightTriangle;":"⋫","NotRightTriangleBar;":"⧐̸","NotRightTriangleEqual;":"⋭","NotSquareSubset;":"⊏̸","NotSquareSubsetEqual;":"⋢","NotSquareSuperset;":"⊐̸","NotSquareSupersetEqual;":"⋣","NotSubset;":"⊂⃒","NotSubsetEqual;":"⊈","NotSucceeds;":"⊁","NotSucceedsEqual;":"⪰̸","NotSucceedsSlantEqual;":"⋡","NotSucceedsTilde;":"≿̸","NotSuperset;":"⊃⃒","NotSupersetEqual;":"⊉","NotTilde;":"≁","NotTildeEqual;":"≄","NotTildeFullEqual;":"≇","NotTildeTilde;":"≉","NotVerticalBar;":"∤","npar;":"∦","nparallel;":"∦","nparsl;":"⫽⃥","npart;":"∂̸","npolint;":"⨔","npr;":"⊀","nprcue;":"⋠","npre;":"⪯̸","nprec;":"⊀","npreceq;":"⪯̸","nrArr;":"⇏","nrarr;":"↛","nrarrc;":"⤳̸","nrarrw;":"↝̸","nRightarrow;":"⇏","nrightarrow;":"↛","nrtri;":"⋫","nrtrie;":"⋭","nsc;":"⊁","nsccue;":"⋡","nsce;":"⪰̸","Nscr;":"𝒩","nscr;":"𝓃","nshortmid;":"∤","nshortparallel;":"∦","nsim;":"≁","nsime;":"≄","nsimeq;":"≄","nsmid;":"∤","nspar;":"∦","nsqsube;":"⋢","nsqsupe;":"⋣","nsub;":"⊄","nsubE;":"⫅̸","nsube;":"⊈","nsubset;":"⊂⃒","nsubseteq;":"⊈","nsubseteqq;":"⫅̸","nsucc;":"⊁","nsucceq;":"⪰̸","nsup;":"⊅","nsupE;":"⫆̸","nsupe;":"⊉","nsupset;":"⊃⃒","nsupseteq;":"⊉","nsupseteqq;":"⫆̸","ntgl;":"≹","Ntilde;":"Ñ",Ntilde:"Ñ","ntilde;":"ñ",ntilde:"ñ","ntlg;":"≸","ntriangleleft;":"⋪","ntrianglelefteq;":"⋬","ntriangleright;":"⋫","ntrianglerighteq;":"⋭","Nu;":"Ν","nu;":"ν","num;":"#","numero;":"№","numsp;":" ","nvap;":"≍⃒","nVDash;":"⊯","nVdash;":"⊮","nvDash;":"⊭","nvdash;":"⊬","nvge;":"≥⃒","nvgt;":">⃒","nvHarr;":"⤄","nvinfin;":"⧞","nvlArr;":"⤂","nvle;":"≤⃒","nvlt;":"<⃒","nvltrie;":"⊴⃒","nvrArr;":"⤃","nvrtrie;":"⊵⃒","nvsim;":"∼⃒","nwarhk;":"⤣","nwArr;":"⇖","nwarr;":"↖","nwarrow;":"↖","nwnear;":"⤧","Oacute;":"Ó",Oacute:"Ó","oacute;":"ó",oacute:"ó","oast;":"⊛","ocir;":"⊚","Ocirc;":"Ô",Ocirc:"Ô","ocirc;":"ô",ocirc:"ô","Ocy;":"О","ocy;":"о","odash;":"⊝","Odblac;":"Ő","odblac;":"ő","odiv;":"⨸","odot;":"⊙","odsold;":"⦼","OElig;":"Œ","oelig;":"œ","ofcir;":"⦿","Ofr;":"𝔒","ofr;":"𝔬","ogon;":"˛","Ograve;":"Ò",Ograve:"Ò","ograve;":"ò",ograve:"ò","ogt;":"⧁","ohbar;":"⦵","ohm;":"Ω","oint;":"∮","olarr;":"↺","olcir;":"⦾","olcross;":"⦻","oline;":"‾","olt;":"⧀","Omacr;":"Ō","omacr;":"ō","Omega;":"Ω","omega;":"ω","Omicron;":"Ο","omicron;":"ο","omid;":"⦶","ominus;":"⊖","Oopf;":"𝕆","oopf;":"𝕠","opar;":"⦷","OpenCurlyDoubleQuote;":"“","OpenCurlyQuote;":"‘","operp;":"⦹","oplus;":"⊕","Or;":"⩔","or;":"∨","orarr;":"↻","ord;":"⩝","order;":"ℴ","orderof;":"ℴ","ordf;":"ª",ordf:"ª","ordm;":"º",ordm:"º","origof;":"⊶","oror;":"⩖","orslope;":"⩗","orv;":"⩛","oS;":"Ⓢ","Oscr;":"𝒪","oscr;":"ℴ","Oslash;":"Ø",Oslash:"Ø","oslash;":"ø",oslash:"ø","osol;":"⊘","Otilde;":"Õ",Otilde:"Õ","otilde;":"õ",otilde:"õ","Otimes;":"⨷","otimes;":"⊗","otimesas;":"⨶","Ouml;":"Ö",Ouml:"Ö","ouml;":"ö",ouml:"ö","ovbar;":"⌽","OverBar;":"‾","OverBrace;":"⏞","OverBracket;":"⎴","OverParenthesis;":"⏜","par;":"∥","para;":"¶",para:"¶","parallel;":"∥","parsim;":"⫳","parsl;":"⫽","part;":"∂","PartialD;":"∂","Pcy;":"П","pcy;":"п","percnt;":"%","period;":".","permil;":"‰","perp;":"⊥","pertenk;":"‱","Pfr;":"𝔓","pfr;":"𝔭","Phi;":"Φ","phi;":"φ","phiv;":"ϕ","phmmat;":"ℳ","phone;":"☎","Pi;":"Π","pi;":"π","pitchfork;":"⋔","piv;":"ϖ","planck;":"ℏ","planckh;":"ℎ","plankv;":"ℏ","plus;":"+","plusacir;":"⨣","plusb;":"⊞","pluscir;":"⨢","plusdo;":"∔","plusdu;":"⨥","pluse;":"⩲","PlusMinus;":"±","plusmn;":"±",plusmn:"±","plussim;":"⨦","plustwo;":"⨧","pm;":"±","Poincareplane;":"ℌ","pointint;":"⨕","Popf;":"ℙ","popf;":"𝕡","pound;":"£",pound:"£","Pr;":"⪻","pr;":"≺","prap;":"⪷","prcue;":"≼","prE;":"⪳","pre;":"⪯","prec;":"≺","precapprox;":"⪷","preccurlyeq;":"≼","Precedes;":"≺","PrecedesEqual;":"⪯","PrecedesSlantEqual;":"≼","PrecedesTilde;":"≾","preceq;":"⪯","precnapprox;":"⪹","precneqq;":"⪵","precnsim;":"⋨","precsim;":"≾","Prime;":"″","prime;":"′","primes;":"ℙ","prnap;":"⪹","prnE;":"⪵","prnsim;":"⋨","prod;":"∏","Product;":"∏","profalar;":"⌮","profline;":"⌒","profsurf;":"⌓","prop;":"∝","Proportion;":"∷","Proportional;":"∝","propto;":"∝","prsim;":"≾","prurel;":"⊰","Pscr;":"𝒫","pscr;":"𝓅","Psi;":"Ψ","psi;":"ψ","puncsp;":" ","Qfr;":"𝔔","qfr;":"𝔮","qint;":"⨌","Qopf;":"ℚ","qopf;":"𝕢","qprime;":"⁗","Qscr;":"𝒬","qscr;":"𝓆","quaternions;":"ℍ","quatint;":"⨖","quest;":"?","questeq;":"≟","QUOT;":'"',QUOT:'"',"quot;":'"',quot:'"',"rAarr;":"⇛","race;":"∽̱","Racute;":"Ŕ","racute;":"ŕ","radic;":"√","raemptyv;":"⦳","Rang;":"⟫","rang;":"⟩","rangd;":"⦒","range;":"⦥","rangle;":"⟩","raquo;":"»",raquo:"»","Rarr;":"↠","rArr;":"⇒","rarr;":"→","rarrap;":"⥵","rarrb;":"⇥","rarrbfs;":"⤠","rarrc;":"⤳","rarrfs;":"⤞","rarrhk;":"↪","rarrlp;":"↬","rarrpl;":"⥅","rarrsim;":"⥴","Rarrtl;":"⤖","rarrtl;":"↣","rarrw;":"↝","rAtail;":"⤜","ratail;":"⤚","ratio;":"∶","rationals;":"ℚ","RBarr;":"⤐","rBarr;":"⤏","rbarr;":"⤍","rbbrk;":"❳","rbrace;":"}","rbrack;":"]","rbrke;":"⦌","rbrksld;":"⦎","rbrkslu;":"⦐","Rcaron;":"Ř","rcaron;":"ř","Rcedil;":"Ŗ","rcedil;":"ŗ","rceil;":"⌉","rcub;":"}","Rcy;":"Р","rcy;":"р","rdca;":"⤷","rdldhar;":"⥩","rdquo;":"”","rdquor;":"”","rdsh;":"↳","Re;":"ℜ","real;":"ℜ","realine;":"ℛ","realpart;":"ℜ","reals;":"ℝ","rect;":"▭","REG;":"®",REG:"®","reg;":"®",reg:"®","ReverseElement;":"∋","ReverseEquilibrium;":"⇋","ReverseUpEquilibrium;":"⥯","rfisht;":"⥽","rfloor;":"⌋","Rfr;":"ℜ","rfr;":"𝔯","rHar;":"⥤","rhard;":"⇁","rharu;":"⇀","rharul;":"⥬","Rho;":"Ρ","rho;":"ρ","rhov;":"ϱ","RightAngleBracket;":"⟩","RightArrow;":"→","Rightarrow;":"⇒","rightarrow;":"→","RightArrowBar;":"⇥","RightArrowLeftArrow;":"⇄","rightarrowtail;":"↣","RightCeiling;":"⌉","RightDoubleBracket;":"⟧","RightDownTeeVector;":"⥝","RightDownVector;":"⇂","RightDownVectorBar;":"⥕","RightFloor;":"⌋","rightharpoondown;":"⇁","rightharpoonup;":"⇀","rightleftarrows;":"⇄","rightleftharpoons;":"⇌","rightrightarrows;":"⇉","rightsquigarrow;":"↝","RightTee;":"⊢","RightTeeArrow;":"↦","RightTeeVector;":"⥛","rightthreetimes;":"⋌","RightTriangle;":"⊳","RightTriangleBar;":"⧐","RightTriangleEqual;":"⊵","RightUpDownVector;":"⥏","RightUpTeeVector;":"⥜","RightUpVector;":"↾","RightUpVectorBar;":"⥔","RightVector;":"⇀","RightVectorBar;":"⥓","ring;":"˚","risingdotseq;":"≓","rlarr;":"⇄","rlhar;":"⇌","rlm;":"‏","rmoust;":"⎱","rmoustache;":"⎱","rnmid;":"⫮","roang;":"⟭","roarr;":"⇾","robrk;":"⟧","ropar;":"⦆","Ropf;":"ℝ","ropf;":"𝕣","roplus;":"⨮","rotimes;":"⨵","RoundImplies;":"⥰","rpar;":")","rpargt;":"⦔","rppolint;":"⨒","rrarr;":"⇉","Rrightarrow;":"⇛","rsaquo;":"›","Rscr;":"ℛ","rscr;":"𝓇","Rsh;":"↱","rsh;":"↱","rsqb;":"]","rsquo;":"’","rsquor;":"’","rthree;":"⋌","rtimes;":"⋊","rtri;":"▹","rtrie;":"⊵","rtrif;":"▸","rtriltri;":"⧎","RuleDelayed;":"⧴","ruluhar;":"⥨","rx;":"℞","Sacute;":"Ś","sacute;":"ś","sbquo;":"‚","Sc;":"⪼","sc;":"≻","scap;":"⪸","Scaron;":"Š","scaron;":"š","sccue;":"≽","scE;":"⪴","sce;":"⪰","Scedil;":"Ş","scedil;":"ş","Scirc;":"Ŝ","scirc;":"ŝ","scnap;":"⪺","scnE;":"⪶","scnsim;":"⋩","scpolint;":"⨓","scsim;":"≿","Scy;":"С","scy;":"с","sdot;":"⋅","sdotb;":"⊡","sdote;":"⩦","searhk;":"⤥","seArr;":"⇘","searr;":"↘","searrow;":"↘","sect;":"§",sect:"§","semi;":";","seswar;":"⤩","setminus;":"∖","setmn;":"∖","sext;":"✶","Sfr;":"𝔖","sfr;":"𝔰","sfrown;":"⌢","sharp;":"♯","SHCHcy;":"Щ","shchcy;":"щ","SHcy;":"Ш","shcy;":"ш","ShortDownArrow;":"↓","ShortLeftArrow;":"←","shortmid;":"∣","shortparallel;":"∥","ShortRightArrow;":"→","ShortUpArrow;":"↑","shy;":"­",shy:"­","Sigma;":"Σ","sigma;":"σ","sigmaf;":"ς","sigmav;":"ς","sim;":"∼","simdot;":"⩪","sime;":"≃","simeq;":"≃","simg;":"⪞","simgE;":"⪠","siml;":"⪝","simlE;":"⪟","simne;":"≆","simplus;":"⨤","simrarr;":"⥲","slarr;":"←","SmallCircle;":"∘","smallsetminus;":"∖","smashp;":"⨳","smeparsl;":"⧤","smid;":"∣","smile;":"⌣","smt;":"⪪","smte;":"⪬","smtes;":"⪬︀","SOFTcy;":"Ь","softcy;":"ь","sol;":"/","solb;":"⧄","solbar;":"⌿","Sopf;":"𝕊","sopf;":"𝕤","spades;":"♠","spadesuit;":"♠","spar;":"∥","sqcap;":"⊓","sqcaps;":"⊓︀","sqcup;":"⊔","sqcups;":"⊔︀","Sqrt;":"√","sqsub;":"⊏","sqsube;":"⊑","sqsubset;":"⊏","sqsubseteq;":"⊑","sqsup;":"⊐","sqsupe;":"⊒","sqsupset;":"⊐","sqsupseteq;":"⊒","squ;":"□","Square;":"□","square;":"□","SquareIntersection;":"⊓","SquareSubset;":"⊏","SquareSubsetEqual;":"⊑","SquareSuperset;":"⊐","SquareSupersetEqual;":"⊒","SquareUnion;":"⊔","squarf;":"▪","squf;":"▪","srarr;":"→","Sscr;":"𝒮","sscr;":"𝓈","ssetmn;":"∖","ssmile;":"⌣","sstarf;":"⋆","Star;":"⋆","star;":"☆","starf;":"★","straightepsilon;":"ϵ","straightphi;":"ϕ","strns;":"¯","Sub;":"⋐","sub;":"⊂","subdot;":"⪽","subE;":"⫅","sube;":"⊆","subedot;":"⫃","submult;":"⫁","subnE;":"⫋","subne;":"⊊","subplus;":"⪿","subrarr;":"⥹","Subset;":"⋐","subset;":"⊂","subseteq;":"⊆","subseteqq;":"⫅","SubsetEqual;":"⊆","subsetneq;":"⊊","subsetneqq;":"⫋","subsim;":"⫇","subsub;":"⫕","subsup;":"⫓","succ;":"≻","succapprox;":"⪸","succcurlyeq;":"≽","Succeeds;":"≻","SucceedsEqual;":"⪰","SucceedsSlantEqual;":"≽","SucceedsTilde;":"≿","succeq;":"⪰","succnapprox;":"⪺","succneqq;":"⪶","succnsim;":"⋩","succsim;":"≿","SuchThat;":"∋","Sum;":"∑","sum;":"∑","sung;":"♪","Sup;":"⋑","sup;":"⊃","sup1;":"¹",sup1:"¹","sup2;":"²",sup2:"²","sup3;":"³",sup3:"³","supdot;":"⪾","supdsub;":"⫘","supE;":"⫆","supe;":"⊇","supedot;":"⫄","Superset;":"⊃","SupersetEqual;":"⊇","suphsol;":"⟉","suphsub;":"⫗","suplarr;":"⥻","supmult;":"⫂","supnE;":"⫌","supne;":"⊋","supplus;":"⫀","Supset;":"⋑","supset;":"⊃","supseteq;":"⊇","supseteqq;":"⫆","supsetneq;":"⊋","supsetneqq;":"⫌","supsim;":"⫈","supsub;":"⫔","supsup;":"⫖","swarhk;":"⤦","swArr;":"⇙","swarr;":"↙","swarrow;":"↙","swnwar;":"⤪","szlig;":"ß",szlig:"ß","Tab;":"\t","target;":"⌖","Tau;":"Τ","tau;":"τ","tbrk;":"⎴","Tcaron;":"Ť","tcaron;":"ť","Tcedil;":"Ţ","tcedil;":"ţ","Tcy;":"Т","tcy;":"т","tdot;":"⃛","telrec;":"⌕","Tfr;":"𝔗","tfr;":"𝔱","there4;":"∴","Therefore;":"∴","therefore;":"∴","Theta;":"Θ","theta;":"θ","thetasym;":"ϑ","thetav;":"ϑ","thickapprox;":"≈","thicksim;":"∼","ThickSpace;":"  ","thinsp;":" ","ThinSpace;":" ","thkap;":"≈","thksim;":"∼","THORN;":"Þ",THORN:"Þ","thorn;":"þ",thorn:"þ","Tilde;":"∼","tilde;":"˜","TildeEqual;":"≃","TildeFullEqual;":"≅","TildeTilde;":"≈","times;":"×",times:"×","timesb;":"⊠","timesbar;":"⨱","timesd;":"⨰","tint;":"∭","toea;":"⤨","top;":"⊤","topbot;":"⌶","topcir;":"⫱","Topf;":"𝕋","topf;":"𝕥","topfork;":"⫚","tosa;":"⤩","tprime;":"‴","TRADE;":"™","trade;":"™","triangle;":"▵","triangledown;":"▿","triangleleft;":"◃","trianglelefteq;":"⊴","triangleq;":"≜","triangleright;":"▹","trianglerighteq;":"⊵","tridot;":"◬","trie;":"≜","triminus;":"⨺","TripleDot;":"⃛","triplus;":"⨹","trisb;":"⧍","tritime;":"⨻","trpezium;":"⏢","Tscr;":"𝒯","tscr;":"𝓉","TScy;":"Ц","tscy;":"ц","TSHcy;":"Ћ","tshcy;":"ћ","Tstrok;":"Ŧ","tstrok;":"ŧ","twixt;":"≬","twoheadleftarrow;":"↞","twoheadrightarrow;":"↠","Uacute;":"Ú",Uacute:"Ú","uacute;":"ú",uacute:"ú","Uarr;":"↟","uArr;":"⇑","uarr;":"↑","Uarrocir;":"⥉","Ubrcy;":"Ў","ubrcy;":"ў","Ubreve;":"Ŭ","ubreve;":"ŭ","Ucirc;":"Û",Ucirc:"Û","ucirc;":"û",ucirc:"û","Ucy;":"У","ucy;":"у","udarr;":"⇅","Udblac;":"Ű","udblac;":"ű","udhar;":"⥮","ufisht;":"⥾","Ufr;":"𝔘","ufr;":"𝔲","Ugrave;":"Ù",Ugrave:"Ù","ugrave;":"ù",ugrave:"ù","uHar;":"⥣","uharl;":"↿","uharr;":"↾","uhblk;":"▀","ulcorn;":"⌜","ulcorner;":"⌜","ulcrop;":"⌏","ultri;":"◸","Umacr;":"Ū","umacr;":"ū","uml;":"¨",uml:"¨","UnderBar;":"_","UnderBrace;":"⏟","UnderBracket;":"⎵","UnderParenthesis;":"⏝","Union;":"⋃","UnionPlus;":"⊎","Uogon;":"Ų","uogon;":"ų","Uopf;":"𝕌","uopf;":"𝕦","UpArrow;":"↑","Uparrow;":"⇑","uparrow;":"↑","UpArrowBar;":"⤒","UpArrowDownArrow;":"⇅","UpDownArrow;":"↕","Updownarrow;":"⇕","updownarrow;":"↕","UpEquilibrium;":"⥮","upharpoonleft;":"↿","upharpoonright;":"↾","uplus;":"⊎","UpperLeftArrow;":"↖","UpperRightArrow;":"↗","Upsi;":"ϒ","upsi;":"υ","upsih;":"ϒ","Upsilon;":"Υ","upsilon;":"υ","UpTee;":"⊥","UpTeeArrow;":"↥","upuparrows;":"⇈","urcorn;":"⌝","urcorner;":"⌝","urcrop;":"⌎","Uring;":"Ů","uring;":"ů","urtri;":"◹","Uscr;":"𝒰","uscr;":"𝓊","utdot;":"⋰","Utilde;":"Ũ","utilde;":"ũ","utri;":"▵","utrif;":"▴","uuarr;":"⇈","Uuml;":"Ü",Uuml:"Ü","uuml;":"ü",uuml:"ü","uwangle;":"⦧","vangrt;":"⦜","varepsilon;":"ϵ","varkappa;":"ϰ","varnothing;":"∅","varphi;":"ϕ","varpi;":"ϖ","varpropto;":"∝","vArr;":"⇕","varr;":"↕","varrho;":"ϱ","varsigma;":"ς","varsubsetneq;":"⊊︀","varsubsetneqq;":"⫋︀","varsupsetneq;":"⊋︀","varsupsetneqq;":"⫌︀","vartheta;":"ϑ","vartriangleleft;":"⊲","vartriangleright;":"⊳","Vbar;":"⫫","vBar;":"⫨","vBarv;":"⫩","Vcy;":"В","vcy;":"в","VDash;":"⊫","Vdash;":"⊩","vDash;":"⊨","vdash;":"⊢","Vdashl;":"⫦","Vee;":"⋁","vee;":"∨","veebar;":"⊻","veeeq;":"≚","vellip;":"⋮","Verbar;":"‖","verbar;":"|","Vert;":"‖","vert;":"|","VerticalBar;":"∣","VerticalLine;":"|","VerticalSeparator;":"❘","VerticalTilde;":"≀","VeryThinSpace;":" ","Vfr;":"𝔙","vfr;":"𝔳","vltri;":"⊲","vnsub;":"⊂⃒","vnsup;":"⊃⃒","Vopf;":"𝕍","vopf;":"𝕧","vprop;":"∝","vrtri;":"⊳","Vscr;":"𝒱","vscr;":"𝓋","vsubnE;":"⫋︀","vsubne;":"⊊︀","vsupnE;":"⫌︀","vsupne;":"⊋︀","Vvdash;":"⊪","vzigzag;":"⦚","Wcirc;":"Ŵ","wcirc;":"ŵ","wedbar;":"⩟","Wedge;":"⋀","wedge;":"∧","wedgeq;":"≙","weierp;":"℘","Wfr;":"𝔚","wfr;":"𝔴","Wopf;":"𝕎","wopf;":"𝕨","wp;":"℘","wr;":"≀","wreath;":"≀","Wscr;":"𝒲","wscr;":"𝓌","xcap;":"⋂","xcirc;":"◯","xcup;":"⋃","xdtri;":"▽","Xfr;":"𝔛","xfr;":"𝔵","xhArr;":"⟺","xharr;":"⟷","Xi;":"Ξ","xi;":"ξ","xlArr;":"⟸","xlarr;":"⟵","xmap;":"⟼","xnis;":"⋻","xodot;":"⨀","Xopf;":"𝕏","xopf;":"𝕩","xoplus;":"⨁","xotime;":"⨂","xrArr;":"⟹","xrarr;":"⟶","Xscr;":"𝒳","xscr;":"𝓍","xsqcup;":"⨆","xuplus;":"⨄","xutri;":"△","xvee;":"⋁","xwedge;":"⋀","Yacute;":"Ý",Yacute:"Ý","yacute;":"ý",yacute:"ý","YAcy;":"Я","yacy;":"я","Ycirc;":"Ŷ","ycirc;":"ŷ","Ycy;":"Ы","ycy;":"ы","yen;":"¥",yen:"¥","Yfr;":"𝔜","yfr;":"𝔶","YIcy;":"Ї","yicy;":"ї","Yopf;":"𝕐","yopf;":"𝕪","Yscr;":"𝒴","yscr;":"𝓎","YUcy;":"Ю","yucy;":"ю","Yuml;":"Ÿ","yuml;":"ÿ",yuml:"ÿ","Zacute;":"Ź","zacute;":"ź","Zcaron;":"Ž","zcaron;":"ž","Zcy;":"З","zcy;":"з","Zdot;":"Ż","zdot;":"ż","zeetrf;":"ℨ","ZeroWidthSpace;":"​","Zeta;":"Ζ","zeta;":"ζ","Zfr;":"ℨ","zfr;":"𝔷","ZHcy;":"Ж","zhcy;":"ж","zigrarr;":"⇝","Zopf;":"ℤ","zopf;":"𝕫","Zscr;":"𝒵","zscr;":"𝓏","zwj;":"‍","zwnj;":"‌"};var he={encode:function(r,e){if("string"!=typeof r)throw new TypeError("Expected a String");e||(e={});var t=!0;e.named&&(t=!1);void 0!==e.numeric&&(t=e.numeric);for(var n=e.special||{'"':!0,"'":!0,"<":!0,">":!0,"&":!0},a=fe.ucs2.decode(r),o=[],i=0;i<a.length;i++){var s=a[i],c=fe.ucs2.encode([s]),l=ge[s];l&&(s>=127||n[c])&&!t?o.push("&"+(/;$/.test(l)?l:l+";")):s<32||s>=127||n[c]?o.push("&#"+s+";"):o.push(c)}return o.join("")},decode:function(r){if("string"!=typeof r)throw new TypeError("Expected a String");return r.replace(/&(#?[^;\W]+;?)/g,(function(r,e){var t;if(t=/^#(\d+);?$/.exec(e))return fe.ucs2.encode([parseInt(t[1],10)]);if(t=/^#[Xx]([A-Fa-f0-9]+);?/.exec(e))return fe.ucs2.encode([parseInt(t[1],16)]);var n=/;$/.test(e),a=n?e.replace(/;$/,""):e,o=de[a]||n&&de[e];return"number"==typeof o?fe.ucs2.encode([o]):"string"==typeof o?o:"&"+e}))}};!function(r,e,t){r(t={path:e,exports:{},require:function(r,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&t.path)}},t.exports),t.exports}((function(e,t){var n="__lodash_hash_undefined__",a=9007199254740991,o="[object Arguments]",i="[object Boolean]",s="[object Date]",c="[object Function]",l="[object GeneratorFunction]",u="[object Map]",p="[object Number]",g="[object Object]",f="[object Promise]",d="[object RegExp]",h="[object Set]",m="[object String]",b="[object Symbol]",y="[object WeakMap]",v="[object ArrayBuffer]",w="[object DataView]",q="[object Float32Array]",T="[object Float64Array]",A="[object Int8Array]",k="[object Int16Array]",O="[object Int32Array]",S="[object Uint8Array]",E="[object Uint8ClampedArray]",_="[object Uint16Array]",x="[object Uint32Array]",D=/\w*$/,R=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,j={};j[o]=j["[object Array]"]=j[v]=j[w]=j[i]=j[s]=j[q]=j[T]=j[A]=j[k]=j[O]=j[u]=j[p]=j[g]=j[d]=j[h]=j[m]=j[b]=j[S]=j[E]=j[_]=j[x]=!0,j["[object Error]"]=j[c]=j[y]=!1;var C="object"==r(L)&&L&&L.Object===Object&&L,B="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,I=C||B||Function("return this")(),H=t&&!t.nodeType&&t,U=H&&e&&!e.nodeType&&e,V=U&&U.exports===H;function P(r,e){return r.set(e[0],e[1]),r}function W(r,e){return r.add(e),r}function F(r,e,t,n){var a=-1,o=r?r.length:0;for(n&&o&&(t=r[++a]);++a<o;)t=e(t,r[a],a,r);return t}function G(r){var e=!1;if(null!=r&&"function"!=typeof r.toString)try{e=!!(r+"")}catch(r){}return e}function z(r){var e=-1,t=Array(r.size);return r.forEach((function(r,n){t[++e]=[n,r]})),t}function J(r,e){return function(t){return r(e(t))}}function M(r){var e=-1,t=Array(r.size);return r.forEach((function(r){t[++e]=r})),t}var $=Array.prototype,Z=Function.prototype,Y=Object.prototype,K=I["__core-js_shared__"],Q=function(){var r=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}(),X=Z.toString,rr=Y.hasOwnProperty,er=Y.toString,tr=RegExp("^"+X.call(rr).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nr=V?I.Buffer:void 0,ar=I.Symbol,or=I.Uint8Array,ir=J(Object.getPrototypeOf,Object),sr=Object.create,cr=Y.propertyIsEnumerable,lr=$.splice,ur=Object.getOwnPropertySymbols,pr=nr?nr.isBuffer:void 0,gr=J(Object.keys,Object),fr=Hr(I,"DataView"),dr=Hr(I,"Map"),hr=Hr(I,"Promise"),mr=Hr(I,"Set"),br=Hr(I,"WeakMap"),yr=Hr(Object,"create"),vr=Fr(fr),wr=Fr(dr),qr=Fr(hr),Tr=Fr(mr),Ar=Fr(br),kr=ar?ar.prototype:void 0,Or=kr?kr.valueOf:void 0;function Sr(r){var e=-1,t=r?r.length:0;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}function Er(r){var e=-1,t=r?r.length:0;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}function _r(r){var e=-1,t=r?r.length:0;for(this.clear();++e<t;){var n=r[e];this.set(n[0],n[1])}}function xr(r){this.__data__=new Er(r)}function Dr(e,t){var n=zr(e)||function(e){return function(e){return function(e){return!!e&&"object"==r(e)}(e)&&Jr(e)}(e)&&rr.call(e,"callee")&&(!cr.call(e,"callee")||er.call(e)==o)}(e)?function(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}(e.length,String):[],a=n.length,i=!!a;for(var s in e)!t&&!rr.call(e,s)||i&&("length"==s||Pr(s,a))||n.push(s);return n}function Lr(r,e,t){var n=r[e];rr.call(r,e)&&Gr(n,t)&&(void 0!==t||e in r)||(r[e]=t)}function Rr(r,e){for(var t=r.length;t--;)if(Gr(r[t][0],e))return t;return-1}function Nr(r,e,t,n,a,f,y){var L;if(n&&(L=f?n(r,a,f,y):n(r)),void 0!==L)return L;if(!Zr(r))return r;var R=zr(r);if(R){if(L=function(r){var e=r.length,t=r.constructor(e);e&&"string"==typeof r[0]&&rr.call(r,"index")&&(t.index=r.index,t.input=r.input);return t}(r),!e)return function(r,e){var t=-1,n=r.length;e||(e=Array(n));for(;++t<n;)e[t]=r[t];return e}(r,L)}else{var N=Vr(r),C=N==c||N==l;if(Mr(r))return function(r,e){if(e)return r.slice();var t=new r.constructor(r.length);return r.copy(t),t}(r,e);if(N==g||N==o||C&&!f){if(G(r))return f?r:{};if(L=function(r){return"function"!=typeof r.constructor||Wr(r)?{}:(e=ir(r),Zr(e)?sr(e):{});var e}(C?{}:r),!e)return function(r,e){return Br(r,Ur(r),e)}(r,function(r,e){return r&&Br(e,Yr(e),r)}(L,r))}else{if(!j[N])return f?r:{};L=function(r,e,t,n){var a=r.constructor;switch(e){case v:return Cr(r);case i:case s:return new a(+r);case w:return function(r,e){var t=e?Cr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.byteLength)}(r,n);case q:case T:case A:case k:case O:case S:case E:case _:case x:return function(r,e){var t=e?Cr(r.buffer):r.buffer;return new r.constructor(t,r.byteOffset,r.length)}(r,n);case u:return function(r,e,t){return F(e?t(z(r),!0):z(r),P,new r.constructor)}(r,n,t);case p:case m:return new a(r);case d:return function(r){var e=new r.constructor(r.source,D.exec(r));return e.lastIndex=r.lastIndex,e}(r);case h:return function(r,e,t){return F(e?t(M(r),!0):M(r),W,new r.constructor)}(r,n,t);case b:return o=r,Or?Object(Or.call(o)):{}}var o}(r,N,Nr,e)}}y||(y=new xr);var B=y.get(r);if(B)return B;if(y.set(r,L),!R)var I=t?function(r){return function(r,e,t){var n=e(r);return zr(r)?n:function(r,e){for(var t=-1,n=e.length,a=r.length;++t<n;)r[a+t]=e[t];return r}(n,t(r))}(r,Yr,Ur)}(r):Yr(r);return function(r,e){for(var t=-1,n=r?r.length:0;++t<n&&!1!==e(r[t],t,r););}(I||r,(function(a,o){I&&(a=r[o=a]),Lr(L,o,Nr(a,e,t,n,o,r,y))})),L}function jr(r){return!(!Zr(r)||function(r){return!!Q&&Q in r}(r))&&($r(r)||G(r)?tr:R).test(Fr(r))}function Cr(r){var e=new r.constructor(r.byteLength);return new or(e).set(new or(r)),e}function Br(r,e,t,n){t||(t={});for(var a=-1,o=e.length;++a<o;){var i=e[a],s=n?n(t[i],r[i],i,t,r):void 0;Lr(t,i,void 0===s?r[i]:s)}return t}function Ir(e,t){var n,a,o=e.__data__;return("string"==(a=r(n=t))||"number"==a||"symbol"==a||"boolean"==a?"__proto__"!==n:null===n)?o["string"==typeof t?"string":"hash"]:o.map}function Hr(r,e){var t=function(r,e){return null==r?void 0:r[e]}(r,e);return jr(t)?t:void 0}Sr.prototype.clear=function(){this.__data__=yr?yr(null):{}},Sr.prototype.delete=function(r){return this.has(r)&&delete this.__data__[r]},Sr.prototype.get=function(r){var e=this.__data__;if(yr){var t=e[r];return t===n?void 0:t}return rr.call(e,r)?e[r]:void 0},Sr.prototype.has=function(r){var e=this.__data__;return yr?void 0!==e[r]:rr.call(e,r)},Sr.prototype.set=function(r,e){return this.__data__[r]=yr&&void 0===e?n:e,this},Er.prototype.clear=function(){this.__data__=[]},Er.prototype.delete=function(r){var e=this.__data__,t=Rr(e,r);return!(t<0)&&(t==e.length-1?e.pop():lr.call(e,t,1),!0)},Er.prototype.get=function(r){var e=this.__data__,t=Rr(e,r);return t<0?void 0:e[t][1]},Er.prototype.has=function(r){return Rr(this.__data__,r)>-1},Er.prototype.set=function(r,e){var t=this.__data__,n=Rr(t,r);return n<0?t.push([r,e]):t[n][1]=e,this},_r.prototype.clear=function(){this.__data__={hash:new Sr,map:new(dr||Er),string:new Sr}},_r.prototype.delete=function(r){return Ir(this,r).delete(r)},_r.prototype.get=function(r){return Ir(this,r).get(r)},_r.prototype.has=function(r){return Ir(this,r).has(r)},_r.prototype.set=function(r,e){return Ir(this,r).set(r,e),this},xr.prototype.clear=function(){this.__data__=new Er},xr.prototype.delete=function(r){return this.__data__.delete(r)},xr.prototype.get=function(r){return this.__data__.get(r)},xr.prototype.has=function(r){return this.__data__.has(r)},xr.prototype.set=function(r,e){var t=this.__data__;if(t instanceof Er){var n=t.__data__;if(!dr||n.length<199)return n.push([r,e]),this;t=this.__data__=new _r(n)}return t.set(r,e),this};var Ur=ur?J(ur,Object):function(){return[]},Vr=function(r){return er.call(r)};function Pr(r,e){return!!(e=null==e?a:e)&&("number"==typeof r||N.test(r))&&r>-1&&r%1==0&&r<e}function Wr(r){var e=r&&r.constructor;return r===("function"==typeof e&&e.prototype||Y)}function Fr(r){if(null!=r){try{return X.call(r)}catch(r){}try{return r+""}catch(r){}}return""}function Gr(r,e){return r===e||r!=r&&e!=e}(fr&&Vr(new fr(new ArrayBuffer(1)))!=w||dr&&Vr(new dr)!=u||hr&&Vr(hr.resolve())!=f||mr&&Vr(new mr)!=h||br&&Vr(new br)!=y)&&(Vr=function(r){var e=er.call(r),t=e==g?r.constructor:void 0,n=t?Fr(t):void 0;if(n)switch(n){case vr:return w;case wr:return u;case qr:return f;case Tr:return h;case Ar:return y}return e});var zr=Array.isArray;function Jr(r){return null!=r&&function(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=a}(r.length)&&!$r(r)}var Mr=pr||function(){return!1};function $r(r){var e=Zr(r)?er.call(r):"";return e==c||e==l}function Zr(e){var t=r(e);return!!e&&("object"==t||"function"==t)}function Yr(r){return Jr(r)?Dr(r):function(r){if(!Wr(r))return gr(r);var e=[];for(var t in Object(r))rr.call(r,t)&&"constructor"!=t&&e.push(t);return e}(r)}e.exports=function(r){return Nr(r,!0,!0)}}));function me(r,e){return function(r,e,t){if("string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),!r[e+1])return null;if(r[e+1]&&(!t&&r[e+1].trim()||t&&(r[e+1].trim()||"\n\r".includes(r[e+1]))))return e+1;if(r[e+2]&&(!t&&r[e+2].trim()||t&&(r[e+2].trim()||"\n\r".includes(r[e+2]))))return e+2;for(var n=e+1,a=r.length;n<a;n++)if(r[n]&&(!t&&r[n].trim()||t&&(r[n].trim()||"\n\r".includes(r[n]))))return n;return null}(r,e,!1)}function be(e,t){if(!e)return[];if(Array.isArray(e))return e.filter((function(r){return"string"==typeof r&&r.trim()}));if("string"==typeof e)return e.trim()?[e]:[];throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_03] ".concat(t," must be array containing zero or more strings or something falsey. Currently it's equal to: ").concat(e,", that a type of ").concat(r(e),"."))}return function e(t,n){var s,c=Date.now(),l=new Set(["!doctype","abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"]),u=new Set(["a","b","i","p","q","s","u"]),p=new Set([".",",","?",";",")","…",'"',"»"]),g=new Set(["script","style","xml"]),d=[],h=[],m=[];s={attributes:[]};var b,y=null,v=null,q={},T={},A="",k=null;function O(r,e,n){if(Array.isArray(e.stripTogetherWithTheirContents)&&(e.stripTogetherWithTheirContents.includes(s.name)||e.stripTogetherWithTheirContents.includes("*")))if(Array.isArray(d)&&d.some((function(e){return e.name===s.name&&e.lastClosingBracketAt<r})))for(var a=function(a){if(d[a].name===s.name){(e.stripTogetherWithTheirContents.includes(s.name)||e.stripTogetherWithTheirContents.includes("*"))&&(m=m.filter((function(e){var t=o(e,2),n=t[0],i=t[1];return(n<d[a].lastOpeningBracketAt||n>=r+1)&&(i<=d[a].lastOpeningBracketAt||i>r+1)})));var i=r+1;return s.lastClosingBracketAt&&(i=s.lastClosingBracketAt+1),m.push([d[a].lastOpeningBracketAt,i]),p.has(t[r])?e.cb({tag:s,deleteFrom:d[a].lastOpeningBracketAt,deleteTo:r+1,insert:null,rangesArr:n,proposedReturn:[d[a].lastOpeningBracketAt,r,null]}):e.cb({tag:s,deleteFrom:d[a].lastOpeningBracketAt,deleteTo:r,insert:"",rangesArr:n,proposedReturn:[d[a].lastOpeningBracketAt,r,""]}),d.splice(a,1),"break"}},i=d.length;i--;){if("break"===a(i))break}else d.push(s)}function S(r,e,t,n,a,o){var i="";if(t<a&&(i+=r.slice(t,a)),n>o+1){var s=r.slice(o+1,n);s.includes("\n")&&"<"===r[n]?i+=" ":i+=s}if(!p.has(r[e])&&"!"!==r[e]){var c=i.match(/\n/g);return Array.isArray(c)&&c.length?1===c.length?"\n":2===c.length?"\n\n":"\n\n\n":" "}return""}function E(r){if(r.dumpLinkHrefsNearby.enabled&&Object.keys(T).length&&T.tagName===s.name&&s.lastOpeningBracketAt&&(T.openingTagEnds&&s.lastOpeningBracketAt>T.openingTagEnds||!T.openingTagEnds)&&(b=!0),b){var e=r.dumpLinkHrefsNearby.putOnNewLine?"\n\n":"";A="".concat(e).concat(T.hrefValue).concat(e)}}if("string"!=typeof t)throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_01] Input must be string! Currently it's: ".concat(r(t).toLowerCase(),", equal to:\n").concat(JSON.stringify(t,null,4)));if(n&&!D(n))throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_02] Optional Options Object must be a plain object! Currently it's: ".concat(r(n).toLowerCase(),", equal to:\n").concat(JSON.stringify(n,null,4)));function _(){b&&(T={},b=!1)}var x={ignoreTags:[],onlyStripTags:[],stripTogetherWithTheirContents:i(g),skipHtmlDecoding:!1,trimOnlySpaces:!1,dumpLinkHrefsNearby:{enabled:!1,putOnNewLine:!1,wrapHeads:"",wrapTails:""},cb:null},L=a(a({},x),n);if(Object.prototype.hasOwnProperty.call(L,"returnRangesOnly"))throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_03] opts.returnRangesOnly has been removed from the API since v.5 release.");L.ignoreTags=be(L.ignoreTags,"opts.ignoreTags"),L.onlyStripTags=be(L.onlyStripTags,"opts.onlyStripTags");var R=!!L.onlyStripTags.length;if(L.onlyStripTags.length&&L.ignoreTags.length&&(L.onlyStripTags=Fr.apply(void 0,[L.onlyStripTags].concat(i(L.ignoreTags)))),D(L.dumpLinkHrefsNearby)||(L.dumpLinkHrefsNearby=a({},x.dumpLinkHrefsNearby)),L.dumpLinkHrefsNearby=x.dumpLinkHrefsNearby,D(n)&&Object.prototype.hasOwnProperty.call(n,"dumpLinkHrefsNearby")&&null!=n.dumpLinkHrefsNearby)if(D(n.dumpLinkHrefsNearby))L.dumpLinkHrefsNearby=a(a({},x.dumpLinkHrefsNearby),n.dumpLinkHrefsNearby);else if(n.dumpLinkHrefsNearby)throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_04] Optional Options Object's key dumpLinkHrefsNearby was set to ".concat(r(n.dumpLinkHrefsNearby),", equal to ").concat(JSON.stringify(n.dumpLinkHrefsNearby,null,4),". The only allowed value is a plain object. See the API reference."));L.stripTogetherWithTheirContents?"string"==typeof L.stripTogetherWithTheirContents&&L.stripTogetherWithTheirContents.length>0&&(L.stripTogetherWithTheirContents=[L.stripTogetherWithTheirContents]):L.stripTogetherWithTheirContents=[];var N={};if(L.stripTogetherWithTheirContents&&Array.isArray(L.stripTogetherWithTheirContents)&&L.stripTogetherWithTheirContents.length&&!L.stripTogetherWithTheirContents.every((function(r,e){return"string"==typeof r||(N.el=r,N.i=e,!1)})))throw new TypeError("string-strip-html/stripHtml(): [THROW_ID_05] Optional Options Object's key stripTogetherWithTheirContents was set to contain not just string elements! For example, element at index ".concat(N.i," has a value ").concat(N.el," which is not string but ").concat(r(N.el).toLowerCase(),"."));L.cb||(L.cb=function(r){var e=r.rangesArr,t=r.proposedReturn;e.push.apply(e,i(t))});var j=new w({limitToBeAddedWhitespace:!0,limitLinebreaksCount:2});if(!L.skipHtmlDecoding)for(;t!==he.decode(t);)t=he.decode(t);for(var C=function(r,n){if(Object.keys(s).length>1&&s.lastClosingBracketAt&&s.lastClosingBracketAt<r&&" "!==t[r]&&null===k&&(k=r),">"===t[r]&&(!s||Object.keys(s).length<2)&&r>1)for(var a=r;a--;){if(void 0===t[a-1]||">"===t[a])if("break"===function(){var o=void 0===t[a-1]?a:a+1,c=t.slice(o,r+1);if(t!=="<".concat(ir(c.trim(),"/>"),">")&&i(l).some((function(r){return ir(c.trim().split(/\s+/).filter((function(r){return r.trim()})).filter((function(r,e){return 0===e})),"/>").toLowerCase()===r}))&&""===e("<".concat(c.trim(),">"),L).result){h.length&&h[h.length-1][0]===s.lastOpeningBracketAt||h.push([o,r+1]),m.length&&m[m.length-1][0]===s.lastOpeningBracketAt||m.push([o,r+1]);var u=S(t,r,o,r+1,o,r+1),p=r+1;if(t[p]&&!t[p].trim())for(var g=p;g<n;g++)if(t[g].trim()){p=g;break}L.cb({tag:s,deleteFrom:o,deleteTo:p,insert:u,rangesArr:j,proposedReturn:[o,p,u]})}return"break"}())break}var c,p;("/"!==t[r]||s.quotes&&s.quotes.value||!Number.isInteger(s.lastOpeningBracketAt)||Number.isInteger(s.lastClosingBracketAt)||(s.slashPresent=r),'"'===t[r]||"'"===t[r])&&(s.nameStarts&&s.quotes&&s.quotes.value&&s.quotes.value===t[r]?(q.valueEnds=r,q.value=t.slice(q.valueStarts,r),s.attributes.push(q),q={},s.quotes=void 0,L.dumpLinkHrefsNearby.enabled&&s.attributes.some((function(e){if(e.name&&"href"===e.name.toLowerCase())return c="".concat(L.dumpLinkHrefsNearby.wrapHeads||"").concat(e.value).concat(L.dumpLinkHrefsNearby.wrapTails||""),B=r,!0}))&&(T={tagName:s.name,hrefValue:c})):!s.quotes&&s.nameStarts&&(s.quotes={},s.quotes.value=t[r],s.quotes.start=r,q.nameStarts&&q.nameEnds&&q.nameEnds<r&&q.nameStarts<r&&!q.valueStarts&&(q.name=t.slice(q.nameStarts,q.nameEnds))));if(!(void 0===s.nameStarts||void 0!==s.nameEnds||t[r].trim()&&(p=t[r],/[-_A-Za-z0-9]/.test(p)))){if(s.nameEnds=r,s.name=t.slice(s.nameStarts,s.nameEnds+(">"!==t[r]&&"/"!==t[r]&&void 0===t[r+1]?1:0)),"!"!==t[s.nameStarts-1]&&!s.name.replace(/-/g,"").length||/^\d+$/.test(s.name[0]))return s={},B=r,"continue";if("<"===t[r]){E(L);var g=S(t,r,s.leftOuterWhitespace,r,s.lastOpeningBracketAt,r);(L.stripTogetherWithTheirContents.includes(s.name)||L.stripTogetherWithTheirContents.includes("*"))&&(m=m.filter((function(e){var t=o(e,2),n=t[0],a=t[1];return!(n===s.leftOuterWhitespace&&a===r)}))),L.cb({tag:s,deleteFrom:s.leftOuterWhitespace,deleteTo:r,insert:"".concat(g).concat(A).concat(g),rangesArr:j,proposedReturn:[s.leftOuterWhitespace,r,"".concat(g).concat(A).concat(g)]}),_(),O(r,L,j)}}if(s.quotes&&s.quotes.start&&s.quotes.start<r&&!s.quotes.end&&q.nameEnds&&q.equalsAt&&!q.valueStarts&&(q.valueStarts=r),s.quotes||!q.nameEnds||"="!==t[r]||q.valueStarts||q.equalsAt||(q.equalsAt=r),!s.quotes&&q.nameStarts&&q.nameEnds&&!q.valueStarts&&t[r].trim()&&"="!==t[r]&&(s.attributes.push(q),q={}),s.quotes||!q.nameStarts||q.nameEnds||(t[r].trim()?"="===t[r]?q.equalsAt||(q.nameEnds=r,q.equalsAt=r,q.name=t.slice(q.nameStarts,q.nameEnds)):("/"===t[r]||">"===t[r]||"<"===t[r])&&(q.nameEnds=r,q.name=t.slice(q.nameStarts,q.nameEnds),s.attributes.push(q),q={}):(q.nameEnds=r,q.name=t.slice(q.nameStarts,q.nameEnds))),s.quotes||!(s.nameEnds<r)||t[r-1].trim()||!t[r].trim()||"<>/!".includes(t[r])||q.nameStarts||s.lastClosingBracketAt||(q.nameStarts=r),null!==s.lastOpeningBracketAt&&s.lastOpeningBracketAt<r&&"/"===t[r]&&s.onlyPlausible&&(s.onlyPlausible=!1),null!==s.lastOpeningBracketAt&&s.lastOpeningBracketAt<r&&"/"!==t[r]&&(void 0===s.onlyPlausible&&(t[r].trim()&&"<"!==t[r]||s.slashPresent?s.onlyPlausible=!1:s.onlyPlausible=!0),t[r].trim()&&void 0===s.nameStarts&&"<"!==t[r]&&"/"!==t[r]&&">"!==t[r]&&"!"!==t[r]&&(s.nameStarts=r,s.nameContainsLetters=!1)),s.nameStarts&&!s.quotes&&t[r].toLowerCase()!==t[r].toUpperCase()&&(s.nameContainsLetters=!0),">"===t[r]&&void 0!==s.lastOpeningBracketAt&&(s.lastClosingBracketAt=r,k=null,Object.keys(q).length&&(s.attributes.push(q),q={}),L.dumpLinkHrefsNearby.enabled&&T.tagName&&!T.openingTagEnds&&(T.openingTagEnds=r)),void 0!==s.lastOpeningBracketAt)if(void 0===s.lastClosingBracketAt){if(s.lastOpeningBracketAt<r&&"<"!==t[r]&&(void 0===t[r+1]||"<"===t[r+1])&&s.nameContainsLetters){if(s.name=t.slice(s.nameStarts,s.nameEnds?s.nameEnds:r+1).toLowerCase(),h.length&&h[h.length-1][0]===s.lastOpeningBracketAt||h.push([s.lastOpeningBracketAt,r+1]),L.ignoreTags.includes(s.name)||s.onlyPlausible&&!l.has(s.name))return s={},q={},B=r,"continue";if((l.has(s.name)||u.has(s.name))&&(!1===s.onlyPlausible||!0===s.onlyPlausible&&s.attributes.length)||void 0===t[r+1]){E(L);var f=S(t,r,s.leftOuterWhitespace,r+1,s.lastOpeningBracketAt,s.lastClosingBracketAt);L.cb({tag:s,deleteFrom:s.leftOuterWhitespace,deleteTo:r+1,insert:"".concat(f).concat(A).concat(f),rangesArr:j,proposedReturn:[s.leftOuterWhitespace,r+1,"".concat(f).concat(A).concat(f)]}),_(),O(r,L,j)}if(!m.length||m[m.length-1][0]!==s.lastOpeningBracketAt&&m[m.length-1][1]!==r+1)if(L.stripTogetherWithTheirContents.includes(s.name)||L.stripTogetherWithTheirContents.includes("*")){for(var w,x=d.length;x--;)d[x].name===s.name&&(w=d[x]);w?(m=m.filter((function(r){return o(r,1)[0]!==w.lastOpeningBracketAt}))).push([w.lastOpeningBracketAt,r+1]):m.push([s.lastOpeningBracketAt,r+1])}else m.push([s.lastOpeningBracketAt,r+1])}}else if(r>s.lastClosingBracketAt&&t[r].trim()||void 0===t[r+1]){var N=s.lastClosingBracketAt===r?r+1:r;if(L.trimOnlySpaces&&N===n-1&&null!==k&&k<r&&(N=k),h.length&&h[h.length-1][0]===s.lastOpeningBracketAt||h.push([s.lastOpeningBracketAt,s.lastClosingBracketAt+1]),!R&&L.ignoreTags.includes(s.name)||R&&!L.onlyStripTags.includes(s.name))L.cb({tag:s,deleteFrom:null,deleteTo:null,insert:null,rangesArr:j,proposedReturn:[]}),s={},q={};else if(!s.onlyPlausible||0===s.attributes.length&&s.name&&(l.has(s.name.toLowerCase())||u.has(s.name.toLowerCase()))||s.attributes&&s.attributes.some((function(r){return r.equalsAt}))){m.length&&m[m.length-1][0]===s.lastOpeningBracketAt||m.push([s.lastOpeningBracketAt,s.lastClosingBracketAt+1]);var C,I=S(t,r,s.leftOuterWhitespace,N,s.lastOpeningBracketAt,s.lastClosingBracketAt);A="",b=!1,E(L),C="string"==typeof A&&A.length?"".concat(I).concat(A).concat("\n\n"===I?"\n":I):I,0!==s.leftOuterWhitespace&&me(t,N-1)||(C=""),L.cb({tag:s,deleteFrom:s.leftOuterWhitespace,deleteTo:N,insert:C,rangesArr:j,proposedReturn:[s.leftOuterWhitespace,N,C]}),_(),O(r,L,j)}else s={};">"!==t[r]&&(s={})}if("<"===t[r]&&"<"!==t[r-1]&&!"'\"".includes(t[r+1])&&(!"'\"".includes(t[r+2])||/\w/.test(t[r+1]))){if(">"===t[me(t,r)])return B=r,"continue";if(s.nameEnds&&s.nameEnds<r&&!s.lastClosingBracketAt&&(!0===s.onlyPlausible&&s.attributes&&s.attributes.length||!1===s.onlyPlausible)){var H=S(t,r,s.leftOuterWhitespace,r,s.lastOpeningBracketAt,r);L.cb({tag:s,deleteFrom:s.leftOuterWhitespace,deleteTo:r,insert:H,rangesArr:j,proposedReturn:[s.leftOuterWhitespace,r,H]}),O(r,L,j),s={},q={}}if(void 0!==s.lastOpeningBracketAt&&s.onlyPlausible&&s.name&&!s.quotes&&(s.lastOpeningBracketAt=void 0,s.name=void 0,s.onlyPlausible=!1),!(void 0!==s.lastOpeningBracketAt&&s.onlyPlausible||s.quotes)&&(s.lastOpeningBracketAt=r,s.slashPresent=!1,s.attributes=[],null===y?s.leftOuterWhitespace=r:L.trimOnlySpaces&&0===y?s.leftOuterWhitespace=v||r:s.leftOuterWhitespace=y,"!--"==="".concat(t[r+1]).concat(t[r+2]).concat(t[r+3])||"![CDATA["==="".concat(t[r+1]).concat(t[r+2]).concat(t[r+3]).concat(t[r+4]).concat(t[r+5]).concat(t[r+6]).concat(t[r+7]).concat(t[r+8]))){var U,V=!0;"-"===t[r+2]&&(V=!1);for(var P=r;P<n;P++)if((!U&&V&&"]]>"==="".concat(t[P-2]).concat(t[P-1]).concat(t[P])||!V&&"--\x3e"==="".concat(t[P-2]).concat(t[P-1]).concat(t[P]))&&(U=P),U&&(U<P&&t[P].trim()||void 0===t[P+1])){var W=P;(void 0===t[P+1]&&!t[P].trim()||">"===t[P])&&(W+=1),h.length&&h[h.length-1][0]===s.lastOpeningBracketAt||h.push([s.lastOpeningBracketAt,U+1]),m.length&&m[m.length-1][0]===s.lastOpeningBracketAt||m.push([s.lastOpeningBracketAt,U+1]);var F=S(t,P,s.leftOuterWhitespace,W,s.lastOpeningBracketAt,U);L.cb({tag:s,deleteFrom:s.leftOuterWhitespace,deleteTo:W,insert:F,rangesArr:j,proposedReturn:[s.leftOuterWhitespace,W,F]}),r=P-1,">"===t[P]&&(r=P),s={},q={};break}}}""===t[r].trim()?null===y&&(y=r,void 0!==s.lastOpeningBracketAt&&s.lastOpeningBracketAt<r&&s.nameStarts&&s.nameStarts<s.lastOpeningBracketAt&&r===s.lastOpeningBracketAt+1&&!d.some((function(r){return r.name===s.name}))&&(s.onlyPlausible=!0,s.name=void 0,s.nameStarts=void 0)):null!==y&&(!s.quotes&&q.equalsAt>y-1&&q.nameEnds&&q.equalsAt>q.nameEnds&&'"'!==t[r]&&"'"!==t[r]&&(D(q)&&s.attributes.push(q),q={},s.equalsSpottedAt=void 0),y=null)," "===t[r]?null===v&&(v=r):null!==v&&(v=null),B=r},B=0,I=t.length;B<I;B++)C(B,I);if(t&&(L.trimOnlySpaces&&" "===t[0]||!L.trimOnlySpaces&&!t[0].trim()))for(var H=0,U=t.length;H<U;H++){if(L.trimOnlySpaces&&" "!==t[H]||!L.trimOnlySpaces&&t[H].trim()){j.push([0,H]);break}t[H+1]||j.push([0,H+1])}if(t&&(L.trimOnlySpaces&&" "===t[t.length-1]||!L.trimOnlySpaces&&!t[t.length-1].trim()))for(var V=t.length;V--;)if(L.trimOnlySpaces&&" "!==t[V]||!L.trimOnlySpaces&&t[V].trim()){j.push([V+1,t.length]);break}if((!n||!n.cb)&&j.current()){if(j.current()[0]&&!j.current()[0][0]){j.current()[0][1];j.current(),j.ranges[0]=[j.ranges[0][0],j.ranges[0][1]]}if(j.current()[j.current().length-1]&&j.current()[j.current().length-1][1]===t.length){j.current()[j.current().length-1][0];j.current();var P=j.ranges[j.ranges.length-1][0];t[P-1]&&(L.trimOnlySpaces&&" "===t[P-1]||!L.trimOnlySpaces&&!t[P-1].trim())&&(P-=1);var W=j.ranges[j.ranges.length-1][2];j.ranges[j.ranges.length-1]=[P,j.ranges[j.ranges.length-1][1]],W&&W.trim()&&j.ranges[j.ranges.length-1].push(W.trimEnd())}}return{log:{timeTakenInMilliseconds:Date.now()-c},result:f(t,j.current()),ranges:j.current(),allTagLocations:h,filteredTagLocations:m}}}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../next/node_modules/webpack/buildin/global.js */ "./node_modules/next/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_ProductsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ProductsList */ "./components/ProductsList.js");


var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







class App extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
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
    _lib_commerce__WEBPACK_IMPORTED_MODULE_3__["default"].merchants.about().then(merchant => {
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
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_6__["default"], {
      merchant: merchant,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    }), __jsx(_components_ProductsList__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    })))));
  }

}

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(App, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_5__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (App);
App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

},[["./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5CKGM%5COneDrive%5CDocuments%5CGitHub%5Cchec%5Cfyp%5Cpages%5Cindex.js!./","webpack"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZXJvLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RJdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3RzTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NvbW1lcmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheUxpa2VUb0FycmF5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS9faW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy9faW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BjaGVjL2NvbW1lcmNlLmpzL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2FkYXB0ZXJzL3hoci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWxUb2tlbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0ludGVyY2VwdG9yTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2J1aWxkRnVsbFBhdGguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvc2V0dGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2JpbmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29va2llcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0F4aW9zRXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvanMtY29va2llL3NyYy9qcy5jb29raWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcz81NTdlIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL19OX0UvKHdlYnBhY2spL2J1aWxkaW4vaGFybW9ueS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHJpbmctc3RyaXAtaHRtbC9kaXN0L3N0cmluZy1zdHJpcC1odG1sLnVtZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSGVybyIsIm1lcmNoYW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiUHJvZHVjdEl0ZW0iLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaGFuZGxlQWRkVG9DYXJ0IiwiYmluZCIsImNvbnRleHQiLCJwcm9kdWN0IiwiaWQiLCJyZW5kZXIiLCJyZXN1bHQiLCJzdHJpcEh0bWwiLCJkZXNjcmlwdGlvbiIsIm1lZGlhIiwic291cmNlIiwibmFtZSIsInByaWNlIiwiZm9ybWF0dGVkX3dpdGhfc3ltYm9sIiwiQXBwQ29udGV4dCIsIm9uQWRkVG9DYXJ0IiwiZnVuYyIsIlByb2R1Y3RzTGlzdCIsImNvbXBvbmVudERpZE1vdW50IiwiZmV0Y2hQcm9kdWN0cyIsInByb2R1Y3RzIiwibWFwIiwiYXJyYXkiLCJjcmVhdGVDb250ZXh0IiwiY2FydEFQSSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJ0aW1lb3V0IiwiaGVhZGVycyIsInByb2R1Y3RBUEkiLCJvcmRlcm1hbmFnZW1lbnRBUEkiLCJPUkRFUk1BTkFHRU1FTlRNU1VSTCIsIkFwcFdyYXBwZXIiLCJzdGF0ZSIsImNhcnRJRCIsIm9yZGVyIiwiY2FydCIsImlzQ2FydFZpc2libGUiLCJjaGVja291dFRva2VuIiwibG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSIsInRvZ2dsZUNhcnQiLCJoYW5kbGVVcGRhdGVDYXJ0UXR5IiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJoYW5kbGVFbXB0eUNhcnQiLCJmZXRjaENhcnQiLCJyZWZyZXNoQ2FydCIsImhhbmRsZUNhcHR1cmVDaGVja291dCIsImdlbmVyYXRlVG9rZW4iLCJnZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwicmV0cmlldmVDYXJ0IiwiY3JlYXRlQ2FydCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0SWQiLCJxdWFudGl0eSIsInBvc3QiLCJpdGVtIiwibGluZUl0ZW1JZCIsInB1dCIsInJlc3AiLCJkZWxldGUiLCJzZXQiLCJjaGVja291dFRva2VuSWQiLCJuZXdPcmRlciIsImNvbW1lcmNlIiwiY2hlY2tvdXQiLCJjYXB0dXJlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImhpc3RvcnkiLCJwdXNoIiwiZ2VuZXJhdGVDaGVja291dFRva2VuIiwibGluZV9pdGVtcyIsImxlbmd0aCIsInRva2VuIiwidHlwZSIsImZldGNoU2hpcHBpbmdDb3VudHJpZXMiLCJjaGlsZHJlbiIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiY29tbWVyY2VBUElLRVkiLCJFcnJvciIsIkNvbW1lcmNlIiwiQXBwIiwiZmV0Y2hNZXJjaGFudERldGFpbHMiLCJtZXJjaGFudHMiLCJhYm91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDM0IsU0FDSTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE9BQUcsRUFBQyxjQUFUO0FBQXdCLE9BQUcsRUFBQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQUtILENBTkQ7O0tBQU1ELEk7QUFRU0EsbUVBQWY7QUFHQUEsSUFBSSxDQUFDRSxTQUFMLEdBQWlCO0FBQ2JELFVBQVEsRUFBRUUsaURBQVMsQ0FBQ0M7QUFEUCxDQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLE1BQU1DLFdBQU4sU0FBMEJDLCtDQUExQixDQUFvQztBQUNoQ0MsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDZixVQUFNQSxLQUFOO0FBRUEsU0FBS0MsZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUF2QjtBQUNIOztBQUlERCxpQkFBZSxHQUFHO0FBQ2QsU0FBS0UsT0FBTCxDQUFhRixlQUFiLENBQTZCLEtBQUtELEtBQUwsQ0FBV0ksT0FBWCxDQUFtQkMsRUFBaEQsRUFBb0QsQ0FBcEQ7QUFDSDs7QUFFREMsUUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFRjtBQUFGLFFBQWMsS0FBS0osS0FBekI7QUFDQSxVQUFNO0FBQUVPO0FBQUYsUUFBYUMsd0RBQVMsQ0FBQ0osT0FBTyxDQUFDSyxXQUFULENBQTVCO0FBRUEsV0FDRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFnQyxTQUFHLEVBQUVMLE9BQU8sQ0FBQ00sS0FBUixDQUFjQyxNQUFuRDtBQUEyRCxTQUFHLEVBQUVQLE9BQU8sQ0FBQ1EsSUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSSxlQUFTLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCUixPQUFPLENBQUNRLElBQXZDLENBREosRUFFSTtBQUFHLGVBQVMsRUFBQyxzQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRUtMLE1BRkwsQ0FGSixFQU1JO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFHLGVBQVMsRUFBQyxnQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0tILE9BQU8sQ0FBQ1MsS0FBUixDQUFjQyxxQkFEbkIsQ0FESixFQUlJO0FBQ0ksVUFBSSxFQUFDLGFBRFQ7QUFFSSxlQUFTLEVBQUMsY0FGZDtBQUdJLGFBQU8sRUFBRSxLQUFLYixlQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLENBTkosQ0FGRixDQURGO0FBd0JIOztBQXpDK0I7OzBGQUE5QkosVyxpQkFPbUJrQiw0RDs7QUFtQ3RCO0FBR1lsQiwwRUFBZjtBQUVBQSxXQUFXLENBQUNILFNBQVosR0FBd0I7QUFDcEJVLFNBQU8sRUFBRVQsaURBQVMsQ0FBQ0MsTUFEQztBQUVwQm9CLGFBQVcsRUFBRXJCLGlEQUFTLENBQUNzQixJQUZIO0FBR3BCaEIsaUJBQWUsRUFBRU4saURBQVMsQ0FBQ3NCO0FBSFAsQ0FBeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsWUFBTixTQUEyQnBCLCtDQUEzQixDQUFxQztBQUlqQ3FCLG1CQUFpQixHQUFHO0FBQ2hCLFNBQUtoQixPQUFMLENBQWFpQixhQUFiO0FBQ0Q7O0FBRUhkLFFBQU0sR0FBRztBQUNMLFVBQU07QUFBRWU7QUFBRixRQUFlLEtBQUtsQixPQUExQjtBQUVBLFdBQ0ksbUVBQ0k7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUEwQixRQUFFLEVBQUMsVUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLa0IsUUFBUSxDQUFDQyxHQUFULENBQWNsQixPQUFELElBQ1YsTUFBQyxvREFBRDtBQUNJLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxFQURqQjtBQUVJLGFBQU8sRUFBRUQ7QUFGYixPQUdRLEtBQUtKLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURILENBREwsQ0FESixDQURKO0FBYUg7O0FBeEJnQzs7MEZBQS9Ca0IsWSxpQkFFbUJILDREOztBQXlCVkcsMkVBQWY7QUFFQUEsWUFBWSxDQUFDeEIsU0FBYixHQUF5QjtBQUNyQjJCLFVBQVEsRUFBRTFCLGlEQUFTLENBQUM0QjtBQURDLENBQXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLE1BQU1SLFVBQVUsZ0JBQUdTLDJEQUFhLEVBQWhDO0FBRVAsTUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDM0JDLFNBQU8sRUFBRUMsaUNBRGtCO0FBRTNCQyxTQUFPLEVBQUUsSUFGa0I7QUFHM0JDLFNBQU8sRUFBRTtBQUNQLGNBQVUsa0JBREg7QUFFUCxvQkFBZ0I7QUFGVDtBQUhrQixDQUFiLENBQWhCO0FBU0EsTUFBTUMsVUFBVSxHQUFHTiw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDOUJDLFNBQU8sRUFBRUMsd0NBRHFCO0FBRTlCQyxTQUFPLEVBQUUsSUFGcUI7QUFHOUJDLFNBQU8sRUFBRTtBQUNQLGNBQVUsa0JBREg7QUFFUCxvQkFBZ0I7QUFGVDtBQUhxQixDQUFiLENBQW5CO0FBU0EsTUFBTUUsa0JBQWtCLEdBQUdQLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN0Q0MsU0FBTyxFQUFFQyxFQUFBLENBQVlLLG9CQURpQjtBQUV0Q0osU0FBTyxFQUFFLElBRjZCO0FBR3RDQyxTQUFPLEVBQUU7QUFDUCxjQUFVLGtCQURIO0FBRVAsb0JBQWdCO0FBRlQ7QUFINkIsQ0FBYixDQUEzQjs7QUFTQSxNQUFNSSxVQUFOLFNBQXlCckMsK0NBQXpCLENBQW1DO0FBRWpDQyxhQUFXLEdBQUc7QUFDWjtBQUVBLFNBQUtxQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQUFFLEVBREc7QUFFWEMsV0FBSyxFQUFFLEVBRkk7QUFHWEMsVUFBSSxFQUFFLEVBSEs7QUFJWEMsbUJBQWEsRUFBRSxLQUpKO0FBS1huQixjQUFRLEVBQUUsRUFMQztBQU1Yb0IsbUJBQWEsRUFBRSxFQU5KO0FBT1hDLCtCQUF5QixFQUFFLEtBQUtBLHlCQUFMLENBQStCeEMsSUFBL0IsQ0FBb0MsSUFBcEMsQ0FQaEI7QUFRWHlDLGdCQUFVLEVBQUUsS0FBS0EsVUFBTCxDQUFnQnpDLElBQWhCLENBQXFCLElBQXJCLENBUkQ7QUFTWEQscUJBQWUsRUFBRSxLQUFLQSxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQVROO0FBVVgwQyx5QkFBbUIsRUFBRSxLQUFLQSxtQkFBTCxDQUF5QjFDLElBQXpCLENBQThCLElBQTlCLENBVlY7QUFXWDJDLDBCQUFvQixFQUFFLEtBQUtBLG9CQUFMLENBQTBCM0MsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FYWDtBQVlYNEMscUJBQWUsRUFBRSxLQUFLQSxlQUFMLENBQXFCNUMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FaTjtBQWFYNkMsZUFBUyxFQUFFLEtBQUtBLFNBQUwsQ0FBZTdDLElBQWYsQ0FBb0IsSUFBcEIsQ0FiQTtBQWNYOEMsaUJBQVcsRUFBRSxLQUFLQSxXQUFMLENBQWlCOUMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FkRjtBQWVYK0MsMkJBQXFCLEVBQUUsS0FBS0EscUJBQUwsQ0FBMkIvQyxJQUEzQixDQUFnQyxJQUFoQyxDQWZaO0FBZ0JYa0IsbUJBQWEsRUFBRSxLQUFLQSxhQUFMLENBQW1CbEIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FoQko7QUFpQlhnRCxtQkFBYSxFQUFFLEtBQUtBLGFBQUwsQ0FBbUJoRCxJQUFuQixDQUF3QixJQUF4QjtBQWpCSixLQUFiO0FBcUJEO0FBR0Q7QUFDRjtBQUNBO0FBQ0E7OztBQUNxQixRQUFia0IsYUFBYSxHQUFHO0FBQ3BCWSxjQUFVLENBQUNtQixHQUFYLENBQWUsTUFBZixFQUF1QkMsSUFBdkIsQ0FBNkIvQixRQUFELElBQWM7QUFDeEMsV0FBS2dDLFFBQUwsQ0FBYztBQUFFaEMsZ0JBQVEsRUFBRUEsUUFBUSxDQUFDaUMsSUFBVCxDQUFjQTtBQUExQixPQUFkO0FBQ0QsS0FGRCxFQUVHQyxLQUZILENBRVVDLEtBQUQsSUFBVztBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksMENBQVosRUFBd0RGLEtBQXhEO0FBQ0QsS0FKRDtBQUtEOztBQUVjLFFBQVRULFNBQVMsR0FBRztBQUNoQixVQUFNVixNQUFNLEdBQUdzQixnREFBTyxDQUFDUixHQUFSLENBQVksUUFBWixDQUFmOztBQUVBLFFBQUksTUFBTSxLQUFLUyxZQUFMLENBQWtCdkIsTUFBbEIsQ0FBVixFQUFxQztBQUNuQ29CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0QsS0FGRCxNQUVPLElBQUksTUFBTSxLQUFLRyxVQUFMLEVBQVYsRUFBNkI7QUFDbENKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVo7QUFDRCxLQUZNLE1BRUE7QUFDTEQsYUFBTyxDQUFDRCxLQUFSLENBQWMsMkNBQWQ7QUFDRDtBQUNGLEdBbkRnQyxDQXFEakM7O0FBRUE7QUFDRjtBQUNBO0FBQ0E7OztBQUNFZCwyQkFBeUIsR0FBRztBQUMxQixRQUFJb0IsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixlQUE1QixDQUFKLEVBQWtEO0FBQ2hELFdBQUtYLFFBQUwsQ0FBYztBQUFFZixhQUFLLEVBQUUyQixJQUFJLENBQUNDLEtBQUwsQ0FBV0osTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixlQUE1QixDQUFYO0FBQVQsT0FBZDtBQUNEO0FBQ0Y7QUFFRDtBQUNGO0FBQ0E7OztBQUNFckIsWUFBVSxHQUFHO0FBQ1gsVUFBTTtBQUFFSDtBQUFGLFFBQW9CLEtBQUtKLEtBQS9CO0FBQ0EsU0FBS2lCLFFBQUwsQ0FBYztBQUNaYixtQkFBYSxFQUFFLENBQUNBO0FBREosS0FBZDtBQUdELEdBekVnQyxDQTJFakM7O0FBQ0E7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUN1QixRQUFmdkMsZUFBZSxDQUFDa0UsU0FBRCxFQUFZQyxRQUFaLEVBQXNCO0FBRXpDLFVBQU0zQyxPQUFPLENBQUM0QyxJQUFSLENBQWEsUUFBYixFQUF1QjtBQUFFaEMsWUFBTSxFQUFFLEtBQUtELEtBQUwsQ0FBV0MsTUFBckI7QUFBNkI4QixlQUFTLEVBQUVBLFNBQXhDO0FBQW1EQyxjQUFRLEVBQUVBO0FBQTdELEtBQXZCLEVBQWdHaEIsSUFBaEcsQ0FBc0drQixJQUFELElBQVU7QUFDbkgsV0FBS2pCLFFBQUwsQ0FBYztBQUFFZCxZQUFJLEVBQUUrQixJQUFJLENBQUNoQixJQUFMLENBQVVmO0FBQWxCLE9BQWQ7QUFDRCxLQUZLLEVBRUhnQixLQUZHLENBRUlDLEtBQUQsSUFBVztBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksaUNBQVosRUFBK0NGLEtBQS9DO0FBQ0QsS0FKSyxDQUFOO0FBS0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0VaLHFCQUFtQixDQUFDMkIsVUFBRCxFQUFhSCxRQUFiLEVBQXVCO0FBQ3hDM0MsV0FBTyxDQUFDK0MsR0FBUixDQUFZLFlBQVosRUFBMEI7QUFBRW5DLFlBQU0sRUFBRSxLQUFLRCxLQUFMLENBQVdDLE1BQXJCO0FBQTZCa0MsZ0JBQVUsRUFBRUEsVUFBekM7QUFBcURILGNBQVEsRUFBRUE7QUFBL0QsS0FBMUIsRUFBcUdoQixJQUFyRyxDQUEyR3FCLElBQUQsSUFBVTtBQUNsSCxXQUFLcEIsUUFBTCxDQUFjO0FBQUVkLFlBQUksRUFBRWtDLElBQUksQ0FBQ25CLElBQUwsQ0FBVWY7QUFBbEIsT0FBZDtBQUNELEtBRkQsRUFFR2dCLEtBRkgsQ0FFVUMsS0FBRCxJQUFXO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSw0Q0FBWixFQUEwREYsS0FBMUQ7QUFDRCxLQUpEO0FBS0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFWCxzQkFBb0IsQ0FBQzBCLFVBQUQsRUFBYTtBQUMvQjlDLFdBQU8sQ0FBQ2lELE1BQVIsQ0FBZSxpQkFBaUIsS0FBS3RDLEtBQUwsQ0FBV0MsTUFBNUIsR0FBcUMsR0FBckMsR0FBMkNrQyxVQUExRCxFQUFzRW5CLElBQXRFLENBQTRFcUIsSUFBRCxJQUFVO0FBQ25GLFdBQUtwQixRQUFMLENBQWM7QUFBRWQsWUFBSSxFQUFFa0MsSUFBSSxDQUFDbkIsSUFBTCxDQUFVZjtBQUFsQixPQUFkO0FBQ0QsS0FGRCxFQUVHZ0IsS0FGSCxDQUVVQyxLQUFELElBQVc7QUFDbEJDLGFBQU8sQ0FBQ0QsS0FBUixDQUFjLG9EQUFkLEVBQW9FQSxLQUFwRTtBQUVELEtBTEQ7QUFNRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDdUIsUUFBZlYsZUFBZSxHQUFHO0FBQ3RCLFVBQU1yQixPQUFPLENBQUNpRCxNQUFSLENBQWUsWUFBWSxLQUFLdEMsS0FBTCxDQUFXQyxNQUF0QyxFQUE4Q2UsSUFBOUMsQ0FBb0RxQixJQUFELElBQVU7QUFDakUsV0FBS3BCLFFBQUwsQ0FBYztBQUFFZCxZQUFJLEVBQUVrQyxJQUFJLENBQUNuQixJQUFMLENBQVVmO0FBQWxCLE9BQWQ7QUFDRCxLQUZLLEVBRUhnQixLQUZHLENBRUlDLEtBQUQsSUFBVztBQUNsQkMsYUFBTyxDQUFDRCxLQUFSLENBQWMsc0NBQWQsRUFBc0RBLEtBQXREO0FBQ0QsS0FKSyxDQUFOO0FBS0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ2tCLFFBQVZLLFVBQVUsR0FBRztBQUVqQixXQUFPLE1BQU1wQyxPQUFPLENBQUMwQixHQUFSLENBQVksU0FBWixFQUF1QkMsSUFBdkIsQ0FBNkJiLElBQUQsSUFBVTtBQUNqRCxXQUFLYyxRQUFMLENBQWM7QUFBRWQsWUFBSSxFQUFFQSxJQUFJLENBQUNlLElBQWI7QUFBbUJqQixjQUFNLEVBQUVFLElBQUksQ0FBQ2UsSUFBTCxDQUFVakQ7QUFBckMsT0FBZDtBQUNBc0Qsc0RBQU8sQ0FBQ2dCLEdBQVIsQ0FBWSxRQUFaLEVBQXNCcEMsSUFBSSxDQUFDZSxJQUFMLENBQVVqRCxFQUFoQztBQUNBLGFBQU8sSUFBUDtBQUNELEtBSlksRUFLWGtELEtBTFcsQ0FLSkMsS0FBRCxJQUFXO0FBQ2pCQyxhQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBLGFBQU8sS0FBUDtBQUNELEtBUlksQ0FBYjtBQVVEOztBQUVpQixRQUFaSSxZQUFZLENBQUN2QixNQUFELEVBQVM7QUFDekIsV0FBTyxNQUFNWixPQUFPLENBQUMwQixHQUFSLENBQVksWUFBWWQsTUFBeEIsRUFBZ0NlLElBQWhDLENBQXNDYixJQUFELElBQVU7QUFDMUQsV0FBS2MsUUFBTCxDQUFjO0FBQUVkLFlBQUksRUFBRUEsSUFBSSxDQUFDZSxJQUFiO0FBQW1CakIsY0FBTSxFQUFFRSxJQUFJLENBQUNlLElBQUwsQ0FBVWpEO0FBQXJDLE9BQWQ7QUFDQSxhQUFPLElBQVA7QUFDRCxLQUhZLEVBSVhrRCxLQUpXLENBSUpDLEtBQUQsSUFBVztBQUNqQkMsYUFBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDQSxhQUFPLEtBQVA7QUFDRCxLQVBZLENBQWI7QUFRRDtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRVIsYUFBVyxHQUFHO0FBQ1osU0FBS2EsVUFBTDtBQUNELEdBektnQyxDQTBLakM7O0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNFWix1QkFBcUIsQ0FBQzJCLGVBQUQsRUFBa0JDLFFBQWxCLEVBQTRCO0FBRS9DNUMsc0JBQWtCLENBQUNvQyxJQUFuQixDQUF3QixrQkFBeEI7QUFDQVMsWUFBUSxDQUFDQyxRQUFULENBQWtCQyxPQUFsQixDQUEwQkosZUFBMUIsRUFBMkNDLFFBQTNDLEVBQXFEekIsSUFBckQsQ0FBMkRkLEtBQUQsSUFBVztBQUVuRSxXQUFLZSxRQUFMLENBQWM7QUFDWmYsYUFBSyxFQUFFQTtBQURLLE9BQWQsRUFGbUUsQ0FNbkU7QUFDQTs7QUFDQXdCLFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQmtCLE9BQXBCLENBQTRCLGVBQTVCLEVBQTZDaEIsSUFBSSxDQUFDaUIsU0FBTCxDQUFlNUMsS0FBZixDQUE3QyxFQVJtRSxDQVNuRTs7QUFDQSxXQUFLVSxXQUFMLEdBVm1FLENBV25FOztBQUNBLFdBQUtoRCxLQUFMLENBQVdtRixPQUFYLENBQW1CQyxJQUFuQixDQUF3QixlQUF4QjtBQUNELEtBYkQsRUFhRzdCLEtBYkgsQ0FhVUMsS0FBRCxJQUFXO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwwQ0FBWixFQUF3REYsS0FBeEQ7QUFDRCxLQWZEO0FBZ0JEO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7OztBQUNFNkIsdUJBQXFCLEdBQUc7QUFFdEIsVUFBTTtBQUFFOUM7QUFBRixRQUFXLEtBQUtwQyxPQUF0Qjs7QUFFQSxRQUFJb0MsSUFBSSxDQUFDK0MsVUFBTCxDQUFnQkMsTUFBcEIsRUFBNEI7QUFFMUJ0RCx3QkFBa0IsQ0FBQ2tCLEdBQW5CLENBQXVCLDBCQUF2QixFQUFtRDtBQUFFZCxjQUFNLEVBQUVFLElBQUksQ0FBQ2xDO0FBQWYsT0FBbkQsRUFBd0UrQyxJQUF4RSxDQUE2RW9DLEtBQUssSUFBSTtBQUNwRixhQUFLbkMsUUFBTCxDQUFjO0FBQUVaLHVCQUFhLEVBQUUrQztBQUFqQixTQUFkO0FBQ0QsT0FGRCxFQUVHakMsS0FGSCxDQUVTQyxLQUFLLElBQUk7QUFDaEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDBDQUFaLEVBQXdERixLQUF4RDtBQUNELE9BSkQ7QUFLRDs7QUFFRCxRQUFJakIsSUFBSSxDQUFDK0MsVUFBTCxDQUFnQkMsTUFBcEIsRUFBNEI7QUFDMUIsYUFBT1QsUUFBUSxDQUFDQyxRQUFULENBQWtCN0IsYUFBbEIsQ0FBZ0NYLElBQUksQ0FBQ2xDLEVBQXJDLEVBQXlDO0FBQUVvRixZQUFJLEVBQUU7QUFBUixPQUF6QyxFQUNKckMsSUFESSxDQUNFb0MsS0FBRCxJQUFXLEtBQUtuQyxRQUFMLENBQWM7QUFBRVoscUJBQWEsRUFBRStDO0FBQWpCLE9BQWQsQ0FEWixFQUVKcEMsSUFGSSxDQUVDLE1BQU0sS0FBS3NDLHNCQUFMLENBQTRCLEtBQUt0RCxLQUFMLENBQVdLLGFBQVgsQ0FBeUJwQyxFQUFyRCxDQUZQLEVBR0prRCxLQUhJLENBR0dDLEtBQUQsSUFBVztBQUNoQkMsZUFBTyxDQUFDQyxHQUFSLENBQVksMENBQVosRUFBd0RGLEtBQXhEO0FBQ0QsT0FMSSxDQUFQO0FBTUQ7QUFDRjs7QUFHRGxELFFBQU0sR0FBRztBQUNQLFdBQ0UsTUFBQyxVQUFELENBQVksUUFBWjtBQUFxQixXQUFLLEVBQUUsS0FBSzhCLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRyxLQUFLcEMsS0FBTCxDQUFXMkYsUUFEZCxDQURGO0FBS0Q7O0FBMU9nQzs7QUE2T25DO0FBRU8sU0FBU0MsYUFBVCxHQUF5QjtBQUFBOztBQUM5QixTQUFPQyxVQUFVLENBQUM5RSxVQUFELENBQWpCO0FBQ0Q7O0dBRmU2RSxhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsUmhCO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUUsY0FBYyxHQUFHakUsa0RBQXZCOztBQUVBLElBQUksQ0FBQ2lFLGNBQUwsRUFBcUI7QUFDakIsUUFBTUMsS0FBSyxDQUFDLGlFQUFELENBQVg7QUFDRDs7QUFFWSxtRUFBSUMsd0RBQUosQ0FBYUYsY0FBYixFQUE2QixJQUE3QixDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDWEEsdUJBQXVCLG1CQUFPLENBQUMsZ0hBQXlDOztBQUV4RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDUEE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBZTtBQUNmO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ0xBLG1DQUFtQyxtQkFBTyxDQUFDLHdJQUFxRDs7QUFFaEc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZFOzs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNoQkEsd0JBQXdCLG1CQUFPLENBQUMsa0hBQTBDOztBQUUxRSxzQkFBc0IsbUJBQU8sQ0FBQyw4R0FBd0M7O0FBRXRFLGlDQUFpQyxtQkFBTyxDQUFDLG9JQUFtRDs7QUFFNUYsd0JBQXdCLG1CQUFPLENBQUMsa0hBQTBDOztBQUUxRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2RTs7Ozs7Ozs7Ozs7QUNyQkEsdUJBQXVCLG1CQUFPLENBQUMsZ0hBQXlDOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkU7Ozs7Ozs7Ozs7O0FDWkEsaUJBQWlCLG1CQUFPLENBQUMsMEVBQXFCOzs7Ozs7Ozs7Ozs7QUNBOUMsNkJBQTZCLG1CQUFPLENBQUMsOEhBQWdELHFCQUFxQixtQkFBTyxDQUFDLGtIQUEwQyxVQUFVLG1CQUFPLENBQUMsNEZBQStCLGtCQUFrQixtQkFBTyxDQUFDLDRHQUF1QyxrQkFBa0IsbUJBQU8sQ0FBQyw0R0FBdUMsZUFBZSxtQkFBTyxDQUFDLHNHQUFvQyxzQkFBc0IsbUJBQU8sQ0FBQyxzRkFBNEIsb0JBQW9CLG1CQUFPLENBQUMsZ0hBQXlDLFFBQVEsbUJBQU8sQ0FBQyw0Q0FBTyxFQUFFLGtDQUFrQywrQ0FBK0MsV0FBVyxpbEJBQWlsQixjQUFjLHlEQUF5RCx5Q0FBeUMsZ0NBQWdDLHlCQUF5QixXQUFXLHFJQUFxSSxlQUFlLDBDQUEwQywyQkFBMkIsbUNBQW1DLFdBQVcsRUFBRSw0QkFBNEIseUJBQXlCLE9BQU8saURBQWlELElBQUksV0FBVyxLQUFLLGVBQWUsa0JBQWtCLDJCQUEyQiwwREFBMEQsYUFBYSxFQUFFLCtCQUErQiwwQkFBMEIsS0FBSyxtQkFBbUIsY0FBYywwRUFBMEUsTUFBTSx5Q0FBeUMsK0JBQStCLFdBQVcsd0RBQXdELFdBQVcsc0VBQXNFLElBQUksRUFBRSwwQkFBMEIseUNBQXlDLHNEQUFzRCwyQ0FBMkMsRUFBRSxrSEFBa0gsaUNBQWlDLDhEQUE4RCxNQUFNLHVCQUF1Qix3TkFBd04sU0FBUyxNQUFNLCtCQUErQixxSEFBcUgsd0VBQXdFLG1FQUFtRSxHQUFHLFFBQVEsSUFBSSxrQ0FBa0MsVUFBVSxlQUFlLCtCQUErQixFQUFFLEVBQUUsNEJBQTRCLGdJQUFnSSx1RUFBdUUsa0NBQWtDLEVBQUUsZ0NBQWdDLHlFQUF5RSwyREFBMkQsZ0NBQWdDLElBQUksRUFBRSx3Q0FBd0Msc0VBQXNFLHFCQUFxQixJQUFJLEVBQUUsK0JBQStCLGtEQUFrRCxFQUFFLDhCQUE4QixrQ0FBa0MsRUFBRSxpQ0FBaUMsaURBQWlELEVBQUUsZ0NBQWdDLDhCQUE4QixFQUFFLDZCQUE2Qix1Q0FBdUMsS0FBSyx5QkFBeUIsY0FBYyx5REFBeUQseUNBQXlDLDRCQUE0QixrRUFBa0UsNEdBQTRHLEVBQUUsaUNBQWlDLGdFQUFnRSwrREFBK0QsS0FBSyx1QkFBdUIscUJBQXFCLGdFQUFnRSxnREFBZ0QsNENBQTRDLHlGQUF5RiwwQkFBMEIsSUFBSSxFQUFFLHdDQUF3Qyw4REFBOEQsRUFBRSw0Q0FBNEMsK0hBQStILDZCQUE2QixPQUFPLEdBQUcsRUFBRSxrQ0FBa0MsV0FBVyxnRkFBZ0YsbUNBQW1DLElBQUksRUFBRSxnQ0FBZ0MsaUVBQWlFLEVBQUUsOENBQThDLHlGQUF5RixFQUFFLCtCQUErQixnRUFBZ0UsRUFBRSxxQ0FBcUMscUZBQXFGLEVBQUUsMENBQTBDLDBHQUEwRywyRkFBMkYsRUFBRSwrQkFBK0IsdUVBQXVFLEVBQUUseUNBQXlDLDZGQUE2RixFQUFFLHdDQUF3QyxnRkFBZ0YsRUFBRSw4Q0FBOEMsZ0ZBQWdGLEVBQUUsNkNBQTZDLHlGQUF5RixFQUFFLDBDQUEwQyw4RkFBOEYsRUFBRSx5Q0FBeUMsMkVBQTJFLEVBQUUsZ0NBQWdDLDhEQUE4RCxFQUFFLGlDQUFpQyw2REFBNkQsRUFBRSx3Q0FBd0MsZ0ZBQWdGLFlBQVksR0FBRyxzQkFBc0IscUJBQXFCLGlDQUFpQyxzQ0FBc0MsNEJBQTRCLHVEQUF1RCxzQkFBc0IsU0FBUywwQkFBMEIsWUFBWSxtQkFBbUIsS0FBSyx5Q0FBeUMsdUNBQXVDLDJDQUEyQyxtSUFBbUksZ0VBQWdFLEdBQUcsU0FBUyx3QkFBd0IsY0FBYyxzRUFBc0UseUNBQXlDLGdDQUFnQyw2REFBNkQsbUJBQW1CLEdBQUcsRUFBRSxpQ0FBaUMsd0VBQXdFLGdFQUFnRSxRQUFRLG9CQUFvQiwyQ0FBMkMseUNBQXlDLDBJQUEwSSxJQUFJLEVBQUUsOEJBQThCLCtEQUErRCw2SEFBNkgsK0ZBQStGLEtBQUssRUFBRSxpQ0FBaUMsNExBQTRMLDhCQUE4QixxQkFBcUIsc0NBQXNDLElBQUksMkVBQTJFLEtBQUssRUFBRSxpQ0FBaUMsZ0lBQWdJLGtIQUFrSCxHQUFHLEtBQUssRUFBRSw2QkFBNkIsc0RBQXNELEVBQUUsMEJBQTBCLGdDQUFnQyxFQUFFLDZCQUE2QixtQ0FBbUMsRUFBRSxrQ0FBa0MsOENBQThDLEVBQUUsOEJBQThCLFlBQVksdUhBQXVILEVBQUUscUNBQXFDLHlEQUF5RCxvRUFBb0UsMkNBQTJDLEVBQUUsaUNBQWlDLDRMQUE0TCxpRkFBaUYsa0RBQWtELDJEQUEyRCxRQUFRLEVBQUUsMkNBQTJDLGdJQUFnSSx5R0FBeUcsdUhBQXVILEtBQUssd0JBQXdCLGNBQWMseURBQXlELHlDQUF5Qyw2QkFBNkIsMkNBQTJDLEtBQUssdUJBQXVCLGNBQWMseURBQXlELHlDQUF5Qyw0QkFBNEIsa0VBQWtFLGtEQUFrRCxFQUFFLGlDQUFpQyxnRUFBZ0UsNkRBQTZELEtBQUssdUJBQXVCLGNBQWMseURBQXlELHlDQUF5QywyQ0FBMkMsMkRBQTJELEVBQUUsb0RBQW9ELHlFQUF5RSxFQUFFLHlEQUF5RCxvR0FBb0csRUFBRSwrQ0FBK0MsNEVBQTRFLEtBQUssYUFBYSw0SEFBNEgsMEJBQTBCLCtNQUErTSxVQUFVLG1DQUFtQyxNQUFNLCtCQUErQixNQUFNLGdJQUFnSSxNQUFNLGlEQUFpRCxXQUFXLHFDQUFxQyxjQUFjLGFBQWEsd0JBQXdCLDhDQUE4QyxpQkFBaUIseUNBQXlDLHlEQUF5RCwwQ0FBMEMsSUFBSSw2REFBNkQsOENBQThDLGdCQUFnQixpQkFBaUIsOENBQThDLGdCQUFnQixlQUFlLFNBQVMsdURBQXVELDhDQUE4QyxnQkFBZ0IsR0FBRyx1RkFBdUYsaUJBQWlCLDhDQUE4Qyw2QkFBNkIsdUJBQXVCLGtDQUFrQyxjQUFjLDhDQUE4QyxpQkFBaUIsYUFBYSx3QkFBd0IsaUJBQWlCLHdDQUF3QyxpQkFBaUIsZ0JBQWdCLCtDQUErQyxHQUFHLDZCQUE2QiwrekNBQSt6QyxnQkFBZ0Isa0JBQWtCLGlCQUFpQiw4RUFBOEUsZUFBZSwrQ0FBK0MsZ0JBQWdCLGtCQUFrQixxSUFBcUksZUFBZSwrQ0FBK0MsZ0JBQWdCLGtCQUFrQixvQkFBb0Isd0JBQXdCLHFCQUFxQixpQ0FBaUMsc0NBQXNDLDRCQUE0Qix1REFBdUQsc0JBQXNCLFNBQVMsNEJBQTRCLFlBQVksbUJBQW1CLEtBQUsseUNBQXlDLHlDQUF5QywyQ0FBMkMscUlBQXFJLGdFQUFnRSxHQUFHLFNBQVMscUNBQXFDLCtDQUErQyx5QkFBeUIsRUFBRSwrQkFBK0IscUJBQXFCLGNBQWMsMEhBQTBILDBGQUEwRiwyRUFBMkUsTUFBTSxFQUFFLG9CQUFvQix3R0FBd0csOEhBQThILDRYQUE0WCx5Q0FBeUMsOEJBQThCLDJDQUEyQyxzSEFBc0gsZ0RBQWdELEVBQUUsZ0NBQWdDLG1NQUFtTSw4REFBOEQsMkdBQTJHLG1HQUFtRyxvQkFBb0Isd0NBQXdDLDhEQUE4RCwrRkFBK0YsTUFBTSxFQUFFLDBEQUEwRCxrQkFBa0IsR0FBRyxjQUFjLGlDQUFpQywyQkFBMkIsMFBBQTBQLGtGQUFrRix1REFBdUQsc0JBQXNCLGtCQUFrQixnTkFBZ04sSUFBSSxLQUFLLEdBQUc7Ozs7Ozs7Ozs7OztBQ0FqM21CLGlCQUFpQixtQkFBTyxDQUFDLHNEQUFhLEU7Ozs7Ozs7Ozs7OztBQ0F6Qjs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7QUFDaEMsYUFBYSxtQkFBTyxDQUFDLGlFQUFrQjtBQUN2QyxjQUFjLG1CQUFPLENBQUMseUVBQXNCO0FBQzVDLGVBQWUsbUJBQU8sQ0FBQywyRUFBdUI7QUFDOUMsb0JBQW9CLG1CQUFPLENBQUMsNkVBQXVCO0FBQ25ELG1CQUFtQixtQkFBTyxDQUFDLG1GQUEyQjtBQUN0RCxzQkFBc0IsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDNUQsa0JBQWtCLG1CQUFPLENBQUMseUVBQXFCOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ2xMYTs7QUFFYixZQUFZLG1CQUFPLENBQUMsa0RBQVM7QUFDN0IsV0FBVyxtQkFBTyxDQUFDLGdFQUFnQjtBQUNuQyxZQUFZLG1CQUFPLENBQUMsNERBQWM7QUFDbEMsa0JBQWtCLG1CQUFPLENBQUMsd0VBQW9CO0FBQzlDLGVBQWUsbUJBQU8sQ0FBQyx3REFBWTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0VBQWlCO0FBQ3hDLG9CQUFvQixtQkFBTyxDQUFDLDRFQUFzQjtBQUNsRCxpQkFBaUIsbUJBQU8sQ0FBQyxzRUFBbUI7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLG9FQUFrQjs7QUFFekM7QUFDQSxxQkFBcUIsbUJBQU8sQ0FBQyxnRkFBd0I7O0FBRXJEOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbEJhOztBQUViLGFBQWEsbUJBQU8sQ0FBQywyREFBVTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDeERhOztBQUViO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0phOztBQUViLFlBQVksbUJBQU8sQ0FBQyxxREFBWTtBQUNoQyxlQUFlLG1CQUFPLENBQUMseUVBQXFCO0FBQzVDLHlCQUF5QixtQkFBTyxDQUFDLGlGQUFzQjtBQUN2RCxzQkFBc0IsbUJBQU8sQ0FBQywyRUFBbUI7QUFDakQsa0JBQWtCLG1CQUFPLENBQUMsbUVBQWU7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUM5RmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQjtBQUNBLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkRhOztBQUViLG9CQUFvQixtQkFBTyxDQUFDLG1GQUEwQjtBQUN0RCxrQkFBa0IsbUJBQU8sQ0FBQywrRUFBd0I7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25CYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxxRUFBZ0I7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQmE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZO0FBQ2hDLG9CQUFvQixtQkFBTyxDQUFDLHVFQUFpQjtBQUM3QyxlQUFlLG1CQUFPLENBQUMsdUVBQW9CO0FBQzNDLGVBQWUsbUJBQU8sQ0FBQyx5REFBYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQzlFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6Q2E7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLG1EQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQjtBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEZhOztBQUViLGtCQUFrQixtQkFBTyxDQUFDLG1FQUFlOztBQUV6QztBQUNBO0FBQ0E7QUFDQSxXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hCYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsY0FBYztBQUN6QixXQUFXLE1BQU07QUFDakIsV0FBVyxlQUFlO0FBQzFCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQkEsK0NBQWE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLGtEQUFTO0FBQzdCLDBCQUEwQixtQkFBTyxDQUFDLDhGQUErQjs7QUFFakU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG1CQUFPLENBQUMsZ0VBQWdCO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLGNBQWMsbUJBQU8sQ0FBQyxpRUFBaUI7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0U7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7Ozs7Ozs7Ozs7OztBQ2pHYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUMsU0FBUzs7QUFFVDtBQUNBLDREQUE0RCx3QkFBd0I7QUFDcEY7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEMsK0JBQStCLGFBQWEsRUFBRTtBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDcERhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYixZQUFZLG1CQUFPLENBQUMscURBQVk7O0FBRWhDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDbkVhOztBQUViLFlBQVksbUJBQU8sQ0FBQyxtREFBVTs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDWGE7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHFEQUFZOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGVBQWU7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQmE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLGdFQUFnQjs7QUFFbkM7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLEdBQUcsU0FBUztBQUM1QywyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDRCQUE0QjtBQUM1QixLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOVZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsS0FBSyxJQUEwQztBQUMvQyxFQUFFLG9DQUFPLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUNqQjtBQUNBO0FBQ0EsS0FBSyxJQUEyQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0JBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLEVBQUU7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQSxxRUFBcUU7QUFDckU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7O0FBRUEsU0FBUyxvQkFBb0I7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNsS1ksc0NBQXNDLHNCQUFzQjtBQUN6RSx5Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDBDQUF5RTtBQUNoRztBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvRUFB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSx5Q0FBeUM7O0FBRXpDO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwREFBMEQ7QUFDMUQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsVUFBVTtBQUNyQixXQUFXLEVBQUU7QUFDYjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLGlCQUFpQjtBQUNwQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN2M0RhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELG1CQUFtQixtQkFBTyxDQUFDLGlGQUE0QjtBQUN2RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FB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YyxjQUFjLGNBQWMsY0FBYyxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGNBQWMsY0FBYyxZQUFZLFlBQVksY0FBYyxhQUFhLGFBQWEsY0FBYyxjQUFjLGNBQWMsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsYUFBYSxXQUFXLFdBQVcsYUFBYSxhQUFhLGNBQWMsY0FBYyxhQUFhLGFBQWEsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGFBQWEsYUFBYSxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxjQUFjLGNBQWMsY0FBYyxhQUFhLGFBQWEsY0FBYyxjQUFjLGFBQWEsYUFBYSxjQUFjLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxjQUFjLGNBQWMsWUFBWSxZQUFZLGNBQWMsY0FBYyxZQUFZLGFBQWEsY0FBYyxhQUFhLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLGFBQWEsOEJBQThCLGlCQUFpQixhQUFhLFlBQVksYUFBYSxhQUFhLGVBQWUsWUFBWSxXQUFXLGFBQWEsWUFBWSxhQUFhLGNBQWMsVUFBVSxVQUFVLFVBQVUsZUFBZSxVQUFVLFdBQVcsYUFBYSxXQUFXLGVBQWUsV0FBVyxXQUFXLFdBQVcsYUFBYSxhQUFhLFlBQVksYUFBYSxhQUFhLGVBQWUsWUFBWSxXQUFXLGFBQWEsWUFBWSxhQUFhLGNBQWMsVUFBVSxVQUFVLFVBQVUsZUFBZSxVQUFVLFdBQVcsZ0JBQWdCLGFBQWEsV0FBVyxlQUFlLFdBQVcsV0FBVyxXQUFXLGFBQWEsZ0JBQWdCLGFBQWEsY0FBYyxhQUFhLGNBQWMsY0FBYyxpQkFBaUIsZUFBZSxtQkFBbUIsY0FBYyxh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SytFLG9CQUFMO0FBQ0EsU0FBSy9GLE9BQUwsQ0FBYXVDLHlCQUFiO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0V3RCxzQkFBb0IsR0FBRztBQUNyQnBCLHlEQUFRLENBQUNxQixTQUFULENBQW1CQyxLQUFuQixHQUEyQmhELElBQTNCLENBQWlDM0QsUUFBRCxJQUFjO0FBQzVDLFdBQUs0RCxRQUFMLENBQWM7QUFBRTVELGdCQUFRLEVBQUVBO0FBQVosT0FBZDtBQUNELEtBRkQsRUFFRzhELEtBRkgsQ0FFVUMsS0FBRCxJQUFXO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwrQ0FBWixFQUE2REYsS0FBN0Q7QUFDRCxLQUpEO0FBS0Q7O0FBRURsRCxRQUFNLEdBQUc7QUFDUCxVQUFNO0FBQ0piO0FBREksUUFFRixLQUFLMkMsS0FGVDtBQUlBLFdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBLG1FQUNJLE1BQUMsd0RBQUQ7QUFDRSxjQUFRLEVBQUUzQyxRQURaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUtJLE1BQUMsZ0VBQUQseUZBQ00sS0FBS08sS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTEosQ0FEQSxDQURBLENBREY7QUFlRDs7QUFqRHlCOzswRkFBdEJpRyxHLGlCQVVpQmxGLDREOztBQXdDdEI7QUFFY2tGLGtFQUFmO0FBRUFBLEdBQUcsQ0FBQ3ZHLFNBQUosR0FBZ0I7QUFDZHlGLFNBQU8sRUFBRXhGLGlEQUFTLENBQUNDO0FBREwsQ0FBaEIiLCJmaWxlIjoic3RhdGljL2NodW5rcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5jb25zdCBIZXJvID0gKHsgbWVyY2hhbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuXHJcblxyXG5IZXJvLnByb3BUeXBlcyA9IHtcclxuICAgIG1lcmNoYW50OiBQcm9wVHlwZXMub2JqZWN0LFxyXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0cmlwSHRtbCBmcm9tICdzdHJpbmctc3RyaXAtaHRtbCc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3N0YXRlLmpzJ1xyXG5cclxuXHJcbmNsYXNzIFByb2R1Y3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZUFkZFRvQ2FydCA9IHRoaXMuaGFuZGxlQWRkVG9DYXJ0LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcclxuXHJcbiAgICBoYW5kbGVBZGRUb0NhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmhhbmRsZUFkZFRvQ2FydCh0aGlzLnByb3BzLnByb2R1Y3QuaWQsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBjb25zdCB7IHJlc3VsdCB9ID0gc3RyaXBIdG1sKHByb2R1Y3QuZGVzY3JpcHRpb24pO1xyXG4gICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19jYXJkXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvZHVjdF9faW1hZ2VcIiBzcmM9e3Byb2R1Y3QubWVkaWEuc291cmNlfSBhbHQ9e3Byb2R1Y3QubmFtZX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJvZHVjdF9fbmFtZVwiPntwcm9kdWN0Lm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3RfX2Rlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHByb2R1Y3QgZGVzY3JpcHRpb24gc3RyaXBwZWQgb2YgaHRtbCB0YWdzICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtyZXN1bHR9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0X19wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcmljZS5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkFkZCB0byBjYXJ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdF9fYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRUb0NhcnR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBRdWljayBhZGRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTtcclxuXHJcblByb2R1Y3RJdGVtLnByb3BUeXBlcyA9IHtcclxuICAgIHByb2R1Y3Q6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBvbkFkZFRvQ2FydDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBoYW5kbGVBZGRUb0NhcnQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gfTsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUHJvZHVjdEl0ZW0gZnJvbSAnLi9Qcm9kdWN0SXRlbSc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3N0YXRlLmpzJ1xyXG5cclxuY2xhc3MgUHJvZHVjdHNMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBzdGF0aWMgY29udGV4dFR5cGUgPSBBcHBDb250ZXh0O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5mZXRjaFByb2R1Y3RzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0cyB9ID0gdGhpcy5jb250ZXh0O1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0c1wiIGlkPVwicHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNMaXN0O1xyXG5cclxuUHJvZHVjdHNMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIHByb2R1Y3RzOiBQcm9wVHlwZXMuYXJyYXlcclxufTsiLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgY2FydEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQ0FSVE1TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgcHJvZHVjdEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuUFJPRFVDVFNNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG9yZGVybWFuYWdlbWVudEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuT1JERVJNQU5BR0VNRU5UTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jbGFzcyBBcHBXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhcnRJRDogXCJcIixcclxuICAgICAgb3JkZXI6IHt9LFxyXG4gICAgICBjYXJ0OiB7fSxcclxuICAgICAgaXNDYXJ0VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgY2hlY2tvdXRUb2tlbjoge30sXHJcbiAgICAgIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2U6IHRoaXMubG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZS5iaW5kKHRoaXMpLFxyXG4gICAgICB0b2dnbGVDYXJ0OiB0aGlzLnRvZ2dsZUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlQWRkVG9DYXJ0OiB0aGlzLmhhbmRsZUFkZFRvQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVVcGRhdGVDYXJ0UXR5OiB0aGlzLmhhbmRsZVVwZGF0ZUNhcnRRdHkuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQ6IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlRW1wdHlDYXJ0OiB0aGlzLmhhbmRsZUVtcHR5Q2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBmZXRjaENhcnQ6IHRoaXMuZmV0Y2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIHJlZnJlc2hDYXJ0OiB0aGlzLnJlZnJlc2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUNhcHR1cmVDaGVja291dDogdGhpcy5oYW5kbGVDYXB0dXJlQ2hlY2tvdXQuYmluZCh0aGlzKSxcclxuICAgICAgZmV0Y2hQcm9kdWN0czogdGhpcy5mZXRjaFByb2R1Y3RzLmJpbmQodGhpcyksXHJcbiAgICAgIGdlbmVyYXRlVG9rZW46IHRoaXMuZ2VuZXJhdGVUb2tlbi5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcHJvZHVjdHMgZGF0YSBmcm9tIENoZWMgYW5kIHN0b3JlcyBpbiB0aGUgcHJvZHVjdHMgZGF0YSBvYmplY3QuXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9wcm9kdWN0c1xyXG4gICAqL1xyXG4gIGFzeW5jIGZldGNoUHJvZHVjdHMoKSB7XHJcbiAgICBwcm9kdWN0QVBJLmdldChcIi9nZXRcIikudGhlbigocHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzOiBwcm9kdWN0cy5kYXRhLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgcHJvZHVjdHMnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQ2FydCgpIHtcclxuICAgIGNvbnN0IGNhcnRJRCA9IENvb2tpZXMuZ2V0KCdjYXJ0SUQnKTtcclxuXHJcbiAgICBpZiAoYXdhaXQgdGhpcy5yZXRyaWV2ZUNhcnQoY2FydElEKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcnQgUmV0cmlldmVkIVwiKTtcclxuICAgIH0gZWxzZSBpZiAoYXdhaXQgdGhpcy5jcmVhdGVDYXJ0KCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJ0IENyZWF0ZWQhXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBmZXRjaGluZyB0aGUgY2FydC5cIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQWN0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhIHNhdmVkIG9yZGVyIHJlY2VpcHQgZnJvbSBsb2NhbCBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IHRoZSBjb25maXJtYXRpb24gcGFnZVxyXG4gICAqIGFnYWluIGJldHdlZW4gcGFnZSByZWZyZXNoZXMuXHJcbiAgICovXHJcbiAgbG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyX3JlY2VpcHQnKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXI6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcl9yZWNlaXB0JykpIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGhpZGUgY2FydCBpbiBuYXZcclxuICAgKi9cclxuICB0b2dnbGVDYXJ0KCkge1xyXG4gICAgY29uc3QgeyBpc0NhcnRWaXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzQ2FydFZpc2libGU6ICFpc0NhcnRWaXNpYmxlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLy0+IHN0YXJ0IG9mIGNhcnQgZnVuY3Rpb25zXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHByb2R1Y3QgdG8gdGhlIGN1cnJlbnQgY2FydCBpbiBzZXNzaW9uXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNhZGQtdG8tY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2R1Y3RJZCBUaGUgSUQgb2YgdGhlIHByb2R1Y3QgYmVpbmcgYWRkZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHkgVGhlIHF1YW50aXR5IG9mIHRoZSBwcm9kdWN0IGJlaW5nIGFkZGVkXHJcbiAgICovXHJcbiAgYXN5bmMgaGFuZGxlQWRkVG9DYXJ0KHByb2R1Y3RJZCwgcXVhbnRpdHkpIHtcclxuXHJcbiAgICBhd2FpdCBjYXJ0QVBJLnBvc3QoXCIvYWRkdG9cIiwgeyBjYXJ0SUQ6IHRoaXMuc3RhdGUuY2FydElELCBwcm9kdWN0SWQ6IHByb2R1Y3RJZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGl0ZW0uZGF0YS5jYXJ0IH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gYWRkaW5nIGEgY2FydCBpdGVtJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGxpbmVfaXRlbXMgaW4gY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jdXBkYXRlLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lSXRlbUlkIElEIG9mIHRoZSBjYXJ0IGxpbmUgaXRlbSBiZWluZyB1cGRhdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1YW50aXR5IE5ldyBsaW5lIGl0ZW0gcXVhbnRpdHkgdG8gdXBkYXRlXHJcbiAgICovXHJcbiAgaGFuZGxlVXBkYXRlQ2FydFF0eShsaW5lSXRlbUlkLCBxdWFudGl0eSkge1xyXG4gICAgY2FydEFQSS5wdXQoXCIvdXBkYXRlcXR5XCIsIHsgY2FydElEOiB0aGlzLnN0YXRlLmNhcnRJRCwgbGluZUl0ZW1JZDogbGluZUl0ZW1JZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyB0aGUgY2FydCBpdGVtcycsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBsaW5lIGl0ZW0gZnJvbSBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNyZW1vdmUtZnJvbS1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZUl0ZW1JZCBJRCBvZiB0aGUgbGluZSBpdGVtIGJlaW5nIHJlbW92ZWRcclxuICAgKi9cclxuICBoYW5kbGVSZW1vdmVGcm9tQ2FydChsaW5lSXRlbUlkKSB7XHJcbiAgICBjYXJ0QVBJLmRlbGV0ZShcIi9yZW1vdmVmcm9tL1wiICsgdGhpcy5zdGF0ZS5jYXJ0SUQgKyBcIi9cIiArIGxpbmVJdGVtSWQpLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHJlbW92aW5nIHRoZSBpdGVtIGZyb20gdGhlIGNhcnQnLCBlcnJvcik7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbXB0aWVzIGNhcnQgY29udGVudHNcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3JlbW92ZS1mcm9tLWNhcnRcclxuICAgKi9cclxuICBhc3luYyBoYW5kbGVFbXB0eUNhcnQoKSB7XHJcbiAgICBhd2FpdCBjYXJ0QVBJLmRlbGV0ZShcIi9lbXB0eS9cIiArIHRoaXMuc3RhdGUuY2FydElEKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBlbXB0eWluZyB0aGUgY2FydCcsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDcmVhdGVzIGEgY2FydFxyXG4gICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0XHJcbiAgKi9cclxuICBhc3luYyBjcmVhdGVDYXJ0KCkge1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9jcmVhdGVcIikudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoJ2NhcnRJRCcsIGNhcnQuZGF0YS5pZCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJldHJpZXZlQ2FydChjYXJ0SUQpIHtcclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9mZXRjaC9cIiArIGNhcnRJRCkudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZnJlc2hlcyB0byBhIG5ldyBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0I3JlZnJlc2gtY2FydFxyXG4gICAqL1xyXG4gIHJlZnJlc2hDYXJ0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVDYXJ0KCk7XHJcbiAgfVxyXG4gIC8vPT4gZW5kIGZvIGNhcnQgZnVuY3Rpb25zXHJcblxyXG4gIC8qKlxyXG4gICAqIENhcHR1cmVzIHRoZSBjaGVja291dFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjY2FwdHVyZS1vcmRlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoZWNrb3V0VG9rZW5JZCBUaGUgSUQgb2YgdGhlIGNoZWNrb3V0IHRva2VuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG5ld09yZGVyIFRoZSBuZXcgb3JkZXIgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBoYW5kbGVDYXB0dXJlQ2hlY2tvdXQoY2hlY2tvdXRUb2tlbklkLCBuZXdPcmRlcikge1xyXG5cclxuICAgIG9yZGVybWFuYWdlbWVudEFQSS5wb3N0KFwiL2NoZWNrb3V0L2NyZWF0ZVwiLClcclxuICAgIGNvbW1lcmNlLmNoZWNrb3V0LmNhcHR1cmUoY2hlY2tvdXRUb2tlbklkLCBuZXdPcmRlcikudGhlbigob3JkZXIpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG9yZGVyOiBvcmRlcixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBTdG9yZSB0aGUgb3JkZXIgaW4gc2Vzc2lvbiBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IGl0IGFnYWluXHJcbiAgICAgIC8vIGlmIHRoZSB1c2VyIHJlZnJlc2hlcyB0aGUgcGFnZSFcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlcl9yZWNlaXB0JywgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcclxuICAgICAgLy8gQ2xlYXJzIHRoZSBjYXJ0XHJcbiAgICAgIHRoaXMucmVmcmVzaENhcnQoKTtcclxuICAgICAgLy8gU2VuZCB0aGUgdXNlciB0byB0aGUgcmVjZWlwdFxyXG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NvbmZpcm1hdGlvbicpO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgY29uZmlybWluZyB5b3VyIG9yZGVyJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICAqICBHZW5lcmF0ZXMgYSBjaGVja291dCB0b2tlblxyXG4gICAgICogIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjZ2VuZXJhdGUtdG9rZW5cclxuICAgICAqL1xyXG4gIGdlbmVyYXRlQ2hlY2tvdXRUb2tlbigpIHtcclxuXHJcbiAgICBjb25zdCB7IGNhcnQgfSA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICBpZiAoY2FydC5saW5lX2l0ZW1zLmxlbmd0aCkge1xyXG5cclxuICAgICAgb3JkZXJtYW5hZ2VtZW50QVBJLmdldChcIi9jaGVja291dC9nZW5lcmF0ZS90b2tlblwiLCB7IGNhcnRJRDogY2FydC5pZCB9KS50aGVuKHRva2VuID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb2tlbjogdG9rZW4gfSk7XHJcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGluIGdlbmVyYXRpbmcgYSB0b2tlbicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNhcnQubGluZV9pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGNvbW1lcmNlLmNoZWNrb3V0LmdlbmVyYXRlVG9rZW4oY2FydC5pZCwgeyB0eXBlOiAnY2FydCcgfSlcclxuICAgICAgICAudGhlbigodG9rZW4pID0+IHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRva2VuOiB0b2tlbiB9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmZldGNoU2hpcHBpbmdDb3VudHJpZXModGhpcy5zdGF0ZS5jaGVja291dFRva2VuLmlkKSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGluIGdlbmVyYXRpbmcgYSB0b2tlbicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBXcmFwcGVyIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iLCJpbXBvcnQgQ29tbWVyY2UgZnJvbSBcIkBjaGVjL2NvbW1lcmNlLmpzXCI7XHJcblxyXG5jb25zdCBjb21tZXJjZUFQSUtFWSA9IHByb2Nlc3MuZW52LkNPTU1FUkNFUFVCTElDS0VZO1xyXG5cclxuaWYgKCFjb21tZXJjZUFQSUtFWSkge1xyXG4gICAgdGhyb3cgRXJyb3IoJ1lvdXIgcHVibGljIEFQSSBrZXkgbXVzdCBiZSBwcm92aWRlZCBhcyBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZScpO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb21tZXJjZShjb21tZXJjZUFQSUtFWSwgdHJ1ZSk7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXN5bmNUb0dlbmVyYXRvcjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjaztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi4uL2RlZmluZVByb3BlcnR5L19pbmRleC5tanNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi4vZXh0ZW5kcy9faW5kZXgubWpzXCIiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgYXJyYXlXaXRob3V0SG9sZXMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhvdXRIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVNwcmVhZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkXCIpO1xuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9Db25zdW1hYmxlQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsInZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIiksX3RvQ29uc3VtYWJsZUFycmF5PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpLF90eXBlb2Y9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpLF9kZWZpbmVQcm9wZXJ0eT1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSxfY2xhc3NDYWxsQ2hlY2s9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiksX2NyZWF0ZUNsYXNzPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpLF9yZWdlbmVyYXRvclJ1bnRpbWU9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIpLF9hc3luY1RvR2VuZXJhdG9yPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiksYXhpb3M9cmVxdWlyZShcImF4aW9zXCIpO2Z1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdExlZ2FjeShlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJlwiZGVmYXVsdFwiaW4gZT9lOntkZWZhdWx0OmV9fXZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNfX2RlZmF1bHQ9X2ludGVyb3BEZWZhdWx0TGVnYWN5KF9vYmplY3RXaXRob3V0UHJvcGVydGllcyksX3RvQ29uc3VtYWJsZUFycmF5X19kZWZhdWx0PV9pbnRlcm9wRGVmYXVsdExlZ2FjeShfdG9Db25zdW1hYmxlQXJyYXkpLF90eXBlb2ZfX2RlZmF1bHQ9X2ludGVyb3BEZWZhdWx0TGVnYWN5KF90eXBlb2YpLF9kZWZpbmVQcm9wZXJ0eV9fZGVmYXVsdD1faW50ZXJvcERlZmF1bHRMZWdhY3koX2RlZmluZVByb3BlcnR5KSxfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHQ9X2ludGVyb3BEZWZhdWx0TGVnYWN5KF9jbGFzc0NhbGxDaGVjayksX2NyZWF0ZUNsYXNzX19kZWZhdWx0PV9pbnRlcm9wRGVmYXVsdExlZ2FjeShfY3JlYXRlQ2xhc3MpLF9yZWdlbmVyYXRvclJ1bnRpbWVfX2RlZmF1bHQ9X2ludGVyb3BEZWZhdWx0TGVnYWN5KF9yZWdlbmVyYXRvclJ1bnRpbWUpLF9hc3luY1RvR2VuZXJhdG9yX19kZWZhdWx0PV9pbnRlcm9wRGVmYXVsdExlZ2FjeShfYXN5bmNUb0dlbmVyYXRvciksYXhpb3NfX2RlZmF1bHQ9X2ludGVyb3BEZWZhdWx0TGVnYWN5KGF4aW9zKSxTdG9yYWdlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHQuZGVmYXVsdCh0aGlzLGUpLHRoaXMuY29tbWVyY2U9dH1yZXR1cm4gX2NyZWF0ZUNsYXNzX19kZWZhdWx0LmRlZmF1bHQoZSxbe2tleTpcInNldFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxyKXtpZighZG9jdW1lbnQpcmV0dXJuIG51bGw7dmFyIG4sbz1cIlwiO2lmKG49dGhpcy5jb21tZXJjZS5vcHRpb25zLmNvbmZpZyYmdm9pZCAwIT09dGhpcy5jb21tZXJjZS5vcHRpb25zLmNvbmZpZy5jb29raWVfcGF0aD90aGlzLmNvbW1lcmNlLm9wdGlvbnMuY29uZmlnLmNvb2tpZV9wYXRoOlwiL1wiLHIpe3ZhciBjPW5ldyBEYXRlO2Muc2V0VGltZShjLmdldFRpbWUoKSsyNCpyKjYwKjYwKjFlMyksbz1cIjsgZXhwaXJlcz1cIitjLnRvR01UU3RyaW5nKCl9cmV0dXJuIGRvY3VtZW50LmNvb2tpZT1lK1wiPVwiK3QrbytcIjsgcGF0aD1cIitufX0se2tleTpcImdldFwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKCFkb2N1bWVudClyZXR1cm4gbnVsbDtlKz1cIj1cIjtmb3IodmFyIHQ9MCxyPUFycmF5LmZyb20oZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKSk7dDxyLmxlbmd0aDt0Kyspe2Zvcih2YXIgbj1yW3RdO1wiIFwiPT09bi5jaGFyQXQoMCk7KW49bi5zdWJzdHJpbmcoMSxuLmxlbmd0aCk7aWYoMD09PW4uaW5kZXhPZihlKSlyZXR1cm4gbi5zdWJzdHJpbmcoZS5sZW5ndGgsbi5sZW5ndGgpfXJldHVybiBudWxsfX0se2tleTpcInJlbW92ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLnNldChlLFwiXCIsLTEpfX1dKSxlfSgpLENhcnQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQpe19jbGFzc0NhbGxDaGVja19fZGVmYXVsdC5kZWZhdWx0KHRoaXMsZSksdGhpcy5jb21tZXJjZT10LHRoaXMuY2FydElkPW51bGx9dmFyIHQ7cmV0dXJuIF9jcmVhdGVDbGFzc19fZGVmYXVsdC5kZWZhdWx0KGUsW3trZXk6XCJyZWZyZXNoXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJjYXJ0c1wiKS50aGVuKChmdW5jdGlvbih0KXt2YXIgcj10LmlkO3JldHVybiBlLmNvbW1lcmNlLnN0b3JhZ2Uuc2V0KFwiY29tbWVyY2Vqc19jYXJ0X2lkXCIsciwzMCksZS5jYXJ0SWQ9cix0fSkpfX0se2tleTpcImlkXCIsdmFsdWU6ZnVuY3Rpb24oKXtpZihudWxsIT09dGhpcy5jYXJ0SWQpcmV0dXJuIHRoaXMuY2FydElkO3ZhciBlPXRoaXMuY29tbWVyY2Uuc3RvcmFnZS5nZXQoXCJjb21tZXJjZWpzX2NhcnRfaWRcIik7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJmUubGVuZ3RoP2U6bnVsbH19LHtrZXk6XCJyZXF1ZXN0XCIsdmFsdWU6KHQ9X2FzeW5jVG9HZW5lcmF0b3JfX2RlZmF1bHQuZGVmYXVsdChfcmVnZW5lcmF0b3JSdW50aW1lX19kZWZhdWx0LmRlZmF1bHQubWFyaygoZnVuY3Rpb24gZSgpe3ZhciB0LHIsbixvLGMsYT10aGlzLHM9YXJndW1lbnRzO3JldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lX19kZWZhdWx0LmRlZmF1bHQud3JhcCgoZnVuY3Rpb24oZSl7Zm9yKDs7KXN3aXRjaChlLnByZXY9ZS5uZXh0KXtjYXNlIDA6aWYodD1zLmxlbmd0aD4wJiZ2b2lkIDAhPT1zWzBdP3NbMF06XCJcIixyPXMubGVuZ3RoPjEmJnZvaWQgMCE9PXNbMV0/c1sxXTpcImdldFwiLG49cy5sZW5ndGg+MiYmdm9pZCAwIT09c1syXT9zWzJdOm51bGwsbz1zLmxlbmd0aD4zJiZ2b2lkIDAhPT1zWzNdJiZzWzNdLGM9XCJzdHJpbmdcIj09dHlwZW9mIHQmJnQubGVuZ3RoP1wiL1wiLmNvbmNhdCh0KTpcIlwiLHRoaXMuaWQoKSl7ZS5uZXh0PTg7YnJlYWt9cmV0dXJuIGUubmV4dD04LHRoaXMucmVmcmVzaCgpO2Nhc2UgODpyZXR1cm4gZS5hYnJ1cHQoXCJyZXR1cm5cIix0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJjYXJ0cy9cIi5jb25jYXQodGhpcy5pZCgpKS5jb25jYXQoYykscixuLG8pLmNhdGNoKChmdW5jdGlvbihlKXtpZihlLnN0YXR1c0NvZGUmJjQwND09PWUuc3RhdHVzQ29kZSlyZXR1cm4gYS5yZWZyZXNoKCkudGhlbigoZnVuY3Rpb24oKXtyZXR1cm4gYS5jb21tZXJjZS5yZXF1ZXN0KFwiY2FydHMvXCIuY29uY2F0KGEuaWQoKSkuY29uY2F0KGMpLHIsbixvKX0pKTt0aHJvdyBlfSkpKTtjYXNlIDk6Y2FzZVwiZW5kXCI6cmV0dXJuIGUuc3RvcCgpfX0pLGUsdGhpcyl9KSkpLGZ1bmN0aW9uKCl7cmV0dXJuIHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSl9LHtrZXk6XCJhZGRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MSxyPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsLG49e2lkOlwib2JqZWN0XCI9PT1fdHlwZW9mX19kZWZhdWx0LmRlZmF1bHQoZSk/ZS5pZDplLHF1YW50aXR5OnQsdmFyaWFudDpyfTtyZXR1cm4gdGhpcy5yZXF1ZXN0KFwiXCIsXCJwb3N0XCIsbil9fSx7a2V5OlwicmV0cmlldmVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbDtyZXR1cm4gdCYmKHRoaXMuY2FydElkPXQpLHRoaXMucmVxdWVzdCgpLnRoZW4oKGZ1bmN0aW9uKHQpe3JldHVybiBlLmNhcnRJZD10JiZ0LmlkfHxudWxsLHR9KSl9fSx7a2V5OlwiY2hlY2tRdWFudGl0eVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuY29tbWVyY2UucmVxdWVzdChcInByb2R1Y3RzL1wiLmNvbmNhdChlKSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIHQ8PWUucXVhbnRpdHl9KSl9fSx7a2V5OlwicmVtb3ZlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMucmVxdWVzdChcIml0ZW1zL1wiLmNvbmNhdChlKSxcImRlbGV0ZVwiKX19LHtrZXk6XCJkZWxldGVcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnJlcXVlc3QoXCJcIixcImRlbGV0ZVwiKX19LHtrZXk6XCJ1cGRhdGVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLnJlcXVlc3QoXCJpdGVtcy9cIi5jb25jYXQoZSksXCJwdXRcIix0KX19LHtrZXk6XCJjb250ZW50c1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucmVxdWVzdChcIml0ZW1zXCIpfX0se2tleTpcImVtcHR5XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZXF1ZXN0KFwiaXRlbXNcIixcImRlbGV0ZVwiKX19XSksZX0oKSxDYXRlZ29yaWVzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHQuZGVmYXVsdCh0aGlzLGUpLHRoaXMuY29tbWVyY2U9dH1yZXR1cm4gX2NyZWF0ZUNsYXNzX19kZWZhdWx0LmRlZmF1bHQoZSxbe2tleTpcImxpc3RcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGU/dGhpcy5jb21tZXJjZS5yZXF1ZXN0KFwiY2F0ZWdvcmllc1wiKTp0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJjYXRlZ29yaWVzXCIsXCJnZXRcIixlKX19LHtrZXk6XCJyZXRyaWV2ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtyZXR1cm4gdGhpcy5jb21tZXJjZS5yZXF1ZXN0KFwiY2F0ZWdvcmllcy9cIi5jb25jYXQoZSksXCJnZXRcIix0KX19XSksZX0oKSxDaGVja291dD1mdW5jdGlvbigpe2Z1bmN0aW9uIENoZWNrb3V0KGUpe19jbGFzc0NhbGxDaGVja19fZGVmYXVsdC5kZWZhdWx0KHRoaXMsQ2hlY2tvdXQpLHRoaXMuY29tbWVyY2U9ZX1yZXR1cm4gX2NyZWF0ZUNsYXNzX19kZWZhdWx0LmRlZmF1bHQoQ2hlY2tvdXQsW3trZXk6XCJwcm90ZWN0XCIsdmFsdWU6ZnVuY3Rpb24gcHJvdGVjdCh0b2tlbil7cmV0dXJuIHRoaXMuY29tbWVyY2UucmVxdWVzdChcImNoZWNrb3V0cy9cIi5jb25jYXQodG9rZW4sXCIvcHJvdGVjdFwiKSkudGhlbigoZnVuY3Rpb24oZGF0YSl7cmV0dXJuIGV2YWwoZGF0YS5zaWZ0X2pzKX0pKX19LHtrZXk6XCJnZW5lcmF0ZVRva2VuXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5jb21tZXJjZS5yZXF1ZXN0KFwiY2hlY2tvdXRzL1wiLmNvbmNhdChlKSxcImdldFwiLHQpfX0se2tleTpcImdlbmVyYXRlVG9rZW5Gcm9tXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZighW1wicHJvZHVjdF9pZFwiLFwiY2FydFwiLFwicGVybWFsaW5rXCJdLmluY2x1ZGVzKGUpKXRocm93IG5ldyBFcnJvcignQ2Fubm90IGdlbmVyYXRlIGEgdG9rZW4gd2l0aCB1bmtub3duIFwiJy5jb25jYXQoZSwnXCIgdHlwZScpKTtyZXR1cm4gdGhpcy5nZW5lcmF0ZVRva2VuKHQse3R5cGU6ZX0pfX0se2tleTpcImNhcHR1cmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXM7cmV0dXJuIHRoaXMuY29tbWVyY2UucmVxdWVzdChcImNoZWNrb3V0cy9cIi5jb25jYXQoZSksXCJwb3N0XCIsdCkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIHIuY29tbWVyY2UuY2FydC5yZWZyZXNoKCksZX0pKX19LHtrZXk6XCJyZWNlaXB0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuY29tbWVyY2UucmVxdWVzdChcImNoZWNrb3V0cy9cIi5jb25jYXQoZSxcIi9yZWNlaXB0XCIpKX19LHtrZXk6XCJjaGVja1BheVdoYXRZb3VXYW50XCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5jb21tZXJjZS5yZXF1ZXN0KFwiY2hlY2tvdXRzL1wiLmNvbmNhdChlLFwiL2NoZWNrL3BheV93aGF0X3lvdV93YW50XCIpLFwiZ2V0XCIsdCl9fSx7a2V5OlwiZmllbGRzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuY29tbWVyY2UucmVxdWVzdChcImNoZWNrb3V0cy9cIi5jb25jYXQoZSxcIi9maWVsZHNcIikpfX0se2tleTpcInNldFRheFpvbmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJjaGVja291dHMvXCIuY29uY2F0KGUsXCIvaGVscGVyL3NldF90YXhfem9uZVwiKSxcImdldFwiLHQpfX0se2tleTpcImdldExvY2F0aW9uRnJvbUlQXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOlwiXCIscj10JiZ0Lmxlbmd0aD9cIj9pcF9hZGRyZXNzPVwiLmNvbmNhdCh0KTpcIlwiO3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJjaGVja291dHMvXCIuY29uY2F0KGUsXCIvaGVscGVyL2xvY2F0aW9uX2Zyb21faXBcIikuY29uY2F0KHIpKX19LHtrZXk6XCJpc0ZyZWVcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5jb21tZXJjZS5yZXF1ZXN0KFwiY2hlY2tvdXRzL1wiLmNvbmNhdChlLFwiL2NoZWNrL2lzX2ZyZWVcIikpfX0se2tleTpcImNoZWNrVmFyaWFudFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxyKXtyZXR1cm4gdGhpcy5jb21tZXJjZS5yZXF1ZXN0KFwiY2hlY2tvdXRzL1wiLmNvbmNhdChlLFwiL2NoZWNrL1wiKS5jb25jYXQodCxcIi92YXJpYW50XCIpLFwiZ2V0XCIscil9fSx7a2V5OlwiY2hlY2tEaXNjb3VudFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuY29tbWVyY2UucmVxdWVzdChcImNoZWNrb3V0cy9cIi5jb25jYXQoZSxcIi9jaGVjay9kaXNjb3VudFwiKSxcImdldFwiLHQpfX0se2tleTpcImNoZWNrU2hpcHBpbmdPcHRpb25cIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJjaGVja291dHMvXCIuY29uY2F0KGUsXCIvY2hlY2svc2hpcHBpbmdcIiksXCJnZXRcIix0KX19LHtrZXk6XCJnZXRTaGlwcGluZ09wdGlvbnNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJjaGVja291dHMvXCIuY29uY2F0KGUsXCIvaGVscGVyL3NoaXBwaW5nX29wdGlvbnNcIiksXCJnZXRcIix0KX19LHtrZXk6XCJjaGVja1F1YW50aXR5XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJjaGVja291dHMvXCIuY29uY2F0KGUsXCIvY2hlY2svXCIpLmNvbmNhdCh0LFwiL3F1YW50aXR5XCIpLFwiZ2V0XCIscil9fSx7a2V5OlwiaGVscGVyVmFsaWRhdGlvblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJjaGVja291dHMvXCIuY29uY2F0KGUsXCIvaGVscGVyL3ZhbGlkYXRpb25cIikpfX0se2tleTpcImdldExpdmVcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5jb21tZXJjZS5yZXF1ZXN0KFwiY2hlY2tvdXRzL1wiLmNvbmNhdChlLFwiL2xpdmVcIikpfX0se2tleTpcImdldFRva2VuXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuY29tbWVyY2UucmVxdWVzdChcImNoZWNrb3V0cy90b2tlbnMvXCIuY29uY2F0KGUpKX19LHtrZXk6XCJjaGVja0dpZnRjYXJkXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5jb21tZXJjZS5yZXF1ZXN0KFwiY2hlY2tvdXRzL1wiLmNvbmNhdChlLFwiL2NoZWNrL2dpZnRjYXJkXCIpLFwiZ2V0XCIsdCl9fV0pLENoZWNrb3V0fSgpO2Z1bmN0aW9uIG93bktleXMoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/b3duS2V5cyhyLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtfZGVmaW5lUHJvcGVydHlfX2RlZmF1bHQuZGVmYXVsdChlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6b3duS2V5cyhyKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9dmFyIEN1c3RvbWVyPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHQuZGVmYXVsdCh0aGlzLGUpLHRoaXMuY29tbWVyY2U9dCx0aGlzLmRhdGE9e319cmV0dXJuIF9jcmVhdGVDbGFzc19fZGVmYXVsdC5kZWZhdWx0KGUsW3trZXk6XCJsb2dpblwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuY29tbWVyY2UucmVxdWVzdChcImN1c3RvbWVycy9lbWFpbC10b2tlblwiLFwicG9zdFwiLHtlbWFpbDplLGJhc2VfdXJsOnR9KX19LHtrZXk6XCJnZXRUb2tlblwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdO3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJjdXN0b21lcnMvZXhjaGFuZ2UtdG9rZW5cIixcInBvc3RcIix7dG9rZW46ZX0pLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiByJiYoZS5jdXN0b21lcl9pZHx8ZS5qd3QpJiYodC5kYXRhPXtpZDplLmN1c3RvbWVyX2lkfHxudWxsLHRva2VuOmUuand0fHxudWxsfSx3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb21tZXJjZWpzX2N1c3RvbWVyX2lkXCIsdC5kYXRhLmlkKSx3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb21tZXJjZWpzX2N1c3RvbWVyX3Rva2VuXCIsdC5kYXRhLnRva2VuKSksZX0pKX19LHtrZXk6XCJ1cGRhdGVcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSx0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsLHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7cmV0dXJuIHRoaXMuX2Fzc2VydEFyZ3NQcm92aWRlZCh0LHIpLHRoaXMuX3JlcXVlc3QoXCJjdXN0b21lcnMvXCIuY29uY2F0KHR8fHRoaXMuaWQoKSksXCJQVVRcIixlLHt9LHIpfX0se2tleTpcImdldE9yZGVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOm51bGwsdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06bnVsbCxyPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp7fTt0aGlzLl9hc3NlcnRBcmdzUHJvdmlkZWQoZSx0KTt2YXIgbj1fb2JqZWN0U3ByZWFkKHtzb3J0Qnk6XCJjcmVhdGVkXCIsc29ydERpcmVjdGlvbjpcImRlc2NcIn0scik7cmV0dXJuIHRoaXMuX3JlcXVlc3QoXCJjdXN0b21lcnMvXCIuY29uY2F0KGV8fHRoaXMuaWQoKSxcIi9vcmRlcnNcIiksXCJnZXRcIixuLHt9LHQpfX0se2tleTpcImdldE9yZGVyXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm51bGwscj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtyZXR1cm4gdGhpcy5fYXNzZXJ0QXJnc1Byb3ZpZGVkKHQsciksdGhpcy5fcmVxdWVzdChcImN1c3RvbWVycy9cIi5jb25jYXQodHx8dGhpcy5pZCgpLFwiL29yZGVycy9cIikuY29uY2F0KGUpLFwiZ2V0XCIse30se30scil9fSx7a2V5OlwiYWJvdXRcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9yZXF1ZXN0KFwiY3VzdG9tZXJzL1wiLmNvbmNhdCh0aGlzLmlkKCkpKX19LHtrZXk6XCJpZFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Zyb21TdG9yYWdlKFwiaWRcIil9fSx7a2V5OlwidG9rZW5cIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mcm9tU3RvcmFnZShcInRva2VuXCIpfX0se2tleTpcImlzTG9nZ2VkSW5cIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBudWxsIT09dGhpcy5pZCgpJiZudWxsIT09dGhpcy50b2tlbigpfX0se2tleTpcImxvZ291dFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5kYXRhPXt9LHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImNvbW1lcmNlanNfY3VzdG9tZXJfaWRcIiksd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiY29tbWVyY2Vqc19jdXN0b21lcl90b2tlblwiKX19LHtrZXk6XCJfZnJvbVN0b3JhZ2VcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLmRhdGFbZV0mJnRoaXMuZGF0YVtlXS5sZW5ndGgpcmV0dXJuIHRoaXMuZGF0YVtlXTt2YXIgdD13aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb21tZXJjZWpzX2N1c3RvbWVyX1wiLmNvbmNhdChlKSk7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQmJnQubGVuZ3RoP3Q6bnVsbH19LHtrZXk6XCJfcmVxdWVzdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpcImdldFwiLHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGwsbj1hcmd1bWVudHMubGVuZ3RoPjMmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106e30sbz1hcmd1bWVudHMubGVuZ3RoPjQmJnZvaWQgMCE9PWFyZ3VtZW50c1s0XT9hcmd1bWVudHNbNF06bnVsbCxjPW98fHRoaXMudG9rZW4oKTtyZXR1cm4gdGhpcy5jb21tZXJjZS5yZXF1ZXN0KGUsdCxyLF9vYmplY3RTcHJlYWQoe1wiWC1BdXRob3JpemF0aW9uXCI6dm9pZCAwLEF1dGhvcml6YXRpb246XCJCZWFyZXIgXCIuY29uY2F0KGMpfSxuKSxjKX19LHtrZXk6XCJfYXNzZXJ0QXJnc1Byb3ZpZGVkXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06bnVsbCx0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsO2lmKG51bGw9PT1lJiYhdGhpcy5pZCgpKXRocm93IG5ldyBFcnJvcihcIkEgY3VzdG9tZXIgSUQgbXVzdCBiZSBwcm92aWRlZCB3aGVuIGN1c3RvbWVyIGlzIG5vdCBsb2dnZWQgaW5cIik7aWYobnVsbD09PXQmJiF0aGlzLnRva2VuKCkpdGhyb3cgbmV3IEVycm9yKFwiQSBjdXN0b21lciBhY2Nlc3MgdG9rZW4gbXVzdCBiZSBwcm92aWRlZCB3aGVuIGN1c3RvbWVyIGlzIG5vdCBsb2dnZWQgaW5cIil9fV0pLGV9KCksTWVyY2hhbnRzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHQuZGVmYXVsdCh0aGlzLGUpLHRoaXMuY29tbWVyY2U9dH1yZXR1cm4gX2NyZWF0ZUNsYXNzX19kZWZhdWx0LmRlZmF1bHQoZSxbe2tleTpcImFib3V0XCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb21tZXJjZS5yZXF1ZXN0KFwibWVyY2hhbnRzXCIpfX1dKSxlfSgpLFByb2R1Y3RzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHQuZGVmYXVsdCh0aGlzLGUpLHRoaXMuY29tbWVyY2U9dH1yZXR1cm4gX2NyZWF0ZUNsYXNzX19kZWZhdWx0LmRlZmF1bHQoZSxbe2tleTpcImxpc3RcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpudWxsO3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJwcm9kdWN0c1wiLFwiZ2V0XCIsZSl9fSx7a2V5OlwicmV0cmlldmVcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307cmV0dXJuIHRoaXMuY29tbWVyY2UucmVxdWVzdChcInByb2R1Y3RzL1wiLmNvbmNhdChlKSxcImdldFwiLHQpfX1dKSxlfSgpLFNlcnZpY2VzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHQuZGVmYXVsdCh0aGlzLGUpLHRoaXMuY29tbWVyY2U9dH1yZXR1cm4gX2NyZWF0ZUNsYXNzX19kZWZhdWx0LmRlZmF1bHQoZSxbe2tleTpcImxvY2FsZUxpc3RDb3VudHJpZXNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJzZXJ2aWNlcy9sb2NhbGUvY291bnRyaWVzXCIpfX0se2tleTpcImxvY2FsZUxpc3RTaGlwcGluZ0NvdW50cmllc1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJzZXJ2aWNlcy9sb2NhbGUvXCIuY29uY2F0KGUsXCIvY291bnRyaWVzXCIpKX19LHtrZXk6XCJsb2NhbGVMaXN0U2hpcHBpbmdTdWJkaXZpc2lvbnNcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLmNvbW1lcmNlLnJlcXVlc3QoXCJzZXJ2aWNlcy9sb2NhbGUvXCIuY29uY2F0KGUsXCIvY291bnRyaWVzL1wiKS5jb25jYXQodCxcIi9zdWJkaXZpc2lvbnNcIikpfX0se2tleTpcImxvY2FsZUxpc3RTdWJkaXZpc2lvbnNcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5jb21tZXJjZS5yZXF1ZXN0KFwic2VydmljZXMvbG9jYWxlL1wiLmNvbmNhdChlLFwiL3N1YmRpdmlzaW9uc1wiKSl9fV0pLGV9KCksRmVhdHVyZXM9e0NhcnQ6Q2FydCxDYXRlZ29yaWVzOkNhdGVnb3JpZXMsQ2hlY2tvdXQ6Q2hlY2tvdXQsQ3VzdG9tZXI6Q3VzdG9tZXIsTWVyY2hhbnRzOk1lcmNoYW50cyxQcm9kdWN0czpQcm9kdWN0cyxTZXJ2aWNlczpTZXJ2aWNlc30sY29uc29sZUhlbHBlcj1mdW5jdGlvbigpe3ZhciBlLHQscixuLG8sYz1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJibGFja1wiLGE9YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDAscz1hcmd1bWVudHMubGVuZ3RoPjI/YXJndW1lbnRzWzJdOnZvaWQgMCxpPWFyZ3VtZW50cy5sZW5ndGg+Mz9hcmd1bWVudHNbM106dm9pZCAwLHU9ITE7c3dpdGNoKGMpe2Nhc2VcInN1Y2Nlc3NcIjpjPVwiIzQ4OGY1YVwiLGU9XCLinIUgICBcIjticmVhaztjYXNlXCJpbmZvXCI6Yz1cIkRvZGdlckJsdWVcIixlPVwiXCI7YnJlYWs7Y2FzZVwiZXJyb3JcIjpjPVwicmdiYSgyNDQsIDY3LCA1NCwgMSlcIixcInZhbGlkYXRpb25cIj09PWkuZXJyb3IudHlwZT8oZT1cIvCfmqsgVmFsaWRhdGlvbi9taXNzaW5nIGZpZWxkc1wiLGE9XCJcIik6ZT1cIuKdjCBIVFRQIEVSUk9SIFwiLHU9ITA7YnJlYWs7Y2FzZVwid2FybmluZ1wiOmM9XCJyZ2JhKDIwOCwgMTU0LCAzNSwgMSlcIixlPVwi4pqg77iPICBcIn1pZighMD09PXUpe2lmKGNvbnNvbGUubG9nKFwiJWNcIitlK2EsXCJjb2xvcjpcIitjK1wiO2Rpc3BsYXk6YmxvY2s7IHdpZHRoOiAxMDAlO3BhZGRpbmc6MnB4IDJweCAycHggMHB4O2ZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSwgU2Fucy1zZXJpZjtmb250LXdlaWdodDpib2xkO2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDQsIDY3LCA1NCwgMC4xNSk7XCIpLFwib2JqZWN0XCI9PT1fdHlwZW9mX19kZWZhdWx0LmRlZmF1bHQoaS5lcnJvci5tZXNzYWdlKSl7Zm9yKHQ9MCxyPShuPWkuZXJyb3IubWVzc2FnZSkubGVuZ3RoLG89W107dDxyOyljb25zb2xlLmxvZyhcIiVjXCIrblt0XS5maWVsZCtcIiAlY1wiK25bdF0uZXJyb3IsXCJjb2xvcjojNTE1RDZEO2ZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSwgU2Fucy1zZXJpZjtmb250LXdlaWdodDo4MDA7XCIsXCJjb2xvcjojNTE1RDZEO2ZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSwgU2Fucy1zZXJpZjtmb250LXdlaWdodDo0MDA7XCIpLG8ucHVzaCh0KyspO3JldHVybiBvfXJldHVybiBjb25zb2xlLmxvZyhcIiVjXCIraS5lcnJvci5tZXNzYWdlLFwiY29sb3I6IzUxNUQ2RDtmb250LWZhbWlseTogT3BlbiBTYW5zLCBIZWx2ZXRpY2EsIFNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NDAwO1wiKX1pZihcIm9iamVjdFwiPT09X3R5cGVvZl9fZGVmYXVsdC5kZWZhdWx0KGMpKXJldHVybiBjb25zb2xlLmxvZyhcIiVjXCIrYSxcImNvbG9yOiBQb3dkZXJCbHVlO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6IE9wZW4gU2FucywgSGVsdmV0aWNhLCBTYW5zLXNlcmlmOyBiYWNrZ3JvdW5kLWNvbG9yOiBSb3lhbEJsdWU7XCIpLHZvaWQgY29uc29sZS5sb2coYyk7Y29uc29sZS5sb2coXCIlY1wiK2UrYSxcImNvbG9yOlwiK2MrXCI7ZGlzcGxheTpibG9jaztmb250LWZhbWlseTogT3BlbiBTYW5zLCBIZWx2ZXRpY2EsIFNhbnMtc2VyaWY7bGluZS1oZWlnaHQ6MjhweDsgd2lkdGg6IDEwMCU7cGFkZGluZzoycHggMnB4IDJweCAwcHg7Zm9udC13ZWlnaHQ6Ym9sZDtcIikscyYmY29uc29sZS5sb2coXCIlY1wiK3MsXCJjb2xvcjojNTE1RDZEO2xpbmUtaGVpZ2h0OjIycHg7Zm9udC13ZWlnaHQ6NDAwOyBmb250LWZhbWlseTogT3BlbiBTYW5zLCBIZWx2ZXRpY2EsIFNhbnMtc2VyaWY7XCIpfSxkZWJ1Z2dlck9uTm90aWNlPWZ1bmN0aW9uKCl7Y29uc29sZS5sb2coXCIlY1xcclxcbiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDaGUgICAgICAgICBFY0NcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgYy4uLi5jMiAgICAyYy4uLi46Q1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgYy4uLi4uLi4uYzIgICAyYy4uLi4uOkNcXHJcXG4gICAgICAgICAgICAgICAgICAgICBjLi4uLi4uLi4uLi4uYzIgICAyYy4uLi4uOkNcXHJcXG4gICAgICAgICAgICAgICAgICAgYy4uLi4uLi4uLi4uLi4uLi5jMiAgIDJjLi4uLi46Q1xcclxcbiAgICAgICAgICAgICAgICAgYy4uLi4uLi4uLi4uLi4uLi4uLi4uYzIgICAyYy4uLi4uOkNcXHJcXG4gICAgICAgICAgICAgICBjLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uYzIgICAyYy4uLi4uOkNcXHJcXG4gICAgICAgICAgICAgYy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5jMiAgIDJjLi4uLi46Q1xcclxcbiAgICAgICAgICAgYy4uLi4uLi46RTIgIDJjLi4uLi4uLi4uLi4uLi4uLi4uYzIgICAyYy4uLi4uOkNcXHJcXG4gICAgICAgICBjLi4uLi4uLi5oICAkJCAgIDJjLi4uLi4uLi4uLi4uLi4uLi4uYzIgICAyYy4uLi4uOkNcXHJcXG4gICAgICAgYy4uLi4uLi4uLjpDICAkY2MkICBFLi4uLi4uLi4uLi4uLi4uLi4uLi5jMiAgIDJjLi4uLi46Q1xcclxcbiAgICAgYy4uLi4uLi4uLi4uLmggICAgJCQgIGMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uYzIgICAyYy4uLi4uOkNcXHJcXG4gICBjLi4uLi4uLi4uLi4uLi4uOkUgICAgRTouLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uYzIgICAyYy4uLi4uOkNcXHJcXG4gICBFLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpDIGMuLi4uLi4uLi4uLi4uLi4uLi5oMiAgIDJjLi4uOkNcXHJcXG4gICAgIEUuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi46QyAgICAgYy4uLi4uLi4uLi4uLi4uLi4uLmgyICAgMmhDXFxyXFxuICAgICAgIEUuLi4uLi4uLi4uLi4uLi4uLi4uLjpDICAgICAgICAgYy4uLi4uLi4uLi4uLi4uLi4uLmgyXFxyXFxuICAgICAgICAgRS4uLi4uLi4uLi4uLi4uLi46QyAgICAgICAgICAgICBjLi4uLi4uLi4uLi4uLi4uLjpDXFxyXFxuICAgICAgICAgICBFLi4uLi4uLi4uLi4uOkMgICAgICAgICAgICAgICAgIGMuLi4uLi4uLi4uLi46Q1xcclxcbiAgICAgICAgICAgICBFLi4uLi4uLi46QyAgICAgICAgICAgICAgICAgICAgIGMuLi4uLi4uLjpDXFxyXFxuICAgICAgICAgICAgICAgRS4uLi46QyAgICAgICAgICAgICAgICAgICAgICAgICBjLi4uLjpDXFxyXFxuICAgICAgICAgICAgICAgICBFY0MgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVjQ1xcclxcbiBcXHJcXG4gXFxyXFxuIFxcclxcblwiLFwiZm9udC1mYW1pbHk6IENvdXJpZXIgTmV3LCBDb3VyaWVyLCBtb25vc3BhY2U7IGNvbG9yOiAjNzg4YmE0OyBmb250LXdlaWdodDpib2xkOyBmb250LXNpemU6IDExcHg7XCIpLGNvbnNvbGUubG9nKFwiJWNDb21tZXJjZS5qcyBjb25zb2xlIGRlYnVnZ2VyIGlzIG9uISAg8J+OiVwiLFwidGV4dC1hbGlnbjpjZW50ZXI7IGRpc3BsYXk6YmxvY2s7IGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSwgU2Fucy1zZXJpZjsgY29sb3I6ICM0ODhmNWE7IGxpbmUtaGVpZ2h0OjI4cHg7IGZvbnQtc2l6ZTogMTRweFwiKSxjb25zb2xlLmxvZyhcIiVj8J+SrCAgIE5lZWQgc29tZSBoZWxwPyBKb2luIG91ciBTbGFjayBjaGFubmVsIC0gaHR0cDovL3NsYWNrLmNvbW1lcmNlanMuY29tIFxcclxcblwiLFwidGV4dC1hbGlnbjpjZW50ZXI7IGRpc3BsYXk6YmxvY2s7IGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIEhlbHZldGljYSwgU2Fucy1zZXJpZjsgY29sb3I6ICM1MTVENkQ7IGxpbmUtaGVpZ2h0OjIwcHg7IGZvbnQtc2l6ZTogMTJweFwiKX07ZnVuY3Rpb24gb3duS2V5cyQxKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBfb2JqZWN0U3ByZWFkJDEoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/b3duS2V5cyQxKHIsITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe19kZWZpbmVQcm9wZXJ0eV9fZGVmYXVsdC5kZWZhdWx0KGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpvd25LZXlzJDEocikuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfXZhciBkZWZhdWx0RXZlbnRDYWxsYmFjaz1mdW5jdGlvbihlKXt2YXIgdD1uZXcgQ3VzdG9tRXZlbnQoXCJDb21tZXJjZWpzLlwiLmNvbmNhdChlKSx7YnViYmxlczohMSxjYW5jZWxhYmxlOiExfSk7cmV0dXJuIHdpbmRvdy5kaXNwYXRjaEV2ZW50KHQpfSxDb21tZXJjZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXSxuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTp7fTtpZihfY2xhc3NDYWxsQ2hlY2tfX2RlZmF1bHQuZGVmYXVsdCh0aGlzLGUpLHRoaXMub3B0aW9ucz1fb2JqZWN0U3ByZWFkJDEoX29iamVjdFNwcmVhZCQxKHt2ZXJzaW9uOlwidjFcIix1cmw6XCJodHRwczovL2FwaS5jaGVjLmlvL1wiLGV2ZW50Q2FsbGJhY2s6ZGVmYXVsdEV2ZW50Q2FsbGJhY2t9LG4pLHt9LHtwdWJsaWNLZXk6dCxkZWJ1ZzpyfSksXCJzdHJpbmdcIiE9dHlwZW9mIHR8fDA9PT10Lmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCLimqDvuI8gSW52YWxpZCBwdWJsaWMga2V5IGdpdmVuIHRvIENvbW1lcmNlLmpzIGNsaWVudFwiKTtpZihcInNrX1wiPT09dC50b0xvd2VyQ2FzZSgpLnN1YnN0cmluZygwLDMpKXRocm93IG5ldyBFcnJvcihcIlNlY3JldCBrZXkgcHJvdmlkZWQuIFlvdSBtdXN0IHVzZSBhIHB1YmxpYyBrZXkgd2l0aCBDb21tZXJjZS5qcyFcIik7dGhpcy5zdG9yYWdlPW5ldyBTdG9yYWdlKHRoaXMpLHRoaXMuY2FydD1uZXcgRmVhdHVyZXMuQ2FydCh0aGlzKSx0aGlzLmNoZWNrb3V0PW5ldyBGZWF0dXJlcy5DaGVja291dCh0aGlzKSx0aGlzLmN1c3RvbWVyPW5ldyBGZWF0dXJlcy5DdXN0b21lcih0aGlzKSx0aGlzLnByb2R1Y3RzPW5ldyBGZWF0dXJlcy5Qcm9kdWN0cyh0aGlzKSx0aGlzLnNlcnZpY2VzPW5ldyBGZWF0dXJlcy5TZXJ2aWNlcyh0aGlzKSx0aGlzLmNhdGVnb3JpZXM9bmV3IEZlYXR1cmVzLkNhdGVnb3JpZXModGhpcyksdGhpcy5tZXJjaGFudHM9bmV3IEZlYXR1cmVzLk1lcmNoYW50cyh0aGlzKSxyJiYodGhpcy5jb25zb2xlSGVscGVyPWNvbnNvbGVIZWxwZXIsZGVidWdnZXJPbk5vdGljZSgpKX1yZXR1cm4gX2NyZWF0ZUNsYXNzX19kZWZhdWx0LmRlZmF1bHQoZSxbe2tleTpcImVycm9yXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5jb25zb2xlSGVscGVyJiZ0aGlzLm9wdGlvbnMuZGVidWcpe3ZhciB0PWUucmVzcG9uc2Uscj1cIltcIi5jb25jYXQodC5zdGF0dXMsXCJdIFR5cGU6IFwiKS5jb25jYXQodC5zdGF0dXNUZXh0KSxuPVwic3RyaW5nXCI9PXR5cGVvZiB0LmRhdGE/dC5kYXRhOnQuc3RhdHVzVGV4dDtyZXR1cm4gdGhpcy5jb25zb2xlSGVscGVyKFwiZXJyb3JcIixyLG4sdC5kYXRhKX19fSx7a2V5OlwicmVxdWVzdFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06XCJnZXRcIixuPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsLG89YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOnt9LGM9YXJndW1lbnRzLmxlbmd0aD40JiZ2b2lkIDAhPT1hcmd1bWVudHNbNF0mJmFyZ3VtZW50c1s0XSxhPXtcIlgtQXV0aG9yaXphdGlvblwiOnRoaXMub3B0aW9ucy5wdWJsaWNLZXksXCJYLUNoZWMtQWdlbnRcIjpcImNvbW1lcmNlLmpzL3YyXCIsXCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0scz1cImdldFwiPT09cj9uOm51bGwsaT1cImdldFwiPT09cj9udWxsOm4sdT10aGlzLm9wdGlvbnMudGltZW91dE1zfHw2ZTQsbD10aGlzLm9wdGlvbnMuYXhpb3NDb25maWd8fHt9LGg9dGhpcy5vcHRpb25zLnVybDtcIi9cIiE9PWguc3Vic3RyaW5nKGgubGVuZ3RoLTEpJiYoaCs9XCIvXCIpO3ZhciBmPWF4aW9zX19kZWZhdWx0LmRlZmF1bHQoX29iamVjdFNwcmVhZCQxKF9vYmplY3RTcHJlYWQkMSh7dXJsOmUsbWV0aG9kOnIsYmFzZVVSTDpcIlwiLmNvbmNhdChoKS5jb25jYXQodGhpcy5vcHRpb25zLnZlcnNpb24sXCIvXCIpLHBhcmFtczpzLGRhdGE6aSx0aW1lb3V0OnV9LGwpLHt9LHtoZWFkZXJzOl9vYmplY3RTcHJlYWQkMShfb2JqZWN0U3ByZWFkJDEoX29iamVjdFNwcmVhZCQxKHt9LGEpLGwuaGVhZGVycyksbyl9KSk7aWYoYylyZXR1cm4gZjt2YXIgZD10aGlzLm9wdGlvbnMuZXZlbnRDYWxsYmFjaztyZXR1cm4gZi50aGVuKChmdW5jdGlvbihlKXtpZih0LmNvbnNvbGVIZWxwZXImJnQub3B0aW9ucy5kZWJ1ZyYmXCJvYmplY3RcIj09PV90eXBlb2ZfX2RlZmF1bHQuZGVmYXVsdChlLmRhdGEuX2NvbnNvbGUpJiZ0LmNvbnNvbGVIZWxwZXIuYXBwbHkodCxfdG9Db25zdW1hYmxlQXJyYXlfX2RlZmF1bHQuZGVmYXVsdChlLmRhdGEuX2NvbnNvbGUpKSxcIm9iamVjdFwiIT09X3R5cGVvZl9fZGVmYXVsdC5kZWZhdWx0KGUuZGF0YSl8fEFycmF5LmlzQXJyYXkoZS5kYXRhKSlyZXR1cm4gZS5kYXRhO3ZhciByPWUuZGF0YSxuPXIuX2V2ZW50LG89X29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzX19kZWZhdWx0LmRlZmF1bHQocixbXCJfZXZlbnRcIl0pO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBuJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBkJiZkKG4pLG99KSkuY2F0Y2goKGZ1bmN0aW9uKGUpe3Rocm93IHQuZXJyb3IoZSkse21lc3NhZ2U6XCJVbnN1Y2Nlc3NmdWwgcmVzcG9uc2UgKFwiLmNvbmNhdChlLnJlc3BvbnNlLnN0YXR1cyxcIjogXCIpLmNvbmNhdChlLnJlc3BvbnNlLnN0YXR1c1RleHQsXCIpIHJlY2VpdmVkXCIpLHN0YXR1c0NvZGU6ZS5yZXNwb25zZS5zdGF0dXMsc3RhdHVzVGV4dDplLnJlc3BvbnNlLnN0YXR1c1RleHQsZGF0YTplLnJlc3BvbnNlLmRhdGEsb3JpZ2luYWxFcnJvcjplfX0pKX19XSksZX0oKTttb2R1bGUuZXhwb3J0cz1Db21tZXJjZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBidWlsZEZ1bGxQYXRoID0gcmVxdWlyZSgnLi4vY29yZS9idWlsZEZ1bGxQYXRoJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgPyB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoY29uZmlnLmF1dGgucGFzc3dvcmQpKSA6ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxuLy8gRXhwb3NlIGlzQXhpb3NFcnJvclxuYXhpb3MuaXNBeGlvc0Vycm9yID0gcmVxdWlyZSgnLi9oZWxwZXJzL2lzQXhpb3NFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcblxuICAvLyBTZXQgY29uZmlnLm1ldGhvZFxuICBpZiAoY29uZmlnLm1ldGhvZCkge1xuICAgIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSBpZiAodGhpcy5kZWZhdWx0cy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gdGhpcy5kZWZhdWx0cy5tZXRob2QudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcubWV0aG9kID0gJ2dldCc7XG4gIH1cblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QobWVyZ2VDb25maWcoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogKGNvbmZpZyB8fCB7fSkuZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAndGltZW91dE1lc3NhZ2UnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnZGVjb21wcmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCcsICdyZXNwb25zZUVuY29kaW5nJ1xuICBdO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRpcmVjdE1lcmdlS2V5cywgZnVuY3Rpb24gbWVyZ2UocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKVxuICAgIC5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMSlcbiAgICAuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBwYXlsb2FkIGlzIGFuIGVycm9yIHRocm93biBieSBBeGlvc1xuICpcbiAqIEBwYXJhbSB7Kn0gcGF5bG9hZCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBheWxvYWQgaXMgYW4gZXJyb3IgdGhyb3duIGJ5IEF4aW9zLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0F4aW9zRXJyb3IocGF5bG9hZCkge1xuICByZXR1cm4gKHR5cGVvZiBwYXlsb2FkID09PSAnb2JqZWN0JykgJiYgKHBheWxvYWQuaXNBeGlvc0Vycm9yID09PSB0cnVlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcbiIsIi8qIVxuICogSmF2YVNjcmlwdCBDb29raWUgdjIuMi4xXG4gKiBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICpcbiAqIENvcHlyaWdodCAyMDA2LCAyMDE1IEtsYXVzIEhhcnRsICYgRmFnbmVyIEJyYWNrXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqL1xuOyhmdW5jdGlvbiAoZmFjdG9yeSkge1xuXHR2YXIgcmVnaXN0ZXJlZEluTW9kdWxlTG9hZGVyO1xuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdHJlZ2lzdGVyZWRJbk1vZHVsZUxvYWRlciA9IHRydWU7XG5cdH1cblx0aWYgKCFyZWdpc3RlcmVkSW5Nb2R1bGVMb2FkZXIpIHtcblx0XHR2YXIgT2xkQ29va2llcyA9IHdpbmRvdy5Db29raWVzO1xuXHRcdHZhciBhcGkgPSB3aW5kb3cuQ29va2llcyA9IGZhY3RvcnkoKTtcblx0XHRhcGkubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHdpbmRvdy5Db29raWVzID0gT2xkQ29va2llcztcblx0XHRcdHJldHVybiBhcGk7XG5cdFx0fTtcblx0fVxufShmdW5jdGlvbiAoKSB7XG5cdGZ1bmN0aW9uIGV4dGVuZCAoKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciByZXN1bHQgPSB7fTtcblx0XHRmb3IgKDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHNbIGkgXTtcblx0XHRcdGZvciAodmFyIGtleSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRcdHJlc3VsdFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVjb2RlIChzKSB7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvKCVbMC05QS1aXXsyfSkrL2csIGRlY29kZVVSSUNvbXBvbmVudCk7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0IChjb252ZXJ0ZXIpIHtcblx0XHRmdW5jdGlvbiBhcGkoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gc2V0IChrZXksIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGF0dHJpYnV0ZXMgPSBleHRlbmQoe1xuXHRcdFx0XHRwYXRoOiAnLydcblx0XHRcdH0sIGFwaS5kZWZhdWx0cywgYXR0cmlidXRlcyk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRhdHRyaWJ1dGVzLmV4cGlyZXMgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpICogMSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGUrNSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFdlJ3JlIHVzaW5nIFwiZXhwaXJlc1wiIGJlY2F1c2UgXCJtYXgtYWdlXCIgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0YXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzID8gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCkgOiAnJztcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblx0XHRcdFx0aWYgKC9eW1xce1xcW10vLnRlc3QocmVzdWx0KSkge1xuXHRcdFx0XHRcdHZhbHVlID0gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHR2YWx1ZSA9IGNvbnZlcnRlci53cml0ZSA/XG5cdFx0XHRcdGNvbnZlcnRlci53cml0ZSh2YWx1ZSwga2V5KSA6XG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudChTdHJpbmcodmFsdWUpKVxuXHRcdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDNBfDNDfDNFfDNEfDJGfDNGfDQwfDVCfDVEfDVFfDYwfDdCfDdEfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpO1xuXG5cdFx0XHRrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKGtleSkpXG5cdFx0XHRcdC5yZXBsYWNlKC8lKDIzfDI0fDI2fDJCfDVFfDYwfDdDKS9nLCBkZWNvZGVVUklDb21wb25lbnQpXG5cdFx0XHRcdC5yZXBsYWNlKC9bXFwoXFwpXS9nLCBlc2NhcGUpO1xuXG5cdFx0XHR2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG5cdFx0XHRmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcblx0XHRcdFx0aWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXHRcdFx0XHRpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ29uc2lkZXJzIFJGQyA2MjY1IHNlY3Rpb24gNS4yOlxuXHRcdFx0XHQvLyAuLi5cblx0XHRcdFx0Ly8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuXHRcdFx0XHQvLyAgICAgY2hhcmFjdGVyOlxuXHRcdFx0XHQvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuXHRcdFx0XHQvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cblx0XHRcdFx0Ly8gLi4uXG5cdFx0XHRcdHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoZG9jdW1lbnQuY29va2llID0ga2V5ICsgJz0nICsgdmFsdWUgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGdldCAoa2V5LCBqc29uKSB7XG5cdFx0XHRpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBqYXIgPSB7fTtcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuXHRcdFx0dmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUgPyBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsgJykgOiBbXTtcblx0XHRcdHZhciBpID0gMDtcblxuXHRcdFx0Zm9yICg7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdFx0dmFyIGNvb2tpZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuXHRcdFx0XHRpZiAoIWpzb24gJiYgY29va2llLmNoYXJBdCgwKSA9PT0gJ1wiJykge1xuXHRcdFx0XHRcdGNvb2tpZSA9IGNvb2tpZS5zbGljZSgxLCAtMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gZGVjb2RlKHBhcnRzWzBdKTtcblx0XHRcdFx0XHRjb29raWUgPSAoY29udmVydGVyLnJlYWQgfHwgY29udmVydGVyKShjb29raWUsIG5hbWUpIHx8XG5cdFx0XHRcdFx0XHRkZWNvZGUoY29va2llKTtcblxuXHRcdFx0XHRcdGlmIChqc29uKSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRjb29raWUgPSBKU09OLnBhcnNlKGNvb2tpZSk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGphcltuYW1lXSA9IGNvb2tpZTtcblxuXHRcdFx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZSkge31cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGtleSA/IGphcltrZXldIDogamFyO1xuXHRcdH1cblxuXHRcdGFwaS5zZXQgPSBzZXQ7XG5cdFx0YXBpLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCBmYWxzZSAvKiByZWFkIGFzIHJhdyAqLyk7XG5cdFx0fTtcblx0XHRhcGkuZ2V0SlNPTiA9IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdHJldHVybiBnZXQoa2V5LCB0cnVlIC8qIHJlYWQgYXMganNvbiAqLyk7XG5cdFx0fTtcblx0XHRhcGkucmVtb3ZlID0gZnVuY3Rpb24gKGtleSwgYXR0cmlidXRlcykge1xuXHRcdFx0c2V0KGtleSwgJycsIGV4dGVuZChhdHRyaWJ1dGVzLCB7XG5cdFx0XHRcdGV4cGlyZXM6IC0xXG5cdFx0XHR9KSk7XG5cdFx0fTtcblxuXHRcdGFwaS5kZWZhdWx0cyA9IHt9O1xuXG5cdFx0YXBpLndpdGhDb252ZXJ0ZXIgPSBpbml0O1xuXG5cdFx0cmV0dXJuIGFwaTtcblx0fVxuXG5cdHJldHVybiBpbml0KGZ1bmN0aW9uICgpIHt9KTtcbn0pKTtcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBhc3NpZ249T2JqZWN0LmFzc2lnbi5iaW5kKE9iamVjdCk7bW9kdWxlLmV4cG9ydHM9YXNzaWduO21vZHVsZS5leHBvcnRzLmRlZmF1bHQ9bW9kdWxlLmV4cG9ydHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYmplY3QtYXNzaWduLmpzLm1hcCIsIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcS0dNXFxcXE9uZURyaXZlXFxcXERvY3VtZW50c1xcXFxHaXRIdWJcXFxcY2hlY1xcXFxmeXBcXFxccGFnZXNcXFxcaW5kZXguanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjE0LjBcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgUmVhY3RWZXJzaW9uID0gJzE2LjE0LjAnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgc3VzcGVuc2U6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIEJFRk9SRV9TTEFTSF9SRSA9IC9eKC4qKVtcXFxcXFwvXS87XG5mdW5jdGlvbiBkZXNjcmliZUNvbXBvbmVudEZyYW1lIChuYW1lLCBzb3VyY2UsIG93bmVyTmFtZSkge1xuICB2YXIgc291cmNlSW5mbyA9ICcnO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICB2YXIgcGF0aCA9IHNvdXJjZS5maWxlTmFtZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBwYXRoLnJlcGxhY2UoQkVGT1JFX1NMQVNIX1JFLCAnJyk7XG5cbiAgICB7XG4gICAgICAvLyBJbiBERVYsIGluY2x1ZGUgY29kZSBmb3IgYSBjb21tb24gc3BlY2lhbCBjYXNlOlxuICAgICAgLy8gcHJlZmVyIFwiZm9sZGVyL2luZGV4LmpzXCIgaW5zdGVhZCBvZiBqdXN0IFwiaW5kZXguanNcIi5cbiAgICAgIGlmICgvXmluZGV4XFwuLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKEJFRk9SRV9TTEFTSF9SRSk7XG5cbiAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgdmFyIHBhdGhCZWZvcmVTbGFzaCA9IG1hdGNoWzFdO1xuXG4gICAgICAgICAgaWYgKHBhdGhCZWZvcmVTbGFzaCkge1xuICAgICAgICAgICAgdmFyIGZvbGRlck5hbWUgPSBwYXRoQmVmb3JlU2xhc2gucmVwbGFjZShCRUZPUkVfU0xBU0hfUkUsICcnKTtcbiAgICAgICAgICAgIGZpbGVOYW1lID0gZm9sZGVyTmFtZSArICcvJyArIGZpbGVOYW1lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHNvdXJjZUluZm8gPSAnIChhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBzb3VyY2UubGluZU51bWJlciArICcpJztcbiAgfSBlbHNlIGlmIChvd25lck5hbWUpIHtcbiAgICBzb3VyY2VJbmZvID0gJyAoY3JlYXRlZCBieSAnICsgb3duZXJOYW1lICsgJyknO1xuICB9XG5cbiAgcmV0dXJuICdcXG4gICAgaW4gJyArIChuYW1lIHx8ICdVbmtub3duJykgKyBzb3VyY2VJbmZvO1xufVxuXG52YXIgUmVzb2x2ZWQgPSAxO1xuZnVuY3Rpb24gcmVmaW5lUmVzb2x2ZWRMYXp5Q29tcG9uZW50KGxhenlDb21wb25lbnQpIHtcbiAgcmV0dXJuIGxhenlDb21wb25lbnQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQgPyBsYXp5Q29tcG9uZW50Ll9yZXN1bHQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gXCJQcm9maWxlclwiO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgcmV0dXJuICdDb250ZXh0LkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICByZXR1cm4gJ0NvbnRleHQuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciB0aGVuYWJsZSA9IHR5cGU7XG4gICAgICAgICAgdmFyIHJlc29sdmVkVGhlbmFibGUgPSByZWZpbmVSZXNvbHZlZExhenlDb21wb25lbnQodGhlbmFibGUpO1xuXG4gICAgICAgICAgaWYgKHJlc29sdmVkVGhlbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHJlc29sdmVkVGhlbmFibGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbntcbiAgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50LnR5cGUpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyLnR5cGUpKTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8qKlxuICogVXNlZCBieSBhY3QoKSB0byB0cmFjayB3aGV0aGVyIHlvdSdyZSBpbnNpZGUgYW4gYWN0KCkgc2NvcGUuXG4gKi9cbnZhciBJc1NvbWVSZW5kZXJlckFjdGluZyA9IHtcbiAgY3VycmVudDogZmFsc2Vcbn07XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXIsXG4gIElzU29tZVJlbmRlcmVyQWN0aW5nOiBJc1NvbWVSZW5kZXJlckFjdGluZyxcbiAgLy8gVXNlZCBieSByZW5kZXJlcnMgdG8gYXZvaWQgYnVuZGxpbmcgb2JqZWN0LWFzc2lnbiB0d2ljZSBpbiBVTUQgYnVuZGxlczpcbiAgYXNzaWduOiBfYXNzaWduXG59O1xuXG57XG4gIF9hc3NpZ24oUmVhY3RTaGFyZWRJbnRlcm5hbHMsIHtcbiAgICAvLyBUaGVzZSBzaG91bGQgbm90IGJlIGluY2x1ZGVkIGluIHByb2R1Y3Rpb24uXG4gICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTogUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSxcbiAgICAvLyBTaGltIGZvciBSZWFjdCBET00gMTYuMC4wIHdoaWNoIHN0aWxsIGRlc3RydWN0dXJlZCAoYnV0IG5vdCB1c2VkKSB0aGlzLlxuICAgIC8vIFRPRE86IHJlbW92ZSBpbiBSZWFjdCAxNy4wLlxuICAgIFJlYWN0Q29tcG9uZW50VHJlZUhvb2s6IHt9XG4gIH0pO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBoYXNFeGlzdGluZ1N0YWNrID0gYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnICYmIGFyZ3NbYXJncy5sZW5ndGggLSAxXS5pbmRleE9mKCdcXG4gICAgaW4nKSA9PT0gMDtcblxuICAgIGlmICghaGFzRXhpc3RpbmdTdGFjaykge1xuICAgICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgfSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKCEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcywgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgJ3NldFN0YXRlJyk7XG59O1xuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuXG5Db21wb25lbnQucHJvdG90eXBlLmZvcmNlVXBkYXRlID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIHRoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcywgY2FsbGJhY2ssICdmb3JjZVVwZGF0ZScpO1xufTtcbi8qKlxuICogRGVwcmVjYXRlZCBBUElzLiBUaGVzZSBBUElzIHVzZWQgdG8gZXhpc3Qgb24gY2xhc3NpYyBSZWFjdCBjbGFzc2VzIGJ1dCBzaW5jZVxuICogd2Ugd291bGQgbGlrZSB0byBkZXByZWNhdGUgdGhlbSwgd2UncmUgbm90IGdvaW5nIHRvIG1vdmUgdGhlbSBvdmVyIHRvIHRoaXNcbiAqIG1vZGVybiBiYXNlIGNsYXNzLiBJbnN0ZWFkLCB3ZSBkZWZpbmUgYSBnZXR0ZXIgdGhhdCB3YXJucyBpZiBpdCdzIGFjY2Vzc2VkLlxuICovXG5cblxue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG5cbiAgdmFyIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyA9IGZ1bmN0aW9uIChtZXRob2ROYW1lLCBpbmZvKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbXBvbmVudC5wcm90b3R5cGUsIG1ldGhvZE5hbWUsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgZm5OYW1lIGluIGRlcHJlY2F0ZWRBUElzKSB7XG4gICAgaWYgKGRlcHJlY2F0ZWRBUElzLmhhc093blByb3BlcnR5KGZuTmFtZSkpIHtcbiAgICAgIGRlZmluZURlcHJlY2F0aW9uV2FybmluZyhmbk5hbWUsIGRlcHJlY2F0ZWRBUElzW2ZuTmFtZV0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBDb21wb25lbnREdW1teSgpIHt9XG5cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4vKipcbiAqIENvbnZlbmllbmNlIGNvbXBvbmVudCB3aXRoIGRlZmF1bHQgc2hhbGxvdyBlcXVhbGl0eSBjaGVjayBmb3Igc0NVLlxuICovXG5cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDtcbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxudmFyIHB1cmVDb21wb25lbnRQcm90b3R5cGUgPSBQdXJlQ29tcG9uZW50LnByb3RvdHlwZSA9IG5ldyBDb21wb25lbnREdW1teSgpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFB1cmVDb21wb25lbnQ7IC8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxuXG5fYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xuXG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50ID0gdHJ1ZTtcblxuLy8gYW4gaW1tdXRhYmxlIG9iamVjdCB3aXRoIGEgc2luZ2xlIG11dGFibGUgdmFsdWVcbmZ1bmN0aW9uIGNyZWF0ZVJlZigpIHtcbiAgdmFyIHJlZk9iamVjdCA9IHtcbiAgICBjdXJyZW50OiBudWxsXG4gIH07XG5cbiAge1xuICAgIE9iamVjdC5zZWFsKHJlZk9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biwgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24sIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL2ZiLm1lL3JlYWN0LXNwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9mYi5tZS9yZWFjdC1zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJuIGEgbmV3IFJlYWN0RWxlbWVudCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgY29uZmlnLCBjaGlsZHJlbikge1xuICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIGtleSA9IG51bGw7XG4gIHZhciByZWYgPSBudWxsO1xuICB2YXIgc2VsZiA9IG51bGw7XG4gIHZhciBzb3VyY2UgPSBudWxsO1xuXG4gIGlmIChjb25maWcgIT0gbnVsbCkge1xuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuXG4gICAgICB7XG4gICAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmICghIShlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkpIHtcbiAgICB7XG4gICAgICB0aHJvdyBFcnJvciggXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIiApO1xuICAgIH1cbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IF9hc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuICByZXR1cm4gJyQnICsgZXNjYXBlZFN0cmluZztcbn1cbi8qKlxuICogVE9ETzogVGVzdCB0aGF0IGEgc2luZ2xlIGNoaWxkIGFuZCBhbiBhcnJheSB3aXRoIG9uZSBpdGVtIGhhdmUgdGhlIHNhbWUga2V5XG4gKiBwYXR0ZXJuLlxuICovXG5cblxudmFyIGRpZFdhcm5BYm91dE1hcHMgPSBmYWxzZTtcbnZhciB1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCA9IC9cXC8rL2c7XG5cbmZ1bmN0aW9uIGVzY2FwZVVzZXJQcm92aWRlZEtleSh0ZXh0KSB7XG4gIHJldHVybiAoJycgKyB0ZXh0KS5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG5cbnZhciBQT09MX1NJWkUgPSAxMDtcbnZhciB0cmF2ZXJzZUNvbnRleHRQb29sID0gW107XG5cbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuXG4gIGlmICh0cmF2ZXJzZUNvbnRleHRQb29sLmxlbmd0aCA8IFBPT0xfU0laRSkge1xuICAgIHRyYXZlcnNlQ29udGV4dFBvb2wucHVzaCh0cmF2ZXJzZUNvbnRleHQpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbkltcGwoY2hpbGRyZW4sIG5hbWVTb0ZhciwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiBjaGlsZHJlbjtcblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgLy8gQWxsIG9mIHRoZSBhYm92ZSBhcmUgcGVyY2VpdmVkIGFzIG51bGwuXG4gICAgY2hpbGRyZW4gPSBudWxsO1xuICB9XG5cbiAgdmFyIGludm9rZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgaWYgKGNoaWxkcmVuID09PSBudWxsKSB7XG4gICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH1cblxuICBpZiAoaW52b2tlQ2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayh0cmF2ZXJzZUNvbnRleHQsIGNoaWxkcmVuLCAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRDb21wb25lbnRLZXkoY2hpbGQsIGkpO1xuICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihjaGlsZHJlbik7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICBpZiAoIWRpZFdhcm5BYm91dE1hcHMpIHtcbiAgICAgICAgICAgIHdhcm4oJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgY29udmVydGluZyBjaGlsZHJlbiB0byAnICsgJ2FuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoY2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldENvbXBvbmVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBhZGRlbmR1bSA9ICcnO1xuXG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9ICcnICsgY2hpbGRyZW47XG5cbiAgICAgIHtcbiAgICAgICAge1xuICAgICAgICAgIHRocm93IEVycm9yKCBcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS5cIiArIGFkZGVuZHVtICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3VidHJlZUNvdW50O1xufVxuLyoqXG4gKiBUcmF2ZXJzZXMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLCBidXRcbiAqIG1pZ2h0IGFsc28gYmUgc3BlY2lmaWVkIHRocm91Z2ggYXR0cmlidXRlczpcbiAqXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4sIC4uLilgXG4gKiAtIGB0cmF2ZXJzZUFsbENoaWxkcmVuKHRoaXMucHJvcHMubGVmdFBhbmVsQ2hpbGRyZW4sIC4uLilgXG4gKlxuICogVGhlIGB0cmF2ZXJzZUNvbnRleHRgIGlzIGFuIG9wdGlvbmFsIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIHRocm91Z2ggdGhlXG4gKiBlbnRpcmUgdHJhdmVyc2FsLiBJdCBjYW4gYmUgdXNlZCB0byBzdG9yZSBhY2N1bXVsYXRpb25zIG9yIGFueXRoaW5nIGVsc2UgdGhhdFxuICogdGhlIGNhbGxiYWNrIG1pZ2h0IGZpbmQgcmVsZXZhbnQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBvYmplY3QuXG4gKiBAcGFyYW0geyFmdW5jdGlvbn0gY2FsbGJhY2sgVG8gaW52b2tlIHVwb24gdHJhdmVyc2luZyBlYWNoIGNoaWxkLlxuICogQHBhcmFtIHs/Kn0gdHJhdmVyc2VDb250ZXh0IENvbnRleHQgZm9yIHRyYXZlcnNhbC5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBjb21wb25lbnQgd2l0aGluIGEgc2V0LlxuICpcbiAqIEBwYXJhbSB7Kn0gY29tcG9uZW50IEEgY29tcG9uZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRLZXkoY29tcG9uZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBjb21wb25lbnQgPT09ICdvYmplY3QnICYmIGNvbXBvbmVudCAhPT0gbnVsbCAmJiBjb21wb25lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICByZXR1cm4gZXNjYXBlKGNvbXBvbmVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xufVxuLyoqXG4gKiBJdGVyYXRlcyB0aHJvdWdoIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5cblxuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG4gIHZhciBtYXBwZWRDaGlsZCA9IGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChtYXBwZWRDaGlsZCwgcmVzdWx0LCBjaGlsZEtleSwgZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cblxuICAgIHJlc3VsdC5wdXNoKG1hcHBlZENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCBhcnJheSwgcHJlZml4LCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBlc2NhcGVkUHJlZml4ID0gJyc7XG5cbiAgaWYgKHByZWZpeCAhPSBudWxsKSB7XG4gICAgZXNjYXBlZFByZWZpeCA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShwcmVmaXgpICsgJy8nO1xuICB9XG5cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBrZXksIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmMsIGNvbnRleHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuY291bnRcbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBjaGlsZHJlbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvdW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSwgbnVsbCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKGNoaWxkcmVuLCByZXN1bHQsIG51bGwsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuXCIgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlLCBjYWxjdWxhdGVDaGFuZ2VkQml0cykge1xuICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB7XG4gICAgICBpZiAoY2FsY3VsYXRlQ2hhbmdlZEJpdHMgIT09IG51bGwgJiYgdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVycm9yKCdjcmVhdGVDb250ZXh0OiBFeHBlY3RlZCB0aGUgb3B0aW9uYWwgc2Vjb25kIGFyZ3VtZW50IHRvIGJlIGEgJyArICdmdW5jdGlvbi4gSW5zdGVhZCByZWNlaXZlZDogJXMnLCBjYWxjdWxhdGVDaGFuZ2VkQml0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNhbGN1bGF0ZUNoYW5nZWRCaXRzLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHQsXG4gICAgICBfY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IGNvbnRleHQuX2NhbGN1bGF0ZUNoYW5nZWRCaXRzXG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmZ1bmN0aW9uIGxhenkoY3Rvcikge1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfY3RvcjogY3RvcixcbiAgICAvLyBSZWFjdCB1c2VzIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IC0xLFxuICAgIF9yZXN1bHQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCBqdXN0IHNldCBpdCBvbiB0aGUgb2JqZWN0LlxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG4gICAgdmFyIHByb3BUeXBlcztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcblxuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShsYXp5VHlwZSwgJ3Byb3BUeXBlcycsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGxhenlUeXBlO1xufVxuXG5mdW5jdGlvbiBmb3J3YXJkUmVmKHJlbmRlcikge1xuICB7XG4gICAgaWYgKHJlbmRlciAhPSBudWxsICYmIHJlbmRlci4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgcmVjZWl2ZWQgYSBgbWVtb2AgJyArICdjb21wb25lbnQuIEluc3RlYWQgb2YgZm9yd2FyZFJlZihtZW1vKC4uLikpLCB1c2UgJyArICdtZW1vKGZvcndhcmRSZWYoLi4uKSkuJyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcmVuZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlcnJvcignZm9yd2FyZFJlZiByZXF1aXJlcyBhIHJlbmRlciBmdW5jdGlvbiBidXQgd2FzIGdpdmVuICVzLicsIHJlbmRlciA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiByZW5kZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVuZGVyLmxlbmd0aCAhPT0gMCAmJiByZW5kZXIubGVuZ3RoICE9PSAyKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgYWNjZXB0IGV4YWN0bHkgdHdvIHBhcmFtZXRlcnM6IHByb3BzIGFuZCByZWYuICVzJywgcmVuZGVyLmxlbmd0aCA9PT0gMSA/ICdEaWQgeW91IGZvcmdldCB0byB1c2UgdGhlIHJlZiBwYXJhbWV0ZXI/JyA6ICdBbnkgYWRkaXRpb25hbCBwYXJhbWV0ZXIgd2lsbCBiZSB1bmRlZmluZWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlciAhPSBudWxsKSB7XG4gICAgICBpZiAocmVuZGVyLmRlZmF1bHRQcm9wcyAhPSBudWxsIHx8IHJlbmRlci5wcm9wVHlwZXMgIT0gbnVsbCkge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGRvIG5vdCBzdXBwb3J0IHByb3BUeXBlcyBvciBkZWZhdWx0UHJvcHMuICcgKyAnRGlkIHlvdSBhY2NpZGVudGFsbHkgcGFzcyBhIFJlYWN0IGNvbXBvbmVudD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfTUVNT19UWVBFLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgY29tcGFyZTogY29tcGFyZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbXBhcmVcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZURpc3BhdGNoZXIoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50O1xuXG4gIGlmICghKGRpc3BhdGNoZXIgIT09IG51bGwpKSB7XG4gICAge1xuICAgICAgdGhyb3cgRXJyb3IoIFwiSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvciBvbmUgb2YgdGhlIGZvbGxvd2luZyByZWFzb25zOlxcbjEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbjIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4zLiBZb3UgbWlnaHQgaGF2ZSBtb3JlIHRoYW4gb25lIGNvcHkgb2YgUmVhY3QgaW4gdGhlIHNhbWUgYXBwXFxuU2VlIGh0dHBzOi8vZmIubWUvcmVhY3QtaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLlwiICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5cbmZ1bmN0aW9uIHVzZUNvbnRleHQoQ29udGV4dCwgdW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgaWYgKHVuc3RhYmxlX29ic2VydmVkQml0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvcigndXNlQ29udGV4dCgpIHNlY29uZCBhcmd1bWVudCBpcyByZXNlcnZlZCBmb3IgZnV0dXJlICcgKyAndXNlIGluIFJlYWN0LiBQYXNzaW5nIGl0IGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnWW91IHBhc3NlZDogJXMuJXMnLCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMsIHR5cGVvZiB1bnN0YWJsZV9vYnNlcnZlZEJpdHMgPT09ICdudW1iZXInICYmIEFycmF5LmlzQXJyYXkoYXJndW1lbnRzWzJdKSA/ICdcXG5cXG5EaWQgeW91IGNhbGwgYXJyYXkubWFwKHVzZUNvbnRleHQpPyAnICsgJ0NhbGxpbmcgSG9va3MgaW5zaWRlIGEgbG9vcCBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0xlYXJuIG1vcmUgYXQgaHR0cHM6Ly9mYi5tZS9ydWxlcy1vZi1ob29rcycgOiAnJyk7XG4gICAgfSAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG5cblxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0LCB1bnN0YWJsZV9vYnNlcnZlZEJpdHMpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gIH1cblxuICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICB7XG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuICB9XG5cbiAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0pO1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChmcmFnbWVudCk7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGVycm9yKCdSZWFjdC5jcmVhdGVFbGVtZW50OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICBpZiAodmFsaWRUeXBlKSB7XG4gICAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IGZhbHNlO1xuZnVuY3Rpb24gY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uKHR5cGUpIHtcbiAgdmFyIHZhbGlkYXRlZEZhY3RvcnkgPSBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24uYmluZChudWxsLCB0eXBlKTtcbiAgdmFsaWRhdGVkRmFjdG9yeS50eXBlID0gdHlwZTtcblxuICB7XG4gICAgaWYgKCFkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSkge1xuICAgICAgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSB0cnVlO1xuXG4gICAgICB3YXJuKCdSZWFjdC5jcmVhdGVGYWN0b3J5KCkgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gQ29uc2lkZXIgdXNpbmcgSlNYICcgKyAnb3IgdXNlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBkaXJlY3RseSBpbnN0ZWFkLicpO1xuICAgIH0gLy8gTGVnYWN5IGhvb2s6IHJlbW92ZSBpdFxuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsaWRhdGVkRmFjdG9yeSwgJ3R5cGUnLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICB3YXJuKCdGYWN0b3J5LnR5cGUgaXMgZGVwcmVjYXRlZC4gQWNjZXNzIHRoZSBjbGFzcyBkaXJlY3RseSAnICsgJ2JlZm9yZSBwYXNzaW5nIGl0IHRvIGNyZWF0ZUZhY3RvcnkuJyk7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICd0eXBlJywge1xuICAgICAgICAgIHZhbHVlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZWRGYWN0b3J5O1xufVxuZnVuY3Rpb24gY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24oZWxlbWVudCwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciBuZXdFbGVtZW50ID0gY2xvbmVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgZm9yICh2YXIgaSA9IDI7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIG5ld0VsZW1lbnQudHlwZSk7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbntcblxuICB0cnkge1xuICAgIHZhciBmcm96ZW5PYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcbiAgICB2YXIgdGVzdE1hcCA9IG5ldyBNYXAoW1tmcm96ZW5PYmplY3QsIG51bGxdXSk7XG4gICAgdmFyIHRlc3RTZXQgPSBuZXcgU2V0KFtmcm96ZW5PYmplY3RdKTsgLy8gVGhpcyBpcyBuZWNlc3NhcnkgZm9yIFJvbGx1cCB0byBub3QgY29uc2lkZXIgdGhlc2UgdW51c2VkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2lzc3Vlcy8xNzcxXG4gICAgLy8gVE9ETzogd2UgY2FuIHJlbW92ZSB0aGVzZSBpZiBSb2xsdXAgZml4ZXMgdGhlIGJ1Zy5cblxuICAgIHRlc3RNYXAuc2V0KDAsIDApO1xuICAgIHRlc3RTZXQuYWRkKDApO1xuICB9IGNhdGNoIChlKSB7XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuY2xvbmVFbGVtZW50ID0gY2xvbmVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0O1xuZXhwb3J0cy5jcmVhdGVFbGVtZW50ID0gY3JlYXRlRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVGYWN0b3J5ID0gY3JlYXRlRmFjdG9yeTtcbmV4cG9ydHMuY3JlYXRlUmVmID0gY3JlYXRlUmVmO1xuZXhwb3J0cy5mb3J3YXJkUmVmID0gZm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSBpc1ZhbGlkRWxlbWVudDtcbmV4cG9ydHMubGF6eSA9IGxhenk7XG5leHBvcnRzLm1lbW8gPSBtZW1vO1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwiLyoqXG4gKiBzdHJpbmctc3RyaXAtaHRtbFxuICogU3RyaXBzIEhUTUwgdGFncyBmcm9tIHN0cmluZ3MuIE5vIHBhcnNlciwgYWNjZXB0cyBtaXhlZCBzb3VyY2VzLlxuICogVmVyc2lvbjogNi4zLjBcbiAqIEF1dGhvcjogUm95IFJldmVsdCwgQ29kc2VuIEx0ZFxuICogTGljZW5zZTogTUlUXG4gKiBIb21lcGFnZTogaHR0cHM6Ly9jb2RzZW4uY29tL29zL3N0cmluZy1zdHJpcC1odG1sL1xuICovXG5cbiFmdW5jdGlvbihyLGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOihyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6cnx8c2VsZikuc3RyaW5nU3RyaXBIdG1sPWUoKX0odGhpcywoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiByKGUpe3JldHVybihyPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihyKXtyZXR1cm4gdHlwZW9mIHJ9OmZ1bmN0aW9uKHIpe3JldHVybiByJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnIuY29uc3RydWN0b3I9PT1TeW1ib2wmJnIhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHJ9KShlKX1mdW5jdGlvbiBlKHIsZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kyspe3ZhciBuPWVbdF07bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLG4ua2V5LG4pfX1mdW5jdGlvbiB0KHIsZSx0KXtyZXR1cm4gZSBpbiByP09iamVjdC5kZWZpbmVQcm9wZXJ0eShyLGUse3ZhbHVlOnQsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTpyW2VdPXQscn1mdW5jdGlvbiBuKHIsZSl7dmFyIHQ9T2JqZWN0LmtleXMocik7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhyKTtlJiYobj1uLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocixlKS5lbnVtZXJhYmxlfSkpKSx0LnB1c2guYXBwbHkodCxuKX1yZXR1cm4gdH1mdW5jdGlvbiBhKHIpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBhPW51bGwhPWFyZ3VtZW50c1tlXT9hcmd1bWVudHNbZV06e307ZSUyP24oT2JqZWN0KGEpLCEwKS5mb3JFYWNoKChmdW5jdGlvbihlKXt0KHIsZSxhW2VdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhyLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKGEpKTpuKE9iamVjdChhKSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHIsZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEsZSkpfSkpfXJldHVybiByfWZ1bmN0aW9uIG8ocixlKXtyZXR1cm4gZnVuY3Rpb24ocil7aWYoQXJyYXkuaXNBcnJheShyKSlyZXR1cm4gcn0ocil8fGZ1bmN0aW9uKHIsZSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIFN5bWJvbHx8IShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHIpKSlyZXR1cm47dmFyIHQ9W10sbj0hMCxhPSExLG89dm9pZCAwO3RyeXtmb3IodmFyIGkscz1yW1N5bWJvbC5pdGVyYXRvcl0oKTshKG49KGk9cy5uZXh0KCkpLmRvbmUpJiYodC5wdXNoKGkudmFsdWUpLCFlfHx0Lmxlbmd0aCE9PWUpO249ITApO31jYXRjaChyKXthPSEwLG89cn1maW5hbGx5e3RyeXtufHxudWxsPT1zLnJldHVybnx8cy5yZXR1cm4oKX1maW5hbGx5e2lmKGEpdGhyb3cgb319cmV0dXJuIHR9KHIsZSl8fHMocixlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGkocil7cmV0dXJuIGZ1bmN0aW9uKHIpe2lmKEFycmF5LmlzQXJyYXkocikpcmV0dXJuIGMocil9KHIpfHxmdW5jdGlvbihyKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KHIpKXJldHVybiBBcnJheS5mcm9tKHIpfShyKXx8cyhyKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBzKHIsZSl7aWYocil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHIpcmV0dXJuIGMocixlKTt2YXIgdD1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PXQmJnIuY29uc3RydWN0b3ImJih0PXIuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PXR8fFwiU2V0XCI9PT10P0FycmF5LmZyb20ocik6XCJBcmd1bWVudHNcIj09PXR8fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHQpP2MocixlKTp2b2lkIDB9fWZ1bmN0aW9uIGMocixlKXsobnVsbD09ZXx8ZT5yLmxlbmd0aCkmJihlPXIubGVuZ3RoKTtmb3IodmFyIHQ9MCxuPW5ldyBBcnJheShlKTt0PGU7dCsrKW5bdF09clt0XTtyZXR1cm4gbn1mdW5jdGlvbiBsKHIsZSl7aWYoIUFycmF5LmlzQXJyYXkocil8fCFyLmxlbmd0aClyZXR1cm4gcjt2YXIgdCxuLG89YShhKHt9LHtzdHJpY3RseVR3b0VsZW1lbnRzSW5SYW5nZUFycmF5czohMSxwcm9ncmVzc0ZuOm51bGx9KSxlKTtpZihvLnN0cmljdGx5VHdvRWxlbWVudHNJblJhbmdlQXJyYXlzJiYhci5maWx0ZXIoKGZ1bmN0aW9uKHIpe3JldHVybiByfSkpLmV2ZXJ5KChmdW5jdGlvbihyLGUpe3JldHVybiAyPT09ci5sZW5ndGh8fCh0PWUsbj1yLmxlbmd0aCwhMSl9KSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcInJhbmdlcy1zb3J0OiBbVEhST1dfSURfMDNdIFRoZSBmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgYW5kIG11c3QgY29uc2lzdCBvZiBhcnJheXMgd2hpY2ggYXJlIG5hdHVyYWwgbnVtYmVyIGluZGV4ZXMgcmVwcmVzZW50aW5nIFRXTyBzdHJpbmcgaW5kZXggcmFuZ2VzLiBIb3dldmVyLCBcIi5jb25jYXQodCxcInRoIHJhbmdlIChcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJbdF0sbnVsbCw0KSxcIikgaGFzIG5vdCB0d28gYnV0IFwiKS5jb25jYXQobixcIiBlbGVtZW50cyFcIikpO2lmKCFyLmZpbHRlcigoZnVuY3Rpb24ocil7cmV0dXJuIHJ9KSkuZXZlcnkoKGZ1bmN0aW9uKHIsZSl7cmV0dXJuISghTnVtYmVyLmlzSW50ZWdlcihyWzBdKXx8clswXTwwfHwhTnVtYmVyLmlzSW50ZWdlcihyWzFdKXx8clsxXTwwKXx8KHQ9ZSwhMSl9KSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcInJhbmdlcy1zb3J0OiBbVEhST1dfSURfMDRdIFRoZSBmaXJzdCBhcmd1bWVudCBzaG91bGQgYmUgYW4gYXJyYXkgYW5kIG11c3QgY29uc2lzdCBvZiBhcnJheXMgd2hpY2ggYXJlIG5hdHVyYWwgbnVtYmVyIGluZGV4ZXMgcmVwcmVzZW50aW5nIHN0cmluZyBpbmRleCByYW5nZXMuIEhvd2V2ZXIsIFwiLmNvbmNhdCh0LFwidGggcmFuZ2UgKFwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkoclt0XSxudWxsLDQpLFwiKSBkb2VzIG5vdCBjb25zaXN0IG9mIG9ubHkgbmF0dXJhbCBudW1iZXJzIVwiKSk7dmFyIGk9TWF0aC5wb3coci5maWx0ZXIoKGZ1bmN0aW9uKHIpe3JldHVybiByfSkpLmxlbmd0aCwyKSxzPTA7cmV0dXJuIEFycmF5LmZyb20ocikuZmlsdGVyKChmdW5jdGlvbihyKXtyZXR1cm4gcn0pKS5zb3J0KChmdW5jdGlvbihyLGUpe3JldHVybiBvLnByb2dyZXNzRm4mJihzKz0xLG8ucHJvZ3Jlc3NGbihNYXRoLmZsb29yKDEwMCpzL2kpKSksclswXT09PWVbMF0/clsxXTxlWzFdPy0xOnJbMV0+ZVsxXT8xOjA6clswXTxlWzBdPy0xOjF9KSl9ZnVuY3Rpb24gdShlLHQpe2Z1bmN0aW9uIG4ocil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHJ9ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09PXIoZSkmJiFBcnJheS5pc0FycmF5KGUpfWlmKCFBcnJheS5pc0FycmF5KGUpfHwhZS5sZW5ndGgpcmV0dXJuIG51bGw7dmFyIHMsYz17bWVyZ2VUeXBlOjEscHJvZ3Jlc3NGbjpudWxsLGpvaW5SYW5nZXNUaGF0VG91Y2hFZGdlczohMH07aWYodCl7aWYoIW8odCkpdGhyb3cgbmV3IEVycm9yKFwiZW1saW50OiBbVEhST1dfSURfMDNdIHRoZSBzZWNvbmQgaW5wdXQgYXJndW1lbnQgbXVzdCBiZSBhIHBsYWluIG9iamVjdC4gSXQgd2FzIGdpdmVuIGFzOlxcblwiLmNvbmNhdChKU09OLnN0cmluZ2lmeSh0LG51bGwsNCksXCIgKHR5cGUgXCIpLmNvbmNhdChyKHQpLFwiKVwiKSk7aWYoKHM9YShhKHt9LGMpLHQpKS5wcm9ncmVzc0ZuJiZvKHMucHJvZ3Jlc3NGbikmJiFPYmplY3Qua2V5cyhzLnByb2dyZXNzRm4pLmxlbmd0aClzLnByb2dyZXNzRm49bnVsbDtlbHNlIGlmKHMucHJvZ3Jlc3NGbiYmXCJmdW5jdGlvblwiIT10eXBlb2Ygcy5wcm9ncmVzc0ZuKXRocm93IG5ldyBFcnJvcigncmFuZ2VzLW1lcmdlOiBbVEhST1dfSURfMDFdIG9wdHMucHJvZ3Jlc3NGbiBtdXN0IGJlIGEgZnVuY3Rpb24hIEl0IHdhcyBnaXZlbiBvZiBhIHR5cGU6IFwiJy5jb25jYXQocihzLnByb2dyZXNzRm4pLCdcIiwgZXF1YWwgdG8gJykuY29uY2F0KEpTT04uc3RyaW5naWZ5KHMucHJvZ3Jlc3NGbixudWxsLDQpKSk7aWYocy5tZXJnZVR5cGUmJjEhPT1zLm1lcmdlVHlwZSYmMiE9PXMubWVyZ2VUeXBlKWlmKG4ocy5tZXJnZVR5cGUpJiZcIjFcIj09PXMubWVyZ2VUeXBlLnRyaW0oKSlzLm1lcmdlVHlwZT0xO2Vsc2V7aWYoIW4ocy5tZXJnZVR5cGUpfHxcIjJcIiE9PXMubWVyZ2VUeXBlLnRyaW0oKSl0aHJvdyBuZXcgRXJyb3IoJ3Jhbmdlcy1tZXJnZTogW1RIUk9XX0lEXzAyXSBvcHRzLm1lcmdlVHlwZSB3YXMgY3VzdG9taXNlZCB0byBhIHdyb25nIHRoaW5nISBJdCB3YXMgZ2l2ZW4gb2YgYSB0eXBlOiBcIicuY29uY2F0KHIocy5tZXJnZVR5cGUpLCdcIiwgZXF1YWwgdG8gJykuY29uY2F0KEpTT04uc3RyaW5naWZ5KHMubWVyZ2VUeXBlLG51bGwsNCkpKTtzLm1lcmdlVHlwZT0yfWlmKFwiYm9vbGVhblwiIT10eXBlb2Ygcy5qb2luUmFuZ2VzVGhhdFRvdWNoRWRnZXMpdGhyb3cgbmV3IEVycm9yKCdyYW5nZXMtbWVyZ2U6IFtUSFJPV19JRF8wNF0gb3B0cy5qb2luUmFuZ2VzVGhhdFRvdWNoRWRnZXMgd2FzIGN1c3RvbWlzZWQgdG8gYSB3cm9uZyB0aGluZyEgSXQgd2FzIGdpdmVuIG9mIGEgdHlwZTogXCInLmNvbmNhdChyKHMuam9pblJhbmdlc1RoYXRUb3VjaEVkZ2VzKSwnXCIsIGVxdWFsIHRvICcpLmNvbmNhdChKU09OLnN0cmluZ2lmeShzLmpvaW5SYW5nZXNUaGF0VG91Y2hFZGdlcyxudWxsLDQpKSl9ZWxzZSBzPWEoe30sYyk7Zm9yKHZhciB1LHAsZyxmPWUuZmlsdGVyKChmdW5jdGlvbihyKXtyZXR1cm4gcn0pKS5tYXAoKGZ1bmN0aW9uKHIpe3JldHVybiBpKHIpfSkpLmZpbHRlcigoZnVuY3Rpb24ocil7cmV0dXJuIHZvaWQgMCE9PXJbMl18fHJbMF0hPT1yWzFdfSkpLGQ9KHU9cy5wcm9ncmVzc0ZuP2woZix7cHJvZ3Jlc3NGbjpmdW5jdGlvbihyKXsoZz1NYXRoLmZsb29yKHIvNSkpIT09cCYmKHA9ZyxzLnByb2dyZXNzRm4oZykpfX0pOmwoZikpLmxlbmd0aC0xLGg9ZDtoPjA7aC0tKXMucHJvZ3Jlc3NGbiYmKGc9TWF0aC5mbG9vcig3OCooMS1oL2QpKSsyMSkhPT1wJiZnPnAmJihwPWcscy5wcm9ncmVzc0ZuKGcpKSwodVtoXVswXTw9dVtoLTFdWzBdfHwhcy5qb2luUmFuZ2VzVGhhdFRvdWNoRWRnZXMmJnVbaF1bMF08dVtoLTFdWzFdfHxzLmpvaW5SYW5nZXNUaGF0VG91Y2hFZGdlcyYmdVtoXVswXTw9dVtoLTFdWzFdKSYmKHVbaC0xXVswXT1NYXRoLm1pbih1W2hdWzBdLHVbaC0xXVswXSksdVtoLTFdWzFdPU1hdGgubWF4KHVbaF1bMV0sdVtoLTFdWzFdKSx2b2lkIDAhPT11W2hdWzJdJiYodVtoLTFdWzBdPj11W2hdWzBdfHx1W2gtMV1bMV08PXVbaF1bMV0pJiZudWxsIT09dVtoLTFdWzJdJiYobnVsbD09PXVbaF1bMl0mJm51bGwhPT11W2gtMV1bMl0/dVtoLTFdWzJdPW51bGw6dm9pZCAwIT09dVtoLTFdWzJdPzI9PT1zLm1lcmdlVHlwZSYmdVtoLTFdWzBdPT09dVtoXVswXT91W2gtMV1bMl09dVtoXVsyXTp1W2gtMV1bMl0rPXVbaF1bMl06dVtoLTFdWzJdPXVbaF1bMl0pLHUuc3BsaWNlKGgsMSksaD11Lmxlbmd0aCk7cmV0dXJuIHUubGVuZ3RoP3U6bnVsbH1mdW5jdGlvbiBwKHIpe3JldHVybiBudWxsIT1yfWZ1bmN0aW9uIGcocil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHJ9ZnVuY3Rpb24gZihlLHQsbil7dmFyIGEsbz0wLGk9MDtpZigwPT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoXCJyYW5nZXMtYXBwbHk6IFtUSFJPV19JRF8wMV0gaW5wdXRzIG1pc3NpbmchXCIpO2lmKCFnKGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJyYW5nZXMtYXBwbHk6IFtUSFJPV19JRF8wMl0gZmlyc3QgaW5wdXQgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZyEgQ3VycmVudGx5IGl0J3M6IFwiLmNvbmNhdChyKGUpLFwiLCBlcXVhbCB0bzogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlLG51bGwsNCkpKTtpZih0JiYhQXJyYXkuaXNBcnJheSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwicmFuZ2VzLWFwcGx5OiBbVEhST1dfSURfMDNdIHNlY29uZCBpbnB1dCBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5IChvciBudWxsKSEgQ3VycmVudGx5IGl0J3M6IFwiLmNvbmNhdChyKHQpLFwiLCBlcXVhbCB0bzogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeSh0LG51bGwsNCkpKTtpZihuJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBuKXRocm93IG5ldyBUeXBlRXJyb3IoXCJyYW5nZXMtYXBwbHk6IFtUSFJPV19JRF8wNF0gdGhlIHRoaXJkIGlucHV0IGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbiAob3IgZmFsc2V5KSEgQ3VycmVudGx5IGl0J3M6IFwiLmNvbmNhdChyKG4pLFwiLCBlcXVhbCB0bzogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShuLG51bGwsNCkpKTtpZighdHx8IXQuZmlsdGVyKChmdW5jdGlvbihyKXtyZXR1cm4gcn0pKS5sZW5ndGgpcmV0dXJuIGU7dmFyIHM9KGE9QXJyYXkuaXNBcnJheSh0KSYmKE51bWJlci5pc0ludGVnZXIodFswXSkmJnRbMF0+PTB8fC9eXFxkKiQvLnRlc3QodFswXSkpJiYoTnVtYmVyLmlzSW50ZWdlcih0WzFdKSYmdFsxXT49MHx8L15cXGQqJC8udGVzdCh0WzFdKSk/W0FycmF5LmZyb20odCldOkFycmF5LmZyb20odCkpLmxlbmd0aCxjPTA7YS5maWx0ZXIoKGZ1bmN0aW9uKHIpe3JldHVybiByfSkpLmZvckVhY2goKGZ1bmN0aW9uKGUsdCl7aWYobiYmKG89TWF0aC5mbG9vcihjL3MqMTApKSE9PWkmJihpPW8sbihvKSksIUFycmF5LmlzQXJyYXkoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcInJhbmdlcy1hcHBseTogW1RIUk9XX0lEXzA1XSByYW5nZXMgYXJyYXksIHNlY29uZCBpbnB1dCBhcmcuLCBoYXMgXCIuY29uY2F0KHQsXCJ0aCBlbGVtZW50IG5vdCBhbiBhcnJheTogXCIpLmNvbmNhdChKU09OLnN0cmluZ2lmeShlLG51bGwsNCksXCIsIHdoaWNoIGlzIFwiKS5jb25jYXQocihlKSkpO2lmKCFOdW1iZXIuaXNJbnRlZ2VyKGVbMF0pfHxlWzBdPDApe2lmKCEvXlxcZCokLy50ZXN0KGVbMF0pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJyYW5nZXMtYXBwbHk6IFtUSFJPV19JRF8wNl0gcmFuZ2VzIGFycmF5LCBzZWNvbmQgaW5wdXQgYXJnLiBoYXMgXCIuY29uY2F0KHQsXCJ0aCBlbGVtZW50LCBhcnJheSBbXCIpLmNvbmNhdChlWzBdLFwiLFwiKS5jb25jYXQoZVsxXSxcIl0uIFRoYXQgYXJyYXkgaGFzIGZpcnN0IGVsZW1lbnQgbm90IGFuIGludGVnZXIsIGJ1dCBcIikuY29uY2F0KHIoZVswXSksXCIsIGVxdWFsIHRvOiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGVbMF0sbnVsbCw0KSxcIi4gQ29tcHV0ZXIgZG9lc24ndCBsaWtlIHRoaXMuXCIpKTthW3RdWzBdPU51bWJlci5wYXJzZUludChhW3RdWzBdLDEwKX1pZighTnVtYmVyLmlzSW50ZWdlcihlWzFdKSl7aWYoIS9eXFxkKiQvLnRlc3QoZVsxXSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcInJhbmdlcy1hcHBseTogW1RIUk9XX0lEXzA3XSByYW5nZXMgYXJyYXksIHNlY29uZCBpbnB1dCBhcmcuIGhhcyBcIi5jb25jYXQodCxcInRoIGVsZW1lbnQsIGFycmF5IFtcIikuY29uY2F0KGVbMF0sXCIsXCIpLmNvbmNhdChlWzFdLFwiXS4gVGhhdCBhcnJheSBoYXMgc2Vjb25kIGVsZW1lbnQgbm90IGFuIGludGVnZXIsIGJ1dCBcIikuY29uY2F0KHIoZVsxXSksXCIsIGVxdWFsIHRvOiBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KGVbMV0sbnVsbCw0KSxcIi4gQ29tcHV0ZXIgZG9lc24ndCBsaWtlIHRoaXMuXCIpKTthW3RdWzFdPU51bWJlci5wYXJzZUludChhW3RdWzFdLDEwKX1jKz0xfSkpO3ZhciBsPXUoYSx7cHJvZ3Jlc3NGbjpmdW5jdGlvbihyKXtuJiYobz0xMCtNYXRoLmZsb29yKHIvMTApKSE9PWkmJihpPW8sbihvKSl9fSk7aWYoIWwpcmV0dXJuIGU7dmFyIGY9bC5sZW5ndGg7aWYoZj4wKXt2YXIgZD1lLnNsaWNlKGxbZi0xXVsxXSk7ZT1sLnJlZHVjZSgoZnVuY3Rpb24ocix0LGEscyl7biYmKG89MjArTWF0aC5mbG9vcihhL2YqODApKSE9PWkmJihpPW8sbihvKSk7dmFyIGM9MD09PWE/MDpzW2EtMV1bMV0sbD1zW2FdWzBdO3JldHVybiByK2Uuc2xpY2UoYyxsKSsocChzW2FdWzJdKT9zW2FdWzJdOlwiXCIpfSksXCJcIiksZSs9ZH1yZXR1cm4gZX12YXIgZD1cIsKgXCI7ZnVuY3Rpb24gaChyKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MTtmdW5jdGlvbiB0KHIpe3JldHVybiBBcnJheS5mcm9tKHIpLnJldmVyc2UoKS5qb2luKFwiXCIpfWZ1bmN0aW9uIG4ocixlLHQpe3ZhciBuPXQ/XCJcXG5cIjpcIlxcclwiLGE9dD9cIlxcclwiOlwiXFxuXCI7aWYoIXIpcmV0dXJuIHI7Zm9yKHZhciBvPTAsaT1cIlwiLHM9MCxjPXIubGVuZ3RoO3M8YztzKyspKHJbc109PT1ufHxyW3NdPT09YSYmcltzLTFdIT09bikmJm8rKyxcIlxcclxcblwiLmluY2x1ZGVzKHJbc10pfHxyW3NdPT09ZD9yW3NdPT09ZD9pKz1yW3NdOnJbc109PT1uP288PWUmJihpKz1yW3NdLHJbcysxXT09PWEmJihpKz1yW3MrMV0scysrKSk6cltzXT09PWEmJighcltzLTFdfHxyW3MtMV0hPT1uKSYmbzw9ZSYmKGkrPXJbc10pOnJbcysxXXx8b3x8KGkrPVwiIFwiKTtyZXR1cm4gaX1pZihcInN0cmluZ1wiPT10eXBlb2YgciYmci5sZW5ndGgpe3ZhciBhPTE7XCJudW1iZXJcIj09dHlwZW9mK2UmJk51bWJlci5pc0ludGVnZXIoK2UpJiYrZT49MCYmKGE9K2UpO3ZhciBvPVwiXCIsaT1cIlwiO2lmKHIudHJpbSgpKXtpZighclswXS50cmltKCkpZm9yKHZhciBzPTAsYz1yLmxlbmd0aDtzPGM7cysrKWlmKHJbc10udHJpbSgpKXtvPXIuc2xpY2UoMCxzKTticmVha319ZWxzZSBvPXI7aWYoci50cmltKCkmJihcIlwiPT09ci5zbGljZSgtMSkudHJpbSgpfHxyLnNsaWNlKC0xKT09PWQpKWZvcih2YXIgbD1yLmxlbmd0aDtsLS07KWlmKHJbbF0udHJpbSgpKXtpPXIuc2xpY2UobCsxKTticmVha31yZXR1cm5cIlwiLmNvbmNhdChuKG8sYSwhMSkpLmNvbmNhdChyLnRyaW0oKSkuY29uY2F0KHQobih0KGkpLGEsITApKSl9cmV0dXJuIHJ9ZnVuY3Rpb24gbShyKXtyZXR1cm4gbnVsbCE9cn1mdW5jdGlvbiBiKHIpe3JldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHIpJiZyPj0wfWZ1bmN0aW9uIHkocil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHJ9ZnVuY3Rpb24gdihyKXtyZXR1cm4vXlxcZCokLy50ZXN0KHIpP3BhcnNlSW50KHIsMTApOnJ9dmFyIHc9ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KGUpeyFmdW5jdGlvbihyLGUpe2lmKCEociBpbnN0YW5jZW9mIGUpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsdCk7dmFyIG49YShhKHt9LHtsaW1pdFRvQmVBZGRlZFdoaXRlc3BhY2U6ITEsbGltaXRMaW5lYnJlYWtzQ291bnQ6MSxtZXJnZVR5cGU6MX0pLGUpO2lmKG4ubWVyZ2VUeXBlJiYxIT09bi5tZXJnZVR5cGUmJjIhPT1uLm1lcmdlVHlwZSlpZih5KG4ubWVyZ2VUeXBlKSYmXCIxXCI9PT1uLm1lcmdlVHlwZS50cmltKCkpbi5tZXJnZVR5cGU9MTtlbHNle2lmKCF5KG4ubWVyZ2VUeXBlKXx8XCIyXCIhPT1uLm1lcmdlVHlwZS50cmltKCkpdGhyb3cgbmV3IEVycm9yKCdyYW5nZXMtcHVzaDogW1RIUk9XX0lEXzAyXSBvcHRzLm1lcmdlVHlwZSB3YXMgY3VzdG9taXNlZCB0byBhIHdyb25nIHRoaW5nISBJdCB3YXMgZ2l2ZW4gb2YgYSB0eXBlOiBcIicuY29uY2F0KHIobi5tZXJnZVR5cGUpLCdcIiwgZXF1YWwgdG8gJykuY29uY2F0KEpTT04uc3RyaW5naWZ5KG4ubWVyZ2VUeXBlLG51bGwsNCkpKTtuLm1lcmdlVHlwZT0yfXRoaXMub3B0cz1ufXZhciBuLG8scztyZXR1cm4gbj10LChvPVt7a2V5OlwiYWRkXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe2Zvcih2YXIgYT10aGlzLG89YXJndW1lbnRzLmxlbmd0aCxzPW5ldyBBcnJheShvPjM/by0zOjApLGM9MztjPG87YysrKXNbYy0zXT1hcmd1bWVudHNbY107aWYocy5sZW5ndGg+MCl0aHJvdyBuZXcgVHlwZUVycm9yKFwicmFuZ2VzLXB1c2gvUmFuZ2VzL2FkZCgpOiBbVEhST1dfSURfMDNdIFBsZWFzZSBkb24ndCBvdmVybG9hZCB0aGUgYWRkKCkgbWV0aG9kLiBGcm9tIHRoZSA0dGggaW5wdXQgYXJndW1lbnQgb253YXJkcyB3ZSBzZWUgdGhlc2UgcmVkdW5kYW50IGFyZ3VtZW50czogXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHMsbnVsbCw0KSkpO2lmKG0oZSl8fG0odCkpe2lmKG0oZSkmJiFtKHQpKXtpZihBcnJheS5pc0FycmF5KGUpKXtpZihlLmxlbmd0aCl7aWYoZS5zb21lKChmdW5jdGlvbihyKXtyZXR1cm4gQXJyYXkuaXNBcnJheShyKX0pKSlyZXR1cm4gdm9pZCBlLmZvckVhY2goKGZ1bmN0aW9uKHIpe0FycmF5LmlzQXJyYXkocikmJmEuYWRkLmFwcGx5KGEsaShyKSl9KSk7ZS5sZW5ndGg+MSYmYih2KGVbMF0pKSYmYih2KGVbMV0pKSYmdGhpcy5hZGQuYXBwbHkodGhpcyxpKGUpKX1yZXR1cm59dGhyb3cgbmV3IFR5cGVFcnJvcigncmFuZ2VzLXB1c2gvUmFuZ2VzL2FkZCgpOiBbVEhST1dfSURfMTJdIHRoZSBmaXJzdCBpbnB1dCBhcmd1bWVudCwgXCJmcm9tXCIgaXMgc2V0ICgnLmNvbmNhdChKU09OLnN0cmluZ2lmeShlLG51bGwsMCksJykgYnV0IHNlY29uZC1vbmUsIFwidG9cIiBpcyBub3QgKCcpLmNvbmNhdChKU09OLnN0cmluZ2lmeSh0LG51bGwsMCksXCIpXCIpKX1pZighbShlKSYmbSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKCdyYW5nZXMtcHVzaC9SYW5nZXMvYWRkKCk6IFtUSFJPV19JRF8xM10gdGhlIHNlY29uZCBpbnB1dCBhcmd1bWVudCwgXCJ0b1wiIGlzIHNldCAoJy5jb25jYXQoSlNPTi5zdHJpbmdpZnkodCxudWxsLDApLCcpIGJ1dCBmaXJzdC1vbmUsIFwiZnJvbVwiIGlzIG5vdCAoJykuY29uY2F0KEpTT04uc3RyaW5naWZ5KGUsbnVsbCwwKSxcIilcIikpO3ZhciBsPS9eXFxkKiQvLnRlc3QoZSk/cGFyc2VJbnQoZSwxMCk6ZSx1PS9eXFxkKiQvLnRlc3QodCk/cGFyc2VJbnQodCwxMCk6dDtpZihiKG4pJiYobj1TdHJpbmcobikpLCFiKGwpfHwhYih1KSl0aHJvdyBiKGwpJiZsPj0wP25ldyBUeXBlRXJyb3IoJ3Jhbmdlcy1wdXNoL1Jhbmdlcy9hZGQoKTogW1RIUk9XX0lEXzEwXSBcInRvXCIgdmFsdWUsIHRoZSBzZWNvbmQgaW5wdXQgYXJndW1lbnQsIG11c3QgYmUgYSBuYXR1cmFsIG51bWJlciBvciB6ZXJvISBDdXJyZW50bHkgaXRcXCdzIG9mIGEgdHlwZSBcIicuY29uY2F0KHIodSksJ1wiIGVxdWFsIHRvOiAnKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkodSxudWxsLDQpKSk6bmV3IFR5cGVFcnJvcigncmFuZ2VzLXB1c2gvUmFuZ2VzL2FkZCgpOiBbVEhST1dfSURfMDldIFwiZnJvbVwiIHZhbHVlLCB0aGUgZmlyc3QgaW5wdXQgYXJndW1lbnQsIG11c3QgYmUgYSBuYXR1cmFsIG51bWJlciBvciB6ZXJvISBDdXJyZW50bHkgaXRcXCdzIG9mIGEgdHlwZSBcIicuY29uY2F0KHIobCksJ1wiIGVxdWFsIHRvOiAnKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkobCxudWxsLDQpKSk7aWYobShuKSYmIXkobikmJiFiKG4pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJyYW5nZXMtcHVzaC9SYW5nZXMvYWRkKCk6IFtUSFJPV19JRF8wOF0gVGhlIHRoaXJkIGFyZ3VtZW50LCB0aGUgdmFsdWUgdG8gYWRkLCB3YXMgZ2l2ZW4gbm90IGFzIHN0cmluZyBidXQgXCIuY29uY2F0KHIobiksXCIsIGVxdWFsIHRvOlxcblwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkobixudWxsLDQpKSk7aWYobSh0aGlzLnJhbmdlcykmJkFycmF5LmlzQXJyYXkodGhpcy5sYXN0KCkpJiZsPT09dGhpcy5sYXN0KClbMV0pe2lmKHRoaXMubGFzdCgpWzFdPXUsdGhpcy5sYXN0KClbMl0sbnVsbCE9PXRoaXMubGFzdCgpWzJdJiZtKG4pKXt2YXIgcD0hKG0odGhpcy5sYXN0KClbMl0pJiZ0aGlzLmxhc3QoKVsyXS5sZW5ndGg+MCl8fHRoaXMub3B0cyYmdGhpcy5vcHRzLm1lcmdlVHlwZSYmMSE9PXRoaXMub3B0cy5tZXJnZVR5cGU/bjp0aGlzLmxhc3QoKVsyXStuO3RoaXMub3B0cy5saW1pdFRvQmVBZGRlZFdoaXRlc3BhY2UmJihwPWgocCx0aGlzLm9wdHMubGltaXRMaW5lYnJlYWtzQ291bnQpKSx5KHApJiYhcC5sZW5ndGh8fCh0aGlzLmxhc3QoKVsyXT1wKX19ZWxzZXt0aGlzLnJhbmdlc3x8KHRoaXMucmFuZ2VzPVtdKTt2YXIgZz12b2lkIDA9PT1ufHx5KG4pJiYhbi5sZW5ndGg/W2wsdV06W2wsdSx0aGlzLm9wdHMubGltaXRUb0JlQWRkZWRXaGl0ZXNwYWNlP2gobix0aGlzLm9wdHMubGltaXRMaW5lYnJlYWtzQ291bnQpOm5dO3RoaXMucmFuZ2VzLnB1c2goZyl9fX19LHtrZXk6XCJwdXNoXCIsdmFsdWU6ZnVuY3Rpb24ocixlLHQpe2Zvcih2YXIgbj1hcmd1bWVudHMubGVuZ3RoLGE9bmV3IEFycmF5KG4+Mz9uLTM6MCksbz0zO288bjtvKyspYVtvLTNdPWFyZ3VtZW50c1tvXTt0aGlzLmFkZC5hcHBseSh0aGlzLFtyLGUsdF0uY29uY2F0KGEpKX19LHtrZXk6XCJjdXJyZW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgcj10aGlzO3JldHVybiBudWxsIT10aGlzLnJhbmdlcz8odGhpcy5yYW5nZXM9dSh0aGlzLnJhbmdlcyx7bWVyZ2VUeXBlOnRoaXMub3B0cy5tZXJnZVR5cGV9KSx0aGlzLnJhbmdlcyYmdGhpcy5vcHRzLmxpbWl0VG9CZUFkZGVkV2hpdGVzcGFjZT90aGlzLnJhbmdlcy5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBtKGVbMl0pP1tlWzBdLGVbMV0saChlWzJdLHIub3B0cy5saW1pdExpbmVicmVha3NDb3VudCldOmV9KSk6dGhpcy5yYW5nZXMpOm51bGx9fSx7a2V5Olwid2lwZVwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5yYW5nZXM9dm9pZCAwfX0se2tleTpcInJlcGxhY2VcIix2YWx1ZTpmdW5jdGlvbihyKXtpZihBcnJheS5pc0FycmF5KHIpJiZyLmxlbmd0aCl7aWYoIUFycmF5LmlzQXJyYXkoclswXSl8fCFiKHJbMF1bMF0pKXRocm93IG5ldyBFcnJvcihcInJhbmdlcy1wdXNoL1Jhbmdlcy9yZXBsYWNlKCk6IFtUSFJPV19JRF8xMV0gU2luZ2xlIHJhbmdlIHdhcyBnaXZlbiBidXQgd2UgZXhwZWN0ZWQgYXJyYXkgb2YgYXJyYXlzISBUaGUgZmlyc3QgZWxlbWVudCwgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KHJbMF0sbnVsbCw0KSxcIiBzaG91bGQgYmUgYW4gYXJyYXkgYW5kIGl0cyBmaXJzdCBlbGVtZW50IHNob3VsZCBiZSBhbiBpbnRlZ2VyLCBhIHN0cmluZyBpbmRleC5cIikpO3RoaXMucmFuZ2VzPUFycmF5LmZyb20ocil9ZWxzZSB0aGlzLnJhbmdlcz12b2lkIDB9fSx7a2V5OlwibGFzdFwiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMCE9PXRoaXMucmFuZ2VzJiZBcnJheS5pc0FycmF5KHRoaXMucmFuZ2VzKT90aGlzLnJhbmdlc1t0aGlzLnJhbmdlcy5sZW5ndGgtMV06bnVsbH19XSkmJmUobi5wcm90b3R5cGUsbykscyYmZShuLHMpLHR9KCk7dmFyIHEsVCxBPUZ1bmN0aW9uLnByb3RvdHlwZSxrPU9iamVjdC5wcm90b3R5cGUsTz1BLnRvU3RyaW5nLFM9ay5oYXNPd25Qcm9wZXJ0eSxFPU8uY2FsbChPYmplY3QpLF89ay50b1N0cmluZyx4PShxPU9iamVjdC5nZXRQcm90b3R5cGVPZixUPU9iamVjdCxmdW5jdGlvbihyKXtyZXR1cm4gcShUKHIpKX0pO3ZhciBEPWZ1bmN0aW9uKGUpe2lmKCFmdW5jdGlvbihlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PXIoZSl9KGUpfHxcIltvYmplY3QgT2JqZWN0XVwiIT1fLmNhbGwoZSl8fGZ1bmN0aW9uKHIpe3ZhciBlPSExO2lmKG51bGwhPXImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHIudG9TdHJpbmcpdHJ5e2U9ISEocitcIlwiKX1jYXRjaChyKXt9cmV0dXJuIGV9KGUpKXJldHVybiExO3ZhciB0PXgoZSk7aWYobnVsbD09PXQpcmV0dXJuITA7dmFyIG49Uy5jYWxsKHQsXCJjb25zdHJ1Y3RvclwiKSYmdC5jb25zdHJ1Y3RvcjtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiZuIGluc3RhbmNlb2YgbiYmTy5jYWxsKG4pPT1FfSxMPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp7fTtmdW5jdGlvbiBSKHIpe2lmKHIuX19lc01vZHVsZSlyZXR1cm4gcjt2YXIgZT1PYmplY3QuZGVmaW5lUHJvcGVydHkoe30sXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7cmV0dXJuIE9iamVjdC5rZXlzKHIpLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LG4uZ2V0P246e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHJbdF19fSl9KSksZX12YXIgTj1cIltvYmplY3QgU3ltYm9sXVwiLGo9L15cXHMrfFxccyskL2csQz1cIlxcXFx1MDMwMC1cXFxcdTAzNmZcXFxcdWZlMjAtXFxcXHVmZTIzXCIsQj1cIltcXFxcdWQ4MDAtXFxcXHVkZmZmXVwiLEk9XCJbXCIrQytcIlxcXFx1MjBkMC1cXFxcdTIwZjBdXCIsSD1cIlxcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXVwiLFU9XCJbXlxcXFx1ZDgwMC1cXFxcdWRmZmZdXCIsVj1cIig/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn1cIixQPVwiW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdXCIsVz1cIig/OlwiK0krXCJ8XCIrSCtcIilcIitcIj9cIixGPVwiW1xcXFx1ZmUwZVxcXFx1ZmUwZl0/XCIsRz1GK1crKFwiKD86XFxcXHUyMDBkKD86XCIrW1UsVixQXS5qb2luKFwifFwiKStcIilcIitGK1crXCIpKlwiKSx6PVwiKD86XCIrW1UrSStcIj9cIixJLFYsUCxCXS5qb2luKFwifFwiKStcIilcIixKPVJlZ0V4cChIK1wiKD89XCIrSCtcIil8XCIreitHLFwiZ1wiKSxNPVJlZ0V4cChcIltcXFxcdTIwMGRcXFxcdWQ4MDAtXFxcXHVkZmZmXFxcXHUwMzAwLVxcXFx1MDM2ZlxcXFx1ZmUyMC1cXFxcdWZlMjNcXFxcdTIwZDAtXFxcXHUyMGYwXFxcXHVmZTBlXFxcXHVmZTBmXVwiKSwkPVwib2JqZWN0XCI9PXIoTCkmJkwmJkwuT2JqZWN0PT09T2JqZWN0JiZMLFo9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6cihzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLFk9JHx8Wnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO2Z1bmN0aW9uIEsocixlLHQpe2lmKGUhPWUpcmV0dXJuIGZ1bmN0aW9uKHIsZSx0LG4pe2Zvcih2YXIgYT1yLmxlbmd0aCxvPXQrKG4/MTotMSk7bj9vLS06KytvPGE7KWlmKGUocltvXSxvLHIpKXJldHVybiBvO3JldHVybi0xfShyLFEsdCk7Zm9yKHZhciBuPXQtMSxhPXIubGVuZ3RoOysrbjxhOylpZihyW25dPT09ZSlyZXR1cm4gbjtyZXR1cm4tMX1mdW5jdGlvbiBRKHIpe3JldHVybiByIT1yfWZ1bmN0aW9uIFgocil7cmV0dXJuIGZ1bmN0aW9uKHIpe3JldHVybiBNLnRlc3Qocil9KHIpP2Z1bmN0aW9uKHIpe3JldHVybiByLm1hdGNoKEopfHxbXX0ocik6ZnVuY3Rpb24ocil7cmV0dXJuIHIuc3BsaXQoXCJcIil9KHIpfXZhciBycj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLGVyPVkuU3ltYm9sLHRyPWVyP2VyLnByb3RvdHlwZTp2b2lkIDAsbnI9dHI/dHIudG9TdHJpbmc6dm9pZCAwO2Z1bmN0aW9uIGFyKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBlO2lmKGZ1bmN0aW9uKGUpe3JldHVyblwic3ltYm9sXCI9PXIoZSl8fGZ1bmN0aW9uKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09cihlKX0oZSkmJnJyLmNhbGwoZSk9PU59KGUpKXJldHVybiBucj9uci5jYWxsKGUpOlwiXCI7dmFyIHQ9ZStcIlwiO3JldHVyblwiMFwiPT10JiYxL2U9PS1JbmZpbml0eT9cIi0wXCI6dH1mdW5jdGlvbiBvcihyLGUsdCl7dmFyIG49ci5sZW5ndGg7cmV0dXJuIHQ9dm9pZCAwPT09dD9uOnQsIWUmJnQ+PW4/cjpmdW5jdGlvbihyLGUsdCl7dmFyIG49LTEsYT1yLmxlbmd0aDtlPDAmJihlPS1lPmE/MDphK2UpLCh0PXQ+YT9hOnQpPDAmJih0Kz1hKSxhPWU+dD8wOnQtZT4+PjAsZT4+Pj0wO2Zvcih2YXIgbz1BcnJheShhKTsrK248YTspb1tuXT1yW24rZV07cmV0dXJuIG99KHIsZSx0KX12YXIgaXI9ZnVuY3Rpb24ocixlLHQpe3ZhciBuO2lmKChyPW51bGw9PShuPXIpP1wiXCI6YXIobikpJiYodHx8dm9pZCAwPT09ZSkpcmV0dXJuIHIucmVwbGFjZShqLFwiXCIpO2lmKCFyfHwhKGU9YXIoZSkpKXJldHVybiByO3ZhciBhPVgociksbz1YKGUpO3JldHVybiBvcihhLGZ1bmN0aW9uKHIsZSl7Zm9yKHZhciB0PS0xLG49ci5sZW5ndGg7Kyt0PG4mJksoZSxyW3RdLDApPi0xOyk7cmV0dXJuIHR9KGEsbyksZnVuY3Rpb24ocixlKXtmb3IodmFyIHQ9ci5sZW5ndGg7dC0tJiZLKGUsclt0XSwwKT4tMTspO3JldHVybiB0fShhLG8pKzEpLmpvaW4oXCJcIil9LHNyPVwiX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfX1wiLGNyPTkwMDcxOTkyNTQ3NDA5OTEsbHI9L15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLyx1cj1cIm9iamVjdFwiPT1yKEwpJiZMJiZMLk9iamVjdD09PU9iamVjdCYmTCxwcj1cIm9iamVjdFwiPT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHNlbGY/XCJ1bmRlZmluZWRcIjpyKHNlbGYpKSYmc2VsZiYmc2VsZi5PYmplY3Q9PT1PYmplY3QmJnNlbGYsZ3I9dXJ8fHByfHxGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7ZnVuY3Rpb24gZnIocixlLHQpe3N3aXRjaCh0Lmxlbmd0aCl7Y2FzZSAwOnJldHVybiByLmNhbGwoZSk7Y2FzZSAxOnJldHVybiByLmNhbGwoZSx0WzBdKTtjYXNlIDI6cmV0dXJuIHIuY2FsbChlLHRbMF0sdFsxXSk7Y2FzZSAzOnJldHVybiByLmNhbGwoZSx0WzBdLHRbMV0sdFsyXSl9cmV0dXJuIHIuYXBwbHkoZSx0KX1mdW5jdGlvbiBkcihyLGUpe3JldHVybiEhKHI/ci5sZW5ndGg6MCkmJmZ1bmN0aW9uKHIsZSx0KXtpZihlIT1lKXJldHVybiBmdW5jdGlvbihyLGUsdCxuKXt2YXIgYT1yLmxlbmd0aCxvPXQrKG4/MTotMSk7Zm9yKDtuP28tLTorK288YTspaWYoZShyW29dLG8scikpcmV0dXJuIG87cmV0dXJuLTF9KHIsbXIsdCk7dmFyIG49dC0xLGE9ci5sZW5ndGg7Zm9yKDsrK248YTspaWYocltuXT09PWUpcmV0dXJuIG47cmV0dXJuLTF9KHIsZSwwKT4tMX1mdW5jdGlvbiBocihyLGUsdCl7Zm9yKHZhciBuPS0xLGE9cj9yLmxlbmd0aDowOysrbjxhOylpZih0KGUscltuXSkpcmV0dXJuITA7cmV0dXJuITF9ZnVuY3Rpb24gbXIocil7cmV0dXJuIHIhPXJ9ZnVuY3Rpb24gYnIocixlKXtyZXR1cm4gci5oYXMoZSl9dmFyIHlyLHZyPUFycmF5LnByb3RvdHlwZSx3cj1GdW5jdGlvbi5wcm90b3R5cGUscXI9T2JqZWN0LnByb3RvdHlwZSxUcj1ncltcIl9fY29yZS1qc19zaGFyZWRfX1wiXSxBcj0oeXI9L1teLl0rJC8uZXhlYyhUciYmVHIua2V5cyYmVHIua2V5cy5JRV9QUk9UT3x8XCJcIikpP1wiU3ltYm9sKHNyYylfMS5cIit5cjpcIlwiLGtyPXdyLnRvU3RyaW5nLE9yPXFyLmhhc093blByb3BlcnR5LFNyPXFyLnRvU3RyaW5nLEVyPVJlZ0V4cChcIl5cIitrci5jYWxsKE9yKS5yZXBsYWNlKC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZyxcIlxcXFwkJlwiKS5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLFwiJDEuKj9cIikrXCIkXCIpLF9yPXZyLnNwbGljZSx4cj1NYXRoLm1heCxEcj1WcihncixcIk1hcFwiKSxMcj1WcihPYmplY3QsXCJjcmVhdGVcIik7ZnVuY3Rpb24gUnIocil7dmFyIGU9LTEsdD1yP3IubGVuZ3RoOjA7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8dDspe3ZhciBuPXJbZV07dGhpcy5zZXQoblswXSxuWzFdKX19ZnVuY3Rpb24gTnIocil7dmFyIGU9LTEsdD1yP3IubGVuZ3RoOjA7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8dDspe3ZhciBuPXJbZV07dGhpcy5zZXQoblswXSxuWzFdKX19ZnVuY3Rpb24ganIocil7dmFyIGU9LTEsdD1yP3IubGVuZ3RoOjA7Zm9yKHRoaXMuY2xlYXIoKTsrK2U8dDspe3ZhciBuPXJbZV07dGhpcy5zZXQoblswXSxuWzFdKX19ZnVuY3Rpb24gQ3Iocil7dmFyIGU9LTEsdD1yP3IubGVuZ3RoOjA7Zm9yKHRoaXMuX19kYXRhX189bmV3IGpyOysrZTx0Oyl0aGlzLmFkZChyW2VdKX1mdW5jdGlvbiBCcihyLGUpe2Zvcih2YXIgdCxuLGE9ci5sZW5ndGg7YS0tOylpZigodD1yW2FdWzBdKT09PShuPWUpfHx0IT10JiZuIT1uKXJldHVybiBhO3JldHVybi0xfWZ1bmN0aW9uIElyKHIsZSx0LG4pe3ZhciBhPS0xLG89ZHIsaT0hMCxzPXIubGVuZ3RoLGM9W10sbD1lLmxlbmd0aDtpZighcylyZXR1cm4gYzt0JiYoZT1mdW5jdGlvbihyLGUpe2Zvcih2YXIgdD0tMSxuPXI/ci5sZW5ndGg6MCxhPUFycmF5KG4pOysrdDxuOylhW3RdPWUoclt0XSx0LHIpO3JldHVybiBhfShlLGZ1bmN0aW9uKHIpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gcihlKX19KHQpKSksbj8obz1ocixpPSExKTplLmxlbmd0aD49MjAwJiYobz1icixpPSExLGU9bmV3IENyKGUpKTtyOmZvcig7KythPHM7KXt2YXIgdT1yW2FdLHA9dD90KHUpOnU7aWYodT1ufHwwIT09dT91OjAsaSYmcD09cCl7Zm9yKHZhciBnPWw7Zy0tOylpZihlW2ddPT09cCljb250aW51ZSByO2MucHVzaCh1KX1lbHNlIG8oZSxwLG4pfHxjLnB1c2godSl9cmV0dXJuIGN9ZnVuY3Rpb24gSHIocil7cmV0dXJuISghV3Iocil8fGZ1bmN0aW9uKHIpe3JldHVybiEhQXImJkFyIGluIHJ9KHIpKSYmKFByKHIpfHxmdW5jdGlvbihyKXt2YXIgZT0hMTtpZihudWxsIT1yJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiByLnRvU3RyaW5nKXRyeXtlPSEhKHIrXCJcIil9Y2F0Y2gocil7fXJldHVybiBlfShyKT9FcjpscikudGVzdChmdW5jdGlvbihyKXtpZihudWxsIT1yKXt0cnl7cmV0dXJuIGtyLmNhbGwocil9Y2F0Y2gocil7fXRyeXtyZXR1cm4gcitcIlwifWNhdGNoKHIpe319cmV0dXJuXCJcIn0ocikpfWZ1bmN0aW9uIFVyKGUsdCl7dmFyIG4sYSxvPWUuX19kYXRhX187cmV0dXJuKFwic3RyaW5nXCI9PShhPXIobj10KSl8fFwibnVtYmVyXCI9PWF8fFwic3ltYm9sXCI9PWF8fFwiYm9vbGVhblwiPT1hP1wiX19wcm90b19fXCIhPT1uOm51bGw9PT1uKT9vW1wic3RyaW5nXCI9PXR5cGVvZiB0P1wic3RyaW5nXCI6XCJoYXNoXCJdOm8ubWFwfWZ1bmN0aW9uIFZyKHIsZSl7dmFyIHQ9ZnVuY3Rpb24ocixlKXtyZXR1cm4gbnVsbD09cj92b2lkIDA6cltlXX0ocixlKTtyZXR1cm4gSHIodCk/dDp2b2lkIDB9ZnVuY3Rpb24gUHIocil7dmFyIGU9V3Iocik/U3IuY2FsbChyKTpcIlwiO3JldHVyblwiW29iamVjdCBGdW5jdGlvbl1cIj09ZXx8XCJbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXVwiPT1lfWZ1bmN0aW9uIFdyKGUpe3ZhciB0PXIoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1Sci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPUxyP0xyKG51bGwpOnt9fSxSci5wcm90b3R5cGUuZGVsZXRlPWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLmhhcyhyKSYmZGVsZXRlIHRoaXMuX19kYXRhX19bcl19LFJyLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24ocil7dmFyIGU9dGhpcy5fX2RhdGFfXztpZihMcil7dmFyIHQ9ZVtyXTtyZXR1cm4gdD09PXNyP3ZvaWQgMDp0fXJldHVybiBPci5jYWxsKGUscik/ZVtyXTp2b2lkIDB9LFJyLnByb3RvdHlwZS5oYXM9ZnVuY3Rpb24ocil7dmFyIGU9dGhpcy5fX2RhdGFfXztyZXR1cm4gTHI/dm9pZCAwIT09ZVtyXTpPci5jYWxsKGUscil9LFJyLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24ocixlKXtyZXR1cm4gdGhpcy5fX2RhdGFfX1tyXT1MciYmdm9pZCAwPT09ZT9zcjplLHRoaXN9LE5yLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189W119LE5yLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24ocil7dmFyIGU9dGhpcy5fX2RhdGFfXyx0PUJyKGUscik7cmV0dXJuISh0PDApJiYodD09ZS5sZW5ndGgtMT9lLnBvcCgpOl9yLmNhbGwoZSx0LDEpLCEwKX0sTnIucHJvdG90eXBlLmdldD1mdW5jdGlvbihyKXt2YXIgZT10aGlzLl9fZGF0YV9fLHQ9QnIoZSxyKTtyZXR1cm4gdDwwP3ZvaWQgMDplW3RdWzFdfSxOci5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHIpe3JldHVybiBCcih0aGlzLl9fZGF0YV9fLHIpPi0xfSxOci5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHIsZSl7dmFyIHQ9dGhpcy5fX2RhdGFfXyxuPUJyKHQscik7cmV0dXJuIG48MD90LnB1c2goW3IsZV0pOnRbbl1bMV09ZSx0aGlzfSxqci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPXtoYXNoOm5ldyBScixtYXA6bmV3KERyfHxOciksc3RyaW5nOm5ldyBScn19LGpyLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24ocil7cmV0dXJuIFVyKHRoaXMscikuZGVsZXRlKHIpfSxqci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHIpe3JldHVybiBVcih0aGlzLHIpLmdldChyKX0sanIucHJvdG90eXBlLmhhcz1mdW5jdGlvbihyKXtyZXR1cm4gVXIodGhpcyxyKS5oYXMocil9LGpyLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24ocixlKXtyZXR1cm4gVXIodGhpcyxyKS5zZXQocixlKSx0aGlzfSxDci5wcm90b3R5cGUuYWRkPUNyLnByb3RvdHlwZS5wdXNoPWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLl9fZGF0YV9fLnNldChyLHNyKSx0aGlzfSxDci5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhyKX07dmFyIEZyPWZ1bmN0aW9uKHIsZSl7cmV0dXJuIGU9eHIodm9pZCAwPT09ZT9yLmxlbmd0aC0xOmUsMCksZnVuY3Rpb24oKXtmb3IodmFyIHQ9YXJndW1lbnRzLG49LTEsYT14cih0Lmxlbmd0aC1lLDApLG89QXJyYXkoYSk7KytuPGE7KW9bbl09dFtlK25dO249LTE7Zm9yKHZhciBpPUFycmF5KGUrMSk7KytuPGU7KWlbbl09dFtuXTtyZXR1cm4gaVtlXT1vLGZyKHIsdGhpcyxpKX19KChmdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4hIWUmJlwib2JqZWN0XCI9PXIoZSl9KG49ZSkmJmZ1bmN0aW9uKHIpe3JldHVybiBudWxsIT1yJiZmdW5jdGlvbihyKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgciYmcj4tMSYmciUxPT0wJiZyPD1jcn0oci5sZW5ndGgpJiYhUHIocil9KG4pP0lyKGUsdCk6W107dmFyIG59KSksR3I9MjE0NzQ4MzY0Nyx6cj0zNixKcj0vXnhuLS0vLE1yPS9bXlxceDIwLVxceDdFXS8sJHI9L1tcXHgyRVxcdTMwMDJcXHVGRjBFXFx1RkY2MV0vZyxacj17b3ZlcmZsb3c6XCJPdmVyZmxvdzogaW5wdXQgbmVlZHMgd2lkZXIgaW50ZWdlcnMgdG8gcHJvY2Vzc1wiLFwibm90LWJhc2ljXCI6XCJJbGxlZ2FsIGlucHV0ID49IDB4ODAgKG5vdCBhIGJhc2ljIGNvZGUgcG9pbnQpXCIsXCJpbnZhbGlkLWlucHV0XCI6XCJJbnZhbGlkIGlucHV0XCJ9LFlyPU1hdGguZmxvb3IsS3I9U3RyaW5nLmZyb21DaGFyQ29kZTtcbi8qISBodHRwczovL210aHMuYmUvcHVueWNvZGUgdjEuNC4xIGJ5IEBtYXRoaWFzICovZnVuY3Rpb24gUXIocil7dGhyb3cgbmV3IFJhbmdlRXJyb3IoWnJbcl0pfWZ1bmN0aW9uIFhyKHIsZSl7Zm9yKHZhciB0PXIubGVuZ3RoLG49W107dC0tOyluW3RdPWUoclt0XSk7cmV0dXJuIG59ZnVuY3Rpb24gcmUocixlKXt2YXIgdD1yLnNwbGl0KFwiQFwiKSxuPVwiXCI7cmV0dXJuIHQubGVuZ3RoPjEmJihuPXRbMF0rXCJAXCIscj10WzFdKSxuK1hyKChyPXIucmVwbGFjZSgkcixcIi5cIikpLnNwbGl0KFwiLlwiKSxlKS5qb2luKFwiLlwiKX1mdW5jdGlvbiBlZShyKXtmb3IodmFyIGUsdCxuPVtdLGE9MCxvPXIubGVuZ3RoO2E8bzspKGU9ci5jaGFyQ29kZUF0KGErKykpPj01NTI5NiYmZTw9NTYzMTkmJmE8bz81NjMyMD09KDY0NTEyJih0PXIuY2hhckNvZGVBdChhKyspKSk/bi5wdXNoKCgoMTAyMyZlKTw8MTApKygxMDIzJnQpKzY1NTM2KToobi5wdXNoKGUpLGEtLSk6bi5wdXNoKGUpO3JldHVybiBufWZ1bmN0aW9uIHRlKHIpe3JldHVybiBYcihyLChmdW5jdGlvbihyKXt2YXIgZT1cIlwiO3JldHVybiByPjY1NTM1JiYoZSs9S3IoKHItPTY1NTM2KT4+PjEwJjEwMjN8NTUyOTYpLHI9NTYzMjB8MTAyMyZyKSxlKz1LcihyKX0pKS5qb2luKFwiXCIpfWZ1bmN0aW9uIG5lKHIsZSl7cmV0dXJuIHIrMjIrNzUqKHI8MjYpLSgoMCE9ZSk8PDUpfWZ1bmN0aW9uIGFlKHIsZSx0KXt2YXIgbj0wO2ZvcihyPXQ/WXIoci83MDApOnI+PjEscis9WXIoci9lKTtyPjQ1NTtuKz16cilyPVlyKHIvMzUpO3JldHVybiBZcihuKzM2KnIvKHIrMzgpKX1mdW5jdGlvbiBvZShyKXt2YXIgZSx0LG4sYSxvLGkscyxjLGwsdSxwLGc9W10sZj1yLmxlbmd0aCxkPTAsaD0xMjgsbT03Mjtmb3IoKHQ9ci5sYXN0SW5kZXhPZihcIi1cIikpPDAmJih0PTApLG49MDtuPHQ7KytuKXIuY2hhckNvZGVBdChuKT49MTI4JiZRcihcIm5vdC1iYXNpY1wiKSxnLnB1c2goci5jaGFyQ29kZUF0KG4pKTtmb3IoYT10PjA/dCsxOjA7YTxmOyl7Zm9yKG89ZCxpPTEscz16cjthPj1mJiZRcihcImludmFsaWQtaW5wdXRcIiksKChjPShwPXIuY2hhckNvZGVBdChhKyspKS00ODwxMD9wLTIyOnAtNjU8MjY/cC02NTpwLTk3PDI2P3AtOTc6enIpPj16cnx8Yz5ZcigoR3ItZCkvaSkpJiZRcihcIm92ZXJmbG93XCIpLGQrPWMqaSwhKGM8KGw9czw9bT8xOnM+PW0rMjY/MjY6cy1tKSk7cys9enIpaT5ZcihHci8odT16ci1sKSkmJlFyKFwib3ZlcmZsb3dcIiksaSo9dTttPWFlKGQtbyxlPWcubGVuZ3RoKzEsMD09byksWXIoZC9lKT5Hci1oJiZRcihcIm92ZXJmbG93XCIpLGgrPVlyKGQvZSksZCU9ZSxnLnNwbGljZShkKyssMCxoKX1yZXR1cm4gdGUoZyl9ZnVuY3Rpb24gaWUocil7dmFyIGUsdCxuLGEsbyxpLHMsYyxsLHUscCxnLGYsZCxoLG09W107Zm9yKGc9KHI9ZWUocikpLmxlbmd0aCxlPTEyOCx0PTAsbz03MixpPTA7aTxnOysraSkocD1yW2ldKTwxMjgmJm0ucHVzaChLcihwKSk7Zm9yKG49YT1tLmxlbmd0aCxhJiZtLnB1c2goXCItXCIpO248Zzspe2ZvcihzPUdyLGk9MDtpPGc7KytpKShwPXJbaV0pPj1lJiZwPHMmJihzPXApO2ZvcihzLWU+WXIoKEdyLXQpLyhmPW4rMSkpJiZRcihcIm92ZXJmbG93XCIpLHQrPShzLWUpKmYsZT1zLGk9MDtpPGc7KytpKWlmKChwPXJbaV0pPGUmJisrdD5HciYmUXIoXCJvdmVyZmxvd1wiKSxwPT1lKXtmb3IoYz10LGw9enI7IShjPCh1PWw8PW8/MTpsPj1vKzI2PzI2OmwtbykpO2wrPXpyKWg9Yy11LGQ9enItdSxtLnB1c2goS3IobmUodStoJWQsMCkpKSxjPVlyKGgvZCk7bS5wdXNoKEtyKG5lKGMsMCkpKSxvPWFlKHQsZixuPT1hKSx0PTAsKytufSsrdCwrK2V9cmV0dXJuIG0uam9pbihcIlwiKX1mdW5jdGlvbiBzZShyKXtyZXR1cm4gcmUociwoZnVuY3Rpb24ocil7cmV0dXJuIEpyLnRlc3Qocik/b2Uoci5zbGljZSg0KS50b0xvd2VyQ2FzZSgpKTpyfSkpfWZ1bmN0aW9uIGNlKHIpe3JldHVybiByZShyLChmdW5jdGlvbihyKXtyZXR1cm4gTXIudGVzdChyKT9cInhuLS1cIitpZShyKTpyfSkpfXZhciBsZT1cIjEuNC4xXCIsdWU9e2RlY29kZTplZSxlbmNvZGU6dGV9LHBlPXt2ZXJzaW9uOmxlLHVjczI6dWUsdG9BU0NJSTpjZSx0b1VuaWNvZGU6c2UsZW5jb2RlOmllLGRlY29kZTpvZX0sZ2U9ezk6XCJUYWI7XCIsMTA6XCJOZXdMaW5lO1wiLDMzOlwiZXhjbDtcIiwzNDpcInF1b3Q7XCIsMzU6XCJudW07XCIsMzY6XCJkb2xsYXI7XCIsMzc6XCJwZXJjbnQ7XCIsMzg6XCJhbXA7XCIsMzk6XCJhcG9zO1wiLDQwOlwibHBhcjtcIiw0MTpcInJwYXI7XCIsNDI6XCJtaWRhc3Q7XCIsNDM6XCJwbHVzO1wiLDQ0OlwiY29tbWE7XCIsNDY6XCJwZXJpb2Q7XCIsNDc6XCJzb2w7XCIsNTg6XCJjb2xvbjtcIiw1OTpcInNlbWk7XCIsNjA6XCJsdDtcIiw2MTpcImVxdWFscztcIiw2MjpcImd0O1wiLDYzOlwicXVlc3Q7XCIsNjQ6XCJjb21tYXQ7XCIsOTE6XCJsc3FiO1wiLDkyOlwiYnNvbDtcIiw5MzpcInJzcWI7XCIsOTQ6XCJIYXQ7XCIsOTU6XCJVbmRlckJhcjtcIiw5NjpcImdyYXZlO1wiLDEyMzpcImxjdWI7XCIsMTI0OlwiVmVydGljYWxMaW5lO1wiLDEyNTpcInJjdWI7XCIsMTYwOlwiTm9uQnJlYWtpbmdTcGFjZTtcIiwxNjE6XCJpZXhjbDtcIiwxNjI6XCJjZW50O1wiLDE2MzpcInBvdW5kO1wiLDE2NDpcImN1cnJlbjtcIiwxNjU6XCJ5ZW47XCIsMTY2OlwiYnJ2YmFyO1wiLDE2NzpcInNlY3Q7XCIsMTY4OlwidW1sO1wiLDE2OTpcImNvcHk7XCIsMTcwOlwib3JkZjtcIiwxNzE6XCJsYXF1bztcIiwxNzI6XCJub3Q7XCIsMTczOlwic2h5O1wiLDE3NDpcInJlZztcIiwxNzU6XCJzdHJucztcIiwxNzY6XCJkZWc7XCIsMTc3OlwicG07XCIsMTc4Olwic3VwMjtcIiwxNzk6XCJzdXAzO1wiLDE4MDpcIkRpYWNyaXRpY2FsQWN1dGU7XCIsMTgxOlwibWljcm87XCIsMTgyOlwicGFyYTtcIiwxODM6XCJtaWRkb3Q7XCIsMTg0OlwiQ2VkaWxsYTtcIiwxODU6XCJzdXAxO1wiLDE4NjpcIm9yZG07XCIsMTg3OlwicmFxdW87XCIsMTg4OlwiZnJhYzE0O1wiLDE4OTpcImhhbGY7XCIsMTkwOlwiZnJhYzM0O1wiLDE5MTpcImlxdWVzdDtcIiwxOTI6XCJBZ3JhdmU7XCIsMTkzOlwiQWFjdXRlO1wiLDE5NDpcIkFjaXJjO1wiLDE5NTpcIkF0aWxkZTtcIiwxOTY6XCJBdW1sO1wiLDE5NzpcIkFyaW5nO1wiLDE5ODpcIkFFbGlnO1wiLDE5OTpcIkNjZWRpbDtcIiwyMDA6XCJFZ3JhdmU7XCIsMjAxOlwiRWFjdXRlO1wiLDIwMjpcIkVjaXJjO1wiLDIwMzpcIkV1bWw7XCIsMjA0OlwiSWdyYXZlO1wiLDIwNTpcIklhY3V0ZTtcIiwyMDY6XCJJY2lyYztcIiwyMDc6XCJJdW1sO1wiLDIwODpcIkVUSDtcIiwyMDk6XCJOdGlsZGU7XCIsMjEwOlwiT2dyYXZlO1wiLDIxMTpcIk9hY3V0ZTtcIiwyMTI6XCJPY2lyYztcIiwyMTM6XCJPdGlsZGU7XCIsMjE0OlwiT3VtbDtcIiwyMTU6XCJ0aW1lcztcIiwyMTY6XCJPc2xhc2g7XCIsMjE3OlwiVWdyYXZlO1wiLDIxODpcIlVhY3V0ZTtcIiwyMTk6XCJVY2lyYztcIiwyMjA6XCJVdW1sO1wiLDIyMTpcIllhY3V0ZTtcIiwyMjI6XCJUSE9STjtcIiwyMjM6XCJzemxpZztcIiwyMjQ6XCJhZ3JhdmU7XCIsMjI1OlwiYWFjdXRlO1wiLDIyNjpcImFjaXJjO1wiLDIyNzpcImF0aWxkZTtcIiwyMjg6XCJhdW1sO1wiLDIyOTpcImFyaW5nO1wiLDIzMDpcImFlbGlnO1wiLDIzMTpcImNjZWRpbDtcIiwyMzI6XCJlZ3JhdmU7XCIsMjMzOlwiZWFjdXRlO1wiLDIzNDpcImVjaXJjO1wiLDIzNTpcImV1bWw7XCIsMjM2OlwiaWdyYXZlO1wiLDIzNzpcImlhY3V0ZTtcIiwyMzg6XCJpY2lyYztcIiwyMzk6XCJpdW1sO1wiLDI0MDpcImV0aDtcIiwyNDE6XCJudGlsZGU7XCIsMjQyOlwib2dyYXZlO1wiLDI0MzpcIm9hY3V0ZTtcIiwyNDQ6XCJvY2lyYztcIiwyNDU6XCJvdGlsZGU7XCIsMjQ2Olwib3VtbDtcIiwyNDc6XCJkaXZpZGU7XCIsMjQ4Olwib3NsYXNoO1wiLDI0OTpcInVncmF2ZTtcIiwyNTA6XCJ1YWN1dGU7XCIsMjUxOlwidWNpcmM7XCIsMjUyOlwidXVtbDtcIiwyNTM6XCJ5YWN1dGU7XCIsMjU0OlwidGhvcm47XCIsMjU1OlwieXVtbDtcIiwyNTY6XCJBbWFjcjtcIiwyNTc6XCJhbWFjcjtcIiwyNTg6XCJBYnJldmU7XCIsMjU5OlwiYWJyZXZlO1wiLDI2MDpcIkFvZ29uO1wiLDI2MTpcImFvZ29uO1wiLDI2MjpcIkNhY3V0ZTtcIiwyNjM6XCJjYWN1dGU7XCIsMjY0OlwiQ2NpcmM7XCIsMjY1OlwiY2NpcmM7XCIsMjY2OlwiQ2RvdDtcIiwyNjc6XCJjZG90O1wiLDI2ODpcIkNjYXJvbjtcIiwyNjk6XCJjY2Fyb247XCIsMjcwOlwiRGNhcm9uO1wiLDI3MTpcImRjYXJvbjtcIiwyNzI6XCJEc3Ryb2s7XCIsMjczOlwiZHN0cm9rO1wiLDI3NDpcIkVtYWNyO1wiLDI3NTpcImVtYWNyO1wiLDI3ODpcIkVkb3Q7XCIsMjc5OlwiZWRvdDtcIiwyODA6XCJFb2dvbjtcIiwyODE6XCJlb2dvbjtcIiwyODI6XCJFY2Fyb247XCIsMjgzOlwiZWNhcm9uO1wiLDI4NDpcIkdjaXJjO1wiLDI4NTpcImdjaXJjO1wiLDI4NjpcIkdicmV2ZTtcIiwyODc6XCJnYnJldmU7XCIsMjg4OlwiR2RvdDtcIiwyODk6XCJnZG90O1wiLDI5MDpcIkdjZWRpbDtcIiwyOTI6XCJIY2lyYztcIiwyOTM6XCJoY2lyYztcIiwyOTQ6XCJIc3Ryb2s7XCIsMjk1OlwiaHN0cm9rO1wiLDI5NjpcIkl0aWxkZTtcIiwyOTc6XCJpdGlsZGU7XCIsMjk4OlwiSW1hY3I7XCIsMjk5OlwiaW1hY3I7XCIsMzAyOlwiSW9nb247XCIsMzAzOlwiaW9nb247XCIsMzA0OlwiSWRvdDtcIiwzMDU6XCJpbm9kb3Q7XCIsMzA2OlwiSUpsaWc7XCIsMzA3OlwiaWpsaWc7XCIsMzA4OlwiSmNpcmM7XCIsMzA5OlwiamNpcmM7XCIsMzEwOlwiS2NlZGlsO1wiLDMxMTpcImtjZWRpbDtcIiwzMTI6XCJrZ3JlZW47XCIsMzEzOlwiTGFjdXRlO1wiLDMxNDpcImxhY3V0ZTtcIiwzMTU6XCJMY2VkaWw7XCIsMzE2OlwibGNlZGlsO1wiLDMxNzpcIkxjYXJvbjtcIiwzMTg6XCJsY2Fyb247XCIsMzE5OlwiTG1pZG90O1wiLDMyMDpcImxtaWRvdDtcIiwzMjE6XCJMc3Ryb2s7XCIsMzIyOlwibHN0cm9rO1wiLDMyMzpcIk5hY3V0ZTtcIiwzMjQ6XCJuYWN1dGU7XCIsMzI1OlwiTmNlZGlsO1wiLDMyNjpcIm5jZWRpbDtcIiwzMjc6XCJOY2Fyb247XCIsMzI4OlwibmNhcm9uO1wiLDMyOTpcIm5hcG9zO1wiLDMzMDpcIkVORztcIiwzMzE6XCJlbmc7XCIsMzMyOlwiT21hY3I7XCIsMzMzOlwib21hY3I7XCIsMzM2OlwiT2RibGFjO1wiLDMzNzpcIm9kYmxhYztcIiwzMzg6XCJPRWxpZztcIiwzMzk6XCJvZWxpZztcIiwzNDA6XCJSYWN1dGU7XCIsMzQxOlwicmFjdXRlO1wiLDM0MjpcIlJjZWRpbDtcIiwzNDM6XCJyY2VkaWw7XCIsMzQ0OlwiUmNhcm9uO1wiLDM0NTpcInJjYXJvbjtcIiwzNDY6XCJTYWN1dGU7XCIsMzQ3Olwic2FjdXRlO1wiLDM0ODpcIlNjaXJjO1wiLDM0OTpcInNjaXJjO1wiLDM1MDpcIlNjZWRpbDtcIiwzNTE6XCJzY2VkaWw7XCIsMzUyOlwiU2Nhcm9uO1wiLDM1MzpcInNjYXJvbjtcIiwzNTQ6XCJUY2VkaWw7XCIsMzU1OlwidGNlZGlsO1wiLDM1NjpcIlRjYXJvbjtcIiwzNTc6XCJ0Y2Fyb247XCIsMzU4OlwiVHN0cm9rO1wiLDM1OTpcInRzdHJvaztcIiwzNjA6XCJVdGlsZGU7XCIsMzYxOlwidXRpbGRlO1wiLDM2MjpcIlVtYWNyO1wiLDM2MzpcInVtYWNyO1wiLDM2NDpcIlVicmV2ZTtcIiwzNjU6XCJ1YnJldmU7XCIsMzY2OlwiVXJpbmc7XCIsMzY3OlwidXJpbmc7XCIsMzY4OlwiVWRibGFjO1wiLDM2OTpcInVkYmxhYztcIiwzNzA6XCJVb2dvbjtcIiwzNzE6XCJ1b2dvbjtcIiwzNzI6XCJXY2lyYztcIiwzNzM6XCJ3Y2lyYztcIiwzNzQ6XCJZY2lyYztcIiwzNzU6XCJ5Y2lyYztcIiwzNzY6XCJZdW1sO1wiLDM3NzpcIlphY3V0ZTtcIiwzNzg6XCJ6YWN1dGU7XCIsMzc5OlwiWmRvdDtcIiwzODA6XCJ6ZG90O1wiLDM4MTpcIlpjYXJvbjtcIiwzODI6XCJ6Y2Fyb247XCIsNDAyOlwiZm5vZjtcIiw0Mzc6XCJpbXBlZDtcIiw1MDE6XCJnYWN1dGU7XCIsNTY3Olwiam1hdGg7XCIsNzEwOlwiY2lyYztcIiw3MTE6XCJIYWNlaztcIiw3Mjg6XCJicmV2ZTtcIiw3Mjk6XCJkb3Q7XCIsNzMwOlwicmluZztcIiw3MzE6XCJvZ29uO1wiLDczMjpcInRpbGRlO1wiLDczMzpcIkRpYWNyaXRpY2FsRG91YmxlQWN1dGU7XCIsNzg1OlwiRG93bkJyZXZlO1wiLDkxMzpcIkFscGhhO1wiLDkxNDpcIkJldGE7XCIsOTE1OlwiR2FtbWE7XCIsOTE2OlwiRGVsdGE7XCIsOTE3OlwiRXBzaWxvbjtcIiw5MTg6XCJaZXRhO1wiLDkxOTpcIkV0YTtcIiw5MjA6XCJUaGV0YTtcIiw5MjE6XCJJb3RhO1wiLDkyMjpcIkthcHBhO1wiLDkyMzpcIkxhbWJkYTtcIiw5MjQ6XCJNdTtcIiw5MjU6XCJOdTtcIiw5MjY6XCJYaTtcIiw5Mjc6XCJPbWljcm9uO1wiLDkyODpcIlBpO1wiLDkyOTpcIlJobztcIiw5MzE6XCJTaWdtYTtcIiw5MzI6XCJUYXU7XCIsOTMzOlwiVXBzaWxvbjtcIiw5MzQ6XCJQaGk7XCIsOTM1OlwiQ2hpO1wiLDkzNjpcIlBzaTtcIiw5Mzc6XCJPbWVnYTtcIiw5NDU6XCJhbHBoYTtcIiw5NDY6XCJiZXRhO1wiLDk0NzpcImdhbW1hO1wiLDk0ODpcImRlbHRhO1wiLDk0OTpcImVwc2lsb247XCIsOTUwOlwiemV0YTtcIiw5NTE6XCJldGE7XCIsOTUyOlwidGhldGE7XCIsOTUzOlwiaW90YTtcIiw5NTQ6XCJrYXBwYTtcIiw5NTU6XCJsYW1iZGE7XCIsOTU2OlwibXU7XCIsOTU3OlwibnU7XCIsOTU4OlwieGk7XCIsOTU5Olwib21pY3JvbjtcIiw5NjA6XCJwaTtcIiw5NjE6XCJyaG87XCIsOTYyOlwidmFyc2lnbWE7XCIsOTYzOlwic2lnbWE7XCIsOTY0OlwidGF1O1wiLDk2NTpcInVwc2lsb247XCIsOTY2OlwicGhpO1wiLDk2NzpcImNoaTtcIiw5Njg6XCJwc2k7XCIsOTY5Olwib21lZ2E7XCIsOTc3OlwidmFydGhldGE7XCIsOTc4OlwidXBzaWg7XCIsOTgxOlwidmFycGhpO1wiLDk4MjpcInZhcnBpO1wiLDk4ODpcIkdhbW1hZDtcIiw5ODk6XCJnYW1tYWQ7XCIsMTAwODpcInZhcmthcHBhO1wiLDEwMDk6XCJ2YXJyaG87XCIsMTAxMzpcInZhcmVwc2lsb247XCIsMTAxNDpcImJlcHNpO1wiLDEwMjU6XCJJT2N5O1wiLDEwMjY6XCJESmN5O1wiLDEwMjc6XCJHSmN5O1wiLDEwMjg6XCJKdWtjeTtcIiwxMDI5OlwiRFNjeTtcIiwxMDMwOlwiSXVrY3k7XCIsMTAzMTpcIllJY3k7XCIsMTAzMjpcIkpzZXJjeTtcIiwxMDMzOlwiTEpjeTtcIiwxMDM0OlwiTkpjeTtcIiwxMDM1OlwiVFNIY3k7XCIsMTAzNjpcIktKY3k7XCIsMTAzODpcIlVicmN5O1wiLDEwMzk6XCJEWmN5O1wiLDEwNDA6XCJBY3k7XCIsMTA0MTpcIkJjeTtcIiwxMDQyOlwiVmN5O1wiLDEwNDM6XCJHY3k7XCIsMTA0NDpcIkRjeTtcIiwxMDQ1OlwiSUVjeTtcIiwxMDQ2OlwiWkhjeTtcIiwxMDQ3OlwiWmN5O1wiLDEwNDg6XCJJY3k7XCIsMTA0OTpcIkpjeTtcIiwxMDUwOlwiS2N5O1wiLDEwNTE6XCJMY3k7XCIsMTA1MjpcIk1jeTtcIiwxMDUzOlwiTmN5O1wiLDEwNTQ6XCJPY3k7XCIsMTA1NTpcIlBjeTtcIiwxMDU2OlwiUmN5O1wiLDEwNTc6XCJTY3k7XCIsMTA1ODpcIlRjeTtcIiwxMDU5OlwiVWN5O1wiLDEwNjA6XCJGY3k7XCIsMTA2MTpcIktIY3k7XCIsMTA2MjpcIlRTY3k7XCIsMTA2MzpcIkNIY3k7XCIsMTA2NDpcIlNIY3k7XCIsMTA2NTpcIlNIQ0hjeTtcIiwxMDY2OlwiSEFSRGN5O1wiLDEwNjc6XCJZY3k7XCIsMTA2ODpcIlNPRlRjeTtcIiwxMDY5OlwiRWN5O1wiLDEwNzA6XCJZVWN5O1wiLDEwNzE6XCJZQWN5O1wiLDEwNzI6XCJhY3k7XCIsMTA3MzpcImJjeTtcIiwxMDc0OlwidmN5O1wiLDEwNzU6XCJnY3k7XCIsMTA3NjpcImRjeTtcIiwxMDc3OlwiaWVjeTtcIiwxMDc4OlwiemhjeTtcIiwxMDc5OlwiemN5O1wiLDEwODA6XCJpY3k7XCIsMTA4MTpcImpjeTtcIiwxMDgyOlwia2N5O1wiLDEwODM6XCJsY3k7XCIsMTA4NDpcIm1jeTtcIiwxMDg1OlwibmN5O1wiLDEwODY6XCJvY3k7XCIsMTA4NzpcInBjeTtcIiwxMDg4OlwicmN5O1wiLDEwODk6XCJzY3k7XCIsMTA5MDpcInRjeTtcIiwxMDkxOlwidWN5O1wiLDEwOTI6XCJmY3k7XCIsMTA5MzpcImtoY3k7XCIsMTA5NDpcInRzY3k7XCIsMTA5NTpcImNoY3k7XCIsMTA5NjpcInNoY3k7XCIsMTA5NzpcInNoY2hjeTtcIiwxMDk4OlwiaGFyZGN5O1wiLDEwOTk6XCJ5Y3k7XCIsMTEwMDpcInNvZnRjeTtcIiwxMTAxOlwiZWN5O1wiLDExMDI6XCJ5dWN5O1wiLDExMDM6XCJ5YWN5O1wiLDExMDU6XCJpb2N5O1wiLDExMDY6XCJkamN5O1wiLDExMDc6XCJnamN5O1wiLDExMDg6XCJqdWtjeTtcIiwxMTA5OlwiZHNjeTtcIiwxMTEwOlwiaXVrY3k7XCIsMTExMTpcInlpY3k7XCIsMTExMjpcImpzZXJjeTtcIiwxMTEzOlwibGpjeTtcIiwxMTE0OlwibmpjeTtcIiwxMTE1OlwidHNoY3k7XCIsMTExNjpcImtqY3k7XCIsMTExODpcInVicmN5O1wiLDExMTk6XCJkemN5O1wiLDgxOTQ6XCJlbnNwO1wiLDgxOTU6XCJlbXNwO1wiLDgxOTY6XCJlbXNwMTM7XCIsODE5NzpcImVtc3AxNDtcIiw4MTk5OlwibnVtc3A7XCIsODIwMDpcInB1bmNzcDtcIiw4MjAxOlwiVGhpblNwYWNlO1wiLDgyMDI6XCJWZXJ5VGhpblNwYWNlO1wiLDgyMDM6XCJaZXJvV2lkdGhTcGFjZTtcIiw4MjA0OlwienduajtcIiw4MjA1OlwiendqO1wiLDgyMDY6XCJscm07XCIsODIwNzpcInJsbTtcIiw4MjA4OlwiaHlwaGVuO1wiLDgyMTE6XCJuZGFzaDtcIiw4MjEyOlwibWRhc2g7XCIsODIxMzpcImhvcmJhcjtcIiw4MjE0OlwiVmVydDtcIiw4MjE2OlwiT3BlbkN1cmx5UXVvdGU7XCIsODIxNzpcInJzcXVvcjtcIiw4MjE4Olwic2JxdW87XCIsODIyMDpcIk9wZW5DdXJseURvdWJsZVF1b3RlO1wiLDgyMjE6XCJyZHF1b3I7XCIsODIyMjpcImxkcXVvcjtcIiw4MjI0OlwiZGFnZ2VyO1wiLDgyMjU6XCJkZGFnZ2VyO1wiLDgyMjY6XCJidWxsZXQ7XCIsODIyOTpcIm5sZHI7XCIsODIzMDpcIm1sZHI7XCIsODI0MDpcInBlcm1pbDtcIiw4MjQxOlwicGVydGVuaztcIiw4MjQyOlwicHJpbWU7XCIsODI0MzpcIlByaW1lO1wiLDgyNDQ6XCJ0cHJpbWU7XCIsODI0NTpcImJwcmltZTtcIiw4MjQ5OlwibHNhcXVvO1wiLDgyNTA6XCJyc2FxdW87XCIsODI1NDpcIk92ZXJCYXI7XCIsODI1NzpcImNhcmV0O1wiLDgyNTk6XCJoeWJ1bGw7XCIsODI2MDpcImZyYXNsO1wiLDgyNzE6XCJic2VtaTtcIiw4Mjc5OlwicXByaW1lO1wiLDgyODc6XCJNZWRpdW1TcGFjZTtcIiw4Mjg4OlwiTm9CcmVhaztcIiw4Mjg5OlwiQXBwbHlGdW5jdGlvbjtcIiw4MjkwOlwiaXQ7XCIsODI5MTpcIkludmlzaWJsZUNvbW1hO1wiLDgzNjQ6XCJldXJvO1wiLDg0MTE6XCJUcmlwbGVEb3Q7XCIsODQxMjpcIkRvdERvdDtcIiw4NDUwOlwiQ29wZjtcIiw4NDUzOlwiaW5jYXJlO1wiLDg0NTg6XCJnc2NyO1wiLDg0NTk6XCJIc2NyO1wiLDg0NjA6XCJQb2luY2FyZXBsYW5lO1wiLDg0NjE6XCJxdWF0ZXJuaW9ucztcIiw4NDYyOlwicGxhbmNraDtcIiw4NDYzOlwicGxhbmt2O1wiLDg0NjQ6XCJJc2NyO1wiLDg0NjU6XCJpbWFncGFydDtcIiw4NDY2OlwiTHNjcjtcIiw4NDY3OlwiZWxsO1wiLDg0Njk6XCJOb3BmO1wiLDg0NzA6XCJudW1lcm87XCIsODQ3MTpcImNvcHlzcjtcIiw4NDcyOlwid3A7XCIsODQ3MzpcInByaW1lcztcIiw4NDc0OlwicmF0aW9uYWxzO1wiLDg0NzU6XCJSc2NyO1wiLDg0NzY6XCJSZnI7XCIsODQ3NzpcIlJvcGY7XCIsODQ3ODpcInJ4O1wiLDg0ODI6XCJ0cmFkZTtcIiw4NDg0OlwiWm9wZjtcIiw4NDg3OlwibWhvO1wiLDg0ODg6XCJaZnI7XCIsODQ4OTpcImlpb3RhO1wiLDg0OTI6XCJCc2NyO1wiLDg0OTM6XCJDZnI7XCIsODQ5NTpcImVzY3I7XCIsODQ5NjpcImV4cGVjdGF0aW9uO1wiLDg0OTc6XCJGc2NyO1wiLDg0OTk6XCJwaG1tYXQ7XCIsODUwMDpcIm9zY3I7XCIsODUwMTpcImFsZXBoO1wiLDg1MDI6XCJiZXRoO1wiLDg1MDM6XCJnaW1lbDtcIiw4NTA0OlwiZGFsZXRoO1wiLDg1MTc6XCJERDtcIiw4NTE4OlwiRGlmZmVyZW50aWFsRDtcIiw4NTE5OlwiZXhwb25lbnRpYWxlO1wiLDg1MjA6XCJJbWFnaW5hcnlJO1wiLDg1MzE6XCJmcmFjMTM7XCIsODUzMjpcImZyYWMyMztcIiw4NTMzOlwiZnJhYzE1O1wiLDg1MzQ6XCJmcmFjMjU7XCIsODUzNTpcImZyYWMzNTtcIiw4NTM2OlwiZnJhYzQ1O1wiLDg1Mzc6XCJmcmFjMTY7XCIsODUzODpcImZyYWM1NjtcIiw4NTM5OlwiZnJhYzE4O1wiLDg1NDA6XCJmcmFjMzg7XCIsODU0MTpcImZyYWM1ODtcIiw4NTQyOlwiZnJhYzc4O1wiLDg1OTI6XCJzbGFycjtcIiw4NTkzOlwidXBhcnJvdztcIiw4NTk0Olwic3JhcnI7XCIsODU5NTpcIlNob3J0RG93bkFycm93O1wiLDg1OTY6XCJsZWZ0cmlnaHRhcnJvdztcIiw4NTk3OlwidmFycjtcIiw4NTk4OlwiVXBwZXJMZWZ0QXJyb3c7XCIsODU5OTpcIlVwcGVyUmlnaHRBcnJvdztcIiw4NjAwOlwic2VhcnJvdztcIiw4NjAxOlwic3dhcnJvdztcIiw4NjAyOlwibmxlZnRhcnJvdztcIiw4NjAzOlwibnJpZ2h0YXJyb3c7XCIsODYwNTpcInJpZ2h0c3F1aWdhcnJvdztcIiw4NjA2OlwidHdvaGVhZGxlZnRhcnJvdztcIiw4NjA3OlwiVWFycjtcIiw4NjA4OlwidHdvaGVhZHJpZ2h0YXJyb3c7XCIsODYwOTpcIkRhcnI7XCIsODYxMDpcImxlZnRhcnJvd3RhaWw7XCIsODYxMTpcInJpZ2h0YXJyb3d0YWlsO1wiLDg2MTI6XCJtYXBzdG9sZWZ0O1wiLDg2MTM6XCJVcFRlZUFycm93O1wiLDg2MTQ6XCJSaWdodFRlZUFycm93O1wiLDg2MTU6XCJtYXBzdG9kb3duO1wiLDg2MTc6XCJsYXJyaGs7XCIsODYxODpcInJhcnJoaztcIiw4NjE5OlwibG9vcGFycm93bGVmdDtcIiw4NjIwOlwicmFycmxwO1wiLDg2MjE6XCJsZWZ0cmlnaHRzcXVpZ2Fycm93O1wiLDg2MjI6XCJubGVmdHJpZ2h0YXJyb3c7XCIsODYyNDpcImxzaDtcIiw4NjI1OlwicnNoO1wiLDg2MjY6XCJsZHNoO1wiLDg2Mjc6XCJyZHNoO1wiLDg2Mjk6XCJjcmFycjtcIiw4NjMwOlwiY3VydmVhcnJvd2xlZnQ7XCIsODYzMTpcImN1cnZlYXJyb3dyaWdodDtcIiw4NjM0Olwib2xhcnI7XCIsODYzNTpcIm9yYXJyO1wiLDg2MzY6XCJsaGFydTtcIiw4NjM3OlwibGhhcmQ7XCIsODYzODpcInVwaGFycG9vbnJpZ2h0O1wiLDg2Mzk6XCJ1cGhhcnBvb25sZWZ0O1wiLDg2NDA6XCJSaWdodFZlY3RvcjtcIiw4NjQxOlwicmlnaHRoYXJwb29uZG93bjtcIiw4NjQyOlwiUmlnaHREb3duVmVjdG9yO1wiLDg2NDM6XCJMZWZ0RG93blZlY3RvcjtcIiw4NjQ0OlwicmxhcnI7XCIsODY0NTpcIlVwQXJyb3dEb3duQXJyb3c7XCIsODY0NjpcImxyYXJyO1wiLDg2NDc6XCJsbGFycjtcIiw4NjQ4OlwidXVhcnI7XCIsODY0OTpcInJyYXJyO1wiLDg2NTA6XCJkb3duZG93bmFycm93cztcIiw4NjUxOlwiUmV2ZXJzZUVxdWlsaWJyaXVtO1wiLDg2NTI6XCJybGhhcjtcIiw4NjUzOlwibkxlZnRhcnJvdztcIiw4NjU0OlwibkxlZnRyaWdodGFycm93O1wiLDg2NTU6XCJuUmlnaHRhcnJvdztcIiw4NjU2OlwiTGVmdGFycm93O1wiLDg2NTc6XCJVcGFycm93O1wiLDg2NTg6XCJSaWdodGFycm93O1wiLDg2NTk6XCJEb3duYXJyb3c7XCIsODY2MDpcIkxlZnRyaWdodGFycm93O1wiLDg2NjE6XCJ2QXJyO1wiLDg2NjI6XCJud0FycjtcIiw4NjYzOlwibmVBcnI7XCIsODY2NDpcInNlQXJyO1wiLDg2NjU6XCJzd0FycjtcIiw4NjY2OlwiTGxlZnRhcnJvdztcIiw4NjY3OlwiUnJpZ2h0YXJyb3c7XCIsODY2OTpcInppZ3JhcnI7XCIsODY3NjpcIkxlZnRBcnJvd0JhcjtcIiw4Njc3OlwiUmlnaHRBcnJvd0JhcjtcIiw4NjkzOlwiZHVhcnI7XCIsODcwMTpcImxvYXJyO1wiLDg3MDI6XCJyb2FycjtcIiw4NzAzOlwiaG9hcnI7XCIsODcwNDpcImZvcmFsbDtcIiw4NzA1OlwiY29tcGxlbWVudDtcIiw4NzA2OlwiUGFydGlhbEQ7XCIsODcwNzpcIkV4aXN0cztcIiw4NzA4OlwiTm90RXhpc3RzO1wiLDg3MDk6XCJ2YXJub3RoaW5nO1wiLDg3MTE6XCJuYWJsYTtcIiw4NzEyOlwiaXNpbnY7XCIsODcxMzpcIm5vdGludmE7XCIsODcxNTpcIlN1Y2hUaGF0O1wiLDg3MTY6XCJOb3RSZXZlcnNlRWxlbWVudDtcIiw4NzE5OlwiUHJvZHVjdDtcIiw4NzIwOlwiQ29wcm9kdWN0O1wiLDg3MjE6XCJzdW07XCIsODcyMjpcIm1pbnVzO1wiLDg3MjM6XCJtcDtcIiw4NzI0OlwicGx1c2RvO1wiLDg3MjY6XCJzc2V0bW47XCIsODcyNzpcImxvd2FzdDtcIiw4NzI4OlwiU21hbGxDaXJjbGU7XCIsODczMDpcIlNxcnQ7XCIsODczMzpcInZwcm9wO1wiLDg3MzQ6XCJpbmZpbjtcIiw4NzM1OlwiYW5ncnQ7XCIsODczNjpcImFuZ2xlO1wiLDg3Mzc6XCJtZWFzdXJlZGFuZ2xlO1wiLDg3Mzg6XCJhbmdzcGg7XCIsODczOTpcIlZlcnRpY2FsQmFyO1wiLDg3NDA6XCJuc21pZDtcIiw4NzQxOlwic3BhcjtcIiw4NzQyOlwibnNwYXI7XCIsODc0MzpcIndlZGdlO1wiLDg3NDQ6XCJ2ZWU7XCIsODc0NTpcImNhcDtcIiw4NzQ2OlwiY3VwO1wiLDg3NDc6XCJJbnRlZ3JhbDtcIiw4NzQ4OlwiSW50O1wiLDg3NDk6XCJ0aW50O1wiLDg3NTA6XCJvaW50O1wiLDg3NTE6XCJEb3VibGVDb250b3VySW50ZWdyYWw7XCIsODc1MjpcIkNjb25pbnQ7XCIsODc1MzpcImN3aW50O1wiLDg3NTQ6XCJjd2NvbmludDtcIiw4NzU1OlwiQ291bnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDtcIiw4NzU2OlwidGhlcmVmb3JlO1wiLDg3NTc6XCJiZWNhdXNlO1wiLDg3NTg6XCJyYXRpbztcIiw4NzU5OlwiUHJvcG9ydGlvbjtcIiw4NzYwOlwibWludXNkO1wiLDg3NjI6XCJtRERvdDtcIiw4NzYzOlwiaG9tdGh0O1wiLDg3NjQ6XCJUaWxkZTtcIiw4NzY1OlwiYnNpbTtcIiw4NzY2OlwibXN0cG9zO1wiLDg3Njc6XCJhY2Q7XCIsODc2ODpcIndyZWF0aDtcIiw4NzY5OlwibnNpbTtcIiw4NzcwOlwiZXNpbTtcIiw4NzcxOlwiVGlsZGVFcXVhbDtcIiw4NzcyOlwibnNpbWVxO1wiLDg3NzM6XCJUaWxkZUZ1bGxFcXVhbDtcIiw4Nzc0Olwic2ltbmU7XCIsODc3NTpcIk5vdFRpbGRlRnVsbEVxdWFsO1wiLDg3NzY6XCJUaWxkZVRpbGRlO1wiLDg3Nzc6XCJOb3RUaWxkZVRpbGRlO1wiLDg3Nzg6XCJhcHByb3hlcTtcIiw4Nzc5OlwiYXBpZDtcIiw4NzgwOlwiYmNvbmc7XCIsODc4MTpcIkN1cENhcDtcIiw4NzgyOlwiSHVtcERvd25IdW1wO1wiLDg3ODM6XCJIdW1wRXF1YWw7XCIsODc4NDpcImVzZG90O1wiLDg3ODU6XCJlRG90O1wiLDg3ODY6XCJmYWxsaW5nZG90c2VxO1wiLDg3ODc6XCJyaXNpbmdkb3RzZXE7XCIsODc4ODpcImNvbG9uZXE7XCIsODc4OTpcImVxY29sb247XCIsODc5MDpcImVxY2lyYztcIiw4NzkxOlwiY2lyZTtcIiw4NzkzOlwid2VkZ2VxO1wiLDg3OTQ6XCJ2ZWVlcTtcIiw4Nzk2OlwidHJpZTtcIiw4Nzk5OlwicXVlc3RlcTtcIiw4ODAwOlwiTm90RXF1YWw7XCIsODgwMTpcImVxdWl2O1wiLDg4MDI6XCJOb3RDb25ncnVlbnQ7XCIsODgwNDpcImxlcTtcIiw4ODA1OlwiR3JlYXRlckVxdWFsO1wiLDg4MDY6XCJMZXNzRnVsbEVxdWFsO1wiLDg4MDc6XCJHcmVhdGVyRnVsbEVxdWFsO1wiLDg4MDg6XCJsbmVxcTtcIiw4ODA5OlwiZ25lcXE7XCIsODgxMDpcIk5lc3RlZExlc3NMZXNzO1wiLDg4MTE6XCJOZXN0ZWRHcmVhdGVyR3JlYXRlcjtcIiw4ODEyOlwidHdpeHQ7XCIsODgxMzpcIk5vdEN1cENhcDtcIiw4ODE0OlwiTm90TGVzcztcIiw4ODE1OlwiTm90R3JlYXRlcjtcIiw4ODE2OlwiTm90TGVzc0VxdWFsO1wiLDg4MTc6XCJOb3RHcmVhdGVyRXF1YWw7XCIsODgxODpcImxzaW07XCIsODgxOTpcImd0cnNpbTtcIiw4ODIwOlwiTm90TGVzc1RpbGRlO1wiLDg4MjE6XCJOb3RHcmVhdGVyVGlsZGU7XCIsODgyMjpcImxnO1wiLDg4MjM6XCJndHJsZXNzO1wiLDg4MjQ6XCJudGxnO1wiLDg4MjU6XCJudGdsO1wiLDg4MjY6XCJQcmVjZWRlcztcIiw4ODI3OlwiU3VjY2VlZHM7XCIsODgyODpcIlByZWNlZGVzU2xhbnRFcXVhbDtcIiw4ODI5OlwiU3VjY2VlZHNTbGFudEVxdWFsO1wiLDg4MzA6XCJwcnNpbTtcIiw4ODMxOlwic3VjY3NpbTtcIiw4ODMyOlwibnByZWM7XCIsODgzMzpcIm5zdWNjO1wiLDg4MzQ6XCJzdWJzZXQ7XCIsODgzNTpcInN1cHNldDtcIiw4ODM2OlwibnN1YjtcIiw4ODM3OlwibnN1cDtcIiw4ODM4OlwiU3Vic2V0RXF1YWw7XCIsODgzOTpcInN1cHNldGVxO1wiLDg4NDA6XCJuc3Vic2V0ZXE7XCIsODg0MTpcIm5zdXBzZXRlcTtcIiw4ODQyOlwic3Vic2V0bmVxO1wiLDg4NDM6XCJzdXBzZXRuZXE7XCIsODg0NTpcImN1cGRvdDtcIiw4ODQ2OlwidXBsdXM7XCIsODg0NzpcIlNxdWFyZVN1YnNldDtcIiw4ODQ4OlwiU3F1YXJlU3VwZXJzZXQ7XCIsODg0OTpcIlNxdWFyZVN1YnNldEVxdWFsO1wiLDg4NTA6XCJTcXVhcmVTdXBlcnNldEVxdWFsO1wiLDg4NTE6XCJTcXVhcmVJbnRlcnNlY3Rpb247XCIsODg1MjpcIlNxdWFyZVVuaW9uO1wiLDg4NTM6XCJvcGx1cztcIiw4ODU0Olwib21pbnVzO1wiLDg4NTU6XCJvdGltZXM7XCIsODg1NjpcIm9zb2w7XCIsODg1NzpcIm9kb3Q7XCIsODg1ODpcIm9jaXI7XCIsODg1OTpcIm9hc3Q7XCIsODg2MTpcIm9kYXNoO1wiLDg4NjI6XCJwbHVzYjtcIiw4ODYzOlwibWludXNiO1wiLDg4NjQ6XCJ0aW1lc2I7XCIsODg2NTpcInNkb3RiO1wiLDg4NjY6XCJ2ZGFzaDtcIiw4ODY3OlwiTGVmdFRlZTtcIiw4ODY4OlwidG9wO1wiLDg4Njk6XCJVcFRlZTtcIiw4ODcxOlwibW9kZWxzO1wiLDg4NzI6XCJ2RGFzaDtcIiw4ODczOlwiVmRhc2g7XCIsODg3NDpcIlZ2ZGFzaDtcIiw4ODc1OlwiVkRhc2g7XCIsODg3NjpcIm52ZGFzaDtcIiw4ODc3OlwibnZEYXNoO1wiLDg4Nzg6XCJuVmRhc2g7XCIsODg3OTpcIm5WRGFzaDtcIiw4ODgwOlwicHJ1cmVsO1wiLDg4ODI6XCJ2bHRyaTtcIiw4ODgzOlwidnJ0cmk7XCIsODg4NDpcInRyaWFuZ2xlbGVmdGVxO1wiLDg4ODU6XCJ0cmlhbmdsZXJpZ2h0ZXE7XCIsODg4NjpcIm9yaWdvZjtcIiw4ODg3OlwiaW1vZjtcIiw4ODg4OlwibXVtYXA7XCIsODg4OTpcImhlcmNvbjtcIiw4ODkwOlwiaW50ZXJjYWw7XCIsODg5MTpcInZlZWJhcjtcIiw4ODkzOlwiYmFydmVlO1wiLDg4OTQ6XCJhbmdydHZiO1wiLDg4OTU6XCJscnRyaTtcIiw4ODk2OlwieHdlZGdlO1wiLDg4OTc6XCJ4dmVlO1wiLDg4OTg6XCJ4Y2FwO1wiLDg4OTk6XCJ4Y3VwO1wiLDg5MDA6XCJkaWFtb25kO1wiLDg5MDE6XCJzZG90O1wiLDg5MDI6XCJTdGFyO1wiLDg5MDM6XCJkaXZvbng7XCIsODkwNDpcImJvd3RpZTtcIiw4OTA1OlwibHRpbWVzO1wiLDg5MDY6XCJydGltZXM7XCIsODkwNzpcImx0aHJlZTtcIiw4OTA4OlwicnRocmVlO1wiLDg5MDk6XCJic2ltZTtcIiw4OTEwOlwiY3V2ZWU7XCIsODkxMTpcImN1d2VkO1wiLDg5MTI6XCJTdWJzZXQ7XCIsODkxMzpcIlN1cHNldDtcIiw4OTE0OlwiQ2FwO1wiLDg5MTU6XCJDdXA7XCIsODkxNjpcInBpdGNoZm9yaztcIiw4OTE3OlwiZXBhcjtcIiw4OTE4OlwibHRkb3Q7XCIsODkxOTpcImd0cmRvdDtcIiw4OTIwOlwiTGw7XCIsODkyMTpcImdnZztcIiw4OTIyOlwiTGVzc0VxdWFsR3JlYXRlcjtcIiw4OTIzOlwiZ3RyZXFsZXNzO1wiLDg5MjY6XCJjdXJseWVxcHJlYztcIiw4OTI3OlwiY3VybHllcXN1Y2M7XCIsODkyODpcIm5wcmN1ZTtcIiw4OTI5OlwibnNjY3VlO1wiLDg5MzA6XCJuc3FzdWJlO1wiLDg5MzE6XCJuc3FzdXBlO1wiLDg5MzQ6XCJsbnNpbTtcIiw4OTM1OlwiZ25zaW07XCIsODkzNjpcInBybnNpbTtcIiw4OTM3Olwic3VjY25zaW07XCIsODkzODpcIm50cmlhbmdsZWxlZnQ7XCIsODkzOTpcIm50cmlhbmdsZXJpZ2h0O1wiLDg5NDA6XCJudHJpYW5nbGVsZWZ0ZXE7XCIsODk0MTpcIm50cmlhbmdsZXJpZ2h0ZXE7XCIsODk0MjpcInZlbGxpcDtcIiw4OTQzOlwiY3Rkb3Q7XCIsODk0NDpcInV0ZG90O1wiLDg5NDU6XCJkdGRvdDtcIiw4OTQ2OlwiZGlzaW47XCIsODk0NzpcImlzaW5zdjtcIiw4OTQ4OlwiaXNpbnM7XCIsODk0OTpcImlzaW5kb3Q7XCIsODk1MDpcIm5vdGludmM7XCIsODk1MTpcIm5vdGludmI7XCIsODk1MzpcImlzaW5FO1wiLDg5NTQ6XCJuaXNkO1wiLDg5NTU6XCJ4bmlzO1wiLDg5NTY6XCJuaXM7XCIsODk1NzpcIm5vdG5pdmM7XCIsODk1ODpcIm5vdG5pdmI7XCIsODk2NTpcImJhcndlZGdlO1wiLDg5NjY6XCJkb3VibGViYXJ3ZWRnZTtcIiw4OTY4OlwiTGVmdENlaWxpbmc7XCIsODk2OTpcIlJpZ2h0Q2VpbGluZztcIiw4OTcwOlwibGZsb29yO1wiLDg5NzE6XCJSaWdodEZsb29yO1wiLDg5NzI6XCJkcmNyb3A7XCIsODk3MzpcImRsY3JvcDtcIiw4OTc0OlwidXJjcm9wO1wiLDg5NzU6XCJ1bGNyb3A7XCIsODk3NjpcImJub3Q7XCIsODk3ODpcInByb2ZsaW5lO1wiLDg5Nzk6XCJwcm9mc3VyZjtcIiw4OTgxOlwidGVscmVjO1wiLDg5ODI6XCJ0YXJnZXQ7XCIsODk4ODpcInVsY29ybmVyO1wiLDg5ODk6XCJ1cmNvcm5lcjtcIiw4OTkwOlwibGxjb3JuZXI7XCIsODk5MTpcImxyY29ybmVyO1wiLDg5OTQ6XCJzZnJvd247XCIsODk5NTpcInNzbWlsZTtcIiw5MDA1OlwiY3lsY3R5O1wiLDkwMDY6XCJwcm9mYWxhcjtcIiw5MDE0OlwidG9wYm90O1wiLDkwMjE6XCJvdmJhcjtcIiw5MDIzOlwic29sYmFyO1wiLDkwODQ6XCJhbmd6YXJyO1wiLDkxMzY6XCJsbW91c3RhY2hlO1wiLDkxMzc6XCJybW91c3RhY2hlO1wiLDkxNDA6XCJ0YnJrO1wiLDkxNDE6XCJVbmRlckJyYWNrZXQ7XCIsOTE0MjpcImJicmt0YnJrO1wiLDkxODA6XCJPdmVyUGFyZW50aGVzaXM7XCIsOTE4MTpcIlVuZGVyUGFyZW50aGVzaXM7XCIsOTE4MjpcIk92ZXJCcmFjZTtcIiw5MTgzOlwiVW5kZXJCcmFjZTtcIiw5MTg2OlwidHJwZXppdW07XCIsOTE5MTpcImVsaW50ZXJzO1wiLDkyNTE6XCJibGFuaztcIiw5NDE2Olwib1M7XCIsOTQ3MjpcIkhvcml6b250YWxMaW5lO1wiLDk0NzQ6XCJib3h2O1wiLDk0ODQ6XCJib3hkcjtcIiw5NDg4OlwiYm94ZGw7XCIsOTQ5MjpcImJveHVyO1wiLDk0OTY6XCJib3h1bDtcIiw5NTAwOlwiYm94dnI7XCIsOTUwODpcImJveHZsO1wiLDk1MTY6XCJib3hoZDtcIiw5NTI0OlwiYm94aHU7XCIsOTUzMjpcImJveHZoO1wiLDk1NTI6XCJib3hIO1wiLDk1NTM6XCJib3hWO1wiLDk1NTQ6XCJib3hkUjtcIiw5NTU1OlwiYm94RHI7XCIsOTU1NjpcImJveERSO1wiLDk1NTc6XCJib3hkTDtcIiw5NTU4OlwiYm94RGw7XCIsOTU1OTpcImJveERMO1wiLDk1NjA6XCJib3h1UjtcIiw5NTYxOlwiYm94VXI7XCIsOTU2MjpcImJveFVSO1wiLDk1NjM6XCJib3h1TDtcIiw5NTY0OlwiYm94VWw7XCIsOTU2NTpcImJveFVMO1wiLDk1NjY6XCJib3h2UjtcIiw5NTY3OlwiYm94VnI7XCIsOTU2ODpcImJveFZSO1wiLDk1Njk6XCJib3h2TDtcIiw5NTcwOlwiYm94Vmw7XCIsOTU3MTpcImJveFZMO1wiLDk1NzI6XCJib3hIZDtcIiw5NTczOlwiYm94aEQ7XCIsOTU3NDpcImJveEhEO1wiLDk1NzU6XCJib3hIdTtcIiw5NTc2OlwiYm94aFU7XCIsOTU3NzpcImJveEhVO1wiLDk1Nzg6XCJib3h2SDtcIiw5NTc5OlwiYm94Vmg7XCIsOTU4MDpcImJveFZIO1wiLDk2MDA6XCJ1aGJsaztcIiw5NjA0OlwibGhibGs7XCIsOTYwODpcImJsb2NrO1wiLDk2MTc6XCJibGsxNDtcIiw5NjE4OlwiYmxrMTI7XCIsOTYxOTpcImJsazM0O1wiLDk2MzM6XCJzcXVhcmU7XCIsOTY0MjpcInNxdWY7XCIsOTY0MzpcIkVtcHR5VmVyeVNtYWxsU3F1YXJlO1wiLDk2NDU6XCJyZWN0O1wiLDk2NDY6XCJtYXJrZXI7XCIsOTY0OTpcImZsdG5zO1wiLDk2NTE6XCJ4dXRyaTtcIiw5NjUyOlwidXRyaWY7XCIsOTY1MzpcInV0cmk7XCIsOTY1NjpcInJ0cmlmO1wiLDk2NTc6XCJ0cmlhbmdsZXJpZ2h0O1wiLDk2NjE6XCJ4ZHRyaTtcIiw5NjYyOlwiZHRyaWY7XCIsOTY2MzpcInRyaWFuZ2xlZG93bjtcIiw5NjY2OlwibHRyaWY7XCIsOTY2NzpcInRyaWFuZ2xlbGVmdDtcIiw5Njc0OlwibG96ZW5nZTtcIiw5Njc1OlwiY2lyO1wiLDk3MDg6XCJ0cmlkb3Q7XCIsOTcxMTpcInhjaXJjO1wiLDk3MjA6XCJ1bHRyaTtcIiw5NzIxOlwidXJ0cmk7XCIsOTcyMjpcImxsdHJpO1wiLDk3MjM6XCJFbXB0eVNtYWxsU3F1YXJlO1wiLDk3MjQ6XCJGaWxsZWRTbWFsbFNxdWFyZTtcIiw5NzMzOlwic3RhcmY7XCIsOTczNDpcInN0YXI7XCIsOTc0MjpcInBob25lO1wiLDk3OTI6XCJmZW1hbGU7XCIsOTc5NDpcIm1hbGU7XCIsOTgyNDpcInNwYWRlc3VpdDtcIiw5ODI3OlwiY2x1YnN1aXQ7XCIsOTgyOTpcImhlYXJ0c3VpdDtcIiw5ODMwOlwiZGlhbXM7XCIsOTgzNDpcInN1bmc7XCIsOTgzNzpcImZsYXQ7XCIsOTgzODpcIm5hdHVyYWw7XCIsOTgzOTpcInNoYXJwO1wiLDEwMDAzOlwiY2hlY2ttYXJrO1wiLDEwMDA3OlwiY3Jvc3M7XCIsMTAwMTY6XCJtYWx0ZXNlO1wiLDEwMDM4Olwic2V4dDtcIiwxMDA3MjpcIlZlcnRpY2FsU2VwYXJhdG9yO1wiLDEwMDk4OlwibGJicms7XCIsMTAwOTk6XCJyYmJyaztcIiwxMDE4NDpcImJzb2xoc3ViO1wiLDEwMTg1Olwic3VwaHNvbDtcIiwxMDIxNDpcImxvYnJrO1wiLDEwMjE1Olwicm9icms7XCIsMTAyMTY6XCJMZWZ0QW5nbGVCcmFja2V0O1wiLDEwMjE3OlwiUmlnaHRBbmdsZUJyYWNrZXQ7XCIsMTAyMTg6XCJMYW5nO1wiLDEwMjE5OlwiUmFuZztcIiwxMDIyMDpcImxvYW5nO1wiLDEwMjIxOlwicm9hbmc7XCIsMTAyMjk6XCJ4bGFycjtcIiwxMDIzMDpcInhyYXJyO1wiLDEwMjMxOlwieGhhcnI7XCIsMTAyMzI6XCJ4bEFycjtcIiwxMDIzMzpcInhyQXJyO1wiLDEwMjM0OlwieGhBcnI7XCIsMTAyMzY6XCJ4bWFwO1wiLDEwMjM5OlwiZHppZ3JhcnI7XCIsMTA0OTg6XCJudmxBcnI7XCIsMTA0OTk6XCJudnJBcnI7XCIsMTA1MDA6XCJudkhhcnI7XCIsMTA1MDE6XCJNYXA7XCIsMTA1MDg6XCJsYmFycjtcIiwxMDUwOTpcInJiYXJyO1wiLDEwNTEwOlwibEJhcnI7XCIsMTA1MTE6XCJyQmFycjtcIiwxMDUxMjpcIlJCYXJyO1wiLDEwNTEzOlwiRERvdHJhaGQ7XCIsMTA1MTQ6XCJVcEFycm93QmFyO1wiLDEwNTE1OlwiRG93bkFycm93QmFyO1wiLDEwNTE4OlwiUmFycnRsO1wiLDEwNTIxOlwibGF0YWlsO1wiLDEwNTIyOlwicmF0YWlsO1wiLDEwNTIzOlwibEF0YWlsO1wiLDEwNTI0OlwickF0YWlsO1wiLDEwNTI1OlwibGFycmZzO1wiLDEwNTI2OlwicmFycmZzO1wiLDEwNTI3OlwibGFycmJmcztcIiwxMDUyODpcInJhcnJiZnM7XCIsMTA1MzE6XCJud2FyaGs7XCIsMTA1MzI6XCJuZWFyaGs7XCIsMTA1MzM6XCJzZWFyaGs7XCIsMTA1MzQ6XCJzd2FyaGs7XCIsMTA1MzU6XCJud25lYXI7XCIsMTA1MzY6XCJ0b2VhO1wiLDEwNTM3OlwidG9zYTtcIiwxMDUzODpcInN3bndhcjtcIiwxMDU0NzpcInJhcnJjO1wiLDEwNTQ5OlwiY3VkYXJycjtcIiwxMDU1MDpcImxkY2E7XCIsMTA1NTE6XCJyZGNhO1wiLDEwNTUyOlwiY3VkYXJybDtcIiwxMDU1MzpcImxhcnJwbDtcIiwxMDU1NjpcImN1cmFycm07XCIsMTA1NTc6XCJjdWxhcnJwO1wiLDEwNTY1OlwicmFycnBsO1wiLDEwNTY4OlwiaGFycmNpcjtcIiwxMDU2OTpcIlVhcnJvY2lyO1wiLDEwNTcwOlwibHVyZHNoYXI7XCIsMTA1NzE6XCJsZHJ1c2hhcjtcIiwxMDU3NDpcIkxlZnRSaWdodFZlY3RvcjtcIiwxMDU3NTpcIlJpZ2h0VXBEb3duVmVjdG9yO1wiLDEwNTc2OlwiRG93bkxlZnRSaWdodFZlY3RvcjtcIiwxMDU3NzpcIkxlZnRVcERvd25WZWN0b3I7XCIsMTA1Nzg6XCJMZWZ0VmVjdG9yQmFyO1wiLDEwNTc5OlwiUmlnaHRWZWN0b3JCYXI7XCIsMTA1ODA6XCJSaWdodFVwVmVjdG9yQmFyO1wiLDEwNTgxOlwiUmlnaHREb3duVmVjdG9yQmFyO1wiLDEwNTgyOlwiRG93bkxlZnRWZWN0b3JCYXI7XCIsMTA1ODM6XCJEb3duUmlnaHRWZWN0b3JCYXI7XCIsMTA1ODQ6XCJMZWZ0VXBWZWN0b3JCYXI7XCIsMTA1ODU6XCJMZWZ0RG93blZlY3RvckJhcjtcIiwxMDU4NjpcIkxlZnRUZWVWZWN0b3I7XCIsMTA1ODc6XCJSaWdodFRlZVZlY3RvcjtcIiwxMDU4ODpcIlJpZ2h0VXBUZWVWZWN0b3I7XCIsMTA1ODk6XCJSaWdodERvd25UZWVWZWN0b3I7XCIsMTA1OTA6XCJEb3duTGVmdFRlZVZlY3RvcjtcIiwxMDU5MTpcIkRvd25SaWdodFRlZVZlY3RvcjtcIiwxMDU5MjpcIkxlZnRVcFRlZVZlY3RvcjtcIiwxMDU5MzpcIkxlZnREb3duVGVlVmVjdG9yO1wiLDEwNTk0OlwibEhhcjtcIiwxMDU5NTpcInVIYXI7XCIsMTA1OTY6XCJySGFyO1wiLDEwNTk3OlwiZEhhcjtcIiwxMDU5ODpcImx1cnVoYXI7XCIsMTA1OTk6XCJsZHJkaGFyO1wiLDEwNjAwOlwicnVsdWhhcjtcIiwxMDYwMTpcInJkbGRoYXI7XCIsMTA2MDI6XCJsaGFydWw7XCIsMTA2MDM6XCJsbGhhcmQ7XCIsMTA2MDQ6XCJyaGFydWw7XCIsMTA2MDU6XCJscmhhcmQ7XCIsMTA2MDY6XCJVcEVxdWlsaWJyaXVtO1wiLDEwNjA3OlwiUmV2ZXJzZVVwRXF1aWxpYnJpdW07XCIsMTA2MDg6XCJSb3VuZEltcGxpZXM7XCIsMTA2MDk6XCJlcmFycjtcIiwxMDYxMDpcInNpbXJhcnI7XCIsMTA2MTE6XCJsYXJyc2ltO1wiLDEwNjEyOlwicmFycnNpbTtcIiwxMDYxMzpcInJhcnJhcDtcIiwxMDYxNDpcImx0bGFycjtcIiwxMDYxNjpcImd0cmFycjtcIiwxMDYxNzpcInN1YnJhcnI7XCIsMTA2MTk6XCJzdXBsYXJyO1wiLDEwNjIwOlwibGZpc2h0O1wiLDEwNjIxOlwicmZpc2h0O1wiLDEwNjIyOlwidWZpc2h0O1wiLDEwNjIzOlwiZGZpc2h0O1wiLDEwNjI5OlwibG9wYXI7XCIsMTA2MzA6XCJyb3BhcjtcIiwxMDYzNTpcImxicmtlO1wiLDEwNjM2OlwicmJya2U7XCIsMTA2Mzc6XCJsYnJrc2x1O1wiLDEwNjM4OlwicmJya3NsZDtcIiwxMDYzOTpcImxicmtzbGQ7XCIsMTA2NDA6XCJyYnJrc2x1O1wiLDEwNjQxOlwibGFuZ2Q7XCIsMTA2NDI6XCJyYW5nZDtcIiwxMDY0MzpcImxwYXJsdDtcIiwxMDY0NDpcInJwYXJndDtcIiwxMDY0NTpcImd0bFBhcjtcIiwxMDY0NjpcImx0clBhcjtcIiwxMDY1MDpcInZ6aWd6YWc7XCIsMTA2NTI6XCJ2YW5ncnQ7XCIsMTA2NTM6XCJhbmdydHZiZDtcIiwxMDY2MDpcImFuZ2U7XCIsMTA2NjE6XCJyYW5nZTtcIiwxMDY2MjpcImR3YW5nbGU7XCIsMTA2NjM6XCJ1d2FuZ2xlO1wiLDEwNjY0OlwiYW5nbXNkYWE7XCIsMTA2NjU6XCJhbmdtc2RhYjtcIiwxMDY2NjpcImFuZ21zZGFjO1wiLDEwNjY3OlwiYW5nbXNkYWQ7XCIsMTA2Njg6XCJhbmdtc2RhZTtcIiwxMDY2OTpcImFuZ21zZGFmO1wiLDEwNjcwOlwiYW5nbXNkYWc7XCIsMTA2NzE6XCJhbmdtc2RhaDtcIiwxMDY3MjpcImJlbXB0eXY7XCIsMTA2NzM6XCJkZW1wdHl2O1wiLDEwNjc0OlwiY2VtcHR5djtcIiwxMDY3NTpcInJhZW1wdHl2O1wiLDEwNjc2OlwibGFlbXB0eXY7XCIsMTA2Nzc6XCJvaGJhcjtcIiwxMDY3ODpcIm9taWQ7XCIsMTA2Nzk6XCJvcGFyO1wiLDEwNjgxOlwib3BlcnA7XCIsMTA2ODM6XCJvbGNyb3NzO1wiLDEwNjg0Olwib2Rzb2xkO1wiLDEwNjg2Olwib2xjaXI7XCIsMTA2ODc6XCJvZmNpcjtcIiwxMDY4ODpcIm9sdDtcIiwxMDY4OTpcIm9ndDtcIiwxMDY5MDpcImNpcnNjaXI7XCIsMTA2OTE6XCJjaXJFO1wiLDEwNjkyOlwic29sYjtcIiwxMDY5MzpcImJzb2xiO1wiLDEwNjk3OlwiYm94Ym94O1wiLDEwNzAxOlwidHJpc2I7XCIsMTA3MDI6XCJydHJpbHRyaTtcIiwxMDcwMzpcIkxlZnRUcmlhbmdsZUJhcjtcIiwxMDcwNDpcIlJpZ2h0VHJpYW5nbGVCYXI7XCIsMTA3MTY6XCJpaW5maW47XCIsMTA3MTc6XCJpbmZpbnRpZTtcIiwxMDcxODpcIm52aW5maW47XCIsMTA3MjM6XCJlcGFyc2w7XCIsMTA3MjQ6XCJzbWVwYXJzbDtcIiwxMDcyNTpcImVxdnBhcnNsO1wiLDEwNzMxOlwibG96ZjtcIiwxMDc0MDpcIlJ1bGVEZWxheWVkO1wiLDEwNzQyOlwiZHNvbDtcIiwxMDc1MjpcInhvZG90O1wiLDEwNzUzOlwieG9wbHVzO1wiLDEwNzU0OlwieG90aW1lO1wiLDEwNzU2OlwieHVwbHVzO1wiLDEwNzU4OlwieHNxY3VwO1wiLDEwNzY0OlwicWludDtcIiwxMDc2NTpcImZwYXJ0aW50O1wiLDEwNzY4OlwiY2lyZm5pbnQ7XCIsMTA3Njk6XCJhd2ludDtcIiwxMDc3MDpcInJwcG9saW50O1wiLDEwNzcxOlwic2Nwb2xpbnQ7XCIsMTA3NzI6XCJucG9saW50O1wiLDEwNzczOlwicG9pbnRpbnQ7XCIsMTA3NzQ6XCJxdWF0aW50O1wiLDEwNzc1OlwiaW50bGFyaGs7XCIsMTA3ODY6XCJwbHVzY2lyO1wiLDEwNzg3OlwicGx1c2FjaXI7XCIsMTA3ODg6XCJzaW1wbHVzO1wiLDEwNzg5OlwicGx1c2R1O1wiLDEwNzkwOlwicGx1c3NpbTtcIiwxMDc5MTpcInBsdXN0d287XCIsMTA3OTM6XCJtY29tbWE7XCIsMTA3OTQ6XCJtaW51c2R1O1wiLDEwNzk3OlwibG9wbHVzO1wiLDEwNzk4Olwicm9wbHVzO1wiLDEwNzk5OlwiQ3Jvc3M7XCIsMTA4MDA6XCJ0aW1lc2Q7XCIsMTA4MDE6XCJ0aW1lc2JhcjtcIiwxMDgwMzpcInNtYXNocDtcIiwxMDgwNDpcImxvdGltZXM7XCIsMTA4MDU6XCJyb3RpbWVzO1wiLDEwODA2Olwib3RpbWVzYXM7XCIsMTA4MDc6XCJPdGltZXM7XCIsMTA4MDg6XCJvZGl2O1wiLDEwODA5OlwidHJpcGx1cztcIiwxMDgxMDpcInRyaW1pbnVzO1wiLDEwODExOlwidHJpdGltZTtcIiwxMDgxMjpcImlwcm9kO1wiLDEwODE1OlwiYW1hbGc7XCIsMTA4MTY6XCJjYXBkb3Q7XCIsMTA4MTg6XCJuY3VwO1wiLDEwODE5OlwibmNhcDtcIiwxMDgyMDpcImNhcGFuZDtcIiwxMDgyMTpcImN1cG9yO1wiLDEwODIyOlwiY3VwY2FwO1wiLDEwODIzOlwiY2FwY3VwO1wiLDEwODI0OlwiY3VwYnJjYXA7XCIsMTA4MjU6XCJjYXBicmN1cDtcIiwxMDgyNjpcImN1cGN1cDtcIiwxMDgyNzpcImNhcGNhcDtcIiwxMDgyODpcImNjdXBzO1wiLDEwODI5OlwiY2NhcHM7XCIsMTA4MzI6XCJjY3Vwc3NtO1wiLDEwODM1OlwiQW5kO1wiLDEwODM2OlwiT3I7XCIsMTA4Mzc6XCJhbmRhbmQ7XCIsMTA4Mzg6XCJvcm9yO1wiLDEwODM5Olwib3JzbG9wZTtcIiwxMDg0MDpcImFuZHNsb3BlO1wiLDEwODQyOlwiYW5kdjtcIiwxMDg0MzpcIm9ydjtcIiwxMDg0NDpcImFuZGQ7XCIsMTA4NDU6XCJvcmQ7XCIsMTA4NDc6XCJ3ZWRiYXI7XCIsMTA4NTQ6XCJzZG90ZTtcIiwxMDg1ODpcInNpbWRvdDtcIiwxMDg2MTpcImNvbmdkb3Q7XCIsMTA4NjI6XCJlYXN0ZXI7XCIsMTA4NjM6XCJhcGFjaXI7XCIsMTA4NjQ6XCJhcEU7XCIsMTA4NjU6XCJlcGx1cztcIiwxMDg2NjpcInBsdXNlO1wiLDEwODY3OlwiRXNpbTtcIiwxMDg2ODpcIkNvbG9uZTtcIiwxMDg2OTpcIkVxdWFsO1wiLDEwODcxOlwiZUREb3Q7XCIsMTA4NzI6XCJlcXVpdkREO1wiLDEwODczOlwibHRjaXI7XCIsMTA4NzQ6XCJndGNpcjtcIiwxMDg3NTpcImx0cXVlc3Q7XCIsMTA4NzY6XCJndHF1ZXN0O1wiLDEwODc3OlwiTGVzc1NsYW50RXF1YWw7XCIsMTA4Nzg6XCJHcmVhdGVyU2xhbnRFcXVhbDtcIiwxMDg3OTpcImxlc2RvdDtcIiwxMDg4MDpcImdlc2RvdDtcIiwxMDg4MTpcImxlc2RvdG87XCIsMTA4ODI6XCJnZXNkb3RvO1wiLDEwODgzOlwibGVzZG90b3I7XCIsMTA4ODQ6XCJnZXNkb3RvbDtcIiwxMDg4NTpcImxlc3NhcHByb3g7XCIsMTA4ODY6XCJndHJhcHByb3g7XCIsMTA4ODc6XCJsbmVxO1wiLDEwODg4OlwiZ25lcTtcIiwxMDg4OTpcImxuYXBwcm94O1wiLDEwODkwOlwiZ25hcHByb3g7XCIsMTA4OTE6XCJsZXNzZXFxZ3RyO1wiLDEwODkyOlwiZ3RyZXFxbGVzcztcIiwxMDg5MzpcImxzaW1lO1wiLDEwODk0OlwiZ3NpbWU7XCIsMTA4OTU6XCJsc2ltZztcIiwxMDg5NjpcImdzaW1sO1wiLDEwODk3OlwibGdFO1wiLDEwODk4OlwiZ2xFO1wiLDEwODk5OlwibGVzZ2VzO1wiLDEwOTAwOlwiZ2VzbGVzO1wiLDEwOTAxOlwiZXFzbGFudGxlc3M7XCIsMTA5MDI6XCJlcXNsYW50Z3RyO1wiLDEwOTAzOlwiZWxzZG90O1wiLDEwOTA0OlwiZWdzZG90O1wiLDEwOTA1OlwiZWw7XCIsMTA5MDY6XCJlZztcIiwxMDkwOTpcInNpbWw7XCIsMTA5MTA6XCJzaW1nO1wiLDEwOTExOlwic2ltbEU7XCIsMTA5MTI6XCJzaW1nRTtcIiwxMDkxMzpcIkxlc3NMZXNzO1wiLDEwOTE0OlwiR3JlYXRlckdyZWF0ZXI7XCIsMTA5MTY6XCJnbGo7XCIsMTA5MTc6XCJnbGE7XCIsMTA5MTg6XCJsdGNjO1wiLDEwOTE5OlwiZ3RjYztcIiwxMDkyMDpcImxlc2NjO1wiLDEwOTIxOlwiZ2VzY2M7XCIsMTA5MjI6XCJzbXQ7XCIsMTA5MjM6XCJsYXQ7XCIsMTA5MjQ6XCJzbXRlO1wiLDEwOTI1OlwibGF0ZTtcIiwxMDkyNjpcImJ1bXBFO1wiLDEwOTI3OlwicHJlY2VxO1wiLDEwOTI4Olwic3VjY2VxO1wiLDEwOTMxOlwicHJFO1wiLDEwOTMyOlwic2NFO1wiLDEwOTMzOlwicHJuRTtcIiwxMDkzNDpcInN1Y2NuZXFxO1wiLDEwOTM1OlwicHJlY2FwcHJveDtcIiwxMDkzNjpcInN1Y2NhcHByb3g7XCIsMTA5Mzc6XCJwcm5hcDtcIiwxMDkzODpcInN1Y2NuYXBwcm94O1wiLDEwOTM5OlwiUHI7XCIsMTA5NDA6XCJTYztcIiwxMDk0MTpcInN1YmRvdDtcIiwxMDk0MjpcInN1cGRvdDtcIiwxMDk0MzpcInN1YnBsdXM7XCIsMTA5NDQ6XCJzdXBwbHVzO1wiLDEwOTQ1Olwic3VibXVsdDtcIiwxMDk0NjpcInN1cG11bHQ7XCIsMTA5NDc6XCJzdWJlZG90O1wiLDEwOTQ4Olwic3VwZWRvdDtcIiwxMDk0OTpcInN1YnNldGVxcTtcIiwxMDk1MDpcInN1cHNldGVxcTtcIiwxMDk1MTpcInN1YnNpbTtcIiwxMDk1MjpcInN1cHNpbTtcIiwxMDk1NTpcInN1YnNldG5lcXE7XCIsMTA5NTY6XCJzdXBzZXRuZXFxO1wiLDEwOTU5OlwiY3N1YjtcIiwxMDk2MDpcImNzdXA7XCIsMTA5NjE6XCJjc3ViZTtcIiwxMDk2MjpcImNzdXBlO1wiLDEwOTYzOlwic3Vic3VwO1wiLDEwOTY0Olwic3Vwc3ViO1wiLDEwOTY1Olwic3Vic3ViO1wiLDEwOTY2Olwic3Vwc3VwO1wiLDEwOTY3Olwic3VwaHN1YjtcIiwxMDk2ODpcInN1cGRzdWI7XCIsMTA5Njk6XCJmb3JrdjtcIiwxMDk3MDpcInRvcGZvcms7XCIsMTA5NzE6XCJtbGNwO1wiLDEwOTgwOlwiRG91YmxlTGVmdFRlZTtcIiwxMDk4MjpcIlZkYXNobDtcIiwxMDk4MzpcIkJhcnY7XCIsMTA5ODQ6XCJ2QmFyO1wiLDEwOTg1OlwidkJhcnY7XCIsMTA5ODc6XCJWYmFyO1wiLDEwOTg4OlwiTm90O1wiLDEwOTg5OlwiYk5vdDtcIiwxMDk5MDpcInJubWlkO1wiLDEwOTkxOlwiY2lybWlkO1wiLDEwOTkyOlwibWlkY2lyO1wiLDEwOTkzOlwidG9wY2lyO1wiLDEwOTk0OlwibmhwYXI7XCIsMTA5OTU6XCJwYXJzaW07XCIsMTEwMDU6XCJwYXJzbDtcIiw2NDI1NjpcImZmbGlnO1wiLDY0MjU3OlwiZmlsaWc7XCIsNjQyNTg6XCJmbGxpZztcIiw2NDI1OTpcImZmaWxpZztcIiw2NDI2MDpcImZmbGxpZztcIn0sZmU9UihPYmplY3QuZnJlZXplKHtfX3Byb3RvX186bnVsbCxkZWNvZGU6b2UsZW5jb2RlOmllLHRvVW5pY29kZTpzZSx0b0FTQ0lJOmNlLHZlcnNpb246bGUsdWNzMjp1ZSxkZWZhdWx0OnBlfSkpO3ZhciBkZT17XCJBYWN1dGU7XCI6XCLDgVwiLEFhY3V0ZTpcIsOBXCIsXCJhYWN1dGU7XCI6XCLDoVwiLGFhY3V0ZTpcIsOhXCIsXCJBYnJldmU7XCI6XCLEglwiLFwiYWJyZXZlO1wiOlwixINcIixcImFjO1wiOlwi4oi+XCIsXCJhY2Q7XCI6XCLiiL9cIixcImFjRTtcIjpcIuKIvsyzXCIsXCJBY2lyYztcIjpcIsOCXCIsQWNpcmM6XCLDglwiLFwiYWNpcmM7XCI6XCLDolwiLGFjaXJjOlwiw6JcIixcImFjdXRlO1wiOlwiwrRcIixhY3V0ZTpcIsK0XCIsXCJBY3k7XCI6XCLQkFwiLFwiYWN5O1wiOlwi0LBcIixcIkFFbGlnO1wiOlwiw4ZcIixBRWxpZzpcIsOGXCIsXCJhZWxpZztcIjpcIsOmXCIsYWVsaWc6XCLDplwiLFwiYWY7XCI6XCLigaFcIixcIkFmcjtcIjpcIvCdlIRcIixcImFmcjtcIjpcIvCdlJ5cIixcIkFncmF2ZTtcIjpcIsOAXCIsQWdyYXZlOlwiw4BcIixcImFncmF2ZTtcIjpcIsOgXCIsYWdyYXZlOlwiw6BcIixcImFsZWZzeW07XCI6XCLihLVcIixcImFsZXBoO1wiOlwi4oS1XCIsXCJBbHBoYTtcIjpcIs6RXCIsXCJhbHBoYTtcIjpcIs6xXCIsXCJBbWFjcjtcIjpcIsSAXCIsXCJhbWFjcjtcIjpcIsSBXCIsXCJhbWFsZztcIjpcIuKov1wiLFwiQU1QO1wiOlwiJlwiLEFNUDpcIiZcIixcImFtcDtcIjpcIiZcIixhbXA6XCImXCIsXCJBbmQ7XCI6XCLiqZNcIixcImFuZDtcIjpcIuKIp1wiLFwiYW5kYW5kO1wiOlwi4qmVXCIsXCJhbmRkO1wiOlwi4qmcXCIsXCJhbmRzbG9wZTtcIjpcIuKpmFwiLFwiYW5kdjtcIjpcIuKpmlwiLFwiYW5nO1wiOlwi4oigXCIsXCJhbmdlO1wiOlwi4qakXCIsXCJhbmdsZTtcIjpcIuKIoFwiLFwiYW5nbXNkO1wiOlwi4oihXCIsXCJhbmdtc2RhYTtcIjpcIuKmqFwiLFwiYW5nbXNkYWI7XCI6XCLipqlcIixcImFuZ21zZGFjO1wiOlwi4qaqXCIsXCJhbmdtc2RhZDtcIjpcIuKmq1wiLFwiYW5nbXNkYWU7XCI6XCLipqxcIixcImFuZ21zZGFmO1wiOlwi4qatXCIsXCJhbmdtc2RhZztcIjpcIuKmrlwiLFwiYW5nbXNkYWg7XCI6XCLipq9cIixcImFuZ3J0O1wiOlwi4oifXCIsXCJhbmdydHZiO1wiOlwi4oq+XCIsXCJhbmdydHZiZDtcIjpcIuKmnVwiLFwiYW5nc3BoO1wiOlwi4oiiXCIsXCJhbmdzdDtcIjpcIsOFXCIsXCJhbmd6YXJyO1wiOlwi4o28XCIsXCJBb2dvbjtcIjpcIsSEXCIsXCJhb2dvbjtcIjpcIsSFXCIsXCJBb3BmO1wiOlwi8J2UuFwiLFwiYW9wZjtcIjpcIvCdlZJcIixcImFwO1wiOlwi4omIXCIsXCJhcGFjaXI7XCI6XCLiqa9cIixcImFwRTtcIjpcIuKpsFwiLFwiYXBlO1wiOlwi4omKXCIsXCJhcGlkO1wiOlwi4omLXCIsXCJhcG9zO1wiOlwiJ1wiLFwiQXBwbHlGdW5jdGlvbjtcIjpcIuKBoVwiLFwiYXBwcm94O1wiOlwi4omIXCIsXCJhcHByb3hlcTtcIjpcIuKJilwiLFwiQXJpbmc7XCI6XCLDhVwiLEFyaW5nOlwiw4VcIixcImFyaW5nO1wiOlwiw6VcIixhcmluZzpcIsOlXCIsXCJBc2NyO1wiOlwi8J2SnFwiLFwiYXNjcjtcIjpcIvCdkrZcIixcIkFzc2lnbjtcIjpcIuKJlFwiLFwiYXN0O1wiOlwiKlwiLFwiYXN5bXA7XCI6XCLiiYhcIixcImFzeW1wZXE7XCI6XCLiiY1cIixcIkF0aWxkZTtcIjpcIsODXCIsQXRpbGRlOlwiw4NcIixcImF0aWxkZTtcIjpcIsOjXCIsYXRpbGRlOlwiw6NcIixcIkF1bWw7XCI6XCLDhFwiLEF1bWw6XCLDhFwiLFwiYXVtbDtcIjpcIsOkXCIsYXVtbDpcIsOkXCIsXCJhd2NvbmludDtcIjpcIuKIs1wiLFwiYXdpbnQ7XCI6XCLiqJFcIixcImJhY2tjb25nO1wiOlwi4omMXCIsXCJiYWNrZXBzaWxvbjtcIjpcIs+2XCIsXCJiYWNrcHJpbWU7XCI6XCLigLVcIixcImJhY2tzaW07XCI6XCLiiL1cIixcImJhY2tzaW1lcTtcIjpcIuKLjVwiLFwiQmFja3NsYXNoO1wiOlwi4oiWXCIsXCJCYXJ2O1wiOlwi4qunXCIsXCJiYXJ2ZWU7XCI6XCLiir1cIixcIkJhcndlZDtcIjpcIuKMhlwiLFwiYmFyd2VkO1wiOlwi4oyFXCIsXCJiYXJ3ZWRnZTtcIjpcIuKMhVwiLFwiYmJyaztcIjpcIuKOtVwiLFwiYmJya3Ricms7XCI6XCLijrZcIixcImJjb25nO1wiOlwi4omMXCIsXCJCY3k7XCI6XCLQkVwiLFwiYmN5O1wiOlwi0LFcIixcImJkcXVvO1wiOlwi4oCeXCIsXCJiZWNhdXM7XCI6XCLiiLVcIixcIkJlY2F1c2U7XCI6XCLiiLVcIixcImJlY2F1c2U7XCI6XCLiiLVcIixcImJlbXB0eXY7XCI6XCLiprBcIixcImJlcHNpO1wiOlwiz7ZcIixcImJlcm5vdTtcIjpcIuKErFwiLFwiQmVybm91bGxpcztcIjpcIuKErFwiLFwiQmV0YTtcIjpcIs6SXCIsXCJiZXRhO1wiOlwizrJcIixcImJldGg7XCI6XCLihLZcIixcImJldHdlZW47XCI6XCLiiaxcIixcIkJmcjtcIjpcIvCdlIVcIixcImJmcjtcIjpcIvCdlJ9cIixcImJpZ2NhcDtcIjpcIuKLglwiLFwiYmlnY2lyYztcIjpcIuKXr1wiLFwiYmlnY3VwO1wiOlwi4ouDXCIsXCJiaWdvZG90O1wiOlwi4qiAXCIsXCJiaWdvcGx1cztcIjpcIuKogVwiLFwiYmlnb3RpbWVzO1wiOlwi4qiCXCIsXCJiaWdzcWN1cDtcIjpcIuKohlwiLFwiYmlnc3RhcjtcIjpcIuKYhVwiLFwiYmlndHJpYW5nbGVkb3duO1wiOlwi4pa9XCIsXCJiaWd0cmlhbmdsZXVwO1wiOlwi4pazXCIsXCJiaWd1cGx1cztcIjpcIuKohFwiLFwiYmlndmVlO1wiOlwi4ouBXCIsXCJiaWd3ZWRnZTtcIjpcIuKLgFwiLFwiYmthcm93O1wiOlwi4qSNXCIsXCJibGFja2xvemVuZ2U7XCI6XCLip6tcIixcImJsYWNrc3F1YXJlO1wiOlwi4paqXCIsXCJibGFja3RyaWFuZ2xlO1wiOlwi4pa0XCIsXCJibGFja3RyaWFuZ2xlZG93bjtcIjpcIuKWvlwiLFwiYmxhY2t0cmlhbmdsZWxlZnQ7XCI6XCLil4JcIixcImJsYWNrdHJpYW5nbGVyaWdodDtcIjpcIuKWuFwiLFwiYmxhbms7XCI6XCLikKNcIixcImJsazEyO1wiOlwi4paSXCIsXCJibGsxNDtcIjpcIuKWkVwiLFwiYmxrMzQ7XCI6XCLilpNcIixcImJsb2NrO1wiOlwi4paIXCIsXCJibmU7XCI6XCI94oOlXCIsXCJibmVxdWl2O1wiOlwi4omh4oOlXCIsXCJiTm90O1wiOlwi4qutXCIsXCJibm90O1wiOlwi4oyQXCIsXCJCb3BmO1wiOlwi8J2UuVwiLFwiYm9wZjtcIjpcIvCdlZNcIixcImJvdDtcIjpcIuKKpVwiLFwiYm90dG9tO1wiOlwi4oqlXCIsXCJib3d0aWU7XCI6XCLii4hcIixcImJveGJveDtcIjpcIuKniVwiLFwiYm94REw7XCI6XCLilZdcIixcImJveERsO1wiOlwi4pWWXCIsXCJib3hkTDtcIjpcIuKVlVwiLFwiYm94ZGw7XCI6XCLilJBcIixcImJveERSO1wiOlwi4pWUXCIsXCJib3hEcjtcIjpcIuKVk1wiLFwiYm94ZFI7XCI6XCLilZJcIixcImJveGRyO1wiOlwi4pSMXCIsXCJib3hIO1wiOlwi4pWQXCIsXCJib3hoO1wiOlwi4pSAXCIsXCJib3hIRDtcIjpcIuKVplwiLFwiYm94SGQ7XCI6XCLilaRcIixcImJveGhEO1wiOlwi4pWlXCIsXCJib3hoZDtcIjpcIuKUrFwiLFwiYm94SFU7XCI6XCLilalcIixcImJveEh1O1wiOlwi4pWnXCIsXCJib3hoVTtcIjpcIuKVqFwiLFwiYm94aHU7XCI6XCLilLRcIixcImJveG1pbnVzO1wiOlwi4oqfXCIsXCJib3hwbHVzO1wiOlwi4oqeXCIsXCJib3h0aW1lcztcIjpcIuKKoFwiLFwiYm94VUw7XCI6XCLilZ1cIixcImJveFVsO1wiOlwi4pWcXCIsXCJib3h1TDtcIjpcIuKVm1wiLFwiYm94dWw7XCI6XCLilJhcIixcImJveFVSO1wiOlwi4pWaXCIsXCJib3hVcjtcIjpcIuKVmVwiLFwiYm94dVI7XCI6XCLilZhcIixcImJveHVyO1wiOlwi4pSUXCIsXCJib3hWO1wiOlwi4pWRXCIsXCJib3h2O1wiOlwi4pSCXCIsXCJib3hWSDtcIjpcIuKVrFwiLFwiYm94Vmg7XCI6XCLilatcIixcImJveHZIO1wiOlwi4pWqXCIsXCJib3h2aDtcIjpcIuKUvFwiLFwiYm94Vkw7XCI6XCLilaNcIixcImJveFZsO1wiOlwi4pWiXCIsXCJib3h2TDtcIjpcIuKVoVwiLFwiYm94dmw7XCI6XCLilKRcIixcImJveFZSO1wiOlwi4pWgXCIsXCJib3hWcjtcIjpcIuKVn1wiLFwiYm94dlI7XCI6XCLilZ5cIixcImJveHZyO1wiOlwi4pScXCIsXCJicHJpbWU7XCI6XCLigLVcIixcIkJyZXZlO1wiOlwiy5hcIixcImJyZXZlO1wiOlwiy5hcIixcImJydmJhcjtcIjpcIsKmXCIsYnJ2YmFyOlwiwqZcIixcIkJzY3I7XCI6XCLihKxcIixcImJzY3I7XCI6XCLwnZK3XCIsXCJic2VtaTtcIjpcIuKBj1wiLFwiYnNpbTtcIjpcIuKIvVwiLFwiYnNpbWU7XCI6XCLii41cIixcImJzb2w7XCI6XCJcXFxcXCIsXCJic29sYjtcIjpcIuKnhVwiLFwiYnNvbGhzdWI7XCI6XCLin4hcIixcImJ1bGw7XCI6XCLigKJcIixcImJ1bGxldDtcIjpcIuKAolwiLFwiYnVtcDtcIjpcIuKJjlwiLFwiYnVtcEU7XCI6XCLiqq5cIixcImJ1bXBlO1wiOlwi4omPXCIsXCJCdW1wZXE7XCI6XCLiiY5cIixcImJ1bXBlcTtcIjpcIuKJj1wiLFwiQ2FjdXRlO1wiOlwixIZcIixcImNhY3V0ZTtcIjpcIsSHXCIsXCJDYXA7XCI6XCLii5JcIixcImNhcDtcIjpcIuKIqVwiLFwiY2FwYW5kO1wiOlwi4qmEXCIsXCJjYXBicmN1cDtcIjpcIuKpiVwiLFwiY2FwY2FwO1wiOlwi4qmLXCIsXCJjYXBjdXA7XCI6XCLiqYdcIixcImNhcGRvdDtcIjpcIuKpgFwiLFwiQ2FwaXRhbERpZmZlcmVudGlhbEQ7XCI6XCLihYVcIixcImNhcHM7XCI6XCLiiKnvuIBcIixcImNhcmV0O1wiOlwi4oGBXCIsXCJjYXJvbjtcIjpcIsuHXCIsXCJDYXlsZXlzO1wiOlwi4oStXCIsXCJjY2FwcztcIjpcIuKpjVwiLFwiQ2Nhcm9uO1wiOlwixIxcIixcImNjYXJvbjtcIjpcIsSNXCIsXCJDY2VkaWw7XCI6XCLDh1wiLENjZWRpbDpcIsOHXCIsXCJjY2VkaWw7XCI6XCLDp1wiLGNjZWRpbDpcIsOnXCIsXCJDY2lyYztcIjpcIsSIXCIsXCJjY2lyYztcIjpcIsSJXCIsXCJDY29uaW50O1wiOlwi4oiwXCIsXCJjY3VwcztcIjpcIuKpjFwiLFwiY2N1cHNzbTtcIjpcIuKpkFwiLFwiQ2RvdDtcIjpcIsSKXCIsXCJjZG90O1wiOlwixItcIixcImNlZGlsO1wiOlwiwrhcIixjZWRpbDpcIsK4XCIsXCJDZWRpbGxhO1wiOlwiwrhcIixcImNlbXB0eXY7XCI6XCLiprJcIixcImNlbnQ7XCI6XCLColwiLGNlbnQ6XCLColwiLFwiQ2VudGVyRG90O1wiOlwiwrdcIixcImNlbnRlcmRvdDtcIjpcIsK3XCIsXCJDZnI7XCI6XCLihK1cIixcImNmcjtcIjpcIvCdlKBcIixcIkNIY3k7XCI6XCLQp1wiLFwiY2hjeTtcIjpcItGHXCIsXCJjaGVjaztcIjpcIuKck1wiLFwiY2hlY2ttYXJrO1wiOlwi4pyTXCIsXCJDaGk7XCI6XCLOp1wiLFwiY2hpO1wiOlwiz4dcIixcImNpcjtcIjpcIuKXi1wiLFwiY2lyYztcIjpcIsuGXCIsXCJjaXJjZXE7XCI6XCLiiZdcIixcImNpcmNsZWFycm93bGVmdDtcIjpcIuKGulwiLFwiY2lyY2xlYXJyb3dyaWdodDtcIjpcIuKGu1wiLFwiY2lyY2xlZGFzdDtcIjpcIuKKm1wiLFwiY2lyY2xlZGNpcmM7XCI6XCLiippcIixcImNpcmNsZWRkYXNoO1wiOlwi4oqdXCIsXCJDaXJjbGVEb3Q7XCI6XCLiiplcIixcImNpcmNsZWRSO1wiOlwiwq5cIixcImNpcmNsZWRTO1wiOlwi4pOIXCIsXCJDaXJjbGVNaW51cztcIjpcIuKKllwiLFwiQ2lyY2xlUGx1cztcIjpcIuKKlVwiLFwiQ2lyY2xlVGltZXM7XCI6XCLiipdcIixcImNpckU7XCI6XCLip4NcIixcImNpcmU7XCI6XCLiiZdcIixcImNpcmZuaW50O1wiOlwi4qiQXCIsXCJjaXJtaWQ7XCI6XCLiq69cIixcImNpcnNjaXI7XCI6XCLip4JcIixcIkNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbDtcIjpcIuKIslwiLFwiQ2xvc2VDdXJseURvdWJsZVF1b3RlO1wiOlwi4oCdXCIsXCJDbG9zZUN1cmx5UXVvdGU7XCI6XCLigJlcIixcImNsdWJzO1wiOlwi4pmjXCIsXCJjbHVic3VpdDtcIjpcIuKZo1wiLFwiQ29sb247XCI6XCLiiLdcIixcImNvbG9uO1wiOlwiOlwiLFwiQ29sb25lO1wiOlwi4qm0XCIsXCJjb2xvbmU7XCI6XCLiiZRcIixcImNvbG9uZXE7XCI6XCLiiZRcIixcImNvbW1hO1wiOlwiLFwiLFwiY29tbWF0O1wiOlwiQFwiLFwiY29tcDtcIjpcIuKIgVwiLFwiY29tcGZuO1wiOlwi4oiYXCIsXCJjb21wbGVtZW50O1wiOlwi4oiBXCIsXCJjb21wbGV4ZXM7XCI6XCLihIJcIixcImNvbmc7XCI6XCLiiYVcIixcImNvbmdkb3Q7XCI6XCLiqa1cIixcIkNvbmdydWVudDtcIjpcIuKJoVwiLFwiQ29uaW50O1wiOlwi4oivXCIsXCJjb25pbnQ7XCI6XCLiiK5cIixcIkNvbnRvdXJJbnRlZ3JhbDtcIjpcIuKIrlwiLFwiQ29wZjtcIjpcIuKEglwiLFwiY29wZjtcIjpcIvCdlZRcIixcImNvcHJvZDtcIjpcIuKIkFwiLFwiQ29wcm9kdWN0O1wiOlwi4oiQXCIsXCJDT1BZO1wiOlwiwqlcIixDT1BZOlwiwqlcIixcImNvcHk7XCI6XCLCqVwiLGNvcHk6XCLCqVwiLFwiY29weXNyO1wiOlwi4oSXXCIsXCJDb3VudGVyQ2xvY2t3aXNlQ29udG91ckludGVncmFsO1wiOlwi4oizXCIsXCJjcmFycjtcIjpcIuKGtVwiLFwiQ3Jvc3M7XCI6XCLiqK9cIixcImNyb3NzO1wiOlwi4pyXXCIsXCJDc2NyO1wiOlwi8J2SnlwiLFwiY3NjcjtcIjpcIvCdkrhcIixcImNzdWI7XCI6XCLiq49cIixcImNzdWJlO1wiOlwi4quRXCIsXCJjc3VwO1wiOlwi4quQXCIsXCJjc3VwZTtcIjpcIuKrklwiLFwiY3Rkb3Q7XCI6XCLii69cIixcImN1ZGFycmw7XCI6XCLipLhcIixcImN1ZGFycnI7XCI6XCLipLVcIixcImN1ZXByO1wiOlwi4oueXCIsXCJjdWVzYztcIjpcIuKLn1wiLFwiY3VsYXJyO1wiOlwi4oa2XCIsXCJjdWxhcnJwO1wiOlwi4qS9XCIsXCJDdXA7XCI6XCLii5NcIixcImN1cDtcIjpcIuKIqlwiLFwiY3VwYnJjYXA7XCI6XCLiqYhcIixcIkN1cENhcDtcIjpcIuKJjVwiLFwiY3VwY2FwO1wiOlwi4qmGXCIsXCJjdXBjdXA7XCI6XCLiqYpcIixcImN1cGRvdDtcIjpcIuKKjVwiLFwiY3Vwb3I7XCI6XCLiqYVcIixcImN1cHM7XCI6XCLiiKrvuIBcIixcImN1cmFycjtcIjpcIuKGt1wiLFwiY3VyYXJybTtcIjpcIuKkvFwiLFwiY3VybHllcXByZWM7XCI6XCLii55cIixcImN1cmx5ZXFzdWNjO1wiOlwi4oufXCIsXCJjdXJseXZlZTtcIjpcIuKLjlwiLFwiY3VybHl3ZWRnZTtcIjpcIuKLj1wiLFwiY3VycmVuO1wiOlwiwqRcIixjdXJyZW46XCLCpFwiLFwiY3VydmVhcnJvd2xlZnQ7XCI6XCLihrZcIixcImN1cnZlYXJyb3dyaWdodDtcIjpcIuKGt1wiLFwiY3V2ZWU7XCI6XCLii45cIixcImN1d2VkO1wiOlwi4ouPXCIsXCJjd2NvbmludDtcIjpcIuKIslwiLFwiY3dpbnQ7XCI6XCLiiLFcIixcImN5bGN0eTtcIjpcIuKMrVwiLFwiRGFnZ2VyO1wiOlwi4oChXCIsXCJkYWdnZXI7XCI6XCLigKBcIixcImRhbGV0aDtcIjpcIuKEuFwiLFwiRGFycjtcIjpcIuKGoVwiLFwiZEFycjtcIjpcIuKHk1wiLFwiZGFycjtcIjpcIuKGk1wiLFwiZGFzaDtcIjpcIuKAkFwiLFwiRGFzaHY7XCI6XCLiq6RcIixcImRhc2h2O1wiOlwi4oqjXCIsXCJkYmthcm93O1wiOlwi4qSPXCIsXCJkYmxhYztcIjpcIsudXCIsXCJEY2Fyb247XCI6XCLEjlwiLFwiZGNhcm9uO1wiOlwixI9cIixcIkRjeTtcIjpcItCUXCIsXCJkY3k7XCI6XCLQtFwiLFwiREQ7XCI6XCLihYVcIixcImRkO1wiOlwi4oWGXCIsXCJkZGFnZ2VyO1wiOlwi4oChXCIsXCJkZGFycjtcIjpcIuKHilwiLFwiRERvdHJhaGQ7XCI6XCLipJFcIixcImRkb3RzZXE7XCI6XCLiqbdcIixcImRlZztcIjpcIsKwXCIsZGVnOlwiwrBcIixcIkRlbDtcIjpcIuKIh1wiLFwiRGVsdGE7XCI6XCLOlFwiLFwiZGVsdGE7XCI6XCLOtFwiLFwiZGVtcHR5djtcIjpcIuKmsVwiLFwiZGZpc2h0O1wiOlwi4qW/XCIsXCJEZnI7XCI6XCLwnZSHXCIsXCJkZnI7XCI6XCLwnZShXCIsXCJkSGFyO1wiOlwi4qWlXCIsXCJkaGFybDtcIjpcIuKHg1wiLFwiZGhhcnI7XCI6XCLih4JcIixcIkRpYWNyaXRpY2FsQWN1dGU7XCI6XCLCtFwiLFwiRGlhY3JpdGljYWxEb3Q7XCI6XCLLmVwiLFwiRGlhY3JpdGljYWxEb3VibGVBY3V0ZTtcIjpcIsudXCIsXCJEaWFjcml0aWNhbEdyYXZlO1wiOlwiYFwiLFwiRGlhY3JpdGljYWxUaWxkZTtcIjpcIsucXCIsXCJkaWFtO1wiOlwi4ouEXCIsXCJEaWFtb25kO1wiOlwi4ouEXCIsXCJkaWFtb25kO1wiOlwi4ouEXCIsXCJkaWFtb25kc3VpdDtcIjpcIuKZplwiLFwiZGlhbXM7XCI6XCLimaZcIixcImRpZTtcIjpcIsKoXCIsXCJEaWZmZXJlbnRpYWxEO1wiOlwi4oWGXCIsXCJkaWdhbW1hO1wiOlwiz51cIixcImRpc2luO1wiOlwi4ouyXCIsXCJkaXY7XCI6XCLDt1wiLFwiZGl2aWRlO1wiOlwiw7dcIixkaXZpZGU6XCLDt1wiLFwiZGl2aWRlb250aW1lcztcIjpcIuKLh1wiLFwiZGl2b254O1wiOlwi4ouHXCIsXCJESmN5O1wiOlwi0IJcIixcImRqY3k7XCI6XCLRklwiLFwiZGxjb3JuO1wiOlwi4oyeXCIsXCJkbGNyb3A7XCI6XCLijI1cIixcImRvbGxhcjtcIjpcIiRcIixcIkRvcGY7XCI6XCLwnZS7XCIsXCJkb3BmO1wiOlwi8J2VlVwiLFwiRG90O1wiOlwiwqhcIixcImRvdDtcIjpcIsuZXCIsXCJEb3REb3Q7XCI6XCLig5xcIixcImRvdGVxO1wiOlwi4omQXCIsXCJkb3RlcWRvdDtcIjpcIuKJkVwiLFwiRG90RXF1YWw7XCI6XCLiiZBcIixcImRvdG1pbnVzO1wiOlwi4oi4XCIsXCJkb3RwbHVzO1wiOlwi4oiUXCIsXCJkb3RzcXVhcmU7XCI6XCLiiqFcIixcImRvdWJsZWJhcndlZGdlO1wiOlwi4oyGXCIsXCJEb3VibGVDb250b3VySW50ZWdyYWw7XCI6XCLiiK9cIixcIkRvdWJsZURvdDtcIjpcIsKoXCIsXCJEb3VibGVEb3duQXJyb3c7XCI6XCLih5NcIixcIkRvdWJsZUxlZnRBcnJvdztcIjpcIuKHkFwiLFwiRG91YmxlTGVmdFJpZ2h0QXJyb3c7XCI6XCLih5RcIixcIkRvdWJsZUxlZnRUZWU7XCI6XCLiq6RcIixcIkRvdWJsZUxvbmdMZWZ0QXJyb3c7XCI6XCLin7hcIixcIkRvdWJsZUxvbmdMZWZ0UmlnaHRBcnJvdztcIjpcIuKfulwiLFwiRG91YmxlTG9uZ1JpZ2h0QXJyb3c7XCI6XCLin7lcIixcIkRvdWJsZVJpZ2h0QXJyb3c7XCI6XCLih5JcIixcIkRvdWJsZVJpZ2h0VGVlO1wiOlwi4oqoXCIsXCJEb3VibGVVcEFycm93O1wiOlwi4oeRXCIsXCJEb3VibGVVcERvd25BcnJvdztcIjpcIuKHlVwiLFwiRG91YmxlVmVydGljYWxCYXI7XCI6XCLiiKVcIixcIkRvd25BcnJvdztcIjpcIuKGk1wiLFwiRG93bmFycm93O1wiOlwi4oeTXCIsXCJkb3duYXJyb3c7XCI6XCLihpNcIixcIkRvd25BcnJvd0JhcjtcIjpcIuKkk1wiLFwiRG93bkFycm93VXBBcnJvdztcIjpcIuKHtVwiLFwiRG93bkJyZXZlO1wiOlwizJFcIixcImRvd25kb3duYXJyb3dzO1wiOlwi4oeKXCIsXCJkb3duaGFycG9vbmxlZnQ7XCI6XCLih4NcIixcImRvd25oYXJwb29ucmlnaHQ7XCI6XCLih4JcIixcIkRvd25MZWZ0UmlnaHRWZWN0b3I7XCI6XCLipZBcIixcIkRvd25MZWZ0VGVlVmVjdG9yO1wiOlwi4qWeXCIsXCJEb3duTGVmdFZlY3RvcjtcIjpcIuKGvVwiLFwiRG93bkxlZnRWZWN0b3JCYXI7XCI6XCLipZZcIixcIkRvd25SaWdodFRlZVZlY3RvcjtcIjpcIuKln1wiLFwiRG93blJpZ2h0VmVjdG9yO1wiOlwi4oeBXCIsXCJEb3duUmlnaHRWZWN0b3JCYXI7XCI6XCLipZdcIixcIkRvd25UZWU7XCI6XCLiiqRcIixcIkRvd25UZWVBcnJvdztcIjpcIuKGp1wiLFwiZHJia2Fyb3c7XCI6XCLipJBcIixcImRyY29ybjtcIjpcIuKMn1wiLFwiZHJjcm9wO1wiOlwi4oyMXCIsXCJEc2NyO1wiOlwi8J2Sn1wiLFwiZHNjcjtcIjpcIvCdkrlcIixcIkRTY3k7XCI6XCLQhVwiLFwiZHNjeTtcIjpcItGVXCIsXCJkc29sO1wiOlwi4qe2XCIsXCJEc3Ryb2s7XCI6XCLEkFwiLFwiZHN0cm9rO1wiOlwixJFcIixcImR0ZG90O1wiOlwi4ouxXCIsXCJkdHJpO1wiOlwi4pa/XCIsXCJkdHJpZjtcIjpcIuKWvlwiLFwiZHVhcnI7XCI6XCLih7VcIixcImR1aGFyO1wiOlwi4qWvXCIsXCJkd2FuZ2xlO1wiOlwi4qamXCIsXCJEWmN5O1wiOlwi0I9cIixcImR6Y3k7XCI6XCLRn1wiLFwiZHppZ3JhcnI7XCI6XCLin79cIixcIkVhY3V0ZTtcIjpcIsOJXCIsRWFjdXRlOlwiw4lcIixcImVhY3V0ZTtcIjpcIsOpXCIsZWFjdXRlOlwiw6lcIixcImVhc3RlcjtcIjpcIuKprlwiLFwiRWNhcm9uO1wiOlwixJpcIixcImVjYXJvbjtcIjpcIsSbXCIsXCJlY2lyO1wiOlwi4omWXCIsXCJFY2lyYztcIjpcIsOKXCIsRWNpcmM6XCLDilwiLFwiZWNpcmM7XCI6XCLDqlwiLGVjaXJjOlwiw6pcIixcImVjb2xvbjtcIjpcIuKJlVwiLFwiRWN5O1wiOlwi0K1cIixcImVjeTtcIjpcItGNXCIsXCJlRERvdDtcIjpcIuKpt1wiLFwiRWRvdDtcIjpcIsSWXCIsXCJlRG90O1wiOlwi4omRXCIsXCJlZG90O1wiOlwixJdcIixcImVlO1wiOlwi4oWHXCIsXCJlZkRvdDtcIjpcIuKJklwiLFwiRWZyO1wiOlwi8J2UiFwiLFwiZWZyO1wiOlwi8J2UolwiLFwiZWc7XCI6XCLiqppcIixcIkVncmF2ZTtcIjpcIsOIXCIsRWdyYXZlOlwiw4hcIixcImVncmF2ZTtcIjpcIsOoXCIsZWdyYXZlOlwiw6hcIixcImVncztcIjpcIuKqllwiLFwiZWdzZG90O1wiOlwi4qqYXCIsXCJlbDtcIjpcIuKqmVwiLFwiRWxlbWVudDtcIjpcIuKIiFwiLFwiZWxpbnRlcnM7XCI6XCLij6dcIixcImVsbDtcIjpcIuKEk1wiLFwiZWxzO1wiOlwi4qqVXCIsXCJlbHNkb3Q7XCI6XCLiqpdcIixcIkVtYWNyO1wiOlwixJJcIixcImVtYWNyO1wiOlwixJNcIixcImVtcHR5O1wiOlwi4oiFXCIsXCJlbXB0eXNldDtcIjpcIuKIhVwiLFwiRW1wdHlTbWFsbFNxdWFyZTtcIjpcIuKXu1wiLFwiZW1wdHl2O1wiOlwi4oiFXCIsXCJFbXB0eVZlcnlTbWFsbFNxdWFyZTtcIjpcIuKWq1wiLFwiZW1zcDtcIjpcIuKAg1wiLFwiZW1zcDEzO1wiOlwi4oCEXCIsXCJlbXNwMTQ7XCI6XCLigIVcIixcIkVORztcIjpcIsWKXCIsXCJlbmc7XCI6XCLFi1wiLFwiZW5zcDtcIjpcIuKAglwiLFwiRW9nb247XCI6XCLEmFwiLFwiZW9nb247XCI6XCLEmVwiLFwiRW9wZjtcIjpcIvCdlLxcIixcImVvcGY7XCI6XCLwnZWWXCIsXCJlcGFyO1wiOlwi4ouVXCIsXCJlcGFyc2w7XCI6XCLip6NcIixcImVwbHVzO1wiOlwi4qmxXCIsXCJlcHNpO1wiOlwizrVcIixcIkVwc2lsb247XCI6XCLOlVwiLFwiZXBzaWxvbjtcIjpcIs61XCIsXCJlcHNpdjtcIjpcIs+1XCIsXCJlcWNpcmM7XCI6XCLiiZZcIixcImVxY29sb247XCI6XCLiiZVcIixcImVxc2ltO1wiOlwi4omCXCIsXCJlcXNsYW50Z3RyO1wiOlwi4qqWXCIsXCJlcXNsYW50bGVzcztcIjpcIuKqlVwiLFwiRXF1YWw7XCI6XCLiqbVcIixcImVxdWFscztcIjpcIj1cIixcIkVxdWFsVGlsZGU7XCI6XCLiiYJcIixcImVxdWVzdDtcIjpcIuKJn1wiLFwiRXF1aWxpYnJpdW07XCI6XCLih4xcIixcImVxdWl2O1wiOlwi4omhXCIsXCJlcXVpdkREO1wiOlwi4qm4XCIsXCJlcXZwYXJzbDtcIjpcIuKnpVwiLFwiZXJhcnI7XCI6XCLipbFcIixcImVyRG90O1wiOlwi4omTXCIsXCJFc2NyO1wiOlwi4oSwXCIsXCJlc2NyO1wiOlwi4oSvXCIsXCJlc2RvdDtcIjpcIuKJkFwiLFwiRXNpbTtcIjpcIuKps1wiLFwiZXNpbTtcIjpcIuKJglwiLFwiRXRhO1wiOlwizpdcIixcImV0YTtcIjpcIs63XCIsXCJFVEg7XCI6XCLDkFwiLEVUSDpcIsOQXCIsXCJldGg7XCI6XCLDsFwiLGV0aDpcIsOwXCIsXCJFdW1sO1wiOlwiw4tcIixFdW1sOlwiw4tcIixcImV1bWw7XCI6XCLDq1wiLGV1bWw6XCLDq1wiLFwiZXVybztcIjpcIuKCrFwiLFwiZXhjbDtcIjpcIiFcIixcImV4aXN0O1wiOlwi4oiDXCIsXCJFeGlzdHM7XCI6XCLiiINcIixcImV4cGVjdGF0aW9uO1wiOlwi4oSwXCIsXCJFeHBvbmVudGlhbEU7XCI6XCLihYdcIixcImV4cG9uZW50aWFsZTtcIjpcIuKFh1wiLFwiZmFsbGluZ2RvdHNlcTtcIjpcIuKJklwiLFwiRmN5O1wiOlwi0KRcIixcImZjeTtcIjpcItGEXCIsXCJmZW1hbGU7XCI6XCLimYBcIixcImZmaWxpZztcIjpcIu+sg1wiLFwiZmZsaWc7XCI6XCLvrIBcIixcImZmbGxpZztcIjpcIu+shFwiLFwiRmZyO1wiOlwi8J2UiVwiLFwiZmZyO1wiOlwi8J2Uo1wiLFwiZmlsaWc7XCI6XCLvrIFcIixcIkZpbGxlZFNtYWxsU3F1YXJlO1wiOlwi4pe8XCIsXCJGaWxsZWRWZXJ5U21hbGxTcXVhcmU7XCI6XCLilqpcIixcImZqbGlnO1wiOlwiZmpcIixcImZsYXQ7XCI6XCLima1cIixcImZsbGlnO1wiOlwi76yCXCIsXCJmbHRucztcIjpcIuKWsVwiLFwiZm5vZjtcIjpcIsaSXCIsXCJGb3BmO1wiOlwi8J2UvVwiLFwiZm9wZjtcIjpcIvCdlZdcIixcIkZvckFsbDtcIjpcIuKIgFwiLFwiZm9yYWxsO1wiOlwi4oiAXCIsXCJmb3JrO1wiOlwi4ouUXCIsXCJmb3JrdjtcIjpcIuKrmVwiLFwiRm91cmllcnRyZjtcIjpcIuKEsVwiLFwiZnBhcnRpbnQ7XCI6XCLiqI1cIixcImZyYWMxMjtcIjpcIsK9XCIsZnJhYzEyOlwiwr1cIixcImZyYWMxMztcIjpcIuKFk1wiLFwiZnJhYzE0O1wiOlwiwrxcIixmcmFjMTQ6XCLCvFwiLFwiZnJhYzE1O1wiOlwi4oWVXCIsXCJmcmFjMTY7XCI6XCLihZlcIixcImZyYWMxODtcIjpcIuKFm1wiLFwiZnJhYzIzO1wiOlwi4oWUXCIsXCJmcmFjMjU7XCI6XCLihZZcIixcImZyYWMzNDtcIjpcIsK+XCIsZnJhYzM0Olwiwr5cIixcImZyYWMzNTtcIjpcIuKFl1wiLFwiZnJhYzM4O1wiOlwi4oWcXCIsXCJmcmFjNDU7XCI6XCLihZhcIixcImZyYWM1NjtcIjpcIuKFmlwiLFwiZnJhYzU4O1wiOlwi4oWdXCIsXCJmcmFjNzg7XCI6XCLihZ5cIixcImZyYXNsO1wiOlwi4oGEXCIsXCJmcm93bjtcIjpcIuKMolwiLFwiRnNjcjtcIjpcIuKEsVwiLFwiZnNjcjtcIjpcIvCdkrtcIixcImdhY3V0ZTtcIjpcIse1XCIsXCJHYW1tYTtcIjpcIs6TXCIsXCJnYW1tYTtcIjpcIs6zXCIsXCJHYW1tYWQ7XCI6XCLPnFwiLFwiZ2FtbWFkO1wiOlwiz51cIixcImdhcDtcIjpcIuKqhlwiLFwiR2JyZXZlO1wiOlwixJ5cIixcImdicmV2ZTtcIjpcIsSfXCIsXCJHY2VkaWw7XCI6XCLEolwiLFwiR2NpcmM7XCI6XCLEnFwiLFwiZ2NpcmM7XCI6XCLEnVwiLFwiR2N5O1wiOlwi0JNcIixcImdjeTtcIjpcItCzXCIsXCJHZG90O1wiOlwixKBcIixcImdkb3Q7XCI6XCLEoVwiLFwiZ0U7XCI6XCLiiadcIixcImdlO1wiOlwi4omlXCIsXCJnRWw7XCI6XCLiqoxcIixcImdlbDtcIjpcIuKLm1wiLFwiZ2VxO1wiOlwi4omlXCIsXCJnZXFxO1wiOlwi4omnXCIsXCJnZXFzbGFudDtcIjpcIuKpvlwiLFwiZ2VzO1wiOlwi4qm+XCIsXCJnZXNjYztcIjpcIuKqqVwiLFwiZ2VzZG90O1wiOlwi4qqAXCIsXCJnZXNkb3RvO1wiOlwi4qqCXCIsXCJnZXNkb3RvbDtcIjpcIuKqhFwiLFwiZ2VzbDtcIjpcIuKLm++4gFwiLFwiZ2VzbGVzO1wiOlwi4qqUXCIsXCJHZnI7XCI6XCLwnZSKXCIsXCJnZnI7XCI6XCLwnZSkXCIsXCJHZztcIjpcIuKLmVwiLFwiZ2c7XCI6XCLiiatcIixcImdnZztcIjpcIuKLmVwiLFwiZ2ltZWw7XCI6XCLihLdcIixcIkdKY3k7XCI6XCLQg1wiLFwiZ2pjeTtcIjpcItGTXCIsXCJnbDtcIjpcIuKJt1wiLFwiZ2xhO1wiOlwi4qqlXCIsXCJnbEU7XCI6XCLiqpJcIixcImdsajtcIjpcIuKqpFwiLFwiZ25hcDtcIjpcIuKqilwiLFwiZ25hcHByb3g7XCI6XCLiqopcIixcImduRTtcIjpcIuKJqVwiLFwiZ25lO1wiOlwi4qqIXCIsXCJnbmVxO1wiOlwi4qqIXCIsXCJnbmVxcTtcIjpcIuKJqVwiLFwiZ25zaW07XCI6XCLii6dcIixcIkdvcGY7XCI6XCLwnZS+XCIsXCJnb3BmO1wiOlwi8J2VmFwiLFwiZ3JhdmU7XCI6XCJgXCIsXCJHcmVhdGVyRXF1YWw7XCI6XCLiiaVcIixcIkdyZWF0ZXJFcXVhbExlc3M7XCI6XCLii5tcIixcIkdyZWF0ZXJGdWxsRXF1YWw7XCI6XCLiiadcIixcIkdyZWF0ZXJHcmVhdGVyO1wiOlwi4qqiXCIsXCJHcmVhdGVyTGVzcztcIjpcIuKJt1wiLFwiR3JlYXRlclNsYW50RXF1YWw7XCI6XCLiqb5cIixcIkdyZWF0ZXJUaWxkZTtcIjpcIuKJs1wiLFwiR3NjcjtcIjpcIvCdkqJcIixcImdzY3I7XCI6XCLihIpcIixcImdzaW07XCI6XCLiibNcIixcImdzaW1lO1wiOlwi4qqOXCIsXCJnc2ltbDtcIjpcIuKqkFwiLFwiR1Q7XCI6XCI+XCIsR1Q6XCI+XCIsXCJHdDtcIjpcIuKJq1wiLFwiZ3Q7XCI6XCI+XCIsZ3Q6XCI+XCIsXCJndGNjO1wiOlwi4qqnXCIsXCJndGNpcjtcIjpcIuKpulwiLFwiZ3Rkb3Q7XCI6XCLii5dcIixcImd0bFBhcjtcIjpcIuKmlVwiLFwiZ3RxdWVzdDtcIjpcIuKpvFwiLFwiZ3RyYXBwcm94O1wiOlwi4qqGXCIsXCJndHJhcnI7XCI6XCLipbhcIixcImd0cmRvdDtcIjpcIuKLl1wiLFwiZ3RyZXFsZXNzO1wiOlwi4oubXCIsXCJndHJlcXFsZXNzO1wiOlwi4qqMXCIsXCJndHJsZXNzO1wiOlwi4om3XCIsXCJndHJzaW07XCI6XCLiibNcIixcImd2ZXJ0bmVxcTtcIjpcIuKJqe+4gFwiLFwiZ3ZuRTtcIjpcIuKJqe+4gFwiLFwiSGFjZWs7XCI6XCLLh1wiLFwiaGFpcnNwO1wiOlwi4oCKXCIsXCJoYWxmO1wiOlwiwr1cIixcImhhbWlsdDtcIjpcIuKEi1wiLFwiSEFSRGN5O1wiOlwi0KpcIixcImhhcmRjeTtcIjpcItGKXCIsXCJoQXJyO1wiOlwi4oeUXCIsXCJoYXJyO1wiOlwi4oaUXCIsXCJoYXJyY2lyO1wiOlwi4qWIXCIsXCJoYXJydztcIjpcIuKGrVwiLFwiSGF0O1wiOlwiXlwiLFwiaGJhcjtcIjpcIuKEj1wiLFwiSGNpcmM7XCI6XCLEpFwiLFwiaGNpcmM7XCI6XCLEpVwiLFwiaGVhcnRzO1wiOlwi4pmlXCIsXCJoZWFydHN1aXQ7XCI6XCLimaVcIixcImhlbGxpcDtcIjpcIuKAplwiLFwiaGVyY29uO1wiOlwi4oq5XCIsXCJIZnI7XCI6XCLihIxcIixcImhmcjtcIjpcIvCdlKVcIixcIkhpbGJlcnRTcGFjZTtcIjpcIuKEi1wiLFwiaGtzZWFyb3c7XCI6XCLipKVcIixcImhrc3dhcm93O1wiOlwi4qSmXCIsXCJob2FycjtcIjpcIuKHv1wiLFwiaG9tdGh0O1wiOlwi4oi7XCIsXCJob29rbGVmdGFycm93O1wiOlwi4oapXCIsXCJob29rcmlnaHRhcnJvdztcIjpcIuKGqlwiLFwiSG9wZjtcIjpcIuKEjVwiLFwiaG9wZjtcIjpcIvCdlZlcIixcImhvcmJhcjtcIjpcIuKAlVwiLFwiSG9yaXpvbnRhbExpbmU7XCI6XCLilIBcIixcIkhzY3I7XCI6XCLihItcIixcImhzY3I7XCI6XCLwnZK9XCIsXCJoc2xhc2g7XCI6XCLihI9cIixcIkhzdHJvaztcIjpcIsSmXCIsXCJoc3Ryb2s7XCI6XCLEp1wiLFwiSHVtcERvd25IdW1wO1wiOlwi4omOXCIsXCJIdW1wRXF1YWw7XCI6XCLiiY9cIixcImh5YnVsbDtcIjpcIuKBg1wiLFwiaHlwaGVuO1wiOlwi4oCQXCIsXCJJYWN1dGU7XCI6XCLDjVwiLElhY3V0ZTpcIsONXCIsXCJpYWN1dGU7XCI6XCLDrVwiLGlhY3V0ZTpcIsOtXCIsXCJpYztcIjpcIuKBo1wiLFwiSWNpcmM7XCI6XCLDjlwiLEljaXJjOlwiw45cIixcImljaXJjO1wiOlwiw65cIixpY2lyYzpcIsOuXCIsXCJJY3k7XCI6XCLQmFwiLFwiaWN5O1wiOlwi0LhcIixcIklkb3Q7XCI6XCLEsFwiLFwiSUVjeTtcIjpcItCVXCIsXCJpZWN5O1wiOlwi0LVcIixcImlleGNsO1wiOlwiwqFcIixpZXhjbDpcIsKhXCIsXCJpZmY7XCI6XCLih5RcIixcIklmcjtcIjpcIuKEkVwiLFwiaWZyO1wiOlwi8J2UplwiLFwiSWdyYXZlO1wiOlwiw4xcIixJZ3JhdmU6XCLDjFwiLFwiaWdyYXZlO1wiOlwiw6xcIixpZ3JhdmU6XCLDrFwiLFwiaWk7XCI6XCLihYhcIixcImlpaWludDtcIjpcIuKojFwiLFwiaWlpbnQ7XCI6XCLiiK1cIixcImlpbmZpbjtcIjpcIuKnnFwiLFwiaWlvdGE7XCI6XCLihKlcIixcIklKbGlnO1wiOlwixLJcIixcImlqbGlnO1wiOlwixLNcIixcIkltO1wiOlwi4oSRXCIsXCJJbWFjcjtcIjpcIsSqXCIsXCJpbWFjcjtcIjpcIsSrXCIsXCJpbWFnZTtcIjpcIuKEkVwiLFwiSW1hZ2luYXJ5STtcIjpcIuKFiFwiLFwiaW1hZ2xpbmU7XCI6XCLihJBcIixcImltYWdwYXJ0O1wiOlwi4oSRXCIsXCJpbWF0aDtcIjpcIsSxXCIsXCJpbW9mO1wiOlwi4oq3XCIsXCJpbXBlZDtcIjpcIsa1XCIsXCJJbXBsaWVzO1wiOlwi4oeSXCIsXCJpbjtcIjpcIuKIiFwiLFwiaW5jYXJlO1wiOlwi4oSFXCIsXCJpbmZpbjtcIjpcIuKInlwiLFwiaW5maW50aWU7XCI6XCLip51cIixcImlub2RvdDtcIjpcIsSxXCIsXCJJbnQ7XCI6XCLiiKxcIixcImludDtcIjpcIuKIq1wiLFwiaW50Y2FsO1wiOlwi4oq6XCIsXCJpbnRlZ2VycztcIjpcIuKEpFwiLFwiSW50ZWdyYWw7XCI6XCLiiKtcIixcImludGVyY2FsO1wiOlwi4oq6XCIsXCJJbnRlcnNlY3Rpb247XCI6XCLii4JcIixcImludGxhcmhrO1wiOlwi4qiXXCIsXCJpbnRwcm9kO1wiOlwi4qi8XCIsXCJJbnZpc2libGVDb21tYTtcIjpcIuKBo1wiLFwiSW52aXNpYmxlVGltZXM7XCI6XCLigaJcIixcIklPY3k7XCI6XCLQgVwiLFwiaW9jeTtcIjpcItGRXCIsXCJJb2dvbjtcIjpcIsSuXCIsXCJpb2dvbjtcIjpcIsSvXCIsXCJJb3BmO1wiOlwi8J2VgFwiLFwiaW9wZjtcIjpcIvCdlZpcIixcIklvdGE7XCI6XCLOmVwiLFwiaW90YTtcIjpcIs65XCIsXCJpcHJvZDtcIjpcIuKovFwiLFwiaXF1ZXN0O1wiOlwiwr9cIixpcXVlc3Q6XCLCv1wiLFwiSXNjcjtcIjpcIuKEkFwiLFwiaXNjcjtcIjpcIvCdkr5cIixcImlzaW47XCI6XCLiiIhcIixcImlzaW5kb3Q7XCI6XCLii7VcIixcImlzaW5FO1wiOlwi4ou5XCIsXCJpc2lucztcIjpcIuKLtFwiLFwiaXNpbnN2O1wiOlwi4ouzXCIsXCJpc2ludjtcIjpcIuKIiFwiLFwiaXQ7XCI6XCLigaJcIixcIkl0aWxkZTtcIjpcIsSoXCIsXCJpdGlsZGU7XCI6XCLEqVwiLFwiSXVrY3k7XCI6XCLQhlwiLFwiaXVrY3k7XCI6XCLRllwiLFwiSXVtbDtcIjpcIsOPXCIsSXVtbDpcIsOPXCIsXCJpdW1sO1wiOlwiw69cIixpdW1sOlwiw69cIixcIkpjaXJjO1wiOlwixLRcIixcImpjaXJjO1wiOlwixLVcIixcIkpjeTtcIjpcItCZXCIsXCJqY3k7XCI6XCLQuVwiLFwiSmZyO1wiOlwi8J2UjVwiLFwiamZyO1wiOlwi8J2Up1wiLFwiam1hdGg7XCI6XCLIt1wiLFwiSm9wZjtcIjpcIvCdlYFcIixcImpvcGY7XCI6XCLwnZWbXCIsXCJKc2NyO1wiOlwi8J2SpVwiLFwianNjcjtcIjpcIvCdkr9cIixcIkpzZXJjeTtcIjpcItCIXCIsXCJqc2VyY3k7XCI6XCLRmFwiLFwiSnVrY3k7XCI6XCLQhFwiLFwianVrY3k7XCI6XCLRlFwiLFwiS2FwcGE7XCI6XCLOmlwiLFwia2FwcGE7XCI6XCLOulwiLFwia2FwcGF2O1wiOlwiz7BcIixcIktjZWRpbDtcIjpcIsS2XCIsXCJrY2VkaWw7XCI6XCLEt1wiLFwiS2N5O1wiOlwi0JpcIixcImtjeTtcIjpcItC6XCIsXCJLZnI7XCI6XCLwnZSOXCIsXCJrZnI7XCI6XCLwnZSoXCIsXCJrZ3JlZW47XCI6XCLEuFwiLFwiS0hjeTtcIjpcItClXCIsXCJraGN5O1wiOlwi0YVcIixcIktKY3k7XCI6XCLQjFwiLFwia2pjeTtcIjpcItGcXCIsXCJLb3BmO1wiOlwi8J2VglwiLFwia29wZjtcIjpcIvCdlZxcIixcIktzY3I7XCI6XCLwnZKmXCIsXCJrc2NyO1wiOlwi8J2TgFwiLFwibEFhcnI7XCI6XCLih5pcIixcIkxhY3V0ZTtcIjpcIsS5XCIsXCJsYWN1dGU7XCI6XCLEulwiLFwibGFlbXB0eXY7XCI6XCLiprRcIixcImxhZ3JhbjtcIjpcIuKEklwiLFwiTGFtYmRhO1wiOlwizptcIixcImxhbWJkYTtcIjpcIs67XCIsXCJMYW5nO1wiOlwi4p+qXCIsXCJsYW5nO1wiOlwi4p+oXCIsXCJsYW5nZDtcIjpcIuKmkVwiLFwibGFuZ2xlO1wiOlwi4p+oXCIsXCJsYXA7XCI6XCLiqoVcIixcIkxhcGxhY2V0cmY7XCI6XCLihJJcIixcImxhcXVvO1wiOlwiwqtcIixsYXF1bzpcIsKrXCIsXCJMYXJyO1wiOlwi4oaeXCIsXCJsQXJyO1wiOlwi4oeQXCIsXCJsYXJyO1wiOlwi4oaQXCIsXCJsYXJyYjtcIjpcIuKHpFwiLFwibGFycmJmcztcIjpcIuKkn1wiLFwibGFycmZzO1wiOlwi4qSdXCIsXCJsYXJyaGs7XCI6XCLihqlcIixcImxhcnJscDtcIjpcIuKGq1wiLFwibGFycnBsO1wiOlwi4qS5XCIsXCJsYXJyc2ltO1wiOlwi4qWzXCIsXCJsYXJydGw7XCI6XCLihqJcIixcImxhdDtcIjpcIuKqq1wiLFwibEF0YWlsO1wiOlwi4qSbXCIsXCJsYXRhaWw7XCI6XCLipJlcIixcImxhdGU7XCI6XCLiqq1cIixcImxhdGVzO1wiOlwi4qqt77iAXCIsXCJsQmFycjtcIjpcIuKkjlwiLFwibGJhcnI7XCI6XCLipIxcIixcImxiYnJrO1wiOlwi4p2yXCIsXCJsYnJhY2U7XCI6XCJ7XCIsXCJsYnJhY2s7XCI6XCJbXCIsXCJsYnJrZTtcIjpcIuKmi1wiLFwibGJya3NsZDtcIjpcIuKmj1wiLFwibGJya3NsdTtcIjpcIuKmjVwiLFwiTGNhcm9uO1wiOlwixL1cIixcImxjYXJvbjtcIjpcIsS+XCIsXCJMY2VkaWw7XCI6XCLEu1wiLFwibGNlZGlsO1wiOlwixLxcIixcImxjZWlsO1wiOlwi4oyIXCIsXCJsY3ViO1wiOlwie1wiLFwiTGN5O1wiOlwi0JtcIixcImxjeTtcIjpcItC7XCIsXCJsZGNhO1wiOlwi4qS2XCIsXCJsZHF1bztcIjpcIuKAnFwiLFwibGRxdW9yO1wiOlwi4oCeXCIsXCJsZHJkaGFyO1wiOlwi4qWnXCIsXCJsZHJ1c2hhcjtcIjpcIuKli1wiLFwibGRzaDtcIjpcIuKGslwiLFwibEU7XCI6XCLiiaZcIixcImxlO1wiOlwi4omkXCIsXCJMZWZ0QW5nbGVCcmFja2V0O1wiOlwi4p+oXCIsXCJMZWZ0QXJyb3c7XCI6XCLihpBcIixcIkxlZnRhcnJvdztcIjpcIuKHkFwiLFwibGVmdGFycm93O1wiOlwi4oaQXCIsXCJMZWZ0QXJyb3dCYXI7XCI6XCLih6RcIixcIkxlZnRBcnJvd1JpZ2h0QXJyb3c7XCI6XCLih4ZcIixcImxlZnRhcnJvd3RhaWw7XCI6XCLihqJcIixcIkxlZnRDZWlsaW5nO1wiOlwi4oyIXCIsXCJMZWZ0RG91YmxlQnJhY2tldDtcIjpcIuKfplwiLFwiTGVmdERvd25UZWVWZWN0b3I7XCI6XCLipaFcIixcIkxlZnREb3duVmVjdG9yO1wiOlwi4oeDXCIsXCJMZWZ0RG93blZlY3RvckJhcjtcIjpcIuKlmVwiLFwiTGVmdEZsb29yO1wiOlwi4oyKXCIsXCJsZWZ0aGFycG9vbmRvd247XCI6XCLihr1cIixcImxlZnRoYXJwb29udXA7XCI6XCLihrxcIixcImxlZnRsZWZ0YXJyb3dzO1wiOlwi4oeHXCIsXCJMZWZ0UmlnaHRBcnJvdztcIjpcIuKGlFwiLFwiTGVmdHJpZ2h0YXJyb3c7XCI6XCLih5RcIixcImxlZnRyaWdodGFycm93O1wiOlwi4oaUXCIsXCJsZWZ0cmlnaHRhcnJvd3M7XCI6XCLih4ZcIixcImxlZnRyaWdodGhhcnBvb25zO1wiOlwi4oeLXCIsXCJsZWZ0cmlnaHRzcXVpZ2Fycm93O1wiOlwi4oatXCIsXCJMZWZ0UmlnaHRWZWN0b3I7XCI6XCLipY5cIixcIkxlZnRUZWU7XCI6XCLiiqNcIixcIkxlZnRUZWVBcnJvdztcIjpcIuKGpFwiLFwiTGVmdFRlZVZlY3RvcjtcIjpcIuKlmlwiLFwibGVmdHRocmVldGltZXM7XCI6XCLii4tcIixcIkxlZnRUcmlhbmdsZTtcIjpcIuKKslwiLFwiTGVmdFRyaWFuZ2xlQmFyO1wiOlwi4qePXCIsXCJMZWZ0VHJpYW5nbGVFcXVhbDtcIjpcIuKKtFwiLFwiTGVmdFVwRG93blZlY3RvcjtcIjpcIuKlkVwiLFwiTGVmdFVwVGVlVmVjdG9yO1wiOlwi4qWgXCIsXCJMZWZ0VXBWZWN0b3I7XCI6XCLihr9cIixcIkxlZnRVcFZlY3RvckJhcjtcIjpcIuKlmFwiLFwiTGVmdFZlY3RvcjtcIjpcIuKGvFwiLFwiTGVmdFZlY3RvckJhcjtcIjpcIuKlklwiLFwibEVnO1wiOlwi4qqLXCIsXCJsZWc7XCI6XCLii5pcIixcImxlcTtcIjpcIuKJpFwiLFwibGVxcTtcIjpcIuKJplwiLFwibGVxc2xhbnQ7XCI6XCLiqb1cIixcImxlcztcIjpcIuKpvVwiLFwibGVzY2M7XCI6XCLiqqhcIixcImxlc2RvdDtcIjpcIuKpv1wiLFwibGVzZG90bztcIjpcIuKqgVwiLFwibGVzZG90b3I7XCI6XCLiqoNcIixcImxlc2c7XCI6XCLii5rvuIBcIixcImxlc2dlcztcIjpcIuKqk1wiLFwibGVzc2FwcHJveDtcIjpcIuKqhVwiLFwibGVzc2RvdDtcIjpcIuKLllwiLFwibGVzc2VxZ3RyO1wiOlwi4ouaXCIsXCJsZXNzZXFxZ3RyO1wiOlwi4qqLXCIsXCJMZXNzRXF1YWxHcmVhdGVyO1wiOlwi4ouaXCIsXCJMZXNzRnVsbEVxdWFsO1wiOlwi4ommXCIsXCJMZXNzR3JlYXRlcjtcIjpcIuKJtlwiLFwibGVzc2d0cjtcIjpcIuKJtlwiLFwiTGVzc0xlc3M7XCI6XCLiqqFcIixcImxlc3NzaW07XCI6XCLiibJcIixcIkxlc3NTbGFudEVxdWFsO1wiOlwi4qm9XCIsXCJMZXNzVGlsZGU7XCI6XCLiibJcIixcImxmaXNodDtcIjpcIuKlvFwiLFwibGZsb29yO1wiOlwi4oyKXCIsXCJMZnI7XCI6XCLwnZSPXCIsXCJsZnI7XCI6XCLwnZSpXCIsXCJsZztcIjpcIuKJtlwiLFwibGdFO1wiOlwi4qqRXCIsXCJsSGFyO1wiOlwi4qWiXCIsXCJsaGFyZDtcIjpcIuKGvVwiLFwibGhhcnU7XCI6XCLihrxcIixcImxoYXJ1bDtcIjpcIuKlqlwiLFwibGhibGs7XCI6XCLiloRcIixcIkxKY3k7XCI6XCLQiVwiLFwibGpjeTtcIjpcItGZXCIsXCJMbDtcIjpcIuKLmFwiLFwibGw7XCI6XCLiiapcIixcImxsYXJyO1wiOlwi4oeHXCIsXCJsbGNvcm5lcjtcIjpcIuKMnlwiLFwiTGxlZnRhcnJvdztcIjpcIuKHmlwiLFwibGxoYXJkO1wiOlwi4qWrXCIsXCJsbHRyaTtcIjpcIuKXulwiLFwiTG1pZG90O1wiOlwixL9cIixcImxtaWRvdDtcIjpcIsWAXCIsXCJsbW91c3Q7XCI6XCLijrBcIixcImxtb3VzdGFjaGU7XCI6XCLijrBcIixcImxuYXA7XCI6XCLiqolcIixcImxuYXBwcm94O1wiOlwi4qqJXCIsXCJsbkU7XCI6XCLiiahcIixcImxuZTtcIjpcIuKqh1wiLFwibG5lcTtcIjpcIuKqh1wiLFwibG5lcXE7XCI6XCLiiahcIixcImxuc2ltO1wiOlwi4oumXCIsXCJsb2FuZztcIjpcIuKfrFwiLFwibG9hcnI7XCI6XCLih71cIixcImxvYnJrO1wiOlwi4p+mXCIsXCJMb25nTGVmdEFycm93O1wiOlwi4p+1XCIsXCJMb25nbGVmdGFycm93O1wiOlwi4p+4XCIsXCJsb25nbGVmdGFycm93O1wiOlwi4p+1XCIsXCJMb25nTGVmdFJpZ2h0QXJyb3c7XCI6XCLin7dcIixcIkxvbmdsZWZ0cmlnaHRhcnJvdztcIjpcIuKfulwiLFwibG9uZ2xlZnRyaWdodGFycm93O1wiOlwi4p+3XCIsXCJsb25nbWFwc3RvO1wiOlwi4p+8XCIsXCJMb25nUmlnaHRBcnJvdztcIjpcIuKftlwiLFwiTG9uZ3JpZ2h0YXJyb3c7XCI6XCLin7lcIixcImxvbmdyaWdodGFycm93O1wiOlwi4p+2XCIsXCJsb29wYXJyb3dsZWZ0O1wiOlwi4oarXCIsXCJsb29wYXJyb3dyaWdodDtcIjpcIuKGrFwiLFwibG9wYXI7XCI6XCLipoVcIixcIkxvcGY7XCI6XCLwnZWDXCIsXCJsb3BmO1wiOlwi8J2VnVwiLFwibG9wbHVzO1wiOlwi4qitXCIsXCJsb3RpbWVzO1wiOlwi4qi0XCIsXCJsb3dhc3Q7XCI6XCLiiJdcIixcImxvd2JhcjtcIjpcIl9cIixcIkxvd2VyTGVmdEFycm93O1wiOlwi4oaZXCIsXCJMb3dlclJpZ2h0QXJyb3c7XCI6XCLihphcIixcImxvejtcIjpcIuKXilwiLFwibG96ZW5nZTtcIjpcIuKXilwiLFwibG96ZjtcIjpcIuKnq1wiLFwibHBhcjtcIjpcIihcIixcImxwYXJsdDtcIjpcIuKmk1wiLFwibHJhcnI7XCI6XCLih4ZcIixcImxyY29ybmVyO1wiOlwi4oyfXCIsXCJscmhhcjtcIjpcIuKHi1wiLFwibHJoYXJkO1wiOlwi4qWtXCIsXCJscm07XCI6XCLigI5cIixcImxydHJpO1wiOlwi4oq/XCIsXCJsc2FxdW87XCI6XCLigLlcIixcIkxzY3I7XCI6XCLihJJcIixcImxzY3I7XCI6XCLwnZOBXCIsXCJMc2g7XCI6XCLihrBcIixcImxzaDtcIjpcIuKGsFwiLFwibHNpbTtcIjpcIuKJslwiLFwibHNpbWU7XCI6XCLiqo1cIixcImxzaW1nO1wiOlwi4qqPXCIsXCJsc3FiO1wiOlwiW1wiLFwibHNxdW87XCI6XCLigJhcIixcImxzcXVvcjtcIjpcIuKAmlwiLFwiTHN0cm9rO1wiOlwixYFcIixcImxzdHJvaztcIjpcIsWCXCIsXCJMVDtcIjpcIjxcIixMVDpcIjxcIixcIkx0O1wiOlwi4omqXCIsXCJsdDtcIjpcIjxcIixsdDpcIjxcIixcImx0Y2M7XCI6XCLiqqZcIixcImx0Y2lyO1wiOlwi4qm5XCIsXCJsdGRvdDtcIjpcIuKLllwiLFwibHRocmVlO1wiOlwi4ouLXCIsXCJsdGltZXM7XCI6XCLii4lcIixcImx0bGFycjtcIjpcIuKltlwiLFwibHRxdWVzdDtcIjpcIuKpu1wiLFwibHRyaTtcIjpcIuKXg1wiLFwibHRyaWU7XCI6XCLiirRcIixcImx0cmlmO1wiOlwi4peCXCIsXCJsdHJQYXI7XCI6XCLippZcIixcImx1cmRzaGFyO1wiOlwi4qWKXCIsXCJsdXJ1aGFyO1wiOlwi4qWmXCIsXCJsdmVydG5lcXE7XCI6XCLiiajvuIBcIixcImx2bkU7XCI6XCLiiajvuIBcIixcIm1hY3I7XCI6XCLCr1wiLG1hY3I6XCLCr1wiLFwibWFsZTtcIjpcIuKZglwiLFwibWFsdDtcIjpcIuKcoFwiLFwibWFsdGVzZTtcIjpcIuKcoFwiLFwiTWFwO1wiOlwi4qSFXCIsXCJtYXA7XCI6XCLihqZcIixcIm1hcHN0bztcIjpcIuKGplwiLFwibWFwc3RvZG93bjtcIjpcIuKGp1wiLFwibWFwc3RvbGVmdDtcIjpcIuKGpFwiLFwibWFwc3RvdXA7XCI6XCLihqVcIixcIm1hcmtlcjtcIjpcIuKWrlwiLFwibWNvbW1hO1wiOlwi4qipXCIsXCJNY3k7XCI6XCLQnFwiLFwibWN5O1wiOlwi0LxcIixcIm1kYXNoO1wiOlwi4oCUXCIsXCJtRERvdDtcIjpcIuKIulwiLFwibWVhc3VyZWRhbmdsZTtcIjpcIuKIoVwiLFwiTWVkaXVtU3BhY2U7XCI6XCLigZ9cIixcIk1lbGxpbnRyZjtcIjpcIuKEs1wiLFwiTWZyO1wiOlwi8J2UkFwiLFwibWZyO1wiOlwi8J2UqlwiLFwibWhvO1wiOlwi4oSnXCIsXCJtaWNybztcIjpcIsK1XCIsbWljcm86XCLCtVwiLFwibWlkO1wiOlwi4oijXCIsXCJtaWRhc3Q7XCI6XCIqXCIsXCJtaWRjaXI7XCI6XCLiq7BcIixcIm1pZGRvdDtcIjpcIsK3XCIsbWlkZG90OlwiwrdcIixcIm1pbnVzO1wiOlwi4oiSXCIsXCJtaW51c2I7XCI6XCLiip9cIixcIm1pbnVzZDtcIjpcIuKIuFwiLFwibWludXNkdTtcIjpcIuKoqlwiLFwiTWludXNQbHVzO1wiOlwi4oiTXCIsXCJtbGNwO1wiOlwi4qubXCIsXCJtbGRyO1wiOlwi4oCmXCIsXCJtbnBsdXM7XCI6XCLiiJNcIixcIm1vZGVscztcIjpcIuKKp1wiLFwiTW9wZjtcIjpcIvCdlYRcIixcIm1vcGY7XCI6XCLwnZWeXCIsXCJtcDtcIjpcIuKIk1wiLFwiTXNjcjtcIjpcIuKEs1wiLFwibXNjcjtcIjpcIvCdk4JcIixcIm1zdHBvcztcIjpcIuKIvlwiLFwiTXU7XCI6XCLOnFwiLFwibXU7XCI6XCLOvFwiLFwibXVsdGltYXA7XCI6XCLiirhcIixcIm11bWFwO1wiOlwi4oq4XCIsXCJuYWJsYTtcIjpcIuKIh1wiLFwiTmFjdXRlO1wiOlwixYNcIixcIm5hY3V0ZTtcIjpcIsWEXCIsXCJuYW5nO1wiOlwi4oig4oOSXCIsXCJuYXA7XCI6XCLiiYlcIixcIm5hcEU7XCI6XCLiqbDMuFwiLFwibmFwaWQ7XCI6XCLiiYvMuFwiLFwibmFwb3M7XCI6XCLFiVwiLFwibmFwcHJveDtcIjpcIuKJiVwiLFwibmF0dXI7XCI6XCLima5cIixcIm5hdHVyYWw7XCI6XCLima5cIixcIm5hdHVyYWxzO1wiOlwi4oSVXCIsXCJuYnNwO1wiOlwiwqBcIixuYnNwOlwiwqBcIixcIm5idW1wO1wiOlwi4omOzLhcIixcIm5idW1wZTtcIjpcIuKJj8y4XCIsXCJuY2FwO1wiOlwi4qmDXCIsXCJOY2Fyb247XCI6XCLFh1wiLFwibmNhcm9uO1wiOlwixYhcIixcIk5jZWRpbDtcIjpcIsWFXCIsXCJuY2VkaWw7XCI6XCLFhlwiLFwibmNvbmc7XCI6XCLiiYdcIixcIm5jb25nZG90O1wiOlwi4qmtzLhcIixcIm5jdXA7XCI6XCLiqYJcIixcIk5jeTtcIjpcItCdXCIsXCJuY3k7XCI6XCLQvVwiLFwibmRhc2g7XCI6XCLigJNcIixcIm5lO1wiOlwi4omgXCIsXCJuZWFyaGs7XCI6XCLipKRcIixcIm5lQXJyO1wiOlwi4oeXXCIsXCJuZWFycjtcIjpcIuKGl1wiLFwibmVhcnJvdztcIjpcIuKGl1wiLFwibmVkb3Q7XCI6XCLiiZDMuFwiLFwiTmVnYXRpdmVNZWRpdW1TcGFjZTtcIjpcIuKAi1wiLFwiTmVnYXRpdmVUaGlja1NwYWNlO1wiOlwi4oCLXCIsXCJOZWdhdGl2ZVRoaW5TcGFjZTtcIjpcIuKAi1wiLFwiTmVnYXRpdmVWZXJ5VGhpblNwYWNlO1wiOlwi4oCLXCIsXCJuZXF1aXY7XCI6XCLiiaJcIixcIm5lc2VhcjtcIjpcIuKkqFwiLFwibmVzaW07XCI6XCLiiYLMuFwiLFwiTmVzdGVkR3JlYXRlckdyZWF0ZXI7XCI6XCLiiatcIixcIk5lc3RlZExlc3NMZXNzO1wiOlwi4omqXCIsXCJOZXdMaW5lO1wiOlwiXFxuXCIsXCJuZXhpc3Q7XCI6XCLiiIRcIixcIm5leGlzdHM7XCI6XCLiiIRcIixcIk5mcjtcIjpcIvCdlJFcIixcIm5mcjtcIjpcIvCdlKtcIixcIm5nRTtcIjpcIuKJp8y4XCIsXCJuZ2U7XCI6XCLiibFcIixcIm5nZXE7XCI6XCLiibFcIixcIm5nZXFxO1wiOlwi4omnzLhcIixcIm5nZXFzbGFudDtcIjpcIuKpvsy4XCIsXCJuZ2VzO1wiOlwi4qm+zLhcIixcIm5HZztcIjpcIuKLmcy4XCIsXCJuZ3NpbTtcIjpcIuKJtVwiLFwibkd0O1wiOlwi4omr4oOSXCIsXCJuZ3Q7XCI6XCLiia9cIixcIm5ndHI7XCI6XCLiia9cIixcIm5HdHY7XCI6XCLiiavMuFwiLFwibmhBcnI7XCI6XCLih45cIixcIm5oYXJyO1wiOlwi4oauXCIsXCJuaHBhcjtcIjpcIuKrslwiLFwibmk7XCI6XCLiiItcIixcIm5pcztcIjpcIuKLvFwiLFwibmlzZDtcIjpcIuKLulwiLFwibml2O1wiOlwi4oiLXCIsXCJOSmN5O1wiOlwi0IpcIixcIm5qY3k7XCI6XCLRmlwiLFwibmxBcnI7XCI6XCLih41cIixcIm5sYXJyO1wiOlwi4oaaXCIsXCJubGRyO1wiOlwi4oClXCIsXCJubEU7XCI6XCLiiabMuFwiLFwibmxlO1wiOlwi4omwXCIsXCJuTGVmdGFycm93O1wiOlwi4oeNXCIsXCJubGVmdGFycm93O1wiOlwi4oaaXCIsXCJuTGVmdHJpZ2h0YXJyb3c7XCI6XCLih45cIixcIm5sZWZ0cmlnaHRhcnJvdztcIjpcIuKGrlwiLFwibmxlcTtcIjpcIuKJsFwiLFwibmxlcXE7XCI6XCLiiabMuFwiLFwibmxlcXNsYW50O1wiOlwi4qm9zLhcIixcIm5sZXM7XCI6XCLiqb3MuFwiLFwibmxlc3M7XCI6XCLiia5cIixcIm5MbDtcIjpcIuKLmMy4XCIsXCJubHNpbTtcIjpcIuKJtFwiLFwibkx0O1wiOlwi4omq4oOSXCIsXCJubHQ7XCI6XCLiia5cIixcIm5sdHJpO1wiOlwi4ouqXCIsXCJubHRyaWU7XCI6XCLii6xcIixcIm5MdHY7XCI6XCLiiarMuFwiLFwibm1pZDtcIjpcIuKIpFwiLFwiTm9CcmVhaztcIjpcIuKBoFwiLFwiTm9uQnJlYWtpbmdTcGFjZTtcIjpcIsKgXCIsXCJOb3BmO1wiOlwi4oSVXCIsXCJub3BmO1wiOlwi8J2Vn1wiLFwiTm90O1wiOlwi4qusXCIsXCJub3Q7XCI6XCLCrFwiLG5vdDpcIsKsXCIsXCJOb3RDb25ncnVlbnQ7XCI6XCLiiaJcIixcIk5vdEN1cENhcDtcIjpcIuKJrVwiLFwiTm90RG91YmxlVmVydGljYWxCYXI7XCI6XCLiiKZcIixcIk5vdEVsZW1lbnQ7XCI6XCLiiIlcIixcIk5vdEVxdWFsO1wiOlwi4omgXCIsXCJOb3RFcXVhbFRpbGRlO1wiOlwi4omCzLhcIixcIk5vdEV4aXN0cztcIjpcIuKIhFwiLFwiTm90R3JlYXRlcjtcIjpcIuKJr1wiLFwiTm90R3JlYXRlckVxdWFsO1wiOlwi4omxXCIsXCJOb3RHcmVhdGVyRnVsbEVxdWFsO1wiOlwi4omnzLhcIixcIk5vdEdyZWF0ZXJHcmVhdGVyO1wiOlwi4omrzLhcIixcIk5vdEdyZWF0ZXJMZXNzO1wiOlwi4om5XCIsXCJOb3RHcmVhdGVyU2xhbnRFcXVhbDtcIjpcIuKpvsy4XCIsXCJOb3RHcmVhdGVyVGlsZGU7XCI6XCLiibVcIixcIk5vdEh1bXBEb3duSHVtcDtcIjpcIuKJjsy4XCIsXCJOb3RIdW1wRXF1YWw7XCI6XCLiiY/MuFwiLFwibm90aW47XCI6XCLiiIlcIixcIm5vdGluZG90O1wiOlwi4ou1zLhcIixcIm5vdGluRTtcIjpcIuKLucy4XCIsXCJub3RpbnZhO1wiOlwi4oiJXCIsXCJub3RpbnZiO1wiOlwi4ou3XCIsXCJub3RpbnZjO1wiOlwi4ou2XCIsXCJOb3RMZWZ0VHJpYW5nbGU7XCI6XCLii6pcIixcIk5vdExlZnRUcmlhbmdsZUJhcjtcIjpcIuKnj8y4XCIsXCJOb3RMZWZ0VHJpYW5nbGVFcXVhbDtcIjpcIuKLrFwiLFwiTm90TGVzcztcIjpcIuKJrlwiLFwiTm90TGVzc0VxdWFsO1wiOlwi4omwXCIsXCJOb3RMZXNzR3JlYXRlcjtcIjpcIuKJuFwiLFwiTm90TGVzc0xlc3M7XCI6XCLiiarMuFwiLFwiTm90TGVzc1NsYW50RXF1YWw7XCI6XCLiqb3MuFwiLFwiTm90TGVzc1RpbGRlO1wiOlwi4om0XCIsXCJOb3ROZXN0ZWRHcmVhdGVyR3JlYXRlcjtcIjpcIuKqosy4XCIsXCJOb3ROZXN0ZWRMZXNzTGVzcztcIjpcIuKqocy4XCIsXCJub3RuaTtcIjpcIuKIjFwiLFwibm90bml2YTtcIjpcIuKIjFwiLFwibm90bml2YjtcIjpcIuKLvlwiLFwibm90bml2YztcIjpcIuKLvVwiLFwiTm90UHJlY2VkZXM7XCI6XCLiioBcIixcIk5vdFByZWNlZGVzRXF1YWw7XCI6XCLiqq/MuFwiLFwiTm90UHJlY2VkZXNTbGFudEVxdWFsO1wiOlwi4ougXCIsXCJOb3RSZXZlcnNlRWxlbWVudDtcIjpcIuKIjFwiLFwiTm90UmlnaHRUcmlhbmdsZTtcIjpcIuKLq1wiLFwiTm90UmlnaHRUcmlhbmdsZUJhcjtcIjpcIuKnkMy4XCIsXCJOb3RSaWdodFRyaWFuZ2xlRXF1YWw7XCI6XCLii61cIixcIk5vdFNxdWFyZVN1YnNldDtcIjpcIuKKj8y4XCIsXCJOb3RTcXVhcmVTdWJzZXRFcXVhbDtcIjpcIuKLolwiLFwiTm90U3F1YXJlU3VwZXJzZXQ7XCI6XCLiipDMuFwiLFwiTm90U3F1YXJlU3VwZXJzZXRFcXVhbDtcIjpcIuKLo1wiLFwiTm90U3Vic2V0O1wiOlwi4oqC4oOSXCIsXCJOb3RTdWJzZXRFcXVhbDtcIjpcIuKKiFwiLFwiTm90U3VjY2VlZHM7XCI6XCLiioFcIixcIk5vdFN1Y2NlZWRzRXF1YWw7XCI6XCLiqrDMuFwiLFwiTm90U3VjY2VlZHNTbGFudEVxdWFsO1wiOlwi4ouhXCIsXCJOb3RTdWNjZWVkc1RpbGRlO1wiOlwi4om/zLhcIixcIk5vdFN1cGVyc2V0O1wiOlwi4oqD4oOSXCIsXCJOb3RTdXBlcnNldEVxdWFsO1wiOlwi4oqJXCIsXCJOb3RUaWxkZTtcIjpcIuKJgVwiLFwiTm90VGlsZGVFcXVhbDtcIjpcIuKJhFwiLFwiTm90VGlsZGVGdWxsRXF1YWw7XCI6XCLiiYdcIixcIk5vdFRpbGRlVGlsZGU7XCI6XCLiiYlcIixcIk5vdFZlcnRpY2FsQmFyO1wiOlwi4oikXCIsXCJucGFyO1wiOlwi4oimXCIsXCJucGFyYWxsZWw7XCI6XCLiiKZcIixcIm5wYXJzbDtcIjpcIuKrveKDpVwiLFwibnBhcnQ7XCI6XCLiiILMuFwiLFwibnBvbGludDtcIjpcIuKolFwiLFwibnByO1wiOlwi4oqAXCIsXCJucHJjdWU7XCI6XCLii6BcIixcIm5wcmU7XCI6XCLiqq/MuFwiLFwibnByZWM7XCI6XCLiioBcIixcIm5wcmVjZXE7XCI6XCLiqq/MuFwiLFwibnJBcnI7XCI6XCLih49cIixcIm5yYXJyO1wiOlwi4oabXCIsXCJucmFycmM7XCI6XCLipLPMuFwiLFwibnJhcnJ3O1wiOlwi4oadzLhcIixcIm5SaWdodGFycm93O1wiOlwi4oePXCIsXCJucmlnaHRhcnJvdztcIjpcIuKGm1wiLFwibnJ0cmk7XCI6XCLii6tcIixcIm5ydHJpZTtcIjpcIuKLrVwiLFwibnNjO1wiOlwi4oqBXCIsXCJuc2NjdWU7XCI6XCLii6FcIixcIm5zY2U7XCI6XCLiqrDMuFwiLFwiTnNjcjtcIjpcIvCdkqlcIixcIm5zY3I7XCI6XCLwnZODXCIsXCJuc2hvcnRtaWQ7XCI6XCLiiKRcIixcIm5zaG9ydHBhcmFsbGVsO1wiOlwi4oimXCIsXCJuc2ltO1wiOlwi4omBXCIsXCJuc2ltZTtcIjpcIuKJhFwiLFwibnNpbWVxO1wiOlwi4omEXCIsXCJuc21pZDtcIjpcIuKIpFwiLFwibnNwYXI7XCI6XCLiiKZcIixcIm5zcXN1YmU7XCI6XCLii6JcIixcIm5zcXN1cGU7XCI6XCLii6NcIixcIm5zdWI7XCI6XCLiioRcIixcIm5zdWJFO1wiOlwi4quFzLhcIixcIm5zdWJlO1wiOlwi4oqIXCIsXCJuc3Vic2V0O1wiOlwi4oqC4oOSXCIsXCJuc3Vic2V0ZXE7XCI6XCLiiohcIixcIm5zdWJzZXRlcXE7XCI6XCLiq4XMuFwiLFwibnN1Y2M7XCI6XCLiioFcIixcIm5zdWNjZXE7XCI6XCLiqrDMuFwiLFwibnN1cDtcIjpcIuKKhVwiLFwibnN1cEU7XCI6XCLiq4bMuFwiLFwibnN1cGU7XCI6XCLiiolcIixcIm5zdXBzZXQ7XCI6XCLiioPig5JcIixcIm5zdXBzZXRlcTtcIjpcIuKKiVwiLFwibnN1cHNldGVxcTtcIjpcIuKrhsy4XCIsXCJudGdsO1wiOlwi4om5XCIsXCJOdGlsZGU7XCI6XCLDkVwiLE50aWxkZTpcIsORXCIsXCJudGlsZGU7XCI6XCLDsVwiLG50aWxkZTpcIsOxXCIsXCJudGxnO1wiOlwi4om4XCIsXCJudHJpYW5nbGVsZWZ0O1wiOlwi4ouqXCIsXCJudHJpYW5nbGVsZWZ0ZXE7XCI6XCLii6xcIixcIm50cmlhbmdsZXJpZ2h0O1wiOlwi4ourXCIsXCJudHJpYW5nbGVyaWdodGVxO1wiOlwi4outXCIsXCJOdTtcIjpcIs6dXCIsXCJudTtcIjpcIs69XCIsXCJudW07XCI6XCIjXCIsXCJudW1lcm87XCI6XCLihJZcIixcIm51bXNwO1wiOlwi4oCHXCIsXCJudmFwO1wiOlwi4omN4oOSXCIsXCJuVkRhc2g7XCI6XCLiiq9cIixcIm5WZGFzaDtcIjpcIuKKrlwiLFwibnZEYXNoO1wiOlwi4oqtXCIsXCJudmRhc2g7XCI6XCLiiqxcIixcIm52Z2U7XCI6XCLiiaXig5JcIixcIm52Z3Q7XCI6XCI+4oOSXCIsXCJudkhhcnI7XCI6XCLipIRcIixcIm52aW5maW47XCI6XCLip55cIixcIm52bEFycjtcIjpcIuKkglwiLFwibnZsZTtcIjpcIuKJpOKDklwiLFwibnZsdDtcIjpcIjzig5JcIixcIm52bHRyaWU7XCI6XCLiirTig5JcIixcIm52ckFycjtcIjpcIuKkg1wiLFwibnZydHJpZTtcIjpcIuKKteKDklwiLFwibnZzaW07XCI6XCLiiLzig5JcIixcIm53YXJoaztcIjpcIuKko1wiLFwibndBcnI7XCI6XCLih5ZcIixcIm53YXJyO1wiOlwi4oaWXCIsXCJud2Fycm93O1wiOlwi4oaWXCIsXCJud25lYXI7XCI6XCLipKdcIixcIk9hY3V0ZTtcIjpcIsOTXCIsT2FjdXRlOlwiw5NcIixcIm9hY3V0ZTtcIjpcIsOzXCIsb2FjdXRlOlwiw7NcIixcIm9hc3Q7XCI6XCLiiptcIixcIm9jaXI7XCI6XCLiippcIixcIk9jaXJjO1wiOlwiw5RcIixPY2lyYzpcIsOUXCIsXCJvY2lyYztcIjpcIsO0XCIsb2NpcmM6XCLDtFwiLFwiT2N5O1wiOlwi0J5cIixcIm9jeTtcIjpcItC+XCIsXCJvZGFzaDtcIjpcIuKKnVwiLFwiT2RibGFjO1wiOlwixZBcIixcIm9kYmxhYztcIjpcIsWRXCIsXCJvZGl2O1wiOlwi4qi4XCIsXCJvZG90O1wiOlwi4oqZXCIsXCJvZHNvbGQ7XCI6XCLiprxcIixcIk9FbGlnO1wiOlwixZJcIixcIm9lbGlnO1wiOlwixZNcIixcIm9mY2lyO1wiOlwi4qa/XCIsXCJPZnI7XCI6XCLwnZSSXCIsXCJvZnI7XCI6XCLwnZSsXCIsXCJvZ29uO1wiOlwiy5tcIixcIk9ncmF2ZTtcIjpcIsOSXCIsT2dyYXZlOlwiw5JcIixcIm9ncmF2ZTtcIjpcIsOyXCIsb2dyYXZlOlwiw7JcIixcIm9ndDtcIjpcIuKngVwiLFwib2hiYXI7XCI6XCLiprVcIixcIm9obTtcIjpcIs6pXCIsXCJvaW50O1wiOlwi4oiuXCIsXCJvbGFycjtcIjpcIuKGulwiLFwib2xjaXI7XCI6XCLipr5cIixcIm9sY3Jvc3M7XCI6XCLiprtcIixcIm9saW5lO1wiOlwi4oC+XCIsXCJvbHQ7XCI6XCLip4BcIixcIk9tYWNyO1wiOlwixYxcIixcIm9tYWNyO1wiOlwixY1cIixcIk9tZWdhO1wiOlwizqlcIixcIm9tZWdhO1wiOlwiz4lcIixcIk9taWNyb247XCI6XCLOn1wiLFwib21pY3JvbjtcIjpcIs6/XCIsXCJvbWlkO1wiOlwi4qa2XCIsXCJvbWludXM7XCI6XCLiipZcIixcIk9vcGY7XCI6XCLwnZWGXCIsXCJvb3BmO1wiOlwi8J2VoFwiLFwib3BhcjtcIjpcIuKmt1wiLFwiT3BlbkN1cmx5RG91YmxlUXVvdGU7XCI6XCLigJxcIixcIk9wZW5DdXJseVF1b3RlO1wiOlwi4oCYXCIsXCJvcGVycDtcIjpcIuKmuVwiLFwib3BsdXM7XCI6XCLiipVcIixcIk9yO1wiOlwi4qmUXCIsXCJvcjtcIjpcIuKIqFwiLFwib3JhcnI7XCI6XCLihrtcIixcIm9yZDtcIjpcIuKpnVwiLFwib3JkZXI7XCI6XCLihLRcIixcIm9yZGVyb2Y7XCI6XCLihLRcIixcIm9yZGY7XCI6XCLCqlwiLG9yZGY6XCLCqlwiLFwib3JkbTtcIjpcIsK6XCIsb3JkbTpcIsK6XCIsXCJvcmlnb2Y7XCI6XCLiirZcIixcIm9yb3I7XCI6XCLiqZZcIixcIm9yc2xvcGU7XCI6XCLiqZdcIixcIm9ydjtcIjpcIuKpm1wiLFwib1M7XCI6XCLik4hcIixcIk9zY3I7XCI6XCLwnZKqXCIsXCJvc2NyO1wiOlwi4oS0XCIsXCJPc2xhc2g7XCI6XCLDmFwiLE9zbGFzaDpcIsOYXCIsXCJvc2xhc2g7XCI6XCLDuFwiLG9zbGFzaDpcIsO4XCIsXCJvc29sO1wiOlwi4oqYXCIsXCJPdGlsZGU7XCI6XCLDlVwiLE90aWxkZTpcIsOVXCIsXCJvdGlsZGU7XCI6XCLDtVwiLG90aWxkZTpcIsO1XCIsXCJPdGltZXM7XCI6XCLiqLdcIixcIm90aW1lcztcIjpcIuKKl1wiLFwib3RpbWVzYXM7XCI6XCLiqLZcIixcIk91bWw7XCI6XCLDllwiLE91bWw6XCLDllwiLFwib3VtbDtcIjpcIsO2XCIsb3VtbDpcIsO2XCIsXCJvdmJhcjtcIjpcIuKMvVwiLFwiT3ZlckJhcjtcIjpcIuKAvlwiLFwiT3ZlckJyYWNlO1wiOlwi4o+eXCIsXCJPdmVyQnJhY2tldDtcIjpcIuKOtFwiLFwiT3ZlclBhcmVudGhlc2lzO1wiOlwi4o+cXCIsXCJwYXI7XCI6XCLiiKVcIixcInBhcmE7XCI6XCLCtlwiLHBhcmE6XCLCtlwiLFwicGFyYWxsZWw7XCI6XCLiiKVcIixcInBhcnNpbTtcIjpcIuKrs1wiLFwicGFyc2w7XCI6XCLiq71cIixcInBhcnQ7XCI6XCLiiIJcIixcIlBhcnRpYWxEO1wiOlwi4oiCXCIsXCJQY3k7XCI6XCLQn1wiLFwicGN5O1wiOlwi0L9cIixcInBlcmNudDtcIjpcIiVcIixcInBlcmlvZDtcIjpcIi5cIixcInBlcm1pbDtcIjpcIuKAsFwiLFwicGVycDtcIjpcIuKKpVwiLFwicGVydGVuaztcIjpcIuKAsVwiLFwiUGZyO1wiOlwi8J2Uk1wiLFwicGZyO1wiOlwi8J2UrVwiLFwiUGhpO1wiOlwizqZcIixcInBoaTtcIjpcIs+GXCIsXCJwaGl2O1wiOlwiz5VcIixcInBobW1hdDtcIjpcIuKEs1wiLFwicGhvbmU7XCI6XCLimI5cIixcIlBpO1wiOlwizqBcIixcInBpO1wiOlwiz4BcIixcInBpdGNoZm9yaztcIjpcIuKLlFwiLFwicGl2O1wiOlwiz5ZcIixcInBsYW5jaztcIjpcIuKEj1wiLFwicGxhbmNraDtcIjpcIuKEjlwiLFwicGxhbmt2O1wiOlwi4oSPXCIsXCJwbHVzO1wiOlwiK1wiLFwicGx1c2FjaXI7XCI6XCLiqKNcIixcInBsdXNiO1wiOlwi4oqeXCIsXCJwbHVzY2lyO1wiOlwi4qiiXCIsXCJwbHVzZG87XCI6XCLiiJRcIixcInBsdXNkdTtcIjpcIuKopVwiLFwicGx1c2U7XCI6XCLiqbJcIixcIlBsdXNNaW51cztcIjpcIsKxXCIsXCJwbHVzbW47XCI6XCLCsVwiLHBsdXNtbjpcIsKxXCIsXCJwbHVzc2ltO1wiOlwi4qimXCIsXCJwbHVzdHdvO1wiOlwi4qinXCIsXCJwbTtcIjpcIsKxXCIsXCJQb2luY2FyZXBsYW5lO1wiOlwi4oSMXCIsXCJwb2ludGludDtcIjpcIuKolVwiLFwiUG9wZjtcIjpcIuKEmVwiLFwicG9wZjtcIjpcIvCdlaFcIixcInBvdW5kO1wiOlwiwqNcIixwb3VuZDpcIsKjXCIsXCJQcjtcIjpcIuKqu1wiLFwicHI7XCI6XCLiibpcIixcInByYXA7XCI6XCLiqrdcIixcInByY3VlO1wiOlwi4om8XCIsXCJwckU7XCI6XCLiqrNcIixcInByZTtcIjpcIuKqr1wiLFwicHJlYztcIjpcIuKJulwiLFwicHJlY2FwcHJveDtcIjpcIuKqt1wiLFwicHJlY2N1cmx5ZXE7XCI6XCLiibxcIixcIlByZWNlZGVzO1wiOlwi4om6XCIsXCJQcmVjZWRlc0VxdWFsO1wiOlwi4qqvXCIsXCJQcmVjZWRlc1NsYW50RXF1YWw7XCI6XCLiibxcIixcIlByZWNlZGVzVGlsZGU7XCI6XCLiib5cIixcInByZWNlcTtcIjpcIuKqr1wiLFwicHJlY25hcHByb3g7XCI6XCLiqrlcIixcInByZWNuZXFxO1wiOlwi4qq1XCIsXCJwcmVjbnNpbTtcIjpcIuKLqFwiLFwicHJlY3NpbTtcIjpcIuKJvlwiLFwiUHJpbWU7XCI6XCLigLNcIixcInByaW1lO1wiOlwi4oCyXCIsXCJwcmltZXM7XCI6XCLihJlcIixcInBybmFwO1wiOlwi4qq5XCIsXCJwcm5FO1wiOlwi4qq1XCIsXCJwcm5zaW07XCI6XCLii6hcIixcInByb2Q7XCI6XCLiiI9cIixcIlByb2R1Y3Q7XCI6XCLiiI9cIixcInByb2ZhbGFyO1wiOlwi4oyuXCIsXCJwcm9mbGluZTtcIjpcIuKMklwiLFwicHJvZnN1cmY7XCI6XCLijJNcIixcInByb3A7XCI6XCLiiJ1cIixcIlByb3BvcnRpb247XCI6XCLiiLdcIixcIlByb3BvcnRpb25hbDtcIjpcIuKInVwiLFwicHJvcHRvO1wiOlwi4oidXCIsXCJwcnNpbTtcIjpcIuKJvlwiLFwicHJ1cmVsO1wiOlwi4oqwXCIsXCJQc2NyO1wiOlwi8J2Sq1wiLFwicHNjcjtcIjpcIvCdk4VcIixcIlBzaTtcIjpcIs6oXCIsXCJwc2k7XCI6XCLPiFwiLFwicHVuY3NwO1wiOlwi4oCIXCIsXCJRZnI7XCI6XCLwnZSUXCIsXCJxZnI7XCI6XCLwnZSuXCIsXCJxaW50O1wiOlwi4qiMXCIsXCJRb3BmO1wiOlwi4oSaXCIsXCJxb3BmO1wiOlwi8J2VolwiLFwicXByaW1lO1wiOlwi4oGXXCIsXCJRc2NyO1wiOlwi8J2SrFwiLFwicXNjcjtcIjpcIvCdk4ZcIixcInF1YXRlcm5pb25zO1wiOlwi4oSNXCIsXCJxdWF0aW50O1wiOlwi4qiWXCIsXCJxdWVzdDtcIjpcIj9cIixcInF1ZXN0ZXE7XCI6XCLiiZ9cIixcIlFVT1Q7XCI6J1wiJyxRVU9UOidcIicsXCJxdW90O1wiOidcIicscXVvdDonXCInLFwickFhcnI7XCI6XCLih5tcIixcInJhY2U7XCI6XCLiiL3MsVwiLFwiUmFjdXRlO1wiOlwixZRcIixcInJhY3V0ZTtcIjpcIsWVXCIsXCJyYWRpYztcIjpcIuKImlwiLFwicmFlbXB0eXY7XCI6XCLiprNcIixcIlJhbmc7XCI6XCLin6tcIixcInJhbmc7XCI6XCLin6lcIixcInJhbmdkO1wiOlwi4qaSXCIsXCJyYW5nZTtcIjpcIuKmpVwiLFwicmFuZ2xlO1wiOlwi4p+pXCIsXCJyYXF1bztcIjpcIsK7XCIscmFxdW86XCLCu1wiLFwiUmFycjtcIjpcIuKGoFwiLFwickFycjtcIjpcIuKHklwiLFwicmFycjtcIjpcIuKGklwiLFwicmFycmFwO1wiOlwi4qW1XCIsXCJyYXJyYjtcIjpcIuKHpVwiLFwicmFycmJmcztcIjpcIuKkoFwiLFwicmFycmM7XCI6XCLipLNcIixcInJhcnJmcztcIjpcIuKknlwiLFwicmFycmhrO1wiOlwi4oaqXCIsXCJyYXJybHA7XCI6XCLihqxcIixcInJhcnJwbDtcIjpcIuKlhVwiLFwicmFycnNpbTtcIjpcIuKltFwiLFwiUmFycnRsO1wiOlwi4qSWXCIsXCJyYXJydGw7XCI6XCLihqNcIixcInJhcnJ3O1wiOlwi4oadXCIsXCJyQXRhaWw7XCI6XCLipJxcIixcInJhdGFpbDtcIjpcIuKkmlwiLFwicmF0aW87XCI6XCLiiLZcIixcInJhdGlvbmFscztcIjpcIuKEmlwiLFwiUkJhcnI7XCI6XCLipJBcIixcInJCYXJyO1wiOlwi4qSPXCIsXCJyYmFycjtcIjpcIuKkjVwiLFwicmJicms7XCI6XCLinbNcIixcInJicmFjZTtcIjpcIn1cIixcInJicmFjaztcIjpcIl1cIixcInJicmtlO1wiOlwi4qaMXCIsXCJyYnJrc2xkO1wiOlwi4qaOXCIsXCJyYnJrc2x1O1wiOlwi4qaQXCIsXCJSY2Fyb247XCI6XCLFmFwiLFwicmNhcm9uO1wiOlwixZlcIixcIlJjZWRpbDtcIjpcIsWWXCIsXCJyY2VkaWw7XCI6XCLFl1wiLFwicmNlaWw7XCI6XCLijIlcIixcInJjdWI7XCI6XCJ9XCIsXCJSY3k7XCI6XCLQoFwiLFwicmN5O1wiOlwi0YBcIixcInJkY2E7XCI6XCLipLdcIixcInJkbGRoYXI7XCI6XCLipalcIixcInJkcXVvO1wiOlwi4oCdXCIsXCJyZHF1b3I7XCI6XCLigJ1cIixcInJkc2g7XCI6XCLihrNcIixcIlJlO1wiOlwi4oScXCIsXCJyZWFsO1wiOlwi4oScXCIsXCJyZWFsaW5lO1wiOlwi4oSbXCIsXCJyZWFscGFydDtcIjpcIuKEnFwiLFwicmVhbHM7XCI6XCLihJ1cIixcInJlY3Q7XCI6XCLilq1cIixcIlJFRztcIjpcIsKuXCIsUkVHOlwiwq5cIixcInJlZztcIjpcIsKuXCIscmVnOlwiwq5cIixcIlJldmVyc2VFbGVtZW50O1wiOlwi4oiLXCIsXCJSZXZlcnNlRXF1aWxpYnJpdW07XCI6XCLih4tcIixcIlJldmVyc2VVcEVxdWlsaWJyaXVtO1wiOlwi4qWvXCIsXCJyZmlzaHQ7XCI6XCLipb1cIixcInJmbG9vcjtcIjpcIuKMi1wiLFwiUmZyO1wiOlwi4oScXCIsXCJyZnI7XCI6XCLwnZSvXCIsXCJySGFyO1wiOlwi4qWkXCIsXCJyaGFyZDtcIjpcIuKHgVwiLFwicmhhcnU7XCI6XCLih4BcIixcInJoYXJ1bDtcIjpcIuKlrFwiLFwiUmhvO1wiOlwizqFcIixcInJobztcIjpcIs+BXCIsXCJyaG92O1wiOlwiz7FcIixcIlJpZ2h0QW5nbGVCcmFja2V0O1wiOlwi4p+pXCIsXCJSaWdodEFycm93O1wiOlwi4oaSXCIsXCJSaWdodGFycm93O1wiOlwi4oeSXCIsXCJyaWdodGFycm93O1wiOlwi4oaSXCIsXCJSaWdodEFycm93QmFyO1wiOlwi4oelXCIsXCJSaWdodEFycm93TGVmdEFycm93O1wiOlwi4oeEXCIsXCJyaWdodGFycm93dGFpbDtcIjpcIuKGo1wiLFwiUmlnaHRDZWlsaW5nO1wiOlwi4oyJXCIsXCJSaWdodERvdWJsZUJyYWNrZXQ7XCI6XCLin6dcIixcIlJpZ2h0RG93blRlZVZlY3RvcjtcIjpcIuKlnVwiLFwiUmlnaHREb3duVmVjdG9yO1wiOlwi4oeCXCIsXCJSaWdodERvd25WZWN0b3JCYXI7XCI6XCLipZVcIixcIlJpZ2h0Rmxvb3I7XCI6XCLijItcIixcInJpZ2h0aGFycG9vbmRvd247XCI6XCLih4FcIixcInJpZ2h0aGFycG9vbnVwO1wiOlwi4oeAXCIsXCJyaWdodGxlZnRhcnJvd3M7XCI6XCLih4RcIixcInJpZ2h0bGVmdGhhcnBvb25zO1wiOlwi4oeMXCIsXCJyaWdodHJpZ2h0YXJyb3dzO1wiOlwi4oeJXCIsXCJyaWdodHNxdWlnYXJyb3c7XCI6XCLihp1cIixcIlJpZ2h0VGVlO1wiOlwi4oqiXCIsXCJSaWdodFRlZUFycm93O1wiOlwi4oamXCIsXCJSaWdodFRlZVZlY3RvcjtcIjpcIuKlm1wiLFwicmlnaHR0aHJlZXRpbWVzO1wiOlwi4ouMXCIsXCJSaWdodFRyaWFuZ2xlO1wiOlwi4oqzXCIsXCJSaWdodFRyaWFuZ2xlQmFyO1wiOlwi4qeQXCIsXCJSaWdodFRyaWFuZ2xlRXF1YWw7XCI6XCLiirVcIixcIlJpZ2h0VXBEb3duVmVjdG9yO1wiOlwi4qWPXCIsXCJSaWdodFVwVGVlVmVjdG9yO1wiOlwi4qWcXCIsXCJSaWdodFVwVmVjdG9yO1wiOlwi4oa+XCIsXCJSaWdodFVwVmVjdG9yQmFyO1wiOlwi4qWUXCIsXCJSaWdodFZlY3RvcjtcIjpcIuKHgFwiLFwiUmlnaHRWZWN0b3JCYXI7XCI6XCLipZNcIixcInJpbmc7XCI6XCLLmlwiLFwicmlzaW5nZG90c2VxO1wiOlwi4omTXCIsXCJybGFycjtcIjpcIuKHhFwiLFwicmxoYXI7XCI6XCLih4xcIixcInJsbTtcIjpcIuKAj1wiLFwicm1vdXN0O1wiOlwi4o6xXCIsXCJybW91c3RhY2hlO1wiOlwi4o6xXCIsXCJybm1pZDtcIjpcIuKrrlwiLFwicm9hbmc7XCI6XCLin61cIixcInJvYXJyO1wiOlwi4oe+XCIsXCJyb2JyaztcIjpcIuKfp1wiLFwicm9wYXI7XCI6XCLipoZcIixcIlJvcGY7XCI6XCLihJ1cIixcInJvcGY7XCI6XCLwnZWjXCIsXCJyb3BsdXM7XCI6XCLiqK5cIixcInJvdGltZXM7XCI6XCLiqLVcIixcIlJvdW5kSW1wbGllcztcIjpcIuKlsFwiLFwicnBhcjtcIjpcIilcIixcInJwYXJndDtcIjpcIuKmlFwiLFwicnBwb2xpbnQ7XCI6XCLiqJJcIixcInJyYXJyO1wiOlwi4oeJXCIsXCJScmlnaHRhcnJvdztcIjpcIuKHm1wiLFwicnNhcXVvO1wiOlwi4oC6XCIsXCJSc2NyO1wiOlwi4oSbXCIsXCJyc2NyO1wiOlwi8J2Th1wiLFwiUnNoO1wiOlwi4oaxXCIsXCJyc2g7XCI6XCLihrFcIixcInJzcWI7XCI6XCJdXCIsXCJyc3F1bztcIjpcIuKAmVwiLFwicnNxdW9yO1wiOlwi4oCZXCIsXCJydGhyZWU7XCI6XCLii4xcIixcInJ0aW1lcztcIjpcIuKLilwiLFwicnRyaTtcIjpcIuKWuVwiLFwicnRyaWU7XCI6XCLiirVcIixcInJ0cmlmO1wiOlwi4pa4XCIsXCJydHJpbHRyaTtcIjpcIuKnjlwiLFwiUnVsZURlbGF5ZWQ7XCI6XCLip7RcIixcInJ1bHVoYXI7XCI6XCLipahcIixcInJ4O1wiOlwi4oSeXCIsXCJTYWN1dGU7XCI6XCLFmlwiLFwic2FjdXRlO1wiOlwixZtcIixcInNicXVvO1wiOlwi4oCaXCIsXCJTYztcIjpcIuKqvFwiLFwic2M7XCI6XCLiibtcIixcInNjYXA7XCI6XCLiqrhcIixcIlNjYXJvbjtcIjpcIsWgXCIsXCJzY2Fyb247XCI6XCLFoVwiLFwic2NjdWU7XCI6XCLiib1cIixcInNjRTtcIjpcIuKqtFwiLFwic2NlO1wiOlwi4qqwXCIsXCJTY2VkaWw7XCI6XCLFnlwiLFwic2NlZGlsO1wiOlwixZ9cIixcIlNjaXJjO1wiOlwixZxcIixcInNjaXJjO1wiOlwixZ1cIixcInNjbmFwO1wiOlwi4qq6XCIsXCJzY25FO1wiOlwi4qq2XCIsXCJzY25zaW07XCI6XCLii6lcIixcInNjcG9saW50O1wiOlwi4qiTXCIsXCJzY3NpbTtcIjpcIuKJv1wiLFwiU2N5O1wiOlwi0KFcIixcInNjeTtcIjpcItGBXCIsXCJzZG90O1wiOlwi4ouFXCIsXCJzZG90YjtcIjpcIuKKoVwiLFwic2RvdGU7XCI6XCLiqaZcIixcInNlYXJoaztcIjpcIuKkpVwiLFwic2VBcnI7XCI6XCLih5hcIixcInNlYXJyO1wiOlwi4oaYXCIsXCJzZWFycm93O1wiOlwi4oaYXCIsXCJzZWN0O1wiOlwiwqdcIixzZWN0OlwiwqdcIixcInNlbWk7XCI6XCI7XCIsXCJzZXN3YXI7XCI6XCLipKlcIixcInNldG1pbnVzO1wiOlwi4oiWXCIsXCJzZXRtbjtcIjpcIuKIllwiLFwic2V4dDtcIjpcIuKctlwiLFwiU2ZyO1wiOlwi8J2UllwiLFwic2ZyO1wiOlwi8J2UsFwiLFwic2Zyb3duO1wiOlwi4oyiXCIsXCJzaGFycDtcIjpcIuKZr1wiLFwiU0hDSGN5O1wiOlwi0KlcIixcInNoY2hjeTtcIjpcItGJXCIsXCJTSGN5O1wiOlwi0KhcIixcInNoY3k7XCI6XCLRiFwiLFwiU2hvcnREb3duQXJyb3c7XCI6XCLihpNcIixcIlNob3J0TGVmdEFycm93O1wiOlwi4oaQXCIsXCJzaG9ydG1pZDtcIjpcIuKIo1wiLFwic2hvcnRwYXJhbGxlbDtcIjpcIuKIpVwiLFwiU2hvcnRSaWdodEFycm93O1wiOlwi4oaSXCIsXCJTaG9ydFVwQXJyb3c7XCI6XCLihpFcIixcInNoeTtcIjpcIsKtXCIsc2h5Olwiwq1cIixcIlNpZ21hO1wiOlwizqNcIixcInNpZ21hO1wiOlwiz4NcIixcInNpZ21hZjtcIjpcIs+CXCIsXCJzaWdtYXY7XCI6XCLPglwiLFwic2ltO1wiOlwi4oi8XCIsXCJzaW1kb3Q7XCI6XCLiqapcIixcInNpbWU7XCI6XCLiiYNcIixcInNpbWVxO1wiOlwi4omDXCIsXCJzaW1nO1wiOlwi4qqeXCIsXCJzaW1nRTtcIjpcIuKqoFwiLFwic2ltbDtcIjpcIuKqnVwiLFwic2ltbEU7XCI6XCLiqp9cIixcInNpbW5lO1wiOlwi4omGXCIsXCJzaW1wbHVzO1wiOlwi4qikXCIsXCJzaW1yYXJyO1wiOlwi4qWyXCIsXCJzbGFycjtcIjpcIuKGkFwiLFwiU21hbGxDaXJjbGU7XCI6XCLiiJhcIixcInNtYWxsc2V0bWludXM7XCI6XCLiiJZcIixcInNtYXNocDtcIjpcIuKos1wiLFwic21lcGFyc2w7XCI6XCLip6RcIixcInNtaWQ7XCI6XCLiiKNcIixcInNtaWxlO1wiOlwi4oyjXCIsXCJzbXQ7XCI6XCLiqqpcIixcInNtdGU7XCI6XCLiqqxcIixcInNtdGVzO1wiOlwi4qqs77iAXCIsXCJTT0ZUY3k7XCI6XCLQrFwiLFwic29mdGN5O1wiOlwi0YxcIixcInNvbDtcIjpcIi9cIixcInNvbGI7XCI6XCLip4RcIixcInNvbGJhcjtcIjpcIuKMv1wiLFwiU29wZjtcIjpcIvCdlYpcIixcInNvcGY7XCI6XCLwnZWkXCIsXCJzcGFkZXM7XCI6XCLimaBcIixcInNwYWRlc3VpdDtcIjpcIuKZoFwiLFwic3BhcjtcIjpcIuKIpVwiLFwic3FjYXA7XCI6XCLiipNcIixcInNxY2FwcztcIjpcIuKKk++4gFwiLFwic3FjdXA7XCI6XCLiipRcIixcInNxY3VwcztcIjpcIuKKlO+4gFwiLFwiU3FydDtcIjpcIuKImlwiLFwic3FzdWI7XCI6XCLiio9cIixcInNxc3ViZTtcIjpcIuKKkVwiLFwic3FzdWJzZXQ7XCI6XCLiio9cIixcInNxc3Vic2V0ZXE7XCI6XCLiipFcIixcInNxc3VwO1wiOlwi4oqQXCIsXCJzcXN1cGU7XCI6XCLiipJcIixcInNxc3Vwc2V0O1wiOlwi4oqQXCIsXCJzcXN1cHNldGVxO1wiOlwi4oqSXCIsXCJzcXU7XCI6XCLilqFcIixcIlNxdWFyZTtcIjpcIuKWoVwiLFwic3F1YXJlO1wiOlwi4pahXCIsXCJTcXVhcmVJbnRlcnNlY3Rpb247XCI6XCLiipNcIixcIlNxdWFyZVN1YnNldDtcIjpcIuKKj1wiLFwiU3F1YXJlU3Vic2V0RXF1YWw7XCI6XCLiipFcIixcIlNxdWFyZVN1cGVyc2V0O1wiOlwi4oqQXCIsXCJTcXVhcmVTdXBlcnNldEVxdWFsO1wiOlwi4oqSXCIsXCJTcXVhcmVVbmlvbjtcIjpcIuKKlFwiLFwic3F1YXJmO1wiOlwi4paqXCIsXCJzcXVmO1wiOlwi4paqXCIsXCJzcmFycjtcIjpcIuKGklwiLFwiU3NjcjtcIjpcIvCdkq5cIixcInNzY3I7XCI6XCLwnZOIXCIsXCJzc2V0bW47XCI6XCLiiJZcIixcInNzbWlsZTtcIjpcIuKMo1wiLFwic3N0YXJmO1wiOlwi4ouGXCIsXCJTdGFyO1wiOlwi4ouGXCIsXCJzdGFyO1wiOlwi4piGXCIsXCJzdGFyZjtcIjpcIuKYhVwiLFwic3RyYWlnaHRlcHNpbG9uO1wiOlwiz7VcIixcInN0cmFpZ2h0cGhpO1wiOlwiz5VcIixcInN0cm5zO1wiOlwiwq9cIixcIlN1YjtcIjpcIuKLkFwiLFwic3ViO1wiOlwi4oqCXCIsXCJzdWJkb3Q7XCI6XCLiqr1cIixcInN1YkU7XCI6XCLiq4VcIixcInN1YmU7XCI6XCLiioZcIixcInN1YmVkb3Q7XCI6XCLiq4NcIixcInN1Ym11bHQ7XCI6XCLiq4FcIixcInN1Ym5FO1wiOlwi4quLXCIsXCJzdWJuZTtcIjpcIuKKilwiLFwic3VicGx1cztcIjpcIuKqv1wiLFwic3VicmFycjtcIjpcIuKluVwiLFwiU3Vic2V0O1wiOlwi4ouQXCIsXCJzdWJzZXQ7XCI6XCLiioJcIixcInN1YnNldGVxO1wiOlwi4oqGXCIsXCJzdWJzZXRlcXE7XCI6XCLiq4VcIixcIlN1YnNldEVxdWFsO1wiOlwi4oqGXCIsXCJzdWJzZXRuZXE7XCI6XCLiiopcIixcInN1YnNldG5lcXE7XCI6XCLiq4tcIixcInN1YnNpbTtcIjpcIuKrh1wiLFwic3Vic3ViO1wiOlwi4quVXCIsXCJzdWJzdXA7XCI6XCLiq5NcIixcInN1Y2M7XCI6XCLiibtcIixcInN1Y2NhcHByb3g7XCI6XCLiqrhcIixcInN1Y2NjdXJseWVxO1wiOlwi4om9XCIsXCJTdWNjZWVkcztcIjpcIuKJu1wiLFwiU3VjY2VlZHNFcXVhbDtcIjpcIuKqsFwiLFwiU3VjY2VlZHNTbGFudEVxdWFsO1wiOlwi4om9XCIsXCJTdWNjZWVkc1RpbGRlO1wiOlwi4om/XCIsXCJzdWNjZXE7XCI6XCLiqrBcIixcInN1Y2NuYXBwcm94O1wiOlwi4qq6XCIsXCJzdWNjbmVxcTtcIjpcIuKqtlwiLFwic3VjY25zaW07XCI6XCLii6lcIixcInN1Y2NzaW07XCI6XCLiib9cIixcIlN1Y2hUaGF0O1wiOlwi4oiLXCIsXCJTdW07XCI6XCLiiJFcIixcInN1bTtcIjpcIuKIkVwiLFwic3VuZztcIjpcIuKZqlwiLFwiU3VwO1wiOlwi4ouRXCIsXCJzdXA7XCI6XCLiioNcIixcInN1cDE7XCI6XCLCuVwiLHN1cDE6XCLCuVwiLFwic3VwMjtcIjpcIsKyXCIsc3VwMjpcIsKyXCIsXCJzdXAzO1wiOlwiwrNcIixzdXAzOlwiwrNcIixcInN1cGRvdDtcIjpcIuKqvlwiLFwic3VwZHN1YjtcIjpcIuKrmFwiLFwic3VwRTtcIjpcIuKrhlwiLFwic3VwZTtcIjpcIuKKh1wiLFwic3VwZWRvdDtcIjpcIuKrhFwiLFwiU3VwZXJzZXQ7XCI6XCLiioNcIixcIlN1cGVyc2V0RXF1YWw7XCI6XCLiiodcIixcInN1cGhzb2w7XCI6XCLin4lcIixcInN1cGhzdWI7XCI6XCLiq5dcIixcInN1cGxhcnI7XCI6XCLipbtcIixcInN1cG11bHQ7XCI6XCLiq4JcIixcInN1cG5FO1wiOlwi4quMXCIsXCJzdXBuZTtcIjpcIuKKi1wiLFwic3VwcGx1cztcIjpcIuKrgFwiLFwiU3Vwc2V0O1wiOlwi4ouRXCIsXCJzdXBzZXQ7XCI6XCLiioNcIixcInN1cHNldGVxO1wiOlwi4oqHXCIsXCJzdXBzZXRlcXE7XCI6XCLiq4ZcIixcInN1cHNldG5lcTtcIjpcIuKKi1wiLFwic3Vwc2V0bmVxcTtcIjpcIuKrjFwiLFwic3Vwc2ltO1wiOlwi4quIXCIsXCJzdXBzdWI7XCI6XCLiq5RcIixcInN1cHN1cDtcIjpcIuKrllwiLFwic3dhcmhrO1wiOlwi4qSmXCIsXCJzd0FycjtcIjpcIuKHmVwiLFwic3dhcnI7XCI6XCLihplcIixcInN3YXJyb3c7XCI6XCLihplcIixcInN3bndhcjtcIjpcIuKkqlwiLFwic3psaWc7XCI6XCLDn1wiLHN6bGlnOlwiw59cIixcIlRhYjtcIjpcIlxcdFwiLFwidGFyZ2V0O1wiOlwi4oyWXCIsXCJUYXU7XCI6XCLOpFwiLFwidGF1O1wiOlwiz4RcIixcInRicms7XCI6XCLijrRcIixcIlRjYXJvbjtcIjpcIsWkXCIsXCJ0Y2Fyb247XCI6XCLFpVwiLFwiVGNlZGlsO1wiOlwixaJcIixcInRjZWRpbDtcIjpcIsWjXCIsXCJUY3k7XCI6XCLQolwiLFwidGN5O1wiOlwi0YJcIixcInRkb3Q7XCI6XCLig5tcIixcInRlbHJlYztcIjpcIuKMlVwiLFwiVGZyO1wiOlwi8J2Ul1wiLFwidGZyO1wiOlwi8J2UsVwiLFwidGhlcmU0O1wiOlwi4oi0XCIsXCJUaGVyZWZvcmU7XCI6XCLiiLRcIixcInRoZXJlZm9yZTtcIjpcIuKItFwiLFwiVGhldGE7XCI6XCLOmFwiLFwidGhldGE7XCI6XCLOuFwiLFwidGhldGFzeW07XCI6XCLPkVwiLFwidGhldGF2O1wiOlwiz5FcIixcInRoaWNrYXBwcm94O1wiOlwi4omIXCIsXCJ0aGlja3NpbTtcIjpcIuKIvFwiLFwiVGhpY2tTcGFjZTtcIjpcIuKBn+KAilwiLFwidGhpbnNwO1wiOlwi4oCJXCIsXCJUaGluU3BhY2U7XCI6XCLigIlcIixcInRoa2FwO1wiOlwi4omIXCIsXCJ0aGtzaW07XCI6XCLiiLxcIixcIlRIT1JOO1wiOlwiw55cIixUSE9STjpcIsOeXCIsXCJ0aG9ybjtcIjpcIsO+XCIsdGhvcm46XCLDvlwiLFwiVGlsZGU7XCI6XCLiiLxcIixcInRpbGRlO1wiOlwiy5xcIixcIlRpbGRlRXF1YWw7XCI6XCLiiYNcIixcIlRpbGRlRnVsbEVxdWFsO1wiOlwi4omFXCIsXCJUaWxkZVRpbGRlO1wiOlwi4omIXCIsXCJ0aW1lcztcIjpcIsOXXCIsdGltZXM6XCLDl1wiLFwidGltZXNiO1wiOlwi4oqgXCIsXCJ0aW1lc2JhcjtcIjpcIuKosVwiLFwidGltZXNkO1wiOlwi4qiwXCIsXCJ0aW50O1wiOlwi4oitXCIsXCJ0b2VhO1wiOlwi4qSoXCIsXCJ0b3A7XCI6XCLiiqRcIixcInRvcGJvdDtcIjpcIuKMtlwiLFwidG9wY2lyO1wiOlwi4quxXCIsXCJUb3BmO1wiOlwi8J2Vi1wiLFwidG9wZjtcIjpcIvCdlaVcIixcInRvcGZvcms7XCI6XCLiq5pcIixcInRvc2E7XCI6XCLipKlcIixcInRwcmltZTtcIjpcIuKAtFwiLFwiVFJBREU7XCI6XCLihKJcIixcInRyYWRlO1wiOlwi4oSiXCIsXCJ0cmlhbmdsZTtcIjpcIuKWtVwiLFwidHJpYW5nbGVkb3duO1wiOlwi4pa/XCIsXCJ0cmlhbmdsZWxlZnQ7XCI6XCLil4NcIixcInRyaWFuZ2xlbGVmdGVxO1wiOlwi4oq0XCIsXCJ0cmlhbmdsZXE7XCI6XCLiiZxcIixcInRyaWFuZ2xlcmlnaHQ7XCI6XCLilrlcIixcInRyaWFuZ2xlcmlnaHRlcTtcIjpcIuKKtVwiLFwidHJpZG90O1wiOlwi4pesXCIsXCJ0cmllO1wiOlwi4omcXCIsXCJ0cmltaW51cztcIjpcIuKoulwiLFwiVHJpcGxlRG90O1wiOlwi4oObXCIsXCJ0cmlwbHVzO1wiOlwi4qi5XCIsXCJ0cmlzYjtcIjpcIuKnjVwiLFwidHJpdGltZTtcIjpcIuKou1wiLFwidHJwZXppdW07XCI6XCLij6JcIixcIlRzY3I7XCI6XCLwnZKvXCIsXCJ0c2NyO1wiOlwi8J2TiVwiLFwiVFNjeTtcIjpcItCmXCIsXCJ0c2N5O1wiOlwi0YZcIixcIlRTSGN5O1wiOlwi0ItcIixcInRzaGN5O1wiOlwi0ZtcIixcIlRzdHJvaztcIjpcIsWmXCIsXCJ0c3Ryb2s7XCI6XCLFp1wiLFwidHdpeHQ7XCI6XCLiiaxcIixcInR3b2hlYWRsZWZ0YXJyb3c7XCI6XCLihp5cIixcInR3b2hlYWRyaWdodGFycm93O1wiOlwi4oagXCIsXCJVYWN1dGU7XCI6XCLDmlwiLFVhY3V0ZTpcIsOaXCIsXCJ1YWN1dGU7XCI6XCLDulwiLHVhY3V0ZTpcIsO6XCIsXCJVYXJyO1wiOlwi4oafXCIsXCJ1QXJyO1wiOlwi4oeRXCIsXCJ1YXJyO1wiOlwi4oaRXCIsXCJVYXJyb2NpcjtcIjpcIuKliVwiLFwiVWJyY3k7XCI6XCLQjlwiLFwidWJyY3k7XCI6XCLRnlwiLFwiVWJyZXZlO1wiOlwixaxcIixcInVicmV2ZTtcIjpcIsWtXCIsXCJVY2lyYztcIjpcIsObXCIsVWNpcmM6XCLDm1wiLFwidWNpcmM7XCI6XCLDu1wiLHVjaXJjOlwiw7tcIixcIlVjeTtcIjpcItCjXCIsXCJ1Y3k7XCI6XCLRg1wiLFwidWRhcnI7XCI6XCLih4VcIixcIlVkYmxhYztcIjpcIsWwXCIsXCJ1ZGJsYWM7XCI6XCLFsVwiLFwidWRoYXI7XCI6XCLipa5cIixcInVmaXNodDtcIjpcIuKlvlwiLFwiVWZyO1wiOlwi8J2UmFwiLFwidWZyO1wiOlwi8J2UslwiLFwiVWdyYXZlO1wiOlwiw5lcIixVZ3JhdmU6XCLDmVwiLFwidWdyYXZlO1wiOlwiw7lcIix1Z3JhdmU6XCLDuVwiLFwidUhhcjtcIjpcIuKlo1wiLFwidWhhcmw7XCI6XCLihr9cIixcInVoYXJyO1wiOlwi4oa+XCIsXCJ1aGJsaztcIjpcIuKWgFwiLFwidWxjb3JuO1wiOlwi4oycXCIsXCJ1bGNvcm5lcjtcIjpcIuKMnFwiLFwidWxjcm9wO1wiOlwi4oyPXCIsXCJ1bHRyaTtcIjpcIuKXuFwiLFwiVW1hY3I7XCI6XCLFqlwiLFwidW1hY3I7XCI6XCLFq1wiLFwidW1sO1wiOlwiwqhcIix1bWw6XCLCqFwiLFwiVW5kZXJCYXI7XCI6XCJfXCIsXCJVbmRlckJyYWNlO1wiOlwi4o+fXCIsXCJVbmRlckJyYWNrZXQ7XCI6XCLijrVcIixcIlVuZGVyUGFyZW50aGVzaXM7XCI6XCLij51cIixcIlVuaW9uO1wiOlwi4ouDXCIsXCJVbmlvblBsdXM7XCI6XCLiio5cIixcIlVvZ29uO1wiOlwixbJcIixcInVvZ29uO1wiOlwixbNcIixcIlVvcGY7XCI6XCLwnZWMXCIsXCJ1b3BmO1wiOlwi8J2VplwiLFwiVXBBcnJvdztcIjpcIuKGkVwiLFwiVXBhcnJvdztcIjpcIuKHkVwiLFwidXBhcnJvdztcIjpcIuKGkVwiLFwiVXBBcnJvd0JhcjtcIjpcIuKkklwiLFwiVXBBcnJvd0Rvd25BcnJvdztcIjpcIuKHhVwiLFwiVXBEb3duQXJyb3c7XCI6XCLihpVcIixcIlVwZG93bmFycm93O1wiOlwi4oeVXCIsXCJ1cGRvd25hcnJvdztcIjpcIuKGlVwiLFwiVXBFcXVpbGlicml1bTtcIjpcIuKlrlwiLFwidXBoYXJwb29ubGVmdDtcIjpcIuKGv1wiLFwidXBoYXJwb29ucmlnaHQ7XCI6XCLihr5cIixcInVwbHVzO1wiOlwi4oqOXCIsXCJVcHBlckxlZnRBcnJvdztcIjpcIuKGllwiLFwiVXBwZXJSaWdodEFycm93O1wiOlwi4oaXXCIsXCJVcHNpO1wiOlwiz5JcIixcInVwc2k7XCI6XCLPhVwiLFwidXBzaWg7XCI6XCLPklwiLFwiVXBzaWxvbjtcIjpcIs6lXCIsXCJ1cHNpbG9uO1wiOlwiz4VcIixcIlVwVGVlO1wiOlwi4oqlXCIsXCJVcFRlZUFycm93O1wiOlwi4oalXCIsXCJ1cHVwYXJyb3dzO1wiOlwi4oeIXCIsXCJ1cmNvcm47XCI6XCLijJ1cIixcInVyY29ybmVyO1wiOlwi4oydXCIsXCJ1cmNyb3A7XCI6XCLijI5cIixcIlVyaW5nO1wiOlwixa5cIixcInVyaW5nO1wiOlwixa9cIixcInVydHJpO1wiOlwi4pe5XCIsXCJVc2NyO1wiOlwi8J2SsFwiLFwidXNjcjtcIjpcIvCdk4pcIixcInV0ZG90O1wiOlwi4ouwXCIsXCJVdGlsZGU7XCI6XCLFqFwiLFwidXRpbGRlO1wiOlwixalcIixcInV0cmk7XCI6XCLilrVcIixcInV0cmlmO1wiOlwi4pa0XCIsXCJ1dWFycjtcIjpcIuKHiFwiLFwiVXVtbDtcIjpcIsOcXCIsVXVtbDpcIsOcXCIsXCJ1dW1sO1wiOlwiw7xcIix1dW1sOlwiw7xcIixcInV3YW5nbGU7XCI6XCLipqdcIixcInZhbmdydDtcIjpcIuKmnFwiLFwidmFyZXBzaWxvbjtcIjpcIs+1XCIsXCJ2YXJrYXBwYTtcIjpcIs+wXCIsXCJ2YXJub3RoaW5nO1wiOlwi4oiFXCIsXCJ2YXJwaGk7XCI6XCLPlVwiLFwidmFycGk7XCI6XCLPllwiLFwidmFycHJvcHRvO1wiOlwi4oidXCIsXCJ2QXJyO1wiOlwi4oeVXCIsXCJ2YXJyO1wiOlwi4oaVXCIsXCJ2YXJyaG87XCI6XCLPsVwiLFwidmFyc2lnbWE7XCI6XCLPglwiLFwidmFyc3Vic2V0bmVxO1wiOlwi4oqK77iAXCIsXCJ2YXJzdWJzZXRuZXFxO1wiOlwi4quL77iAXCIsXCJ2YXJzdXBzZXRuZXE7XCI6XCLiiovvuIBcIixcInZhcnN1cHNldG5lcXE7XCI6XCLiq4zvuIBcIixcInZhcnRoZXRhO1wiOlwiz5FcIixcInZhcnRyaWFuZ2xlbGVmdDtcIjpcIuKKslwiLFwidmFydHJpYW5nbGVyaWdodDtcIjpcIuKKs1wiLFwiVmJhcjtcIjpcIuKrq1wiLFwidkJhcjtcIjpcIuKrqFwiLFwidkJhcnY7XCI6XCLiq6lcIixcIlZjeTtcIjpcItCSXCIsXCJ2Y3k7XCI6XCLQslwiLFwiVkRhc2g7XCI6XCLiiqtcIixcIlZkYXNoO1wiOlwi4oqpXCIsXCJ2RGFzaDtcIjpcIuKKqFwiLFwidmRhc2g7XCI6XCLiiqJcIixcIlZkYXNobDtcIjpcIuKrplwiLFwiVmVlO1wiOlwi4ouBXCIsXCJ2ZWU7XCI6XCLiiKhcIixcInZlZWJhcjtcIjpcIuKKu1wiLFwidmVlZXE7XCI6XCLiiZpcIixcInZlbGxpcDtcIjpcIuKLrlwiLFwiVmVyYmFyO1wiOlwi4oCWXCIsXCJ2ZXJiYXI7XCI6XCJ8XCIsXCJWZXJ0O1wiOlwi4oCWXCIsXCJ2ZXJ0O1wiOlwifFwiLFwiVmVydGljYWxCYXI7XCI6XCLiiKNcIixcIlZlcnRpY2FsTGluZTtcIjpcInxcIixcIlZlcnRpY2FsU2VwYXJhdG9yO1wiOlwi4p2YXCIsXCJWZXJ0aWNhbFRpbGRlO1wiOlwi4omAXCIsXCJWZXJ5VGhpblNwYWNlO1wiOlwi4oCKXCIsXCJWZnI7XCI6XCLwnZSZXCIsXCJ2ZnI7XCI6XCLwnZSzXCIsXCJ2bHRyaTtcIjpcIuKKslwiLFwidm5zdWI7XCI6XCLiioLig5JcIixcInZuc3VwO1wiOlwi4oqD4oOSXCIsXCJWb3BmO1wiOlwi8J2VjVwiLFwidm9wZjtcIjpcIvCdladcIixcInZwcm9wO1wiOlwi4oidXCIsXCJ2cnRyaTtcIjpcIuKKs1wiLFwiVnNjcjtcIjpcIvCdkrFcIixcInZzY3I7XCI6XCLwnZOLXCIsXCJ2c3VibkU7XCI6XCLiq4vvuIBcIixcInZzdWJuZTtcIjpcIuKKiu+4gFwiLFwidnN1cG5FO1wiOlwi4quM77iAXCIsXCJ2c3VwbmU7XCI6XCLiiovvuIBcIixcIlZ2ZGFzaDtcIjpcIuKKqlwiLFwidnppZ3phZztcIjpcIuKmmlwiLFwiV2NpcmM7XCI6XCLFtFwiLFwid2NpcmM7XCI6XCLFtVwiLFwid2VkYmFyO1wiOlwi4qmfXCIsXCJXZWRnZTtcIjpcIuKLgFwiLFwid2VkZ2U7XCI6XCLiiKdcIixcIndlZGdlcTtcIjpcIuKJmVwiLFwid2VpZXJwO1wiOlwi4oSYXCIsXCJXZnI7XCI6XCLwnZSaXCIsXCJ3ZnI7XCI6XCLwnZS0XCIsXCJXb3BmO1wiOlwi8J2VjlwiLFwid29wZjtcIjpcIvCdlahcIixcIndwO1wiOlwi4oSYXCIsXCJ3cjtcIjpcIuKJgFwiLFwid3JlYXRoO1wiOlwi4omAXCIsXCJXc2NyO1wiOlwi8J2SslwiLFwid3NjcjtcIjpcIvCdk4xcIixcInhjYXA7XCI6XCLii4JcIixcInhjaXJjO1wiOlwi4pevXCIsXCJ4Y3VwO1wiOlwi4ouDXCIsXCJ4ZHRyaTtcIjpcIuKWvVwiLFwiWGZyO1wiOlwi8J2Um1wiLFwieGZyO1wiOlwi8J2UtVwiLFwieGhBcnI7XCI6XCLin7pcIixcInhoYXJyO1wiOlwi4p+3XCIsXCJYaTtcIjpcIs6eXCIsXCJ4aTtcIjpcIs6+XCIsXCJ4bEFycjtcIjpcIuKfuFwiLFwieGxhcnI7XCI6XCLin7VcIixcInhtYXA7XCI6XCLin7xcIixcInhuaXM7XCI6XCLii7tcIixcInhvZG90O1wiOlwi4qiAXCIsXCJYb3BmO1wiOlwi8J2Vj1wiLFwieG9wZjtcIjpcIvCdlalcIixcInhvcGx1cztcIjpcIuKogVwiLFwieG90aW1lO1wiOlwi4qiCXCIsXCJ4ckFycjtcIjpcIuKfuVwiLFwieHJhcnI7XCI6XCLin7ZcIixcIlhzY3I7XCI6XCLwnZKzXCIsXCJ4c2NyO1wiOlwi8J2TjVwiLFwieHNxY3VwO1wiOlwi4qiGXCIsXCJ4dXBsdXM7XCI6XCLiqIRcIixcInh1dHJpO1wiOlwi4pazXCIsXCJ4dmVlO1wiOlwi4ouBXCIsXCJ4d2VkZ2U7XCI6XCLii4BcIixcIllhY3V0ZTtcIjpcIsOdXCIsWWFjdXRlOlwiw51cIixcInlhY3V0ZTtcIjpcIsO9XCIseWFjdXRlOlwiw71cIixcIllBY3k7XCI6XCLQr1wiLFwieWFjeTtcIjpcItGPXCIsXCJZY2lyYztcIjpcIsW2XCIsXCJ5Y2lyYztcIjpcIsW3XCIsXCJZY3k7XCI6XCLQq1wiLFwieWN5O1wiOlwi0YtcIixcInllbjtcIjpcIsKlXCIseWVuOlwiwqVcIixcIllmcjtcIjpcIvCdlJxcIixcInlmcjtcIjpcIvCdlLZcIixcIllJY3k7XCI6XCLQh1wiLFwieWljeTtcIjpcItGXXCIsXCJZb3BmO1wiOlwi8J2VkFwiLFwieW9wZjtcIjpcIvCdlapcIixcIllzY3I7XCI6XCLwnZK0XCIsXCJ5c2NyO1wiOlwi8J2TjlwiLFwiWVVjeTtcIjpcItCuXCIsXCJ5dWN5O1wiOlwi0Y5cIixcIll1bWw7XCI6XCLFuFwiLFwieXVtbDtcIjpcIsO/XCIseXVtbDpcIsO/XCIsXCJaYWN1dGU7XCI6XCLFuVwiLFwiemFjdXRlO1wiOlwixbpcIixcIlpjYXJvbjtcIjpcIsW9XCIsXCJ6Y2Fyb247XCI6XCLFvlwiLFwiWmN5O1wiOlwi0JdcIixcInpjeTtcIjpcItC3XCIsXCJaZG90O1wiOlwixbtcIixcInpkb3Q7XCI6XCLFvFwiLFwiemVldHJmO1wiOlwi4oSoXCIsXCJaZXJvV2lkdGhTcGFjZTtcIjpcIuKAi1wiLFwiWmV0YTtcIjpcIs6WXCIsXCJ6ZXRhO1wiOlwizrZcIixcIlpmcjtcIjpcIuKEqFwiLFwiemZyO1wiOlwi8J2Ut1wiLFwiWkhjeTtcIjpcItCWXCIsXCJ6aGN5O1wiOlwi0LZcIixcInppZ3JhcnI7XCI6XCLih51cIixcIlpvcGY7XCI6XCLihKRcIixcInpvcGY7XCI6XCLwnZWrXCIsXCJac2NyO1wiOlwi8J2StVwiLFwienNjcjtcIjpcIvCdk49cIixcInp3ajtcIjpcIuKAjVwiLFwienduajtcIjpcIuKAjFwifTt2YXIgaGU9e2VuY29kZTpmdW5jdGlvbihyLGUpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiByKXRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhIFN0cmluZ1wiKTtlfHwoZT17fSk7dmFyIHQ9ITA7ZS5uYW1lZCYmKHQ9ITEpO3ZvaWQgMCE9PWUubnVtZXJpYyYmKHQ9ZS5udW1lcmljKTtmb3IodmFyIG49ZS5zcGVjaWFsfHx7J1wiJzohMCxcIidcIjohMCxcIjxcIjohMCxcIj5cIjohMCxcIiZcIjohMH0sYT1mZS51Y3MyLmRlY29kZShyKSxvPVtdLGk9MDtpPGEubGVuZ3RoO2krKyl7dmFyIHM9YVtpXSxjPWZlLnVjczIuZW5jb2RlKFtzXSksbD1nZVtzXTtsJiYocz49MTI3fHxuW2NdKSYmIXQ/by5wdXNoKFwiJlwiKygvOyQvLnRlc3QobCk/bDpsK1wiO1wiKSk6czwzMnx8cz49MTI3fHxuW2NdP28ucHVzaChcIiYjXCIrcytcIjtcIik6by5wdXNoKGMpfXJldHVybiBvLmpvaW4oXCJcIil9LGRlY29kZTpmdW5jdGlvbihyKXtpZihcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYSBTdHJpbmdcIik7cmV0dXJuIHIucmVwbGFjZSgvJigjP1teO1xcV10rOz8pL2csKGZ1bmN0aW9uKHIsZSl7dmFyIHQ7aWYodD0vXiMoXFxkKyk7PyQvLmV4ZWMoZSkpcmV0dXJuIGZlLnVjczIuZW5jb2RlKFtwYXJzZUludCh0WzFdLDEwKV0pO2lmKHQ9L14jW1h4XShbQS1GYS1mMC05XSspOz8vLmV4ZWMoZSkpcmV0dXJuIGZlLnVjczIuZW5jb2RlKFtwYXJzZUludCh0WzFdLDE2KV0pO3ZhciBuPS87JC8udGVzdChlKSxhPW4/ZS5yZXBsYWNlKC87JC8sXCJcIik6ZSxvPWRlW2FdfHxuJiZkZVtlXTtyZXR1cm5cIm51bWJlclwiPT10eXBlb2Ygbz9mZS51Y3MyLmVuY29kZShbb10pOlwic3RyaW5nXCI9PXR5cGVvZiBvP286XCImXCIrZX0pKX19OyFmdW5jdGlvbihyLGUsdCl7cih0PXtwYXRoOmUsZXhwb3J0czp7fSxyZXF1aXJlOmZ1bmN0aW9uKHIsZSl7cmV0dXJuIGZ1bmN0aW9uKCl7dGhyb3cgbmV3IEVycm9yKFwiRHluYW1pYyByZXF1aXJlcyBhcmUgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgQHJvbGx1cC9wbHVnaW4tY29tbW9uanNcIil9KG51bGw9PWUmJnQucGF0aCl9fSx0LmV4cG9ydHMpLHQuZXhwb3J0c30oKGZ1bmN0aW9uKGUsdCl7dmFyIG49XCJfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fXCIsYT05MDA3MTk5MjU0NzQwOTkxLG89XCJbb2JqZWN0IEFyZ3VtZW50c11cIixpPVwiW29iamVjdCBCb29sZWFuXVwiLHM9XCJbb2JqZWN0IERhdGVdXCIsYz1cIltvYmplY3QgRnVuY3Rpb25dXCIsbD1cIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCIsdT1cIltvYmplY3QgTWFwXVwiLHA9XCJbb2JqZWN0IE51bWJlcl1cIixnPVwiW29iamVjdCBPYmplY3RdXCIsZj1cIltvYmplY3QgUHJvbWlzZV1cIixkPVwiW29iamVjdCBSZWdFeHBdXCIsaD1cIltvYmplY3QgU2V0XVwiLG09XCJbb2JqZWN0IFN0cmluZ11cIixiPVwiW29iamVjdCBTeW1ib2xdXCIseT1cIltvYmplY3QgV2Vha01hcF1cIix2PVwiW29iamVjdCBBcnJheUJ1ZmZlcl1cIix3PVwiW29iamVjdCBEYXRhVmlld11cIixxPVwiW29iamVjdCBGbG9hdDMyQXJyYXldXCIsVD1cIltvYmplY3QgRmxvYXQ2NEFycmF5XVwiLEE9XCJbb2JqZWN0IEludDhBcnJheV1cIixrPVwiW29iamVjdCBJbnQxNkFycmF5XVwiLE89XCJbb2JqZWN0IEludDMyQXJyYXldXCIsUz1cIltvYmplY3QgVWludDhBcnJheV1cIixFPVwiW29iamVjdCBVaW50OENsYW1wZWRBcnJheV1cIixfPVwiW29iamVjdCBVaW50MTZBcnJheV1cIix4PVwiW29iamVjdCBVaW50MzJBcnJheV1cIixEPS9cXHcqJC8sUj0vXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvLE49L14oPzowfFsxLTldXFxkKikkLyxqPXt9O2pbb109altcIltvYmplY3QgQXJyYXldXCJdPWpbdl09alt3XT1qW2ldPWpbc109altxXT1qW1RdPWpbQV09altrXT1qW09dPWpbdV09altwXT1qW2ddPWpbZF09altoXT1qW21dPWpbYl09altTXT1qW0VdPWpbX109alt4XT0hMCxqW1wiW29iamVjdCBFcnJvcl1cIl09altjXT1qW3ldPSExO3ZhciBDPVwib2JqZWN0XCI9PXIoTCkmJkwmJkwuT2JqZWN0PT09T2JqZWN0JiZMLEI9XCJvYmplY3RcIj09KFwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZWxmP1widW5kZWZpbmVkXCI6cihzZWxmKSkmJnNlbGYmJnNlbGYuT2JqZWN0PT09T2JqZWN0JiZzZWxmLEk9Q3x8Qnx8RnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpLEg9dCYmIXQubm9kZVR5cGUmJnQsVT1IJiZlJiYhZS5ub2RlVHlwZSYmZSxWPVUmJlUuZXhwb3J0cz09PUg7ZnVuY3Rpb24gUChyLGUpe3JldHVybiByLnNldChlWzBdLGVbMV0pLHJ9ZnVuY3Rpb24gVyhyLGUpe3JldHVybiByLmFkZChlKSxyfWZ1bmN0aW9uIEYocixlLHQsbil7dmFyIGE9LTEsbz1yP3IubGVuZ3RoOjA7Zm9yKG4mJm8mJih0PXJbKythXSk7KythPG87KXQ9ZSh0LHJbYV0sYSxyKTtyZXR1cm4gdH1mdW5jdGlvbiBHKHIpe3ZhciBlPSExO2lmKG51bGwhPXImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHIudG9TdHJpbmcpdHJ5e2U9ISEocitcIlwiKX1jYXRjaChyKXt9cmV0dXJuIGV9ZnVuY3Rpb24geihyKXt2YXIgZT0tMSx0PUFycmF5KHIuc2l6ZSk7cmV0dXJuIHIuZm9yRWFjaCgoZnVuY3Rpb24ocixuKXt0WysrZV09W24scl19KSksdH1mdW5jdGlvbiBKKHIsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiByKGUodCkpfX1mdW5jdGlvbiBNKHIpe3ZhciBlPS0xLHQ9QXJyYXkoci5zaXplKTtyZXR1cm4gci5mb3JFYWNoKChmdW5jdGlvbihyKXt0WysrZV09cn0pKSx0fXZhciAkPUFycmF5LnByb3RvdHlwZSxaPUZ1bmN0aW9uLnByb3RvdHlwZSxZPU9iamVjdC5wcm90b3R5cGUsSz1JW1wiX19jb3JlLWpzX3NoYXJlZF9fXCJdLFE9ZnVuY3Rpb24oKXt2YXIgcj0vW14uXSskLy5leGVjKEsmJksua2V5cyYmSy5rZXlzLklFX1BST1RPfHxcIlwiKTtyZXR1cm4gcj9cIlN5bWJvbChzcmMpXzEuXCIrcjpcIlwifSgpLFg9Wi50b1N0cmluZyxycj1ZLmhhc093blByb3BlcnR5LGVyPVkudG9TdHJpbmcsdHI9UmVnRXhwKFwiXlwiK1guY2FsbChycikucmVwbGFjZSgvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2csXCJcXFxcJCZcIikucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZyxcIiQxLio/XCIpK1wiJFwiKSxucj1WP0kuQnVmZmVyOnZvaWQgMCxhcj1JLlN5bWJvbCxvcj1JLlVpbnQ4QXJyYXksaXI9SihPYmplY3QuZ2V0UHJvdG90eXBlT2YsT2JqZWN0KSxzcj1PYmplY3QuY3JlYXRlLGNyPVkucHJvcGVydHlJc0VudW1lcmFibGUsbHI9JC5zcGxpY2UsdXI9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxwcj1ucj9uci5pc0J1ZmZlcjp2b2lkIDAsZ3I9SihPYmplY3Qua2V5cyxPYmplY3QpLGZyPUhyKEksXCJEYXRhVmlld1wiKSxkcj1IcihJLFwiTWFwXCIpLGhyPUhyKEksXCJQcm9taXNlXCIpLG1yPUhyKEksXCJTZXRcIiksYnI9SHIoSSxcIldlYWtNYXBcIikseXI9SHIoT2JqZWN0LFwiY3JlYXRlXCIpLHZyPUZyKGZyKSx3cj1GcihkcikscXI9RnIoaHIpLFRyPUZyKG1yKSxBcj1Gcihiciksa3I9YXI/YXIucHJvdG90eXBlOnZvaWQgMCxPcj1rcj9rci52YWx1ZU9mOnZvaWQgMDtmdW5jdGlvbiBTcihyKXt2YXIgZT0tMSx0PXI/ci5sZW5ndGg6MDtmb3IodGhpcy5jbGVhcigpOysrZTx0Oyl7dmFyIG49cltlXTt0aGlzLnNldChuWzBdLG5bMV0pfX1mdW5jdGlvbiBFcihyKXt2YXIgZT0tMSx0PXI/ci5sZW5ndGg6MDtmb3IodGhpcy5jbGVhcigpOysrZTx0Oyl7dmFyIG49cltlXTt0aGlzLnNldChuWzBdLG5bMV0pfX1mdW5jdGlvbiBfcihyKXt2YXIgZT0tMSx0PXI/ci5sZW5ndGg6MDtmb3IodGhpcy5jbGVhcigpOysrZTx0Oyl7dmFyIG49cltlXTt0aGlzLnNldChuWzBdLG5bMV0pfX1mdW5jdGlvbiB4cihyKXt0aGlzLl9fZGF0YV9fPW5ldyBFcihyKX1mdW5jdGlvbiBEcihlLHQpe3ZhciBuPXpyKGUpfHxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiEhZSYmXCJvYmplY3RcIj09cihlKX0oZSkmJkpyKGUpfShlKSYmcnIuY2FsbChlLFwiY2FsbGVlXCIpJiYoIWNyLmNhbGwoZSxcImNhbGxlZVwiKXx8ZXIuY2FsbChlKT09byl9KGUpP2Z1bmN0aW9uKHIsZSl7Zm9yKHZhciB0PS0xLG49QXJyYXkocik7Kyt0PHI7KW5bdF09ZSh0KTtyZXR1cm4gbn0oZS5sZW5ndGgsU3RyaW5nKTpbXSxhPW4ubGVuZ3RoLGk9ISFhO2Zvcih2YXIgcyBpbiBlKSF0JiYhcnIuY2FsbChlLHMpfHxpJiYoXCJsZW5ndGhcIj09c3x8UHIocyxhKSl8fG4ucHVzaChzKTtyZXR1cm4gbn1mdW5jdGlvbiBMcihyLGUsdCl7dmFyIG49cltlXTtyci5jYWxsKHIsZSkmJkdyKG4sdCkmJih2b2lkIDAhPT10fHxlIGluIHIpfHwocltlXT10KX1mdW5jdGlvbiBScihyLGUpe2Zvcih2YXIgdD1yLmxlbmd0aDt0LS07KWlmKEdyKHJbdF1bMF0sZSkpcmV0dXJuIHQ7cmV0dXJuLTF9ZnVuY3Rpb24gTnIocixlLHQsbixhLGYseSl7dmFyIEw7aWYobiYmKEw9Zj9uKHIsYSxmLHkpOm4ocikpLHZvaWQgMCE9PUwpcmV0dXJuIEw7aWYoIVpyKHIpKXJldHVybiByO3ZhciBSPXpyKHIpO2lmKFIpe2lmKEw9ZnVuY3Rpb24ocil7dmFyIGU9ci5sZW5ndGgsdD1yLmNvbnN0cnVjdG9yKGUpO2UmJlwic3RyaW5nXCI9PXR5cGVvZiByWzBdJiZyci5jYWxsKHIsXCJpbmRleFwiKSYmKHQuaW5kZXg9ci5pbmRleCx0LmlucHV0PXIuaW5wdXQpO3JldHVybiB0fShyKSwhZSlyZXR1cm4gZnVuY3Rpb24ocixlKXt2YXIgdD0tMSxuPXIubGVuZ3RoO2V8fChlPUFycmF5KG4pKTtmb3IoOysrdDxuOyllW3RdPXJbdF07cmV0dXJuIGV9KHIsTCl9ZWxzZXt2YXIgTj1WcihyKSxDPU49PWN8fE49PWw7aWYoTXIocikpcmV0dXJuIGZ1bmN0aW9uKHIsZSl7aWYoZSlyZXR1cm4gci5zbGljZSgpO3ZhciB0PW5ldyByLmNvbnN0cnVjdG9yKHIubGVuZ3RoKTtyZXR1cm4gci5jb3B5KHQpLHR9KHIsZSk7aWYoTj09Z3x8Tj09b3x8QyYmIWYpe2lmKEcocikpcmV0dXJuIGY/cjp7fTtpZihMPWZ1bmN0aW9uKHIpe3JldHVyblwiZnVuY3Rpb25cIiE9dHlwZW9mIHIuY29uc3RydWN0b3J8fFdyKHIpP3t9OihlPWlyKHIpLFpyKGUpP3NyKGUpOnt9KTt2YXIgZX0oQz97fTpyKSwhZSlyZXR1cm4gZnVuY3Rpb24ocixlKXtyZXR1cm4gQnIocixVcihyKSxlKX0ocixmdW5jdGlvbihyLGUpe3JldHVybiByJiZCcihlLFlyKGUpLHIpfShMLHIpKX1lbHNle2lmKCFqW05dKXJldHVybiBmP3I6e307TD1mdW5jdGlvbihyLGUsdCxuKXt2YXIgYT1yLmNvbnN0cnVjdG9yO3N3aXRjaChlKXtjYXNlIHY6cmV0dXJuIENyKHIpO2Nhc2UgaTpjYXNlIHM6cmV0dXJuIG5ldyBhKCtyKTtjYXNlIHc6cmV0dXJuIGZ1bmN0aW9uKHIsZSl7dmFyIHQ9ZT9DcihyLmJ1ZmZlcik6ci5idWZmZXI7cmV0dXJuIG5ldyByLmNvbnN0cnVjdG9yKHQsci5ieXRlT2Zmc2V0LHIuYnl0ZUxlbmd0aCl9KHIsbik7Y2FzZSBxOmNhc2UgVDpjYXNlIEE6Y2FzZSBrOmNhc2UgTzpjYXNlIFM6Y2FzZSBFOmNhc2UgXzpjYXNlIHg6cmV0dXJuIGZ1bmN0aW9uKHIsZSl7dmFyIHQ9ZT9DcihyLmJ1ZmZlcik6ci5idWZmZXI7cmV0dXJuIG5ldyByLmNvbnN0cnVjdG9yKHQsci5ieXRlT2Zmc2V0LHIubGVuZ3RoKX0ocixuKTtjYXNlIHU6cmV0dXJuIGZ1bmN0aW9uKHIsZSx0KXtyZXR1cm4gRihlP3QoeihyKSwhMCk6eihyKSxQLG5ldyByLmNvbnN0cnVjdG9yKX0ocixuLHQpO2Nhc2UgcDpjYXNlIG06cmV0dXJuIG5ldyBhKHIpO2Nhc2UgZDpyZXR1cm4gZnVuY3Rpb24ocil7dmFyIGU9bmV3IHIuY29uc3RydWN0b3Ioci5zb3VyY2UsRC5leGVjKHIpKTtyZXR1cm4gZS5sYXN0SW5kZXg9ci5sYXN0SW5kZXgsZX0ocik7Y2FzZSBoOnJldHVybiBmdW5jdGlvbihyLGUsdCl7cmV0dXJuIEYoZT90KE0ociksITApOk0ociksVyxuZXcgci5jb25zdHJ1Y3Rvcil9KHIsbix0KTtjYXNlIGI6cmV0dXJuIG89cixPcj9PYmplY3QoT3IuY2FsbChvKSk6e319dmFyIG99KHIsTixOcixlKX19eXx8KHk9bmV3IHhyKTt2YXIgQj15LmdldChyKTtpZihCKXJldHVybiBCO2lmKHkuc2V0KHIsTCksIVIpdmFyIEk9dD9mdW5jdGlvbihyKXtyZXR1cm4gZnVuY3Rpb24ocixlLHQpe3ZhciBuPWUocik7cmV0dXJuIHpyKHIpP246ZnVuY3Rpb24ocixlKXtmb3IodmFyIHQ9LTEsbj1lLmxlbmd0aCxhPXIubGVuZ3RoOysrdDxuOylyW2ErdF09ZVt0XTtyZXR1cm4gcn0obix0KHIpKX0ocixZcixVcil9KHIpOllyKHIpO3JldHVybiBmdW5jdGlvbihyLGUpe2Zvcih2YXIgdD0tMSxuPXI/ci5sZW5ndGg6MDsrK3Q8biYmITEhPT1lKHJbdF0sdCxyKTspO30oSXx8ciwoZnVuY3Rpb24oYSxvKXtJJiYoYT1yW289YV0pLExyKEwsbyxOcihhLGUsdCxuLG8scix5KSl9KSksTH1mdW5jdGlvbiBqcihyKXtyZXR1cm4hKCFacihyKXx8ZnVuY3Rpb24ocil7cmV0dXJuISFRJiZRIGluIHJ9KHIpKSYmKCRyKHIpfHxHKHIpP3RyOlIpLnRlc3QoRnIocikpfWZ1bmN0aW9uIENyKHIpe3ZhciBlPW5ldyByLmNvbnN0cnVjdG9yKHIuYnl0ZUxlbmd0aCk7cmV0dXJuIG5ldyBvcihlKS5zZXQobmV3IG9yKHIpKSxlfWZ1bmN0aW9uIEJyKHIsZSx0LG4pe3R8fCh0PXt9KTtmb3IodmFyIGE9LTEsbz1lLmxlbmd0aDsrK2E8bzspe3ZhciBpPWVbYV0scz1uP24odFtpXSxyW2ldLGksdCxyKTp2b2lkIDA7THIodCxpLHZvaWQgMD09PXM/cltpXTpzKX1yZXR1cm4gdH1mdW5jdGlvbiBJcihlLHQpe3ZhciBuLGEsbz1lLl9fZGF0YV9fO3JldHVybihcInN0cmluZ1wiPT0oYT1yKG49dCkpfHxcIm51bWJlclwiPT1hfHxcInN5bWJvbFwiPT1hfHxcImJvb2xlYW5cIj09YT9cIl9fcHJvdG9fX1wiIT09bjpudWxsPT09bik/b1tcInN0cmluZ1wiPT10eXBlb2YgdD9cInN0cmluZ1wiOlwiaGFzaFwiXTpvLm1hcH1mdW5jdGlvbiBIcihyLGUpe3ZhciB0PWZ1bmN0aW9uKHIsZSl7cmV0dXJuIG51bGw9PXI/dm9pZCAwOnJbZV19KHIsZSk7cmV0dXJuIGpyKHQpP3Q6dm9pZCAwfVNyLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189eXI/eXIobnVsbCk6e319LFNyLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMuaGFzKHIpJiZkZWxldGUgdGhpcy5fX2RhdGFfX1tyXX0sU3IucHJvdG90eXBlLmdldD1mdW5jdGlvbihyKXt2YXIgZT10aGlzLl9fZGF0YV9fO2lmKHlyKXt2YXIgdD1lW3JdO3JldHVybiB0PT09bj92b2lkIDA6dH1yZXR1cm4gcnIuY2FsbChlLHIpP2Vbcl06dm9pZCAwfSxTci5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHIpe3ZhciBlPXRoaXMuX19kYXRhX187cmV0dXJuIHlyP3ZvaWQgMCE9PWVbcl06cnIuY2FsbChlLHIpfSxTci5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHIsZSl7cmV0dXJuIHRoaXMuX19kYXRhX19bcl09eXImJnZvaWQgMD09PWU/bjplLHRoaXN9LEVyLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuX19kYXRhX189W119LEVyLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24ocil7dmFyIGU9dGhpcy5fX2RhdGFfXyx0PVJyKGUscik7cmV0dXJuISh0PDApJiYodD09ZS5sZW5ndGgtMT9lLnBvcCgpOmxyLmNhbGwoZSx0LDEpLCEwKX0sRXIucHJvdG90eXBlLmdldD1mdW5jdGlvbihyKXt2YXIgZT10aGlzLl9fZGF0YV9fLHQ9UnIoZSxyKTtyZXR1cm4gdDwwP3ZvaWQgMDplW3RdWzFdfSxFci5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHIpe3JldHVybiBScih0aGlzLl9fZGF0YV9fLHIpPi0xfSxFci5wcm90b3R5cGUuc2V0PWZ1bmN0aW9uKHIsZSl7dmFyIHQ9dGhpcy5fX2RhdGFfXyxuPVJyKHQscik7cmV0dXJuIG48MD90LnB1c2goW3IsZV0pOnRbbl1bMV09ZSx0aGlzfSxfci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPXtoYXNoOm5ldyBTcixtYXA6bmV3KGRyfHxFciksc3RyaW5nOm5ldyBTcn19LF9yLnByb3RvdHlwZS5kZWxldGU9ZnVuY3Rpb24ocil7cmV0dXJuIElyKHRoaXMscikuZGVsZXRlKHIpfSxfci5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKHIpe3JldHVybiBJcih0aGlzLHIpLmdldChyKX0sX3IucHJvdG90eXBlLmhhcz1mdW5jdGlvbihyKXtyZXR1cm4gSXIodGhpcyxyKS5oYXMocil9LF9yLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24ocixlKXtyZXR1cm4gSXIodGhpcyxyKS5zZXQocixlKSx0aGlzfSx4ci5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLl9fZGF0YV9fPW5ldyBFcn0seHIucHJvdG90eXBlLmRlbGV0ZT1mdW5jdGlvbihyKXtyZXR1cm4gdGhpcy5fX2RhdGFfXy5kZWxldGUocil9LHhyLnByb3RvdHlwZS5nZXQ9ZnVuY3Rpb24ocil7cmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KHIpfSx4ci5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHIpe3JldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhyKX0seHIucHJvdG90eXBlLnNldD1mdW5jdGlvbihyLGUpe3ZhciB0PXRoaXMuX19kYXRhX187aWYodCBpbnN0YW5jZW9mIEVyKXt2YXIgbj10Ll9fZGF0YV9fO2lmKCFkcnx8bi5sZW5ndGg8MTk5KXJldHVybiBuLnB1c2goW3IsZV0pLHRoaXM7dD10aGlzLl9fZGF0YV9fPW5ldyBfcihuKX1yZXR1cm4gdC5zZXQocixlKSx0aGlzfTt2YXIgVXI9dXI/Sih1cixPYmplY3QpOmZ1bmN0aW9uKCl7cmV0dXJuW119LFZyPWZ1bmN0aW9uKHIpe3JldHVybiBlci5jYWxsKHIpfTtmdW5jdGlvbiBQcihyLGUpe3JldHVybiEhKGU9bnVsbD09ZT9hOmUpJiYoXCJudW1iZXJcIj09dHlwZW9mIHJ8fE4udGVzdChyKSkmJnI+LTEmJnIlMT09MCYmcjxlfWZ1bmN0aW9uIFdyKHIpe3ZhciBlPXImJnIuY29uc3RydWN0b3I7cmV0dXJuIHI9PT0oXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5wcm90b3R5cGV8fFkpfWZ1bmN0aW9uIEZyKHIpe2lmKG51bGwhPXIpe3RyeXtyZXR1cm4gWC5jYWxsKHIpfWNhdGNoKHIpe310cnl7cmV0dXJuIHIrXCJcIn1jYXRjaChyKXt9fXJldHVyblwiXCJ9ZnVuY3Rpb24gR3IocixlKXtyZXR1cm4gcj09PWV8fHIhPXImJmUhPWV9KGZyJiZWcihuZXcgZnIobmV3IEFycmF5QnVmZmVyKDEpKSkhPXd8fGRyJiZWcihuZXcgZHIpIT11fHxociYmVnIoaHIucmVzb2x2ZSgpKSE9Znx8bXImJlZyKG5ldyBtcikhPWh8fGJyJiZWcihuZXcgYnIpIT15KSYmKFZyPWZ1bmN0aW9uKHIpe3ZhciBlPWVyLmNhbGwociksdD1lPT1nP3IuY29uc3RydWN0b3I6dm9pZCAwLG49dD9Gcih0KTp2b2lkIDA7aWYobilzd2l0Y2gobil7Y2FzZSB2cjpyZXR1cm4gdztjYXNlIHdyOnJldHVybiB1O2Nhc2UgcXI6cmV0dXJuIGY7Y2FzZSBUcjpyZXR1cm4gaDtjYXNlIEFyOnJldHVybiB5fXJldHVybiBlfSk7dmFyIHpyPUFycmF5LmlzQXJyYXk7ZnVuY3Rpb24gSnIocil7cmV0dXJuIG51bGwhPXImJmZ1bmN0aW9uKHIpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiByJiZyPi0xJiZyJTE9PTAmJnI8PWF9KHIubGVuZ3RoKSYmISRyKHIpfXZhciBNcj1wcnx8ZnVuY3Rpb24oKXtyZXR1cm4hMX07ZnVuY3Rpb24gJHIocil7dmFyIGU9WnIocik/ZXIuY2FsbChyKTpcIlwiO3JldHVybiBlPT1jfHxlPT1sfWZ1bmN0aW9uIFpyKGUpe3ZhciB0PXIoZSk7cmV0dXJuISFlJiYoXCJvYmplY3RcIj09dHx8XCJmdW5jdGlvblwiPT10KX1mdW5jdGlvbiBZcihyKXtyZXR1cm4gSnIocik/RHIocik6ZnVuY3Rpb24ocil7aWYoIVdyKHIpKXJldHVybiBncihyKTt2YXIgZT1bXTtmb3IodmFyIHQgaW4gT2JqZWN0KHIpKXJyLmNhbGwocix0KSYmXCJjb25zdHJ1Y3RvclwiIT10JiZlLnB1c2godCk7cmV0dXJuIGV9KHIpfWUuZXhwb3J0cz1mdW5jdGlvbihyKXtyZXR1cm4gTnIociwhMCwhMCl9fSkpO2Z1bmN0aW9uIG1lKHIsZSl7cmV0dXJuIGZ1bmN0aW9uKHIsZSx0KXtpZihcInN0cmluZ1wiIT10eXBlb2Ygcnx8IXIubGVuZ3RoKXJldHVybiBudWxsO2lmKGUmJlwibnVtYmVyXCI9PXR5cGVvZiBlfHwoZT0wKSwhcltlKzFdKXJldHVybiBudWxsO2lmKHJbZSsxXSYmKCF0JiZyW2UrMV0udHJpbSgpfHx0JiYocltlKzFdLnRyaW0oKXx8XCJcXG5cXHJcIi5pbmNsdWRlcyhyW2UrMV0pKSkpcmV0dXJuIGUrMTtpZihyW2UrMl0mJighdCYmcltlKzJdLnRyaW0oKXx8dCYmKHJbZSsyXS50cmltKCl8fFwiXFxuXFxyXCIuaW5jbHVkZXMocltlKzJdKSkpKXJldHVybiBlKzI7Zm9yKHZhciBuPWUrMSxhPXIubGVuZ3RoO248YTtuKyspaWYocltuXSYmKCF0JiZyW25dLnRyaW0oKXx8dCYmKHJbbl0udHJpbSgpfHxcIlxcblxcclwiLmluY2x1ZGVzKHJbbl0pKSkpcmV0dXJuIG47cmV0dXJuIG51bGx9KHIsZSwhMSl9ZnVuY3Rpb24gYmUoZSx0KXtpZighZSlyZXR1cm5bXTtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlLmZpbHRlcigoZnVuY3Rpb24ocil7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHImJnIudHJpbSgpfSkpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBlLnRyaW0oKT9bZV06W107dGhyb3cgbmV3IFR5cGVFcnJvcihcInN0cmluZy1zdHJpcC1odG1sL3N0cmlwSHRtbCgpOiBbVEhST1dfSURfMDNdIFwiLmNvbmNhdCh0LFwiIG11c3QgYmUgYXJyYXkgY29udGFpbmluZyB6ZXJvIG9yIG1vcmUgc3RyaW5ncyBvciBzb21ldGhpbmcgZmFsc2V5LiBDdXJyZW50bHkgaXQncyBlcXVhbCB0bzogXCIpLmNvbmNhdChlLFwiLCB0aGF0IGEgdHlwZSBvZiBcIikuY29uY2F0KHIoZSksXCIuXCIpKX1yZXR1cm4gZnVuY3Rpb24gZSh0LG4pe3ZhciBzLGM9RGF0ZS5ub3coKSxsPW5ldyBTZXQoW1wiIWRvY3R5cGVcIixcImFiYnJcIixcImFkZHJlc3NcIixcImFyZWFcIixcImFydGljbGVcIixcImFzaWRlXCIsXCJhdWRpb1wiLFwiYmFzZVwiLFwiYmRpXCIsXCJiZG9cIixcImJsb2NrcXVvdGVcIixcImJvZHlcIixcImJyXCIsXCJidXR0b25cIixcImNhbnZhc1wiLFwiY2FwdGlvblwiLFwiY2l0ZVwiLFwiY29kZVwiLFwiY29sXCIsXCJjb2xncm91cFwiLFwiZGF0YVwiLFwiZGF0YWxpc3RcIixcImRkXCIsXCJkZWxcIixcImRldGFpbHNcIixcImRmblwiLFwiZGlhbG9nXCIsXCJkaXZcIixcImRsXCIsXCJkb2N0eXBlXCIsXCJkdFwiLFwiZW1cIixcImVtYmVkXCIsXCJmaWVsZHNldFwiLFwiZmlnY2FwdGlvblwiLFwiZmlndXJlXCIsXCJmb290ZXJcIixcImZvcm1cIixcImgxXCIsXCJoMlwiLFwiaDNcIixcImg0XCIsXCJoNVwiLFwiaDZcIixcImhlYWRcIixcImhlYWRlclwiLFwiaGdyb3VwXCIsXCJoclwiLFwiaHRtbFwiLFwiaWZyYW1lXCIsXCJpbWdcIixcImlucHV0XCIsXCJpbnNcIixcImtiZFwiLFwia2V5Z2VuXCIsXCJsYWJlbFwiLFwibGVnZW5kXCIsXCJsaVwiLFwibGlua1wiLFwibWFpblwiLFwibWFwXCIsXCJtYXJrXCIsXCJtYXRoXCIsXCJtZW51XCIsXCJtZW51aXRlbVwiLFwibWV0YVwiLFwibWV0ZXJcIixcIm5hdlwiLFwibm9zY3JpcHRcIixcIm9iamVjdFwiLFwib2xcIixcIm9wdGdyb3VwXCIsXCJvcHRpb25cIixcIm91dHB1dFwiLFwicGFyYW1cIixcInBpY3R1cmVcIixcInByZVwiLFwicHJvZ3Jlc3NcIixcInJiXCIsXCJycFwiLFwicnRcIixcInJ0Y1wiLFwicnVieVwiLFwic2FtcFwiLFwic2NyaXB0XCIsXCJzZWN0aW9uXCIsXCJzZWxlY3RcIixcInNsb3RcIixcInNtYWxsXCIsXCJzb3VyY2VcIixcInNwYW5cIixcInN0cm9uZ1wiLFwic3R5bGVcIixcInN1YlwiLFwic3VtbWFyeVwiLFwic3VwXCIsXCJzdmdcIixcInRhYmxlXCIsXCJ0Ym9keVwiLFwidGRcIixcInRlbXBsYXRlXCIsXCJ0ZXh0YXJlYVwiLFwidGZvb3RcIixcInRoXCIsXCJ0aGVhZFwiLFwidGltZVwiLFwidGl0bGVcIixcInRyXCIsXCJ0cmFja1wiLFwidWxcIixcInZhclwiLFwidmlkZW9cIixcIndiclwiLFwieG1sXCJdKSx1PW5ldyBTZXQoW1wiYVwiLFwiYlwiLFwiaVwiLFwicFwiLFwicVwiLFwic1wiLFwidVwiXSkscD1uZXcgU2V0KFtcIi5cIixcIixcIixcIj9cIixcIjtcIixcIilcIixcIuKAplwiLCdcIicsXCLCu1wiXSksZz1uZXcgU2V0KFtcInNjcmlwdFwiLFwic3R5bGVcIixcInhtbFwiXSksZD1bXSxoPVtdLG09W107cz17YXR0cmlidXRlczpbXX07dmFyIGIseT1udWxsLHY9bnVsbCxxPXt9LFQ9e30sQT1cIlwiLGs9bnVsbDtmdW5jdGlvbiBPKHIsZSxuKXtpZihBcnJheS5pc0FycmF5KGUuc3RyaXBUb2dldGhlcldpdGhUaGVpckNvbnRlbnRzKSYmKGUuc3RyaXBUb2dldGhlcldpdGhUaGVpckNvbnRlbnRzLmluY2x1ZGVzKHMubmFtZSl8fGUuc3RyaXBUb2dldGhlcldpdGhUaGVpckNvbnRlbnRzLmluY2x1ZGVzKFwiKlwiKSkpaWYoQXJyYXkuaXNBcnJheShkKSYmZC5zb21lKChmdW5jdGlvbihlKXtyZXR1cm4gZS5uYW1lPT09cy5uYW1lJiZlLmxhc3RDbG9zaW5nQnJhY2tldEF0PHJ9KSkpZm9yKHZhciBhPWZ1bmN0aW9uKGEpe2lmKGRbYV0ubmFtZT09PXMubmFtZSl7KGUuc3RyaXBUb2dldGhlcldpdGhUaGVpckNvbnRlbnRzLmluY2x1ZGVzKHMubmFtZSl8fGUuc3RyaXBUb2dldGhlcldpdGhUaGVpckNvbnRlbnRzLmluY2x1ZGVzKFwiKlwiKSkmJihtPW0uZmlsdGVyKChmdW5jdGlvbihlKXt2YXIgdD1vKGUsMiksbj10WzBdLGk9dFsxXTtyZXR1cm4objxkW2FdLmxhc3RPcGVuaW5nQnJhY2tldEF0fHxuPj1yKzEpJiYoaTw9ZFthXS5sYXN0T3BlbmluZ0JyYWNrZXRBdHx8aT5yKzEpfSkpKTt2YXIgaT1yKzE7cmV0dXJuIHMubGFzdENsb3NpbmdCcmFja2V0QXQmJihpPXMubGFzdENsb3NpbmdCcmFja2V0QXQrMSksbS5wdXNoKFtkW2FdLmxhc3RPcGVuaW5nQnJhY2tldEF0LGldKSxwLmhhcyh0W3JdKT9lLmNiKHt0YWc6cyxkZWxldGVGcm9tOmRbYV0ubGFzdE9wZW5pbmdCcmFja2V0QXQsZGVsZXRlVG86cisxLGluc2VydDpudWxsLHJhbmdlc0FycjpuLHByb3Bvc2VkUmV0dXJuOltkW2FdLmxhc3RPcGVuaW5nQnJhY2tldEF0LHIsbnVsbF19KTplLmNiKHt0YWc6cyxkZWxldGVGcm9tOmRbYV0ubGFzdE9wZW5pbmdCcmFja2V0QXQsZGVsZXRlVG86cixpbnNlcnQ6XCJcIixyYW5nZXNBcnI6bixwcm9wb3NlZFJldHVybjpbZFthXS5sYXN0T3BlbmluZ0JyYWNrZXRBdCxyLFwiXCJdfSksZC5zcGxpY2UoYSwxKSxcImJyZWFrXCJ9fSxpPWQubGVuZ3RoO2ktLTspe2lmKFwiYnJlYWtcIj09PWEoaSkpYnJlYWt9ZWxzZSBkLnB1c2gocyl9ZnVuY3Rpb24gUyhyLGUsdCxuLGEsbyl7dmFyIGk9XCJcIjtpZih0PGEmJihpKz1yLnNsaWNlKHQsYSkpLG4+bysxKXt2YXIgcz1yLnNsaWNlKG8rMSxuKTtzLmluY2x1ZGVzKFwiXFxuXCIpJiZcIjxcIj09PXJbbl0/aSs9XCIgXCI6aSs9c31pZighcC5oYXMocltlXSkmJlwiIVwiIT09cltlXSl7dmFyIGM9aS5tYXRjaCgvXFxuL2cpO3JldHVybiBBcnJheS5pc0FycmF5KGMpJiZjLmxlbmd0aD8xPT09Yy5sZW5ndGg/XCJcXG5cIjoyPT09Yy5sZW5ndGg/XCJcXG5cXG5cIjpcIlxcblxcblxcblwiOlwiIFwifXJldHVyblwiXCJ9ZnVuY3Rpb24gRShyKXtpZihyLmR1bXBMaW5rSHJlZnNOZWFyYnkuZW5hYmxlZCYmT2JqZWN0LmtleXMoVCkubGVuZ3RoJiZULnRhZ05hbWU9PT1zLm5hbWUmJnMubGFzdE9wZW5pbmdCcmFja2V0QXQmJihULm9wZW5pbmdUYWdFbmRzJiZzLmxhc3RPcGVuaW5nQnJhY2tldEF0PlQub3BlbmluZ1RhZ0VuZHN8fCFULm9wZW5pbmdUYWdFbmRzKSYmKGI9ITApLGIpe3ZhciBlPXIuZHVtcExpbmtIcmVmc05lYXJieS5wdXRPbk5ld0xpbmU/XCJcXG5cXG5cIjpcIlwiO0E9XCJcIi5jb25jYXQoZSkuY29uY2F0KFQuaHJlZlZhbHVlKS5jb25jYXQoZSl9fWlmKFwic3RyaW5nXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJzdHJpbmctc3RyaXAtaHRtbC9zdHJpcEh0bWwoKTogW1RIUk9XX0lEXzAxXSBJbnB1dCBtdXN0IGJlIHN0cmluZyEgQ3VycmVudGx5IGl0J3M6IFwiLmNvbmNhdChyKHQpLnRvTG93ZXJDYXNlKCksXCIsIGVxdWFsIHRvOlxcblwiKS5jb25jYXQoSlNPTi5zdHJpbmdpZnkodCxudWxsLDQpKSk7aWYobiYmIUQobikpdGhyb3cgbmV3IFR5cGVFcnJvcihcInN0cmluZy1zdHJpcC1odG1sL3N0cmlwSHRtbCgpOiBbVEhST1dfSURfMDJdIE9wdGlvbmFsIE9wdGlvbnMgT2JqZWN0IG11c3QgYmUgYSBwbGFpbiBvYmplY3QhIEN1cnJlbnRseSBpdCdzOiBcIi5jb25jYXQocihuKS50b0xvd2VyQ2FzZSgpLFwiLCBlcXVhbCB0bzpcXG5cIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KG4sbnVsbCw0KSkpO2Z1bmN0aW9uIF8oKXtiJiYoVD17fSxiPSExKX12YXIgeD17aWdub3JlVGFnczpbXSxvbmx5U3RyaXBUYWdzOltdLHN0cmlwVG9nZXRoZXJXaXRoVGhlaXJDb250ZW50czppKGcpLHNraXBIdG1sRGVjb2Rpbmc6ITEsdHJpbU9ubHlTcGFjZXM6ITEsZHVtcExpbmtIcmVmc05lYXJieTp7ZW5hYmxlZDohMSxwdXRPbk5ld0xpbmU6ITEsd3JhcEhlYWRzOlwiXCIsd3JhcFRhaWxzOlwiXCJ9LGNiOm51bGx9LEw9YShhKHt9LHgpLG4pO2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChMLFwicmV0dXJuUmFuZ2VzT25seVwiKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwic3RyaW5nLXN0cmlwLWh0bWwvc3RyaXBIdG1sKCk6IFtUSFJPV19JRF8wM10gb3B0cy5yZXR1cm5SYW5nZXNPbmx5IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgQVBJIHNpbmNlIHYuNSByZWxlYXNlLlwiKTtMLmlnbm9yZVRhZ3M9YmUoTC5pZ25vcmVUYWdzLFwib3B0cy5pZ25vcmVUYWdzXCIpLEwub25seVN0cmlwVGFncz1iZShMLm9ubHlTdHJpcFRhZ3MsXCJvcHRzLm9ubHlTdHJpcFRhZ3NcIik7dmFyIFI9ISFMLm9ubHlTdHJpcFRhZ3MubGVuZ3RoO2lmKEwub25seVN0cmlwVGFncy5sZW5ndGgmJkwuaWdub3JlVGFncy5sZW5ndGgmJihMLm9ubHlTdHJpcFRhZ3M9RnIuYXBwbHkodm9pZCAwLFtMLm9ubHlTdHJpcFRhZ3NdLmNvbmNhdChpKEwuaWdub3JlVGFncykpKSksRChMLmR1bXBMaW5rSHJlZnNOZWFyYnkpfHwoTC5kdW1wTGlua0hyZWZzTmVhcmJ5PWEoe30seC5kdW1wTGlua0hyZWZzTmVhcmJ5KSksTC5kdW1wTGlua0hyZWZzTmVhcmJ5PXguZHVtcExpbmtIcmVmc05lYXJieSxEKG4pJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixcImR1bXBMaW5rSHJlZnNOZWFyYnlcIikmJm51bGwhPW4uZHVtcExpbmtIcmVmc05lYXJieSlpZihEKG4uZHVtcExpbmtIcmVmc05lYXJieSkpTC5kdW1wTGlua0hyZWZzTmVhcmJ5PWEoYSh7fSx4LmR1bXBMaW5rSHJlZnNOZWFyYnkpLG4uZHVtcExpbmtIcmVmc05lYXJieSk7ZWxzZSBpZihuLmR1bXBMaW5rSHJlZnNOZWFyYnkpdGhyb3cgbmV3IFR5cGVFcnJvcihcInN0cmluZy1zdHJpcC1odG1sL3N0cmlwSHRtbCgpOiBbVEhST1dfSURfMDRdIE9wdGlvbmFsIE9wdGlvbnMgT2JqZWN0J3Mga2V5IGR1bXBMaW5rSHJlZnNOZWFyYnkgd2FzIHNldCB0byBcIi5jb25jYXQocihuLmR1bXBMaW5rSHJlZnNOZWFyYnkpLFwiLCBlcXVhbCB0byBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KG4uZHVtcExpbmtIcmVmc05lYXJieSxudWxsLDQpLFwiLiBUaGUgb25seSBhbGxvd2VkIHZhbHVlIGlzIGEgcGxhaW4gb2JqZWN0LiBTZWUgdGhlIEFQSSByZWZlcmVuY2UuXCIpKTtMLnN0cmlwVG9nZXRoZXJXaXRoVGhlaXJDb250ZW50cz9cInN0cmluZ1wiPT10eXBlb2YgTC5zdHJpcFRvZ2V0aGVyV2l0aFRoZWlyQ29udGVudHMmJkwuc3RyaXBUb2dldGhlcldpdGhUaGVpckNvbnRlbnRzLmxlbmd0aD4wJiYoTC5zdHJpcFRvZ2V0aGVyV2l0aFRoZWlyQ29udGVudHM9W0wuc3RyaXBUb2dldGhlcldpdGhUaGVpckNvbnRlbnRzXSk6TC5zdHJpcFRvZ2V0aGVyV2l0aFRoZWlyQ29udGVudHM9W107dmFyIE49e307aWYoTC5zdHJpcFRvZ2V0aGVyV2l0aFRoZWlyQ29udGVudHMmJkFycmF5LmlzQXJyYXkoTC5zdHJpcFRvZ2V0aGVyV2l0aFRoZWlyQ29udGVudHMpJiZMLnN0cmlwVG9nZXRoZXJXaXRoVGhlaXJDb250ZW50cy5sZW5ndGgmJiFMLnN0cmlwVG9nZXRoZXJXaXRoVGhlaXJDb250ZW50cy5ldmVyeSgoZnVuY3Rpb24ocixlKXtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2Ygcnx8KE4uZWw9cixOLmk9ZSwhMSl9KSkpdGhyb3cgbmV3IFR5cGVFcnJvcihcInN0cmluZy1zdHJpcC1odG1sL3N0cmlwSHRtbCgpOiBbVEhST1dfSURfMDVdIE9wdGlvbmFsIE9wdGlvbnMgT2JqZWN0J3Mga2V5IHN0cmlwVG9nZXRoZXJXaXRoVGhlaXJDb250ZW50cyB3YXMgc2V0IHRvIGNvbnRhaW4gbm90IGp1c3Qgc3RyaW5nIGVsZW1lbnRzISBGb3IgZXhhbXBsZSwgZWxlbWVudCBhdCBpbmRleCBcIi5jb25jYXQoTi5pLFwiIGhhcyBhIHZhbHVlIFwiKS5jb25jYXQoTi5lbCxcIiB3aGljaCBpcyBub3Qgc3RyaW5nIGJ1dCBcIikuY29uY2F0KHIoTi5lbCkudG9Mb3dlckNhc2UoKSxcIi5cIikpO0wuY2J8fChMLmNiPWZ1bmN0aW9uKHIpe3ZhciBlPXIucmFuZ2VzQXJyLHQ9ci5wcm9wb3NlZFJldHVybjtlLnB1c2guYXBwbHkoZSxpKHQpKX0pO3ZhciBqPW5ldyB3KHtsaW1pdFRvQmVBZGRlZFdoaXRlc3BhY2U6ITAsbGltaXRMaW5lYnJlYWtzQ291bnQ6Mn0pO2lmKCFMLnNraXBIdG1sRGVjb2RpbmcpZm9yKDt0IT09aGUuZGVjb2RlKHQpOyl0PWhlLmRlY29kZSh0KTtmb3IodmFyIEM9ZnVuY3Rpb24ocixuKXtpZihPYmplY3Qua2V5cyhzKS5sZW5ndGg+MSYmcy5sYXN0Q2xvc2luZ0JyYWNrZXRBdCYmcy5sYXN0Q2xvc2luZ0JyYWNrZXRBdDxyJiZcIiBcIiE9PXRbcl0mJm51bGw9PT1rJiYoaz1yKSxcIj5cIj09PXRbcl0mJighc3x8T2JqZWN0LmtleXMocykubGVuZ3RoPDIpJiZyPjEpZm9yKHZhciBhPXI7YS0tOyl7aWYodm9pZCAwPT09dFthLTFdfHxcIj5cIj09PXRbYV0paWYoXCJicmVha1wiPT09ZnVuY3Rpb24oKXt2YXIgbz12b2lkIDA9PT10W2EtMV0/YTphKzEsYz10LnNsaWNlKG8scisxKTtpZih0IT09XCI8XCIuY29uY2F0KGlyKGMudHJpbSgpLFwiLz5cIiksXCI+XCIpJiZpKGwpLnNvbWUoKGZ1bmN0aW9uKHIpe3JldHVybiBpcihjLnRyaW0oKS5zcGxpdCgvXFxzKy8pLmZpbHRlcigoZnVuY3Rpb24ocil7cmV0dXJuIHIudHJpbSgpfSkpLmZpbHRlcigoZnVuY3Rpb24ocixlKXtyZXR1cm4gMD09PWV9KSksXCIvPlwiKS50b0xvd2VyQ2FzZSgpPT09cn0pKSYmXCJcIj09PWUoXCI8XCIuY29uY2F0KGMudHJpbSgpLFwiPlwiKSxMKS5yZXN1bHQpe2gubGVuZ3RoJiZoW2gubGVuZ3RoLTFdWzBdPT09cy5sYXN0T3BlbmluZ0JyYWNrZXRBdHx8aC5wdXNoKFtvLHIrMV0pLG0ubGVuZ3RoJiZtW20ubGVuZ3RoLTFdWzBdPT09cy5sYXN0T3BlbmluZ0JyYWNrZXRBdHx8bS5wdXNoKFtvLHIrMV0pO3ZhciB1PVModCxyLG8scisxLG8scisxKSxwPXIrMTtpZih0W3BdJiYhdFtwXS50cmltKCkpZm9yKHZhciBnPXA7ZzxuO2crKylpZih0W2ddLnRyaW0oKSl7cD1nO2JyZWFrfUwuY2Ioe3RhZzpzLGRlbGV0ZUZyb206byxkZWxldGVUbzpwLGluc2VydDp1LHJhbmdlc0FycjpqLHByb3Bvc2VkUmV0dXJuOltvLHAsdV19KX1yZXR1cm5cImJyZWFrXCJ9KCkpYnJlYWt9dmFyIGMscDsoXCIvXCIhPT10W3JdfHxzLnF1b3RlcyYmcy5xdW90ZXMudmFsdWV8fCFOdW1iZXIuaXNJbnRlZ2VyKHMubGFzdE9wZW5pbmdCcmFja2V0QXQpfHxOdW1iZXIuaXNJbnRlZ2VyKHMubGFzdENsb3NpbmdCcmFja2V0QXQpfHwocy5zbGFzaFByZXNlbnQ9ciksJ1wiJz09PXRbcl18fFwiJ1wiPT09dFtyXSkmJihzLm5hbWVTdGFydHMmJnMucXVvdGVzJiZzLnF1b3Rlcy52YWx1ZSYmcy5xdW90ZXMudmFsdWU9PT10W3JdPyhxLnZhbHVlRW5kcz1yLHEudmFsdWU9dC5zbGljZShxLnZhbHVlU3RhcnRzLHIpLHMuYXR0cmlidXRlcy5wdXNoKHEpLHE9e30scy5xdW90ZXM9dm9pZCAwLEwuZHVtcExpbmtIcmVmc05lYXJieS5lbmFibGVkJiZzLmF0dHJpYnV0ZXMuc29tZSgoZnVuY3Rpb24oZSl7aWYoZS5uYW1lJiZcImhyZWZcIj09PWUubmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiBjPVwiXCIuY29uY2F0KEwuZHVtcExpbmtIcmVmc05lYXJieS53cmFwSGVhZHN8fFwiXCIpLmNvbmNhdChlLnZhbHVlKS5jb25jYXQoTC5kdW1wTGlua0hyZWZzTmVhcmJ5LndyYXBUYWlsc3x8XCJcIiksQj1yLCEwfSkpJiYoVD17dGFnTmFtZTpzLm5hbWUsaHJlZlZhbHVlOmN9KSk6IXMucXVvdGVzJiZzLm5hbWVTdGFydHMmJihzLnF1b3Rlcz17fSxzLnF1b3Rlcy52YWx1ZT10W3JdLHMucXVvdGVzLnN0YXJ0PXIscS5uYW1lU3RhcnRzJiZxLm5hbWVFbmRzJiZxLm5hbWVFbmRzPHImJnEubmFtZVN0YXJ0czxyJiYhcS52YWx1ZVN0YXJ0cyYmKHEubmFtZT10LnNsaWNlKHEubmFtZVN0YXJ0cyxxLm5hbWVFbmRzKSkpKTtpZighKHZvaWQgMD09PXMubmFtZVN0YXJ0c3x8dm9pZCAwIT09cy5uYW1lRW5kc3x8dFtyXS50cmltKCkmJihwPXRbcl0sL1stX0EtWmEtejAtOV0vLnRlc3QocCkpKSl7aWYocy5uYW1lRW5kcz1yLHMubmFtZT10LnNsaWNlKHMubmFtZVN0YXJ0cyxzLm5hbWVFbmRzKyhcIj5cIiE9PXRbcl0mJlwiL1wiIT09dFtyXSYmdm9pZCAwPT09dFtyKzFdPzE6MCkpLFwiIVwiIT09dFtzLm5hbWVTdGFydHMtMV0mJiFzLm5hbWUucmVwbGFjZSgvLS9nLFwiXCIpLmxlbmd0aHx8L15cXGQrJC8udGVzdChzLm5hbWVbMF0pKXJldHVybiBzPXt9LEI9cixcImNvbnRpbnVlXCI7aWYoXCI8XCI9PT10W3JdKXtFKEwpO3ZhciBnPVModCxyLHMubGVmdE91dGVyV2hpdGVzcGFjZSxyLHMubGFzdE9wZW5pbmdCcmFja2V0QXQscik7KEwuc3RyaXBUb2dldGhlcldpdGhUaGVpckNvbnRlbnRzLmluY2x1ZGVzKHMubmFtZSl8fEwuc3RyaXBUb2dldGhlcldpdGhUaGVpckNvbnRlbnRzLmluY2x1ZGVzKFwiKlwiKSkmJihtPW0uZmlsdGVyKChmdW5jdGlvbihlKXt2YXIgdD1vKGUsMiksbj10WzBdLGE9dFsxXTtyZXR1cm4hKG49PT1zLmxlZnRPdXRlcldoaXRlc3BhY2UmJmE9PT1yKX0pKSksTC5jYih7dGFnOnMsZGVsZXRlRnJvbTpzLmxlZnRPdXRlcldoaXRlc3BhY2UsZGVsZXRlVG86cixpbnNlcnQ6XCJcIi5jb25jYXQoZykuY29uY2F0KEEpLmNvbmNhdChnKSxyYW5nZXNBcnI6aixwcm9wb3NlZFJldHVybjpbcy5sZWZ0T3V0ZXJXaGl0ZXNwYWNlLHIsXCJcIi5jb25jYXQoZykuY29uY2F0KEEpLmNvbmNhdChnKV19KSxfKCksTyhyLEwsail9fWlmKHMucXVvdGVzJiZzLnF1b3Rlcy5zdGFydCYmcy5xdW90ZXMuc3RhcnQ8ciYmIXMucXVvdGVzLmVuZCYmcS5uYW1lRW5kcyYmcS5lcXVhbHNBdCYmIXEudmFsdWVTdGFydHMmJihxLnZhbHVlU3RhcnRzPXIpLHMucXVvdGVzfHwhcS5uYW1lRW5kc3x8XCI9XCIhPT10W3JdfHxxLnZhbHVlU3RhcnRzfHxxLmVxdWFsc0F0fHwocS5lcXVhbHNBdD1yKSwhcy5xdW90ZXMmJnEubmFtZVN0YXJ0cyYmcS5uYW1lRW5kcyYmIXEudmFsdWVTdGFydHMmJnRbcl0udHJpbSgpJiZcIj1cIiE9PXRbcl0mJihzLmF0dHJpYnV0ZXMucHVzaChxKSxxPXt9KSxzLnF1b3Rlc3x8IXEubmFtZVN0YXJ0c3x8cS5uYW1lRW5kc3x8KHRbcl0udHJpbSgpP1wiPVwiPT09dFtyXT9xLmVxdWFsc0F0fHwocS5uYW1lRW5kcz1yLHEuZXF1YWxzQXQ9cixxLm5hbWU9dC5zbGljZShxLm5hbWVTdGFydHMscS5uYW1lRW5kcykpOihcIi9cIj09PXRbcl18fFwiPlwiPT09dFtyXXx8XCI8XCI9PT10W3JdKSYmKHEubmFtZUVuZHM9cixxLm5hbWU9dC5zbGljZShxLm5hbWVTdGFydHMscS5uYW1lRW5kcykscy5hdHRyaWJ1dGVzLnB1c2gocSkscT17fSk6KHEubmFtZUVuZHM9cixxLm5hbWU9dC5zbGljZShxLm5hbWVTdGFydHMscS5uYW1lRW5kcykpKSxzLnF1b3Rlc3x8IShzLm5hbWVFbmRzPHIpfHx0W3ItMV0udHJpbSgpfHwhdFtyXS50cmltKCl8fFwiPD4vIVwiLmluY2x1ZGVzKHRbcl0pfHxxLm5hbWVTdGFydHN8fHMubGFzdENsb3NpbmdCcmFja2V0QXR8fChxLm5hbWVTdGFydHM9ciksbnVsbCE9PXMubGFzdE9wZW5pbmdCcmFja2V0QXQmJnMubGFzdE9wZW5pbmdCcmFja2V0QXQ8ciYmXCIvXCI9PT10W3JdJiZzLm9ubHlQbGF1c2libGUmJihzLm9ubHlQbGF1c2libGU9ITEpLG51bGwhPT1zLmxhc3RPcGVuaW5nQnJhY2tldEF0JiZzLmxhc3RPcGVuaW5nQnJhY2tldEF0PHImJlwiL1wiIT09dFtyXSYmKHZvaWQgMD09PXMub25seVBsYXVzaWJsZSYmKHRbcl0udHJpbSgpJiZcIjxcIiE9PXRbcl18fHMuc2xhc2hQcmVzZW50P3Mub25seVBsYXVzaWJsZT0hMTpzLm9ubHlQbGF1c2libGU9ITApLHRbcl0udHJpbSgpJiZ2b2lkIDA9PT1zLm5hbWVTdGFydHMmJlwiPFwiIT09dFtyXSYmXCIvXCIhPT10W3JdJiZcIj5cIiE9PXRbcl0mJlwiIVwiIT09dFtyXSYmKHMubmFtZVN0YXJ0cz1yLHMubmFtZUNvbnRhaW5zTGV0dGVycz0hMSkpLHMubmFtZVN0YXJ0cyYmIXMucXVvdGVzJiZ0W3JdLnRvTG93ZXJDYXNlKCkhPT10W3JdLnRvVXBwZXJDYXNlKCkmJihzLm5hbWVDb250YWluc0xldHRlcnM9ITApLFwiPlwiPT09dFtyXSYmdm9pZCAwIT09cy5sYXN0T3BlbmluZ0JyYWNrZXRBdCYmKHMubGFzdENsb3NpbmdCcmFja2V0QXQ9cixrPW51bGwsT2JqZWN0LmtleXMocSkubGVuZ3RoJiYocy5hdHRyaWJ1dGVzLnB1c2gocSkscT17fSksTC5kdW1wTGlua0hyZWZzTmVhcmJ5LmVuYWJsZWQmJlQudGFnTmFtZSYmIVQub3BlbmluZ1RhZ0VuZHMmJihULm9wZW5pbmdUYWdFbmRzPXIpKSx2b2lkIDAhPT1zLmxhc3RPcGVuaW5nQnJhY2tldEF0KWlmKHZvaWQgMD09PXMubGFzdENsb3NpbmdCcmFja2V0QXQpe2lmKHMubGFzdE9wZW5pbmdCcmFja2V0QXQ8ciYmXCI8XCIhPT10W3JdJiYodm9pZCAwPT09dFtyKzFdfHxcIjxcIj09PXRbcisxXSkmJnMubmFtZUNvbnRhaW5zTGV0dGVycyl7aWYocy5uYW1lPXQuc2xpY2Uocy5uYW1lU3RhcnRzLHMubmFtZUVuZHM/cy5uYW1lRW5kczpyKzEpLnRvTG93ZXJDYXNlKCksaC5sZW5ndGgmJmhbaC5sZW5ndGgtMV1bMF09PT1zLmxhc3RPcGVuaW5nQnJhY2tldEF0fHxoLnB1c2goW3MubGFzdE9wZW5pbmdCcmFja2V0QXQscisxXSksTC5pZ25vcmVUYWdzLmluY2x1ZGVzKHMubmFtZSl8fHMub25seVBsYXVzaWJsZSYmIWwuaGFzKHMubmFtZSkpcmV0dXJuIHM9e30scT17fSxCPXIsXCJjb250aW51ZVwiO2lmKChsLmhhcyhzLm5hbWUpfHx1LmhhcyhzLm5hbWUpKSYmKCExPT09cy5vbmx5UGxhdXNpYmxlfHwhMD09PXMub25seVBsYXVzaWJsZSYmcy5hdHRyaWJ1dGVzLmxlbmd0aCl8fHZvaWQgMD09PXRbcisxXSl7RShMKTt2YXIgZj1TKHQscixzLmxlZnRPdXRlcldoaXRlc3BhY2UscisxLHMubGFzdE9wZW5pbmdCcmFja2V0QXQscy5sYXN0Q2xvc2luZ0JyYWNrZXRBdCk7TC5jYih7dGFnOnMsZGVsZXRlRnJvbTpzLmxlZnRPdXRlcldoaXRlc3BhY2UsZGVsZXRlVG86cisxLGluc2VydDpcIlwiLmNvbmNhdChmKS5jb25jYXQoQSkuY29uY2F0KGYpLHJhbmdlc0FycjpqLHByb3Bvc2VkUmV0dXJuOltzLmxlZnRPdXRlcldoaXRlc3BhY2UscisxLFwiXCIuY29uY2F0KGYpLmNvbmNhdChBKS5jb25jYXQoZildfSksXygpLE8ocixMLGopfWlmKCFtLmxlbmd0aHx8bVttLmxlbmd0aC0xXVswXSE9PXMubGFzdE9wZW5pbmdCcmFja2V0QXQmJm1bbS5sZW5ndGgtMV1bMV0hPT1yKzEpaWYoTC5zdHJpcFRvZ2V0aGVyV2l0aFRoZWlyQ29udGVudHMuaW5jbHVkZXMocy5uYW1lKXx8TC5zdHJpcFRvZ2V0aGVyV2l0aFRoZWlyQ29udGVudHMuaW5jbHVkZXMoXCIqXCIpKXtmb3IodmFyIHcseD1kLmxlbmd0aDt4LS07KWRbeF0ubmFtZT09PXMubmFtZSYmKHc9ZFt4XSk7dz8obT1tLmZpbHRlcigoZnVuY3Rpb24ocil7cmV0dXJuIG8ociwxKVswXSE9PXcubGFzdE9wZW5pbmdCcmFja2V0QXR9KSkpLnB1c2goW3cubGFzdE9wZW5pbmdCcmFja2V0QXQscisxXSk6bS5wdXNoKFtzLmxhc3RPcGVuaW5nQnJhY2tldEF0LHIrMV0pfWVsc2UgbS5wdXNoKFtzLmxhc3RPcGVuaW5nQnJhY2tldEF0LHIrMV0pfX1lbHNlIGlmKHI+cy5sYXN0Q2xvc2luZ0JyYWNrZXRBdCYmdFtyXS50cmltKCl8fHZvaWQgMD09PXRbcisxXSl7dmFyIE49cy5sYXN0Q2xvc2luZ0JyYWNrZXRBdD09PXI/cisxOnI7aWYoTC50cmltT25seVNwYWNlcyYmTj09PW4tMSYmbnVsbCE9PWsmJms8ciYmKE49ayksaC5sZW5ndGgmJmhbaC5sZW5ndGgtMV1bMF09PT1zLmxhc3RPcGVuaW5nQnJhY2tldEF0fHxoLnB1c2goW3MubGFzdE9wZW5pbmdCcmFja2V0QXQscy5sYXN0Q2xvc2luZ0JyYWNrZXRBdCsxXSksIVImJkwuaWdub3JlVGFncy5pbmNsdWRlcyhzLm5hbWUpfHxSJiYhTC5vbmx5U3RyaXBUYWdzLmluY2x1ZGVzKHMubmFtZSkpTC5jYih7dGFnOnMsZGVsZXRlRnJvbTpudWxsLGRlbGV0ZVRvOm51bGwsaW5zZXJ0Om51bGwscmFuZ2VzQXJyOmoscHJvcG9zZWRSZXR1cm46W119KSxzPXt9LHE9e307ZWxzZSBpZighcy5vbmx5UGxhdXNpYmxlfHwwPT09cy5hdHRyaWJ1dGVzLmxlbmd0aCYmcy5uYW1lJiYobC5oYXMocy5uYW1lLnRvTG93ZXJDYXNlKCkpfHx1LmhhcyhzLm5hbWUudG9Mb3dlckNhc2UoKSkpfHxzLmF0dHJpYnV0ZXMmJnMuYXR0cmlidXRlcy5zb21lKChmdW5jdGlvbihyKXtyZXR1cm4gci5lcXVhbHNBdH0pKSl7bS5sZW5ndGgmJm1bbS5sZW5ndGgtMV1bMF09PT1zLmxhc3RPcGVuaW5nQnJhY2tldEF0fHxtLnB1c2goW3MubGFzdE9wZW5pbmdCcmFja2V0QXQscy5sYXN0Q2xvc2luZ0JyYWNrZXRBdCsxXSk7dmFyIEMsST1TKHQscixzLmxlZnRPdXRlcldoaXRlc3BhY2UsTixzLmxhc3RPcGVuaW5nQnJhY2tldEF0LHMubGFzdENsb3NpbmdCcmFja2V0QXQpO0E9XCJcIixiPSExLEUoTCksQz1cInN0cmluZ1wiPT10eXBlb2YgQSYmQS5sZW5ndGg/XCJcIi5jb25jYXQoSSkuY29uY2F0KEEpLmNvbmNhdChcIlxcblxcblwiPT09ST9cIlxcblwiOkkpOkksMCE9PXMubGVmdE91dGVyV2hpdGVzcGFjZSYmbWUodCxOLTEpfHwoQz1cIlwiKSxMLmNiKHt0YWc6cyxkZWxldGVGcm9tOnMubGVmdE91dGVyV2hpdGVzcGFjZSxkZWxldGVUbzpOLGluc2VydDpDLHJhbmdlc0FycjpqLHByb3Bvc2VkUmV0dXJuOltzLmxlZnRPdXRlcldoaXRlc3BhY2UsTixDXX0pLF8oKSxPKHIsTCxqKX1lbHNlIHM9e307XCI+XCIhPT10W3JdJiYocz17fSl9aWYoXCI8XCI9PT10W3JdJiZcIjxcIiE9PXRbci0xXSYmIVwiJ1xcXCJcIi5pbmNsdWRlcyh0W3IrMV0pJiYoIVwiJ1xcXCJcIi5pbmNsdWRlcyh0W3IrMl0pfHwvXFx3Ly50ZXN0KHRbcisxXSkpKXtpZihcIj5cIj09PXRbbWUodCxyKV0pcmV0dXJuIEI9cixcImNvbnRpbnVlXCI7aWYocy5uYW1lRW5kcyYmcy5uYW1lRW5kczxyJiYhcy5sYXN0Q2xvc2luZ0JyYWNrZXRBdCYmKCEwPT09cy5vbmx5UGxhdXNpYmxlJiZzLmF0dHJpYnV0ZXMmJnMuYXR0cmlidXRlcy5sZW5ndGh8fCExPT09cy5vbmx5UGxhdXNpYmxlKSl7dmFyIEg9Uyh0LHIscy5sZWZ0T3V0ZXJXaGl0ZXNwYWNlLHIscy5sYXN0T3BlbmluZ0JyYWNrZXRBdCxyKTtMLmNiKHt0YWc6cyxkZWxldGVGcm9tOnMubGVmdE91dGVyV2hpdGVzcGFjZSxkZWxldGVUbzpyLGluc2VydDpILHJhbmdlc0FycjpqLHByb3Bvc2VkUmV0dXJuOltzLmxlZnRPdXRlcldoaXRlc3BhY2UscixIXX0pLE8ocixMLGopLHM9e30scT17fX1pZih2b2lkIDAhPT1zLmxhc3RPcGVuaW5nQnJhY2tldEF0JiZzLm9ubHlQbGF1c2libGUmJnMubmFtZSYmIXMucXVvdGVzJiYocy5sYXN0T3BlbmluZ0JyYWNrZXRBdD12b2lkIDAscy5uYW1lPXZvaWQgMCxzLm9ubHlQbGF1c2libGU9ITEpLCEodm9pZCAwIT09cy5sYXN0T3BlbmluZ0JyYWNrZXRBdCYmcy5vbmx5UGxhdXNpYmxlfHxzLnF1b3RlcykmJihzLmxhc3RPcGVuaW5nQnJhY2tldEF0PXIscy5zbGFzaFByZXNlbnQ9ITEscy5hdHRyaWJ1dGVzPVtdLG51bGw9PT15P3MubGVmdE91dGVyV2hpdGVzcGFjZT1yOkwudHJpbU9ubHlTcGFjZXMmJjA9PT15P3MubGVmdE91dGVyV2hpdGVzcGFjZT12fHxyOnMubGVmdE91dGVyV2hpdGVzcGFjZT15LFwiIS0tXCI9PT1cIlwiLmNvbmNhdCh0W3IrMV0pLmNvbmNhdCh0W3IrMl0pLmNvbmNhdCh0W3IrM10pfHxcIiFbQ0RBVEFbXCI9PT1cIlwiLmNvbmNhdCh0W3IrMV0pLmNvbmNhdCh0W3IrMl0pLmNvbmNhdCh0W3IrM10pLmNvbmNhdCh0W3IrNF0pLmNvbmNhdCh0W3IrNV0pLmNvbmNhdCh0W3IrNl0pLmNvbmNhdCh0W3IrN10pLmNvbmNhdCh0W3IrOF0pKSl7dmFyIFUsVj0hMDtcIi1cIj09PXRbcisyXSYmKFY9ITEpO2Zvcih2YXIgUD1yO1A8bjtQKyspaWYoKCFVJiZWJiZcIl1dPlwiPT09XCJcIi5jb25jYXQodFtQLTJdKS5jb25jYXQodFtQLTFdKS5jb25jYXQodFtQXSl8fCFWJiZcIi0tXFx4M2VcIj09PVwiXCIuY29uY2F0KHRbUC0yXSkuY29uY2F0KHRbUC0xXSkuY29uY2F0KHRbUF0pKSYmKFU9UCksVSYmKFU8UCYmdFtQXS50cmltKCl8fHZvaWQgMD09PXRbUCsxXSkpe3ZhciBXPVA7KHZvaWQgMD09PXRbUCsxXSYmIXRbUF0udHJpbSgpfHxcIj5cIj09PXRbUF0pJiYoVys9MSksaC5sZW5ndGgmJmhbaC5sZW5ndGgtMV1bMF09PT1zLmxhc3RPcGVuaW5nQnJhY2tldEF0fHxoLnB1c2goW3MubGFzdE9wZW5pbmdCcmFja2V0QXQsVSsxXSksbS5sZW5ndGgmJm1bbS5sZW5ndGgtMV1bMF09PT1zLmxhc3RPcGVuaW5nQnJhY2tldEF0fHxtLnB1c2goW3MubGFzdE9wZW5pbmdCcmFja2V0QXQsVSsxXSk7dmFyIEY9Uyh0LFAscy5sZWZ0T3V0ZXJXaGl0ZXNwYWNlLFcscy5sYXN0T3BlbmluZ0JyYWNrZXRBdCxVKTtMLmNiKHt0YWc6cyxkZWxldGVGcm9tOnMubGVmdE91dGVyV2hpdGVzcGFjZSxkZWxldGVUbzpXLGluc2VydDpGLHJhbmdlc0FycjpqLHByb3Bvc2VkUmV0dXJuOltzLmxlZnRPdXRlcldoaXRlc3BhY2UsVyxGXX0pLHI9UC0xLFwiPlwiPT09dFtQXSYmKHI9UCkscz17fSxxPXt9O2JyZWFrfX19XCJcIj09PXRbcl0udHJpbSgpP251bGw9PT15JiYoeT1yLHZvaWQgMCE9PXMubGFzdE9wZW5pbmdCcmFja2V0QXQmJnMubGFzdE9wZW5pbmdCcmFja2V0QXQ8ciYmcy5uYW1lU3RhcnRzJiZzLm5hbWVTdGFydHM8cy5sYXN0T3BlbmluZ0JyYWNrZXRBdCYmcj09PXMubGFzdE9wZW5pbmdCcmFja2V0QXQrMSYmIWQuc29tZSgoZnVuY3Rpb24ocil7cmV0dXJuIHIubmFtZT09PXMubmFtZX0pKSYmKHMub25seVBsYXVzaWJsZT0hMCxzLm5hbWU9dm9pZCAwLHMubmFtZVN0YXJ0cz12b2lkIDApKTpudWxsIT09eSYmKCFzLnF1b3RlcyYmcS5lcXVhbHNBdD55LTEmJnEubmFtZUVuZHMmJnEuZXF1YWxzQXQ+cS5uYW1lRW5kcyYmJ1wiJyE9PXRbcl0mJlwiJ1wiIT09dFtyXSYmKEQocSkmJnMuYXR0cmlidXRlcy5wdXNoKHEpLHE9e30scy5lcXVhbHNTcG90dGVkQXQ9dm9pZCAwKSx5PW51bGwpLFwiIFwiPT09dFtyXT9udWxsPT09diYmKHY9cik6bnVsbCE9PXYmJih2PW51bGwpLEI9cn0sQj0wLEk9dC5sZW5ndGg7QjxJO0IrKylDKEIsSSk7aWYodCYmKEwudHJpbU9ubHlTcGFjZXMmJlwiIFwiPT09dFswXXx8IUwudHJpbU9ubHlTcGFjZXMmJiF0WzBdLnRyaW0oKSkpZm9yKHZhciBIPTAsVT10Lmxlbmd0aDtIPFU7SCsrKXtpZihMLnRyaW1Pbmx5U3BhY2VzJiZcIiBcIiE9PXRbSF18fCFMLnRyaW1Pbmx5U3BhY2VzJiZ0W0hdLnRyaW0oKSl7ai5wdXNoKFswLEhdKTticmVha310W0grMV18fGoucHVzaChbMCxIKzFdKX1pZih0JiYoTC50cmltT25seVNwYWNlcyYmXCIgXCI9PT10W3QubGVuZ3RoLTFdfHwhTC50cmltT25seVNwYWNlcyYmIXRbdC5sZW5ndGgtMV0udHJpbSgpKSlmb3IodmFyIFY9dC5sZW5ndGg7Vi0tOylpZihMLnRyaW1Pbmx5U3BhY2VzJiZcIiBcIiE9PXRbVl18fCFMLnRyaW1Pbmx5U3BhY2VzJiZ0W1ZdLnRyaW0oKSl7ai5wdXNoKFtWKzEsdC5sZW5ndGhdKTticmVha31pZigoIW58fCFuLmNiKSYmai5jdXJyZW50KCkpe2lmKGouY3VycmVudCgpWzBdJiYhai5jdXJyZW50KClbMF1bMF0pe2ouY3VycmVudCgpWzBdWzFdO2ouY3VycmVudCgpLGoucmFuZ2VzWzBdPVtqLnJhbmdlc1swXVswXSxqLnJhbmdlc1swXVsxXV19aWYoai5jdXJyZW50KClbai5jdXJyZW50KCkubGVuZ3RoLTFdJiZqLmN1cnJlbnQoKVtqLmN1cnJlbnQoKS5sZW5ndGgtMV1bMV09PT10Lmxlbmd0aCl7ai5jdXJyZW50KClbai5jdXJyZW50KCkubGVuZ3RoLTFdWzBdO2ouY3VycmVudCgpO3ZhciBQPWoucmFuZ2VzW2oucmFuZ2VzLmxlbmd0aC0xXVswXTt0W1AtMV0mJihMLnRyaW1Pbmx5U3BhY2VzJiZcIiBcIj09PXRbUC0xXXx8IUwudHJpbU9ubHlTcGFjZXMmJiF0W1AtMV0udHJpbSgpKSYmKFAtPTEpO3ZhciBXPWoucmFuZ2VzW2oucmFuZ2VzLmxlbmd0aC0xXVsyXTtqLnJhbmdlc1tqLnJhbmdlcy5sZW5ndGgtMV09W1Asai5yYW5nZXNbai5yYW5nZXMubGVuZ3RoLTFdWzFdXSxXJiZXLnRyaW0oKSYmai5yYW5nZXNbai5yYW5nZXMubGVuZ3RoLTFdLnB1c2goVy50cmltRW5kKCkpfX1yZXR1cm57bG9nOnt0aW1lVGFrZW5Jbk1pbGxpc2Vjb25kczpEYXRlLm5vdygpLWN9LHJlc3VsdDpmKHQsai5jdXJyZW50KCkpLHJhbmdlczpqLmN1cnJlbnQoKSxhbGxUYWdMb2NhdGlvbnM6aCxmaWx0ZXJlZFRhZ0xvY2F0aW9uczptfX19KSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29tbWVyY2UgZnJvbSAnLi4vbGliL2NvbW1lcmNlJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc3RhdGUuanMnXHJcblxyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nO1xyXG5pbXBvcnQgUHJvZHVjdHNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHNMaXN0JztcclxuXHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1lcmNoYW50OiB7fSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFwcENvbnRleHQ7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5mZXRjaE1lcmNoYW50RGV0YWlscygpO1xyXG4gICAgdGhpcy5jb250ZXh0LmxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIG1lcmNoYW50IGRldGFpbHNcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2Z1bGwtc2RrLXJlZmVyZW5jZSNtZXJjaGFudHNcclxuICAgKi9cclxuICBmZXRjaE1lcmNoYW50RGV0YWlscygpIHtcclxuICAgIGNvbW1lcmNlLm1lcmNoYW50cy5hYm91dCgpLnRoZW4oKG1lcmNoYW50KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtZXJjaGFudDogbWVyY2hhbnQgfSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaCB0aGUgbWVyY2hhbnQgZGV0YWlscycsIGVycm9yKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIG1lcmNoYW50LFxyXG4gICAgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgPD5cclxuICAgICAgICAgIDxIZXJvXHJcbiAgICAgICAgICAgIG1lcmNoYW50PXttZXJjaGFudH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxQcm9kdWN0c0xpc3RcclxuICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXHJcbkFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==