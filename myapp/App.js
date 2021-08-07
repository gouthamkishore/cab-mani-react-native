import "./app-services/imports";
import React, { Component } from "react";
import { StyleSheet } from 'react-native';
import view from "./App.view";
import style from "./App.style";
import store from "./app-services/store";
import storeSynchronize from 'redux-localstore';
const appstyles = StyleSheet.create(style);
const storeState = store();
storeSynchronize(storeState);

export class App extends Component {
    constructor(props) {
        super(props);
        //initialConstruct.bind(this)("App");
        this.state = {};
    }

    componentDidMount() {
        let self = this;
    }
    componentDidUpdate(prevProps, prevState) {
        let self = this;
        //this.watch({}, prevState, this.state);
        //this.watch({}, prevProps);
    }
    render() {
        //initialConstruct.bind(this)("App");
        return view.bind(this)(this.props, this.props.store, this.state, appstyles, "App", storeState);
    }
}

export default App;