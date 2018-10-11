/** @format */

import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {
  configureStore,
  registerScreens,
  registerScreenVisibilityListener
} from "./screens";

const store = configureStore();
registerScreens(store, Provider);
registerScreenVisibilityListener();

const navigatorStyle = {
  statusBarColor: "black",
  statusBarTextColorScheme: "light",
  navigationBarColor: "black",
  navBarBackgroundColor: "#0a0a0a",
  navBarTextColor: "white",
  navBarButtonColor: "white",
  tabBarButtonColor: "red",
  tabBarSelectedButtonColor: "red",
  tabBarBackgroundColor: "white",
  topBarElevationShadowEnabled: false,
  navBarHideOnScroll: true,
  tabBarHidden: true,
  drawUnderTabBar: true
};

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: "Search",
      screen: "weather.SearchLocation", // this is a registered name for a screen
      title: "Search Location",
      icon: require("../Home/icon-home.png") // for icon button, provide the local image asset name
    },
    {
      label: "Settings",
      screen: "weather.Settings", // this is a registered name for a screen
      title: "Settings",
      icon: require("../Home/icon-home.png") // for icon button, provide the local image asset name
    }
  ],
  tabsStyle: {
    tabBarButtonColor: "#ffff00" // change the color of the tab icons and text (also unselected)
  }
});
