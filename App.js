import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  View
} from 'react-native';
import Spock from './components/images';
import Blink from './components/blink';
import ButtonBasics from './components/button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome Sparkie!!
          </Text>
          <Text style={styles.instructions}>
            May the Code be with you!!!
          </Text>
          <TextInput
            style={styles.TextInput}
            placeholder="Pizza Encryption"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={styles.pizzaText}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text>
          <Blink style={styles.instructions} text="This will blink forever!"/>
          <Spock/>
          <ButtonBasics/>
        </View>
      </ScrollView>
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
