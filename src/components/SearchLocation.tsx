import { View, Text, ScrollView } from 'react-native';
import { Component } from 'react';
import { SearchBar } from 'react-native-elements'
import { LocationRepository } from '../../core/domain/repositories-interfaces/LocationRepository'
import { Inject, Symbols} from '../ioc'
import { Observable} from 'rxjs';
import React from 'react';

export class SearchLocation extends Component {

    @Inject(Symbols.DefaultLocationRepository)
    locationRepository: LocationRepository;

    onChangeText= (text: string) => {
        // this.locationRepository.searchCity(text)
        // .subscribe(
        //     (locations) => {
        //         console.log(locations)
        //     },
        //     (error) => {
        //         console.log(error)
        //     },
        //     () => {

        //     }
        // )


    }

    onClear= (sender: string) => {

    }

    render() {
        return (
            <View>
                <SearchBar
  onChangeText={this.onChangeText}
  placeholder='Type Here...' />
  <ScrollView>

  </ScrollView>
            </View>
        )
    }
}