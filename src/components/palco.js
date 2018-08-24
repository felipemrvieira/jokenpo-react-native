import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const papel2 = require('../../imgs/papel2.png');
const pedra2 = require('../../imgs/pedra2.png');
const tesoura2 = require('../../imgs/tesoura2.png');

var jogadaUsuario = '';
var jogadaComputador = '';
var texto = '';

// var vefificaImagem = function(texto){

//     switch (texto) {
//         case 'pedra':
//         return pedra2;
//         break;
//         case 'papel':
//         return papel2;
//         break;
//         case 'tesoura':
//         return tesoura2;
//         break;
//     }
// }

// joadaUsuario = vefificaImagem('pedra');


export default class Palco extends Component {
    

  render() {
    return (
        <View >
        
            <View style={styles.apostas}>
                <View style={styles.apostaContainer}>
                    <Image style={styles.imageJogada} source={pedra2}  />
                    <Text style={styles.welcome}>{this.props.escolhaUsuario}</Text>
                </View>
                <View style={styles.apostaContainer}>
                    <Image style={styles.imageJogada} source={pedra2}  />
                    <Text style={styles.welcome}>{this.props.escolhaComputador}</Text>
                </View>
            </View>

            <Text style={styles.instructions}>Resultado: {this.props.resultado}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 12,
        textAlign: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    apostas: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
    },
    apostaContainer: {
        margin: 10,
    },
    imageJogada: {
        width: 80,
        height: 180,
        resizeMode: 'contain'
    },
  });

