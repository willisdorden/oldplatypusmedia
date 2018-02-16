import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidebar from './sidemenu/sidemenu';
import SidebarContent from './sidemenu/sidemenuContent';
import MaterialTitlePanel from './sidemenu/sidemenu material';
import Loginscreen  from './pages/Loginscreen';
import Register from './pages/Registerscreen';
import Home from './pages/home';
import About from './pages/about';


import './App.css';
injectTapEventPlugin();
const styles = {
    contentHeaderMenuLink: {
        textDecoration: 'none',
        color: 'white',
        padding: 8,
        fontFamily: "book",
        fontSize: " 20.5",
    },
    content: {
        // padding: '16px',
        backgroundColor: "white",
        height:"100%"
    },
    title:{
        textAlign: 'center',
        fontFamily: "book",
        fontSize: " 20.5",
    }
};


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            docked: false,
            open: false,
        };


        this.toggleOpen = this.toggleOpen.bind(this);
        this.onSetOpen = this.onSetOpen.bind(this);
        this.login = this.login.bind(this);
    }



    onSetOpen(open) {
        this.setState({open: open});
    }



    toggleOpen(ev) {
        this.setState({open: !this.state.open});

        if (ev) {
            ev.preventDefault();
        }
    }
    login(user) {
        console.log('user::', user);
        this.setState({
            user,
        })
    }
    componentWillMount(){
        var loginPage =[];
        loginPage.push(<Loginscreen parentContext={this}/>);
        this.setState({
            loginPage:loginPage
        })
    }

    render() {
        const sidebar = <SidebarContent />;


        const contentHeader = (
            <span>
        {!this.state.docked &&
        <a onClick={this.toggleOpen.bind(this)} href="/" style={styles.contentHeaderMenuLink}>=</a>}
                <span style={styles.title}>Menu</span>
      </span>);

        const sidebarProps = {
            sidebar: sidebar,
            docked: this.state.docked,
            open: this.state.open,
            onSetOpen: this.onSetOpen,
        };

        return (

            <div className="App">
                <Sidebar {...sidebarProps} >
                    <MaterialTitlePanel title={contentHeader}>
                        <div style={styles.content}>

                            <Route exact path ="/" component={Home} />
                            <Route   path ="/about" component={About} />
                            <Route   path ="/login" component={() => <Loginscreen onLogin={this.login} />} />
                            <Route   path ="/register" component={Register} />





                        </div>
                    </MaterialTitlePanel>
                </Sidebar>

            </div>







        );
    }
}

export default App;

