/** @format */

import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import App from './App';
import {name as appName} from './app.json';
import { Home } from "./src/Home/Home";
import { reducer } from "./src/reducer/reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import {registerScreens, registerScreenVisibilityListener} from "./screens";


const store = configureStore();
registerScreens(store, Provider);
registerScreenVisibilityListener();

const navigatorStyle = {
	statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#0a0a0a',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};

// start the app
Navigation.startTabBasedApp({
	tabs: [
	  {
		label: 'Search',
		screen: 'example.FirstTabScreen', // this is a registered name for a screen
		title: 'Screen One',
        icon: require('./src/Home/icon-home.png'), // for icon button, provide the local image asset name

    },
    {
      label: 'Settings',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      title: 'Screen One',
          icon: require('./src/Home/icon-home.png'), // for icon button, provide the local image asset name
  
      }
	],
	tabsStyle: {
		tabBarButtonColor: '#ffff00', // change the color of the tab icons and text (also unselected)

	}
  });se