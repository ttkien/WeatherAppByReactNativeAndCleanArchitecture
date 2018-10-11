/** @format */

import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import App from './App';
import {name as appName} from './app.json';
import { Home } from "./src/Home/Home";
import { reducer } from "./src/reducer/reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';

// register all screens of the app (including internal ones)
export function registerScreens(store, provider) {
    Navigation.registerComponent('example.FirstTabScreen', () => App, store, provider);
  }

  export function registerScreenVisibilityListener() {
    new ScreenVisibilityListener({
      willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
      didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
      willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
      didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
    }).register();
  }

// registerScreenVisibilityListener();

    // let middleware = [thunk];
	// middleware = [...middleware];
export default function configureStore(initialState) {
	return createStore(
		reducer,
		initialState,
		applyMiddleware(thunk)
	);
}

const store = configureStore();
registerScreens(store, Provider); // this is where you register all of your app's screens


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
		label: 'One',
		screen: 'example.FirstTabScreen', // this is a registered name for a screen
		title: 'Screen One',
        icon: require('./src/Home/icon-home.png'), // for icon button, provide the local image asset name

	  }
	],
	tabsStyle: {
		tabBarButtonColor: '#ffff00', // change the color of the tab icons and text (also unselected)

	}
  });