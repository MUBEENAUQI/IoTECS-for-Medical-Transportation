import React from "react";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
//import Row from 'react-bootstrap/Row'
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Modal from 'react-bootstrap/Modal'
import "../../index.css";



class PluseOxy extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //heart: 0,spo2=0,
            show: false,
            //TempList: []
        };
    }

    //componentDidMount() {


    //    firebase.database().ref("max30102/1-set").on("value", snapshot => {
    //        //console.log(snapshot.val().object);
    //        this.setState({ heart: snapshot.val().HeartBeat });
    //        this.setState({ spo2: snapshot.val().spo2 });

    //    });
    //    firebase.database().ref("max30102/2-push").on("value", snapshot => {
    //        let TempList = [];
    //        snapshot.forEach(snap => {

    //            TempList.push(snap.val());
    //            console.log(snap.val());
    //        });
    //        this.setState({ TempList: TempList });
    //    });

    //}

    render() {
        return (


            <div className="home">

                <Col style={{ marginTop: 30 }}>
                    <Card className="tempcard" onClick={() => this.setState({ show: true })} >

                        <Card.Body>
                            <Card.Title style={{ marginTop: 5 }}>Pulse Oxy level</Card.Title>
                            <Card.Text>
                                Normal Oxygen Level of a person : 95% and higher
                            </Card.Text>
                            <Card.Text >
                                Patient Oxygen Level : %
                            </Card.Text>

                            <Card.Text>
                                Normal pulse rate of a person : 60 to 100 bpm
                            </Card.Text>
                            <Card.Text >
                                Patient pulse rate :  %
                            </Card.Text>

                        </Card.Body>
                    </Card>

                {/*<Col style={{ marginTop: 30 }}>*/}
                {/*    <Card className="tempcard" onClick={() => this.setState({ show: true })} >*/}

                {/*        <Card.Body>*/}
                {/*            <Card.Title style={{ marginTop: 5 }}>Pulse Oxy level</Card.Title>*/}
                {/*            <Card.Text>*/}
                {/*                Normal Oxygen Level of a person : 95% and higher*/}
                {/*            </Card.Text>*/}
                {/*            <Card.Text style={this.state.count > 94 && this.state.count < 101 ? { color: 'green' } : { color: "red" }}>*/}
                {/*                Patient Oxygen Level : {this.state.spo2} %*/}
                {/*            </Card.Text>*/}

                {/*            <Card.Text>*/}
                {/*                Normal pulse rate of a person : 60 to 100 bpm*/}
                {/*            </Card.Text>*/}
                {/*            <Card.Text style={this.state.heart > 59 && this.state.heart < 102 ? { color: 'green' } : { color: "red" }}>*/}
                {/*                Patient pulse rate : {this.state.heart} %*/}
                {/*            </Card.Text>*/}

                {/*        </Card.Body>*/}
                {/*    </Card>*/}
                    {/*<Modal*/}
                    {/*    show={this.state.show}*/}
                    {/*    onHide={() => this.setState({ show: false })}*/}
                    {/*    dialogClassName="modal-90w"*/}
                    {/*    aria-labelledby="example-custom-modal-styling-title">*/}
                    {/*    <Modal.Header closeButton>*/}
                    {/*        <Modal.Title id="example-custom-modal-styling-title">*/}
                    {/*            Previous Body Temperature Review*/}
                    {/*        </Modal.Title>*/}
                    {/*    </Modal.Header>*/}
                    {/*    <Modal.Body>*/}
                    {/*        {this.state.TempList.map(data => {*/}

                    {/*            return (*/}
                    {/*                <tr>*/}
                    {/*                    <td style={data.object > 35 && data.object < 38 ? { color: 'green' } : { color: "red" }} > {data.object}{' '}</td>*/}

                    {/*                </tr>*/}
                    {/*            );*/}
                    {/*        })}*/}
                    {/*    </Modal.Body>*/}
                    {/*</Modal>*/}
                </Col>



            </div>


        );
    }
}

export default PluseOxy;
