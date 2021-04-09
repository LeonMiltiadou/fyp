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


  generateCheckoutToken(cartID) {
    ordermanagementAPI.get("/checkout/generate/token", {
      cartID: CART
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zdGF0ZS5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNhcnRBUEkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwidGltZW91dCIsImhlYWRlcnMiLCJwcm9kdWN0QVBJIiwib3JkZXJtYW5hZ2VtZW50QVBJIiwiT1JERVJNQU5BR0VNRU5UTVNVUkwiLCJBcHBXcmFwcGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNhcnRJRCIsIm9yZGVyIiwiY2FydCIsImlzQ2FydFZpc2libGUiLCJwcm9kdWN0cyIsImxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UiLCJiaW5kIiwidG9nZ2xlQ2FydCIsImhhbmRsZUFkZFRvQ2FydCIsImhhbmRsZVVwZGF0ZUNhcnRRdHkiLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsImhhbmRsZUVtcHR5Q2FydCIsImZldGNoQ2FydCIsInJlZnJlc2hDYXJ0IiwiaGFuZGxlQ2FwdHVyZUNoZWNrb3V0IiwiZmV0Y2hQcm9kdWN0cyIsImdlbmVyYXRlVG9rZW4iLCJnZXQiLCJ0aGVuIiwic2V0U3RhdGUiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJDb29raWVzIiwicmV0cmlldmVDYXJ0IiwiY3JlYXRlQ2FydCIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJwcm9kdWN0SWQiLCJxdWFudGl0eSIsInBvc3QiLCJpdGVtIiwibGluZUl0ZW1JZCIsInB1dCIsInJlc3AiLCJkZWxldGUiLCJpZCIsInNldCIsImNoZWNrb3V0VG9rZW5JZCIsIm5ld09yZGVyIiwiY29tbWVyY2UiLCJjaGVja291dCIsImNhcHR1cmUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicHJvcHMiLCJoaXN0b3J5IiwicHVzaCIsImdlbmVyYXRlQ2hlY2tvdXRUb2tlbiIsIkNBUlQiLCJ0b2tlbiIsImNvbnRleHQiLCJsaW5lX2l0ZW1zIiwibGVuZ3RoIiwidHlwZSIsImNoZWNrb3V0VG9rZW4iLCJmZXRjaFNoaXBwaW5nQ291bnRyaWVzIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQSxVQUFVLGdCQUFHQywyREFBYSxFQUFoQztBQUVQLE1BQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzNCQyxTQUFPLEVBQUVDLGlDQURrQjtBQUUzQkMsU0FBTyxFQUFFLElBRmtCO0FBRzNCQyxTQUFPLEVBQUU7QUFDUCxjQUFVLGtCQURIO0FBRVAsb0JBQWdCO0FBRlQ7QUFIa0IsQ0FBYixDQUFoQjtBQVNBLE1BQU1DLFVBQVUsR0FBR04sNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzlCQyxTQUFPLEVBQUVDLHdDQURxQjtBQUU5QkMsU0FBTyxFQUFFLElBRnFCO0FBRzlCQyxTQUFPLEVBQUU7QUFDUCxjQUFVLGtCQURIO0FBRVAsb0JBQWdCO0FBRlQ7QUFIcUIsQ0FBYixDQUFuQjtBQVNBLE1BQU1FLGtCQUFrQixHQUFHUCw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDdENDLFNBQU8sRUFBRUMsRUFBQSxDQUFZSyxvQkFEaUI7QUFFdENKLFNBQU8sRUFBRSxJQUY2QjtBQUd0Q0MsU0FBTyxFQUFFO0FBQ1AsY0FBVSxrQkFESDtBQUVQLG9CQUFnQjtBQUZUO0FBSDZCLENBQWIsQ0FBM0I7O0FBU0EsTUFBTUksVUFBTixTQUF5QkMsK0NBQXpCLENBQW1DO0FBRWpDQyxhQUFXLEdBQUc7QUFDWjtBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsRUFERztBQUVYQyxXQUFLLEVBQUUsRUFGSTtBQUdYQyxVQUFJLEVBQUUsRUFISztBQUlYQyxtQkFBYSxFQUFFLEtBSko7QUFLWEMsY0FBUSxF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RyxLQUFLbUQsS0FBTCxDQUFXYSxRQURkLENBREY7QUFLRDs7QUFyT2dDOztBQXdPbkM7QUFFTyxTQUFTQyxhQUFULEdBQXlCO0FBQUE7O0FBQzlCLFNBQU9DLFVBQVUsQ0FBQ2pGLFVBQUQsQ0FBakI7QUFDRDs7R0FGZWdGLGEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45MGJkM2Y4OGRiODVmYmFhZGQyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGNhcnRBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkNBUlRNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHByb2R1Y3RBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LlBST0RVQ1RTTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBvcmRlcm1hbmFnZW1lbnRBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk9SREVSTUFOQUdFTUVOVE1TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY2xhc3MgQXBwV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYXJ0SUQ6IFwiXCIsXHJcbiAgICAgIG9yZGVyOiB7fSxcclxuICAgICAgY2FydDoge30sXHJcbiAgICAgIGlzQ2FydFZpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2U6IHRoaXMubG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZS5iaW5kKHRoaXMpLFxyXG4gICAgICB0b2dnbGVDYXJ0OiB0aGlzLnRvZ2dsZUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlQWRkVG9DYXJ0OiB0aGlzLmhhbmRsZUFkZFRvQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVVcGRhdGVDYXJ0UXR5OiB0aGlzLmhhbmRsZVVwZGF0ZUNhcnRRdHkuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQ6IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlRW1wdHlDYXJ0OiB0aGlzLmhhbmRsZUVtcHR5Q2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBmZXRjaENhcnQ6IHRoaXMuZmV0Y2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIHJlZnJlc2hDYXJ0OiB0aGlzLnJlZnJlc2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUNhcHR1cmVDaGVja291dDogdGhpcy5oYW5kbGVDYXB0dXJlQ2hlY2tvdXQuYmluZCh0aGlzKSxcclxuICAgICAgZmV0Y2hQcm9kdWN0czogdGhpcy5mZXRjaFByb2R1Y3RzLmJpbmQodGhpcyksXHJcbiAgICAgIGdlbmVyYXRlVG9rZW46IHRoaXMuZ2VuZXJhdGVUb2tlbi5iaW5kKHRoaXMpXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggcHJvZHVjdHMgZGF0YSBmcm9tIENoZWMgYW5kIHN0b3JlcyBpbiB0aGUgcHJvZHVjdHMgZGF0YSBvYmplY3QuXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9wcm9kdWN0c1xyXG4gICAqL1xyXG4gIGFzeW5jIGZldGNoUHJvZHVjdHMoKSB7XHJcbiAgICBwcm9kdWN0QVBJLmdldChcIi9nZXRcIikudGhlbigocHJvZHVjdHMpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByb2R1Y3RzOiBwcm9kdWN0cy5kYXRhLmRhdGEgfSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgcHJvZHVjdHMnLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoQ2FydCgpIHtcclxuICAgIGNvbnN0IGNhcnRJRCA9IENvb2tpZXMuZ2V0KCdjYXJ0SUQnKTtcclxuXHJcbiAgICBpZiAoYXdhaXQgdGhpcy5yZXRyaWV2ZUNhcnQoY2FydElEKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcnQgUmV0cmlldmVkIVwiKTtcclxuICAgIH0gZWxzZSBpZiAoYXdhaXQgdGhpcy5jcmVhdGVDYXJ0KCkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJDYXJ0IENyZWF0ZWQhXCIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBmZXRjaGluZyB0aGUgY2FydC5cIilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vQWN0aW9uc1xyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBhIHNhdmVkIG9yZGVyIHJlY2VpcHQgZnJvbSBsb2NhbCBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IHRoZSBjb25maXJtYXRpb24gcGFnZVxyXG4gICAqIGFnYWluIGJldHdlZW4gcGFnZSByZWZyZXNoZXMuXHJcbiAgICovXHJcbiAgbG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyX3JlY2VpcHQnKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3JkZXI6IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcl9yZWNlaXB0JykpIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGhpZGUgY2FydCBpbiBuYXZcclxuICAgKi9cclxuICB0b2dnbGVDYXJ0KCkge1xyXG4gICAgY29uc3QgeyBpc0NhcnRWaXNpYmxlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIGlzQ2FydFZpc2libGU6ICFpc0NhcnRWaXNpYmxlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLy0+IHN0YXJ0IG9mIGNhcnQgZnVuY3Rpb25zXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHByb2R1Y3QgdG8gdGhlIGN1cnJlbnQgY2FydCBpbiBzZXNzaW9uXHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNhZGQtdG8tY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHByb2R1Y3RJZCBUaGUgSUQgb2YgdGhlIHByb2R1Y3QgYmVpbmcgYWRkZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHkgVGhlIHF1YW50aXR5IG9mIHRoZSBwcm9kdWN0IGJlaW5nIGFkZGVkXHJcbiAgICovXHJcbiAgYXN5bmMgaGFuZGxlQWRkVG9DYXJ0KHByb2R1Y3RJZCwgcXVhbnRpdHkpIHtcclxuXHJcbiAgICBhd2FpdCBjYXJ0QVBJLnBvc3QoXCIvYWRkdG9cIiwgeyBjYXJ0SUQ6IHRoaXMuc3RhdGUuY2FydElELCBwcm9kdWN0SWQ6IHByb2R1Y3RJZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKGl0ZW0pID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IGl0ZW0uZGF0YS5jYXJ0IH0pO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gYWRkaW5nIGEgY2FydCBpdGVtJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIGxpbmVfaXRlbXMgaW4gY2FydFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jdXBkYXRlLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lSXRlbUlkIElEIG9mIHRoZSBjYXJ0IGxpbmUgaXRlbSBiZWluZyB1cGRhdGVkXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IHF1YW50aXR5IE5ldyBsaW5lIGl0ZW0gcXVhbnRpdHkgdG8gdXBkYXRlXHJcbiAgICovXHJcbiAgaGFuZGxlVXBkYXRlQ2FydFF0eShsaW5lSXRlbUlkLCBxdWFudGl0eSkge1xyXG4gICAgY2FydEFQSS5wdXQoXCIvdXBkYXRlcXR5XCIsIHsgY2FydElEOiB0aGlzLnN0YXRlLmNhcnRJRCwgbGluZUl0ZW1JZDogbGluZUl0ZW1JZCwgcXVhbnRpdHk6IHF1YW50aXR5IH0pLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciB1cGRhdGluZyB0aGUgY2FydCBpdGVtcycsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBsaW5lIGl0ZW0gZnJvbSBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyNyZW1vdmUtZnJvbS1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGluZUl0ZW1JZCBJRCBvZiB0aGUgbGluZSBpdGVtIGJlaW5nIHJlbW92ZWRcclxuICAgKi9cclxuICBoYW5kbGVSZW1vdmVGcm9tQ2FydChsaW5lSXRlbUlkKSB7XHJcbiAgICBjYXJ0QVBJLmRlbGV0ZShcIi9yZW1vdmVmcm9tL1wiICsgdGhpcy5zdGF0ZS5jYXJ0SUQgKyBcIi9cIiArIGxpbmVJdGVtSWQpLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHJlbW92aW5nIHRoZSBpdGVtIGZyb20gdGhlIGNhcnQnLCBlcnJvcik7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbXB0aWVzIGNhcnQgY29udGVudHNcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3JlbW92ZS1mcm9tLWNhcnRcclxuICAgKi9cclxuICBhc3luYyBoYW5kbGVFbXB0eUNhcnQoKSB7XHJcbiAgICBhd2FpdCBjYXJ0QVBJLmRlbGV0ZShcIi9lbXB0eS9cIiArIHRoaXMuc3RhdGUuY2FydElEKS50aGVuKChyZXNwKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiByZXNwLmRhdGEuY2FydCB9KVxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciBlbXB0eWluZyB0aGUgY2FydCcsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgKiBDcmVhdGVzIGEgY2FydFxyXG4gICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0XHJcbiAgKi9cclxuICBhc3luYyBjcmVhdGVDYXJ0KCkge1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9jcmVhdGVcIikudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgQ29va2llcy5zZXQoJ2NhcnRJRCcsIGNhcnQuZGF0YS5pZCk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHJldHJpZXZlQ2FydChjYXJ0SUQpIHtcclxuICAgIHJldHVybiBhd2FpdCBjYXJ0QVBJLmdldChcIi9mZXRjaC9cIiArIGNhcnRJRCkudGhlbigoY2FydCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogY2FydC5kYXRhLCBjYXJ0SUQ6IGNhcnQuZGF0YS5pZCB9KTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZnJlc2hlcyB0byBhIG5ldyBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0I3JlZnJlc2gtY2FydFxyXG4gICAqL1xyXG4gIHJlZnJlc2hDYXJ0KCkge1xyXG4gICAgdGhpcy5jcmVhdGVDYXJ0KCk7XHJcbiAgfVxyXG4gIC8vPT4gZW5kIGZvIGNhcnQgZnVuY3Rpb25zXHJcblxyXG4gIC8qKlxyXG4gICAqIENhcHR1cmVzIHRoZSBjaGVja291dFxyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjY2FwdHVyZS1vcmRlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNoZWNrb3V0VG9rZW5JZCBUaGUgSUQgb2YgdGhlIGNoZWNrb3V0IHRva2VuXHJcbiAgICogQHBhcmFtIHtvYmplY3R9IG5ld09yZGVyIFRoZSBuZXcgb3JkZXIgb2JqZWN0IGRhdGFcclxuICAgKi9cclxuICBoYW5kbGVDYXB0dXJlQ2hlY2tvdXQoY2hlY2tvdXRUb2tlbklkLCBuZXdPcmRlcikge1xyXG5cclxuICAgIG9yZGVybWFuYWdlbWVudEFQSS5wb3N0KFwiL2NoZWNrb3V0L2NyZWF0ZVwiLClcclxuICAgIGNvbW1lcmNlLmNoZWNrb3V0LmNhcHR1cmUoY2hlY2tvdXRUb2tlbklkLCBuZXdPcmRlcikudGhlbigob3JkZXIpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG9yZGVyOiBvcmRlcixcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBTdG9yZSB0aGUgb3JkZXIgaW4gc2Vzc2lvbiBzdG9yYWdlIHNvIHdlIGNhbiBzaG93IGl0IGFnYWluXHJcbiAgICAgIC8vIGlmIHRoZSB1c2VyIHJlZnJlc2hlcyB0aGUgcGFnZSFcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdvcmRlcl9yZWNlaXB0JywgSlNPTi5zdHJpbmdpZnkob3JkZXIpKTtcclxuICAgICAgLy8gQ2xlYXJzIHRoZSBjYXJ0XHJcbiAgICAgIHRoaXMucmVmcmVzaENhcnQoKTtcclxuICAgICAgLy8gU2VuZCB0aGUgdXNlciB0byB0aGUgcmVjZWlwdFxyXG4gICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnL2NvbmZpcm1hdGlvbicpO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgY29uZmlybWluZyB5b3VyIG9yZGVyJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgICAqICBHZW5lcmF0ZXMgYSBjaGVja291dCB0b2tlblxyXG4gICAgICogIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2hlY2tvdXQjZ2VuZXJhdGUtdG9rZW5cclxuICAgICAqL1xyXG4gIGdlbmVyYXRlQ2hlY2tvdXRUb2tlbihjYXJ0SUQpIHtcclxuXHJcbiAgICBvcmRlcm1hbmFnZW1lbnRBUEkuZ2V0KFwiL2NoZWNrb3V0L2dlbmVyYXRlL3Rva2VuXCIsIHtjYXJ0SUQgOiBDQVJUfSkudGhlbih0b2tlbiA9PiB7XHJcblxyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHsgY2FydCB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgaWYgKGNhcnQubGluZV9pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGNvbW1lcmNlLmNoZWNrb3V0LmdlbmVyYXRlVG9rZW4oY2FydC5pZCwgeyB0eXBlOiAnY2FydCcgfSlcclxuICAgICAgICAudGhlbigodG9rZW4pID0+IHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRva2VuOiB0b2tlbiB9KSlcclxuICAgICAgICAudGhlbigoKSA9PiB0aGlzLmZldGNoU2hpcHBpbmdDb3VudHJpZXModGhpcy5zdGF0ZS5jaGVja291dFRva2VuLmlkKSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGluIGdlbmVyYXRpbmcgYSB0b2tlbicsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBXcmFwcGVyIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9