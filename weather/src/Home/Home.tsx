import { Component } from "react";
import React from "react";
import { SafeAreaView } from "react-native";
import { SearchBar } from "react-native-elements";
import { connect } from "react-redux";
import { SearchLocationList, SearchLocationListDataItem } from "weather-ui";
import { searchLocation } from "../actions/actions";
import {  ISearchLocationState } from "../reducer/reducer";
// import reducer from "../reducer/reducer";

export class Home extends Component {

    public onChangeText = (text: string) => {
        this.props.searchLocation(text);
    }

    public render() {
        return (
            <SafeAreaView>
                <SearchBar
                    onChangeText={this.onChangeText}
                    placeholder="Enter location"
                ></SearchBar>
                <SearchLocationList
                    items={this.props.items}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state: ISearchLocationState) => {
    // tslint:disable-next-line:no-shadowed-variable
    const searchLocation: ISearchLocationState = state;

    let locations: SearchLocationListDataItem[] = [];
    if (searchLocation && searchLocation.locations) {
        locations = searchLocation.locations.map((location) => {
            return new SearchLocationListDataItem(location.name);
        });
    }

    return {
        items: locations,
        error: searchLocation.error,
        isLoading: searchLocation.isLoading
    };
};

const mapDispatchToProps = {
    searchLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
