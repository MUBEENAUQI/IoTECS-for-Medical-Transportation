import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Row from "react-bootstrap/esm/Row";




class Temperature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Temp: 0,
        };
    }
    componentDidMount() {


        firebase.database().ref("mlx90614/1-set").on("value", snapshot => {
            console.log(snapshot.val().object);
            this.setState({ Temp: snapshot.val().object });

        });
        

    }
  

    render() {
        return (


            <div className="tbox">
                <Row><p className="boxfont">Temperature :</p></Row>
                <Row><p className="boxfont">{this.state.Temp}</p></Row>
               
            </div>

        );
    }
}

export default Temperature;
