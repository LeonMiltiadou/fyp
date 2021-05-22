import { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Pusher from 'pusher-js';
import axios from 'axios';
import ContactUsForm from '../components/ContactUsForm'

const PUSHERAUTHMSURL = process.env.PUSHERAUTHMSURL;
const PUSHER_APP_KEY = process.env.PUSHER_APP_KEY;
const PUSHER_CLUSTER = process.env.PUSHER_CLUSTER;

class Tracking extends Component {
    constructor(props) {
        super(props)
        this.state = { "latitude": 20, "longitude": 20, "accuracy": "1" };
        this.getUpdates = this.getUpdates.bind(this);
    }

    componentDidMount() {
        this.getUpdates();
    }

    getUpdates() {
        var pusher = new Pusher(PUSHER_APP_KEY, {
            authEndpoint: PUSHERAUTHMSURL + "/pusher/auth",
            cluster: PUSHER_CLUSTER
        });

        var channel = pusher.subscribe('private-test');

        channel.bind('client-driver-location', (data) => {

            this.setState(data);

        //     axios.post(`${NGROKURL}/api/new`, {
        //         latitude: data.latitude,
        //         longitude: data.longitude,
        //         accuracy: data.accuracy
        //     })
        //         .then(function (response) {
        //             console.log(response);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        });

    }

    renderMap() {
        const { latitude, longitude } = this.state;

        if (latitude == 20 && longitude == 20) {
            return <div id="tracking-not-available" >
                <div id="tracking-bar"></div>
                <h id="tracking-info">Tracking currently not available.</h>
            </div >
        } else {
            return <div id="tracking-available"><Map id="map"
                containerStyle={{
                    position: 'relative'

                }} google={this.props.google} zoom={18} center={{
                    lat: latitude,
                    lng: longitude
                }} initialCenter={{
                    lat: latitude,
                    lng: longitude
                }}>
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: latitude, lng: longitude }} />
                <InfoWindow onClose={this.onInfoWindowClose}>
                    <div>
                        <h1>"this.state.selectedPlace.name"</h1>
                    </div>
                </InfoWindow>
            </Map></div>
        }
    }
    render() {
        return (
            <div className="tracking-page">
                <div className="tracking-title">Tracking</div>
                {this.renderMap()}
                <div className="contact-us-title">Contact Us</div>
                <div id="contact-us">
                    <ContactUsForm />
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.GMAPSKEY)
})(Tracking);