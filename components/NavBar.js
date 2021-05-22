import React, { Component } from 'react';
import Cart from './CartModal';
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
        const { loading, user } = this.props.useFetchUser;

        return (
            <Navbar variant="dark" className="navbar-top">
                <Nav className="ml-auto">
                    <Navbar.Brand>Coffee Shop On Wheels</Navbar.Brand>
                </Nav>
                <Nav className="mr-5">

                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/menu">Menu</Nav.Link>
                    <Nav.Link href="/tracking">Where are we?</Nav.Link>
                    {!loading &&
                        (user ? (
                            <>
                                <Nav.Link href="/myaccount">My Account</Nav.Link>
                                <Nav.Link href="/api/auth/logout">Logout</Nav.Link>
                            </>
                        ) : (
                            <Nav.Link href="/api/auth/login">Login</Nav.Link>
                        ))}
                    <Nav.Item>
                        {this.renderCartNav()}
                        <Cart />
                    </Nav.Item>
                </Nav>
            </Navbar>

        );
    };
};

export default withUseFetchUser(NavBar);
