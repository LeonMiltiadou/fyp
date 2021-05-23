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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/rQ7":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Table");

/***/ }),

/***/ "0K2u":
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5Ebq");


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

/***/ "2NqA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0K2u");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])());

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5Ebq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2NqA");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("26zG");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lFrT");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("6rvL");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/rQ7");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__);

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
      className: "myaccount-page"
    }, __jsx("div", {
      className: "myaccount-nav-title"
    }, "My Account"), __jsx("div", {
      className: "myaccount-nav"
    }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: "dark",
      className: "navbar-myaccount"
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default.a, {
      className: "flex-column mr-5"
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default.a.Link, {
      onSelect: () => this.renderOrders(),
      href: "#"
    }, __jsx("h", {
      className: underlineOrders
    }, "Orders")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default.a.Link, {
      onSelect: () => this.renderAccountDetails(),
      href: "#"
    }, __jsx("h", {
      className: underlineAccountDetails
    }, "Account Details")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5___default.a.Link, {
      href: "/api/auth/logout"
    }, "Logout")))), __jsx("div", {
      className: "account-details"
    }, showAccountDetails && __jsx("div", null, __jsx("h3", null, "Profile (server rendered)"), __jsx("img", {
      src: user.picture,
      alt: "user picture"
    }), __jsx("p", null, "nickname: ", user.nickname), __jsx("p", null, "name: ", user.name)), showOrders && __jsx(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6___default.a, {
      borderless: true,
      striped: true,
      className: "order-table"
    }, __jsx("thead", null, __jsx("tr", {
      className: "order-table-heading"
    }, __jsx("th", {
      scope: "col"
    }, "ID Number"), __jsx("th", {
      scope: "col"
    }, "Order"), __jsx("th", {
      scope: "col"
    }, "Total Price"), __jsx("th", {
      scope: "col"
    }, "Status"))), __jsx("tbody", null, orders.reverse().map(order => __jsx("tr", null, __jsx("th", {
      scope: "row"
    }, order.customer_reference), __jsx("td", null, order.order.line_items.map(item => __jsx("div", null, item.quantity, " x ", item.product_name))), __jsx("td", null, order.order_value.formatted_with_symbol), __jsx("td", null, order.status_fulfillment)))))));
  }

}

_defineProperty(Profile, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__[/* AppContext */ "a"]);

async function listOrdersForCustomer(customerID) {
  try {
    const ordermanagementAPI = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({
      baseURL: "http://af1066ac999894c68a63210ace0c9981-231019546.eu-west-2.elb.amazonaws.com:8004",
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
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getSession(req, res);

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

/***/ "6rvL":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Nav");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "lFrT":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Navbar");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });