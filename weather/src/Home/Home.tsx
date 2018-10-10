import { Component } from "react";
import React from "react";
import { SafeAreaView, Platform } from 'react-native';
import { SearchBar } from "react-native-elements";
import { connect } from "react-redux";
import { SearchLocationList, SearchLocationListDataItem } from "weather-ui";
import { searchLocation } from "../actions/actions";
import {  ISearchLocationState } from "../reducer/reducer";
// import reducer from "../reducer/reducer";

class Props {

    public items: SearchLocationListDataItem[];
    public error: Error | null;
    public isLoading: boolean;

    constructor(items: SearchLocationListDataItem[], error: Error | null = null, isLoading: boolean) {
        this.items = items;
        this.error = error;
        this.isLoading = isLoading;
    }
}

// tslint:disable-next-line:max-classes-per-file
export class Home extends Component<Props> {

    public onChangeText = (text: string) => {
        this.props.searchLocation(text);
    }

    public onCancel = () => {
        this.onChangeText("");
    }

    public render() {
        return (
            <SafeAreaView>
                <SearchBar
             platform="ios"
                    onChangeText={this.onChangeText}
                    onCancel={this.onCancel}
                    onClear={this.onCancel}
                    placeholder="Enter location"
                ></SearchBar>
                <SearchLocationList
                    items={this.props.items}
                />
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state: ISearchLocationState): Props => {
    // tslint:disable-next-line:no-shadowed-variable
    const searchLocation: ISearchLocationState = state;

    let locations: SearchLocationListDataItem[] = [];
    if (searchLocation && searchLocation.locations) {
        locations = searchLocation.locations.map((location) => {
            return new SearchLocationListDataItem(location.name);
        });
    }

    return {
        items: addKeysToItems(locations),
        error: searchLocation.error,
        isLoading: searchLocation.isLoading
    };
};

function addKeysToItems(params: SearchLocationListDataItem[]) {
    return params.map((item: SearchLocationListDataItem) => {
        return Object.assign(item, {key: item.title});
    });
}

const mapDispatchToProps = {
    searchLocation
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
