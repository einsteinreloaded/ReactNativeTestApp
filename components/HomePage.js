import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Alert,
  View
} from 'react-native';
import Spock from './images';
import Blink from './blink';
import ButtonBasics from './button';
import PushNotification from 'react-native-push-notification';
import ChristmasJingle from './ChristmasJingle';

export default class HomePageComponent extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  
  constructor(props) {
    super(props);
    PushNotification.configure({
      
          // (optional) Called when Token is generated (iOS and Android)
          onRegister: function(token) {
              console.log( 'TOKEN:', token );
          },
      
          // (required) Called when a remote or local notification is opened or received
          onNotification: function(notification) {
              console.log( 'NOTIFICATION:', notification );
      
              // process the notification
              
              // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
              notification.finish(PushNotificationIOS.FetchResult.NoData);
          },
      
          // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
          // senderID: "YOUR GCM SENDER ID",
      
          // IOS ONLY (optional): default: all - Permissions to register.
          permissions: {
              alert: true,
              badge: true,
              sound: true
          },
      
          // Should the initial notification be popped automatically
          // default: true
          popInitialNotification: true,
      
          /**
            * (optional) default: true
            * - Specified if permissions (ios) and token (android and ios) will requested or not,
            * - if not, you must call PushNotificationsHandler.requestPermissions() later
            */
          requestPermissions: true,
      });
  PushNotification.localNotificationSchedule({
      message: "Please Open The App!!!", // (required)
      date: new Date(2017,12,26) // on christmas
    });
    
  }
  
  render() {
    const { navigate } = this.props.navigation;
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let date = dateObj.getUTCDate();
    if(month==12 && date==25){ 
      return(
           <ChristmasJingle/>
      );
    }
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome Sparkie!!
          </Text>
          <Text style={styles.instructions}>
            May the Code be with you!!!
          </Text>
         
          <Blink style={styles.instructions} text="This will blink forever!"/>
          <Spock url={require('../images/spock.jpg')}/>
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