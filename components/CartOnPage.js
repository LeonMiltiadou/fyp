import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { AppContext } from '../context/state.js'
import Router from 'next/router';
import Modal from 'react-bootstrap/Modal';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleEmptyCart = this.handleEmptyCart.bind(this);
  }

  static contextType = AppContext;


  handleEmptyCart() {
    this.context.handleEmptyCart();
  }

  renderEmptyCart() {
    const { cart } = this.context;
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className="cart-on-page__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  }

  handleClose() {
    this.context.toggleCart();
  }

  renderCart() {
    const { cart } = this.context;


    if (cart.total_unique_items === 0) {
      return;
    }

    return (
      <>
        {cart.line_items.map(lineItem => (
          <CartItem
            item={lineItem}
            key={lineItem.id}
            {...this.props}
            className="cart-on-page__inner"
          />
        ))}
        <div className="cart-on-page__seperators">
          <div className="cart-on-page__seperator-top-white"></div>
          <div className="cart-on-page__seperator-bottom-orange"></div>
        </div>
        <div className="cart-on-page__total">
          <p></p>
          <p className="cart-on-page__total-price">Subtotal: {cart.subtotal.formatted_with_symbol}</p>
        </div>
        <div className="cart-on-page__footer">
          <button className="cart-on-page__btn-empty" onClick={this.handleEmptyCart}>Empty cart</button>
          <button className="cart-on-page__btn-checkout"
            onClick={() => Router.push({
              pathname: '/checkout'
            })}              >
            Checkout
          </button>
        </div>
      </>
    );
  }

  render() {
    return (

      <div className="cart-on-page">
        {this.renderEmptyCart()}
        {this.renderCart()}
      </div>
    );
  };
};

export default Cart;

Cart.propTypes = {
  cart: PropTypes.object,
  onUpdateCartQty: () => { },
  onRemoveFromCart: () => { },
  onEmptyCart: () => { },
  handleUpdateCartQty: PropTypes.func,
  history: PropTypes.object
};
