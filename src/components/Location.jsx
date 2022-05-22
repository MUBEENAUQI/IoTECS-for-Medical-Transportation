import React from "react";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Row from "react-bootstrap/esm/Row";



class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0,
            lon:0,
        };
    }
    componentDidMount() {


        firebase.database().ref("sensorData/1-set").on("value", snapshot => {
            
            this.setState({
                lat: snapshot.val().latitude,
                lon: snapshot.val().longitude
            });

        });


    }

    render() {
        return (
            <Map
                google={this.props.google}
                style={{ width: "100%", height: "100%" }}
                zoom={18}
                initialCenter={{
                    lat: 9.8919532,
                    lng: 76.4379027
                }}>
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{
                        lat: 9.8919532,
                        lng: 76.4379027
                    }} />
                </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyAA0 - iwkv8lsWSfXjWDlcvxXSeyXm6BJe0"
})(Location);



