import * as React from "react";
import { Component, StatelessComponent } from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { Card } from "react-native-elements";
import { searchLocation } from "../../src/actions/actions";
// import SearchLocationListDataItem from "./SearchLocationListDataItem";
import SearchLocationItem from "../SearchLocationItem";
import { SearchLocationListDataItem } from "./SearchLocationListDataItem";

class IProps {
    public items: SearchLocationListDataItem[];

    constructor(items: SearchLocationListDataItem[]) {
        this.items = items;
    }
}

const renderItem = (item: ListRenderItemInfo<SearchLocationListDataItem>) => {

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
