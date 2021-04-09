import React, { Component } from 'react';
import commerce from '../lib/commerce';
import PropTypes from 'prop-types';
import { AppContext } from '../context/state.js'

import Hero from '../components/Hero';
import ProductsList from '../components/ProductsList';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      merchant: {},
    }
  }

  static contextType = AppContext;

  componentDidMount() {
    this.fetchMerchantDetails();
    this.context.loadOrderFromLocalStorage();
  }

  /**
   * Fetch merchant details
   * https://commercejs.com/docs/sdk/full-sdk-reference#merchants
   */
  fetchMerchantDetails() {
    commerce.merchants.about().then((merchant) => {
      this.setState({ merchant: merchant });
    }).catch((error) => {
      console.log('There was an error fetch the merchant details', error)
    });
  }

  render() {
    const {
      merchant,
    } = this.state;

    return (
      <div>
      <div className="app">
      <>
          <Hero
            merchant={merchant}
          />
          
          <ProductsList
            {...this.props}
          />
        </>
      </div>
      </div>
    );
  }
};

export default App;

App.propTypes = {
  history: PropTypes.object,
};
