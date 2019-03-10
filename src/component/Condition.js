import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated,Image,Easing,TouchableOpacity} from 'react-native';

class Condition extends Component {
    constructor(props){
        super(props);
        
        this.state={
            click:false,
            selectItem:0,
            animValueOff:new Animated.Value(50),
            animValueOn:new Animated.Value(250)
        }
    }
    
      animOff(){
        // this.state.animValueOff.setValue(100)
        Animated.timing(
          this.state.animValueOff,
          {
            toValue:250,
            duration:4000,
            // easing:Easing.Linear,
            useNativeDriver:true
          }
        ).start(() => this.animOff())
      }

      animOn(){
        // this.state.animValueOn.setValue(100)
        Animated.timing(
          this.state.animValueOn,
          {
            toValue:50,
            duration:4000,
            // easing:Easing.Linear,
            useNativeDriver:true
          }
        ).start(() => this.animOn())
      }

    butonShow(index){
        this.setState({
            selectItem:index,
            click: !this.state.click
        })
    }
    render() {
        return (
            <View style={styles.container}>
                        <Animated.View 
                        style={!this.state.click
                         ? 
                        [styles.box,{height:this.state.animValueOff}]
                         : 
                        [styles.boxOn,{height:this.state.animValueOn}]
                        }>
                            <Text style={styles.textMain}>{this.props.item.title}</Text>
                            <View>
                                <TouchableOpacity onPress={this.butonShow.bind(this,this.props.index)}>
                                <Image source={this.props.item.image}
                                style={styles.flatImage}
                                />
                                </TouchableOpacity>
                        </View>

                        </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box:{
        width:350,
        backgroundColor:'#256a75',
        borderRadius:10,
        margin:15,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10,
        elevation:15
    },
    boxOn:{
        width:350,
        // height:250,
        backgroundColor:'#256a75',
        borderRadius:10,
        margin:15,
        paddingTop:15,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10,
        elevation:15
    },
    textMain:{
        color:'white',
        fontSize:18
    },
    flatImage:{
        width:15,
        height:15
    },
});

export default Condition;
