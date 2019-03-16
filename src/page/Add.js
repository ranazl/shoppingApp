import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator,createSwitchNavigator} from 'react-navigation';
import { connect } from "react-redux";
import {setRemove , setItems , setID,setRemoveAction} from '../service/Action';


class Add extends Component {

constructor(props){
    super(props);
    this.state={
        text:''
    }
}

pressButton=() =>{
    this.props.setID()
   
    if(this.state.text.length > 0 ){
    this.props.setItems(this.state.text)
    this.setState({
      text: ''
  })
  }
}

  onTextChangeHandler =(input) =>{
    this.setState({
      text:input
    
    })
  }

Remover(index){
    this.props.setRemoveAction(index)
}

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        
                        <TextInput placeholder={"ثبت درخواست"} 
                            style={styles.placeholderText}
                            value={this.state.text}
                            onSubmitEditing={this.pressButton.bind(this)}
                            onChangeText={this.onTextChangeHandler.bind(this)}  
                        >
                        </TextInput>
                    </View> 
                </View>
                <View style={styles.main}>

                <FlatList
                    data={this.props.addArray}
                    keyExtractor={item => item.id}
                    renderItem={({ item , index }) => 
                    <TouchableOpacity onPress={this.Remover.bind(this, index)}> 
                        <Text style={styles.text}>{item.text}</Text> 
                        </TouchableOpacity>
                        }
        />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={this.pressButton.bind(this)}>
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
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
    },
    footer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
        marginBottom:20,
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
    },
    text:{
        color:'black',
        fontSize:18,
        fontWeight:'bold'
    }
});


  
const mapStateToProps = state => {
    return {
        addArray: state.addArray,
    };
  };

export default connect( mapStateToProps,{setRemove,setItems,setID,setRemoveAction})(Add)


  
