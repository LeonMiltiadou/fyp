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
  /**
     *  Generates a checkout token
     *  https://commercejs.com/docs/sdk/checkout#generate-token
     */


  generateCheckoutToken() {
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
        lineNumber: 254,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9zdGF0ZS5qcyJdLCJuYW1lcyI6WyJBcHBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNhcnRBUEkiLCJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwidGltZW91dCIsImhlYWRlcnMiLCJwcm9kdWN0QVBJIiwib3JkZXJtYW5hZ2VtZW50QVBJIiwiT1JERVJNQU5BR0VNRU5UTVNVUkwiLCJBcHBXcmFwcGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImNhcnRJRCIsIm9yZGVyIiwiY2FydCIsImlzQ2FydFZpc2libGUiLCJwcm9kdWN0cyIsImxvYWRPcmRlckZyb21Mb2NhbFN0b3JhZ2UiLCJiaW5kIiwidG9nZ2xlQ2FydCIsImhhbmRsZUFkZFRvQ2FydCIsImhhbmRsZVVwZGF0ZUNhcnRRdHkiLCJoYW5kbGVSZW1vdmVGcm9tQ2FydCIsImhhbmRsZUVtcHR5Q2FydCIsImZldGNoQ2FydCIsInJlZnJlc2hDYXJ0IiwiaGFuZGxlQ2FwdHVyZUNoZWNrb3V0IiwiZmV0Y2hQcm9kdWN0cyIsImdldCIsInRoZW4iLCJzZXRTdGF0ZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIkNvb2tpZXMiLCJyZXRyaWV2ZUNhcnQiLCJjcmVhdGVDYXJ0Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInByb2R1Y3RJZCIsInF1YW50aXR5IiwicG9zdCIsIml0ZW0iLCJsaW5lSXRlbUlkIiwicHV0IiwicmVzcCIsImRlbGV0ZSIsImlkIiwic2V0IiwiY2hlY2tvdXRUb2tlbklkIiwibmV3T3JkZXIiLCJjb21tZXJjZSIsImNoZWNrb3V0IiwiY2FwdHVyZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJwcm9wcyIsImhpc3RvcnkiLCJwdXNoIiwiZ2VuZXJhdGVDaGVja291dFRva2VuIiwiY29udGV4dCIsImxpbmVfaXRlbXMiLCJsZW5ndGgiLCJnZW5lcmF0ZVRva2VuIiwidHlwZSIsInRva2VuIiwiY2hlY2tvdXRUb2tlbiIsImZldGNoU2hpcHBpbmdDb3VudHJpZXMiLCJyZW5kZXIiLCJjaGlsZHJlbiIsInVzZUFwcENvbnRleHQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLE1BQU1BLFVBQVUsZ0JBQUdDLDJEQUFhLEVBQWhDO0FBRVAsTUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDM0JDLFNBQU8sRUFBRUMsaUNBRGtCO0FBRTNCQyxTQUFPLEVBQUUsSUFGa0I7QUFHM0JDLFNBQU8sRUFBRTtBQUNQLGNBQVUsa0JBREg7QUFFUCxvQkFBZ0I7QUFGVDtBQUhrQixDQUFiLENBQWhCO0FBU0EsTUFBTUMsVUFBVSxHQUFHTiw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDOUJDLFNBQU8sRUFBRUMsd0NBRHFCO0FBRTlCQyxTQUFPLEVBQUUsSUFGcUI7QUFHOUJDLFNBQU8sRUFBRTtBQUNQLGNBQVUsa0JBREg7QUFFUCxvQkFBZ0I7QUFGVDtBQUhxQixDQUFiLENBQW5CO0FBU0EsTUFBTUUsa0JBQWtCLEdBQUdQLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUN0Q0MsU0FBTyxFQUFFQyxFQUFBLENBQVlLLG9CQURpQjtBQUV0Q0osU0FBTyxFQUFFLElBRjZCO0FBR3RDQyxTQUFPLEVBQUU7QUFDUCxjQUFVLGtCQURIO0FBRVAsb0JBQWdCO0FBRlQ7QUFINkIsQ0FBYixDQUEzQjs7QUFTQSxNQUFNSSxVQUFOLFNBQXlCQywrQ0FBekIsQ0FBbUM7QUFFakNDLGFBQVcsR0FBRztBQUNaO0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFBRSxFQURHO0FBRVhDLFdBQUssRUFBRSxFQUZJO0FBR1hDLFVBQUksRUFBRSxFQUhLO0FBSVhDLG1CQUFhLEVBQUUsS0FKSjtBQUtYQyxjQUFRLEVBQUUsRUFM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Q0MsR0FBUixDQUFZLDBDQUFaLEVBQXdERixLQUF4RDtBQUNELEtBZkQ7QUFnQkQ7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0crQix1QkFBcUIsR0FBRztBQUN2QixVQUFNO0FBQUVsRDtBQUFGLFFBQVcsS0FBS21ELE9BQXRCOztBQUNBLFFBQUluRCxJQUFJLENBQUNvRCxVQUFMLENBQWdCQyxNQUFwQixFQUE0QjtBQUN4QixhQUFPWCxRQUFRLENBQUNDLFFBQVQsQ0FBa0JXLGFBQWxCLENBQWdDdEQsSUFBSSxDQUFDc0MsRUFBckMsRUFBeUM7QUFBRWlCLFlBQUksRUFBRTtBQUFSLE9BQXpDLEVBQ0Z4QyxJQURFLENBQ0l5QyxLQUFELElBQVcsS0FBS3hDLFFBQUwsQ0FBYztBQUFFeUMscUJBQWEsRUFBRUQ7QUFBakIsT0FBZCxDQURkLEVBRUZ6QyxJQUZFLENBRUcsTUFBTSxLQUFLMkMsc0JBQUwsQ0FBNEIsS0FBSzdELEtBQUwsQ0FBVzRELGFBQVgsQ0FBeUJuQixFQUFyRCxDQUZULEVBR0ZwQixLQUhFLENBR0tDLEtBQUQsSUFBVztBQUNkQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSwwQ0FBWixFQUF3REYsS0FBeEQ7QUFDSCxPQUxFLENBQVA7QUFNSDtBQUNKOztBQUdDd0MsUUFBTSxHQUFHO0FBQ1AsV0FDRSxNQUFDLFVBQUQsQ0FBWSxRQUFaO0FBQXFCLFdBQUssRUFBRSxLQUFLOUQsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHLEtBQUtrRCxLQUFMLENBQVdhLFFBRGQsQ0FERjtBQUtEOztBQTlOZ0M7O0FBaU9uQztBQUVPLFNBQVNDLGFBQVQsR0FBeUI7QUFBQTs7QUFDOUIsU0FBT0MsVUFBVSxDQUFDaEYsVUFBRCxDQUFqQjtBQUNEOztHQUZlK0UsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJhMzEyY2M5NzI2YThmNjNhNTYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuY29uc3QgY2FydEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQ0FSVE1TVVJMLFxyXG4gIHRpbWVvdXQ6IDMwMDAsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3QgcHJvZHVjdEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuUFJPRFVDVFNNU1VSTCxcclxuICB0aW1lb3V0OiAzMDAwLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG9yZGVybWFuYWdlbWVudEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuT1JERVJNQU5BR0VNRU5UTVNVUkwsXHJcbiAgdGltZW91dDogMzAwMCxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gIH1cclxufSk7XHJcblxyXG5jbGFzcyBBcHBXcmFwcGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNhcnRJRDogXCJcIixcclxuICAgICAgb3JkZXI6IHt9LFxyXG4gICAgICBjYXJ0OiB7fSxcclxuICAgICAgaXNDYXJ0VmlzaWJsZTogZmFsc2UsXHJcbiAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgbG9hZE9yZGVyRnJvbUxvY2FsU3RvcmFnZTogdGhpcy5sb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlLmJpbmQodGhpcyksXHJcbiAgICAgIHRvZ2dsZUNhcnQ6IHRoaXMudG9nZ2xlQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVBZGRUb0NhcnQ6IHRoaXMuaGFuZGxlQWRkVG9DYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGhhbmRsZVVwZGF0ZUNhcnRRdHk6IHRoaXMuaGFuZGxlVXBkYXRlQ2FydFF0eS5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVSZW1vdmVGcm9tQ2FydDogdGhpcy5oYW5kbGVSZW1vdmVGcm9tQ2FydC5iaW5kKHRoaXMpLFxyXG4gICAgICBoYW5kbGVFbXB0eUNhcnQ6IHRoaXMuaGFuZGxlRW1wdHlDYXJ0LmJpbmQodGhpcyksXHJcbiAgICAgIGZldGNoQ2FydDogdGhpcy5mZXRjaENhcnQuYmluZCh0aGlzKSxcclxuICAgICAgcmVmcmVzaENhcnQ6IHRoaXMucmVmcmVzaENhcnQuYmluZCh0aGlzKSxcclxuICAgICAgaGFuZGxlQ2FwdHVyZUNoZWNrb3V0OiB0aGlzLmhhbmRsZUNhcHR1cmVDaGVja291dC5iaW5kKHRoaXMpLFxyXG4gICAgICBmZXRjaFByb2R1Y3RzOiB0aGlzLmZldGNoUHJvZHVjdHMuYmluZCh0aGlzKVxyXG4gICAgICBcclxuICAgIH07XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaCBwcm9kdWN0cyBkYXRhIGZyb20gQ2hlYyBhbmQgc3RvcmVzIGluIHRoZSBwcm9kdWN0cyBkYXRhIG9iamVjdC5cclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL3Byb2R1Y3RzXHJcbiAgICovXHJcbiAgYXN5bmMgZmV0Y2hQcm9kdWN0cygpIHtcclxuICAgIHByb2R1Y3RBUEkuZ2V0KFwiL2dldFwiKS50aGVuKChwcm9kdWN0cykgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgcHJvZHVjdHM6IHByb2R1Y3RzLmRhdGEuZGF0YSB9KTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIGZldGNoaW5nIHRoZSBwcm9kdWN0cycsIGVycm9yKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hDYXJ0KCkge1xyXG4gICAgY29uc3QgY2FydElEID0gQ29va2llcy5nZXQoJ2NhcnRJRCcpO1xyXG5cclxuICAgIGlmIChhd2FpdCB0aGlzLnJldHJpZXZlQ2FydChjYXJ0SUQpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FydCBSZXRyaWV2ZWQhXCIpO1xyXG4gICAgfSBlbHNlIGlmIChhd2FpdCB0aGlzLmNyZWF0ZUNhcnQoKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNhcnQgQ3JlYXRlZCFcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cmVkIHdoaWxlIGZldGNoaW5nIHRoZSBjYXJ0LlwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy9BY3Rpb25zXHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoIGEgc2F2ZWQgb3JkZXIgcmVjZWlwdCBmcm9tIGxvY2FsIHN0b3JhZ2Ugc28gd2UgY2FuIHNob3cgdGhlIGNvbmZpcm1hdGlvbiBwYWdlXHJcbiAgICogYWdhaW4gYmV0d2VlbiBwYWdlIHJlZnJlc2hlcy5cclxuICAgKi9cclxuICBsb2FkT3JkZXJGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnb3JkZXJfcmVjZWlwdCcpKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcmRlcjogSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyX3JlY2VpcHQnKSkgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgaGlkZSBjYXJ0IGluIG5hdlxyXG4gICAqL1xyXG4gIHRvZ2dsZUNhcnQoKSB7XHJcbiAgICBjb25zdCB7IGlzQ2FydFZpc2libGUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaXNDYXJ0VmlzaWJsZTogIWlzQ2FydFZpc2libGUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vLT4gc3RhcnQgb2YgY2FydCBmdW5jdGlvbnNcclxuICAvKipcclxuICAgKiBBZGRzIGEgcHJvZHVjdCB0byB0aGUgY3VycmVudCBjYXJ0IGluIHNlc3Npb25cclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI2FkZC10by1jYXJ0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvZHVjdElkIFRoZSBJRCBvZiB0aGUgcHJvZHVjdCBiZWluZyBhZGRlZFxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFudGl0eSBUaGUgcXVhbnRpdHkgb2YgdGhlIHByb2R1Y3QgYmVpbmcgYWRkZWRcclxuICAgKi9cclxuICBhc3luYyBoYW5kbGVBZGRUb0NhcnQocHJvZHVjdElkLCBxdWFudGl0eSkge1xyXG5cclxuICAgIGF3YWl0IGNhcnRBUEkucG9zdChcIi9hZGR0b1wiLCB7IGNhcnRJRDogdGhpcy5zdGF0ZS5jYXJ0SUQsIHByb2R1Y3RJZDogcHJvZHVjdElkLCBxdWFudGl0eTogcXVhbnRpdHkgfSkudGhlbigoaXRlbSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogaXRlbS5kYXRhLmNhcnQgfSk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBhZGRpbmcgYSBjYXJ0IGl0ZW0nLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZXMgbGluZV9pdGVtcyBpbiBjYXJ0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jYXJ0LyN1cGRhdGUtY2FydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxpbmVJdGVtSWQgSUQgb2YgdGhlIGNhcnQgbGluZSBpdGVtIGJlaW5nIHVwZGF0ZWRcclxuICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbnRpdHkgTmV3IGxpbmUgaXRlbSBxdWFudGl0eSB0byB1cGRhdGVcclxuICAgKi9cclxuICBoYW5kbGVVcGRhdGVDYXJ0UXR5KGxpbmVJdGVtSWQsIHF1YW50aXR5KSB7XHJcbiAgICBjYXJ0QVBJLnB1dChcIi91cGRhdGVxdHlcIiwgeyBjYXJ0SUQ6IHRoaXMuc3RhdGUuY2FydElELCBsaW5lSXRlbUlkOiBsaW5lSXRlbUlkLCBxdWFudGl0eTogcXVhbnRpdHkgfSkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogcmVzcC5kYXRhLmNhcnQgfSlcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgd2FzIGFuIGVycm9yIHVwZGF0aW5nIHRoZSBjYXJ0IGl0ZW1zJywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGxpbmUgaXRlbSBmcm9tIGNhcnRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQvI3JlbW92ZS1mcm9tLWNhcnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lSXRlbUlkIElEIG9mIHRoZSBsaW5lIGl0ZW0gYmVpbmcgcmVtb3ZlZFxyXG4gICAqL1xyXG4gIGhhbmRsZVJlbW92ZUZyb21DYXJ0KGxpbmVJdGVtSWQpIHtcclxuICAgIGNhcnRBUEkuZGVsZXRlKFwiL3JlbW92ZWZyb20vXCIgKyB0aGlzLnN0YXRlLmNhcnRJRCArIFwiL1wiICsgbGluZUl0ZW1JZCkudGhlbigocmVzcCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY2FydDogcmVzcC5kYXRhLmNhcnQgfSlcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmVtb3ZpbmcgdGhlIGl0ZW0gZnJvbSB0aGUgY2FydCcsIGVycm9yKTtcclxuXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtcHRpZXMgY2FydCBjb250ZW50c1xyXG4gICAqIGh0dHBzOi8vY29tbWVyY2Vqcy5jb20vZG9jcy9zZGsvY2FydC8jcmVtb3ZlLWZyb20tY2FydFxyXG4gICAqL1xyXG4gIGFzeW5jIGhhbmRsZUVtcHR5Q2FydCgpIHtcclxuICAgIGF3YWl0IGNhcnRBUEkuZGVsZXRlKFwiL2VtcHR5L1wiICsgdGhpcy5zdGF0ZS5jYXJ0SUQpLnRoZW4oKHJlc3ApID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhcnQ6IHJlc3AuZGF0YS5jYXJ0IH0pXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIGVtcHR5aW5nIHRoZSBjYXJ0JywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAqIENyZWF0ZXMgYSBjYXJ0XHJcbiAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnRcclxuICAqL1xyXG4gIGFzeW5jIGNyZWF0ZUNhcnQoKSB7XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IGNhcnRBUEkuZ2V0KFwiL2NyZWF0ZVwiKS50aGVuKChjYXJ0KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiBjYXJ0LmRhdGEsIGNhcnRJRDogY2FydC5kYXRhLmlkIH0pO1xyXG4gICAgICBDb29raWVzLnNldCgnY2FydElEJywgY2FydC5kYXRhLmlkKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICApLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmV0cmlldmVDYXJ0KGNhcnRJRCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGNhcnRBUEkuZ2V0KFwiL2ZldGNoL1wiICsgY2FydElEKS50aGVuKChjYXJ0KSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJ0OiBjYXJ0LmRhdGEsIGNhcnRJRDogY2FydC5kYXRhLmlkIH0pO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgICkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVmcmVzaGVzIHRvIGEgbmV3IGNhcnRcclxuICAgKiBodHRwczovL2NvbW1lcmNlanMuY29tL2RvY3Mvc2RrL2NhcnQjcmVmcmVzaC1jYXJ0XHJcbiAgICovXHJcbiAgcmVmcmVzaENhcnQoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZUNhcnQoKTtcclxuICB9XHJcbiAgLy89PiBlbmQgZm8gY2FydCBmdW5jdGlvbnNcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FwdHVyZXMgdGhlIGNoZWNrb3V0XHJcbiAgICogaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jaGVja291dCNjYXB0dXJlLW9yZGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2hlY2tvdXRUb2tlbklkIFRoZSBJRCBvZiB0aGUgY2hlY2tvdXQgdG9rZW5cclxuICAgKiBAcGFyYW0ge29iamVjdH0gbmV3T3JkZXIgVGhlIG5ldyBvcmRlciBvYmplY3QgZGF0YVxyXG4gICAqL1xyXG4gIGhhbmRsZUNhcHR1cmVDaGVja291dChjaGVja291dFRva2VuSWQsIG5ld09yZGVyKSB7XHJcblxyXG4gICAgb3JkZXJtYW5hZ2VtZW50QVBJLnBvc3QoXCIvY2hlY2tvdXQvY3JlYXRlXCIsKVxyXG4gICAgY29tbWVyY2UuY2hlY2tvdXQuY2FwdHVyZShjaGVja291dFRva2VuSWQsIG5ld09yZGVyKS50aGVuKChvcmRlcikgPT4ge1xyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgb3JkZXI6IG9yZGVyLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFN0b3JlIHRoZSBvcmRlciBpbiBzZXNzaW9uIHN0b3JhZ2Ugc28gd2UgY2FuIHNob3cgaXQgYWdhaW5cclxuICAgICAgLy8gaWYgdGhlIHVzZXIgcmVmcmVzaGVzIHRoZSBwYWdlIVxyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ29yZGVyX3JlY2VpcHQnLCBKU09OLnN0cmluZ2lmeShvcmRlcikpO1xyXG4gICAgICAvLyBDbGVhcnMgdGhlIGNhcnRcclxuICAgICAgdGhpcy5yZWZyZXNoQ2FydCgpO1xyXG4gICAgICAvLyBTZW5kIHRoZSB1c2VyIHRvIHRoZSByZWNlaXB0XHJcbiAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvY29uZmlybWF0aW9uJyk7XHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciBjb25maXJtaW5nIHlvdXIgb3JkZXInLCBlcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAgICogIEdlbmVyYXRlcyBhIGNoZWNrb3V0IHRva2VuXHJcbiAgICAgKiAgaHR0cHM6Ly9jb21tZXJjZWpzLmNvbS9kb2NzL3Nkay9jaGVja291dCNnZW5lcmF0ZS10b2tlblxyXG4gICAgICovXHJcbiAgIGdlbmVyYXRlQ2hlY2tvdXRUb2tlbigpIHtcclxuICAgIGNvbnN0IHsgY2FydCB9ID0gdGhpcy5jb250ZXh0O1xyXG4gICAgaWYgKGNhcnQubGluZV9pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gY29tbWVyY2UuY2hlY2tvdXQuZ2VuZXJhdGVUb2tlbihjYXJ0LmlkLCB7IHR5cGU6ICdjYXJ0JyB9KVxyXG4gICAgICAgICAgICAudGhlbigodG9rZW4pID0+IHRoaXMuc2V0U3RhdGUoeyBjaGVja291dFRva2VuOiB0b2tlbiB9KSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5mZXRjaFNoaXBwaW5nQ291bnRyaWVzKHRoaXMuc3RhdGUuY2hlY2tvdXRUb2tlbi5pZCkpXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgaW4gZ2VuZXJhdGluZyBhIHRva2VuJywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGlzLnN0YXRlfT5cclxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQXBwV3JhcHBlciB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcENvbnRleHQoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==