import React from "react";
import { Map,  Marker, GoogleApiWrapper} from 'google-maps-react'

class Location extends React.Component {
    render() {
        return (
            <Map
                google={this.props.google}
                style={{ width: "100%", height: "100%" }}
                zoom={18}
                initialCenter={{
                    lat: 9.990040,
                    lng: 76.251282
                }}>
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{
                        lat: 9.990040,
                        lng: 76.251282 }} />
                </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAA0 - iwkv8lsWSfXjWDlcvxXSeyXm6BJe0"
})(Location);
