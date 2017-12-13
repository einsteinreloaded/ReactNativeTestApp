import React,{Component} from 'react';
import {StackNavigator} from 'react-navigation';
import { TabNavigator } from 'react-navigation';
import HomePageComponent from './components/HomePage'
import PizzaEncryptionComponent from './components/PizzaEncryption'
const SimpleApp = StackNavigator({
  Home: { screen: HomePageComponent },
  Encrypt:{screen: PizzaEncryptionComponent}
});
const MainScreenNavigator = TabNavigator({
  Home: { screen: HomePageComponent },
  Encrypt:{screen: PizzaEncryptionComponent}
});
export default class App extends Component {
  render() {
    return <MainScreenNavigator />;
  }
}
