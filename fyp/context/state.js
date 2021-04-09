import { createContext } from 'react';
import React, { Component } from "react"
import axios from 'axios';
import Cookies from 'js-cookie'


export const AppContext = createContext();

const cartAPI = axios.create({
  baseURL: process.env.CARTMSURL,
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

const productAPI = axios.create({
  baseURL: process.env.PRODUCTSMSURL,
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

const ordermanagementAPI = axios.create({
  baseURL: process.env.ORDERMANAGEMENTMSURL,
  timeout: 3000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

class AppWrapper extends Component {

  constructor() {
    super();

    this.state = {
      cartID: "",
      order: {},
      cart: {},
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
      generateToken: this.generateToken.bind(this)
    };


  }


  /**
   * Fetch products data from Chec and stores in the products data object.
   * https://commercejs.com/docs/sdk/products
   */
  async fetchProducts() {
    productAPI.get("/get").then((products) => {
      this.setState({ products: products.data.data });
    }).catch((error) => {
      console.log('There was an error fetching the products', error);
    });
  }

  async fetchCart() {
    const cartID = Cookies.get('cartID');

    if (await this.retrieveCart(cartID)) {
      console.log("Cart Retrieved!");
    } else if (await this.createCart()) {
      console.log("Cart Created!")
    } else {
      console.error("An error occured while fetching the cart.")
    }
  }

  //Actions

  /**
   * Fetch a saved order receipt from local storage so we can show the confirmation page
   * again between page refreshes.
   */
  loadOrderFromLocalStorage() {
    if (window.localStorage.getItem('order_receipt')) {
      this.setState({ order: JSON.parse(window.localStorage.getItem('order_receipt')) })
    }
  }

  /**
   * Show hide cart in nav
   */
  toggleCart() {
    const { isCartVisible } = this.state;
    this.setState({
      isCartVisible: !isCartVisible,
    });
  }

  //-> start of cart functions
  /**
   * Adds a product to the current cart in session
   * https://commercejs.com/docs/sdk/cart/#add-to-cart
   *
   * @param {string} productId The ID of the product being added
   * @param {number} quantity The quantity of the product being added
   */
  async handleAddToCart(productId, quantity) {

    await cartAPI.post("/addto", { cartID: this.state.cartID, productId: productId, quantity: quantity }).then((item) => {
      this.setState({ cart: item.data.cart });
    }).catch((error) => {
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
    cartAPI.put("/updateqty", { cartID: this.state.cartID, lineItemId: lineItemId, quantity: quantity }).then((resp) => {
      this.setState({ cart: resp.data.cart })
    }).catch((error) => {
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
    cartAPI.delete("/removefrom/" + this.state.cartID + "/" + lineItemId).then((resp) => {
      this.setState({ cart: resp.data.cart })
    }).catch((error) => {
      console.error('There was an error removing the item from the cart', error);

    });
  }

  /**
   * Empties cart contents
   * https://commercejs.com/docs/sdk/cart/#remove-from-cart
   */
  async handleEmptyCart() {
    await cartAPI.delete("/empty/" + this.state.cartID).then((resp) => {
      this.setState({ cart: resp.data.cart })
    }).catch((error) => {
      console.error('There was an error emptying the cart', error);
    });
  }

  /**
  * Creates a cart
  * https://commercejs.com/docs/sdk/cart
  */
  async createCart() {

    return await cartAPI.get("/create").then((cart) => {
      this.setState({ cart: cart.data, cartID: cart.data.id });
      Cookies.set('cartID', cart.data.id);
      return true;
    }
    ).catch((error) => {
      console.error(error)
      return false;
    }
    );
  }

  async retrieveCart(cartID) {
    return await cartAPI.get("/fetch/" + cartID).then((cart) => {
      this.setState({ cart: cart.data, cartID: cart.data.id });
      return true;
    }
    ).catch((error) => {
      console.error(error)
      return false;
    });
  }

  /**
   * Refreshes to a new cart
   * https://commercejs.com/docs/sdk/cart#refresh-cart
   */
  refreshCart() {
    this.createCart();
  }
  //=> end fo cart functions

  /**
   * Captures the checkout
   * https://commercejs.com/docs/sdk/checkout#capture-order
   *
   * @param {string} checkoutTokenId The ID of the checkout token
   * @param {object} newOrder The new order object data
   */
  handleCaptureCheckout(checkoutTokenId, newOrder) {

    ordermanagementAPI.post("/checkout/create",)
    commerce.checkout.capture(checkoutTokenId, newOrder).then((order) => {

      this.setState({
        order: order,
      });

      // Store the order in session storage so we can show it again
      // if the user refreshes the page!
      window.localStorage.setItem('order_receipt', JSON.stringify(order));
      // Clears the cart
      this.refreshCart();
      // Send the user to the receipt
      this.props.history.push('/confirmation');
    }).catch((error) => {
      console.log('There was an error confirming your order', error);
    });
  }

  /**
     *  Generates a checkout token
     *  https://commercejs.com/docs/sdk/checkout#generate-token
     */
  generateCheckoutToken() {

    const { cart } = this.context;

    if (cart.line_items.length) {

      ordermanagementAPI.get("/checkout/generate/token", { cartID: cart.id }).then(token => {
        this.setState({ checkoutToken: token });
      }).catch(error => {
        console.log('There was an error in generating a token', error);
      });
    }

    if (cart.line_items.length) {
      return commerce.checkout.generateToken(cart.id, { type: 'cart' })
        .then((token) => this.setState({ checkoutToken: token }))
        .then(() => this.fetchShippingCountries(this.state.checkoutToken.id))
        .catch((error) => {
          console.log('There was an error in generating a token', error);
        });
    }
  };


  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}

export { AppWrapper };

export function useAppContext() {
  return useContext(AppContext);
}
