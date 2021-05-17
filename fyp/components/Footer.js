import React, { Component } from 'react';
import Cart from './CartModal';
import { AppContext } from '../context/state'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { withUseFetchUser } from '../lib/user'
import Image from 'next/image'

library.add(faShoppingBag, faTimes)


class NavBar extends Component {
    constructor(props) {
        super(props);

    }
    static contextType = AppContext;

    componentDidMount() {
        this.context.fetchCart();
    }
    renderCartNav() {
        const { cart } = this.context;

        return (

            <div className="nav__cart" onClick={this.context.toggleCart}>
                <button className="nav__cart-open">
                    <FontAwesomeIcon size="2x" icon="shopping-bag" color="#fff" />
                    {cart !== null ? <span>{cart.total_items}</span> : ''}
                </button>

            </div>
        )
    }

    render() {

        return (
            <Navbar className="footer" variant="dark">
                <ul className="shop-description-list">
                    <li>COFFEE SHOP ON WHEELS</li>
                    <li>Our Location - Varies!</li>
                    <li>See the WHERE ARE WE page for real time updates.</li>
                </ul>

                <ul className="social-list">
                    <li>Follow Us On Social Media</li>
                    <li>
                        <ul className="social-icons-list">
                            <li>
                                <Image
                                    alt="facebook"
                                    src="/img/icons/facebook.png"
                                    layout="intrinsic"
                                    width="55"
                                    height="55"
                                />
                            </li>
                            <li>

                                <Image
                                    alt="instagram"
                                    src="/img/icons/instagram.png"
                                    layout="intrinsic"
                                    width="55"
                                    height="55"
                                />                        </li>
                            <li>

                                <Image
                                    alt="twitter"
                                    src="/img/icons/twitter.png"
                                    layout="intrinsic"
                                    width="55"
                                    height="55"
                                />                        </li>
                        </ul>

                    </li>

                </ul>
            </Navbar>

        );
    };
};

export default withUseFetchUser(NavBar);
