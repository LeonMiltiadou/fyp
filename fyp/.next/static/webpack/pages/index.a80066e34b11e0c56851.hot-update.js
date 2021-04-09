webpackHotUpdate_N_E("pages/index",{

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
    ordermanagementAPI.get("/checkout/generate/token", {
      cartID: this.contextcartID
    }).then(token => {}).catch(error => {});
    const {
      cart
    } = this.context;

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
        lineNumber: 261,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zdGF0ZS5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNhcnRBUEkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwidGltZW91dCIsImhlYWRlcnMiLCJwcm9kdWN0QVBJIiwib3JkZXJtYW5hZ2VtZW50QVBJIiwiT1JERVJNQU5BR0VNRU5UTVNVUkwiLCJBcHBXcmFwcGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNhcnRJRCIsIm9yZGVyIiwiY2FydCIsImlzQ2FydFZpc2libGUiLCJwcm9kdWN0cyIsImxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UiLCJiaW5kIiwidG9nZ2xlQ2FydCIsImhhbmRsZUFkZFRvQ2FydCIsImhhbmRsZVVwZGF0ZUNhcnRRdHkiLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsImhhbmRsZUVtcHR5Q2FydCIsImZldGNoQ2FydCIsInJlZnJlc2hDYXJ0IiwiaGFuZGxlQ2FwdHVyZUNoZWNrb3V0IiwiZmV0Y2hQcm9kdWN0cyIsImdlbmVyYXRlVG9rZW4iLCJnZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwicmV0cmlldmVDYXJ0IiwiY3JlYXRlQ2FydCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0SWQiLCJxdWFudGl0eSIsInBvc3QiLCJpdGVtIiwibGluZUl0ZW1JZCIsInB1dCIsInJlc3AiLCJkZWxldGUiLCJpZCIsInNldCIsImNoZWNrb3V0VG9rZW5JZCIsIm5ld09yZGVyIiwiY29tbWVyY2UiLCJjaGVja291dCIsImNhcHR1cmUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsImdlbmVyYXRlQ2hlY2tvdXRUb2tlbiIsImNvbnRleHRjYXJ0SUQiLCJ0b2tlbiIsImNvbnRleHQiLCJsaW5lX2l0ZW1zIiwibGVuZ3RoIiwidHlwZSIsImNoZWNrb3V0VG9rZW4iLCJmZXRjaFNoaXBwaW5nQ291bnRyaWVzIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQSxVQUFVLGdCQUFHQywyREFBYSxFQUFoQztBQUVQLE1BQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLGlDQURrQjtBQUUzQkMsU0FBTyxFQUFFLElBRmtCO0FBRzNCQyxTQUFPLEVBQUU7QUFDUCxjQUFVLGtCQURIO0FBRVAsb0JBQWdCO0FBRlQ7QUFIa0IsQ0FBYixDQUFoQjtBQVNBLE1BQU1DLFVBQVUsR0FBR04sNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzlCQyxTQUFPLEVBQUVDLHdDQURxQjtBQUU5QkMsU0FBTyxFQUFFLElBRnFCO0FBRzlCQyxTQUFPLEVBQUU7QUFDUCxjQUFVLGtCQURIO0FBRVAsb0JBQWdCO0FBRlQ7QUFIcUIsQ0FBYixDQUFuQjtBQVNBLE1BQU1FLGtCQUFrQixHQUFHUCw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDdENDLFNBQU8sRUFBRUMsRUFBQSxDQUFZSyxvQkFEaUI7QUFFdENKLFNBQU8sRUFBRSxJQUY2QjtBQUd0Q0MsU0FBTyxFQUFFO0FBQ1AsY0FBVSxrQkFESDtBQUVQLG9CQUFnQjtBQUZUO0FBSDZCLENBQWIsQ0FBM0I7O0FBU0EsTUFBTUksVUFBTixTQUF5QkMsK0NBQXpCLENBQW1DO0FBRWpDQyxhQUFXLEdBQUc7QUFDWjtBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsRUFERztBQUVYQyxXQUFLLEVBQUUsRUFGSTtBQUdYQyxVQUFJLEVBQUUsRUFISztBQUlYQyxtQkFBYSxFQUFFLEtBSko7QUFL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T0FDRyxLQUFLbUQsS0FBTCxDQUFXYSxRQURkLENBREY7QUFLRDs7QUFyT2dDOztBQXdPbkM7QUFFTyxTQUFTQyxhQUFULEdBQXlCO0FBQUE7O0FBQzlCLFNBQU9DLFVBQVUsQ0FBQ2pGLFVBQUQsQ0FBakI7QUFDRDs7R0FGZWdGLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTgwMDY2ZTM0YjExZTBjNTY4NTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBjYXJ0QVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5DQVJUTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBwcm9kdWN0QVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5QUk9EVUNUU01TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgb3JkZXJtYW5hZ2VtZW50QVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5PUkRFUk1BTkFHRU1FTlRNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNsYXNzIEFwcFdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2FydElEOiBcIlwiLFxyXG4gICAgICBvcmRlcjoge30sXHJcbiAgICAgIGNhcnQ6IHt9LFxyXG4gICAgICBpc0NhcnRWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICBsb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlOiB0aGlzLmxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UuYmluZCh0aGlzKSxcclxuICAgICAgdG9nZ2xlQ2FydDogdGhpcy50b2dnbGVDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUFkZFRvQ2FydDogdGhpcy5oYW5kbGVBZGRUb0NhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlVXBkYXRlQ2FydFF0eTogdGhpcy5oYW5kbGVVcGRhdGVDYXJ0UXR5LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZVJlbW92ZUZyb21DYXJ0OiB0aGlzLmhhbmRsZVJlbW92ZUZyb21DYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUVtcHR5Q2FydDogdGhpcy5oYW5kbGVFbXB0eUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgZmV0Y2hDYXJ0OiB0aGlzLmZldGNoQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICByZWZyZXNoQ2FydDogdGhpcy5yZWZyZXNoQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVDYXB0dXJlQ2hlY2tvdXQ6IHRoaXMuaGFuZGxlQ2FwdHVyZUNoZWNrb3V0LmJpbmQodGhpcyksXHJcbiAgICAgIGZldGNoUHJvZHVjdHM6IHRoaXMuZmV0Y2hQcm9kdWN0cy5iaW5kKHRoaXMpLFxyXG4gICAgICBnZW5lcmF0ZVRva2VuOiB0aGlzLmdlbmVyYXRlVG9rZW4uYmluZCh0aGlzKVxyXG4gICAgfTtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIHByb2R1Y3RzIGRhdGEgZnJvbSBDaGVjIGFuZCBzdG9yZXMgaW4gdGhlIHByb2R1Y3RzIGRhdGEgb2JqZWN0LlxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvcHJvZHVjdHNcclxuICAgKi9cclxuICBhc3luYyBmZXRjaFByb2R1Y3RzKCkge1xyXG4gICAgcHJvZHVjdEFQSS5nZXQoXCIvZ2V0XCIpLnRoZW4oKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0czogcHJvZHVjdHMuZGF0YS5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIHByb2R1Y3RzJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaENhcnQoKSB7XHJcbiAgICBjb25zdCBjYXJ0SUQgPSBDb29raWVzLmdldCgnY2FydElEJyk7XHJcblxyXG4gICAgaWYgKGF3YWl0IHRoaXMucmV0cmlldmVDYXJ0KGNhcnRJRCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJ0IFJldHJpZXZlZCFcIik7XHJcbiAgICB9IGVsc2UgaWYgKGF3YWl0IHRoaXMuY3JlYXRlQ2FydCgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FydCBDcmVhdGVkIVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGNhcnQuXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0FjdGlvbnNcclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYSBzYXZlZCBvcmRlciByZWNlaXB0IGZyb20gbG9jYWwgc3RvcmFnZSBzbyB3ZSBjYW4gc2hvdyB0aGUgY29uZmlybWF0aW9uIHBhZ2VcclxuICAgKiBhZ2FpbiBiZXR3ZWVuIHBhZ2UgcmVmcmVzaGVzLlxyXG4gICAqL1xyXG4gIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcl9yZWNlaXB0JykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9yZGVyOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcpKSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBoaWRlIGNhcnQgaW4gbmF2XHJcbiAgICovXHJcbiAgdG9nZ2xlQ2FydCgpIHtcclxuICAgIGNvbnN0IHsgaXNDYXJ0VmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0NhcnRWaXNpYmxlOiAhaXNDYXJ0VmlzaWJsZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8tPiBzdGFydCBvZiBjYXJ0IGZ1bmN0aW9uc1xyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBwcm9kdWN0IHRvIHRoZSBjdXJyZW50IGNhcnQgaW4gc2Vzc2lvblxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jYWRkLXRvLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9kdWN0SWQgVGhlIElEIG9mIHRoZSBwcm9kdWN0IGJlaW5nIGFkZGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1YW50aXR5IFRoZSBxdWFudGl0eSBvZiB0aGUgcHJvZHVjdCBiZWluZyBhZGRlZFxyXG4gICAqL1xyXG4gIGFzeW5jIGhhbmRsZUFkZFRvQ2FydChwcm9kdWN0SWQsIHF1YW50aXR5KSB7XHJcblxyXG4gICAgYXdhaXQgY2FydEFQSS5wb3N0KFwiL2FkZHRvXCIsIHsgY2FydElEOiB0aGlzLnN0YXRlLmNhcnRJRCwgcHJvZHVjdElkOiBwcm9kdWN0SWQsIHF1YW50aXR5OiBxdWFudGl0eSB9KS50aGVuKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiBpdGVtLmRhdGEuY2FydCB9KTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGFkZGluZyBhIGNhcnQgaXRlbScsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyBsaW5lX2l0ZW1zIGluIGNhcnRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3VwZGF0ZS1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZUl0ZW1JZCBJRCBvZiB0aGUgY2FydCBsaW5lIGl0ZW0gYmVpbmcgdXBkYXRlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFudGl0eSBOZXcgbGluZSBpdGVtIHF1YW50aXR5IHRvIHVwZGF0ZVxyXG4gICAqL1xyXG4gIGhhbmRsZVVwZGF0ZUNhcnRRdHkobGluZUl0ZW1JZCwgcXVhbnRpdHkpIHtcclxuICAgIGNhcnRBUEkucHV0KFwiL3VwZGF0ZXF0eVwiLCB7IGNhcnRJRDogdGhpcy5zdGF0ZS5jYXJ0SUQsIGxpbmVJdGVtSWQ6IGxpbmVJdGVtSWQsIHF1YW50aXR5OiBxdWFudGl0eSB9KS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgdGhlIGNhcnQgaXRlbXMnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgbGluZSBpdGVtIGZyb20gY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jcmVtb3ZlLWZyb20tY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVJdGVtSWQgSUQgb2YgdGhlIGxpbmUgaXRlbSBiZWluZyByZW1vdmVkXHJcbiAgICovXHJcbiAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQobGluZUl0ZW1JZCkge1xyXG4gICAgY2FydEFQSS5kZWxldGUoXCIvcmVtb3ZlZnJvbS9cIiArIHRoaXMuc3RhdGUuY2FydElEICsgXCIvXCIgKyBsaW5lSXRlbUlkKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZW1vdmluZyB0aGUgaXRlbSBmcm9tIHRoZSBjYXJ0JywgZXJyb3IpO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1wdGllcyBjYXJ0IGNvbnRlbnRzXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNyZW1vdmUtZnJvbS1jYXJ0XHJcbiAgICovXHJcbiAgYXN5bmMgaGFuZGxlRW1wdHlDYXJ0KCkge1xyXG4gICAgYXdhaXQgY2FydEFQSS5kZWxldGUoXCIvZW1wdHkvXCIgKyB0aGlzLnN0YXRlLmNhcnRJRCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogcmVzcC5kYXRhLmNhcnQgfSlcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgZW1wdHlpbmcgdGhlIGNhcnQnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ3JlYXRlcyBhIGNhcnRcclxuICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydFxyXG4gICovXHJcbiAgYXN5bmMgY3JlYXRlQ2FydCgpIHtcclxuXHJcbiAgICByZXR1cm4gYXdhaXQgY2FydEFQSS5nZXQoXCIvY3JlYXRlXCIpLnRoZW4oKGNhcnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGNhcnQuZGF0YSwgY2FydElEOiBjYXJ0LmRhdGEuaWQgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KCdjYXJ0SUQnLCBjYXJ0LmRhdGEuaWQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXRyaWV2ZUNhcnQoY2FydElEKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgY2FydEFQSS5nZXQoXCIvZmV0Y2gvXCIgKyBjYXJ0SUQpLnRoZW4oKGNhcnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGNhcnQuZGF0YSwgY2FydElEOiBjYXJ0LmRhdGEuaWQgfSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWZyZXNoZXMgdG8gYSBuZXcgY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydCNyZWZyZXNoLWNhcnRcclxuICAgKi9cclxuICByZWZyZXNoQ2FydCgpIHtcclxuICAgIHRoaXMuY3JlYXRlQ2FydCgpO1xyXG4gIH1cclxuICAvLz0+IGVuZCBmbyBjYXJ0IGZ1bmN0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBDYXB0dXJlcyB0aGUgY2hlY2tvdXRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NoZWNrb3V0I2NhcHR1cmUtb3JkZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja291dFRva2VuSWQgVGhlIElEIG9mIHRoZSBjaGVja291dCB0b2tlblxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBuZXdPcmRlciBUaGUgbmV3IG9yZGVyIG9iamVjdCBkYXRhXHJcbiAgICovXHJcbiAgaGFuZGxlQ2FwdHVyZUNoZWNrb3V0KGNoZWNrb3V0VG9rZW5JZCwgbmV3T3JkZXIpIHtcclxuXHJcbiAgICBvcmRlcm1hbmFnZW1lbnRBUEkucG9zdChcIi9jaGVja291dC9jcmVhdGVcIiwpXHJcbiAgICBjb21tZXJjZS5jaGVja291dC5jYXB0dXJlKGNoZWNrb3V0VG9rZW5JZCwgbmV3T3JkZXIpLnRoZW4oKG9yZGVyKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBvcmRlcjogb3JkZXIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU3RvcmUgdGhlIG9yZGVyIGluIHNlc3Npb24gc3RvcmFnZSBzbyB3ZSBjYW4gc2hvdyBpdCBhZ2FpblxyXG4gICAgICAvLyBpZiB0aGUgdXNlciByZWZyZXNoZXMgdGhlIHBhZ2UhXHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XHJcbiAgICAgIC8vIENsZWFycyB0aGUgY2FydFxyXG4gICAgICB0aGlzLnJlZnJlc2hDYXJ0KCk7XHJcbiAgICAgIC8vIFNlbmQgdGhlIHVzZXIgdG8gdGhlIHJlY2VpcHRcclxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jb25maXJtYXRpb24nKTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGNvbmZpcm1pbmcgeW91ciBvcmRlcicsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAgKiAgR2VuZXJhdGVzIGEgY2hlY2tvdXQgdG9rZW5cclxuICAgICAqICBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NoZWNrb3V0I2dlbmVyYXRlLXRva2VuXHJcbiAgICAgKi9cclxuICBnZW5lcmF0ZUNoZWNrb3V0VG9rZW4oKSB7XHJcblxyXG4gICAgb3JkZXJtYW5hZ2VtZW50QVBJLmdldChcIi9jaGVja291dC9nZW5lcmF0ZS90b2tlblwiLCB7IGNhcnRJRDogdGhpcy5jb250ZXh0Y2FydElEIH0pLnRoZW4odG9rZW4gPT4ge1xyXG5cclxuICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IGNhcnQgfSA9IHRoaXMuY29udGV4dDtcclxuICAgIGlmIChjYXJ0LmxpbmVfaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBjb21tZXJjZS5jaGVja291dC5nZW5lcmF0ZVRva2VuKGNhcnQuaWQsIHsgdHlwZTogJ2NhcnQnIH0pXHJcbiAgICAgICAgLnRoZW4oKHRva2VuKSA9PiB0aGlzLnNldFN0YXRlKHsgY2hlY2tvdXRUb2tlbjogdG9rZW4gfSkpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5mZXRjaFNoaXBwaW5nQ291bnRyaWVzKHRoaXMuc3RhdGUuY2hlY2tvdXRUb2tlbi5pZCkpXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBpbiBnZW5lcmF0aW5nIGEgdG9rZW4nLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQXBwV3JhcHBlciB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==