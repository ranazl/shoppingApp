import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ActivityIndicator, Animated, Easing, spin} from 'react-native';
import { createSwitchNavigator,createAppContainer} from 'react-navigation';
import Home from './src/page/Home'

class App extends Component {

  constructor(props){
    super(props)
    this.spinValue = new Animated.Value (0)
  }

  componentDidMount(){
    setTimeout(()=> this.props.navigation.navigate('Home'),450)
    this.spin()
  }

  spin(){
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue:2,
        duration:4000,
        easing:Easing.Linear,
        useNativeDriver:true
      }
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate ({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
                <Animated.Image
                     source={require('./src/assets/photo/cart.png')}
                    style={{position:'absolute',transform: [{rotate: spin}]}}
                    />
                <View style={{flex: 1,alignSelf: 'flex-end',marginBottom:40,}}>
                    <ActivityIndicator color={'#198083'} size={'large'}/>
                </View>
      </View>
    );
  }
}

const RootSwitch = createSwitchNavigator(
  {
      App: App,
      Home: Home
  },
  {
    initialRouteName: 'Home'
  }
);


const AppContainer = createAppContainer(RootSwitch);

export default class Karim extends Component {
  render() {
      return <AppContainer/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
