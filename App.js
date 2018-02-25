import React, { Component } from "react";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import throttle from "lodash/throttle";
import { loadState, saveState } from "./src/storage";
import rootReducer from "./src/store/rootReducer";
import rootSaga from "./src/sagas/rootSaga";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./src/screens/Home";
import AddCityScreen from "./src/screens/AddCity";

const sagaMiddleware = createSagaMiddleware();
const prealoadedState = loadState();

const store = createStore(
  rootReducer,
  prealoadedState,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    AddCity: {
      screen: AddCityScreen
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#fff",
        height: 60,
        paddingTop: 10,
        paddingRight: 20,
        paddingBottom: 10,
        paddingLeft: 20
      }
    })
  }
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
