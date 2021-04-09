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

  render() {
    return __jsx(AppContext.Provider, {
      value: this.state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zdGF0ZS5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNhcnRBUEkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwidGltZW91dCIsImhlYWRlcnMiLCJwcm9kdWN0QVBJIiwib3JkZXJtYW5hZ2VtZW50QVBJIiwiT1JERVJNQU5BR0VNRU5UTVNVUkwiLCJBcHBXcmFwcGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNhcnRJRCIsIm9yZGVyIiwiY2FydCIsImlzQ2FydFZpc2libGUiLCJwcm9kdWN0cyIsImxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UiLCJiaW5kIiwidG9nZ2xlQ2FydCIsImhhbmRsZUFkZFRvQ2FydCIsImhhbmRsZVVwZGF0ZUNhcnRRdHkiLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsImhhbmRsZUVtcHR5Q2FydCIsImZldGNoQ2FydCIsInJlZnJlc2hDYXJ0IiwiaGFuZGxlQ2FwdHVyZUNoZWNrb3V0IiwiZmV0Y2hQcm9kdWN0cyIsImdldCIsInRoZW4iLCJzZXRTdGF0ZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkNvb2tpZXMiLCJyZXRyaWV2ZUNhcnQiLCJjcmVhdGVDYXJ0Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInByb2R1Y3RJZCIsInF1YW50aXR5IiwicG9zdCIsIml0ZW0iLCJsaW5lSXRlbUlkIiwicHV0IiwicmVzcCIsImRlbGV0ZSIsImlkIiwic2V0IiwiY2hlY2tvdXRUb2tlbklkIiwibmV3T3JkZXIiLCJjb21tZXJjZSIsImNoZWNrb3V0IiwiY2FwdHVyZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwcm9wcyIsImhpc3RvcnkiLCJwdXNoIiwicmVuZGVyIiwiY2hpbGRyZW4iLCJ1c2VBcHBDb250ZXh0IiwidXNlQ29u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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLEtBQUtrRCxLQUFMLENBQVdJLFFBRGQsQ0FERjtBQUtEOztBQTVNZ0M7O0FBK01uQztBQUVPLFNBQVNDLGFBQVQsR0FBeUI7QUFBQTs7QUFDOUIsU0FBT0MsVUFBVSxDQUFDdkUsVUFBRCxDQUFqQjtBQUNEOztHQUZlc0UsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNTExMTc1N2YyMTY5ZDJiOWI2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmNvbnN0IGNhcnRBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LkNBUlRNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHByb2R1Y3RBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LlBST0RVQ1RTTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jb25zdCBvcmRlcm1hbmFnZW1lbnRBUEkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk9SREVSTUFOQUdFTUVOVE1TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY2xhc3MgQXBwV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYXJ0SUQ6IFwiXCIsXHJcbiAgICAgIG9yZGVyOiB7fSxcclxuICAgICAgY2FydDoge30sXHJcbiAgICAgIGlzQ2FydFZpc2libGU6IGZhbHNlLFxyXG4gICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgIGxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2U6IHRoaXMubG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZS5iaW5kKHRoaXMpLFxyXG4gICAgICB0b2dnbGVDYXJ0OiB0aGlzLnRvZ2dsZUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlQWRkVG9DYXJ0OiB0aGlzLmhhbmRsZUFkZFRvQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVVcGRhdGVDYXJ0UXR5OiB0aGlzLmhhbmRsZVVwZGF0ZUNhcnRRdHkuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlUmVtb3ZlRnJvbUNhcnQ6IHRoaXMuaGFuZGxlUmVtb3ZlRnJvbUNhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlRW1wdHlDYXJ0OiB0aGlzLmhhbmRsZUVtcHR5Q2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBmZXRjaENhcnQ6IHRoaXMuZmV0Y2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIHJlZnJlc2hDYXJ0OiB0aGlzLnJlZnJlc2hDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZUNhcHR1cmVDaGVja291dDogdGhpcy5oYW5kbGVDYXB0dXJlQ2hlY2tvdXQuYmluZCh0aGlzKSxcclxuICAgICAgZmV0Y2hQcm9kdWN0czogdGhpcy5mZXRjaFByb2R1Y3RzLmJpbmQodGhpcylcclxuICAgIH07XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBwcm9kdWN0cyBkYXRhIGZyb20gQ2hlYyBhbmQgc3RvcmVzIGluIHRoZSBwcm9kdWN0cyBkYXRhIG9iamVjdC5cclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL3Byb2R1Y3RzXHJcbiAgICovXHJcbiAgYXN5bmMgZmV0Y2hQcm9kdWN0cygpIHtcclxuICAgIHByb2R1Y3RBUEkuZ2V0KFwiL2dldFwiKS50aGVuKChwcm9kdWN0cykgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdHM6IHByb2R1Y3RzLmRhdGEuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBwcm9kdWN0cycsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hDYXJ0KCkge1xyXG4gICAgY29uc3QgY2FydElEID0gQ29va2llcy5nZXQoJ2NhcnRJRCcpO1xyXG5cclxuICAgIGlmIChhd2FpdCB0aGlzLnJldHJpZXZlQ2FydChjYXJ0SUQpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FydCBSZXRyaWV2ZWQhXCIpO1xyXG4gICAgfSBlbHNlIGlmIChhd2FpdCB0aGlzLmNyZWF0ZUNhcnQoKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcnQgQ3JlYXRlZCFcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cmVkIHdoaWxlIGZldGNoaW5nIHRoZSBjYXJ0LlwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9BY3Rpb25zXHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGEgc2F2ZWQgb3JkZXIgcmVjZWlwdCBmcm9tIGxvY2FsIHN0b3JhZ2Ugc28gd2UgY2FuIHNob3cgdGhlIGNvbmZpcm1hdGlvbiBwYWdlXHJcbiAgICogYWdhaW4gYmV0d2VlbiBwYWdlIHJlZnJlc2hlcy5cclxuICAgKi9cclxuICBsb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcmRlcjogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyX3JlY2VpcHQnKSkgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgaGlkZSBjYXJ0IGluIG5hdlxyXG4gICAqL1xyXG4gIHRvZ2dsZUNhcnQoKSB7XHJcbiAgICBjb25zdCB7IGlzQ2FydFZpc2libGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNDYXJ0VmlzaWJsZTogIWlzQ2FydFZpc2libGUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vLT4gc3RhcnQgb2YgY2FydCBmdW5jdGlvbnNcclxuICAvKipcclxuICAgKiBBZGRzIGEgcHJvZHVjdCB0byB0aGUgY3VycmVudCBjYXJ0IGluIHNlc3Npb25cclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI2FkZC10by1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvZHVjdElkIFRoZSBJRCBvZiB0aGUgcHJvZHVjdCBiZWluZyBhZGRlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFudGl0eSBUaGUgcXVhbnRpdHkgb2YgdGhlIHByb2R1Y3QgYmVpbmcgYWRkZWRcclxuICAgKi9cclxuICBhc3luYyBoYW5kbGVBZGRUb0NhcnQocHJvZHVjdElkLCBxdWFudGl0eSkge1xyXG5cclxuICAgIGF3YWl0IGNhcnRBUEkucG9zdChcIi9hZGR0b1wiLCB7IGNhcnRJRDogdGhpcy5zdGF0ZS5jYXJ0SUQsIHByb2R1Y3RJZDogcHJvZHVjdElkLCBxdWFudGl0eTogcXVhbnRpdHkgfSkudGhlbigoaXRlbSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogaXRlbS5kYXRhLmNhcnQgfSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBhZGRpbmcgYSBjYXJ0IGl0ZW0nLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgbGluZV9pdGVtcyBpbiBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyN1cGRhdGUtY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVJdGVtSWQgSUQgb2YgdGhlIGNhcnQgbGluZSBpdGVtIGJlaW5nIHVwZGF0ZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHkgTmV3IGxpbmUgaXRlbSBxdWFudGl0eSB0byB1cGRhdGVcclxuICAgKi9cclxuICBoYW5kbGVVcGRhdGVDYXJ0UXR5KGxpbmVJdGVtSWQsIHF1YW50aXR5KSB7XHJcbiAgICBjYXJ0QVBJLnB1dChcIi91cGRhdGVxdHlcIiwgeyBjYXJ0SUQ6IHRoaXMuc3RhdGUuY2FydElELCBsaW5lSXRlbUlkOiBsaW5lSXRlbUlkLCBxdWFudGl0eTogcXVhbnRpdHkgfSkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogcmVzcC5kYXRhLmNhcnQgfSlcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHVwZGF0aW5nIHRoZSBjYXJ0IGl0ZW1zJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGxpbmUgaXRlbSBmcm9tIGNhcnRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3JlbW92ZS1mcm9tLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lSXRlbUlkIElEIG9mIHRoZSBsaW5lIGl0ZW0gYmVpbmcgcmVtb3ZlZFxyXG4gICAqL1xyXG4gIGhhbmRsZVJlbW92ZUZyb21DYXJ0KGxpbmVJdGVtSWQpIHtcclxuICAgIGNhcnRBUEkuZGVsZXRlKFwiL3JlbW92ZWZyb20vXCIgKyB0aGlzLnN0YXRlLmNhcnRJRCArIFwiL1wiICsgbGluZUl0ZW1JZCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogcmVzcC5kYXRhLmNhcnQgfSlcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmVtb3ZpbmcgdGhlIGl0ZW0gZnJvbSB0aGUgY2FydCcsIGVycm9yKTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtcHRpZXMgY2FydCBjb250ZW50c1xyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jcmVtb3ZlLWZyb20tY2FydFxyXG4gICAqL1xyXG4gIGFzeW5jIGhhbmRsZUVtcHR5Q2FydCgpIHtcclxuICAgIGF3YWl0IGNhcnRBUEkuZGVsZXRlKFwiL2VtcHR5L1wiICsgdGhpcy5zdGF0ZS5jYXJ0SUQpLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIGVtcHR5aW5nIHRoZSBjYXJ0JywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENyZWF0ZXMgYSBjYXJ0XHJcbiAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnRcclxuICAqL1xyXG4gIGFzeW5jIGNyZWF0ZUNhcnQoKSB7XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IGNhcnRBUEkuZ2V0KFwiL2NyZWF0ZVwiKS50aGVuKChjYXJ0KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiBjYXJ0LmRhdGEsIGNhcnRJRDogY2FydC5kYXRhLmlkIH0pO1xyXG4gICAgICBDb29raWVzLnNldCgnY2FydElEJywgY2FydC5kYXRhLmlkKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmV0cmlldmVDYXJ0KGNhcnRJRCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGNhcnRBUEkuZ2V0KFwiL2ZldGNoL1wiICsgY2FydElEKS50aGVuKChjYXJ0KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiBjYXJ0LmRhdGEsIGNhcnRJRDogY2FydC5kYXRhLmlkIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVmcmVzaGVzIHRvIGEgbmV3IGNhcnRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQjcmVmcmVzaC1jYXJ0XHJcbiAgICovXHJcbiAgcmVmcmVzaENhcnQoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUNhcnQoKTtcclxuICB9XHJcbiAgLy89PiBlbmQgZm8gY2FydCBmdW5jdGlvbnNcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FwdHVyZXMgdGhlIGNoZWNrb3V0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jaGVja291dCNjYXB0dXJlLW9yZGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hlY2tvdXRUb2tlbklkIFRoZSBJRCBvZiB0aGUgY2hlY2tvdXQgdG9rZW5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gbmV3T3JkZXIgVGhlIG5ldyBvcmRlciBvYmplY3QgZGF0YVxyXG4gICAqL1xyXG4gIGhhbmRsZUNhcHR1cmVDaGVja291dChjaGVja291dFRva2VuSWQsIG5ld09yZGVyKSB7XHJcblxyXG4gICAgb3JkZXJtYW5hZ2VtZW50QVBJLnBvc3QoXCIvY2hlY2tvdXQvY3JlYXRlXCIpXHJcbiAgICBjb21tZXJjZS5jaGVja291dC5jYXB0dXJlKGNoZWNrb3V0VG9rZW5JZCwgbmV3T3JkZXIpLnRoZW4oKG9yZGVyKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBvcmRlcjogb3JkZXIsXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gU3RvcmUgdGhlIG9yZGVyIGluIHNlc3Npb24gc3RvcmFnZSBzbyB3ZSBjYW4gc2hvdyBpdCBhZ2FpblxyXG4gICAgICAvLyBpZiB0aGUgdXNlciByZWZyZXNoZXMgdGhlIHBhZ2UhXHJcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcsIEpTT04uc3RyaW5naWZ5KG9yZGVyKSk7XHJcbiAgICAgIC8vIENsZWFycyB0aGUgY2FydFxyXG4gICAgICB0aGlzLnJlZnJlc2hDYXJ0KCk7XHJcbiAgICAgIC8vIFNlbmQgdGhlIHVzZXIgdG8gdGhlIHJlY2VpcHRcclxuICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goJy9jb25maXJtYXRpb24nKTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGNvbmZpcm1pbmcgeW91ciBvcmRlcicsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoaXMuc3RhdGV9PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBBcHBXcmFwcGVyIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwQ29udGV4dCgpIHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9