import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sentenceText:'', 
      img: require('./src/biscoito.png'),
    }

    this.ckBreack = this.ckBreack.bind(this);

    this.sentences = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }
  
  ckBreack(){
    let aleatoryNumber = Math.floor(Math.random() * this.sentences.length);

    this.setState({
      sentenceText: ' " ' + this.sentences[aleatoryNumber] + ' "',
      img: require('./src/biscoitoAberto.png')
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Image
        source={this.state.img}
        style={styles.img}
        />

        <Text style={styles.sentenceText}>{this.state.sentenceText}</Text>

        <TouchableOpacity style={styles.button1} onPress={this.ckBreack}>
          <View style={styles.buttonArea}>
            <Text style={styles.ckText}>Open cookie</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  img:{
    width:250,
    height:250
  },
  sentenceText:{
    fontSize:20,
    color:'#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign:'center'
  },
  button1:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  buttonArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ckText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;