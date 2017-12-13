import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,  
  View
} from 'react-native';
import QRCode from 'react-native-qrcode';



export default class PizzaEncryptionComponent extends React.Component {
    static navigationOptions = {
      title: 'QR Encryption',
    };
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
      return (
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{alignItems:'center'}}>
            <TextInput
                style={styles.TextInput}
                placeholder="Pizza Encryption"
                onChangeText={(text) => this.setState({text})}
                />
            <QRCode
                value={this.state.text}
                size={200}
                bgColor='purple'
                fgColor='white'/>
        </ScrollView>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'steelblue',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    TextInput: {
      textAlign: 'center',
      height: 70, 
      width:200
    },
    pizzaText: {
      textAlign: 'center',
      padding: 10, 
      fontSize: 42
    }
  });
