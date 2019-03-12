import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated,Image,Easing,TouchableOpacity,FlatList} from 'react-native';
import{connect} from 'react-redux'
import {setType,fetchProducts } from '../service/Action'
// import FlatListt from './FlatListt'

class Condition extends Component {

    componentDidMount(){
        this.props.fetchProducts() 
    }

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

    butonShow(index , type){
        this.setState({
            selectItem:index,
            click: !this.state.click
        })
        
        this.props.setType(type)
    }
    render() {
        return (
            <View style={styles.container}>
                        <TouchableOpacity onPress={this.butonShow.bind(this,this.props.index,this.props.item.type)} style={ styles.box}>
                            <Text style={styles.textMain}>{this.props.item.title}</Text>
                            <View>
                                
                                    <Image source={this.props.item.image}
                                    style={styles.flatImage}
                                    />
                       
                            </View>
                            </TouchableOpacity>

                        
                     
                        {
                            this.state.click && 
                            
                           
                            <FlatList
                            data={this.props.selectedItem}
                            keyExtractor={item => item.id}
                            renderItem={({item,index})=>
        
                            <View style={styles.boxGreen}>
                                <View style={{width:20,height:20,backgroundColor:'white'}}></View>
                                <Text style={styles.text}>{item.title}</Text>
                            </View>

                        }
                        />
              
                           
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
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        
        
    },
    boxOn:{
        width:350,
       height:300,
       backgroundColor:'#256a75',
       borderRadius:10,
       margin:15,
       alignItems:'center',
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
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        paddingVertical:5,
        alignSelf:'flex-end',
    },
    boxGreen:{
        flexDirection:'row',
        borderColor:'#123738',
        borderWidth:1,
        backgroundColor:'#174849',
        width:320,
        paddingVertical:5,
        justifyContent:'space-between',
        marginTop:10,
        alignItems: 'center',
        paddingHorizontal: 10,
        elevation:10
    }
});

const mapStateToProps = state => {
    return {
        selectedItem: state.selectedItem,
    };
  };
  

export default connect( mapStateToProps ,{setType,fetchProducts})(Condition)
