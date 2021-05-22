// This import is only included in the server build, because it's only used by getServerSideProps
import { Component } from 'react';
import auth0 from '../lib/auth0'
import axios from 'axios';
import { AppContext } from '../context/state.js';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      showAccountDetails: false,
      showOrders: true,
      underlineOrders: "underline",
      underlineAccountDetails: ""
    }
  }
  static contextType = AppContext;

  async componentDidMount() {

    let user = await this.context.getUser(this.props.user.sub);
    const orders = await listOrdersForCustomer(user.data.app_metadata.commerceID);
    this.setState({ orders: orders.data });
  }

  renderAccountDetails() {

    this.setState({ showAccountDetails: true, showOrders: false, underlineAccountDetails: "underline", underlineOrders: "" });

  }

  renderOrders() {
    this.setState({ showAccountDetails: false, showOrders: true, underlineAccountDetails: "", underlineOrders: "underline" });

  }
  render() {
    let { user } = this.props;
    let { orders, showAccountDetails, showOrders, underlineOrders, underlineAccountDetails } = this.state;
    return (
      <div className="myaccount-page">

        <div className="myaccount-nav-title">My Account</div>
        <div className="myaccount-nav">
          <Navbar variant="dark" className="navbar-myaccount">
            <Nav className="flex-column mr-5">
              <Nav.Link onSelect={() => this.renderOrders()} href="#"><h className={underlineOrders}>Orders</h></Nav.Link>
              <Nav.Link onSelect={() => this.renderAccountDetails()} href="#"><h className={underlineAccountDetails}>Account Details</h></Nav.Link>
              <Nav.Link href="/api/auth/logout">Logout</Nav.Link>
            </Nav>
          </Navbar>

        </div>
        <div className="account-details">

          {showAccountDetails && (<div>
            <h3>Profile (server rendered)</h3>
            <img src={user.picture} alt="user picture" />
            <p>nickname: {user.nickname}</p>
            <p>name: {user.name}</p>
          </div>)}

          {showOrders && (
            <Table borderless striped className="order-table">
              <thead>
                <tr className="order-table-heading">
                  <th scope="col">ID Number</th>
                  <th scope="col">Order</th>
                  <th scope="col">Total Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>

                {orders.reverse().map((order) => (
                  <tr>
                    <th scope="row">{order.customer_reference}</th>
                    <td>
                      {order.order.line_items.map((item) => (
                        <div>{item.quantity} x { item.product_name}</div>
                      ))}
                    </td>
                    <td>{order.order_value.formatted_with_symbol}</td>
                    <td>{order.status_fulfillment}</td>
                  </tr>
                ))}
              </tbody>

            </Table>)}
        </div>
      </div>
    )
  }
}

async function listOrdersForCustomer(customerID) {
  try {
    const ordermanagementAPI = axios.create({
      baseURL: process.env.ORDERMANAGEMENTMSURL,
      timeout: 3000,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    });

    return await ordermanagementAPI.get("/customer/listorders/" + customerID).then((orders) => {

      return orders.data; // Add returns for other catch

    }).catch((error) => {
      console.log('There was an error retrieving a list of orders for the customer', error);
      return null;
    });
  } catch (error) {
    console.error('There was an error retrieving a list of orders for the customer' + customerID, error);
    return null;
  }
}

export async function getServerSideProps({ req, res }) {
  // Here you can check authentication status directly before rendering the page,
  // however the page would be a serverless function, which is more expensive and
  // slower than a static page with client side authentication
  const x = 5;
  const session = await auth0.getSession(req, res)

  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/login',
    })
    res.end()
    return
  }
  return { props: { user: session.user } }
}

export default Profile
