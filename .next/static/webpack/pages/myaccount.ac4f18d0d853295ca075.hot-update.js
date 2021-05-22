webpackHotUpdate_N_E("pages/myaccount",{

/***/ "./pages/myaccount.js":
/*!****************************!*\
  !*** ./pages/myaccount.js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var C_Users_KGM_OneDrive_Documents_GitHub_chec_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/state.js */ "./context/state.js");
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Navbar */ "./node_modules/react-bootstrap/esm/Navbar.js");
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");

var _jsxFileName = "C:\\Users\\KGM\\OneDrive\\Documents\\GitHub\\chec\\fyp\\pages\\myaccount.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// This import is only included in the server build, because it's only used by getServerSideProps







class Profile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
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
    }, __jsx(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "dark",
      className: "navbar-myaccount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "flex-column mr-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
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
    }, "Orders")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
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
    }, "name: ", user.name)), showOrders && __jsx(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

Object(C_Users_KGM_OneDrive_Documents_GitHub_chec_fyp_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(Profile, "contextType", _context_state_js__WEBPACK_IMPORTED_MODULE_3__["AppContext"]);

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

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlhY2NvdW50LmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJvcmRlcnMiLCJzaG93QWNjb3VudERldGFpbHMiLCJzaG93T3JkZXJzIiwidW5kZXJsaW5lT3JkZXJzIiwidW5kZXJsaW5lQWNjb3VudERldGFpbHMiLCJjb21wb25lbnREaWRNb3VudCIsInVzZXIiLCJjb250ZXh0IiwiZ2V0VXNlciIsInN1YiIsImxpc3RPcmRlcnNGb3JDdXN0b21lciIsImRhdGEiLCJhcHBfbWV0YWRhdGEiLCJjb21tZXJjZUlEIiwic2V0U3RhdGUiLCJyZW5kZXJBY2NvdW50RGV0YWlscyIsInJlbmRlck9yZGVycyIsInJlbmRlciIsInBpY3R1cmUiLCJuaWNrbmFtZSIsIm5hbWUiLCJyZXZlcnNlIiwibWFwIiwib3JkZXIiLCJjdXN0b21lcl9yZWZlcmVuY2UiLCJsaW5lX2l0ZW1zIiwiaXRlbSIsInF1YW50aXR5IiwicHJvZHVjdF9uYW1lIiwib3JkZXJfdmFsdWUiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiLCJzdGF0dXNfZnVsZmlsbG1lbnQiLCJBcHBDb250ZXh0IiwiY3VzdG9tZXJJRCIsIm9yZGVybWFuYWdlbWVudEFQSSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJ0aW1lb3V0IiwiaGVhZGVycyIsImdldCIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU4sU0FBc0JDLCtDQUF0QixDQUFnQztBQUU5QkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUs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aWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbXlhY2NvdW50LmFjNGYxOGQwZDg1MzI5NWNhMDc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGltcG9ydCBpcyBvbmx5IGluY2x1ZGVkIGluIHRoZSBzZXJ2ZXIgYnVpbGQsIGJlY2F1c2UgaXQncyBvbmx5IHVzZWQgYnkgZ2V0U2VydmVyU2lkZVByb3BzXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF1dGgwIGZyb20gJy4uL2xpYi9hdXRoMCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc3RhdGUuanMnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXZiYXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgVGFibGUgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1RhYmxlJztcclxuXHJcbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG9yZGVyczogW10sXHJcbiAgICAgIHNob3dBY2NvdW50RGV0YWlsczogZmFsc2UsXHJcbiAgICAgIHNob3dPcmRlcnM6IHRydWUsXHJcbiAgICAgIHVuZGVybGluZU9yZGVyczogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgdW5kZXJsaW5lQWNjb3VudERldGFpbHM6IFwiXCJcclxuICAgIH1cclxuICB9XHJcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gQXBwQ29udGV4dDtcclxuXHJcbiAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgbGV0IHVzZXIgPSBhd2FpdCB0aGlzLmNvbnRleHQuZ2V0VXNlcih0aGlzLnByb3BzLnVzZXIuc3ViKTtcclxuICAgIGNvbnN0IG9yZGVycyA9IGF3YWl0IGxpc3RPcmRlcnNGb3JDdXN0b21lcih1c2VyLmRhdGEuYXBwX21ldGFkYXRhLmNvbW1lcmNlSUQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9yZGVyczogb3JkZXJzLmRhdGEgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJBY2NvdW50RGV0YWlscygpIHtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FjY291bnREZXRhaWxzOiB0cnVlLCBzaG93T3JkZXJzOiBmYWxzZSwgdW5kZXJsaW5lQWNjb3VudERldGFpbHM6IFwidW5kZXJsaW5lXCIsIHVuZGVybGluZU9yZGVyczogXCJcIiB9KTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXJPcmRlcnMoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd0FjY291bnREZXRhaWxzOiBmYWxzZSwgc2hvd09yZGVyczogdHJ1ZSwgdW5kZXJsaW5lQWNjb3VudERldGFpbHM6IFwiXCIsIHVuZGVybGluZU9yZGVyczogXCJ1bmRlcmxpbmVcIiB9KTtcclxuXHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IHVzZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBsZXQgeyBvcmRlcnMsIHNob3dBY2NvdW50RGV0YWlscywgc2hvd09yZGVycywgdW5kZXJsaW5lT3JkZXJzLCB1bmRlcmxpbmVBY2NvdW50RGV0YWlscyB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlhY2NvdW50LXBhZ2VcIj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteWFjY291bnQtbmF2LXRpdGxlXCI+TXkgQWNjb3VudDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlhY2NvdW50LW5hdlwiPlxyXG4gICAgICAgICAgPE5hdmJhciB2YXJpYW50PVwiZGFya1wiIGNsYXNzTmFtZT1cIm5hdmJhci1teWFjY291bnRcIj5cclxuICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJmbGV4LWNvbHVtbiBtci01XCI+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIG9uU2VsZWN0PXsoKSA9PiB0aGlzLnJlbmRlck9yZGVycygpfSBocmVmPVwiI1wiPjxoIGNsYXNzTmFtZT17dW5kZXJsaW5lT3JkZXJzfT5PcmRlcnM8L2g+PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICB7LyogPE5hdi5MaW5rIG9uU2VsZWN0PXsoKSA9PiB0aGlzLnJlbmRlckFjY291bnREZXRhaWxzKCl9IGhyZWY9XCIjXCI+PGggY2xhc3NOYW1lPXt1bmRlcmxpbmVBY2NvdW50RGV0YWlsc30+QWNjb3VudCBEZXRhaWxzPC9oPjwvTmF2Lkxpbms+ICovfVxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2FwaS9hdXRoL2xvZ291dFwiPkxvZ291dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgPC9OYXZiYXI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC1kZXRhaWxzXCI+XHJcblxyXG4gICAgICAgICAge3Nob3dBY2NvdW50RGV0YWlscyAmJiAoPGRpdj5cclxuICAgICAgICAgICAgPGgzPlByb2ZpbGUgKHNlcnZlciByZW5kZXJlZCk8L2gzPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17dXNlci5waWN0dXJlfSBhbHQ9XCJ1c2VyIHBpY3R1cmVcIiAvPlxyXG4gICAgICAgICAgICA8cD5uaWNrbmFtZToge3VzZXIubmlja25hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD5uYW1lOiB7dXNlci5uYW1lfTwvcD5cclxuICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICAgICAge3Nob3dPcmRlcnMgJiYgKFxyXG4gICAgICAgICAgICA8VGFibGUgYm9yZGVybGVzcyBzdHJpcGVkIGNsYXNzTmFtZT1cIm9yZGVyLXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIm9yZGVyLXRhYmxlLWhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+SUQgTnVtYmVyPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+T3JkZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Ub3RhbCBQcmljZTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG5cclxuICAgICAgICAgICAgICAgIHtvcmRlcnMucmV2ZXJzZSgpLm1hcCgob3JkZXIpID0+IChcclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntvcmRlci5jdXN0b21lcl9yZWZlcmVuY2V9PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7b3JkZXIub3JkZXIubGluZV9pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57aXRlbS5xdWFudGl0eX0geCB7IGl0ZW0ucHJvZHVjdF9uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e29yZGVyLm9yZGVyX3ZhbHVlLmZvcm1hdHRlZF93aXRoX3N5bWJvbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b3JkZXIuc3RhdHVzX2Z1bGZpbGxtZW50fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L3Rib2R5PlxyXG5cclxuICAgICAgICAgICAgPC9UYWJsZT4pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxpc3RPcmRlcnNGb3JDdXN0b21lcihjdXN0b21lcklEKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG9yZGVybWFuYWdlbWVudEFQSSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52Lk9SREVSTUFOQUdFTUVOVE1TVVJMLFxyXG4gICAgICB0aW1lb3V0OiAzMDAwLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBhd2FpdCBvcmRlcm1hbmFnZW1lbnRBUEkuZ2V0KFwiL2N1c3RvbWVyL2xpc3RvcmRlcnMvXCIgKyBjdXN0b21lcklEKS50aGVuKChvcmRlcnMpID0+IHtcclxuXHJcbiAgICAgIHJldHVybiBvcmRlcnMuZGF0YTsgLy8gQWRkIHJldHVybnMgZm9yIG90aGVyIGNhdGNoXHJcblxyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgcmV0cmlldmluZyBhIGxpc3Qgb2Ygb3JkZXJzIGZvciB0aGUgY3VzdG9tZXInLCBlcnJvcik7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIGEgbGlzdCBvZiBvcmRlcnMgZm9yIHRoZSBjdXN0b21lcicgKyBjdXN0b21lcklELCBlcnJvcik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEsIHJlcyB9KSB7XHJcbiAgLy8gSGVyZSB5b3UgY2FuIGNoZWNrIGF1dGhlbnRpY2F0aW9uIHN0YXR1cyBkaXJlY3RseSBiZWZvcmUgcmVuZGVyaW5nIHRoZSBwYWdlLFxyXG4gIC8vIGhvd2V2ZXIgdGhlIHBhZ2Ugd291bGQgYmUgYSBzZXJ2ZXJsZXNzIGZ1bmN0aW9uLCB3aGljaCBpcyBtb3JlIGV4cGVuc2l2ZSBhbmRcclxuICAvLyBzbG93ZXIgdGhhbiBhIHN0YXRpYyBwYWdlIHdpdGggY2xpZW50IHNpZGUgYXV0aGVudGljYXRpb25cclxuICBjb25zdCB4ID0gNTtcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aDAuZ2V0U2Vzc2lvbihyZXEsIHJlcylcclxuXHJcbiAgaWYgKCFzZXNzaW9uIHx8ICFzZXNzaW9uLnVzZXIpIHtcclxuICAgIHJlcy53cml0ZUhlYWQoMzAyLCB7XHJcbiAgICAgIExvY2F0aW9uOiAnL2FwaS9sb2dpbicsXHJcbiAgICB9KVxyXG4gICAgcmVzLmVuZCgpXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgdXNlcjogc2Vzc2lvbi51c2VyIH0gfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=