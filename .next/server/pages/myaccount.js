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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/myaccount.js");
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\context\\state.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const AppContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
const cartAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://localhost:8002/cart",
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});
const productAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://localhost:8003/product",
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});
const ordermanagementAPI = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "http://localhost:8004",
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
      value: this.state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 7
      }
    }, this.props.children);
  }

}


function useAppContext() {
  return useContext(AppContext);
}

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])());

/***/ }),

/***/ "./pages/myaccount.js":
/*!****************************!*\
  !*** ./pages/myaccount.js ***!
  \****************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ "react-bootstrap/Navbar");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ "react-bootstrap/Nav");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Table */ "react-bootstrap/Table");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\pages\\myaccount.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// This import is only included in the server build, because it's only used by getServerSideProps








class Profile extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      showAccountDetails: false,
      showOrders: true,
      underlineOrders: "underline",
      underlineAccountDetails: ""
    };
  }

  async componentDidMount() {
    let user = await this.context.getUser(this.props.user.sub);
    const orders = await listOrdersForCustomer(user.data.app_metadata.commerceID);
    this.setState({
      orders: orders.data
    });
  }

  renderAccountDetails() {
    this.setState({
      showAccountDetails: true,
      showOrders: false,
      underlineAccountDetails: "underline",
      underlineOrders: ""
    });
  }

  renderOrders() {
    this.setState({
      showAccountDetails: false,
      showOrders: true,
      underlineAccountDetails: "",
      underlineOrders: "underline"
    });
  }

  render() {
    let {
      user
    } = this.props;
    let {
      orders,
      showAccountDetails,
      showOrders,
      underlineOrders,
      underlineAccountDetails
    } = this.state;
    return __jsx("div", {
      className: "myaccount-page",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "myaccount-nav-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, "My Account"), __jsx("div", {
      className: "myaccount-nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "dark",
      className: "navbar-myaccount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "flex-column mr-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default.a.Link, {
      onSelect: () => this.renderOrders(),
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, __jsx("h", {
      className: underlineOrders,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 71
      }
    }, "Orders")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default.a.Link, {
      onSelect: () => this.renderAccountDetails(),
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 15
      }
    }, __jsx("h", {
      className: underlineAccountDetails,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 79
      }
    }, "Account Details")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default.a.Link, {
      href: "/api/auth/logout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 15
      }
    }, "Logout")))), __jsx("div", {
      className: "account-details",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, showAccountDetails && __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 35
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, "Profile (server rendered)"), __jsx("img", {
      src: user.picture,
      alt: "user picture",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, "nickname: ", user.nickname), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, "name: ", user.name)), showOrders && __jsx(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6___default.a, {
      borderless: true,
      striped: true,
      className: "order-table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, __jsx("tr", {
      className: "order-table-heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, __jsx("th", {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, "ID Number"), __jsx("th", {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, "Order"), __jsx("th", {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }, "Total Price"), __jsx("th", {
      scope: "col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    }, "Status"))), __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, orders.reverse().map(order => __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 19
      }
    }, __jsx("th", {
      scope: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, order.customer_reference), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 21
      }
    }, order.order.line_items.map(item => __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, item.quantity, " x ", item.product_name))), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 21
      }
    }, order.order_value.formatted_with_symbol), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 21
      }
    }, order.status_fulfillment)))))));
  }

}

_defineProperty(Profile, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

async function listOrdersForCustomer(customerID) {
  try {
    const ordermanagementAPI = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
      baseURL: "http://localhost:8004",
      timeout: 3000,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    return await ordermanagementAPI.get("/customer/listorders/" + customerID).then(orders => {
      return orders.data; // Add returns for other catch
    }).catch(error => {
      console.log('There was an error retrieving a list of orders for the customer', error);
      return null;
    });
  } catch (error) {
    console.error('There was an error retrieving a list of orders for the customer' + customerID, error);
    return null;
  }
}

async function getServerSideProps({
  req,
  res
}) {
  // Here you can check authentication status directly before rendering the page,
  // however the page would be a serverless function, which is more expensive and
  // slower than a static page with client side authentication
  const x = 5;
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__["default"].getSession(req, res);

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/login'
    });
    res.end();
    return;
  }

  return {
    props: {
      user: session.user
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

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

/***/ }),

/***/ "react-bootstrap/Table":
/*!****************************************!*\
  !*** external "react-bootstrap/Table" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Table");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXV0aDAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbXlhY2NvdW50LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhdXRoMC9uZXh0anMtYXV0aDBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9UYWJsZVwiIl0sIm5hbWVzIjpbIkFwcENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiY2FydEFQSSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJ0aW1lb3V0IiwiaGVhZGVycyIsInByb2R1Y3RBUEkiLCJvcmRlcm1hbmFnZW1lbnRBUEkiLCJBcHBXcmFwcGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNhcnRJRCIsIm9yZGVyIiwiY3VzdG9tZXIiLCJmaXJzdG5hbWUiLCJjYXJ0IiwibGluZV9pdGVtcyIsIm1lZGlhIiwic291cmNlIiwibGluZV90b3RhbCIsImZvcm1hdHRlZF93aXRoX3N5bWJvbCIsInN1YnRvdGFsIiwidG90YWxfdW5pcXVlX2l0ZW1zIiwiaXNDYXJ0VmlzaWJsZSIsInByb2R1Y3RzIiwiY2hlY2tvdXRUb2tlbiIsImxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UiLCJiaW5kIiwidG9nZ2xlQ2FydCIsImhhbmRsZUFkZFRvQ2FydCIsImhhbmRsZVVwZGF0ZUNhcnRRdHkiLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsImhhbmRsZUVtcHR5Q2FydCIsImZldGNoQ2FydCIsInJlZnJlc2hDYXJ0IiwiaGFuZGxlQ2FwdHVyZUNoZWNrb3V0IiwiZmV0Y2hQcm9kdWN0cyIsImdlbmVyYXRlQ2hlY2tvdXRUb2tlbiIsImNyZWF0ZUNvbW1lcmNlQ3VzdG9tZXIiLCJnZXRDb21tZXJjZUN1c3RvbWVyIiwidXBkYXRlQXV0aEN1c3RvbWVyQ29tbWVyY2VJRCIsImdldFVzZXIiLCJnZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwicmV0cmlldmVDYXJ0IiwiY3JlYXRlQ2FydCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0SWQiLCJxdWFudGl0eSIsInBvc3QiLCJpdGVtIiwibGluZUl0ZW1JZCIsInB1dCIsInJlc3AiLCJkZWxldGUiLCJpZCIsInNldCIsIm5ld09yZGVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsImxlbmd0aCIsInRva2VuIiwiY3VzdG9tZXJFbWFpbCIsImVtYWlsIiwiY3VzdG9tZXJJRCIsImlkT2JqZWN0IiwicmVuZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiaW5pdEF1dGgwIiwiUHJvZmlsZSIsIm9yZGVycyIsInNob3dBY2NvdW50RGV0YWlscyIsInNob3dPcmRlcnMiLCJ1bmRlcmxpbmVPcmRlcnMiLCJ1bmRlcmxpbmVBY2NvdW50RGV0YWlscyIsImNvbXBvbmVudERpZE1vdW50IiwidXNlciIsImNvbnRleHQiLCJzdWIiLCJsaXN0T3JkZXJzRm9yQ3VzdG9tZXIiLCJhcHBfbWV0YWRhdGEiLCJjb21tZXJjZUlEIiwicmVuZGVyQWNjb3VudERldGFpbHMiLCJyZW5kZXJPcmRlcnMiLCJwaWN0dXJlIiwibmlja25hbWUiLCJuYW1lIiwicmV2ZXJzZSIsIm1hcCIsImN1c3RvbWVyX3JlZmVyZW5jZSIsInByb2R1Y3RfbmFtZSIsIm9yZGVyX3ZhbHVlIiwic3RhdHVzX2Z1bGZpbGxtZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicmVzIiwieCIsInNlc3Npb24iLCJhdXRoMCIsImdldFNlc3Npb24iLCJ3cml0ZUhlYWQiLCJMb2NhdGlvbiIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQSxVQUFVLGdCQUFHQywyREFBYSxFQUFoQztBQUVQLE1BQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVB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Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbXlhY2NvdW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9teWFjY291bnQuanNcIik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGNhcnRBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkNBUlRNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHByb2R1Y3RBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LlBST0RVQ1RTTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBvcmRlcm1hbmFnZW1lbnRBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk9SREVSTUFOQUdFTUVOVE1TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY2xhc3MgQXBwV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhcnRJRDogXCJcIixcclxuICAgICAgb3JkZXI6IHsgY3VzdG9tZXI6IHsgZmlyc3RuYW1lOiBcIlwiIH0gfSxcclxuXHJcbiAgICAgIGNhcnQ6IHsgbGluZV9pdGVtczogW3sgbWVkaWE6IHsgc291cmNlOiBcIlwiIH0sIGxpbmVfdG90YWw6IHsgZm9ybWF0dGVkX3dpdGhfc3ltYm9sOiBcIlwiIH0gfV0sIHN1YnRvdGFsOiB7IGZvcm1hdHRlZF93aXRoX3N5bWJvbDogXCJcIiB9LCB0b3RhbF91bmlxdWVfaXRlbXM6IDAgfSxcclxuICAgICAgaXNDYXJ0VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgY2hlY2tvdXRUb2tlbjoge30sXHJcbiAgICAgIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2U6IHRoaXMubG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZS5iaW5kKHRoaXMpLFxyXG4gICAgICB0b2dnbGVDYXJ0OiB0aGlzLnRvZ2dsZUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlQWRkVG9DYXJ0OiB0aGlzLmhhbmRsZUFkZFRvQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVVcGRhdGVDYXJ0UXR5OiB0aGlzLmhhbmRsZVVwZGF0ZUNhcnRRdHkuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQ6IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlRW1wdHlDYXJ0OiB0aGlzLmhhbmRsZUVtcHR5Q2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBmZXRjaENhcnQ6IHRoaXMuZmV0Y2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIHJlZnJlc2hDYXJ0OiB0aGlzLnJlZnJlc2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUNhcHR1cmVDaGVja291dDogdGhpcy5oYW5kbGVDYXB0dXJlQ2hlY2tvdXQuYmluZCh0aGlzKSxcclxuICAgICAgZmV0Y2hQcm9kdWN0czogdGhpcy5mZXRjaFByb2R1Y3RzLmJpbmQodGhpcyksXHJcbiAgICAgIGdlbmVyYXRlQ2hlY2tvdXRUb2tlbjogdGhpcy5nZW5lcmF0ZUNoZWNrb3V0VG9rZW4uYmluZCh0aGlzKSxcclxuICAgICAgY3JlYXRlQ29tbWVyY2VDdXN0b21lcjogdGhpcy5jcmVhdGVDb21tZXJjZUN1c3RvbWVyLmJpbmQodGhpcyksXHJcbiAgICAgIGdldENvbW1lcmNlQ3VzdG9tZXI6IHRoaXMuZ2V0Q29tbWVyY2VDdXN0b21lci5iaW5kKHRoaXMpLFxyXG4gICAgICB1cGRhdGVBdXRoQ3VzdG9tZXJDb21tZXJjZUlEOiB0aGlzLnVwZGF0ZUF1dGhDdXN0b21lckNvbW1lcmNlSUQuYmluZCh0aGlzKSxcclxuICAgICAgZ2V0VXNlcjogdGhpcy5nZXRVc2VyLmJpbmQodGhpcylcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcHJvZHVjdHMgZGF0YSBmcm9tIENoZWMgYW5kIHN0b3JlcyBpbiB0aGUgcHJvZHVjdHMgZGF0YSBvYmplY3QuXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9wcm9kdWN0c1xyXG4gICAqL1xyXG4gIGFzeW5jIGZldGNoUHJvZHVjdHMoKSB7XHJcbiAgICBwcm9kdWN0QVBJLmdldChcIi9nZXRcIikudGhlbigocHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzOiBwcm9kdWN0cy5kYXRhLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgcHJvZHVjdHMnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQ2FydCgpIHtcclxuICAgIGNvbnN0IGNhcnRJRCA9IENvb2tpZXMuZ2V0KCdjYXJ0SUQnKTtcclxuXHJcbiAgICBpZiAoYXdhaXQgdGhpcy5yZXRyaWV2ZUNhcnQoY2FydElEKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcnQgUmV0cmlldmVkIVwiKTtcclxuICAgIH0gZWxzZSBpZiAoYXdhaXQgdGhpcy5jcmVhdGVDYXJ0KCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJ0IENyZWF0ZWQhXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBmZXRjaGluZyB0aGUgY2FydC5cIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQWN0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhIHNhdmVkIG9yZGVyIHJlY2VpcHQgZnJvbSBsb2NhbCBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IHRoZSBjb25maXJtYXRpb24gcGFnZVxyXG4gICAqIGFnYWluIGJldHdlZW4gcGFnZSByZWZyZXNoZXMuXHJcbiAgICovXHJcbiAgbG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyX3JlY2VpcHQnKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXI6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcl9yZWNlaXB0JykpIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGhpZGUgY2FydCBpbiBuYXZcclxuICAgKi9cclxuICB0b2dnbGVDYXJ0KCkge1xyXG4gICAgY29uc3QgeyBpc0NhcnRWaXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzQ2FydFZpc2libGU6ICFpc0NhcnRWaXNpYmxlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLy0+IHN0YXJ0IG9mIGNhcnQgZnVuY3Rpb25zXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHByb2R1Y3QgdG8gdGhlIGN1cnJlbnQgY2FydCBpbiBzZXNzaW9uXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNhZGQtdG8tY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2R1Y3RJZCBUaGUgSUQgb2YgdGhlIHByb2R1Y3QgYmVpbmcgYWRkZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHkgVGhlIHF1YW50aXR5IG9mIHRoZSBwcm9kdWN0IGJlaW5nIGFkZGVkXHJcbiAgICovXHJcbiAgYXN5bmMgaGFuZGxlQWRkVG9DYXJ0KHByb2R1Y3RJZCwgcXVhbnRpdHkpIHtcclxuXHJcbiAgICBhd2FpdCBjYXJ0QVBJLnBvc3QoXCIvYWRkdG9cIiwgeyBjYXJ0SUQ6IHRoaXMuc3RhdGUuY2FydElELCBwcm9kdWN0SWQ6IHByb2R1Y3RJZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGl0ZW0uZGF0YS5jYXJ0IH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gYWRkaW5nIGEgY2FydCBpdGVtJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGxpbmVfaXRlbXMgaW4gY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jdXBkYXRlLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lSXRlbUlkIElEIG9mIHRoZSBjYXJ0IGxpbmUgaXRlbSBiZWluZyB1cGRhdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1YW50aXR5IE5ldyBsaW5lIGl0ZW0gcXVhbnRpdHkgdG8gdXBkYXRlXHJcbiAgICovXHJcbiAgaGFuZGxlVXBkYXRlQ2FydFF0eShsaW5lSXRlbUlkLCBxdWFudGl0eSkge1xyXG4gICAgY2FydEFQSS5wdXQoXCIvdXBkYXRlcXR5XCIsIHsgY2FydElEOiB0aGlzLnN0YXRlLmNhcnRJRCwgbGluZUl0ZW1JZDogbGluZUl0ZW1JZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyB0aGUgY2FydCBpdGVtcycsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBsaW5lIGl0ZW0gZnJvbSBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNyZW1vdmUtZnJvbS1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZUl0ZW1JZCBJRCBvZiB0aGUgbGluZSBpdGVtIGJlaW5nIHJlbW92ZWRcclxuICAgKi9cclxuICBoYW5kbGVSZW1vdmVGcm9tQ2FydChsaW5lSXRlbUlkKSB7XHJcbiAgICBjYXJ0QVBJLmRlbGV0ZShcIi9yZW1vdmVmcm9tL1wiICsgdGhpcy5zdGF0ZS5jYXJ0SUQgKyBcIi9cIiArIGxpbmVJdGVtSWQpLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHJlbW92aW5nIHRoZSBpdGVtIGZyb20gdGhlIGNhcnQnLCBlcnJvcik7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbXB0aWVzIGNhcnQgY29udGVudHNcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3JlbW92ZS1mcm9tLWNhcnRcclxuICAgKi9cclxuICBhc3luYyBoYW5kbGVFbXB0eUNhcnQoKSB7XHJcbiAgICBhd2FpdCBjYXJ0QVBJLmRlbGV0ZShcIi9lbXB0eS9cIiArIHRoaXMuc3RhdGUuY2FydElEKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBlbXB0eWluZyB0aGUgY2FydCcsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDcmVhdGVzIGEgY2FydFxyXG4gICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0XHJcbiAgKi9cclxuICBhc3luYyBjcmVhdGVDYXJ0KCkge1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9jcmVhdGVcIikudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoJ2NhcnRJRCcsIGNhcnQuZGF0YS5pZCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJldHJpZXZlQ2FydChjYXJ0SUQpIHtcclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9mZXRjaC9cIiArIGNhcnRJRCkudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZnJlc2hlcyB0byBhIG5ldyBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0I3JlZnJlc2gtY2FydFxyXG4gICAqL1xyXG4gIHJlZnJlc2hDYXJ0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVDYXJ0KCk7XHJcbiAgfVxyXG4gIC8vPT4gZW5kIGZvIGNhcnQgZnVuY3Rpb25zXHJcblxyXG4gIC8qKlxyXG4gICAqIENhcHR1cmVzIHRoZSBjaGVja291dFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjY2FwdHVyZS1vcmRlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG5ld09yZGVyIFRoZSBuZXcgb3JkZXIgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBoYW5kbGVDYXB0dXJlQ2hlY2tvdXQobmV3T3JkZXIpIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBvcmRlcm1hbmFnZW1lbnRBUEkucG9zdChcIi9jaGVja291dC9jcmVhdGVcIiwgbmV3T3JkZXIpLnRoZW4oKG9yZGVyKSA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgb3JkZXI6IG9yZGVyLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBvcmRlciBpbiBzZXNzaW9uIHN0b3JhZ2Ugc28gd2UgY2FuIHNob3cgaXQgYWdhaW5cclxuICAgICAgICAvLyBpZiB0aGUgdXNlciByZWZyZXNoZXMgdGhlIHBhZ2UhXHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlcl9yZWNlaXB0JywgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcclxuICAgICAgICAvLyBDbGVhcnMgdGhlIGNhcnRcclxuICAgICAgICB0aGlzLnJlZnJlc2hDYXJ0KCk7XHJcbiAgICAgICAgLy8gU2VuZCB0aGUgdXNlciB0byB0aGUgcmVjZWlwdFxyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIHBhdGhuYW1lOiAnL2NvbmZpcm1hdGlvbidcclxuICAgICAgICB9KVxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGNvbmZpcm1pbmcgeW91ciBvcmRlcicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYW4gZXJyb3IgcGxhY2luZyB0aGUgb3JkZXJcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgICAqICBHZW5lcmF0ZXMgYSBjaGVja291dCB0b2tlblxyXG4gICAgICogIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjZ2VuZXJhdGUtdG9rZW5cclxuICAgICAqL1xyXG4gIGdlbmVyYXRlQ2hlY2tvdXRUb2tlbigpIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhcnQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGlmIChjYXJ0LmxpbmVfaXRlbXMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIG9yZGVybWFuYWdlbWVudEFQSS5wb3N0KFwiL2NoZWNrb3V0L2dlbmVyYXRldG9rZW5cIiwgeyBjYXJ0SUQ6IGNhcnQuaWQgfSkudGhlbih0b2tlbiA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb2tlbjogdG9rZW4uZGF0YSB9KTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGluIGdlbmVyYXRpbmcgYSB0b2tlbicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGFuIGVycm9yIGdlbmVyYXRpbmcgYSBjaGVja291dCB0b2tlbiBmb3IgdGhlIG9yZGVyXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBhc3luYyBjcmVhdGVDb21tZXJjZUN1c3RvbWVyKGN1c3RvbWVyRW1haWwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBvcmRlcm1hbmFnZW1lbnRBUEkucG9zdChcIi9jdXN0b21lci9jcmVhdGVcIiwgeyBlbWFpbDogY3VzdG9tZXJFbWFpbCB9KS50aGVuKChjdXN0b21lcikgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gY3VzdG9tZXI7XHJcblxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGNyZWF0aW5nIGEgY3VzdG9tZXIgd2l0aCB0aGUgZW1haWw6JyArIGN1c3RvbWVyRW1haWwsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgY3JlYXRpbmcgYSBjdXN0b21lciB3aXRoIHRoZSBlbWFpbDonICsgY3VzdG9tZXJFbWFpbCwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldENvbW1lcmNlQ3VzdG9tZXIoY3VzdG9tZXJJRCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIGF3YWl0IG9yZGVybWFuYWdlbWVudEFQSS5nZXQoXCIvY3VzdG9tZXIvZ2V0L1wiICsgY3VzdG9tZXJJRCkudGhlbigoY3VzdG9tZXIpID0+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGN1c3RvbWVyO1xyXG5cclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIHRoZSBjdXN0b21lciB3aXRoIHRoZSBpZDonICsgY3VzdG9tZXJJRCwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIHRoZSBjdXN0b21lciB3aXRoIHRoZSBpZDonICsgY3VzdG9tZXJJRCwgZXJyb3IpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHVwZGF0ZUF1dGhDdXN0b21lckNvbW1lcmNlSUQoaWRPYmplY3QpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9hdXRoL3VwZGF0ZXVzZXJcIiwgaWRPYmplY3QpLnRoZW4oKGN1c3RvbWVyKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiBjdXN0b21lcjsgLy8gQWRkIHJldHVybnMgZm9yIG90aGVyIGNhdGNoIFxyXG5cclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyB0aGUgY3VzdG9tZXInLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHVwZGF0aW5nIHRoZSBjdXN0b21lcicgKyBjdXN0b21lcklELCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRVc2VyKGlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9hdXRoL2dldHVzZXIvXCIgKyBpZCkudGhlbigoY3VzdG9tZXIpID0+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIGN1c3RvbWVyOyAvLyBBZGQgcmV0dXJucyBmb3Igb3RoZXIgY2F0Y2ggXHJcblxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHVwZGF0aW5nIHRoZSBjdXN0b21lcicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgdGhlIGN1c3RvbWVyJyArIGN1c3RvbWVySUQsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQXBwV3JhcHBlciB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgaW5pdEF1dGgwIH0gZnJvbSAnQGF1dGgwL25leHRqcy1hdXRoMCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluaXRBdXRoMCgpXHJcbiIsIi8vIFRoaXMgaW1wb3J0IGlzIG9ubHkgaW5jbHVkZWQgaW4gdGhlIHNlcnZlciBidWlsZCwgYmVjYXVzZSBpdCdzIG9ubHkgdXNlZCBieSBnZXRTZXJ2ZXJTaWRlUHJvcHNcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXV0aDAgZnJvbSAnLi4vbGliL2F1dGgwJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9zdGF0ZS5qcyc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC1ib290c3RyYXAvVGFibGUnO1xyXG5cclxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgb3JkZXJzOiBbXSxcclxuICAgICAgc2hvd0FjY291bnREZXRhaWxzOiBmYWxzZSxcclxuICAgICAgc2hvd09yZGVyczogdHJ1ZSxcclxuICAgICAgdW5kZXJsaW5lT3JkZXJzOiBcInVuZGVybGluZVwiLFxyXG4gICAgICB1bmRlcmxpbmVBY2NvdW50RGV0YWlsczogXCJcIlxyXG4gICAgfVxyXG4gIH1cclxuICBzdGF0aWMgY29udGV4dFR5cGUgPSBBcHBDb250ZXh0O1xyXG5cclxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHJcbiAgICBsZXQgdXNlciA9IGF3YWl0IHRoaXMuY29udGV4dC5nZXRVc2VyKHRoaXMucHJvcHMudXNlci5zdWIpO1xyXG4gICAgY29uc3Qgb3JkZXJzID0gYXdhaXQgbGlzdE9yZGVyc0ZvckN1c3RvbWVyKHVzZXIuZGF0YS5hcHBfbWV0YWRhdGEuY29tbWVyY2VJRCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXJzOiBvcmRlcnMuZGF0YSB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlckFjY291bnREZXRhaWxzKCkge1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWNjb3VudERldGFpbHM6IHRydWUsIHNob3dPcmRlcnM6IGZhbHNlLCB1bmRlcmxpbmVBY2NvdW50RGV0YWlsczogXCJ1bmRlcmxpbmVcIiwgdW5kZXJsaW5lT3JkZXJzOiBcIlwiIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlck9yZGVycygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWNjb3VudERldGFpbHM6IGZhbHNlLCBzaG93T3JkZXJzOiB0cnVlLCB1bmRlcmxpbmVBY2NvdW50RGV0YWlsczogXCJcIiwgdW5kZXJsaW5lT3JkZXJzOiBcInVuZGVybGluZVwiIH0pO1xyXG5cclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHsgdXNlciB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCB7IG9yZGVycywgc2hvd0FjY291bnREZXRhaWxzLCBzaG93T3JkZXJzLCB1bmRlcmxpbmVPcmRlcnMsIHVuZGVybGluZUFjY291bnREZXRhaWxzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWFjY291bnQtcGFnZVwiPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15YWNjb3VudC1uYXYtdGl0bGVcIj5NeSBBY2NvdW50PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWFjY291bnQtbmF2XCI+XHJcbiAgICAgICAgICA8TmF2YmFyIHZhcmlhbnQ9XCJkYXJrXCIgY2xhc3NOYW1lPVwibmF2YmFyLW15YWNjb3VudFwiPlxyXG4gICAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cImZsZXgtY29sdW1uIG1yLTVcIj5cclxuICAgICAgICAgICAgICA8TmF2Lkxpbmsgb25TZWxlY3Q9eygpID0+IHRoaXMucmVuZGVyT3JkZXJzKCl9IGhyZWY9XCIjXCI+PGggY2xhc3NOYW1lPXt1bmRlcmxpbmVPcmRlcnN9Pk9yZGVyczwvaD48L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBvblNlbGVjdD17KCkgPT4gdGhpcy5yZW5kZXJBY2NvdW50RGV0YWlscygpfSBocmVmPVwiI1wiPjxoIGNsYXNzTmFtZT17dW5kZXJsaW5lQWNjb3VudERldGFpbHN9PkFjY291bnQgRGV0YWlsczwvaD48L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2FwaS9hdXRoL2xvZ291dFwiPkxvZ291dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1kZXRhaWxzXCI+XHJcblxyXG4gICAgICAgICAge3Nob3dBY2NvdW50RGV0YWlscyAmJiAoPGRpdj5cclxuICAgICAgICAgICAgPGgzPlByb2ZpbGUgKHNlcnZlciByZW5kZXJlZCk8L2gzPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dXNlci5waWN0dXJlfSBhbHQ9XCJ1c2VyIHBpY3R1cmVcIiAvPlxyXG4gICAgICAgICAgICA8cD5uaWNrbmFtZToge3VzZXIubmlja25hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD5uYW1lOiB7dXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICAgICAge3Nob3dPcmRlcnMgJiYgKFxyXG4gICAgICAgICAgICA8VGFibGUgYm9yZGVybGVzcyBzdHJpcGVkIGNsYXNzTmFtZT1cIm9yZGVyLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIm9yZGVyLXRhYmxlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SUQgTnVtYmVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+T3JkZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Ub3RhbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG5cclxuICAgICAgICAgICAgICAgIHtvcmRlcnMucmV2ZXJzZSgpLm1hcCgob3JkZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntvcmRlci5jdXN0b21lcl9yZWZlcmVuY2V9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIub3JkZXIubGluZV9pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5xdWFudGl0eX0geCB7IGl0ZW0ucHJvZHVjdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e29yZGVyLm9yZGVyX3ZhbHVlLmZvcm1hdHRlZF93aXRoX3N5bWJvbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b3JkZXIuc3RhdHVzX2Z1bGZpbGxtZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgICAgICAgPC9UYWJsZT4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxpc3RPcmRlcnNGb3JDdXN0b21lcihjdXN0b21lcklEKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9yZGVybWFuYWdlbWVudEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk9SREVSTUFOQUdFTUVOVE1TVVJMLFxyXG4gICAgICB0aW1lb3V0OiAzMDAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBvcmRlcm1hbmFnZW1lbnRBUEkuZ2V0KFwiL2N1c3RvbWVyL2xpc3RvcmRlcnMvXCIgKyBjdXN0b21lcklEKS50aGVuKChvcmRlcnMpID0+IHtcclxuXHJcbiAgICAgIHJldHVybiBvcmRlcnMuZGF0YTsgLy8gQWRkIHJldHVybnMgZm9yIG90aGVyIGNhdGNoXHJcblxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyBhIGxpc3Qgb2Ygb3JkZXJzIGZvciB0aGUgY3VzdG9tZXInLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIGEgbGlzdCBvZiBvcmRlcnMgZm9yIHRoZSBjdXN0b21lcicgKyBjdXN0b21lcklELCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgLy8gSGVyZSB5b3UgY2FuIGNoZWNrIGF1dGhlbnRpY2F0aW9uIHN0YXR1cyBkaXJlY3RseSBiZWZvcmUgcmVuZGVyaW5nIHRoZSBwYWdlLFxyXG4gIC8vIGhvd2V2ZXIgdGhlIHBhZ2Ugd291bGQgYmUgYSBzZXJ2ZXJsZXNzIGZ1bmN0aW9uLCB3aGljaCBpcyBtb3JlIGV4cGVuc2l2ZSBhbmRcclxuICAvLyBzbG93ZXIgdGhhbiBhIHN0YXRpYyBwYWdlIHdpdGggY2xpZW50IHNpZGUgYXV0aGVudGljYXRpb25cclxuICBjb25zdCB4ID0gNTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aDAuZ2V0U2Vzc2lvbihyZXEsIHJlcylcclxuXHJcbiAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIpIHtcclxuICAgIHJlcy53cml0ZUhlYWQoMzAyLCB7XHJcbiAgICAgIExvY2F0aW9uOiAnL2FwaS9sb2dpbicsXHJcbiAgICB9KVxyXG4gICAgcmVzLmVuZCgpXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdXNlcjogc2Vzc2lvbi51c2VyIH0gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhdXRoMC9uZXh0anMtYXV0aDBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9OYXZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL05hdmJhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvVGFibGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==