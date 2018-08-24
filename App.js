/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

import Topo from './src/components/topo';
import Palco from './src/components/palco';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {escolhaUsuario : "", escolhaComputador : "", resultado : ""}
  }

  jokenpo(opcaoEscolhida){

    var jogadaComputador = '';
    sorteioComputer = Math.floor(Math.random() * 3)
    switch (sorteioComputer) {
      case 0:
        jogadaComputador = 'pedra';
        break;
      case 1:
        jogadaComputador = 'papel';
        break;
      case 2:
        jogadaComputador = 'tesoura';
        break;
    }


    var resultado = '';
    if (opcaoEscolhida == 'pedra') {
      if (jogadaComputador == 'pedra') {
        resultado = 'empate';
      }
      if (jogadaComputador == 'papel') {
        resultado = 'perdeu';
      }
      if (jogadaComputador == 'tesoura') {
        resultado = 'ganhou';
      }
    }
    if (opcaoEscolhida == 'papel') {
      if (jogadaComputador == 'pedra') {
        resultado = 'ganhou';
      }
      if (jogadaComputador == 'papel') {
        resultado = 'empate';
      }
      if (jogadaComputador == 'tesoura') {
        resultado = 'perdeu';
      }
    }
    if (opcaoEscolhida == 'tesoura') {
      if (jogadaComputador == 'pedra') {
        resultado = 'perdeu';
      }
      if (jogadaComputador == 'papel') {
        resultado = 'ganhou';
      }
      if (jogadaComputador == 'tesoura') {
        resultado = 'empate';
      }
    }
    
    this.setState({ escolhaUsuario : opcaoEscolhida, escolhaComputador : jogadaComputador, resultado : resultado });


  };


  render() {
    return (
      <View style={styles.container}>
        <Topo />
        <View style={styles.areaCentral}>
          <Text style={styles.legenda}>Escolha a sua jogada</Text>
          <View style={styles.containerBotoes}>
            <View style={styles.wrapBotao}>
              <TouchableOpacity onPress={()=>this.jokenpo('pedra')}>
                <Image style={styles.imageBotao} source={require('./imgs/pedra.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.wrapBotao}>
              <TouchableOpacity onPress={()=>this.jokenpo('papel')}>
                <Image style={styles.imageBotao} source={require('./imgs/papel.png')} />
              </TouchableOpacity>
            </View>
            <View style={styles.wrapBotao}>
              <TouchableOpacity onPress={()=>this.jokenpo('tesoura')}>
                <Image style={styles.imageBotao} source={require('./imgs/tesoura.png')} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.palco}>
          <Palco escolhaComputador={this.state.escolhaComputador} escolhaUsuario={this.state.escolhaUsuario} resultado={this.state.resultado}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  topo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTopo: {
    flex: 1,
    width: 350,
    height: 50,
    resizeMode: 'contain'
  },
  areaCentral: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  legenda: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 25,
  },

  containerBotoes: {
    flexDirection: 'row',
  },
  wrapBotao: {
    padding: 1,
  },
  imageBotao: {
    width: 100,
    height: 100,
  },
  botoes: {
    marginRight: 12,
    color: "#fff",
  },
  palco: {
    flex: 2,
  },
});
