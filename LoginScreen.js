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

export default class LoginScreen extends Component {
      constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      senha: '',
      email: '',
    };
  }

   _login(usuario, senha) {
    if (this.state.usuario != '') {
      console.log('usuario = ' + this.state.usuario);
      console.log('senha = ' + this.state.senha);
      AsyncStorage.getItem('dados_usuario').then(dados => {
        var userDados = JSON.parse(dados);
        if (userDados.usuario == usuario && userDados.senha == senha) {
          alert('usuario conectado');
          console.log('nome: ' + userDados.usuario);
          console.log('senha: ' + userDados.senha);
        } else {
          alert('realizar cadastro');
          console.log('state dados: ' + this.state.usuario +' ' + this.state.senha);
          console.log('dados = ' + dados);
          console.log(userDados.usuario);
          console.log(userDados.senha);
        }
      });
    }
  }
  render() {
    return (
      <ImageBackground
        source={require('./imagens/folhas3.jpg')}
        style={{ width: '100%', height: '105%',  paddingLeft: 6 }}>
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
              flex: 0.26,
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              //backgroundColor: 'blue'
            }}>
            <View
              style={{
                flex: 0.56,
                alignItems: 'center',
                justifyContent: 'center',
                //backgroundColor: 'red'
              }}>
              <Image
                source={require('./imagens/logo-eco.png')}
                style={{ width: '60%', height: '60%', }}
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
                flex: 0.7,
                alignItems:'center',
                //backgroundColor:'blue',
              }}>
              <Text style={styles.paragraph}>Informe seus dados</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 0.7,
                  borderRadius: 15,
                  borderColor: 'gray',
                  width: '83%',
                  //backgroundColor: 'blue',
                  }}>
                <Image
                  source={require('./imagens/icon-user.png')}
                  style={{ width: 50, height: 55 }}
                />
                <TextInput
                  placeholder="usuário"
                  placeholderTextColor="#003300"
                  textAlign="center"
                  style={{
                    height: 30,
                    width: '75%',
                    borderWidth: 0.0,
                    marginTop: 10,
                    opacity: 0.5,
                  }}
                  onChangeText={text => this.setState({ usuario: text })}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: 12,
                  marginTop: 12,
                  borderWidth: 0.7,
                  borderRadius: 15,
                  borderColor: 'gray',
                  width: '83%',
                  //backgroundColor: 'blue',
                  }}>
                <Image
                  source={require('./imagens/icon-lock1.png')}
                  style={{ width: 50, height: 40 }}
                />
                <TextInput
                  placeholder="senha"
                  secureTextEntry={true}
                  placeholderTextColor="#003300"
                  textAlign="center"
                  style={{
                    height: 30,
                    width: '75%',
                    borderWidth: 0.0,
                    marginTop: 10,
                    opacity: 0.5,
                  }}
                  onChangeText={text => this.setState({ senha: text })}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 12,
                  borderWidth: 0.7,
                  borderRadius: 15,
                  borderColor: 'gray',
                  width: '83%',
                  height: 58,
                  backgroundColor: '#003300',
                  
                }}>
                <TouchableOpacity style={styles.bottonInicio} onPress={() => {this._login(this.state.usuario, this.state.senha)}}>
                  <Text style={{ color: 'white', fontWeight: 'bold' }}>
                    ENTRAR
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
