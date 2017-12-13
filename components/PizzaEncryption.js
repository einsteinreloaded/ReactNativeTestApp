import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,  
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
        <ScrollView contentContainerStyle={{alignItems:'center'}}>
            <TextInput
                style={styles.TextInput}
                placeholder="Pizza Encryption"
                onChangeText={(text) => this.setState({text})}
                />
            <Text style={styles.pizzaText}>
                {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
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
