import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Spock extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Image source={this.props.url} style={{width: 193, height: 110}}/>
    );
  }
}