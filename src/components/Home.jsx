import React from "react";

import Col from 'react-bootstrap/Col'
import "../index.css";
import Temp from "../../src/components/Bodypara/temp"
//import PluseOxy from "../../src/components/Bodypara/heart"


class Home extends React.Component {

    render() {
        return (


            <div className="home">
                <div class="container" >
                <h1 className="text-center mt-5">Patient Health Parameters</h1>



                <Col style={{ marginTop: 30 }}>
                    <Temp/>
                        {/*<PluseOxy/>*/}
                </Col>



            </div>
            </div>

  );
    }
}

export default Home;
