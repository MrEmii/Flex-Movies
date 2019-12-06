import React, { Component } from 'react';
import './App.css'
import Header from './global/header/Header';
import Footer from './global/footer/Footer';
class App extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                {this.props.children}
                <Footer></Footer>
            </div>
        );
    }
}

export default App;