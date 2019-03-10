import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated,Image,Easing,TouchableOpacity} from 'react-native';
import Products from './Products'

class Condition extends Component {
    constructor(props){
        super(props);
        
        this.state={
            click:false,
            selectItem:0,
        //     animValueOff:new Animated.Value(350),
        //     animValueOn:new Animated.Value(50)
        }
    }
    
    //   animOff(){
    //     this.state.animValueOff.setValue(0)
    //     Animated.timing(
    //       this.state.animValueOff,
    //       {
    //         toValue:50,
    //         duration:2000,
    //         // easing:Easing.Linear,
    //         // useNativeDriver:true
    //       }
    //     ).start()
    //   }

    //   animOn(){
    //     // this.state.animValueOn.setValue(0)
    //     Animated.timing(
    //       this.state.animValueOn,
    //       {
    //         toValue:350,
    //         duration:2000,
    //         // easing:Easing.Linear,
    //         // useNativeDriver:true
    //       }
    //     ).start()
    //   }

    butonShow(index){
        this.setState({
            selectItem:index,
            click: !this.state.click
        })
//    this.animOn(),this.animOff()
    }
    render() {
        return (
            <View style={styles.container}>
                        <View style={ styles.box}>
                            <Text style={styles.textMain}>{this.props.item.title}</Text>
                            <View>
                                <TouchableOpacity onPress={this.butonShow.bind(this,this.props.index)}>
                                    <Image source={this.props.item.image}
                                    style={styles.flatImage}
                                    />
                                </TouchableOpacity>
                       
                            </View>
                        

                        </View>
                        {
                            this.state.click && 
                            
                           
                                 <Products/>
              
                           
                        }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#256a75',
        borderRadius:10,
        elevation:15,
        margin:15,
        paddingHorizontal:10,
        paddingVertical:15,
        alignItems: 'center',
    },
    box:{
       flex:1,
        //  width:350,
        // height:50,
        
        
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        
        
    },
    boxOn:{
       // flex:1,
        width:350,
       height:300,
       backgroundColor:'#256a75',
       borderRadius:10,
       margin:15,
       alignItems:'center',
    //    justifyContent:'space-between',
       flexDirection:'row',
       paddingHorizontal:10,
       elevation:15
    },
    // boxOn1:{
    //     width:350,
    //     height:300,
    //     backgroundColor:'#256a75',
    //     borderRadius:10,
    //     margin:15,
    //     paddingTop:15,
    //     // justifyContent:'space-between',
    //     flexDirection:'row',
    //     paddingHorizontal:10,
    //     elevation:15,
    //     alignItems:'center',justifyContent:'center'
    // },
    textMain:{
        color:'white',
        fontSize:18,
        flex: 1,
        textAlign: 'left'
    },
    flatImage:{
        width:15,
        height:15,
        position:'relative',
        paddingRight:20,
    },
});

export default Condition;
