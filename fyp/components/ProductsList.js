import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductItem from './ProductItem';
import { AppContext } from '../context/state.js'

class ProductsList extends Component {

    static contextType = AppContext;

    componentDidMount() {
        this.context.fetchProducts();
      }

    render() {
        const { products } = this.context;

        return (
            <>
                <div className="products" id="products">
                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            {...this.props}
                        />
                    ))}
                </div>
            </>
        )
    }
}

export default ProductsList;

ProductsList.propTypes = {
    products: PropTypes.array
};