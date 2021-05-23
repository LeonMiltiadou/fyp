import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'


import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

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
