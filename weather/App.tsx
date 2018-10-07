/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, SafeAreaView, Alert, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements'
import { Location } from 'weather-domain'
import { DefaultLocationRepository } from 'weather-repositories'
import * as Rx from 'rxjs'
import { map, throttle, throttleTime } from 'rxjs/operators'
import {SearchLocationList, SearchLocationListDataItem} from 'weather-ui';

type Props = {};
type State = {
    locations: SearchLocationListDataItem[]
};
export default class App extends Component<Props,State> {

    constructor(props: Props) {
        super(props);
    }

    state = {
        locations: []
    }
    onChangeText = (text) => {

        var repository = new DefaultLocationRepository()
        repository.searchCity(text)
            .pipe(throttleTime(1000))
            .subscribe(
                (results:[Location]) => {
                    console.log(results)
                    const dataItems = results.map((location:Location) => {
                        return new SearchLocationListDataItem(location.name)
                    })
                    this.setState({
                        locations: dataItems
                    })
                }
            )
    }

    render() {
        return (
            <SafeAreaView>
                <SearchBar
                    onChangeText={this.onChangeText}
                    placeholder='Enter location'
                ></SearchBar>
                <SearchLocationList
                items={this.state.locations}
                />
            </SafeAreaView>
        )
    }
}