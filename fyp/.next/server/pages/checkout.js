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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/checkout.js");
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
      getCommerceCustomer: this.getCommerceCustomer.bind(this)
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

  createCommerceCustomer(customerEmail) {
    try {
      ordermanagementAPI.post("/customer/create", {
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

  getCommerceCustomer(customerID) {
    try {
      ordermanagementAPI.get("/customer/get/" + "customerID").then(customer => {
        return customer; // Add returns for other catch 
      }).catch(error => {
        console.log('There was an error retrieving the customer with the id:' + customerID, error);
      });
    } catch (error) {
      console.error('There was an error retrieving the customer with the id:' + customerID, error);
    }
  }

  updateAuthCustomerCommerceID(commerceID) {
    try {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/auth/updateuser/", {
        id: commerceID
      }).then(customer => {
        return customer; // Add returns for other catch 
      }).catch(error => {
        console.log('There was an error retrieving the customer with the id:' + customerID, error);
      });
    } catch (error) {
      console.error('There was an error retrieving the customer with the id:' + customerID, error);
    }
  }

  render() {
    return __jsx(AppContext.Provider, {
      value: this.state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
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

/***/ "./pages/checkout.js":
/*!***************************!*\
  !*** ./pages/checkout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var _context_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state */ "./context/state.js");
/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/user */ "./lib/user.js");
var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\pages\\checkout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Checkout extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      // Customer details
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@email.com',
      // Shipping details
      shippingName: 'Jane Doe',
      shippingStreet: '123 Fake St',
      shippingCity: 'London',
      shippingStateProvince: '',
      shippingPostalZipCode: '',
      shippingCountry: '',
      // Payment details
      cardNum: '4242 4242 4242 4242',
      expMonth: '11',
      expYear: '2023',
      ccv: '123',
      billingPostalZipcode: 'SM4 4ED',
      // Shipping and fulfillment data
      shippingCountries: {},
      shippingSubdivisions: {},
      shippingOptions: [],
      shippingOption: ''
    };
    this.handleFormChanges = this.handleFormChanges.bind(this);
    this.handleShippingCountryChange = this.handleShippingCountryChange.bind(this);
    this.handleSubdivisionChange = this.handleSubdivisionChange.bind(this);
    this.handleCaptureCheckout = this.handleCaptureCheckout.bind(this);
  }

  componentDidMount() {
    this.context.generateCheckoutToken();
  }

  fetchCart() {
    this.context.fetchCart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.shippingCountry !== prevState.shippingCountry) {
      this.fetchShippingOptions(this.state.checkoutToken.id, this.state.shippingCountry);
    }
  }

  /**
   * Fetches a list of countries available to ship to checkout token
   * https://commercejs.com/docs/sdk/checkout#list-available-shipping-countries
   *
   * @param {string} checkoutTokenId
   */
  fetchShippingCountries(checkoutTokenId) {
    _lib_commerce__WEBPACK_IMPORTED_MODULE_2__["default"].services.localeListShippingCountries(checkoutTokenId).then(countries => {
      this.setState({
        shippingCountries: countries.countries
      });
    }).catch(error => {
      console.log('There was an error fetching a list of shipping countries', error);
    });
  }

  /**
   * Fetches the subdivisions (provinces/states) for a country
   * https://commercejs.com/docs/sdk/checkout#list-all-subdivisions-for-a-country
   *
   * @param {string} countryCode
   */
  fetchSubdivisions(countryCode) {
    _lib_commerce__WEBPACK_IMPORTED_MODULE_2__["default"].services.localeListSubdivisions(countryCode).then(subdivisions => {
      this.setState({
        shippingSubdivisions: subdivisions.subdivisions
      });
    }).catch(error => {
      console.log('There was an error fetching the subdivisions', error);
    });
  }

  /**
   * Fetches the available shipping methods for the current checkout
   * https://commercejs.com/docs/sdk/checkout#get-shipping-methods
   *
   * @param {string} checkoutTokenId
   * @param {string} country
   * @param {string} stateProvince
   */
  fetchShippingOptions(checkoutTokenId, country, stateProvince = null) {
    _lib_commerce__WEBPACK_IMPORTED_MODULE_2__["default"].checkout.getShippingOptions(checkoutTokenId, {
      country: country,
      region: stateProvince
    }).then(options => {
      // Pre-select the first available method
      const shippingOption = options[0] || null;
      this.setState({
        shippingOption: shippingOption,
        shippingOptions: options
      });
    }).catch(error => {
      console.log('There was an error fetching the shipping methods', error);
    });
  }

  handleFormChanges(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleShippingCountryChange(e) {
    const currentValue = e.target.value;
    this.fetchSubdivisions(currentValue);
  }

  handleSubdivisionChange(e) {
    const currentValue = e.target.value;
    this.fetchShippingOptions(this.state.checkoutToken.id, this.state.shippingCountry, currentValue);
  }

  handleCaptureCheckout(e) {
    e.preventDefault();
    let {
      loading,
      user
    } = this.props.useFetchUser;
    let commerceCustomer = null;

    if (!loading && user) {
      commerceCustomer = this.context.getCommerceCustomer(user.commerceID);

      if (commerceCustomer == null) {
        commerceCustomer = this.context.createCommerceCustomer(user.email); //TODO UPDATE USER WITH COMMERCE ID
      } //TODO ADD CHECK TO SEE IF commercecustomer exists?

    }

    try {
      const orderData = {
        tokenID: this.context.checkoutToken.id,
        line_items: this.context.checkoutToken.live.line_items,
        customer: {
          id: commerceCustomer.id,
          firstname: this.state.firstName,
          lastname: this.state.lastName,
          email: this.state.email
        },
        shipping: {
          name: this.state.shippingName,
          street: this.state.shippingStreet,
          town_city: this.state.shippingCity,
          county_state: this.state.shippingStateProvince,
          postal_zip_code: this.state.shippingPostalZipCode,
          country: this.state.shippingCountry
        },
        fulfillment: {
          shipping_method: this.state.shippingOption.id
        },
        payment: {
          gateway: "test_gateway",
          card: {
            number: this.state.cardNum,
            expiry_month: this.state.expMonth,
            expiry_year: this.state.expYear,
            cvc: this.state.ccv,
            postal_zip_code: this.state.billingPostalZipcode
          }
        }
      };
      this.context.handleCaptureCheckout(orderData);
    } catch (error) {
      console.log("There was an error with the order data", error);
    }
  }

  renderCheckoutForm() {
    const {
      shippingCountries,
      shippingSubdivisions,
      shippingOptions
    } = this.state;
    return __jsx("form", {
      className: "checkout__form",
      onChange: this.handleFormChanges,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }
    }, __jsx("h4", {
      className: "checkout__subheading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 17
      }
    }, "Customer information"), __jsx("label", {
      className: "checkout__label",
      htmlFor: "firstName",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }
    }, "First name"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      onChange: this.handleFormChanges,
      value: this.state.firstName,
      name: "firstName",
      placeholder: "Enter your first name",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 17
      }
    }), __jsx("label", {
      className: "checkout__label",
      htmlFor: "lastName",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }
    }, "Last name"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      onChange: this.handleFormChanges,
      value: this.state.lastName,
      name: "lastName",
      placeholder: "Enter your last name",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }
    }), __jsx("label", {
      className: "checkout__label",
      htmlFor: "email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }
    }, "Email"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      onChange: this.handleFormChanges,
      value: this.state.email,
      name: "email",
      placeholder: "Enter your email",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }
    }), __jsx("h4", {
      className: "checkout__subheading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    }, "Shipping details"), __jsx("label", {
      className: "checkout__label",
      htmlFor: "shippingName",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }
    }, "Full name"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      onChange: this.handleFormChanges,
      value: this.state.shippingName,
      name: "shippingName",
      placeholder: "Enter your shipping full name",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }), __jsx("label", {
      className: "checkout__label",
      htmlFor: "shippingStreet",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }
    }, "Street address"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      onChange: this.handleFormChanges,
      value: this.state.shippingStreet,
      name: "shippingStreet",
      placeholder: "Enter your street address",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 17
      }
    }), __jsx("label", {
      className: "checkout__label",
      htmlFor: "shippingCity",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }
    }, "City"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      onChange: this.handleFormChanges,
      value: this.state.shippingCity,
      name: "shippingCity",
      placeholder: "Enter your city",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }
    }), __jsx("label", {
      className: "checkout__label",
      htmlFor: "shippingPostalZipCode",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 17
      }
    }, "Postal/Zip code"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      onChange: this.handleFormChanges,
      value: this.state.shippingPostalZipCode,
      name: "shippingPostalZipCode",
      placeholder: "Enter your postal/zip code",
      required: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }
    }), __jsx("label", {
      className: "checkout__label",
      htmlFor: "shippingCountry",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }
    }, "Country"), __jsx("select", {
      value: this.state.shippingCountry,
      name: "shippingCountry",
      onChange: this.handleShippingCountryChange,
      className: "checkout__select",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, __jsx("option", {
      disabled: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 21
      }
    }, "Country"), Object.keys(shippingCountries).map(index => {
      return __jsx("option", {
        value: index,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 33
        }
      }, shippingCountries[index]);
    }), ";"), __jsx("label", {
      className: "checkout__label",
      htmlFor: "shippingStateProvince",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 17
      }
    }, "State/province"), __jsx("select", {
      value: this.state.shippingStateProvince,
      name: "shippingStateProvince",
      onChange: this.handleSubdivisionChange,
      className: "checkout__select",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 17
      }
    }, __jsx("option", {
      className: "checkout__option",
      disabled: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 21
      }
    }, "State/province"), Object.keys(shippingSubdivisions).map(index => {
      return __jsx("option", {
        value: index,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 33
        }
      }, shippingSubdivisions[index]);
    }), ";"), __jsx("label", {
      className: "checkout__label",
      htmlFor: "shippingOption",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }
    }, "Shipping method"), __jsx("select", {
      value: this.state.shippingOption.id,
      name: "shippingOption",
      onChange: this.handleFormChanges,
      className: "checkout__select",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    }, __jsx("option", {
      className: "checkout__select-option",
      disabled: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 21
      }
    }, "Select a shipping method"), shippingOptions.map((method, index) => {
      return __jsx("option", {
        className: "checkout__select-option",
        value: method.id,
        key: index,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 33
        }
      }, `${method.description} - $${method.price.formatted_with_code}`);
    }), ";"), __jsx("h4", {
      className: "checkout__subheading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 17
      }
    }, "Payment information"), __jsx("label", {
      className: "checkout__label",
      htmlFor: "cardNum",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 17
      }
    }, "Credit card number"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      name: "cardNum",
      onChange: this.handleFormChanges,
      value: this.state.cardNum,
      placeholder: "Enter your card number",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 17
      }
    }), __jsx("label", {
      className: "checkout__label",
      htmlFor: "expMonth",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 17
      }
    }, "Expiry month"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      name: "expMonth",
      onChange: this.handleFormChanges,
      value: this.state.expMonth,
      placeholder: "Card expiry month",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 17
      }
    }), __jsx("label", {
      className: "checkout__label",
      htmlFor: "expYear",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 17
      }
    }, "Expiry year"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      name: "expYear",
      onChange: this.handleFormChanges,
      value: this.state.expYear,
      placeholder: "Card expiry year",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 17
      }
    }), __jsx("label", {
      className: "checkout__label",
      htmlFor: "ccv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }
    }, "CCV"), __jsx("input", {
      className: "checkout__input",
      type: "text",
      name: "ccv",
      onChange: this.handleFormChanges,
      value: this.state.ccv,
      placeholder: "CCV (3 digits)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 17
      }
    }), __jsx("button", {
      onClick: this.handleCaptureCheckout,
      className: "checkout__btn-confirm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 17
      }
    }, "Confirm order"));
  }

  renderCheckoutSummary() {
    const {
      cart
    } = this.context;

    if (Object.keys(cart).length > 0) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: "checkout__summary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 21
        }
      }, __jsx("h4", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }
      }, "Order summary"), cart.line_items.map(lineItem => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        key: lineItem.id,
        className: "checkout__summary-details",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 33
        }
      }, __jsx("img", {
        className: "checkout__summary-img",
        src: lineItem.media.source,
        alt: lineItem.name,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 37
        }
      }), __jsx("p", {
        className: "checkout__summary-name",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 37
        }
      }, lineItem.quantity, " x ", lineItem.name), __jsx("p", {
        className: "checkout__summary-value",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 37
        }
      }, lineItem.line_total.formatted_with_symbol)))), __jsx("div", {
        className: "checkout__summary-total",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 25
        }
      }, __jsx("p", {
        className: "checkout__summary-price",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 29
        }
      }, __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 33
        }
      }, "Subtotal:"), cart.subtotal.formatted_with_symbol))));
    }
  }

  render() {
    return __jsx("div", {
      className: "checkout",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 13
      }
    }, __jsx("h2", {
      className: "checkout__heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 17
      }
    }, "Checkout"), __jsx("div", {
      className: "checkout__wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 17
      }
    }, this.renderCheckoutForm(), this.renderCheckoutSummary()));
  }

}

_defineProperty(Checkout, "contextType", _context_state__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_user__WEBPACK_IMPORTED_MODULE_4__["withUseFetchUser"])(Checkout));
Checkout.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onCaptureCheckout: () => {}
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvY29tbWVyY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2hlY2tvdXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoZWMvY29tbWVyY2UuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJjYXJ0QVBJIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsInRpbWVvdXQiLCJoZWFkZXJzIiwicHJvZHVjdEFQSSIsIm9yZGVybWFuYWdlbWVudEFQSSIsIkFwcFdyYXBwZXIiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInN0YXRlIiwiY2FydElEIiwib3JkZXIiLCJjdXN0b21lciIsImZpcnN0bmFtZSIsImNhcnQiLCJsaW5lX2l0ZW1zIiwibWVkaWEiLCJzb3VyY2UiLCJsaW5lX3RvdGFsIiwiZm9ybWF0dGVkX3dpdGhfc3ltYm9sIiwic3VidG90YWwiLCJ0b3RhbF91bmlxdWVfaXRlbXMiLCJpc0NhcnRWaXNpYmxlIiwicHJvZHVjdHMiLCJjaGVja291dFRva2VuIiwibG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSIsImJpbmQiLCJ0b2dnbGVDYXJ0IiwiaGFuZGxlQWRkVG9DYXJ0IiwiaGFuZGxlVXBkYXRlQ2FydFF0eSIsImhhbmRsZVJlbW92ZUZyb21DYXJ0IiwiaGFuZGxlRW1wdHlDYXJ0IiwiZmV0Y2hDYXJ0IiwicmVmcmVzaENhcnQiLCJoYW5kbGVDYXB0dXJlQ2hlY2tvdXQiLCJmZXRjaFByb2R1Y3RzIiwiZ2VuZXJhdGVDaGVja291dFRva2VuIiwiY3JlYXRlQ29tbWVyY2VDdXN0b21lciIsImdldENvbW1lcmNlQ3VzdG9tZXIiLCJnZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwicmV0cmlldmVDYXJ0IiwiY3JlYXRlQ2FydCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0SWQiLCJxdWFudGl0eSIsInBvc3QiLCJpdGVtIiwibGluZUl0ZW1JZCIsInB1dCIsInJlc3AiLCJkZWxldGUiLCJpZCIsInNldCIsIm5ld09yZGVyIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIlJvdXRlciIsInB1c2giLCJwYXRobmFtZSIsImxlbmd0aCIsInRva2VuIiwiY3VzdG9tZXJFbWFpbCIsImVtYWlsIiwiY3VzdG9tZXJJRCIsInVwZGF0ZUF1dGhDdXN0b21lckNvbW1lcmNlSUQiLCJjb21tZXJjZUlEIiwicmVuZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0IiwiY29tbWVyY2VBUElLRVkiLCJFcnJvciIsIkNvbW1lcmNlIiwiZmV0Y2hVc2VyIiwiY29va2llIiwicmVzIiwiZmV0Y2giLCJvayIsIl9fdXNlciIsImpzb24iLCJ1c2VGZXRjaFVzZXIiLCJyZXF1aXJlZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInVzZUVmZmVjdCIsImlzTW91bnRlZCIsImxvY2F0aW9uIiwiaHJlZiIsIndpdGhVc2VGZXRjaFVzZXIiLCJXcmFwcGVkQ29tcG9uZW50IiwibXlIb29rVmFsdWUiLCJDaGVja291dCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2hpcHBpbmdOYW1lIiwic2hpcHBpbmdTdHJlZXQiLCJzaGlwcGluZ0NpdHkiLCJzaGlwcGluZ1N0YXRlUHJvdmluY2UiLCJzaGlwcGluZ1Bvc3RhbFppcENvZGUiLCJzaGlwcGluZ0NvdW50cnkiLCJjYXJkTnVtIiwiZXhwTW9udGgiLCJleHBZZWFyIiwiY2N2IiwiYmlsbGluZ1Bvc3RhbFppcGNvZGUiLCJzaGlwcGluZ0NvdW50cmllcyIsInNoaXBwaW5nU3ViZGl2aXNpb25zIiwic2hpcHBpbmdPcHRpb25zIiwic2hpcHBpbmdPcHRpb24iLCJoYW5kbGVGb3JtQ2hhbmdlcyIsImhhbmRsZVNoaXBwaW5nQ291bnRyeUNoYW5nZSIsImhhbmRsZVN1YmRpdmlzaW9uQ2hhbmdlIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb250ZXh0IiwiY29tcG9uZW50RGlkVXBkYXRlIiwicHJldlByb3BzIiwicHJldlN0YXRlIiwiZmV0Y2hTaGlwcGluZ09wdGlvbnMiLCJmZXRjaFNoaXBwaW5nQ291bnRyaWVzIiwiY2hlY2tvdXRUb2tlbklkIiwiY29tbWVyY2UiLCJzZXJ2aWNlcyIsImxvY2FsZUxpc3RTaGlwcGluZ0NvdW50cmllcyIsImNvdW50cmllcyIsImZldGNoU3ViZGl2aXNpb25zIiwiY291bnRyeUNvZGUiLCJsb2NhbGVMaXN0U3ViZGl2aXNpb25zIiwic3ViZGl2aXNpb25zIiwiY291bnRyeSIsInN0YXRlUHJvdmluY2UiLCJjaGVja291dCIsImdldFNoaXBwaW5nT3B0aW9ucyIsInJlZ2lvbiIsIm9wdGlvbnMiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiY3VycmVudFZhbHVlIiwicHJldmVudERlZmF1bHQiLCJjb21tZXJjZUN1c3RvbWVyIiwib3JkZXJEYXRhIiwidG9rZW5JRCIsImxpdmUiLCJsYXN0bmFtZSIsInNoaXBwaW5nIiwic3RyZWV0IiwidG93bl9jaXR5IiwiY291bnR5X3N0YXRlIiwicG9zdGFsX3ppcF9jb2RlIiwiZnVsZmlsbG1lbnQiLCJzaGlwcGluZ19tZXRob2QiLCJwYXltZW50IiwiZ2F0ZXdheSIsImNhcmQiLCJudW1iZXIiLCJleHBpcnlfbW9udGgiLCJleHBpcnlfeWVhciIsImN2YyIsInJlbmRlckNoZWNrb3V0Rm9ybSIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpbmRleCIsIm1ldGhvZCIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJmb3JtYXR0ZWRfd2l0aF9jb2RlIiwicmVuZGVyQ2hlY2tvdXRTdW1tYXJ5IiwibGluZUl0ZW0iLCJwcm9wVHlwZXMiLCJoaXN0b3J5IiwiUHJvcFR5cGVzIiwib2JqZWN0Iiwib25DYXB0dXJlQ2hlY2tvdXQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sTUFBTUEsVUFBVSxnQkFBR0MsMkRBQWEsRUFBaEM7QUFFUCxNQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENB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Q0FESixDQURILENBRkwsRUFXSTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUcsaUJBQVMsRUFBQyx5QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixFQUVLTCxJQUFJLENBQUNNLFFBQUwsQ0FBY0QscUJBRm5CLENBREosQ0FYSixDQURKLENBREo7QUFzQkg7QUFDSjs7QUFFRDJELFFBQU0sR0FBRztBQUNMLFdBQ0k7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSSxlQUFTLEVBQUMsbUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUlJO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSyxLQUFLaUcsa0JBQUwsRUFETCxFQUVLLEtBQUtTLHFCQUFMLEVBRkwsQ0FKSixDQURKO0FBV0g7O0FBL1Q0Qjs7Z0JBQTNCN0UsUSxpQkFrQ21CaEgseUQ7O0FBOFJ4QjtBQUVjNkcsaUlBQWdCLENBQUNHLFFBQUQsQ0FBL0I7QUFFQUEsUUFBUSxDQUFDK0UsU0FBVCxHQUFxQjtBQUNqQkMsU0FBTyxFQUFFQyxpREFBUyxDQUFDQyxNQURGO0FBRWpCQyxtQkFBaUIsRUFBRSxNQUFNLENBQUc7QUFGWCxDQUFyQixDOzs7Ozs7Ozs7OztBQzFVQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9jaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvY2hlY2tvdXQuanNcIik7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGNhcnRBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkNBUlRNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHByb2R1Y3RBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LlBST0RVQ1RTTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBvcmRlcm1hbmFnZW1lbnRBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk9SREVSTUFOQUdFTUVOVE1TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY2xhc3MgQXBwV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhcnRJRDogXCJcIixcclxuICAgICAgb3JkZXI6IHsgY3VzdG9tZXI6IHsgZmlyc3RuYW1lOiBcIlwiIH0gfSxcclxuXHJcbiAgICAgIGNhcnQ6IHsgbGluZV9pdGVtczogW3sgbWVkaWE6IHsgc291cmNlOiBcIlwiIH0sIGxpbmVfdG90YWw6IHsgZm9ybWF0dGVkX3dpdGhfc3ltYm9sOiBcIlwiIH0gfV0sIHN1YnRvdGFsOiB7IGZvcm1hdHRlZF93aXRoX3N5bWJvbDogXCJcIiB9LCB0b3RhbF91bmlxdWVfaXRlbXM6IDAgfSxcclxuICAgICAgaXNDYXJ0VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgY2hlY2tvdXRUb2tlbjoge30sXHJcbiAgICAgIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2U6IHRoaXMubG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZS5iaW5kKHRoaXMpLFxyXG4gICAgICB0b2dnbGVDYXJ0OiB0aGlzLnRvZ2dsZUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlQWRkVG9DYXJ0OiB0aGlzLmhhbmRsZUFkZFRvQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVVcGRhdGVDYXJ0UXR5OiB0aGlzLmhhbmRsZVVwZGF0ZUNhcnRRdHkuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQ6IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlRW1wdHlDYXJ0OiB0aGlzLmhhbmRsZUVtcHR5Q2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBmZXRjaENhcnQ6IHRoaXMuZmV0Y2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIHJlZnJlc2hDYXJ0OiB0aGlzLnJlZnJlc2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUNhcHR1cmVDaGVja291dDogdGhpcy5oYW5kbGVDYXB0dXJlQ2hlY2tvdXQuYmluZCh0aGlzKSxcclxuICAgICAgZmV0Y2hQcm9kdWN0czogdGhpcy5mZXRjaFByb2R1Y3RzLmJpbmQodGhpcyksXHJcbiAgICAgIGdlbmVyYXRlQ2hlY2tvdXRUb2tlbjogdGhpcy5nZW5lcmF0ZUNoZWNrb3V0VG9rZW4uYmluZCh0aGlzKSxcclxuICAgICAgY3JlYXRlQ29tbWVyY2VDdXN0b21lcjogdGhpcy5jcmVhdGVDb21tZXJjZUN1c3RvbWVyLmJpbmQodGhpcyksXHJcbiAgICAgIGdldENvbW1lcmNlQ3VzdG9tZXI6IHRoaXMuZ2V0Q29tbWVyY2VDdXN0b21lci5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcHJvZHVjdHMgZGF0YSBmcm9tIENoZWMgYW5kIHN0b3JlcyBpbiB0aGUgcHJvZHVjdHMgZGF0YSBvYmplY3QuXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9wcm9kdWN0c1xyXG4gICAqL1xyXG4gIGFzeW5jIGZldGNoUHJvZHVjdHMoKSB7XHJcbiAgICBwcm9kdWN0QVBJLmdldChcIi9nZXRcIikudGhlbigocHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzOiBwcm9kdWN0cy5kYXRhLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgcHJvZHVjdHMnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQ2FydCgpIHtcclxuICAgIGNvbnN0IGNhcnRJRCA9IENvb2tpZXMuZ2V0KCdjYXJ0SUQnKTtcclxuXHJcbiAgICBpZiAoYXdhaXQgdGhpcy5yZXRyaWV2ZUNhcnQoY2FydElEKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcnQgUmV0cmlldmVkIVwiKTtcclxuICAgIH0gZWxzZSBpZiAoYXdhaXQgdGhpcy5jcmVhdGVDYXJ0KCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJ0IENyZWF0ZWQhXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBmZXRjaGluZyB0aGUgY2FydC5cIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQWN0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhIHNhdmVkIG9yZGVyIHJlY2VpcHQgZnJvbSBsb2NhbCBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IHRoZSBjb25maXJtYXRpb24gcGFnZVxyXG4gICAqIGFnYWluIGJldHdlZW4gcGFnZSByZWZyZXNoZXMuXHJcbiAgICovXHJcbiAgbG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyX3JlY2VpcHQnKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXI6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcl9yZWNlaXB0JykpIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGhpZGUgY2FydCBpbiBuYXZcclxuICAgKi9cclxuICB0b2dnbGVDYXJ0KCkge1xyXG4gICAgY29uc3QgeyBpc0NhcnRWaXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzQ2FydFZpc2libGU6ICFpc0NhcnRWaXNpYmxlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLy0+IHN0YXJ0IG9mIGNhcnQgZnVuY3Rpb25zXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHByb2R1Y3QgdG8gdGhlIGN1cnJlbnQgY2FydCBpbiBzZXNzaW9uXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNhZGQtdG8tY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2R1Y3RJZCBUaGUgSUQgb2YgdGhlIHByb2R1Y3QgYmVpbmcgYWRkZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHkgVGhlIHF1YW50aXR5IG9mIHRoZSBwcm9kdWN0IGJlaW5nIGFkZGVkXHJcbiAgICovXHJcbiAgYXN5bmMgaGFuZGxlQWRkVG9DYXJ0KHByb2R1Y3RJZCwgcXVhbnRpdHkpIHtcclxuXHJcbiAgICBhd2FpdCBjYXJ0QVBJLnBvc3QoXCIvYWRkdG9cIiwgeyBjYXJ0SUQ6IHRoaXMuc3RhdGUuY2FydElELCBwcm9kdWN0SWQ6IHByb2R1Y3RJZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGl0ZW0uZGF0YS5jYXJ0IH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gYWRkaW5nIGEgY2FydCBpdGVtJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGxpbmVfaXRlbXMgaW4gY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jdXBkYXRlLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lSXRlbUlkIElEIG9mIHRoZSBjYXJ0IGxpbmUgaXRlbSBiZWluZyB1cGRhdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1YW50aXR5IE5ldyBsaW5lIGl0ZW0gcXVhbnRpdHkgdG8gdXBkYXRlXHJcbiAgICovXHJcbiAgaGFuZGxlVXBkYXRlQ2FydFF0eShsaW5lSXRlbUlkLCBxdWFudGl0eSkge1xyXG4gICAgY2FydEFQSS5wdXQoXCIvdXBkYXRlcXR5XCIsIHsgY2FydElEOiB0aGlzLnN0YXRlLmNhcnRJRCwgbGluZUl0ZW1JZDogbGluZUl0ZW1JZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyB0aGUgY2FydCBpdGVtcycsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBsaW5lIGl0ZW0gZnJvbSBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNyZW1vdmUtZnJvbS1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZUl0ZW1JZCBJRCBvZiB0aGUgbGluZSBpdGVtIGJlaW5nIHJlbW92ZWRcclxuICAgKi9cclxuICBoYW5kbGVSZW1vdmVGcm9tQ2FydChsaW5lSXRlbUlkKSB7XHJcbiAgICBjYXJ0QVBJLmRlbGV0ZShcIi9yZW1vdmVmcm9tL1wiICsgdGhpcy5zdGF0ZS5jYXJ0SUQgKyBcIi9cIiArIGxpbmVJdGVtSWQpLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHJlbW92aW5nIHRoZSBpdGVtIGZyb20gdGhlIGNhcnQnLCBlcnJvcik7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbXB0aWVzIGNhcnQgY29udGVudHNcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3JlbW92ZS1mcm9tLWNhcnRcclxuICAgKi9cclxuICBhc3luYyBoYW5kbGVFbXB0eUNhcnQoKSB7XHJcbiAgICBhd2FpdCBjYXJ0QVBJLmRlbGV0ZShcIi9lbXB0eS9cIiArIHRoaXMuc3RhdGUuY2FydElEKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBlbXB0eWluZyB0aGUgY2FydCcsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDcmVhdGVzIGEgY2FydFxyXG4gICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0XHJcbiAgKi9cclxuICBhc3luYyBjcmVhdGVDYXJ0KCkge1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9jcmVhdGVcIikudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoJ2NhcnRJRCcsIGNhcnQuZGF0YS5pZCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJldHJpZXZlQ2FydChjYXJ0SUQpIHtcclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9mZXRjaC9cIiArIGNhcnRJRCkudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZnJlc2hlcyB0byBhIG5ldyBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0I3JlZnJlc2gtY2FydFxyXG4gICAqL1xyXG4gIHJlZnJlc2hDYXJ0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVDYXJ0KCk7XHJcbiAgfVxyXG4gIC8vPT4gZW5kIGZvIGNhcnQgZnVuY3Rpb25zXHJcblxyXG4gIC8qKlxyXG4gICAqIENhcHR1cmVzIHRoZSBjaGVja291dFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjY2FwdHVyZS1vcmRlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG5ld09yZGVyIFRoZSBuZXcgb3JkZXIgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBoYW5kbGVDYXB0dXJlQ2hlY2tvdXQobmV3T3JkZXIpIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBvcmRlcm1hbmFnZW1lbnRBUEkucG9zdChcIi9jaGVja291dC9jcmVhdGVcIiwgbmV3T3JkZXIpLnRoZW4oKG9yZGVyKSA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgb3JkZXI6IG9yZGVyLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFN0b3JlIHRoZSBvcmRlciBpbiBzZXNzaW9uIHN0b3JhZ2Ugc28gd2UgY2FuIHNob3cgaXQgYWdhaW5cclxuICAgICAgICAvLyBpZiB0aGUgdXNlciByZWZyZXNoZXMgdGhlIHBhZ2UhXHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlcl9yZWNlaXB0JywgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcclxuICAgICAgICAvLyBDbGVhcnMgdGhlIGNhcnRcclxuICAgICAgICB0aGlzLnJlZnJlc2hDYXJ0KCk7XHJcbiAgICAgICAgLy8gU2VuZCB0aGUgdXNlciB0byB0aGUgcmVjZWlwdFxyXG4gICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIHBhdGhuYW1lOiAnL2NvbmZpcm1hdGlvbidcclxuICAgICAgICB9KVxyXG4gICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGNvbmZpcm1pbmcgeW91ciBvcmRlcicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgaGFzIGJlZW4gYW4gZXJyb3IgcGxhY2luZyB0aGUgb3JkZXJcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvKipcclxuICAgICAqICBHZW5lcmF0ZXMgYSBjaGVja291dCB0b2tlblxyXG4gICAgICogIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjZ2VuZXJhdGUtdG9rZW5cclxuICAgICAqL1xyXG4gIGdlbmVyYXRlQ2hlY2tvdXRUb2tlbigpIHtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGNhcnQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgIGlmIChjYXJ0LmxpbmVfaXRlbXMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgIG9yZGVybWFuYWdlbWVudEFQSS5wb3N0KFwiL2NoZWNrb3V0L2dlbmVyYXRldG9rZW5cIiwgeyBjYXJ0SUQ6IGNhcnQuaWQgfSkudGhlbih0b2tlbiA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb2tlbjogdG9rZW4uZGF0YSB9KTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGluIGdlbmVyYXRpbmcgYSB0b2tlbicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIGhhcyBiZWVuIGFuIGVycm9yIGdlbmVyYXRpbmcgYSBjaGVja291dCB0b2tlbiBmb3IgdGhlIG9yZGVyXCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjcmVhdGVDb21tZXJjZUN1c3RvbWVyKGN1c3RvbWVyRW1haWwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIG9yZGVybWFuYWdlbWVudEFQSS5wb3N0KFwiL2N1c3RvbWVyL2NyZWF0ZVwiLCB7IGVtYWlsOiBjdXN0b21lckVtYWlsIH0pLnRoZW4oKGN1c3RvbWVyKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiBjdXN0b21lcjtcclxuXHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgY3JlYXRpbmcgYSBjdXN0b21lciB3aXRoIHRoZSBlbWFpbDonICsgY3VzdG9tZXJFbWFpbCwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBjcmVhdGluZyBhIGN1c3RvbWVyIHdpdGggdGhlIGVtYWlsOicgKyBjdXN0b21lckVtYWlsLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0Q29tbWVyY2VDdXN0b21lcihjdXN0b21lcklEKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBvcmRlcm1hbmFnZW1lbnRBUEkuZ2V0KFwiL2N1c3RvbWVyL2dldC9cIiArIFwiY3VzdG9tZXJJRFwiKS50aGVuKChjdXN0b21lcikgPT4ge1xyXG5cclxuICAgICAgICByZXR1cm4gY3VzdG9tZXI7IC8vIEFkZCByZXR1cm5zIGZvciBvdGhlciBjYXRjaCBcclxuXHJcbiAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyB0aGUgY3VzdG9tZXIgd2l0aCB0aGUgaWQ6JyArIGN1c3RvbWVySUQsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyB0aGUgY3VzdG9tZXIgd2l0aCB0aGUgaWQ6JyArIGN1c3RvbWVySUQsIGVycm9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUF1dGhDdXN0b21lckNvbW1lcmNlSUQoY29tbWVyY2VJRCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXhpb3MucG9zdChcIi9hcGkvYXV0aC91cGRhdGV1c2VyL1wiLCB7IGlkOiBjb21tZXJjZUlEIH0pLnRoZW4oKGN1c3RvbWVyKSA9PiB7XHJcblxyXG4gICAgICAgIHJldHVybiBjdXN0b21lcjsgLy8gQWRkIHJldHVybnMgZm9yIG90aGVyIGNhdGNoIFxyXG5cclxuICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIHRoZSBjdXN0b21lciB3aXRoIHRoZSBpZDonICsgY3VzdG9tZXJJRCwgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIHRoZSBjdXN0b21lciB3aXRoIHRoZSBpZDonICsgY3VzdG9tZXJJRCwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBXcmFwcGVyIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iLCJpbXBvcnQgQ29tbWVyY2UgZnJvbSBcIkBjaGVjL2NvbW1lcmNlLmpzXCI7XHJcblxyXG5jb25zdCBjb21tZXJjZUFQSUtFWSA9IHByb2Nlc3MuZW52LkNPTU1FUkNFUFVCTElDS0VZO1xyXG5cclxuaWYgKCFjb21tZXJjZUFQSUtFWSkge1xyXG4gICAgdGhyb3cgRXJyb3IoJ1lvdXIgcHVibGljIEFQSSBrZXkgbXVzdCBiZSBwcm92aWRlZCBhcyBhbiBlbnZpcm9ubWVudCB2YXJpYWJsZScpO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBDb21tZXJjZShjb21tZXJjZUFQSUtFWSwgdHJ1ZSk7IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcihjb29raWUgPSAnJykge1xyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX191c2VyKSB7XHJcbiAgICByZXR1cm4gd2luZG93Ll9fdXNlclxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnL2FwaS9hdXRoL21lJyxcclxuICAgIGNvb2tpZVxyXG4gICAgICA/IHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBjb29raWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfVxyXG4gICAgICA6IHt9XHJcbiAgKVxyXG5cclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgZGVsZXRlIHdpbmRvdy5fX3VzZXJcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgd2luZG93Ll9fdXNlciA9IGpzb25cclxuICB9XHJcbiAgcmV0dXJuIGpzb25cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUZldGNoVXNlcih7IHJlcXVpcmVkIH0gPSB7fSkge1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKFxyXG4gICAgKCkgPT4gISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX191c2VyKVxyXG4gIClcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gd2luZG93Ll9fdXNlciB8fCBudWxsXHJcbiAgfSlcclxuXHJcbiAgdXNlRWZmZWN0KFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBpZiAoIWxvYWRpbmcgJiYgdXNlcikge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgICAgbGV0IGlzTW91bnRlZCA9IHRydWVcclxuXHJcbiAgICAgIGZldGNoVXNlcigpLnRoZW4oKHVzZXIpID0+IHtcclxuICAgICAgICAvLyBPbmx5IHNldCB0aGUgdXNlciBpZiB0aGUgY29tcG9uZW50IGlzIHN0aWxsIG1vdW50ZWRcclxuICAgICAgICBpZiAoaXNNb3VudGVkKSB7XHJcbiAgICAgICAgICAvLyBXaGVuIHRoZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gYnV0IGxvZ2luIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICBpZiAocmVxdWlyZWQgJiYgIXVzZXIpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2FwaS9sb2dpbidcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzZXRVc2VyKHVzZXIpXHJcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgaXNNb3VudGVkID0gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcclxuICAgIFtdXHJcbiAgKVxyXG5cclxuICByZXR1cm4geyB1c2VyLCBsb2FkaW5nIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhVc2VGZXRjaFVzZXIoQ29tcG9uZW50KSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIFdyYXBwZWRDb21wb25lbnQocHJvcHMpIHtcclxuICAgIGNvbnN0IG15SG9va1ZhbHVlID0gdXNlRmV0Y2hVc2VyKCk7XHJcbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IHVzZUZldGNoVXNlcj17bXlIb29rVmFsdWV9IC8+O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY29tbWVyY2UgZnJvbSAnLi4vbGliL2NvbW1lcmNlJztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc3RhdGUnO1xyXG5pbXBvcnQgeyB3aXRoVXNlRmV0Y2hVc2VyIH0gZnJvbSAnLi4vbGliL3VzZXInXHJcblxyXG5jbGFzcyBDaGVja291dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgLy8gQ3VzdG9tZXIgZGV0YWlsc1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6ICdKYW5lJyxcclxuICAgICAgICAgICAgbGFzdE5hbWU6ICdEb2UnLFxyXG4gICAgICAgICAgICBlbWFpbDogJ2phbmVkb2VAZW1haWwuY29tJyxcclxuICAgICAgICAgICAgLy8gU2hpcHBpbmcgZGV0YWlsc1xyXG4gICAgICAgICAgICBzaGlwcGluZ05hbWU6ICdKYW5lIERvZScsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nU3RyZWV0OiAnMTIzIEZha2UgU3QnLFxyXG4gICAgICAgICAgICBzaGlwcGluZ0NpdHk6ICdMb25kb24nLFxyXG4gICAgICAgICAgICBzaGlwcGluZ1N0YXRlUHJvdmluY2U6ICcnLFxyXG4gICAgICAgICAgICBzaGlwcGluZ1Bvc3RhbFppcENvZGU6ICcnLFxyXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50cnk6ICcnLFxyXG4gICAgICAgICAgICAvLyBQYXltZW50IGRldGFpbHNcclxuICAgICAgICAgICAgY2FyZE51bTogJzQyNDIgNDI0MiA0MjQyIDQyNDInLFxyXG4gICAgICAgICAgICBleHBNb250aDogJzExJyxcclxuICAgICAgICAgICAgZXhwWWVhcjogJzIwMjMnLFxyXG4gICAgICAgICAgICBjY3Y6ICcxMjMnLFxyXG4gICAgICAgICAgICBiaWxsaW5nUG9zdGFsWmlwY29kZTogJ1NNNCA0RUQnLFxyXG4gICAgICAgICAgICAvLyBTaGlwcGluZyBhbmQgZnVsZmlsbG1lbnQgZGF0YVxyXG4gICAgICAgICAgICBzaGlwcGluZ0NvdW50cmllczoge30sXHJcbiAgICAgICAgICAgIHNoaXBwaW5nU3ViZGl2aXNpb25zOiB7fSxcclxuICAgICAgICAgICAgc2hpcHBpbmdPcHRpb25zOiBbXSxcclxuICAgICAgICAgICAgc2hpcHBpbmdPcHRpb246ICcnLFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtQ2hhbmdlcyA9IHRoaXMuaGFuZGxlRm9ybUNoYW5nZXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVNoaXBwaW5nQ291bnRyeUNoYW5nZSA9IHRoaXMuaGFuZGxlU2hpcHBpbmdDb3VudHJ5Q2hhbmdlLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJkaXZpc2lvbkNoYW5nZSA9IHRoaXMuaGFuZGxlU3ViZGl2aXNpb25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNhcHR1cmVDaGVja291dCA9IHRoaXMuaGFuZGxlQ2FwdHVyZUNoZWNrb3V0LmJpbmQodGhpcyk7XHJcbiAgICB9O1xyXG4gICAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZ2VuZXJhdGVDaGVja291dFRva2VuKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoQ2FydCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuZmV0Y2hDYXJ0KCk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zaGlwcGluZ0NvdW50cnkgIT09IHByZXZTdGF0ZS5zaGlwcGluZ0NvdW50cnkpIHtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaFNoaXBwaW5nT3B0aW9ucyh0aGlzLnN0YXRlLmNoZWNrb3V0VG9rZW4uaWQsIHRoaXMuc3RhdGUuc2hpcHBpbmdDb3VudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2hlcyBhIGxpc3Qgb2YgY291bnRyaWVzIGF2YWlsYWJsZSB0byBzaGlwIHRvIGNoZWNrb3V0IHRva2VuXHJcbiAgICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NoZWNrb3V0I2xpc3QtYXZhaWxhYmxlLXNoaXBwaW5nLWNvdW50cmllc1xyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja291dFRva2VuSWRcclxuICAgICAqL1xyXG4gICAgZmV0Y2hTaGlwcGluZ0NvdW50cmllcyhjaGVja291dFRva2VuSWQpIHtcclxuICAgICAgICBjb21tZXJjZS5zZXJ2aWNlcy5sb2NhbGVMaXN0U2hpcHBpbmdDb3VudHJpZXMoY2hlY2tvdXRUb2tlbklkKS50aGVuKChjb3VudHJpZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzaGlwcGluZ0NvdW50cmllczogY291bnRyaWVzLmNvdW50cmllcyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyBhIGxpc3Qgb2Ygc2hpcHBpbmcgY291bnRyaWVzJywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZldGNoZXMgdGhlIHN1YmRpdmlzaW9ucyAocHJvdmluY2VzL3N0YXRlcykgZm9yIGEgY291bnRyeVxyXG4gICAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jaGVja291dCNsaXN0LWFsbC1zdWJkaXZpc2lvbnMtZm9yLWEtY291bnRyeVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb3VudHJ5Q29kZVxyXG4gICAgICovXHJcbiAgICBmZXRjaFN1YmRpdmlzaW9ucyhjb3VudHJ5Q29kZSkge1xyXG4gICAgICAgIGNvbW1lcmNlLnNlcnZpY2VzLmxvY2FsZUxpc3RTdWJkaXZpc2lvbnMoY291bnRyeUNvZGUpLnRoZW4oKHN1YmRpdmlzaW9ucykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nU3ViZGl2aXNpb25zOiBzdWJkaXZpc2lvbnMuc3ViZGl2aXNpb25zLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBzdWJkaXZpc2lvbnMnLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogRmV0Y2hlcyB0aGUgYXZhaWxhYmxlIHNoaXBwaW5nIG1ldGhvZHMgZm9yIHRoZSBjdXJyZW50IGNoZWNrb3V0XHJcbiAgICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NoZWNrb3V0I2dldC1zaGlwcGluZy1tZXRob2RzXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNoZWNrb3V0VG9rZW5JZFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvdW50cnlcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdGF0ZVByb3ZpbmNlXHJcbiAgICAgKi9cclxuICAgIGZldGNoU2hpcHBpbmdPcHRpb25zKGNoZWNrb3V0VG9rZW5JZCwgY291bnRyeSwgc3RhdGVQcm92aW5jZSA9IG51bGwpIHtcclxuICAgICAgICBjb21tZXJjZS5jaGVja291dC5nZXRTaGlwcGluZ09wdGlvbnMoY2hlY2tvdXRUb2tlbklkLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgcmVnaW9uOiBzdGF0ZVByb3ZpbmNlXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKG9wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFByZS1zZWxlY3QgdGhlIGZpcnN0IGF2YWlsYWJsZSBtZXRob2RcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBwaW5nT3B0aW9uID0gb3B0aW9uc1swXSB8fCBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdPcHRpb246IHNoaXBwaW5nT3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHNoaXBwaW5nT3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBzaGlwcGluZyBtZXRob2RzJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlRm9ybUNoYW5nZXMoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVTaGlwcGluZ0NvdW50cnlDaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hTdWJkaXZpc2lvbnMoY3VycmVudFZhbHVlKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlU3ViZGl2aXNpb25DaGFuZ2UoZSkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hTaGlwcGluZ09wdGlvbnModGhpcy5zdGF0ZS5jaGVja291dFRva2VuLmlkLCB0aGlzLnN0YXRlLnNoaXBwaW5nQ291bnRyeSwgY3VycmVudFZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNhcHR1cmVDaGVja291dChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB7IGxvYWRpbmcsIHVzZXIgfSA9IHRoaXMucHJvcHMudXNlRmV0Y2hVc2VyO1xyXG4gICAgICAgIGxldCBjb21tZXJjZUN1c3RvbWVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCFsb2FkaW5nICYmIHVzZXIpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbW1lcmNlQ3VzdG9tZXIgPSB0aGlzLmNvbnRleHQuZ2V0Q29tbWVyY2VDdXN0b21lcih1c2VyLmNvbW1lcmNlSUQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKChjb21tZXJjZUN1c3RvbWVyID09IG51bGwpKSB7XHJcbiAgICAgICAgICAgICAgICBjb21tZXJjZUN1c3RvbWVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUNvbW1lcmNlQ3VzdG9tZXIodXNlci5lbWFpbCk7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE8gVVBEQVRFIFVTRVIgV0lUSCBDT01NRVJDRSBJRFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vVE9ETyBBREQgQ0hFQ0sgVE8gU0VFIElGIGNvbW1lcmNlY3VzdG9tZXIgZXhpc3RzP1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBvcmRlckRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbklEOiB0aGlzLmNvbnRleHQuY2hlY2tvdXRUb2tlbi5pZCxcclxuICAgICAgICAgICAgICAgIGxpbmVfaXRlbXM6IHRoaXMuY29udGV4dC5jaGVja291dFRva2VuLmxpdmUubGluZV9pdGVtcyxcclxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbW1lcmNlQ3VzdG9tZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RuYW1lOiB0aGlzLnN0YXRlLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsYXN0bmFtZTogdGhpcy5zdGF0ZS5sYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5lbWFpbFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNoaXBwaW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5zaGlwcGluZ05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RyZWV0OiB0aGlzLnN0YXRlLnNoaXBwaW5nU3RyZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvd25fY2l0eTogdGhpcy5zdGF0ZS5zaGlwcGluZ0NpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnR5X3N0YXRlOiB0aGlzLnN0YXRlLnNoaXBwaW5nU3RhdGVQcm92aW5jZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3N0YWxfemlwX2NvZGU6IHRoaXMuc3RhdGUuc2hpcHBpbmdQb3N0YWxaaXBDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IHRoaXMuc3RhdGUuc2hpcHBpbmdDb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZ1bGZpbGxtZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdfbWV0aG9kOiB0aGlzLnN0YXRlLnNoaXBwaW5nT3B0aW9uLmlkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGF5bWVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhdGV3YXk6IFwidGVzdF9nYXRld2F5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6IHRoaXMuc3RhdGUuY2FyZE51bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJ5X21vbnRoOiB0aGlzLnN0YXRlLmV4cE1vbnRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBpcnlfeWVhcjogdGhpcy5zdGF0ZS5leHBZZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdmM6IHRoaXMuc3RhdGUuY2N2LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0YWxfemlwX2NvZGU6IHRoaXMuc3RhdGUuYmlsbGluZ1Bvc3RhbFppcGNvZGVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5oYW5kbGVDYXB0dXJlQ2hlY2tvdXQob3JkZXJEYXRhKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZXJlIHdhcyBhbiBlcnJvciB3aXRoIHRoZSBvcmRlciBkYXRhXCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlckNoZWNrb3V0Rm9ybSgpIHtcclxuICAgICAgICBjb25zdCB7IHNoaXBwaW5nQ291bnRyaWVzLCBzaGlwcGluZ1N1YmRpdmlzaW9ucywgc2hpcHBpbmdPcHRpb25zIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjaGVja291dF9fZm9ybVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2VzfT5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjaGVja291dF9fc3ViaGVhZGluZ1wiPkN1c3RvbWVyIGluZm9ybWF0aW9uPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2xhYmVsXCIgaHRtbEZvcj1cImZpcnN0TmFtZVwiPkZpcnN0IG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNoZWNrb3V0X19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZXN9IHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0TmFtZX0gbmFtZT1cImZpcnN0TmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmaXJzdCBuYW1lXCIgcmVxdWlyZWQgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2xhYmVsXCIgaHRtbEZvcj1cImxhc3ROYW1lXCI+TGFzdCBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjaGVja291dF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2VzfSB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0TmFtZX0gbmFtZT1cImxhc3ROYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGxhc3QgbmFtZVwiIHJlcXVpcmVkIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrb3V0X19sYWJlbFwiIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjaGVja291dF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2VzfSB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCIgcmVxdWlyZWQgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX3N1YmhlYWRpbmdcIj5TaGlwcGluZyBkZXRhaWxzPC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2xhYmVsXCIgaHRtbEZvcj1cInNoaXBwaW5nTmFtZVwiPkZ1bGwgbmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlc30gdmFsdWU9e3RoaXMuc3RhdGUuc2hpcHBpbmdOYW1lfSBuYW1lPVwic2hpcHBpbmdOYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHNoaXBwaW5nIGZ1bGwgbmFtZVwiIHJlcXVpcmVkIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrb3V0X19sYWJlbFwiIGh0bWxGb3I9XCJzaGlwcGluZ1N0cmVldFwiPlN0cmVldCBhZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjaGVja291dF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2VzfSB2YWx1ZT17dGhpcy5zdGF0ZS5zaGlwcGluZ1N0cmVldH0gbmFtZT1cInNoaXBwaW5nU3RyZWV0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHN0cmVldCBhZGRyZXNzXCIgcmVxdWlyZWQgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2xhYmVsXCIgaHRtbEZvcj1cInNoaXBwaW5nQ2l0eVwiPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNoZWNrb3V0X19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZXN9IHZhbHVlPXt0aGlzLnN0YXRlLnNoaXBwaW5nQ2l0eX0gbmFtZT1cInNoaXBwaW5nQ2l0eVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBjaXR5XCIgcmVxdWlyZWQgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2xhYmVsXCIgaHRtbEZvcj1cInNoaXBwaW5nUG9zdGFsWmlwQ29kZVwiPlBvc3RhbC9aaXAgY29kZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlc30gdmFsdWU9e3RoaXMuc3RhdGUuc2hpcHBpbmdQb3N0YWxaaXBDb2RlfSBuYW1lPVwic2hpcHBpbmdQb3N0YWxaaXBDb2RlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBvc3RhbC96aXAgY29kZVwiIHJlcXVpcmVkIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrb3V0X19sYWJlbFwiIGh0bWxGb3I9XCJzaGlwcGluZ0NvdW50cnlcIj5Db3VudHJ5PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zaGlwcGluZ0NvdW50cnl9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nQ291bnRyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2hpcHBpbmdDb3VudHJ5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrb3V0X19zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gZGlzYWJsZWQ+Q291bnRyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoc2hpcHBpbmdDb3VudHJpZXMpLm1hcCgoaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17aW5kZXh9IGtleT17aW5kZXh9PntzaGlwcGluZ0NvdW50cmllc1tpbmRleF19PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2xhYmVsXCIgaHRtbEZvcj1cInNoaXBwaW5nU3RhdGVQcm92aW5jZVwiPlN0YXRlL3Byb3ZpbmNlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zaGlwcGluZ1N0YXRlUHJvdmluY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoaXBwaW5nU3RhdGVQcm92aW5jZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU3ViZGl2aXNpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX3NlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJjaGVja291dF9fb3B0aW9uXCIgZGlzYWJsZWQ+U3RhdGUvcHJvdmluY2U8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHNoaXBwaW5nU3ViZGl2aXNpb25zKS5tYXAoKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4fSBrZXk9e2luZGV4fT57c2hpcHBpbmdTdWJkaXZpc2lvbnNbaW5kZXhdfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja291dF9fbGFiZWxcIiBodG1sRm9yPVwic2hpcHBpbmdPcHRpb25cIj5TaGlwcGluZyBtZXRob2Q8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNoaXBwaW5nT3B0aW9uLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGlwcGluZ09wdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX3NlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBjbGFzc05hbWU9XCJjaGVja291dF9fc2VsZWN0LW9wdGlvblwiIGRpc2FibGVkPlNlbGVjdCBhIHNoaXBwaW5nIG1ldGhvZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcHBpbmdPcHRpb25zLm1hcCgobWV0aG9kLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGNsYXNzTmFtZT1cImNoZWNrb3V0X19zZWxlY3Qtb3B0aW9uXCIgdmFsdWU9e21ldGhvZC5pZH0ga2V5PXtpbmRleH0+e2Ake21ldGhvZC5kZXNjcmlwdGlvbn0gLSAkJHttZXRob2QucHJpY2UuZm9ybWF0dGVkX3dpdGhfY29kZX1gfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNoZWNrb3V0X19zdWJoZWFkaW5nXCI+UGF5bWVudCBpbmZvcm1hdGlvbjwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrb3V0X19sYWJlbFwiIGh0bWxGb3I9XCJjYXJkTnVtXCI+Q3JlZGl0IGNhcmQgbnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjaGVja291dF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJjYXJkTnVtXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZXN9IHZhbHVlPXt0aGlzLnN0YXRlLmNhcmROdW19IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBjYXJkIG51bWJlclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrb3V0X19sYWJlbFwiIGh0bWxGb3I9XCJleHBNb250aFwiPkV4cGlyeSBtb250aDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX2lucHV0XCIgdHlwZT1cInRleHRcIiBuYW1lPVwiZXhwTW9udGhcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVGb3JtQ2hhbmdlc30gdmFsdWU9e3RoaXMuc3RhdGUuZXhwTW9udGh9IHBsYWNlaG9sZGVyPVwiQ2FyZCBleHBpcnkgbW9udGhcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja291dF9fbGFiZWxcIiBodG1sRm9yPVwiZXhwWWVhclwiPkV4cGlyeSB5ZWFyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJjaGVja291dF9faW5wdXRcIiB0eXBlPVwidGV4dFwiIG5hbWU9XCJleHBZZWFyXCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRm9ybUNoYW5nZXN9IHZhbHVlPXt0aGlzLnN0YXRlLmV4cFllYXJ9IHBsYWNlaG9sZGVyPVwiQ2FyZCBleHBpcnkgeWVhclwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrb3V0X19sYWJlbFwiIGh0bWxGb3I9XCJjY3ZcIj5DQ1Y8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImNoZWNrb3V0X19pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNjdlwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZvcm1DaGFuZ2VzfSB2YWx1ZT17dGhpcy5zdGF0ZS5jY3Z9IHBsYWNlaG9sZGVyPVwiQ0NWICgzIGRpZ2l0cylcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYXB0dXJlQ2hlY2tvdXR9IGNsYXNzTmFtZT1cImNoZWNrb3V0X19idG4tY29uZmlybVwiPkNvbmZpcm0gb3JkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlckNoZWNrb3V0U3VtbWFyeSgpIHtcclxuICAgICAgICBjb25zdCB7IGNhcnQgfSA9IHRoaXMuY29udGV4dDtcclxuXHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGNhcnQpLmxlbmd0aCA+IDApIHtcclxuXHJcblxyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0X19zdW1tYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND5PcmRlciBzdW1tYXJ5PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NhcnQubGluZV9pdGVtcy5tYXAoKGxpbmVJdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtsaW5lSXRlbS5pZH0gY2xhc3NOYW1lPVwiY2hlY2tvdXRfX3N1bW1hcnktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNoZWNrb3V0X19zdW1tYXJ5LWltZ1wiIHNyYz17bGluZUl0ZW0ubWVkaWEuc291cmNlfSBhbHQ9e2xpbmVJdGVtLm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNoZWNrb3V0X19zdW1tYXJ5LW5hbWVcIj57bGluZUl0ZW0ucXVhbnRpdHl9IHgge2xpbmVJdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjaGVja291dF9fc3VtbWFyeS12YWx1ZVwiPntsaW5lSXRlbS5saW5lX3RvdGFsLmZvcm1hdHRlZF93aXRoX3N5bWJvbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXRfX3N1bW1hcnktdG90YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNoZWNrb3V0X19zdW1tYXJ5LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U3VidG90YWw6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJ0LnN1YnRvdGFsLmZvcm1hdHRlZF93aXRoX3N5bWJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNoZWNrb3V0X19oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2hlY2tvdXRcclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0X193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hlY2tvdXRGb3JtKCl9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2hlY2tvdXRTdW1tYXJ5KCl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVXNlRmV0Y2hVc2VyKENoZWNrb3V0KTtcclxuXHJcbkNoZWNrb3V0LnByb3BUeXBlcyA9IHtcclxuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBvbkNhcHR1cmVDaGVja291dDogKCkgPT4geyB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hlYy9jb21tZXJjZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9