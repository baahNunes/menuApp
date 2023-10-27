import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import CadastroScreen from './CadastroScreen.js';
import LoginScreen from './LoginScreen.js';
import New1 from './New1.js';
import New2 from './New2.js';
import New3 from './New3.js';


//TELA DE INICIO ↓
export class App extends Component {
  render() {
    return (
      <ImageBackground
        source={require('./imagens/folhas3.jpg')}
        style={{ width: '100%', height: '105%',   paddingLeft: 6 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.2,
              width: '100%',
              height: '100%',
              //backgroundColor:'black'
            }}
          />
          <View
            style={{
              flex: 0.25,
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              //backgroundColor: 'blue'
            }}>
            <View
              style={{
                //backgroundColor: 'red',
                flex: 0.55,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./imagens/logo-eco.png')}
                style={{ width: '80%', height: '80%', resizeMode:'contain' }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 0.55,
              justifyContent: 'center',
              flexDirection: 'row',
              paddingTop: 15,
              //alignItems: `center`,
              //backgroundColor:'yellow'
            }}>
            <View style={{ /*backgroundColor:'blue', */ flex: 0.55 }}>
              <TouchableOpacity
                style={styles.bottonInicio}
                onPress={() => {
                  this.props.navigation.navigate('New1');
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  MENU (BARBARA)
                </Text>
              </TouchableOpacity>
              <Text> </Text>
              <TouchableOpacity
                style={styles.bottonInicio}
                onPress={() => {
                  this.props.navigation.navigate('New2');
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  ARIEL
                </Text>
              </TouchableOpacity>
              <Text> </Text>
              <TouchableOpacity
                style={styles.bottonInicio}
                onPress={() => {
                  this.props.navigation.navigate('New3');
                }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>
                  KELLSON
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

//CONFIGURANDO NAVEGAÇÃO ENTRE TELAS ↓
export default createStackNavigator(
  {
    Home: App,
    Login: LoginScreen,
    Cadastro: CadastroScreen,
    New1: New1,
    New2: New2,
    New3: New3,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  }
);

//CONFIGURAÇÕES DE ESTILO (APARENCIA) ↓
const styles = StyleSheet.create({
  paragraph: {
    margin: 2,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Verdana',
  },

  bottonInicio: {
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `#003300`,
    width: '100%',
    height: `15%`,
    borderRadius: 6,
  },
});
