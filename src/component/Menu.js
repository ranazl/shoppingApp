import React, { Component } from 'react';
import { View, Text, StyleSheet , Image, TouchableOpacity} from 'react-native';


class Menu extends Component {
 
  render() {
 
    return (
 
      <View style={styles.container}>
 
        <View>
            <Image source={require('../assets/photo/images.png')}
            style={styles.picture} />
        </View>

        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>شروع کن</Text>
            <View style={styles.line}></View>
            <TouchableOpacity>
                <Text style={styles.textList}>+ ساختن لیست جدید</Text>
            </TouchableOpacity>
        </View>
 
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-start',
        alignItems: 'center',
        backgroundColor: '#3ab1bb',
    },
    picture:{
        width:70,
        height:70,
        borderRadius: 100,
        marginTop:10,
        marginBottom:10,
    },
    text:{
        fontSize:16,
        color:'black',
        fontWeight: 'bold',
    },
    icon:{
        width:100,
        height:200
    },
    line:{
        height:2,
        width:150,
        backgroundColor:'white',
        marginTop:5
    },
    textList:{
        color:"black",
        fontWeight:'bold',
        fontSize:18,
        marginTop:25,

    }
});

export default Menu;