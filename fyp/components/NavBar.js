import React, { Component } from 'react';
import Cart from './Cart';
import { AppContext } from '../context/state'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { withUseFetchUser } from '../lib/user'

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
        const { cart, isCartVisible } = this.context;

        return (
            <div className="nav__cart" onClick={this.context.toggleCart}>
                {!isCartVisible ? (
                    <button className="nav__cart-open">
                        <FontAwesomeIcon size="2x" icon="shopping-bag" color="#292B83" />
                        {cart !== null ? <span>{cart.total_items}</span> : ''}
                    </button>
                ) : (
                        <button className="nav__cart-close">
                            <FontAwesomeIcon size="1x" icon="times" color="white" />
                        </button>
                    )}
            </div>
        )
    }

    render() {
        const { loading, user } = this.props.useFetchUser;

        return (
            <Navbar bg="light">
                <Nav className="mr-auto">
                    <Navbar.Brand>FYP Coffee Shop</Navbar.Brand>
                </Nav>
                <Nav className="ml-auto">

                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Tracking">Where are we?</Nav.Link>
                    {!loading &&
                    (user ? (
                    <>
                        <Nav.Link href="/profile">Client-rendered profile</Nav.Link>
                        <Nav.Link href="/advanced/ssr-profile">Server rendered profile (advanced)</Nav.Link>
                        <Nav.Link href="/api/logout">Logout</Nav.Link>
                    </>
                    ) : (
                       <Nav.Link href="/api/login">Login</Nav.Link>
                    ))}
                    <Nav.Item>
                        {this.renderCartNav()}
                        {this.context.isCartVisible &&
                            <Cart />
                        }
                    </Nav.Item>
                </Nav>
            </Navbar>

        );
    };
};

export default withUseFetchUser(NavBar);
