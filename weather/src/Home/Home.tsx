import { Component } from "react";
import React from "react";
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, Text } from "react-native";
import { SearchBar } from "react-native-elements";
import { connect } from "react-redux";
import { SearchLocationList, SearchLocationListDataItem } from "weather-ui";
import { searchLocation } from "../actions/actions";
import { ISearchLocationState } from "../reducer/reducer";
// import reducer from "../reducer/reducer";

class Props {
  public items: SearchLocationListDataItem[];
  public error: Error | null;
  public isLoading: boolean;
  public text: string;
  constructor(
    items: SearchLocationListDataItem[],
    error: Error | null = null,
    isLoading: boolean,
    text: string = ""
  ) {
    this.items = items;
    this.error = error;
    this.isLoading = isLoading;
    this.text = text;
  }
}

// tslint:disable-next-line:max-classes-per-file
export class Home extends Component<Props> {
  public static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: ({ tintColor }) => (
      <Image source={require("./icon-home.png")} style={[{ tintColor }]} />
    )
  };

  public onChangeText = (text: string) => {
    this.props.searchLocation(text);
  }

  public onCancel = () => {
    this.onChangeText("");
  }
  public isError(): boolean {
    return this.props.error !== undefined && this.props.error !== null;
  }

  public render() {
    let errorView;
    if (this.isError() && this.props.error !== null) {
      errorView = <Text>{this.props.error.message}</Text>;
    } else {
      errorView = <Text></Text>;
    }

    return (
      <SafeAreaView style={{ flex: 1 }}>

          <SearchBar
            platform="ios"
            onChangeText={this.onChangeText}
            onCancel={this.onCancel}
            onClear={this.onCancel}
            placeholder="Enter location"
            value= {this.props.text}
          />
          {errorView}
          <KeyboardAvoidingView
          style = {{ flex: 1 }}
          behavior="padding"
          enabled
        >
          <SearchLocationList items={this.props.items} />
        </KeyboardAvoidingView>
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
    isLoading: searchLocation.isLoading,
    text: searchLocation.text
  };
};

function addKeysToItems(params: SearchLocationListDataItem[]) {
  return params.map((item: SearchLocationListDataItem) => {
    return Object.assign(item, { key: item.title });
  });
}

const mapDispatchToProps = {
  searchLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
