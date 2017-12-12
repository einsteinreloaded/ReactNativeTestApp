import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Spock extends Component {
  render() {
    let pic = {
      uri: 'http://www.startrek.com/uploads/assets/db_articles/6ee08d45f7a94d4c6fda9ee84833054a687ddf77.jpg'
    };
    return (
      <Image source={pic} style={{width: 193, height: 110}}/>
    );
  }
}