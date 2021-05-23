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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ MyApp; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./styles/scss/styles.scss
var styles = __webpack_require__("7nCd");

// EXTERNAL MODULE: ./components/CartItem.js
var CartItem = __webpack_require__("Ws9w");

// EXTERNAL MODULE: ./context/state.js
var state = __webpack_require__("26zG");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__("qqGZ");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);

// CONCATENATED MODULE: ./components/CartModal.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class CartModal_Cart extends external_react_["Component"] {
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
      className: "cart__none"
    }, "You have no items in your shopping cart, start adding some!");
  }

  handleClose() {
    this.context.toggleCart();
  }

  renderCart() {
    const {
      cart
    } = this.context;

    if (cart.total_unique_items === 0) {
      return;
    }

    return __jsx(external_react_default.a.Fragment, null, cart.line_items.map(lineItem => __jsx(CartItem["a" /* default */], _extends({
      item: lineItem,
      key: lineItem.id
    }, this.props, {
      className: "cart__inner"
    }))), __jsx("div", {
      className: "cart__total"
    }, __jsx("p", {
      className: "cart__total-title"
    }, "Subtotal:"), __jsx("p", {
      className: "cart__total-price"
    }, cart.subtotal.formatted_with_symbol)), __jsx("div", {
      className: "cart__footer"
    }, __jsx("button", {
      className: "cart__btn-empty",
      onClick: this.handleEmptyCart
    }, "Empty cart"), __jsx("button", {
      className: "cart__btn-checkout",
      onClick: () => router_default.a.push({
        pathname: '/checkout'
      })
    }, "Checkout")));
  }

  render() {
    return __jsx(Modal_default.a, {
      onHide: () => this.handleClose(),
      show: this.context.isCartVisible
    }, __jsx(Modal_default.a.Header, {
      closeButton: true
    }, __jsx(Modal_default.a.Title, null, "Your Shopping Cart")), __jsx(Modal_default.a.Body, null, __jsx("div", {
      className: "cart"
    }, this.renderEmptyCart(), this.renderCart())));
  }

}

_defineProperty(CartModal_Cart, "contextType", state["a" /* AppContext */]);

;
/* harmony default export */ var CartModal = (CartModal_Cart);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__("sLJp");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "react-bootstrap/Navbar"
var Navbar_ = __webpack_require__("lFrT");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_);

// EXTERNAL MODULE: external "react-bootstrap/Nav"
var Nav_ = __webpack_require__("6rvL");
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_);

// EXTERNAL MODULE: ./lib/user.js
var lib_user = __webpack_require__("WuuX");

// CONCATENATED MODULE: ./components/NavBar.js
var NavBar_jsx = external_react_default.a.createElement;

function NavBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faShoppingBag"], free_solid_svg_icons_["faTimes"]);

class NavBar_NavBar extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.context.fetchCart();
  }

  renderCartNav() {
    const {
      cart
    } = this.context;
    return NavBar_jsx("div", {
      className: "nav__cart",
      onClick: this.context.toggleCart
    }, NavBar_jsx("button", {
      className: "nav__cart-open"
    }, NavBar_jsx(react_fontawesome_["FontAwesomeIcon"], {
      size: "2x",
      icon: "shopping-bag",
      color: "#fff"
    }), cart !== null ? NavBar_jsx("span", null, cart.total_items) : ''));
  }

  render() {
    const {
      loading,
      user
    } = this.props.useFetchUser;
    return NavBar_jsx(Navbar_default.a, {
      variant: "dark",
      className: "navbar-top"
    }, NavBar_jsx(Nav_default.a, {
      className: "ml-auto"
    }, NavBar_jsx(Navbar_default.a.Brand, null, "Coffee Shop On Wheels")), NavBar_jsx(Nav_default.a, {
      className: "mr-5"
    }, NavBar_jsx(Nav_default.a.Link, {
      href: "/"
    }, "Home"), NavBar_jsx(Nav_default.a.Link, {
      href: "/menu"
    }, "Menu"), NavBar_jsx(Nav_default.a.Link, {
      href: "/tracking"
    }, "Where are we?"), !loading && (user ? NavBar_jsx(external_react_default.a.Fragment, null, NavBar_jsx(Nav_default.a.Link, {
      href: "/myaccount"
    }, "My Account"), NavBar_jsx(Nav_default.a.Link, {
      href: "/api/auth/logout"
    }, "Logout")) : NavBar_jsx(Nav_default.a.Link, {
      href: "/api/auth/login"
    }, "Login")), NavBar_jsx(Nav_default.a.Item, null, this.renderCartNav(), NavBar_jsx(CartModal, null))));
  }

}

NavBar_defineProperty(NavBar_NavBar, "contextType", state["a" /* AppContext */]);

;
/* harmony default export */ var components_NavBar = (Object(lib_user["a" /* withUseFetchUser */])(NavBar_NavBar));
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./components/Footer.js
var Footer_jsx = external_react_default.a.createElement;

function Footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











fontawesome_svg_core_["library"].add(free_solid_svg_icons_["faShoppingBag"], free_solid_svg_icons_["faTimes"]);

class Footer_NavBar extends external_react_["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.context.fetchCart();
  }

  renderCartNav() {
    const {
      cart
    } = this.context;
    return Footer_jsx("div", {
      className: "nav__cart",
      onClick: this.context.toggleCart
    }, Footer_jsx("button", {
      className: "nav__cart-open"
    }, Footer_jsx(react_fontawesome_["FontAwesomeIcon"], {
      size: "2x",
      icon: "shopping-bag",
      color: "#fff"
    }), cart !== null ? Footer_jsx("span", null, cart.total_items) : ''));
  }

  render() {
    return Footer_jsx(Navbar_default.a, {
      className: "footer",
      variant: "dark"
    }, Footer_jsx("ul", {
      className: "shop-description-list"
    }, Footer_jsx("li", null, "COFFEE SHOP ON WHEELS"), Footer_jsx("li", null, "Our Location - Varies!"), Footer_jsx("li", null, "See the WHERE ARE WE page for real time updates.")), Footer_jsx("ul", {
      className: "social-list"
    }, Footer_jsx("li", null, "Follow Us On Social Media"), Footer_jsx("li", null, Footer_jsx("ul", {
      className: "social-icons-list"
    }, Footer_jsx("li", null, Footer_jsx(image_default.a, {
      alt: "facebook",
      src: "/img/icons/facebook.png",
      layout: "intrinsic",
      width: "55",
      height: "55"
    })), Footer_jsx("li", null, Footer_jsx(image_default.a, {
      alt: "instagram",
      src: "/img/icons/instagram.png",
      layout: "intrinsic",
      width: "55",
      height: "55"
    }), "                        "), Footer_jsx("li", null, Footer_jsx(image_default.a, {
      alt: "twitter",
      src: "/img/icons/twitter.png",
      layout: "intrinsic",
      width: "55",
      height: "55"
    }), "                        ")))));
  }

}

Footer_defineProperty(Footer_NavBar, "contextType", state["a" /* AppContext */]);

;
/* harmony default export */ var Footer = (Object(lib_user["a" /* withUseFetchUser */])(Footer_NavBar));
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-cookie-consent"
var external_react_cookie_consent_ = __webpack_require__("Ckvx");
var external_react_cookie_consent_default = /*#__PURE__*/__webpack_require__.n(external_react_cookie_consent_);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var fontawesome_svg_core_styles = __webpack_require__("VAPu");

// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = external_react_default.a.createElement;






 // The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:

 // Prevent fontawesome from adding its CSS since we did it manually above:


fontawesome_svg_core_["config"].autoAddCss = false;
/* eslint-disable import/first */
//https://stackoverflow.com/questions/56334381/why-my-font-awesome-icons-are-being-displayed-big-at-first-and-then-updated-to-t

function MyApp({
  Component,
  pageProps
}) {
  return _app_jsx("div", null, _app_jsx(head_default.a, null, _app_jsx("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  }), _app_jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap",
    rel: "stylesheet"
  }), _app_jsx("link", {
    href: "http://fonts.cdnfonts.com/css/segoe-ui-4",
    rel: "stylesheet"
  })), _app_jsx(state["b" /* AppWrapper */], null, _app_jsx(components_NavBar, null), _app_jsx(Component, pageProps), _app_jsx(external_react_cookie_consent_default.a, null, "This website uses cookies to enhance the user experience."), _app_jsx(Footer, null)));
}

/***/ }),

/***/ "1ccW":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "26zG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppWrapper; });
/* unused harmony export useAppContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const cartAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://af1066ac999894c68a63210ace0c9981-231019546.eu-west-2.elb.amazonaws.com:8002/cart",
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});
const productAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://af1066ac999894c68a63210ace0c9981-231019546.eu-west-2.elb.amazonaws.com:8003/products",
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});
const ordermanagementAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://af1066ac999894c68a63210ace0c9981-231019546.eu-west-2.elb.amazonaws.com:8004",
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
      order: {
        customer: {
          firstname: ""
        }
      },
      cart: {
        line_items: [{
          media: {
            source: ""
          },
          line_total: {
            formatted_with_symbol: ""
          }
        }],
        subtotal: {
          formatted_with_symbol: ""
        },
        total_unique_items: 0
      },
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
      generateCheckoutToken: this.generateCheckoutToken.bind(this),
      createCommerceCustomer: this.createCommerceCustomer.bind(this),
      getCommerceCustomer: this.getCommerceCustomer.bind(this),
      updateAuthCustomerCommerceID: this.updateAuthCustomerCommerceID.bind(this),
      getUser: this.getUser.bind(this)
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
   * @param {object} newOrder The new order object data
   */


  handleCaptureCheckout(newOrder) {
    try {
      ordermanagementAPI.post("/checkout/create", newOrder).then(order => {
        this.setState({
          order: order.data
        }); // Store the order in session storage so we can show it again
        // if the user refreshes the page!

        window.localStorage.setItem('order_receipt', JSON.stringify(order)); // Clears the cart

        this.refreshCart(); // Send the user to the receipt

        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
          pathname: '/confirmation'
        });
      }).catch(error => {
        console.log('There was an error confirming your order', error);
      });
    } catch (error) {
      console.error("There has been an error placing the order", error);
    }
  }
  /**
     *  Generates a checkout token
     *  https://commercejs.com/docs/sdk/checkout#generate-token
     */


  generateCheckoutToken() {
    try {
      const {
        cart
      } = this.state;

      if (cart.line_items.length) {
        ordermanagementAPI.post("/checkout/generatetoken", {
          cartID: cart.id
        }).then(token => {
          this.setState({
            checkoutToken: token.data
          });
        }).catch(error => {
          console.log('There was an error in generating a token', error);
        });
      }
    } catch (error) {
      console.error("There has been an error generating a checkout token for the order", error);
    }
  }

  async createCommerceCustomer(customerEmail) {
    try {
      return await ordermanagementAPI.post("/customer/create", {
        email: customerEmail
      }).then(customer => {
        return customer;
      }).catch(error => {
        console.log('There was an error creating a customer with the email:' + customerEmail, error);
        return null;
      });
    } catch (error) {
      console.error('There was an error creating a customer with the email:' + customerEmail, error);
      return null;
    }
  }

  async getCommerceCustomer(customerID) {
    try {
      return await ordermanagementAPI.get("/customer/get/" + customerID).then(customer => {
        return customer;
      }).catch(error => {
        console.log('There was an error retrieving the customer with the id:' + customerID, error);
        return null;
      });
    } catch (error) {
      console.error('There was an error retrieving the customer with the id:' + customerID, error);
      return null;
    }
  }

  async updateAuthCustomerCommerceID(idObject) {
    try {
      return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/auth/updateuser", idObject).then(customer => {
        return customer; // Add returns for other catch 
      }).catch(error => {
        console.log('There was an error updating the customer', error);
      });
    } catch (error) {
      console.error('There was an error updating the customer' + customerID, error);
    }
  }

  async getUser(id) {
    try {
      return await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/auth/getuser/" + id).then(customer => {
        return customer; // Add returns for other catch 
      }).catch(error => {
        console.log('There was an error updating the customer', error);
      });
    } catch (error) {
      console.error('There was an error updating the customer' + customerID, error);
    }
  }

  render() {
    return __jsx(AppContext.Provider, {
      value: this.state
    }, this.props.children);
  }

}


function useAppContext() {
  return useContext(AppContext);
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6rvL":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "7nCd":
/***/ (function(module, exports) {



/***/ }),

/***/ "98FW":
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

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "Ckvx":
/***/ (function(module, exports) {

module.exports = require("react-cookie-consent");

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "VAPu":
/***/ (function(module, exports) {



/***/ }),

/***/ "Ws9w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("26zG");
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
      className: "cart-item"
    }, __jsx("img", {
      className: "cart-item__image",
      src: item.media.source,
      alt: item.name
    }), __jsx("div", {
      className: "cart-item__details"
    }, __jsx("h4", {
      className: "cart-item__details-name"
    }, item.name), __jsx("div", {
      className: "cart-item__details-qty"
    }, __jsx("button", {
      type: "button",
      onClick: () => item.quantity > 1 ? this.handleUpdateCartQty(item.id, item.quantity - 1) : this.handleRemoveFromCart(item.id)
    }, "-"), __jsx("p", null, item.quantity), __jsx("button", {
      type: "button",
      onClick: () => this.handleUpdateCartQty(item.id, item.quantity + 1)
    }, "+")), __jsx("button", {
      type: "button",
      className: "cart-item__remove",
      onClick: () => this.handleRemoveFromCart(item.id)
    }, "Remove")), __jsx("div", {
      className: "cart-item__details-price"
    }, item.line_total.formatted_with_symbol));
  }

}

_defineProperty(CartItem, "contextType", _context_state__WEBPACK_IMPORTED_MODULE_1__[/* AppContext */ "a"]);

;
/* harmony default export */ __webpack_exports__["a"] = (CartItem);

/***/ }),

/***/ "WuuX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchUser */
/* unused harmony export useFetchUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withUseFetchUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


async function fetchUser(cookie = '') {
  if (false) {}

  const res = await fetch('/api/auth/me', cookie ? {
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
      useFetchUser: myHookValue
    }));
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("98FW"));

var _extends2 = _interopRequireDefault(__webpack_require__("1ccW"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "lFrT":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "qqGZ":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ "sLJp":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });