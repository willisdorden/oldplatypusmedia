import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component } from 'react';
import axios from 'axios';
import {
    Redirect,
} from 'react-router-dom'




class Login extends Component {
    constructor(props){
        super(props);
        console.log('login::', props);
        this.state={
            username:'',
            password:'',
            redirect:'',
            user:""
        }
    }

        handleClick(event){
            const self = this;
            const payload = {
                "username": this.state.username,
                "password": this.state.password
            };



            axios.post('/login', payload)
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        console.log("Login successfull");

                        this.setState({redirect: true});
                        // self.setState({ user: response.data.user.id});
                        this.props.onLogin(response.data.user.id);

                    }
                    else if (response.status === 404) {
                        console.log("Username password do not match");
                        alert("username or password is incorrect")
                    }
                    else {
                        console.log("Username does not exists");
                        alert("Username does not exist");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }




    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/dashboard'/>;
        }
        return (

            <div>
                <MuiThemeProvider>
                    <div>
                        <h1>Login</h1>
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange = {(event,newValue) => this.setState({username:newValue})}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange = {(event,newValue) => this.setState({password:newValue})}
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
export default Login;