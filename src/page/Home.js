import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,DrawerActions} from 'react-navigation';
// import Modal from './Modal'
import List from '../component/List'

class Home extends Component {
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
                        <Text>چی دوست داری بخری؟</Text>
                    </View>
                </View>

                <View style={styles.main}>

                    <FlatList 
                        data={List}
                        keyExtractor={item => item.title}
                        renderItem={({item}) => 
                        <View style={styles.box}>
                            <Text style={styles.textMain}>{item.title}</Text>
                            <Image source={item.image}
                            style={styles.flatImage}
                            />
                        </View>
                        }
                    />

                </View>
            </View>
          
        );
    }
}

const AppNavigator  = createDrawerNavigator(
    {
      خانه : Home,
    },
    {
      drawerWidth : 200,
      drawerPosition:'right'
    },
    // {
    //   mode : 'modal'
    // },
    {
      initialRouteName: 'Home',
    }
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        flex:1,
        backgroundColor:'#256a75',
    },
    main:{
        flex:4,
        backgroundColor:'white',
        alignItems:'center'
    },
    search:{
        flexDirection:'row',
        width:350,
        height:45,
        backgroundColor:'white',
        borderRadius:5,
        alignItems: 'center',
        justifyContent:'space-between',
        alignSelf: 'center',
        marginTop:12,
        padding:10
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
    box:{
        width:350,
        height:60,
        backgroundColor:'#256a75',
        borderRadius:10,
        margin:15,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10,
    },
    textMain:{
        color:'white',
        fontSize:18
    },
    flatImage:{
        width:15,
        height:15
    }
});

export default createAppContainer(AppNavigator );
