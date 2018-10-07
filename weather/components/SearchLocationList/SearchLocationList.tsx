import * as React from "react";
import { Component, StatelessComponent } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { Card } from "react-native-elements";
import SearchLocationItem from "../SearchLocationItem";
import { SearchLocationListDataItem } from "./SearchLocationListDataItem";
// import SearchLocationListDataItem from "./SearchLocationListDataItem";

class IProps {
    public items: SearchLocationListDataItem[];

    constructor(items: SearchLocationListDataItem[]) {
        this.items = items;
    }
}

const renderItem = (item: ListRenderItemInfo<SearchLocationListDataItem>) => {

    console.log(item)
    return (
        <SearchLocationItem name={item.item.title}
        />
    );
};

const SearchLocationList = (props: IProps) => {
    return(
        <FlatList<SearchLocationListDataItem>
            data={props.items}
            renderItem={renderItem}
            />
    );
};

export {SearchLocationList, SearchLocationListDataItem};

// tslint:disable-next-line:max-classes-per-file
// export default class SearchLocationList implements StatelessComponent<IProps> {
//     propTypes?:IProps
//     contextTypes?: import("/Volumes/Data/labs/WeatherAppByReactNativeAndCleanArchitecture/weather-ui/node_modules/@types/prop-types/index").ValidationMap<any> | undefined;
//     defaultProps?: Partial<IProps> | undefined;
//     displayName?: string | undefined;
 
//     constructor(props: IProps) {
//         super(props);
//     }

//     protected render() {
//         return (
//             <FlatList<SearchLocationListDataItem>
//             data={this.props.items}
//             renderItem={this.renderItem}
//             />
//         );
//     }

//     private renderItem = (item: ListRenderItemInfo<SearchLocationListDataItem>) => {

//         return (
//             <SearchLocationItem name={item.item.title}
//             />
//         );
//     }
// }
