import React from 'react';
import { Text, View } from 'react-native';
import { Component } from 'react';
import { Card } from 'react-native-elements';


type Props = {
    name: string
};

export default class SearchLocationItem extends Component<Props> {

    render() {
        return (
            <Card 
            title={this.props.name}></Card>
        );
    };
}

