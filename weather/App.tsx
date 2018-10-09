/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { Component } from "react";
import { Alert, FlatList, Image, Platform, SafeAreaView, StyleSheet, Text, View  } from "react-native";
import { Button, Card, Icon, ListItem, SearchBar } from "react-native-elements";
import * as Rx from "rxjs";
import { map, throttle, throttleTime } from "rxjs/operators";
import { Location } from "weather-domain";
import { DefaultLocationRepository } from "weather-repositories";
import {SearchLocationList, SearchLocationListDataItem} from "weather-ui";

class Props {}

// tslint:disable-next-line:max-classes-per-file
interface IState {
     locations: SearchLocationListDataItem[];
}

// tslint:disable-next-line:max-classes-per-file
export default class App extends Component<Props, IState> {

    public state = {
        locations: [],
    };
    constructor(props: Props) {
        super(props);
    }
    public onChangeText = (text) => {
        const repository = new DefaultLocationRepository();
        repository.searchCity(text)
            .pipe(throttleTime(1000))
            .subscribe(
                (results: [Location]) => {
                    const dataItems = results.map((location: Location) => {
                        return new SearchLocationListDataItem(location.name);
                    });
                    this.setState({
                        locations: dataItems,
                    });
                },
            );
    }

    public onClear = () => {

        // alert("onClear");
        this.onChangeText("");
    }
    public onCancel = () => {

        // this.onChangeText("");
    }

    public render() {
        return (
            <SafeAreaView>
                <SearchBar
                    platform="ios"
                    onChangeText={this.onChangeText}
                    placeholder="Enter location"
                    onClear={this.onClear}
                    onCancel={this.onCancel}
                ></SearchBar>
                <SearchLocationList
                items={this.state.locations}
                />
            </SafeAreaView>
        );
    }
}
