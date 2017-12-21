import React,{Component} from 'react';
import Sound from 'react-native-sound';
import {
    Platform,
    StyleSheet,
    Text,
    Alert,
    View
  } from 'react-native';
  import Spock from './images';

export default class ChristmasJingle extends Component {
    constructor(props){
        super(props);
        
        // Enable playback in silence mode
        Sound.setCategory('Playback',true);

        // Load the sound file 'whoosh.mp3' from the app bundle
        // See notes below about preloading sounds within initialization code below.
        let whoosh = new Sound("audio.mp3", Sound.MAIN_BUNDLE,(error) => {
        if (error) {
            console.log('failed to load the sound', error);
            return;
        }
        // Play the sound with an onEnd callback
        whoosh.play((success) => {
            if (success) {
                console.log('successfully finished playing');
                whoosh.release();
            } else {
                console.log('playback failed due to audio decoding errors');
                // reset the player to its uninitialized state (android only)
                // this is the only option to recover after an error occured and use the player again
            }

        });
        // loaded successfully
        // console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
        });

        
    }
  render() {
    return(  <View style={styles.container}>
                <Text style={styles.welcome}>
                    Merry Christmas!!! :) Nayana
                </Text>
                
                <Spock url={require('../images/santa.gif')}/> 
            </View>);
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    welcome: {
      fontSize: 30,
      textAlign: 'center',
      color: 'white',
      margin: 10,
    }
  });