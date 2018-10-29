import { Navigation, ScreenVisibilityListener } from "react-native-navigation";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import App from "../../App";
import { reducer } from "../reducer/reducer";
import { Settings } from "../Settings/Settings";

// register all screens of the app (including internal ones)
export function registerScreens(store, provider) {
  Navigation.registerComponent( "weather.SearchLocation", () => App, store, provider);
  Navigation.registerComponent( "weather.Settings", () => Settings, store, provider);
}

const onDidAppear = (screen, startTime, endTime, commandType) => {
  console.log(
    "screenVisibility",
    `Screen ${screen} displayed in ${endTime -
      startTime} milliseconds [${commandType}]`
  );
};

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: onDidAppear,
    willDisappear: ({ screen }) =>
      console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
  }).register();
}

export function configureStore() {
  return createStore(reducer, applyMiddleware(thunk));
}
