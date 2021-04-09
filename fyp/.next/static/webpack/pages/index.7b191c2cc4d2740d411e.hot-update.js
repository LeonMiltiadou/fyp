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
      checkoutToken: "",
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
      cartID: this.context.cart.id
    }).then(token => {
      this.setState({
        checkoutToken: token
      });
    }).catch(error => {});
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
        lineNumber: 262,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zdGF0ZS5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNhcnRBUEkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwidGltZW91dCIsImhlYWRlcnMiLCJwcm9kdWN0QVBJIiwib3JkZXJtYW5hZ2VtZW50QVBJIiwiT1JERVJNQU5BR0VNRU5UTVNVUkwiLCJBcHBXcmFwcGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNhcnRJRCIsIm9yZGVyIiwiY2FydCIsImlzQ2FydFZpc2libGUiLCJwcm9kdWN0cyIsImNoZWNrb3V0VG9rZW4iLCJsb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlIiwiYmluZCIsInRvZ2dsZUNhcnQiLCJoYW5kbGVBZGRUb0NhcnQiLCJoYW5kbGVVcGRhdGVDYXJ0UXR5IiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJoYW5kbGVFbXB0eUNhcnQiLCJmZXRjaENhcnQiLCJyZWZyZXNoQ2FydCIsImhhbmRsZUNhcHR1cmVDaGVja291dCIsImZldGNoUHJvZHVjdHMiLCJnZW5lcmF0ZVRva2VuIiwiZ2V0IiwidGhlbiIsInNldFN0YXRlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiQ29va2llcyIsInJldHJpZXZlQ2FydCIsImNyZWF0ZUNhcnQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwicHJvZHVjdElkIiwicXVhbnRpdHkiLCJwb3N0IiwiaXRlbSIsImxpbmVJdGVtSWQiLCJwdXQiLCJyZXNwIiwiZGVsZXRlIiwiaWQiLCJzZXQiLCJjaGVja291dFRva2VuSWQiLCJuZXdPcmRlciIsImNvbW1lcmNlIiwiY2hlY2tvdXQiLCJjYXB0dXJlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInByb3BzIiwiaGlzdG9yeSIsInB1c2giLCJnZW5lcmF0ZUNoZWNrb3V0VG9rZW4iLCJjb250ZXh0IiwidG9rZW4iLCJsaW5lX2l0ZW1zIiwibGVuZ3RoIiwidHlwZSIsImZldGNoU2hpcHBpbmdDb3VudHJpZXMiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLE1BQU1BLFVBQVUsZ0JBQUdDLDJEQUFhLEVBQWhDO0FBRVAsTUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDM0JDLFNBQU8sRUFBRUMsaUNBRGtCO0FBRTNCQyxTQUFPLEVBQUUsSUFGa0I7QUFHM0JDLFNBQU8sRUFBRTtBQUNQLGNBQVUsa0JBREg7QUFFUCxvQkFBZ0I7QUFGVDtBQUhrQixDQUFiLENBQWhCO0FBU0EsTUFBTUMsVUFBVSxHQUFHTiw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDOUJDLFNBQU8sRUFBRUMsd0NBRHFCO0FBRTlCQyxTQUFPLEVBQUUsSUFGcUI7QUFHOUJDLFNBQU8sRUFBRTtBQUNQLGNBQVUsa0JBREg7QUFFUCxvQkFBZ0I7QUFGVDtBQUhxQixDQUFiLENBQW5CO0FBU0EsTUFBTUUsa0JBQWtCLEdBQUdQLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN0Q0MsU0FBTyxFQUFFQyxFQUFBLENBQVlLLG9CQURpQjtBQUV0Q0osU0FBTyxFQUFFLElBRjZCO0FBR3RDQyxTQUFPLEVBQUU7QUFDUCxjQUFVLGtCQURIO0FBRVAsb0JBQWdCO0FBRlQ7QUFINkIsQ0FBYixDQUEzQjs7QUFTQSxNQUFNSSxVQUFOLFNBQXlCQywrQ0FBekIsQ0FBbUM7QUFFakNDLGFBQVcsR0FBRztBQUNaO0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRSxFQURHO0FBRVhDLFdBQUssRUFBRSxFQUZJO0FBR1hDLFVBQUksRUFBRSxFQUhLO0FBSVhDLG1CQUFhLEVBQUUsS0FKSjtBQUtYQyxjQUFRLEVBQUUsRUFM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Q0UsTUFBQyxVQUFELENBQVksUUFBWjtBQUFxQixXQUFLLEVBQUUsS0FBSzlELEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRyxLQUFLb0QsS0FBTCxDQUFXVyxRQURkLENBREY7QUFLRDs7QUF0T2dDOztBQXlPbkM7QUFFTyxTQUFTQyxhQUFULEdBQXlCO0FBQUE7O0FBQzlCLFNBQU9DLFVBQVUsQ0FBQ2hGLFVBQUQsQ0FBakI7QUFDRDs7R0FGZStFLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2IxOTFjMmNjNGQyNzQwZDQxMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBjYXJ0QVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5DQVJUTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBwcm9kdWN0QVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5QUk9EVUNUU01TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgb3JkZXJtYW5hZ2VtZW50QVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5PUkRFUk1BTkFHRU1FTlRNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNsYXNzIEFwcFdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2FydElEOiBcIlwiLFxyXG4gICAgICBvcmRlcjoge30sXHJcbiAgICAgIGNhcnQ6IHt9LFxyXG4gICAgICBpc0NhcnRWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgICBjaGVja291dFRva2VuOiBcIlwiLFxyXG4gICAgICBsb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlOiB0aGlzLmxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UuYmluZCh0aGlzKSxcclxuICAgICAgdG9nZ2xlQ2FydDogdGhpcy50b2dnbGVDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUFkZFRvQ2FydDogdGhpcy5oYW5kbGVBZGRUb0NhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlVXBkYXRlQ2FydFF0eTogdGhpcy5oYW5kbGVVcGRhdGVDYXJ0UXR5LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZVJlbW92ZUZyb21DYXJ0OiB0aGlzLmhhbmRsZVJlbW92ZUZyb21DYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUVtcHR5Q2FydDogdGhpcy5oYW5kbGVFbXB0eUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgZmV0Y2hDYXJ0OiB0aGlzLmZldGNoQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICByZWZyZXNoQ2FydDogdGhpcy5yZWZyZXNoQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVDYXB0dXJlQ2hlY2tvdXQ6IHRoaXMuaGFuZGxlQ2FwdHVyZUNoZWNrb3V0LmJpbmQodGhpcyksXHJcbiAgICAgIGZldGNoUHJvZHVjdHM6IHRoaXMuZmV0Y2hQcm9kdWN0cy5iaW5kKHRoaXMpLFxyXG4gICAgICBnZW5lcmF0ZVRva2VuOiB0aGlzLmdlbmVyYXRlVG9rZW4uYmluZCh0aGlzKVxyXG4gICAgfTtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIHByb2R1Y3RzIGRhdGEgZnJvbSBDaGVjIGFuZCBzdG9yZXMgaW4gdGhlIHByb2R1Y3RzIGRhdGEgb2JqZWN0LlxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvcHJvZHVjdHNcclxuICAgKi9cclxuICBhc3luYyBmZXRjaFByb2R1Y3RzKCkge1xyXG4gICAgcHJvZHVjdEFQSS5nZXQoXCIvZ2V0XCIpLnRoZW4oKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0czogcHJvZHVjdHMuZGF0YS5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIHByb2R1Y3RzJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaENhcnQoKSB7XHJcbiAgICBjb25zdCBjYXJ0SUQgPSBDb29raWVzLmdldCgnY2FydElEJyk7XHJcblxyXG4gICAgaWYgKGF3YWl0IHRoaXMucmV0cmlldmVDYXJ0KGNhcnRJRCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJ0IFJldHJpZXZlZCFcIik7XHJcbiAgICB9IGVsc2UgaWYgKGF3YWl0IHRoaXMuY3JlYXRlQ2FydCgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FydCBDcmVhdGVkIVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGNhcnQuXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0FjdGlvbnNcclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYSBzYXZlZCBvcmRlciByZWNlaXB0IGZyb20gbG9jYWwgc3RvcmFnZSBzbyB3ZSBjYW4gc2hvdyB0aGUgY29uZmlybWF0aW9uIHBhZ2VcclxuICAgKiBhZ2FpbiBiZXR3ZWVuIHBhZ2UgcmVmcmVzaGVzLlxyXG4gICAqL1xyXG4gIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcl9yZWNlaXB0JykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9yZGVyOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcpKSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBoaWRlIGNhcnQgaW4gbmF2XHJcbiAgICovXHJcbiAgdG9nZ2xlQ2FydCgpIHtcclxuICAgIGNvbnN0IHsgaXNDYXJ0VmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0NhcnRWaXNpYmxlOiAhaXNDYXJ0VmlzaWJsZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8tPiBzdGFydCBvZiBjYXJ0IGZ1bmN0aW9uc1xyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBwcm9kdWN0IHRvIHRoZSBjdXJyZW50IGNhcnQgaW4gc2Vzc2lvblxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jYWRkLXRvLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9kdWN0SWQgVGhlIElEIG9mIHRoZSBwcm9kdWN0IGJlaW5nIGFkZGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1YW50aXR5IFRoZSBxdWFudGl0eSBvZiB0aGUgcHJvZHVjdCBiZWluZyBhZGRlZFxyXG4gICAqL1xyXG4gIGFzeW5jIGhhbmRsZUFkZFRvQ2FydChwcm9kdWN0SWQsIHF1YW50aXR5KSB7XHJcblxyXG4gICAgYXdhaXQgY2FydEFQSS5wb3N0KFwiL2FkZHRvXCIsIHsgY2FydElEOiB0aGlzLnN0YXRlLmNhcnRJRCwgcHJvZHVjdElkOiBwcm9kdWN0SWQsIHF1YW50aXR5OiBxdWFudGl0eSB9KS50aGVuKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiBpdGVtLmRhdGEuY2FydCB9KTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGFkZGluZyBhIGNhcnQgaXRlbScsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyBsaW5lX2l0ZW1zIGluIGNhcnRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3VwZGF0ZS1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZUl0ZW1JZCBJRCBvZiB0aGUgY2FydCBsaW5lIGl0ZW0gYmVpbmcgdXBkYXRlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFudGl0eSBOZXcgbGluZSBpdGVtIHF1YW50aXR5IHRvIHVwZGF0ZVxyXG4gICAqL1xyXG4gIGhhbmRsZVVwZGF0ZUNhcnRRdHkobGluZUl0ZW1JZCwgcXVhbnRpdHkpIHtcclxuICAgIGNhcnRBUEkucHV0KFwiL3VwZGF0ZXF0eVwiLCB7IGNhcnRJRDogdGhpcy5zdGF0ZS5jYXJ0SUQsIGxpbmVJdGVtSWQ6IGxpbmVJdGVtSWQsIHF1YW50aXR5OiBxdWFudGl0eSB9KS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgdGhlIGNhcnQgaXRlbXMnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgbGluZSBpdGVtIGZyb20gY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jcmVtb3ZlLWZyb20tY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVJdGVtSWQgSUQgb2YgdGhlIGxpbmUgaXRlbSBiZWluZyByZW1vdmVkXHJcbiAgICovXHJcbiAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQobGluZUl0ZW1JZCkge1xyXG4gICAgY2FydEFQSS5kZWxldGUoXCIvcmVtb3ZlZnJvbS9cIiArIHRoaXMuc3RhdGUuY2FydElEICsgXCIvXCIgKyBsaW5lSXRlbUlkKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZW1vdmluZyB0aGUgaXRlbSBmcm9tIHRoZSBjYXJ0JywgZXJyb3IpO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1wdGllcyBjYXJ0IGNvbnRlbnRzXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNyZW1vdmUtZnJvbS1jYXJ0XHJcbiAgICovXHJcbiAgYXN5bmMgaGFuZGxlRW1wdHlDYXJ0KCkge1xyXG4gICAgYXdhaXQgY2FydEFQSS5kZWxldGUoXCIvZW1wdHkvXCIgKyB0aGlzLnN0YXRlLmNhcnRJRCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogcmVzcC5kYXRhLmNhcnQgfSlcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgZW1wdHlpbmcgdGhlIGNhcnQnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ3JlYXRlcyBhIGNhcnRcclxuICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydFxyXG4gICovXHJcbiAgYXN5bmMgY3JlYXRlQ2FydCgpIHtcclxuXHJcbiAgICByZXR1cm4gYXdhaXQgY2FydEFQSS5nZXQoXCIvY3JlYXRlXCIpLnRoZW4oKGNhcnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGNhcnQuZGF0YSwgY2FydElEOiBjYXJ0LmRhdGEuaWQgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KCdjYXJ0SUQnLCBjYXJ0LmRhdGEuaWQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXRyaWV2ZUNhcnQoY2FydElEKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgY2FydEFQSS5nZXQoXCIvZmV0Y2gvXCIgKyBjYXJ0SUQpLnRoZW4oKGNhcnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGNhcnQuZGF0YSwgY2FydElEOiBjYXJ0LmRhdGEuaWQgfSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWZyZXNoZXMgdG8gYSBuZXcgY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydCNyZWZyZXNoLWNhcnRcclxuICAgKi9cclxuICByZWZyZXNoQ2FydCgpIHtcclxuICAgIHRoaXMuY3JlYXRlQ2FydCgpO1xyXG4gIH1cclxuICAvLz0+IGVuZCBmbyBjYXJ0IGZ1bmN0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBDYXB0dXJlcyB0aGUgY2hlY2tvdXRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NoZWNrb3V0I2NhcHR1cmUtb3JkZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja291dFRva2VuSWQgVGhlIElEIG9mIHRoZSBjaGVja291dCB0b2tlblxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBuZXdPcmRlciBUaGUgbmV3IG9yZGVyIG9iamVjdCBkYXRhXHJcbiAgICovXHJcbiAgaGFuZGxlQ2FwdHVyZUNoZWNrb3V0KGNoZWNrb3V0VG9rZW5JZCwgbmV3T3JkZXIpIHtcclxuXHJcbiAgICBvcmRlcm1hbmFnZW1lbnRBUEkucG9zdChcIi9jaGVja291dC9jcmVhdGVcIiwpXHJcbiAgICBjb21tZXJjZS5jaGVja291dC5jYXB0dXJlKGNoZWNrb3V0VG9rZW5JZCwgbmV3T3JkZXIpLnRoZW4oKG9yZGVyKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBvcmRlcjogb3JkZXIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU3RvcmUgdGhlIG9yZGVyIGluIHNlc3Npb24gc3RvcmFnZSBzbyB3ZSBjYW4gc2hvdyBpdCBhZ2FpblxyXG4gICAgICAvLyBpZiB0aGUgdXNlciByZWZyZXNoZXMgdGhlIHBhZ2UhXHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XHJcbiAgICAgIC8vIENsZWFycyB0aGUgY2FydFxyXG4gICAgICB0aGlzLnJlZnJlc2hDYXJ0KCk7XHJcbiAgICAgIC8vIFNlbmQgdGhlIHVzZXIgdG8gdGhlIHJlY2VpcHRcclxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jb25maXJtYXRpb24nKTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGNvbmZpcm1pbmcgeW91ciBvcmRlcicsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICAgKiAgR2VuZXJhdGVzIGEgY2hlY2tvdXQgdG9rZW5cclxuICAgICAqICBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NoZWNrb3V0I2dlbmVyYXRlLXRva2VuXHJcbiAgICAgKi9cclxuICBnZW5lcmF0ZUNoZWNrb3V0VG9rZW4oKSB7XHJcblxyXG4gICAgb3JkZXJtYW5hZ2VtZW50QVBJLmdldChcIi9jaGVja291dC9nZW5lcmF0ZS90b2tlblwiLCB7IGNhcnRJRDogdGhpcy5jb250ZXh0LmNhcnQuaWQgfSkudGhlbih0b2tlbiA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRva2VuOiB0b2tlbiB9KVxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgY2FydCB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgaWYgKGNhcnQubGluZV9pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGNvbW1lcmNlLmNoZWNrb3V0LmdlbmVyYXRlVG9rZW4oY2FydC5pZCwgeyB0eXBlOiAnY2FydCcgfSlcclxuICAgICAgICAudGhlbigodG9rZW4pID0+IHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRva2VuOiB0b2tlbiB9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmZldGNoU2hpcHBpbmdDb3VudHJpZXModGhpcy5zdGF0ZS5jaGVja291dFRva2VuLmlkKSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGluIGdlbmVyYXRpbmcgYSB0b2tlbicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBXcmFwcGVyIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9