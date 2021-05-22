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
    }, "Account Details")), __jsx(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__["default"].Link, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbXlhY2NvdW50LmpzIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJvcmRlcnMiLCJzaG93QWNjb3VudERldGFpbHMiLCJzaG93T3JkZXJzIiwidW5kZXJsaW5lT3JkZXJzIiwidW5kZXJsaW5lQWNjb3VudERldGFpbHMiLCJjb21wb25lbnREaWRNb3VudCIsInVzZXIiLCJjb250ZXh0IiwiZ2V0VXNlciIsInN1YiIsImxpc3RPcmRlcnNGb3JDdXN0b21lciIsImRhdGEiLCJhcHBfbWV0YWRhdGEiLCJjb21tZXJjZUlEIiwic2V0U3RhdGUiLCJyZW5kZXJBY2NvdW50RGV0YWlscyIsInJlbmRlck9yZGVycyIsInJlbmRlciIsInBpY3R1cmUiLCJuaWNrbmFtZSIsIm5hbWUiLCJyZXZlcnNlIiwibWFwIiwib3JkZXIiLCJjdXN0b21lcl9yZWZlcmVuY2UiLCJsaW5lX2l0ZW1zIiwiaXRlbSIsInF1YW50aXR5IiwicHJvZHVjdF9uYW1lIiwib3JkZXJfdmFsdWUiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiLCJzdGF0dXNfZnVsZmlsbG1lbnQiLCJBcHBDb250ZXh0IiwiY3VzdG9tZXJJRCIsIm9yZGVybWFuYWdlbWVudEFQSSIsImF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJ0aW1lb3V0IiwiaGVhZGVycyIsImdldCIsInRoZW4iLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE9BQU4sU0FBc0JDLCtDQUF0QixDQUFnQztBQUU5QkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUs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Q0FBQ0MsR0FBUixDQUFZLGlFQUFaLEVBQStFRixLQUEvRTtBQUNBLGFBQU8sSUFBUDtBQUNELEtBUFksQ0FBYjtBQVFELEdBbEJELENBa0JFLE9BQU9BLEtBQVAsRUFBYztBQUNkQyxXQUFPLENBQUNELEtBQVIsQ0FBYyxvRUFBb0VYLFVBQWxGLEVBQThGVyxLQUE5RjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7OztBQW1CY2pELHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL215YWNjb3VudC40ZjA3OTc0NWZiM2QyZjIwNjMzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhpcyBpbXBvcnQgaXMgb25seSBpbmNsdWRlZCBpbiB0aGUgc2VydmVyIGJ1aWxkLCBiZWNhdXNlIGl0J3Mgb25seSB1c2VkIGJ5IGdldFNlcnZlclNpZGVQcm9wc1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhdXRoMCBmcm9tICcuLi9saWIvYXV0aDAnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0L3N0YXRlLmpzJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9UYWJsZSc7XHJcblxyXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBvcmRlcnM6IFtdLFxyXG4gICAgICBzaG93QWNjb3VudERldGFpbHM6IGZhbHNlLFxyXG4gICAgICBzaG93T3JkZXJzOiB0cnVlLFxyXG4gICAgICB1bmRlcmxpbmVPcmRlcnM6IFwidW5kZXJsaW5lXCIsXHJcbiAgICAgIHVuZGVybGluZUFjY291bnREZXRhaWxzOiBcIlwiXHJcbiAgICB9XHJcbiAgfVxyXG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IEFwcENvbnRleHQ7XHJcblxyXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cclxuICAgIGxldCB1c2VyID0gYXdhaXQgdGhpcy5jb250ZXh0LmdldFVzZXIodGhpcy5wcm9wcy51c2VyLnN1Yik7XHJcbiAgICBjb25zdCBvcmRlcnMgPSBhd2FpdCBsaXN0T3JkZXJzRm9yQ3VzdG9tZXIodXNlci5kYXRhLmFwcF9tZXRhZGF0YS5jb21tZXJjZUlEKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcmRlcnM6IG9yZGVycy5kYXRhIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQWNjb3VudERldGFpbHMoKSB7XHJcblxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBY2NvdW50RGV0YWlsczogdHJ1ZSwgc2hvd09yZGVyczogZmFsc2UsIHVuZGVybGluZUFjY291bnREZXRhaWxzOiBcInVuZGVybGluZVwiLCB1bmRlcmxpbmVPcmRlcnM6IFwiXCIgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyT3JkZXJzKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBY2NvdW50RGV0YWlsczogZmFsc2UsIHNob3dPcmRlcnM6IHRydWUsIHVuZGVybGluZUFjY291bnREZXRhaWxzOiBcIlwiLCB1bmRlcmxpbmVPcmRlcnM6IFwidW5kZXJsaW5lXCIgfSk7XHJcblxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyB1c2VyIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IHsgb3JkZXJzLCBzaG93QWNjb3VudERldGFpbHMsIHNob3dPcmRlcnMsIHVuZGVybGluZU9yZGVycywgdW5kZXJsaW5lQWNjb3VudERldGFpbHMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15YWNjb3VudC1wYWdlXCI+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXlhY2NvdW50LW5hdi10aXRsZVwiPk15IEFjY291bnQ8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15YWNjb3VudC1uYXZcIj5cclxuICAgICAgICAgIDxOYXZiYXIgdmFyaWFudD1cImRhcmtcIiBjbGFzc05hbWU9XCJuYXZiYXItbXlhY2NvdW50XCI+XHJcbiAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwiZmxleC1jb2x1bW4gbXItNVwiPlxyXG4gICAgICAgICAgICAgIDxOYXYuTGluayBvblNlbGVjdD17KCkgPT4gdGhpcy5yZW5kZXJPcmRlcnMoKX0gaHJlZj1cIiNcIj48aCBjbGFzc05hbWU9e3VuZGVybGluZU9yZGVyc30+T3JkZXJzPC9oPjwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIG9uU2VsZWN0PXsoKSA9PiB0aGlzLnJlbmRlckFjY291bnREZXRhaWxzKCl9IGhyZWY9XCIjXCI+PGggY2xhc3NOYW1lPXt1bmRlcmxpbmVBY2NvdW50RGV0YWlsc30+QWNjb3VudCBEZXRhaWxzPC9oPjwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvYXBpL2F1dGgvbG9nb3V0XCI+TG9nb3V0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPC9OYXY+XHJcbiAgICAgICAgICA8L05hdmJhcj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LWRldGFpbHNcIj5cclxuXHJcbiAgICAgICAgICB7c2hvd0FjY291bnREZXRhaWxzICYmICg8ZGl2PlxyXG4gICAgICAgICAgICA8aDM+UHJvZmlsZSAoc2VydmVyIHJlbmRlcmVkKTwvaDM+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLnBpY3R1cmV9IGFsdD1cInVzZXIgcGljdHVyZVwiIC8+XHJcbiAgICAgICAgICAgIDxwPm5pY2tuYW1lOiB7dXNlci5uaWNrbmFtZX08L3A+XHJcbiAgICAgICAgICAgIDxwPm5hbWU6IHt1c2VyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+KX1cclxuXHJcbiAgICAgICAgICB7c2hvd09yZGVycyAmJiAoXHJcbiAgICAgICAgICAgIDxUYWJsZSBib3JkZXJsZXNzIHN0cmlwZWQgY2xhc3NOYW1lPVwib3JkZXItdGFibGVcIj5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwib3JkZXItdGFibGUtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5JRCBOdW1iZXI8L3RoPlxyXG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5PcmRlcjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlRvdGFsIFByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICA8dGJvZHk+XHJcblxyXG4gICAgICAgICAgICAgICAge29yZGVycy5yZXZlcnNlKCkubWFwKChvcmRlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+e29yZGVyLmN1c3RvbWVyX3JlZmVyZW5jZX08L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtvcmRlci5vcmRlci5saW5lX2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLnF1YW50aXR5fSB4IHsgaXRlbS5wcm9kdWN0X25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57b3JkZXIub3JkZXJfdmFsdWUuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkPntvcmRlci5zdGF0dXNfZnVsZmlsbG1lbnR9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvdGJvZHk+XHJcblxyXG4gICAgICAgICAgICA8L1RhYmxlPil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbGlzdE9yZGVyc0ZvckN1c3RvbWVyKGN1c3RvbWVySUQpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgb3JkZXJtYW5hZ2VtZW50QVBJID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuT1JERVJNQU5BR0VNRU5UTVNVUkwsXHJcbiAgICAgIHRpbWVvdXQ6IDMwMDAsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGF3YWl0IG9yZGVybWFuYWdlbWVudEFQSS5nZXQoXCIvY3VzdG9tZXIvbGlzdG9yZGVycy9cIiArIGN1c3RvbWVySUQpLnRoZW4oKG9yZGVycykgPT4ge1xyXG5cclxuICAgICAgcmV0dXJuIG9yZGVycy5kYXRhOyAvLyBBZGQgcmV0dXJucyBmb3Igb3RoZXIgY2F0Y2hcclxuXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciByZXRyaWV2aW5nIGEgbGlzdCBvZiBvcmRlcnMgZm9yIHRoZSBjdXN0b21lcicsIGVycm9yKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignVGhlcmUgd2FzIGFuIGVycm9yIHJldHJpZXZpbmcgYSBsaXN0IG9mIG9yZGVycyBmb3IgdGhlIGN1c3RvbWVyJyArIGN1c3RvbWVySUQsIGVycm9yKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHJlcSwgcmVzIH0pIHtcclxuICAvLyBIZXJlIHlvdSBjYW4gY2hlY2sgYXV0aGVudGljYXRpb24gc3RhdHVzIGRpcmVjdGx5IGJlZm9yZSByZW5kZXJpbmcgdGhlIHBhZ2UsXHJcbiAgLy8gaG93ZXZlciB0aGUgcGFnZSB3b3VsZCBiZSBhIHNlcnZlcmxlc3MgZnVuY3Rpb24sIHdoaWNoIGlzIG1vcmUgZXhwZW5zaXZlIGFuZFxyXG4gIC8vIHNsb3dlciB0aGFuIGEgc3RhdGljIHBhZ2Ugd2l0aCBjbGllbnQgc2lkZSBhdXRoZW50aWNhdGlvblxyXG4gIGNvbnN0IHggPSA1O1xyXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoMC5nZXRTZXNzaW9uKHJlcSwgcmVzKVxyXG5cclxuICBpZiAoIXNlc3Npb24gfHwgIXNlc3Npb24udXNlcikge1xyXG4gICAgcmVzLndyaXRlSGVhZCgzMDIsIHtcclxuICAgICAgTG9jYXRpb246ICcvYXBpL2xvZ2luJyxcclxuICAgIH0pXHJcbiAgICByZXMuZW5kKClcclxuICAgIHJldHVyblxyXG4gIH1cclxuICByZXR1cm4geyBwcm9wczogeyB1c2VyOiBzZXNzaW9uLnVzZXIgfSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==