/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image, SafeAreaView, Alert } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Location } from 'weather-domain'
import { DefaultLocationRepository } from 'weather-repositories'

const location = new Location("kien", "ho chi minh")

const users = [
  {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
]

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

        <Card title="aaa" >
          {
            users.map((u, i) => {
              return (
                <View key={i}>
                  <Image
                    resizeMode="cover"
                    source={{ uri: u.avatar }}
                  />
                  <Text>{u.name}</Text>
                </View>
              );
            })
          }
        </Card>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
