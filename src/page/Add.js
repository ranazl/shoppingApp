import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';

class Add extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        
                        <TextInput placeholder={"ثبت درخواست"} 
                        style={styles.placeholderText}
                        // onChangeText={this.searchFilter.bind(this)}
                        >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.main}></View>
                <View style={styles.footer}>
                    <TouchableOpacity>
                        <Image source={require('../assets/photo/plus.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header:{
        height:100,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#3ab1bb'
    },
    main:{
        flex:3,
        backgroundColor:'white'
    },
    footer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        marginBottom:10,
    },
    search:{
        flexDirection:'row',
        width:360,
        height:55,
        backgroundColor:'white',
        borderRadius:8,
        alignItems: 'center',
        justifyContent:'center',
        alignSelf: 'center',
        padding:10,
        marginBottom:10,
        borderWidth:1,
        borderColor:'#3fa3a6',
        elevation:15
    },
    placeholderText:{
        color:'black',
        height:45,
        fontSize:18
    }
});

export default Add;
