import React from 'react';
// import StorkLogoC from '../img/StorkLogoC.jpg';
import { Grid, Col } from 'react-bootstrap';
// import family from '../img/family.JPG';



const styles = {
    display: 'flex',
    justifyContent: "center",
    // backgroundImage:`url(${StorkLogoC})`,
    width: "100%",
    height: "800",

};

// const Img1 ={
//     padding:"28",
//     width: "75%",
//     height: "100%",
// };

// const Img ={
//
//     height:150,
//     width:200
// };

// const background ={
//   backgroundImage:`url(${StorkLogoC})`,
//     width: "100%",
//     height: "100%",
// };

const Content ={
        padding: 10,
        margin: 10,
        backgroundColor: "",
        color: "",
        display: "inline-block",
        fontFamily: "book",
        fontSize: "15.5",
        textAlign: "center",
};

const Content1 ={
    padding: 250,
    margin: 10,
    backgroundImg: "",
    color: "",
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: "50",
    textAlign: "center",
};

// const Abt ={
//     textAlign:"center"
//
// };



const About = () => {
        return(
            <div className="about" style={styles}>
            <Grid>
                    <Col lg={6} >
                        <p style={Content}>A place where your kids can learn Photoshop or Zbrush</p>

                        <p style={Content}>Are maybe they want to learn how to write code</p>


                    </Col>
                    <Col  lg={6} >

                    </Col>

                </Grid>


            </div>
        )
};

export default About
