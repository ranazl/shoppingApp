import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';

class FlatListt extends Component {

    constructor(props){
        super(props)
        this.state={
          text : '',
      }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.product}
                    keyExtractor={item => item.id}
                    renderItem={({item,index})=>
                        <View></View>
                }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const mapStateToProps = state => {
    return {
      product: state.items,
      contactName:state.name,
    };
  };
  
  export default connect(mapStateToProps,{setDelete,setItems,setID,setContact})(FlatListt);
