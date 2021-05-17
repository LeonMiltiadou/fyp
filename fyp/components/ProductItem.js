import React, { Component } from "react";
import PropTypes from 'prop-types';
import stripHtml from 'string-strip-html';
import { AppContext } from '../context/state.js'


class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.handleAddToCart = this.handleAddToCart.bind(this);
    }

    static contextType = AppContext;

    handleAddToCart() {
        this.context.handleAddToCart(this.props.product.id, 1);
    }

    render() {
        const { product } = this.props
        const { result } = stripHtml(product.description);

        return (
            <div className="product__card">
                <img className="product__image" src={product.media.source} alt={product.name} />
                <div className="product__info">
                    <h4 className="product__name">{product.name}</h4>
                    <p className="product__description">
                        {/* product description stripped of html tags */}
                        {result}
                    </p>
                    <div className="product__details">
                        <p className="product__price">
                            {product.price.formatted_with_symbol}
                        </p>
                    </div>
                    <button
                        name="Add to cart"
                        className="product__btn"
                        onClick={this.handleAddToCart}
                    >
                        Quick add
                    </button>
                </div>
            </div>
        );
    }
};


export default ProductItem;

ProductItem.propTypes = {
    product: PropTypes.object,
    onAddToCart: PropTypes.func,
    handleAddToCart: PropTypes.func,
};