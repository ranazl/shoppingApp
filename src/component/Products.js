import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

class Products extends Component {
    render() {
        return (
            <View style={styles.container}>

            <View style={styles.main}>
                <TouchableOpacity>
                    <Image source={require('../assets/photo/fruits/apple.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/photo/fruits/apricot.png')} style={{marginHorizontal:40}}/>
                </TouchableOpacity> 
                <TouchableOpacity>   
                    <Image source={require('../assets/photo/fruits/bananas.png')}/>
                </TouchableOpacity>
                </View>
                <View style={styles.main}>
                <TouchableOpacity>
                    <Image source={require('../assets/photo/fruits/basil.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/photo/fruits/cabbage.png')} style={{marginHorizontal:40}}/>
                </TouchableOpacity> 
                <TouchableOpacity>   
                    <Image source={require('../assets/photo/fruits/celery.png')}/>
                </TouchableOpacity>
                </View>
                <View style={styles.main}>
                <TouchableOpacity>
                    <Image source={require('../assets/photo/fruits/cucumber.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/photo/fruits/eggplant.png')} style={{marginHorizontal:40}}/>
                </TouchableOpacity> 
                <TouchableOpacity>   
                    <Image source={require('../assets/photo/fruits/garlic.png')}/>
                </TouchableOpacity>
                </View>
                <View style={styles.main}>
                <TouchableOpacity>
                    <Image source={require('../assets/photo/fruits/lettuce.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/photo/fruits/onion.png')} style={{marginHorizontal:40}}/>
                </TouchableOpacity> 
                <TouchableOpacity>   
                    <Image source={require('../assets/photo/fruits/orange.png')}/>
                </TouchableOpacity>
                </View>
               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
        marginTop:20,
        // alignItems: 'center',
        // backgroundColor:'#256a75',
    },
    main:{
        flexDirection:'row',
        marginVertical:15,
    }

});

export default Products;
