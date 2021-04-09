import { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Pusher from 'pusher-js';
import axios from 'axios';

const NGROKURL = process.env.NGROKURL;

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
        var pusher = new Pusher('4b368d79d76620bdd3a5', {
            authEndpoint: `${NGROKURL}/pusher/auth`,
            cluster: 'eu'
        });

        var channel = pusher.subscribe('private-test');

        channel.bind('client-driver-location', (data) => {

            this.setState(data);

            axios.post(`${NGROKURL}/api/new`, {
                latitude: data.latitude,
                longitude: data.longitude,
                accuracy: data.accuracy
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });

    }

    renderMap() {
        const { latitude, longitude } = this.state;

        if (latitude == 20 && longitude == 20) {
            return <h1>Tracking currently not available</h1>
        } else {
            return <Map google={this.props.google} zoom={18} center={{
                lat: latitude,
                lng: longitude
            }} initialCenter={{
                lat: 1,
                lng: 1
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
            </Map>;
        }
    }
    render() {
        return (
            <div>
                {this.renderMap()}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (process.env.GMAPSKEY)
})(Tracking);