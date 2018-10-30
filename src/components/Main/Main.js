import React, { Component } from 'react';
import './Main.scss';
import Header from '../Header/Header';
import ListItem from '../ListItem/ListItem';

class Main extends Component {
    render() {
        return (
            <div className="main-component">
                <Header></Header>
                <ListItem></ListItem>
            </div>
        )
    }
}

export default Main;