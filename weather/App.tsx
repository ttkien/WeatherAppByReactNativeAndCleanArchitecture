/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Component } from "react";
import { View } from "react-native";

import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { Drawer } from "./src/Drawer/Drawer";
import Home from "./src/Home/Home";
import { reducer } from "./src/reducer/reducer";

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            //  <Provider store={store}>
             <Home/>
            //  </Provider>
        );
    }
}
