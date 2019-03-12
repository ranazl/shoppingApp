import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,DrawerActions} from 'react-navigation';
import Menu from '../component/Menu'
import List from '../component/List'
import Add from './Add'
import Profile from './Profile'
import Condition from '../component/Condition'
import{connect} from 'react-redux'
import {fetchProducts } from '../service/Action'

class Home extends Component {

    constructor(props){
        super(props);
        
        this.state={
            click:false,
            selectItem:'',
        }
    }

    searchFilter = text => {
        this.props.setSearch(text)
    }

    render() {
        
        return (
           
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.navBar}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>

                            <View>
                                <Image source={require('../assets/photo/3point.png')}/>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'flex-start'}}>
                                <Text style={styles.textHome}>خانه</Text>
                                <TouchableOpacity onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
                                     <Image source={require('../assets/photo/menu.png')}/>
                                 </TouchableOpacity>
                            </View>
                             </View>

                    </View>

                    <View style={styles.search}>
                        <Image source={require('../assets/photo/search.png')}/>
                        <TextInput placeholder={"چی دوست داری بخری؟"} 
                        style={{color:'black',height:45}}
                        onChangeText={this.searchFilter.bind(this)}
                        >
                        </TextInput>
                    </View>

                </View>

                <View style={styles.main}>
               

                    <FlatList 
                        data={List}
                        extraData={this.state.selectItem}
                        keyExtractor={(item)=> item.title}
                        renderItem={({index,item,type}) => 
                            <View>
                                <Condition index={index} item={item}/>
                            </View>
                       
                        }
                    />

                </View>
            </View>
          
        );
    }
}

const rootStack  = createBottomTabNavigator(
    {
      Home :{
          screen:Home,
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        height:120,
        backgroundColor:'#256a75',
        paddingBottom:15,
    },
    main:{
        marginBottom:120,
        backgroundColor:'white',
        // alignItems:'center'
    },
    search:{
        flexDirection:'row',
        width:350,
        height:45,
        backgroundColor:'white',
        borderRadius:8,
        alignItems: 'center',
        justifyContent:'space-between',
        alignSelf: 'center',
        padding:10,
        marginBottom:10,
    },
    navBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15,
    },
    textHome:{
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        marginRight:25,
    },
 
});

const AppContainer = createAppContainer(AppNavigator);
 class App extends Component {
    componentDidMount (){
      this.props.fetchProducts();
    }
    render() {
      return <AppContainer />;
    }
  }

export default connect( null,{fetchProducts})(App)