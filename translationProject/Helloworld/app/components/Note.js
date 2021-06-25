import React from 'react';
import {Text, View, TouchableOpacity } from 'react-native';
import styles from './style/Note.style';
export default class Note extends React.Component {
  render(){
    return (
        <View key= {this.props.keyval} style={styles.note} >
          <Text style={styles.noteText}>{this.props.val.date}</Text>
          <Text style={styles.noteText}>{this.props.val.note}</Text>
          <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
              <Text style={styles.noteDeleteText}>X</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
