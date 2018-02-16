import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from './Login';
import Register from './Register';

const styles = {
    display: 'flex',
    justifyContent: "center",
    fontFamily: "book",
    fontSize: " 15.5",
};


class Loginscreen extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            loginscreen:[],
            loginmessage:'',
            buttonLabel:'Register',
            isLogin:true
        }
    }
    componentWillMount(){
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext} onLogin={this.props.onLogin} />);
        var loginmessage = "Not registered yet, Register Now";
        this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage
        })
    }
    handleClick(event){
        // console.log("event",event);
        var loginmessage;
        if(this.state.isLogin){
            var loginscreen=[];
            loginscreen.push(<Register parentContext={this}/>);
            loginmessage = "Already registered.Go to Login";
            this.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"Login",
                isLogin:false
            })
        }
        else{
            var loginscreen=[];
            loginscreen.push(<Login parentContext={this} onLogin={this.props.onLogin} />);
            loginmessage = "Not Registered yet.Go to registration";
            this.setState({
                loginscreen:loginscreen,
                loginmessage:loginmessage,
                buttonLabel:"Register",
                isLogin:true
            })
        }
    }
    render() {
        return (
            <div style={styles}>
            <div className="loginscreen">
                {this.state.loginscreen}
                <div>
                    {this.state.loginmessage}
                    <MuiThemeProvider>
                        <div>
                            <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Loginscreen;