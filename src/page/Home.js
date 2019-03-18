import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,DrawerActions} from 'react-navigation';
import Menu from '../component/Menu'
import Add from './Add'
import Profile from './Profile'
import{connect} from 'react-redux'
import { fetchProducts,fetchList } from "../service/Action";
import HomeTemp from '../component/homeContinue'

const rootStack  = createBottomTabNavigator(
    {
      Home :{
          screen:HomeTemp,
          navigationOptions:{
            tabBarLabel:"خانه",
            tabBarIcon: ({tintColor: color}) => (
                <Icon name="home" size={23} color={'white'}/>
            )
          }
      },
        Add:{
            screen:Add,
            navigationOptions:{
                tabBarLabel:"اضافه",
                tabBarIcon:({tintColor: color}) => (
                    <Icon name="plus" size={23} color={'white'}/>
                )
            }
        },
        Profile:{
            screen:Profile,
            navigationOptions:{
                tabBarLabel:"پروفایل",
                tabBarIcon:({tintColor: color}) => (
                    <Icon name="user" size={23} color={'white'}/>
                )
            }
        }
    },

   { 
       tabBarOptions: {
                    style:{
                        backgroundColor: '#3ab1bb',
                    },
                    labelStyle :{
                        color:'white',
                        fontSize:18
                    }
                    
                  }
                },
    
    {
      initialRouteName: 'Home',
    }
  );

  const AppNavigator = createDrawerNavigator(
      {Home:rootStack},
      {
    
          drawerBackgroundColor:'#3ab1bb',
          drawerWidth : 200,
          drawerPosition:'right',
          contentComponent:Menu,
          
        },
  )




const AppContainer = createAppContainer(AppNavigator);
 class App extends Component {
    componentDidMount (){
        
        this.props.fetchList()
    }
    render() {
      return <AppContainer />;
    }
  }
 
  
  export default connect( null , {fetchProducts,fetchList})(App);