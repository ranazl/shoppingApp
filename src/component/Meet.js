import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Meet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.bread}>باگت</Text>
                <Text style={styles.bread}>سنگک</Text>
                <Text style={styles.bread}>بربری</Text>
                <Text style={styles.bread}>تافتون</Text>
                <Text style={styles.bread}>کلوچه</Text>
                <Text style={styles.bread}>شیرینی نخودچی</Text>
                <Text style={styles.bread}>شیرینی رولتی</Text>
                <Text style={styles.bread}>پای</Text>
                <Text style={styles.bread}>پنکیک</Text>
                <Text style={styles.bread}>نان تست</Text>
                <Text style={styles.bread}>ویفر</Text>
                <Text style={styles.bread}>خمیر پیتزا</Text>
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

export default Meet;
