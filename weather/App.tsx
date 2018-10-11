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
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Home from "./src/Home/Home";
// import rootReducer from "./src/reducer";
import { reducer } from "./src/reducer/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
             <Provider store={store}>
             <Home></Home>
             </Provider>
        );
    }
}
