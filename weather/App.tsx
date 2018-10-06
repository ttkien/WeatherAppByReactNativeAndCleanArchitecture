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
import {SearchLocationItem} from 'weather-ui'

type Props = {};
export default class App extends Component<Props> {

    state = {
        locations: [new Location("test", "test")]
    }
    onChangeText = (text) => {

        var repository = new DefaultLocationRepository()
        repository.searchCity(text)
            .pipe(throttleTime(1000))
            .subscribe(
                results => {
                    console.log(results)
                    this.setState({
                        locations: results
                    })
                }
            )
    }

    _renderItem = ({ item }) => (
        <SearchLocationItem
            name={item.name + "aaa"}
        ></SearchLocationItem>
    )

    render() {
        return (
            <SafeAreaView>
                <SearchBar
                    onChangeText={this.onChangeText}
                    placeholder='Enter location'
                ></SearchBar>
                <FlatList
                    data={this.state.locations}
                    renderItem={this._renderItem}

                >

                </FlatList>
            </SafeAreaView>
        )
    }
}