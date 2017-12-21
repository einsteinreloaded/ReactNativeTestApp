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



export default class PizzaEncryptionComponent extends Component {
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
                placeholder="Enter text here..."
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
    TextInput: {
      textAlign: 'center',
      height: 70, 
      width:200
    }
  });
