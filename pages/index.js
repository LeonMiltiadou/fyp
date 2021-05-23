import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      merchant: {},
    }
  }

  render() {

    return (
      <div className="home">
        <Image
          alt="coffee-cup"
          src="/img/pexels-nao-triponez-129207.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    );
  }
};

export default App;

App.propTypes = {
  history: PropTypes.object,
};
