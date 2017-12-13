import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
export default class PizzaEncryptionComponent extends React.Component {
    static navigationOptions = {
      title: 'Pizza Encryption',
    };
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
      return (
        <View style={styles.container}>
            <TextInput
                style={styles.TextInput}
                placeholder="Pizza Encryption"
                onChangeText={(text) => this.setState({text})}
                />
            <Text style={styles.pizzaText}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
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
      height: 40, 
      width:200
    },
    pizzaText: {
      padding: 10, 
      fontSize: 42
    }
  });
