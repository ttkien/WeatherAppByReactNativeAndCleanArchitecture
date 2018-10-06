import React from 'react';
import { Component } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { DefaultLocationRepository } from 'weather-repositories';

type Props = {};
export default class SearchLocation extends Component<Props> {

    state = {
        locations: []
    }
    onChangeText = (text) => {

    var repository = new DefaultLocationRepository()
    repository.searchCity(text)
    .subscribe(
      results => {
        this.setState({
          locations: results
        })
      }
    )
    }

    _renderItem = ({item}) => (
        <Text
          title={item.name}
        ></Text>
      );

      
    render() {
        return(
            <SafeAreaView>
                <SearchBar
                    onChangeText={this.onChangeText}
                    placeholder='Enter location'
                ></SearchBar>
                <FlatList
                data={this.state.locations}
                renderItem={this._renderItem}>

                </FlatList>
            </SafeAreaView>
        )
    }
}