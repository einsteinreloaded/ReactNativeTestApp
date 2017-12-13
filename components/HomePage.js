import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Spock from './images';
import Blink from './blink';
import ButtonBasics from './button';

export default class HomePageComponent extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const { navigate } = this.props.navigation;
    
    let pic = {
        uri: 'http://www.startrek.com/uploads/assets/db_articles/6ee08d45f7a94d4c6fda9ee84833054a687ddf77.jpg'
      };
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome Sparkie!!
          </Text>
          <Text style={styles.instructions}>
            May the Code be with you!!!
          </Text>
         
          <Blink style={styles.instructions} text="This will blink forever!"/>
          <Spock url={pic}/>
          <ButtonBasics onPress={() => navigate('Encrypt')}/>
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