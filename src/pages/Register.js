import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Login from './Login';
import axios from 'axios';
const styles ={
    Register: {
        padding: 150,
        fontFamily: "book",
        fontSize: " 15.5",

    }
};

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            username:''
        }
    }
    handleClick(event){
        console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password,this.state.username);
        //To be done:check for empty values before hitting submit
        const self = this;
        const payload={
            "first_name": this.state.first_name,
            "last_name":this.state.last_name,
            "email":this.state.email,
            "password":this.state.password,
            "username":this.state.username
        };
         axios.post('/register', payload)
             .then(function (response) {
                 console.log(response);
                 if(response.data.code === 200){
                      console.log("registration successfull");
                      var loginscreen=[];
                      loginscreen.push(<Login parentContext={this}/>);
                      var loginmessage = "Not Registered yet.Go to registration";
                     self.props.parentContext.setState({loginscreen:loginscreen,
                          loginmessage:loginmessage,
                          buttonLabel:"Register",
                        isLogin:true
                     });
                 }
             })
            .catch(function (error) {
                 console.log(error);
            });
    }

    render() {
        return (
            <div className="Register" style={styles.Register}>
                <MuiThemeProvider>
                    <div>
                        <h1>Register</h1>
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange = {(event,newValue) => this.setState({first_name:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange = {(event,newValue) => this.setState({last_name:newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            onChange = {(event,newValue) => this.setState({email:newValue})}
                        />
                        <br/>
                        <TextField
                            type = "password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
                        />
                        <br/>
                        <TextField
                            type ="username"
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange ={(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Register;