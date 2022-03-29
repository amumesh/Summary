import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './Components/Greet';
// import Student from './Components/ClassCom';
// import Hello from './Components/HelloX';
import DropDown from './Components/DropDown';
import Frame from './Components/Frame';
import TextBox from './Components/TextBox';


class App extends Component {
    render() {
        return ( < div className = 'App' >
            <
            h2 > Collections Of Books < /h2>        <
            DropDown / >
            <
            Frame / >
            <
            TextBox / >
            <
            div >
            <
            button type = "submit"
            id = 'btnSave' > Submit < /button> <
            button type = "reset"
            id = 'btnCancel' > Cancel < /button>  < /
            div > <
            /div>
        );
    }
}

export default App;