import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  AsyncStorage,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class New1de3 extends Component {
      constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <ImageBackground
        source={require('./imagens/folhas3.jpg')}
        style={{ width: '100%', height: '105%',  paddingLeft: 6 }}>
        
      </ImageBackground>
    );
  }
}

//CONFIGURAÇÕES DE ESTILO (APARENCIA) ↓
const styles = StyleSheet.create({
  paragraph: {
    margin: 2,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Verdana',
  },

  bottonInicio: {
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: '#003300',
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});
