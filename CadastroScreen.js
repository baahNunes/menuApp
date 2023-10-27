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

export default class CadastroScreen extends Component {
    constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: '',
      email: '',
    };
  }

  _cadastro(usuario, senha, email) {
    try {
    AsyncStorage.setItem(
      'dados_usuario',
      JSON.stringify({
        usuario: usuario,
        senha: senha,
        email: email
        
      })
    );
    alert("CADASTRADO COM SUCESSO");
    console.log("usuario: "+usuario +" senha: "+senha +" email: "+email);
    } catch(error) {
      // Error retrieving data
    console.log(error.message);
    alert(error.message);
    }
    
  }
  render() {
    return (
      <ImageBackground
        source={require('./imagens/folhas3.jpg')}
        style={{ width: '100%', height: '105%', paddingLeft: 6 }}>
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
                style={{ width: '80%', height: '80%' }}
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
            <View
              style={{
                flex: 0.55,
                //backgroundColor:'blue',
              }}>
              <Text style={styles.fontPadrao}>Escolha seu usuário:</Text>
              <TextInput
                style={{
                  height: 30,
                  width: '100%',
                  borderColor: 'gray',
                  borderWidth: 0.7,
                }}
                onChangeText={text => this.setState({ usuario: text })}
              />
              <Text style={styles.fontPadrao}>Escolha sua senha:</Text>
              <TextInput
                secureTextEntry={true}
                style={{
                  height: 30,
                  width: '100%',
                  borderColor: 'gray',
                  borderWidth: 0.7,
                }}
                onChangeText={text => this.setState({ senha: text })}
              />
              <Text style={styles.fontPadrao}>Insira seu e-mail:</Text>
              <TextInput
                style={{
                  height: 30,
                  width: '100%',
                  borderColor: 'gray',
                  borderWidth: 0.7,
                }}
                onChangeText={text => this.setState({ email: text })}
              />
              <View style={{ paddingTop: 15, width: '100%', height: 60 }}>
                <TouchableOpacity style={styles.bottonInicio} onPress={() => {this._cadastro(this.state.usuario, this.state.senha, this.state.email), this.props.navigation.navigate('Login')}}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    CONFIRMAR
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

//CONFIGURAÇÕES DE ESTILO (APARENCIA) ↓
const styles = StyleSheet.create({
  bottonInicio: {
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: `#003300`,
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },

  fontPadrao: {
    fontSize: 18,
    color: 'black',
  },
});
