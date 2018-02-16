import React  from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


import logo from '../img/PlatypusLogo.jpg';
const styles = {
    display: 'flex',
    justifyContent: "center"


};


const img = {
    backgroundImage: `url(${logo})`,
    width: "100%",
    height: 700,

};

const Content ={
    padding: 250,
    margin: 180,
    backgroundImg: "",
    color: "",
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: "50",
    textAlign: "center",
};
const Home =() => {
        return(
            <div className="Home" style={styles} >
                <Grid >
                    <Col md={12} >
                        <img style={img} src={logo}/>
                    </Col>
                </Grid>
            </div>

        )
    };


export default Home;
