import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

  }
  componentDidMount(){
    // Toggle the state every second
    setInterval(() => {
        this.setState(previousState => {
            return { showText: !previousState.showText };
        });
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={this.props.style}>{display}</Text>
    );
  }
}
