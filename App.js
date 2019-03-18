import React, {Component} from 'react';
import { createStore, applyMiddleware } from "redux";
import { View, Text, StyleSheet,FlatList } from 'react-native';
import thunk from "redux-thunk";
import {Provider}  from 'react-redux';
import Home from './src/page/Home'
import AppTemp from './src/component/homeContinue'
import AppNavigator from './src/component/homeContinue'
// import First from './src/page/First'
import reducer from './src/service/Reducer'


export const store = createStore(reducer,applyMiddleware(thunk));



export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
          <Provider store={store}>
            {/* <First/> */}
            <Home/>
          </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#F5FCFF',
  },

});

// export default App;

