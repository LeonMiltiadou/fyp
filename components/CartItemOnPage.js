import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {AppContext} from '../context/state'

class CartItem extends Component {
  constructor(props) {
    super(props);

    this.handleUpdateCartQty = this.handleUpdateCartQty.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  static contextType = AppContext;

  handleUpdateCartQty(lineItemId, quantity) {
    this.context.handleUpdateCartQty(lineItemId, quantity);
  }

  handleRemoveFromCart(lineItemId) {
    this.context.handleRemoveFromCart(lineItemId);
  }

  render() {
    const { item } = this.props;

    return (
      <div className="cart-item-on-page">
        <img className="cart-item-on-page__image" src={item.media.source} alt={item.name} />
          <div className="cart-on-page-item__details">
            <h4 className="cart-item-on-page__details-name">{item.name}</h4>
            <div className="cart-item-on-page__details-qty">
              <button type="button" onClick={() => item.quantity > 1 ? this.handleUpdateCartQty(item.id, item.quantity - 1) : this.handleRemoveFromCart(item.id)}>-</button>
              <p>{item.quantity}</p>
              <button type="button" onClick={() => this.handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
            </div>
            <button type="button" className="cart-item-on-page__remove" onClick={() => this.handleRemoveFromCart(item.id)}>Remove</button>
          </div>
          <div className="cart-item-on-page__details-price">{item.line_total.formatted_with_symbol}</div>
      </div>
    );
  };
};

export default CartItem;

CartItem.propTypes = {
    item: PropTypes.object,
    handleUpdateCartQty: PropTypes.func,
    onUpdateCartQty: PropTypes.func,
    onRemoveFromCart: PropTypes.func
 };
