import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
t
class Cheese extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bread}>کره</Text>
                <Text style={styles.bread}>پنیر چدار</Text>
                <Text style={styles.bread}>پنیر خامه ای</Text>
                <Text style={styles.bread}>خامه</Text>
                <Text style={styles.bread}>تخم مرغ</Text>
                <Text style={styles.bread}>پتیر فتا</Text>
                <Text style={styles.bread}>شیر</Text>
                <Text style={styles.bread}>پنیر موزارلا</Text>
                <Text style={styles.bread}>شیر سویا</Text>
                <Text style={styles.bread}>دوغ</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bread:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
    }
});

export default Cheese;
