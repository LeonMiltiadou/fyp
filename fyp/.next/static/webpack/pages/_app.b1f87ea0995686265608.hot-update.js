webpackHotUpdate_N_E("pages/_app",{

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
const API = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: "https://productsms.eu.ngrok.io/product",
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
      fetchProducts: this.fetchProducts.bind(this)
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

  render() {
    return __jsx(AppContext.Provider, {
      value: this.state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zdGF0ZS5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNhcnRBUEkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwidGltZW91dCIsImhlYWRlcnMiLCJwcm9kdWN0QVBJIiwiQVBJIiwiQXBwV3JhcHBlciIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJjYXJ0SUQiLCJvcmRlciIsImNhcnQiLCJpc0NhcnRWaXNpYmxlIiwicHJvZHVjdHMiLCJsb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlIiwiYmluZCIsInRvZ2dsZUNhcnQiLCJoYW5kbGVBZGRUb0NhcnQiLCJoYW5kbGVVcGRhdGVDYXJ0UXR5IiwiaGFuZGxlUmVtb3ZlRnJvbUNhcnQiLCJoYW5kbGVFbXB0eUNhcnQiLCJmZXRjaENhcnQiLCJyZWZyZXNoQ2FydCIsImhhbmRsZUNhcHR1cmVDaGVja291dCIsImZldGNoUHJvZHVjdHMiLCJnZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwicmV0cmlldmVDYXJ0IiwiY3JlYXRlQ2FydCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0SWQiLCJxdWFudGl0eSIsInBvc3QiLCJpdGVtIiwibGluZUl0ZW1JZCIsInB1dCIsInJlc3AiLCJkZWxldGUiLCJpZCIsInNldCIsImNoZWNrb3V0VG9rZW5JZCIsIm5ld09yZGVyIiwiY29tbWVyY2UiLCJjaGVja291dCIsImNhcHR1cmUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsInJlbmRlciIsImNoaWxkcmVuIiwidXNlQXBwQ29udGV4dCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QyxhQUFULEdBQXlCO0FBQUE7O0FBQzlCLFNBQU9DLFVBQVUsQ0FBQ3RFLFVBQUQsQ0FBakI7QUFDRDs7R0FGZXFFLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMWY4N2VhMDk5NTY4NjI2NTYwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGNhcnRBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkNBUlRNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHByb2R1Y3RBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LlBST0RVQ1RTTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LlBST0RVQ1RTTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jbGFzcyBBcHBXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhcnRJRDogXCJcIixcclxuICAgICAgb3JkZXI6IHt9LFxyXG4gICAgICBjYXJ0OiB7fSxcclxuICAgICAgaXNDYXJ0VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgbG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZTogdGhpcy5sb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlLmJpbmQodGhpcyksXHJcbiAgICAgIHRvZ2dsZUNhcnQ6IHRoaXMudG9nZ2xlQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVBZGRUb0NhcnQ6IHRoaXMuaGFuZGxlQWRkVG9DYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZVVwZGF0ZUNhcnRRdHk6IHRoaXMuaGFuZGxlVXBkYXRlQ2FydFF0eS5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVSZW1vdmVGcm9tQ2FydDogdGhpcy5oYW5kbGVSZW1vdmVGcm9tQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVFbXB0eUNhcnQ6IHRoaXMuaGFuZGxlRW1wdHlDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGZldGNoQ2FydDogdGhpcy5mZXRjaENhcnQuYmluZCh0aGlzKSxcclxuICAgICAgcmVmcmVzaENhcnQ6IHRoaXMucmVmcmVzaENhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlQ2FwdHVyZUNoZWNrb3V0OiB0aGlzLmhhbmRsZUNhcHR1cmVDaGVja291dC5iaW5kKHRoaXMpLFxyXG4gICAgICBmZXRjaFByb2R1Y3RzOiB0aGlzLmZldGNoUHJvZHVjdHMuYmluZCh0aGlzKVxyXG4gICAgfTtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIHByb2R1Y3RzIGRhdGEgZnJvbSBDaGVjIGFuZCBzdG9yZXMgaW4gdGhlIHByb2R1Y3RzIGRhdGEgb2JqZWN0LlxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvcHJvZHVjdHNcclxuICAgKi9cclxuICBhc3luYyBmZXRjaFByb2R1Y3RzKCkge1xyXG4gICAgcHJvZHVjdEFQSS5nZXQoXCIvZ2V0XCIpLnRoZW4oKHByb2R1Y3RzKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcm9kdWN0czogcHJvZHVjdHMuZGF0YS5kYXRhIH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIHByb2R1Y3RzJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaENhcnQoKSB7XHJcbiAgICBjb25zdCBjYXJ0SUQgPSBDb29raWVzLmdldCgnY2FydElEJyk7XHJcblxyXG4gICAgaWYgKGF3YWl0IHRoaXMucmV0cmlldmVDYXJ0KGNhcnRJRCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJ0IFJldHJpZXZlZCFcIik7XHJcbiAgICB9IGVsc2UgaWYgKGF3YWl0IHRoaXMuY3JlYXRlQ2FydCgpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FydCBDcmVhdGVkIVwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VyZWQgd2hpbGUgZmV0Y2hpbmcgdGhlIGNhcnQuXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL0FjdGlvbnNcclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggYSBzYXZlZCBvcmRlciByZWNlaXB0IGZyb20gbG9jYWwgc3RvcmFnZSBzbyB3ZSBjYW4gc2hvdyB0aGUgY29uZmlybWF0aW9uIHBhZ2VcclxuICAgKiBhZ2FpbiBiZXR3ZWVuIHBhZ2UgcmVmcmVzaGVzLlxyXG4gICAqL1xyXG4gIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBpZiAod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcl9yZWNlaXB0JykpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9yZGVyOiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcpKSB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBoaWRlIGNhcnQgaW4gbmF2XHJcbiAgICovXHJcbiAgdG9nZ2xlQ2FydCgpIHtcclxuICAgIGNvbnN0IHsgaXNDYXJ0VmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc0NhcnRWaXNpYmxlOiAhaXNDYXJ0VmlzaWJsZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8tPiBzdGFydCBvZiBjYXJ0IGZ1bmN0aW9uc1xyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBwcm9kdWN0IHRvIHRoZSBjdXJyZW50IGNhcnQgaW4gc2Vzc2lvblxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jYWRkLXRvLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9kdWN0SWQgVGhlIElEIG9mIHRoZSBwcm9kdWN0IGJlaW5nIGFkZGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1YW50aXR5IFRoZSBxdWFudGl0eSBvZiB0aGUgcHJvZHVjdCBiZWluZyBhZGRlZFxyXG4gICAqL1xyXG4gIGFzeW5jIGhhbmRsZUFkZFRvQ2FydChwcm9kdWN0SWQsIHF1YW50aXR5KSB7XHJcblxyXG4gICAgYXdhaXQgY2FydEFQSS5wb3N0KFwiL2FkZHRvXCIsIHsgY2FydElEOiB0aGlzLnN0YXRlLmNhcnRJRCwgcHJvZHVjdElkOiBwcm9kdWN0SWQsIHF1YW50aXR5OiBxdWFudGl0eSB9KS50aGVuKChpdGVtKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiBpdGVtLmRhdGEuY2FydCB9KTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGFkZGluZyBhIGNhcnQgaXRlbScsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlcyBsaW5lX2l0ZW1zIGluIGNhcnRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3VwZGF0ZS1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZUl0ZW1JZCBJRCBvZiB0aGUgY2FydCBsaW5lIGl0ZW0gYmVpbmcgdXBkYXRlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFudGl0eSBOZXcgbGluZSBpdGVtIHF1YW50aXR5IHRvIHVwZGF0ZVxyXG4gICAqL1xyXG4gIGhhbmRsZVVwZGF0ZUNhcnRRdHkobGluZUl0ZW1JZCwgcXVhbnRpdHkpIHtcclxuICAgIGNhcnRBUEkucHV0KFwiL3VwZGF0ZXF0eVwiLCB7IGNhcnRJRDogdGhpcy5zdGF0ZS5jYXJ0SUQsIGxpbmVJdGVtSWQ6IGxpbmVJdGVtSWQsIHF1YW50aXR5OiBxdWFudGl0eSB9KS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgdGhlIGNhcnQgaXRlbXMnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgbGluZSBpdGVtIGZyb20gY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jcmVtb3ZlLWZyb20tY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVJdGVtSWQgSUQgb2YgdGhlIGxpbmUgaXRlbSBiZWluZyByZW1vdmVkXHJcbiAgICovXHJcbiAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQobGluZUl0ZW1JZCkge1xyXG4gICAgY2FydEFQSS5kZWxldGUoXCIvcmVtb3ZlZnJvbS9cIiArIHRoaXMuc3RhdGUuY2FydElEICsgXCIvXCIgKyBsaW5lSXRlbUlkKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZW1vdmluZyB0aGUgaXRlbSBmcm9tIHRoZSBjYXJ0JywgZXJyb3IpO1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1wdGllcyBjYXJ0IGNvbnRlbnRzXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNyZW1vdmUtZnJvbS1jYXJ0XHJcbiAgICovXHJcbiAgYXN5bmMgaGFuZGxlRW1wdHlDYXJ0KCkge1xyXG4gICAgYXdhaXQgY2FydEFQSS5kZWxldGUoXCIvZW1wdHkvXCIgKyB0aGlzLnN0YXRlLmNhcnRJRCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogcmVzcC5kYXRhLmNhcnQgfSlcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgZW1wdHlpbmcgdGhlIGNhcnQnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICogQ3JlYXRlcyBhIGNhcnRcclxuICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydFxyXG4gICovXHJcbiAgYXN5bmMgY3JlYXRlQ2FydCgpIHtcclxuXHJcbiAgICByZXR1cm4gYXdhaXQgY2FydEFQSS5nZXQoXCIvY3JlYXRlXCIpLnRoZW4oKGNhcnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGNhcnQuZGF0YSwgY2FydElEOiBjYXJ0LmRhdGEuaWQgfSk7XHJcbiAgICAgIENvb2tpZXMuc2V0KCdjYXJ0SUQnLCBjYXJ0LmRhdGEuaWQpO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhc3luYyByZXRyaWV2ZUNhcnQoY2FydElEKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgY2FydEFQSS5nZXQoXCIvZmV0Y2gvXCIgKyBjYXJ0SUQpLnRoZW4oKGNhcnQpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGNhcnQuZGF0YSwgY2FydElEOiBjYXJ0LmRhdGEuaWQgfSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWZyZXNoZXMgdG8gYSBuZXcgY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydCNyZWZyZXNoLWNhcnRcclxuICAgKi9cclxuICByZWZyZXNoQ2FydCgpIHtcclxuICAgIHRoaXMuY3JlYXRlQ2FydCgpO1xyXG4gIH1cclxuICAvLz0+IGVuZCBmbyBjYXJ0IGZ1bmN0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBDYXB0dXJlcyB0aGUgY2hlY2tvdXRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NoZWNrb3V0I2NhcHR1cmUtb3JkZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjaGVja291dFRva2VuSWQgVGhlIElEIG9mIHRoZSBjaGVja291dCB0b2tlblxyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBuZXdPcmRlciBUaGUgbmV3IG9yZGVyIG9iamVjdCBkYXRhXHJcbiAgICovXHJcbiAgaGFuZGxlQ2FwdHVyZUNoZWNrb3V0KGNoZWNrb3V0VG9rZW5JZCwgbmV3T3JkZXIpIHtcclxuXHJcbiAgICBjb21tZXJjZS5jaGVja291dC5jYXB0dXJlKGNoZWNrb3V0VG9rZW5JZCwgbmV3T3JkZXIpLnRoZW4oKG9yZGVyKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBvcmRlcjogb3JkZXIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU3RvcmUgdGhlIG9yZGVyIGluIHNlc3Npb24gc3RvcmFnZSBzbyB3ZSBjYW4gc2hvdyBpdCBhZ2FpblxyXG4gICAgICAvLyBpZiB0aGUgdXNlciByZWZyZXNoZXMgdGhlIHBhZ2UhXHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XHJcbiAgICAgIC8vIENsZWFycyB0aGUgY2FydFxyXG4gICAgICB0aGlzLnJlZnJlc2hDYXJ0KCk7XHJcbiAgICAgIC8vIFNlbmQgdGhlIHVzZXIgdG8gdGhlIHJlY2VpcHRcclxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jb25maXJtYXRpb24nKTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGNvbmZpcm1pbmcgeW91ciBvcmRlcicsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBXcmFwcGVyIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9